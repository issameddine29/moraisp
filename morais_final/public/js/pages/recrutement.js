/**
 * recrutement.js — Morais Cleaning v3.1
 *
 * CORRECTIONS v3.1 (bugs résolus) :
 *  [FIX 1] response.json() → on lit response.text() car n8n peut retourner du texte brut
 *  [FIX 2] stopDefault sur body SUPPRIMÉ → uniquement sur la dropZone
 *  [FIX 3] Input sr-only : opacity:0 + pointer-events:none via CSS inline (pas position:absolute seul)
 *  [FIX 4] cvErrorMsg : utilisation de style.display uniquement, pas de "hidden"
 *  [FIX 5] Succès déclenché même si response body n'est pas du JSON valide
 */

document.addEventListener('DOMContentLoaded', function () {

    /* ══════════════════════════════════════════
       1. SMOOTH SCROLL
    ══════════════════════════════════════════ */
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', function (e) {
            const id = this.getAttribute('href');
            if (id === '#') return;
            e.preventDefault();
            const target = document.querySelector(id);
            if (target) {
                const hh = document.querySelector('#navbar-container')?.offsetHeight || 100;
                window.scrollTo({ top: target.getBoundingClientRect().top + pageYOffset - hh, behavior: 'smooth' });
            }
        });
    });

    /* ══════════════════════════════════════════
       2. FILTRE OFFRES D'EMPLOI
    ══════════════════════════════════════════ */
    const filterBtns = document.querySelectorAll('.filter-btn');
    const jobCards   = document.querySelectorAll('.job-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            filterBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-pressed', 'false'); });
            this.classList.add('active');
            this.setAttribute('aria-pressed', 'true');
            const filter = this.dataset.filter;
            jobCards.forEach(card => {
                const show = filter === 'all' || card.dataset.category === filter;
                if (show) {
                    card.style.display = 'block';
                    setTimeout(() => { card.style.opacity = '1'; card.style.transform = 'translateY(0)'; }, 80);
                } else {
                    card.style.opacity = '0'; card.style.transform = 'translateY(20px)';
                    setTimeout(() => { card.style.display = 'none'; }, 280);
                }
            });
            screenReader(document.querySelectorAll('.job-card:not([style*="display: none"])').length + " offres affichées");
        });
    });

    /* ══════════════════════════════════════════
       3. FORMULAIRE CANDIDATURE
    ══════════════════════════════════════════ */
    const form      = document.getElementById('applicationForm');
    const submitBtn = document.getElementById('submitApplicationBtn');
    if (!form) return;

    /* DOM */
    const dropZone     = document.getElementById('fileUploadArea');
    const fileInput    = document.getElementById('app-cv');
    const filePreview  = document.getElementById('filePreview');
    const cvErrDiv     = document.getElementById('cvErrorMsg');
    const successBlock = document.getElementById('applicationSuccess');
    const errorBlock   = document.getElementById('applicationError');
    const errorText    = document.getElementById('applicationErrorText');

    /* Constantes validation */
    const VALID_TYPES = [
        'application/pdf',
        'application/msword',
        'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    ];
    const VALID_EXTS = /\.(pdf|doc|docx)$/i;
    const MAX_SIZE   = 5 * 1024 * 1024; // 5 Mo

    /* ── Validation temps réel ── */
    form.querySelectorAll('input[required]:not([type=file]):not([type=checkbox]),select[required],textarea[required]')
        .forEach(f => {
            f.addEventListener('blur',  () => validateField(f));
            f.addEventListener('input', () => validateField(f));
        });

    /* ══════════════════════════════════════════
       DRAG & DROP
       Le clic est géré nativement par <label for="app-cv">
       Aucun listener .click() nécessaire.
    ══════════════════════════════════════════ */
    if (dropZone && fileInput) {

        /* Accessibilité clavier sur le label */
        dropZone.addEventListener('keydown', e => {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                fileInput.click();
            }
        });

        /* [FIX 2] Drag events UNIQUEMENT sur la zone — plus sur document.body */
        ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(ev => {
            dropZone.addEventListener(ev, stopDefault, false);
        });

        /* Effet visuel drag */
        ['dragenter', 'dragover'].forEach(ev =>
            dropZone.addEventListener(ev, () => dropZone.classList.add('drag-over'))
        );
        ['dragleave', 'drop'].forEach(ev =>
            dropZone.addEventListener(ev, e => {
                if (ev === 'dragleave' && dropZone.contains(e.relatedTarget)) return;
                dropZone.classList.remove('drag-over');
            })
        );

        /* Drop → DataTransfer → fileInput.files */
        dropZone.addEventListener('drop', e => {
            stopDefault(e);
            dropZone.classList.remove('drag-over');
            const file = e.dataTransfer?.files?.[0];
            if (!file) return;
            const err = checkFile(file);
            if (err) { showCvErr(err); return; }
            try {
                const dt = new DataTransfer();
                dt.items.add(file);
                fileInput.files = dt.files;
            } catch (_) {
                showCvErr('Glisser-déposer non supporté. Utilisez le bouton « parcourir ».');
                return;
            }
            hideCvErr();
            renderPreview(file);
        });

        /* Sélection via dialog natif */
        fileInput.addEventListener('change', function () {
            const file = this.files?.[0];
            if (!file) return;
            const err = checkFile(file);
            if (err) {
                showCvErr(err);
                this.value = '';
                clearPreview();
                return;
            }
            hideCvErr();
            renderPreview(file);
        });
    }

    /* ══════════════════════════════════════════
       SOUMISSION
    ══════════════════════════════════════════ */
    form.addEventListener('submit', async function (e) {
        e.preventDefault();

        /* 1. Valider champs texte */
        let ok = true;
        form.querySelectorAll(
            'input[required]:not([type=file]):not([type=checkbox]),select[required],textarea[required]'
        ).forEach(f => { if (!validateField(f)) ok = false; });

        /* 2. Valider checkbox privacy */
        const privacy = document.getElementById('app-privacy');
        if (privacy && !privacy.checked) {
            ok = false;
            const wrap = privacy.closest('.checkbox-group');
            let errEl  = wrap?.querySelector('.error-message');
            if (!errEl && wrap) {
                errEl = document.createElement('div');
                errEl.className = 'error-message';
                errEl.style.cssText = 'color:var(--accent);font-size:0.85rem;margin-top:5px;';
                wrap.appendChild(errEl);
            }
            if (errEl) errEl.textContent = 'Vous devez accepter la politique de confidentialité.';
        }

        /* 3. Valider CV */
        const cvFile = fileInput?.files?.[0];
        if (!cvFile) {
            showCvErr("Veuillez joindre votre CV (PDF, DOC ou DOCX) avant d'envoyer.");
            ok = false;
        } else {
            const cvErr = checkFile(cvFile);
            if (cvErr) { showCvErr(cvErr); ok = false; }
        }

        if (!ok) {
            const firstErr = form.querySelector('[aria-invalid="true"]') || cvErrDiv;
            firstErr?.scrollIntoView({ behavior: 'smooth', block: 'center' });
            return;
        }

        /* 4. Désactiver bouton */
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.classList.add('loading');
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours…';
        }
        hideFormError();

        /* 5. Construire FormData — champs à plat, name="cv" pour n8n */
        const fd = new FormData();
        fd.append('nom',       document.getElementById('app-name').value.trim());
        fd.append('email',     document.getElementById('app-email').value.trim());
        fd.append('telephone', document.getElementById('app-phone').value.trim());
        fd.append('poste',     document.getElementById('app-position').value);
        fd.append('motivation',document.getElementById('app-motivation').value.trim());
        fd.append('experience',getExperiences().join(', '));
        fd.append('newsletter',document.getElementById('app-newsletter')?.checked ? 'oui' : 'non');
        fd.append('source',    'recrutement');
        fd.append('page',      window.location.pathname);
        fd.append('timestamp', new Date().toISOString());
        fd.append('cv', cvFile, cvFile.name); /* Champ attendu par n8n */

        /* 6. Envoi
           [FIX 1] On ne parse PAS en JSON — n8n peut répondre en texte brut.
                   On considère le succès dès que HTTP 2xx est reçu. */
        try {
            const res = await fetch('https://n8n.morais-cleaning.com/webhook/recrutement', {
                method: 'POST',
                body:   fd
                /* Pas de Content-Type : le navigateur gère multipart/form-data + boundary */
            });

            /* n8n retourne parfois 200 avec body texte "Workflow got started"
               → on ne parse PAS .json(), on vérifie seulement le statut HTTP */
            if (!res.ok) {
                const bodyText = await res.text().catch(() => '');
                throw new Error('HTTP ' + res.status + (bodyText ? ' — ' + bodyText.slice(0,120) : ''));
            }

            /* ✅ SUCCÈS */
            form.style.display = 'none';
            if (successBlock) {
                successBlock.style.display = 'block';
                successBlock.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

        } catch (err) {
            console.error('[MC] Erreur envoi candidature:', err);
            showFormError('Une erreur est survenue (' + (err.message || 'réseau') + '). Veuillez réessayer ou nous appeler au 0478/95.12.69.');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.classList.remove('loading');
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer ma candidature';
            }
        }
    });

    /* ══════════════════════════════════════════
       4. FAQ
    ══════════════════════════════════════════ */
    document.querySelectorAll('.faq-question').forEach(q => {
        q.addEventListener('click', function () {
            const item   = this.closest('.faq-item');
            const answer = item?.querySelector('.faq-answer');
            if (!answer) return;
            const expanded = this.getAttribute('aria-expanded') === 'true';
            document.querySelectorAll('.faq-item').forEach(i => {
                if (i !== item) {
                    i.querySelector('.faq-question')?.setAttribute('aria-expanded', 'false');
                    i.querySelector('.faq-question')?.classList.remove('active');
                    i.querySelector('.faq-answer')?.classList.remove('active');
                }
            });
            this.setAttribute('aria-expanded', String(!expanded));
            this.classList.toggle('active', !expanded);
            answer.classList.toggle('active', !expanded);
        });
    });

    /* ══════════════════════════════════════════
       5. ANIMATIONS SCROLL
    ══════════════════════════════════════════ */
    const obs = new IntersectionObserver(
        entries => entries.forEach(en => {
            if (en.isIntersecting) { en.target.classList.add('visible'); obs.unobserve(en.target); }
        }),
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    document.querySelectorAll('.fade-in').forEach(el => obs.observe(el));

    /* ══════════════════════════════════════════
       FONCTIONS UTILITAIRES
    ══════════════════════════════════════════ */

    /** Validation d'un champ texte */
    function validateField(f) {
        const v = f.value?.trim() ?? '';
        let ok = true, msg = '';
        f.parentElement.querySelector('.error-message')?.remove();
        if (f.type === 'email' && v && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(v))          { msg = 'Adresse email invalide.';       ok = false; }
        if (f.type === 'tel'   && v && !/^[+]?[\d\s\-\(\)]{10,}$/.test(v.replace(/\s/g,''))) { msg = 'Numéro de téléphone invalide.'; ok = false; }
        if (f.hasAttribute('required') && !v)                                             { msg = 'Ce champ est obligatoire.';    ok = false; }
        if (!ok) {
            f.setAttribute('aria-invalid', 'true');
            const el = document.createElement('div');
            el.className  = 'error-message';
            el.style.cssText = 'color:var(--accent);font-size:0.85rem;margin-top:5px;';
            el.textContent = msg;
            f.parentElement.appendChild(el);
        } else {
            f.removeAttribute('aria-invalid');
        }
        return ok;
    }

    /** Validation du fichier CV */
    function checkFile(file) {
        if (!VALID_EXTS.test(file.name) && !VALID_TYPES.includes(file.type))
            return 'Format non accepté. Utilisez PDF, DOC ou DOCX.';
        if (file.size > MAX_SIZE)
            return 'Fichier trop volumineux (' + (file.size / 1024 / 1024).toFixed(1) + ' Mo). Maximum : 5 Mo.';
        return null;
    }

    /** [FIX 4] Afficher/masquer erreur CV — style.display uniquement, sans attribut "hidden" */
    function showCvErr(msg) {
        if (!cvErrDiv) return;
        cvErrDiv.textContent  = '⚠️ ' + msg;
        cvErrDiv.style.display = 'block';
    }
    function hideCvErr() {
        if (!cvErrDiv) return;
        cvErrDiv.style.display = 'none';
    }

    /** Afficher/masquer bloc erreur d'envoi */
    function showFormError(msg) {
        if (!errorBlock) return;
        if (errorText) errorText.textContent = msg;
        errorBlock.style.display = 'block';
        errorBlock.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
    function hideFormError() {
        if (errorBlock) errorBlock.style.display = 'none';
    }

    /** Prévisualisation du fichier sélectionné */
    function renderPreview(file) {
        if (!filePreview) return;
        const name = file.name.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;');
        const size = (file.size / 1024 / 1024).toFixed(2);
        filePreview.innerHTML =
            '<div style="display:flex;align-items:center;gap:14px;color:white;padding:12px 14px;background:rgba(255,255,255,0.1);border-radius:8px;">'
            + '<i class="fas fa-file-alt" style="font-size:1.3rem;flex-shrink:0;"></i>'
            + '<div style="flex:1;overflow:hidden;">'
            +   '<div style="font-weight:600;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;">' + name + '</div>'
            +   '<div style="font-size:0.78rem;opacity:0.72;">' + size + ' Mo</div>'
            + '</div>'
            + '<button type="button" aria-label="Retirer le fichier"'
            + ' onclick="document.getElementById(\'app-cv\').value=\'\';this.closest(\'[id=filePreview]\').style.display=\'none\';document.getElementById(\'cvErrorMsg\').style.display=\'none\';"'
            + ' style="background:none;border:none;color:white;cursor:pointer;padding:4px 8px;">'
            + '<i class="fas fa-times"></i>'
            + '</button></div>';
        filePreview.style.display = 'block';
        filePreview.hidden = false;
    }
    function clearPreview() {
        if (!filePreview) return;
        filePreview.innerHTML  = '';
        filePreview.style.display = 'none';
        filePreview.hidden = true;
    }

    /** Expériences cochées */
    function getExperiences() {
        return Array.from(document.querySelectorAll('input[name="experience"]:checked'))
                    .map(cb => cb.value);
    }

    /** Stopper les événements drag par défaut — sur la zone seulement */
    function stopDefault(e) {
        e.preventDefault();
        e.stopPropagation();
    }

    /** Annonce pour lecteurs d'écran */
    function screenReader(msg) {
        const el = document.createElement('div');
        el.className = 'sr-only';
        el.setAttribute('aria-live', 'polite');
        el.setAttribute('aria-atomic', 'true');
        el.textContent = msg;
        document.body.appendChild(el);
        setTimeout(() => el.remove(), 1200);
    }

    /* Polyfill Element.closest */
    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            let el = this;
            do { if (el.matches(s)) return el; el = el.parentElement || el.parentNode; }
            while (el && el.nodeType === 1);
            return null;
        };
    }

});
