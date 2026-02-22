/**
 * calculateur-devis-avance.js — Morais Cleaning
 *
 * CORRECTIONS v3 :
 *  - JSON aplati (plat) pour compatibilité n8n + Airtable
 *  - Champs envoyés : nom, email, telephone, societe, adresse, service,
 *    surface, frequence, services_supplementaires, message, estimation_total,
 *    estimation_detail, newsletter, source, timestamp
 *  - Blocs succès/erreur pré-construits dans le HTML (#devisSuccess / #devisError)
 *  - Zéro alert()
 *  - Bouton réactivé en cas d'erreur
 */

/* ─────────────────────────────────────────────
   GRILLE TARIFAIRE — À adapter selon vos tarifs
───────────────────────────────────────────── */
const PRICING_GRID = {
    base_prices: {
        'bureaux':           2.5,
        'residentiel':       3.0,
        'commerciaux':       2.8,
        'copropriete':       2.0,
        'industriel':        4.0,
        'cabinets-medicaux': 4.5,
        'apres-travaux':     5.0,
        'fin-de-bail':       4.0,
        'specialise':        3.5
    },
    specialized: {
        'vitres': { base: 15, per_m2: 3 },
        'tapis':  { base: 20, per_m2: 4 }
    },
    frequency_multipliers: {
        'ponctuel':      1.0,
        'hebdomadaire':  0.85,
        'bi-hebdomadaire': 0.90,
        'mensuel':       0.95,
        'quotidien':     0.80
    },
    options: {
        'desinfection':  0.20,
        'produits-eco':  0.10,
        'urgence':       0.30,
        'weekend':       0.25,
        'nuit':          0.35
    }
};

/* ─────────────────────────────────────────────
   ÉTAT DU CALCULATEUR
───────────────────────────────────────────── */
const CalculatorState = {
    currentStep: 1,
    maxStep: 4,
    data: {
        serviceType:         null,
        surface:             100,
        specializedServices: [],
        frequency:           'ponctuel',
        options:             [],
        urgency:             false,
        schedule:            'jour',
        contact:             {}
    },
    estimation: {
        base:               0,
        specialized:        0,
        frequency_discount: 0,
        options_cost:       0,
        total:              0
    }
};

/* ─────────────────────────────────────────────
   INITIALISATION
───────────────────────────────────────────── */
document.addEventListener('DOMContentLoaded', function () {
    initCalculatorSteps();
    initServiceSelection();
    initSurfaceSlider();
    initFrequencySelection();
    initOptionsCheckboxes();
    initFormSubmission();
    handleURLParameters();
});

/* ─────────────────────────────────────────────
   NAVIGATION ENTRE ÉTAPES
───────────────────────────────────────────── */
function initCalculatorSteps() {
    document.querySelectorAll('.next-step').forEach(btn => {
        btn.addEventListener('click', () => {
            if (validateCurrentStep()) goToStep(parseInt(btn.dataset.next));
        });
    });
    document.querySelectorAll('.prev-step').forEach(btn => {
        btn.addEventListener('click', () => goToStep(parseInt(btn.dataset.prev)));
    });
}

function goToStep(stepNumber) {
    document.querySelectorAll('.step-content').forEach(s => s.classList.remove('active'));
    const target = document.getElementById(`step-${stepNumber}`);
    if (!target) return;
    target.classList.add('active');
    CalculatorState.currentStep = stepNumber;
    updateStepIndicators(stepNumber);
    if (stepNumber === 4) { calculateEstimation(); displayEstimation(); }
    document.getElementById('calculateur')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function updateStepIndicators(current) {
    document.querySelectorAll('.calculator-step').forEach(step => {
        const n = parseInt(step.dataset.step);
        step.classList.toggle('completed', n < current);
        step.classList.toggle('active',    n === current);
        if (n > current) step.classList.remove('active', 'completed');
    });
}

/* ─────────────────────────────────────────────
   VALIDATION ÉTAPE COURANTE
───────────────────────────────────────────── */
function validateCurrentStep() {
    document.querySelectorAll('.step-error-msg').forEach(el => el.remove());

    function stepError(msg, anchorEl) {
        const err = document.createElement('p');
        err.className = 'step-error-msg';
        err.style.cssText = 'color:#e74c3c;background:#fdf0f0;border:1px solid #e74c3c;padding:10px 14px;border-radius:6px;margin-top:12px;font-size:0.9rem;';
        err.textContent = '⚠️ ' + msg;
        if (anchorEl) anchorEl.insertAdjacentElement('afterend', err);
        return false;
    }

    const step = CalculatorState.currentStep;
    if (step === 1 && !CalculatorState.data.serviceType)
        return stepError('Veuillez sélectionner un type de service pour continuer.', document.querySelector('#step-1 .calculator-nav'));
    if (step === 2 && !CalculatorState.data.surface)
        return stepError('Veuillez indiquer la surface.', document.querySelector('#step-2 .calculator-nav'));
    if (step === 3 && !CalculatorState.data.frequency)
        return stepError('Veuillez sélectionner une fréquence pour continuer.', document.querySelector('#step-3 .calculator-nav'));

    return true;
}

/* ─────────────────────────────────────────────
   SÉLECTIONS ÉTAPES 1, 2, 3
───────────────────────────────────────────── */
function initServiceSelection() {
    const opts = document.querySelectorAll('.service-option');
    opts.forEach(o => o.addEventListener('click', () => {
        opts.forEach(x => x.classList.remove('selected'));
        o.classList.add('selected');
        CalculatorState.data.serviceType = o.dataset.service;
    }));
}

function initSurfaceSlider() {
    const slider = document.getElementById('surface-area');
    const display = document.getElementById('surface-value');
    if (slider && display) {
        slider.addEventListener('input', e => {
            CalculatorState.data.surface = parseInt(e.target.value);
            display.textContent = e.target.value + ' m²';
        });
    }
}

function initFrequencySelection() {
    const opts = document.querySelectorAll('#step-3 [data-frequency]');
    opts.forEach(o => o.addEventListener('click', () => {
        opts.forEach(x => x.classList.remove('selected'));
        o.classList.add('selected');
        CalculatorState.data.frequency = o.dataset.frequency;
    }));
    // Sélection par défaut
    const def = document.querySelector('#step-3 [data-frequency="ponctuel"]');
    if (def) { def.classList.add('selected'); CalculatorState.data.frequency = 'ponctuel'; }
}

function initOptionsCheckboxes() {
    document.querySelectorAll('input[name="options"]').forEach(cb => {
        cb.addEventListener('change', e => {
            const v = e.target.value;
            if (e.target.checked) {
                if (!CalculatorState.data.specializedServices.includes(v))
                    CalculatorState.data.specializedServices.push(v);
            } else {
                CalculatorState.data.specializedServices = CalculatorState.data.specializedServices.filter(s => s !== v);
            }
        });
    });
}

/* ─────────────────────────────────────────────
   CALCUL ESTIMATION
───────────────────────────────────────────── */
function calculateEstimation() {
    const { serviceType, surface, specializedServices, frequency, options } = CalculatorState.data;
    const basePrice = (PRICING_GRID.base_prices[serviceType] || 2.5) * surface;

    let specializedCost = 0;
    specializedServices.forEach(svc => {
        if (svc === 'tapis')       specializedCost += PRICING_GRID.specialized.tapis.base + PRICING_GRID.specialized.tapis.per_m2 * (surface * 0.5);
        if (svc === 'vitres')      specializedCost += PRICING_GRID.specialized.vitres.base + PRICING_GRID.specialized.vitres.per_m2 * (surface * 0.3);
        if (svc === 'desinfection') specializedCost += basePrice * 0.15;
        if (svc === 'sol')          specializedCost += basePrice * 0.10;
    });

    const multiplier       = PRICING_GRID.frequency_multipliers[frequency] || 1.0;
    const subtotal         = basePrice + specializedCost;
    const frequencyDiscount = subtotal * (1 - multiplier);
    let optionsCost = 0;
    (options || []).forEach(opt => {
        if (PRICING_GRID.options[opt]) optionsCost += subtotal * PRICING_GRID.options[opt];
    });

    CalculatorState.estimation = {
        base:               basePrice,
        specialized:        specializedCost,
        frequency_discount: frequencyDiscount,
        options_cost:       optionsCost,
        total:              Math.round((subtotal - frequencyDiscount) + optionsCost)
    };
}

/* ─────────────────────────────────────────────
   AFFICHAGE ESTIMATION (ÉTAPE 4)
───────────────────────────────────────────── */
function displayEstimation() {
    const el = document.getElementById('price-estimation');
    const det = document.getElementById('price-details');
    if (!el) return;

    const { base, specialized, frequency_discount, options_cost, total } = CalculatorState.estimation;

    el.innerHTML = `<div class="price-badge"><span class="price-value">${total} €</span><span class="price-note">*Estimation indicative — devis précis sous 24h</span></div>`;

    if (det) {
        let html = `<div class="price-breakdown"><h4>Détail de l'estimation</h4>
            <div class="breakdown-item"><span>Prix de base (${CalculatorState.data.surface} m²)</span><span>${Math.round(base)} €</span></div>`;
        if (specialized > 0)         html += `<div class="breakdown-item"><span>Services spécialisés</span><span>+ ${Math.round(specialized)} €</span></div>`;
        if (frequency_discount > 0)  html += `<div class="breakdown-item discount"><span>Remise fréquence (${CalculatorState.data.frequency})</span><span>- ${Math.round(frequency_discount)} €</span></div>`;
        if (options_cost > 0)        html += `<div class="breakdown-item"><span>Options additionnelles</span><span>+ ${Math.round(options_cost)} €</span></div>`;
        html += `<div class="breakdown-total"><span>Total estimé</span><span>${total} €</span></div></div>`;
        det.innerHTML = html;
    }
}

/* ─────────────────────────────────────────────
   SOUMISSION — JSON APLATI POUR N8N / AIRTABLE
───────────────────────────────────────────── */
function initFormSubmission() {
    const form = document.getElementById('quoteForm');
    if (!form) return;

    form.addEventListener('submit', async e => {
        e.preventDefault();

        const submitBtn = document.getElementById('submitQuoteBtn');
        if (submitBtn) {
            submitBtn.disabled = true;
            submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours…';
        }

        hideDevisError();

        /* ── Construire le payload APLATI pour n8n / Airtable ── */
        const est = CalculatorState.estimation;
        const flatPayload = {
            /* Coordonnées */
            nom:          document.getElementById('quote-name')?.value?.trim()    || '',
            email:        document.getElementById('quote-email')?.value?.trim()   || '',
            telephone:    document.getElementById('quote-phone')?.value?.trim()   || '',
            societe:      document.getElementById('quote-company')?.value?.trim() || '',
            adresse:      document.getElementById('quote-address')?.value?.trim() || '',
            message:      document.getElementById('quote-message')?.value?.trim() || '',
            newsletter:   document.getElementById('quote-newsletter')?.checked ? 'oui' : 'non',

            /* Demande */
            service:      CalculatorState.data.serviceType || '',
            surface:      CalculatorState.data.surface,
            frequence:    CalculatorState.data.frequency || '',
            services_supplementaires: (CalculatorState.data.specializedServices || []).join(', '),

            /* Estimation */
            estimation_total:  est.total,
            estimation_detail: JSON.stringify({
                base:               Math.round(est.base),
                specialise:         Math.round(est.specialized),
                remise_frequence:   Math.round(est.frequency_discount),
                options:            Math.round(est.options_cost)
            }),

            /* Méta */
            source:    'calculateur-devis-avance',
            page:      window.location.pathname,
            timestamp: new Date().toISOString()
        };

        try {
            const response = await fetch('https://n8n.morais-cleaning.com/webhook/devis', {
                method:  'POST',
                headers: { 'Content-Type': 'application/json' },
                body:    JSON.stringify(flatPayload)
            });

            if (!response.ok) throw new Error('HTTP ' + response.status);

            /* ── SUCCÈS ── */
            const calculatorContainer = document.querySelector('.calculator-container');
            if (calculatorContainer) calculatorContainer.style.display = 'none';

            const successDiv = document.getElementById('devisSuccess');
            if (successDiv) {
                successDiv.style.display = 'block';
                successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
            }

        } catch (err) {
            console.error('[MC] Erreur envoi devis:', err);
            showDevisError('Une erreur est survenue (' + (err.message || 'réseau') + '). Veuillez réessayer ou nous appeler au <strong>0478/95.12.69</strong>.');
            if (submitBtn) {
                submitBtn.disabled = false;
                submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer ma demande';
            }
        }
    });
}

function showDevisError(html) {
    const err = document.getElementById('devisError');
    const txt = document.getElementById('devisErrorText');
    if (!err) return;
    if (txt) txt.innerHTML = html;
    err.style.display = 'block';
    err.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

function hideDevisError() {
    const err = document.getElementById('devisError');
    if (err) err.style.display = 'none';
}

/* ─────────────────────────────────────────────
   PARAMÈTRES URL
───────────────────────────────────────────── */
function handleURLParameters() {
    const params = new URLSearchParams(window.location.search);
    const service = params.get('service');
    if (service) {
        CalculatorState.data.serviceType = service;
        const opt = document.querySelector(`.service-option[data-service="${service}"]`);
        if (opt) opt.classList.add('selected');
    }
    const surface = params.get('surface');
    if (surface) {
        CalculatorState.data.surface = parseInt(surface);
        const slider  = document.getElementById('surface-area');
        const display = document.getElementById('surface-value');
        if (slider)  slider.value = surface;
        if (display) display.textContent = surface + ' m²';
    }
}

/* ─────────────────────────────────────────────
   EXPORT
───────────────────────────────────────────── */
window.QuoteCalculator = { goToStep, calculateEstimation, displayEstimation };
