/**
 * Lang switcher global (compatible avec public/js/components/navbar.js)
 *
 * Problème corrigé : certaines pages (ex: /public/pages/contact.html)
 * chargent navbar.js mais pas app.js, donc window.switchLanguage() n'existait pas.
 * Résultat : clic sur FR/EN/NL = aucun effet.
 *
 * Ce fichier :
 * - expose window.switchLanguage(lang)
 * - sauvegarde la langue (localStorage "lang")
 * - met à jour l'état actif des boutons
 * - applique une traduction minimale de la navbar (EN/NL) via data-i18n
 *
 * NOTE : la traduction du contenu de la page dépend toujours des scripts
 * page-specific (public/js/lang/{lang}/{pageKey}-{lang}.js) quand ils existent.
 */

(function () {
  'use strict';

  const STORAGE_KEY = 'lang';
  const DEFAULT_LANG = 'fr';
  const SUPPORTED = ['fr', 'en', 'nl'];

  // Dictionnaire minimal pour la NAVBAR (FR = texte déjà présent dans le HTML)
  const NAVBAR_TRANSLATIONS = {
    en: {
      'nav.home': 'Home',
      'nav.about': 'About',
      'nav.services': 'Services',
      'nav.achievements': 'Projects',
      'nav.recruitment': 'Careers',
      'nav.contact': 'Contact',
      'nav.whatsapp': 'WhatsApp',
      'nav.menu': 'Menu',
      'cta.quote': 'Request a quote',

      'nav.services.professional.title': 'Business',
      'nav.services.professional.office.title': 'Offices',
      'nav.services.professional.office.desc': 'Professional cleaning',
      'nav.services.professional.commercial.title': 'Retail',
      'nav.services.professional.commercial.desc': 'Shops & stores',
      'nav.services.professional.industrial.title': 'Industrial',
      'nav.services.professional.industrial.desc': 'Factories & warehouses',
      'nav.services.professional.medical.title': 'Medical',
      'nav.services.professional.medical.desc': 'Clinics & practices',

      'nav.services.residential.title': 'Residential',
      'nav.services.residential.home.title': 'Home',
      'nav.services.residential.home.desc': 'House & apartment',
      'nav.services.residential.copro.title': 'Condominium',
      'nav.services.residential.copro.desc': 'Common areas',
      'nav.services.residential.endlease.title': 'End of lease',
      'nav.services.residential.endlease.desc': 'Impeccable move-out',
      'nav.services.residential.concierge.title': 'Concierge',
      'nav.services.residential.concierge.desc': 'Regular service',

      'nav.services.specialized.title': 'Specialized',
      'nav.services.specialized.windows.title': 'Windows',
      'nav.services.specialized.windows.desc': 'Crystal clear finish',
      'nav.services.specialized.postconstruction.title': 'Post-construction',
      'nav.services.specialized.postconstruction.desc': 'Clean worksite',
      'nav.services.specialized.carpets.title': 'Carpets',
      'nav.services.specialized.carpets.desc': 'Deep cleaning',
      'nav.services.specialized.sofas.title': 'Sofas',
      'nav.services.specialized.sofas.desc': 'Fabric & leather',
      'nav.services.specialized.parking.title': 'Parking',
      'nav.services.specialized.parking.desc': 'Areas & garages'
    },
    nl: {
      'nav.home': 'Start',
      'nav.about': 'Over ons',
      'nav.services': 'Diensten',
      'nav.achievements': 'Realisaties',
      'nav.recruitment': 'Vacatures',
      'nav.contact': 'Contact',
      'nav.whatsapp': 'WhatsApp',
      'nav.menu': 'Menu',
      'cta.quote': 'Offerte aanvragen',

      'nav.services.professional.title': 'Zakelijk',
      'nav.services.professional.office.title': 'Kantoren',
      'nav.services.professional.office.desc': 'Professionele reiniging',
      'nav.services.professional.commercial.title': 'Handel',
      'nav.services.professional.commercial.desc': 'Winkels & boetieks',
      'nav.services.professional.industrial.title': 'Industrieel',
      'nav.services.professional.industrial.desc': 'Fabrieken & magazijnen',
      'nav.services.professional.medical.title': 'Medisch',
      'nav.services.professional.medical.desc': 'Praktijken & klinieken',

      'nav.services.residential.title': 'Wonen',
      'nav.services.residential.home.title': 'Woning',
      'nav.services.residential.home.desc': 'Huis & appartement',
      'nav.services.residential.copro.title': 'Mede-eigendom',
      'nav.services.residential.copro.desc': 'Gemeenschappelijke delen',
      'nav.services.residential.endlease.title': 'Einde huur',
      'nav.services.residential.endlease.desc': 'Perfecte oplevering',
      'nav.services.residential.concierge.title': 'Conciërge',
      'nav.services.residential.concierge.desc': 'Regelmatige service',

      'nav.services.specialized.title': 'Specialistisch',
      'nav.services.specialized.windows.title': 'Ramen',
      'nav.services.specialized.windows.desc': 'Perfect transparant',
      'nav.services.specialized.postconstruction.title': 'Na werken',
      'nav.services.specialized.postconstruction.desc': 'Schone werf',
      'nav.services.specialized.carpets.title': 'Tapijten',
      'nav.services.specialized.carpets.desc': 'Dieptereiniging',
      'nav.services.specialized.sofas.title': 'Zetels',
      'nav.services.specialized.sofas.desc': 'Stof & leer',
      'nav.services.specialized.parking.title': 'Parkings',
      'nav.services.specialized.parking.desc': 'Zones & garages'
    }
  };

  function getSavedLang() {
    try {
      const v = localStorage.getItem(STORAGE_KEY);
      return SUPPORTED.includes(v) ? v : DEFAULT_LANG;
    } catch {
      return DEFAULT_LANG;
    }
  }

  function saveLang(lang) {
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      // ignore
    }
  }

  function applyNavbarTranslations(lang) {
    if (!lang || lang === 'fr') return;
    const dict = NAVBAR_TRANSLATIONS[lang];
    if (!dict) return;

    // Text
    document.querySelectorAll('[data-i18n]').forEach((el) => {
      const key = el.getAttribute('data-i18n');
      const val = dict[key];
      if (typeof val === 'string' && val.length) {
        el.textContent = val;
      }
    });

    // Common attributes
    const attrMap = [
      { attr: 'title', dataAttr: 'data-i18n-title' },
      { attr: 'aria-label', dataAttr: 'data-i18n-aria-label' }
    ];

    attrMap.forEach(({ attr, dataAttr }) => {
      document.querySelectorAll(`[${dataAttr}]`).forEach((el) => {
        const key = el.getAttribute(dataAttr);
        const val = dict[key];
        if (typeof val === 'string' && val.length) {
          el.setAttribute(attr, val);
        }
      });
    });
  }

  function updateLangUi(lang) {
    // Buttons active state
    document.querySelectorAll('.mc-lang-btn').forEach((btn) => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });

    // Optional indicator
    const current = document.querySelector('.mc-lang-current');
    if (current) current.textContent = String(lang).toUpperCase();
  }

  async function loadPageTranslationIfAny(lang) {
    // FR = rien à charger (page en FR)
    if (lang === 'fr') {
      if (typeof window.applyTranslations === 'function') {
        window.applyTranslations();
      }
      return;
    }

    // Déduire pageKey via filename
    const path = window.location.pathname;
    const file = (path.split('/').pop() || 'index').replace('.html', '') || 'index';
    const pageKey = file;

    // Déduire basePath vers /public
    let basePath = './public/';
    if (path.includes('/public/html/') || path.includes('/public/pages/') || path.includes('/public/legal/')) {
      basePath = '../';
    }

    const scriptPath = `${basePath}js/lang/${lang}/${pageKey}-${lang}.js`;

    await new Promise((resolve) => {
      const s = document.createElement('script');
      s.src = scriptPath;
      s.onload = resolve;
      s.onerror = resolve; // silent fail
      document.body.appendChild(s);
    });

    if (typeof window.applyTranslations === 'function') {
      window.applyTranslations();
    }
  }

  // Exposé pour navbar.js
  window.switchLanguage = function (lang) {
    if (!SUPPORTED.includes(lang)) return;
    saveLang(lang);
    // Recharger : garantit que tous les scripts/page state se ré-appliquent
    window.location.reload();
  };

  // Apply on load (after navbar injection) - keep trying briefly
  function bootstrap() {
    const lang = getSavedLang();
    updateLangUi(lang);
    applyNavbarTranslations(lang);
    loadPageTranslationIfAny(lang).catch(() => {});
  }

  document.addEventListener('DOMContentLoaded', () => {
    // navbar est injectée async → retry léger
    bootstrap();
    let tries = 0;
    const timer = setInterval(() => {
      tries++;
      bootstrap();
      if (tries >= 10) clearInterval(timer);
    }, 200);
  });
})();
