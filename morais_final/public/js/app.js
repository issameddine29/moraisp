// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

/**
* APP.JS - Orchestrateur Principal - Morais Cleaning
* Version avec TRADUCTION MANUELLE (sans data-i18n ni JSON)
*
* Séquence d'initialisation :
* 1. Injection navbar
* 2. Injection footer
* 3. Init composants (navbar, FAQ, boutons)
* 4. Chargement traduction manuelle
* 5. Appel window.applyTranslations()
*/

(function() {
    'use strict';

    // ============================================================
    // CONFIGURATION
    // ============================================================
    const CONFIG = {
        navbarContainer: 'navbar-container',
        footerContainer: 'footer-container',
        defaultLang: 'fr',
        supportedLangs: ['fr', 'en', 'nl'],
        storageKey: 'lang'
    };

    // ============================================================
    // NAVBAR TRANSLATIONS (MANUELLES, CENTRALISÉES)
// ============================================================
// Objectif : traduire UNIQUEMENT la navbar (menu + mega-menu + CTA)
// sans dépendre des scripts de traduction page par page.
const NAVBAR_TRANSLATIONS = {
    en: {
        "nav.home": "Home",
        "nav.about": "About",
        "nav.services": "Services",
        "nav.achievements": "Projects",
        "nav.recruitment": "Careers",
        "nav.contact": "Contact",
        "nav.whatsapp": "WhatsApp",
        "nav.menu": "Menu",
        "cta.quote": "Request a quote",

        "nav.services.professional.title": "Business",
        "nav.services.professional.office.title": "Offices",
        "nav.services.professional.office.desc": "Professional cleaning",
        "nav.services.professional.commercial.title": "Retail",
        "nav.services.professional.commercial.desc": "Shops & stores",
        "nav.services.professional.industrial.title": "Industrial",
        "nav.services.professional.industrial.desc": "Factories & warehouses",
        "nav.services.professional.medical.title": "Medical",
        "nav.services.professional.medical.desc": "Clinics & practices",

        "nav.services.residential.title": "Residential",
        "nav.services.residential.home.title": "Home",
        "nav.services.residential.home.desc": "House & apartment",
        "nav.services.residential.copro.title": "Condominium",
        "nav.services.residential.copro.desc": "Common areas",
        "nav.services.residential.endlease.title": "End of lease",
        "nav.services.residential.endlease.desc": "Impeccable move-out",
        "nav.services.residential.concierge.title": "Concierge",
        "nav.services.residential.concierge.desc": "Regular service",

        "nav.services.specialized.title": "Specialized",
        "nav.services.specialized.windows.title": "Windows",
        "nav.services.specialized.windows.desc": "Crystal clear finish",
        "nav.services.specialized.postconstruction.title": "Post-construction",
        "nav.services.specialized.postconstruction.desc": "Clean worksite",
        "nav.services.specialized.carpets.title": "Carpets",
        "nav.services.specialized.carpets.desc": "Deep cleaning",
        "nav.services.specialized.sofas.title": "Sofas",
        "nav.services.specialized.sofas.desc": "Fabric & leather",
        "nav.services.specialized.parking.title": "Parking",
        "nav.services.specialized.parking.desc": "Areas & garages"
    },
    nl: {
        "nav.home": "Start",
        "nav.about": "Over ons",
        "nav.services": "Diensten",
        "nav.achievements": "Realisaties",
        "nav.recruitment": "Vacatures",
        "nav.contact": "Contact",
        "nav.whatsapp": "WhatsApp",
        "nav.menu": "Menu",
        "cta.quote": "Offerte aanvragen",

        "nav.services.professional.title": "Zakelijk",
        "nav.services.professional.office.title": "Kantoren",
        "nav.services.professional.office.desc": "Professionele reiniging",
        "nav.services.professional.commercial.title": "Handel",
        "nav.services.professional.commercial.desc": "Winkels & boetieks",
        "nav.services.professional.industrial.title": "Industrieel",
        "nav.services.professional.industrial.desc": "Fabrieken & magazijnen",
        "nav.services.professional.medical.title": "Medisch",
        "nav.services.professional.medical.desc": "Praktijken & klinieken",

        "nav.services.residential.title": "Wonen",
        "nav.services.residential.home.title": "Woning",
        "nav.services.residential.home.desc": "Huis & appartement",
        "nav.services.residential.copro.title": "Mede-eigendom",
        "nav.services.residential.copro.desc": "Gemeenschappelijke delen",
        "nav.services.residential.endlease.title": "Einde huur",
        "nav.services.residential.endlease.desc": "Perfecte oplevering",
        "nav.services.residential.concierge.title": "Conciërge",
        "nav.services.residential.concierge.desc": "Regelmatige service",

        "nav.services.specialized.title": "Specialistisch",
        "nav.services.specialized.windows.title": "Ramen",
        "nav.services.specialized.windows.desc": "Perfect transparant",
        "nav.services.specialized.postconstruction.title": "Na werken",
        "nav.services.specialized.postconstruction.desc": "Schone werf",
        "nav.services.specialized.carpets.title": "Tapijten",
        "nav.services.specialized.carpets.desc": "Dieptereiniging",
        "nav.services.specialized.sofas.title": "Zetels",
        "nav.services.specialized.sofas.desc": "Stof & leer",
        "nav.services.specialized.parking.title": "Parkings",
        "nav.services.specialized.parking.desc": "Zones & garages"
    }
};

function applyNavbarTranslations(lang) {
    // FR = texte déjà correct dans le HTML
    if (!lang || lang === 'fr') return;

    const dict = NAVBAR_TRANSLATIONS[lang];
    if (!dict) return;

    // 1) Text nodes
    document.querySelectorAll('[data-i18n]').forEach(el => {
        const key = el.getAttribute('data-i18n');
        const value = dict[key];
        if (typeof value === 'string' && value.length) {
            el.textContent = value;
        }
    });

    // 2) Attributes
    const attrMap = [
        { attr: 'title', dataAttr: 'data-i18n-title' },
        { attr: 'aria-label', dataAttr: 'data-i18n-aria-label' }
];

attrMap.forEach(({attr, dataAttr}) => {
    document.querySelectorAll('[' + dataAttr + ']').forEach(el => {
        const key = el.getAttribute(dataAttr);
        const value = dict[key];
        if (typeof value === 'string' && value.length) {
            el.setAttribute(attr, value);
        }
    });
});
}


// ============================================================
// UTILITIES
// ============================================================

/**
* Détermine le préfixe correct pour accéder au dossier /public
* (fonctionne même si une page est dans un sous-dossier).
*/
function getBasePath() {
    // 1) Si app.js est chargé, on peut déduire le chemin via son <script src>
    const script = document.querySelector('script[src*="public/js/app.js"], script[src*="/public/js/app.js"]');
    if (script && script.getAttribute('src')) {
        const src = script.getAttribute('src');
        const idx = src.indexOf('/public/js/app.js');
        if (idx !== -1) {
            // Exemple: /mon-site/public/js/app.js => base = /mon-site/public/
            return src.slice(0, idx) + '/public/';
        }
    }

    // 2) Fallback : déduction par profondeur (ancien comportement)
const path = window.location.pathname;
if (path.includes('/public/html/') || path.includes('/public/pages/') || path.includes('/public/legal/')) {
    return '../';
}
return './public/';
}

/**
* Assure la présence des conteneurs d'injection sur TOUTES les pages
* (évite "navbar pas sur toutes les pages" si un HTML a oublié les div).
*/
function ensureLayoutContainers() {
    if (!document.getElementById(CONFIG.navbarContainer)) {
        const navHolder = document.createElement('div');
        navHolder.id = CONFIG.navbarContainer;
        document.body.insertBefore(navHolder, document.body.firstChild);
    }

    if (!document.getElementById(CONFIG.footerContainer)) {
        const footerHolder = document.createElement('div');
        footerHolder.id = CONFIG.footerContainer;
        document.body.appendChild(footerHolder);
    }
}

/**
* Détecte la clé de la page actuelle pour la traduction
*/
function getPageKey() {
    const path = window.location.pathname;
    let filename = path.split('/').pop().replace('.html', '');

    // Cas spéciaux
    if (filename === '' || filename === 'index') {
        return 'index';
    }

    if (filename === '404') {
        return '404';
    }

    // Pages services : nettoyage-bureaux, industriel, etc.
    // Pages : contact, recrutement, faq
    // Légal : mentions-legales, etc.
    return filename;
}

/**
* Récupère la langue sauvegardée
*/
function getSavedLang() {
    try {
        return localStorage.getItem(CONFIG.storageKey) || CONFIG.defaultLang;
    } catch (e) {
        // console.warn('localStorage non disponible:', e);
        return CONFIG.defaultLang;
    }
}

/**
* Sauvegarde la langue
*/
function saveLang(lang) {
    try {
        localStorage.setItem(CONFIG.storageKey, lang);
    } catch (e) {
        // console.warn('Impossible de sauvegarder la langue:', e);
    }
}

// ============================================================
// ÉTAPE 1 : INJECTION NAVBAR
// ============================================================

async function loadNavbar(basePath) {
    const container = document.getElementById(CONFIG.navbarContainer);

    if (!container) {
        // console.warn('⚠️ navbar-container non trouvé');
        return false;
    }

    if (container.hasAttribute('data-loaded')) {
        return true;
    }

    try {
        const response = await fetch(basePath + 'components/navbar.html');

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const html = await response.text();
        container.innerHTML = html;
        container.setAttribute('data-loaded', 'true');

        // CORRECTION: Fixer les liens selon la profondeur de la page
        fixNavbarLinks();

        // console.log('Navbar chargée');
        return true;

    } catch (error) {
        // console.error('❌ Erreur chargement navbar:', error);
        container.innerHTML = '<nav style="background:#2C5AA0;padding:1rem;color:white;text-align:center"><strong>Morais Cleaning</strong></nav>';
        return false;
    }
}

/**
* Corrige tous les liens de la navbar selon la profondeur de la page actuelle
*/
function fixNavbarLinks() {
    const path = window.location.pathname;
    let prefix = '';

    // Déterminer le préfixe selon la profondeur
    if (path.includes('/public/html/') || path.includes('/public/pages/') || path.includes('/public/legal/')) {
        // Pages dans public/xxx/ → remonter de 2 niveaux
        prefix = '../../';
    } else if (path.includes('/public/')) {
        // Pages dans public/ → remonter de 1 niveau
        prefix = '../';
    } else {
        // Pages à la racine (index.html, 404.html)
    prefix = './';
}

// Corriger tous les liens href qui commencent par "/"
const links = document.querySelectorAll('.mc-navbar a[href^="/"]');
links.forEach(link => {
    const href = link.getAttribute('href');
    // Enlever le "/" initial et ajouter le préfixe
    const newHref = prefix + href.substring(1);
    link.setAttribute('href', newHref);
});

// console.log(`🔗 Liens navbar corrigés avec préfixe: ${prefix}`);
}

/**
* Corrige tous les liens du footer selon la profondeur de la page actuelle
*/
function fixFooterLinks() {
    const path = window.location.pathname;
    let prefix = '';

    // Déterminer le préfixe selon la profondeur
    if (path.includes('/public/html/') || path.includes('/public/pages/') || path.includes('/public/legal/')) {
        // Pages dans public/xxx/ → remonter de 2 niveaux
        prefix = '../../';
    } else if (path.includes('/public/')) {
        // Pages dans public/ → remonter de 1 niveau
        prefix = '../';
    } else {
        // Pages à la racine (index.html, 404.html)
        prefix = './';
    }

    // Corriger tous les liens href qui commencent par "/" dans le footer
    const footerLinks = document.querySelectorAll('footer a[href^="/"], .mc-footer a[href^="/"]');
    footerLinks.forEach(link => {
        const href = link.getAttribute('href');
        
        // Ne pas toucher les liens externes
        if (href.startsWith('mailto:') || href.startsWith('tel:') || 
            href.startsWith('http://') || href.startsWith('https://') || 
            href.includes('wa.me')) {
            return;
        }
        
        // Enlever le "/" initial et ajouter le préfixe
        const newHref = prefix + href.substring(1);
        link.setAttribute('href', newHref);
    });

    // console.log(`🔗 Liens footer corrigés avec préfixe: ${prefix}`);
}

// ============================================================
// ÉTAPE 2 : INJECTION FOOTER
// ============================================================

async function loadFooter(basePath) {
    const container = document.getElementById(CONFIG.footerContainer);

    if (!container) {
        // console.warn('⚠️ footer-container non trouvé');
        return false;
    }

    if (container.hasAttribute('data-loaded')) {
        return true;
    }

    try {
        const response = await fetch(basePath + 'components/footer.html');

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        const html = await response.text();
        container.innerHTML = html;
        container.setAttribute('data-loaded', 'true');

        // Corriger les liens du footer
        fixFooterLinks();

        // console.log('Footer chargé');
        return true;

    } catch (error) {
        // console.error('❌ Erreur chargement footer:', error);
        container.innerHTML = '<footer style="background:#2C3E50;color:white;padding:2rem;text-align:center"><p>&copy; 2025 Morais Cleaning</p></footer>';
        return false;
    }
}

// ============================================================
// ÉTAPE 3 : INITIALISATION COMPOSANTS NAVBAR
// ============================================================

function initNavbar() {
    // Burger menu mobile
    const burger = document.querySelector('.mc-burger, #mc-burger, #mc-burger-btn');
    const navMenu = document.querySelector('.mc-navbar-menu, #mc-navbar-menu');
    const overlay = document.querySelector('.mc-navbar-overlay, #mc-navbar-overlay');

    // Fonction helper pour fermer le menu mobile
    function closeMenu() {
        if (navMenu) navMenu.classList.remove('open');
        if (burger) {
            burger.classList.remove('active');
            burger.setAttribute('aria-expanded', 'false');
        }
        document.body.style.overflow = '';
        if (overlay) overlay.classList.remove('active');

        // Fermer aussi tous les dropdowns ouverts
        document.querySelectorAll('.mc-has-dropdown.open').forEach(item => {
            item.classList.remove('open');
        });
    }

    // ===== BURGER TOGGLE =====
    if (burger && navMenu) {
        burger.addEventListener('click', (e) => {
            e.stopPropagation();
            const isOpen = navMenu.classList.toggle('open');
            burger.classList.toggle('active');
            burger.setAttribute('aria-expanded', isOpen);
            document.body.style.overflow = isOpen ? 'hidden' : '';

            if (overlay) {
                overlay.classList.toggle('active', isOpen);
            }
        });

        // Fermer au clic sur un lien de navigation (pas dans la mini-navbar)
    const navLinks = navMenu.querySelectorAll('.mc-navbar-links > li > a:not(.mc-dropdown-trigger)');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            closeMenu();
        });
    });

    // Fermer au clic sur overlay
    if (overlay) {
        overlay.addEventListener('click', () => {
            closeMenu();
        });
    }

    // Fermer avec ESC
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && navMenu.classList.contains('open')) {
            closeMenu();
        }
    });
}

// ===== DROPDOWN SERVICES =====
const dropdownItems = document.querySelectorAll('.mc-has-dropdown');

dropdownItems.forEach(item => {
    const trigger = item.querySelector('.mc-dropdown-trigger');

    if (!trigger) return;

    // ===== CLICK SUR LE TRIGGER (Mobile + Desktop) =====
    trigger.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation(); // CRITIQUE: empêche la fermeture immédiate

        const isCurrentlyOpen = item.classList.contains('open');

        // Fermer les autres dropdowns
        dropdownItems.forEach(otherItem => {
            if (otherItem !== item) {
                otherItem.classList.remove('open');
                const otherTrigger = otherItem.querySelector('.mc-dropdown-trigger');
                if (otherTrigger) {
                    otherTrigger.setAttribute('aria-expanded', 'false');
                }
            }
        });

        // Toggle le dropdown actuel
        if (isCurrentlyOpen) {
            item.classList.remove('open');
            trigger.setAttribute('aria-expanded', 'false');
        } else {
            item.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        }
    });

    // ===== HOVER DESKTOP UNIQUEMENT (≥ 993px) =====
    if (window.innerWidth > 992) {
        item.addEventListener('mouseenter', () => {
            item.classList.add('open');
            trigger.setAttribute('aria-expanded', 'true');
        });

        item.addEventListener('mouseleave', () => {
            item.classList.remove('open');
            trigger.setAttribute('aria-expanded', 'false');
        });
    }
});

// ===== CLICK SUR LES LIENS DE LA MINI-NAVBAR MOBILE =====
// CRITIQUE: Fermer le menu ET le dropdown après sélection d'un service
const mobileSubmenuLinks = document.querySelectorAll('.mc-mobile-submenu a');
mobileSubmenuLinks.forEach(link => {
    link.addEventListener('click', () => {
        // Fermer le dropdown parent
        const parentDropdown = link.closest('.mc-has-dropdown');
        if (parentDropdown) {
            parentDropdown.classList.remove('open');
        }

        // Fermer le menu mobile
        closeMenu();
    });
});

// ===== FERMER LES DROPDOWNS AU CLICK EXTÉRIEUR (Desktop) =====
document.addEventListener('click', (e) => {
    // Ne rien faire si on est en mobile (menu off-canvas)
if (window.innerWidth <= 992 && navMenu && navMenu.classList.contains('open')) {
    return;
}

// Si le clic n'est pas sur un dropdown ou son trigger
const isClickInsideDropdown = e.target.closest('.mc-has-dropdown');
if (!isClickInsideDropdown) {
    dropdownItems.forEach(item => {
        item.classList.remove('open');
        const trigger = item.querySelector('.mc-dropdown-trigger');
        if (trigger) {
            trigger.setAttribute('aria-expanded', 'false');
        }
    });
}
});

// console.log('Navbar initialisée (mobile optimisé)');
}

// ============================================================
// DROPDOWN LANGUE + RELOAD
// ============================================================

function initLanguageDropdown() {
    const langTrigger = document.querySelector('.mc-lang-trigger');
    const langMenu = document.querySelector('.mc-lang-menu');
    const langDropdown = document.querySelector('.mc-lang-dropdown');

    if (!langTrigger || !langMenu) {
        return;
    }

    // Toggle dropdown
    langTrigger.addEventListener('click', (e) => {
        e.stopPropagation();
        langDropdown.classList.toggle('open');
    });

    // Fermer au clic extérieur
    document.addEventListener('click', () => {
        langDropdown.classList.remove('open');
    });

    // Clic sur une langue
    const langButtons = langMenu.querySelectorAll('button[data-lang]');
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const newLang = btn.getAttribute('data-lang');

            if (CONFIG.supportedLangs.includes(newLang)) {
                saveLang(newLang);
                window.location.reload();
            }
        });
    });

    // Marquer langue active
    const currentLang = getSavedLang();
    langButtons.forEach(btn => {
        if (btn.getAttribute('data-lang') === currentLang) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });

    // Mettre à jour le texte du trigger
    const langCurrent = document.querySelector('.mc-lang-current');
    if (langCurrent) {
        langCurrent.textContent = currentLang.toUpperCase();
    }

    // console.log('Dropdown langue initialisé');
}

// ============================================================
// FOOTER (année + back to top)
// ============================================================

function initFooter() {
    // Année automatique
    const yearSpan = document.getElementById('current-year');
    if (yearSpan) {
        yearSpan.textContent = new Date().getFullYear();
    }

    // Back to top
    const backToTopBtn = document.getElementById('mc-back-to-top');

    if (backToTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                backToTopBtn.classList.add('visible');
            } else {
                backToTopBtn.classList.remove('visible');
            }
        });

        backToTopBtn.addEventListener('click', () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        });
    }

    // console.log('Footer initialisé');
}

// ============================================================
// FAQ ACCORDION (FAULT-TOLERANT)
// ============================================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (!faqItems.length) {
        // console.log('ℹ️  Aucune FAQ sur cette page');
        return;
    }

    faqItems.forEach((item, index) => {
        const question = item.querySelector('.faq-question');
        const answer = item.querySelector('.faq-answer');

        if (!question || !answer) {
            // console.warn(`⚠️  FAQ ${index + 1} : élément manquant (question ou answer)`);
            return;
        }

        // Accessibilité
        question.setAttribute('aria-expanded', 'false');

        // Sécurité : s'assure que tout est fermé au départ
        answer.style.maxHeight = '0px';
        question.classList.remove('active');

        question.addEventListener('click', function(e) {
            e.preventDefault();

            const isOpen = question.classList.toggle('active');

            // Fermer les autres (comportement accordion)
        faqItems.forEach(otherItem => {
            if (otherItem === item) return;

            const otherQuestion = otherItem.querySelector('.faq-question');
            const otherAnswer = otherItem.querySelector('.faq-answer');

            if (!otherQuestion || !otherAnswer) return;

            otherQuestion.classList.remove('active');
            otherQuestion.setAttribute('aria-expanded', 'false');
            otherAnswer.style.maxHeight = '0px';
        });

        // Ouvrir/fermer le courant avec animation
        question.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
        answer.style.maxHeight = isOpen ? (answer.scrollHeight + 'px') : '0px';

        // console.log(`🖱️  FAQ ${index + 1}: ${isOpen ? 'ouverte' : 'fermée'}`);
    });
});

// console.log(`FAQ initialisée (${faqItems.length} items) - compatible services.css`);
}

// ============================================================
// BOUTONS CTA "DEVIS" (FAULT-TOLERANT)
// ============================================================

function initDevisButtons() {
    const devisButtons = document.querySelectorAll('.devis-btn, .btn-devis, [data-action="devis"]');

    if (devisButtons.length === 0) {
        return;
    }

    devisButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // Si on est sur index ET que #devis-rapide existe
            if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
                const devisSection = document.getElementById('devis-rapide');
                if (devisSection) {
                    devisSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return;
                }
            }

            // Sinon, rediriger
            window.location.href = '/index.html#devis-rapide';
        });
    });

    // console.log(`Boutons devis initialisés (${devisButtons.length})`);
}

// ============================================================
// BOUTONS CTA "CONTACT" (FAULT-TOLERANT)
// ============================================================

function initContactButtons() {
    const contactButtons = document.querySelectorAll('.contact-btn, .btn-contact, [data-action="contact"]');

    if (contactButtons.length === 0) {
        return;
    }

    contactButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();
            window.location.href = '/public/pages/contact.html';
        });
    });

    // console.log(`Boutons contact initialisés (${contactButtons.length})`);
}

// ============================================================
// BOUTONS "SAVOIR PLUS" SUR INDEX (FAULT-TOLERANT)
// ============================================================

function initSavoirPlusButtons() {
    const savoirPlusBtns = document.querySelectorAll('.savoir-plus-btn');

    if (savoirPlusBtns.length === 0) {
        return;
    }

    // CORRIGÉ : Mapping data-service → fichier HTML avec chemins CORRECTS
    const basePath = getBasePath();

    // basePath retourne:
    // - './public/' depuis index.html
    // - '../' depuis /public/html/
    // Donc on ajoute juste 'html/...' (sans 'public/' devant)

const serviceMapping = {
    // Pages existantes dans /public/html/
    'bureaux': `${basePath}html/nettoyage-bureaux.html`,
    'copro': `${basePath}html/copropriete.html`,
    'conciergerie': `${basePath}html/conciergerie.html`,
    'industriel': `${basePath}html/industriel.html`,
    'medicaux': `${basePath}html/cabinets-medicaux.html`,
    'maison': `${basePath}html/maison-appartement.html`,
    'vitres': `${basePath}html/nettoyage-vitres.html`,
    'tapis': `${basePath}html/tapis-moquettes.html`,
    'canapes': `${basePath}html/canapes-fauteuils.html`,
    'parkings': `${basePath}html/parkings-garages.html`,

    // ALIAS pour matcher les data-service de l'index
    'bail': `${basePath}html/fin-de-bail.html`,
    'travaux': `${basePath}html/apres-travaux.html`,
    'commerciaux': `${basePath}html/locaux-commerciaux.html`,

    // Services sans page → rediriger vers Contact avec paramètre
    'airbnb': `${basePath}pages/contact.html?service=airbnb`,
    'demenagement': `${basePath}pages/contact.html?service=demenagement`
};

savoirPlusBtns.forEach(btn => {
    btn.addEventListener('click', (e) => {
        e.preventDefault();

        const service = btn.getAttribute('data-service');
        const url = serviceMapping[service];

        if (url) {
            // console.log(`📍 Redirection vers: ${service} → ${url}`);
            window.location.href = url;
        } else {
            // console.warn(`⚠️  [Services] data-service non reconnu: "${service}"`);
            // console.warn('Services disponibles:', Object.keys(serviceMapping).join(', '));
        }
    });
});

// console.log(`Boutons "Savoir plus" initialisés (${savoirPlusBtns.length} boutons)`);
}

// ============================================================
// CATEGORIES SERVICES SUR INDEX (FAULT-TOLERANT)
// ============================================================

function initServiceCategories() {
    const categoryBtns = document.querySelectorAll('.category-btn[data-category]');
    const serviceCategories = document.querySelectorAll('.service-category[data-category]');

    if (categoryBtns.length === 0 || serviceCategories.length === 0) {
        return;
    }

    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');

            // Activer le bouton
            categoryBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Afficher la catégorie correspondante
            serviceCategories.forEach(cat => {
                if (cat.getAttribute('data-category') === category) {
                    cat.classList.add('active');
                } else {
                    cat.classList.remove('active');
                }
            });
        });
    });

    // console.log(`Catégories services initialisées`);
}

// ============================================================
// RÉALISATIONS (FILTRES + RECHERCHE + "TOUTES") - FAULT-TOLERANT
// ============================================================

function initRealisations() {
    const categoryBtns = document.querySelectorAll('.real-category-btn[data-category]');
    const categoryBlocks = document.querySelectorAll('.realisation-category[data-category]');
    const searchInput = document.getElementById('search-realisations');
    const allContainer = document.getElementById('all-realisations');

    if (categoryBtns.length === 0 || categoryBlocks.length === 0) {
        return; // Pas de section réalisations sur cette page
    }

    function setActiveCategory(category) {
        // Boutons
        categoryBtns.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-category') === category);
        });

        // Blocs
        categoryBlocks.forEach(block => {
            block.classList.toggle('active', block.getAttribute('data-category') === category);
        });

        // Catégorie "all" : remplir dynamiquement
        if (category === 'all' && allContainer) {
            allContainer.innerHTML = '';
            const sourceItems = document.querySelectorAll(
                '.realisation-category[data-category]:not([data-category="all"]) .realisation-item'
            );
            sourceItems.forEach(item => {
                const clone = item.cloneNode(true);
                // Nettoyage : on évite de garder des styles display appliqués par une recherche
                clone.style.display = '';
                allContainer.appendChild(clone);
            });
        }

        // Reset recherche quand on change de catégorie
        if (searchInput) {
            searchInput.value = '';
            applySearchFilter('');
        }
    }

    function getActiveBlock() {
        return document.querySelector('.realisation-category.active');
    }

    function applySearchFilter(query) {
        const q = (query || '').trim().toLowerCase();
        const activeBlock = getActiveBlock();
        if (!activeBlock) return;

        const items = activeBlock.querySelectorAll('.realisation-item');
        items.forEach(item => {
            const text = (item.innerText || '').toLowerCase();
            const match = q === '' ? true : text.includes(q);
            item.style.display = match ? '' : 'none';
        });
    }

    // Click filtres
    categoryBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const cat = btn.getAttribute('data-category');
            if (!cat) return;
            setActiveCategory(cat);
        });
    });

    // Recherche
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            applySearchFilter(e.target.value);
        });
    }

    // Bouton "Voir toutes les réalisations"
    const seeAllBtn = document.querySelector('.realisations-btn .btn, .realisations-btn button');
    if (seeAllBtn) {
        seeAllBtn.addEventListener('click', (e) => {
            e.preventDefault();
            const allBtn = document.querySelector('.real-category-btn[data-category="all"]');
            if (allBtn) allBtn.click();
            // scroll vers la grille
            const blockAll = document.querySelector('.realisation-category[data-category="all"]');
            if (blockAll) blockAll.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    }

    // Initial state : si aucun bloc active, activer le premier bouton
    const hasActive = !!document.querySelector('.realisation-category.active');
    if (!hasActive) {
        const firstBtn = categoryBtns[0];
        if (firstBtn) {
            const firstCat = firstBtn.getAttribute('data-category');
            setActiveCategory(firstCat);
        }
    }

    // console.log('Réalisations initialisées');
}

// ============================================================
// WHATSAPP FLOTTANT (OBLIGATOIRE)
// ============================================================

function initWhatsAppButton() {
    // DÉSACTIVÉ : WhatsApp est maintenant dans la mini-barre contacts
    // console.log('ℹ️  WhatsApp flottant désactivé (présent dans mini-barre contacts)');
    return;

    // Code original conservé mais non utilisé
    /*
    if (document.querySelector('.whatsapp-float, .mc-whatsapp-float')) {
        // console.log('ℹ️  WhatsApp déjà présent (HTML ou JS) : injection ignorée');
        return;
    }

    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/32478951269?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20un%20service%20de%20nettoyage.';
    whatsappBtn.className = 'whatsapp-float pulse';
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.setAttribute('aria-label', 'Contactez-nous sur WhatsApp');
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';

    document.body.appendChild(whatsappBtn);

    // console.log('Bouton WhatsApp initialisé (JS)');
    */
}


// ============================================================
// ÉTAPE 4 : CHARGEMENT TRADUCTION MANUELLE
// ============================================================


async function loadManualTranslation(pageKey, lang, basePath) {
    // Si langue = FR, pas besoin de charger de traduction (HTML déjà en FR)
if (lang === 'fr') {
    // console.log('🌍 Langue FR : pas de traduction à charger');
    return true;
}

const scriptPath = `${basePath}js/lang/${lang}/${pageKey}-${lang}.js`;

try {
    // Charger le script dynamiquement
    const script = document.createElement('script');
    script.src = scriptPath;
    script.defer = true;

    // Attendre le chargement
    await new Promise((resolve, reject) => {
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });

    // console.log(`Traduction ${lang.toUpperCase()} chargée`);

    // Appeler window.applyTranslations() si elle existe
    if (typeof window.applyTranslations === 'function') {
        window.applyTranslations();
        // console.log(`Traduction ${lang.toUpperCase()} appliquée`);
    } else {
        // console.warn(`⚠️ window.applyTranslations() non définie dans ${scriptPath}`);
    }

    return true;

} catch (error) {
    // console.warn(`⚠️ Impossible de charger la traduction ${scriptPath}:`, error);
    // console.warn(`Le site restera en français par défaut.`);
    return false;
}
}

// ============================================================
// ORCHESTRATEUR PRINCIPAL
// ============================================================

async function initApp() {
    // console.log('🚀 Initialisation Morais Cleaning App');
    // console.log('═══════════════════════════════════════');

    // Assurer la présence des conteneurs sur toutes les pages
    ensureLayoutContainers();

    // 1. Détecter contexte
    const basePath = getBasePath();
    const pageKey = getPageKey();
    const lang = getSavedLang();

    // console.log(`📄 Page: ${pageKey}`);
    // console.log(`🌍 Langue: ${lang.toUpperCase()}`);
    // console.log(`📁 BasePath: ${basePath}`);
    // console.log('');

    try {
        // 2. Charger navbar (ÉTAPE 1)
    await loadNavbar(basePath);

    // 3. Charger footer (ÉTAPE 2)
await loadFooter(basePath);

// 4. Initialiser composants (ÉTAPE 3)
initNavbar();
initLanguageDropdown();
applyNavbarTranslations(lang);
initFooter();
initFAQ();
initDevisButtons();
initContactButtons();
initSavoirPlusButtons();
initServiceCategories();
initRealisations();
initWhatsAppButton();

// 5. Charger traduction manuelle (ÉTAPE 4)
await loadManualTranslation(pageKey, lang, basePath);

// console.log('');
// console.log('Initialisation terminée avec succès');
// console.log('═══════════════════════════════════════');

} catch (error) {
    // console.error('❌ Erreur critique lors de l\'initialisation:', error);
}
}

// ============================================================
// AUTO-INITIALISATION
// ============================================================

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initApp);
} else {
    initApp();
}

})();
