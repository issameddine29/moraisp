/**
* ============================================
* MORAIS CLEANING - SYSTÈME I18N CENTRALISÉ
* ============================================
*
* Architecture professionnelle de traduction multilingue
* - Gestion centralisée des langues (FR, EN, NL)
* - Système de mapping data-i18n
* - Détection automatique des clés manquantes
* - SEO multilingue (hreflang, canonical)
* - Validation et logs
*
* @version 2.0.0
* @author Morais Cleaning Team
*/

class I18nSystem {
    constructor() {
        this.currentLang = this.detectLanguage();
        this.translations = {};
        this.supportedLangs = ['fr', 'en', 'nl'];
        this.defaultLang = 'fr';
        this.missingKeys = new Set();

        // console.log('🌍 I18n System initialized - Language:', this.currentLang);
    }

    /**
    * Détecter la langue courante
    * Priorité: URL > localStorage > Navigateur > Défaut
    */
    detectLanguage() {
        // 1. Vérifier l'URL (/fr/, /en/, /nl/)
    const pathLang = this.getLanguageFromPath();
    if (pathLang) {
        // console.log('🔍 Langue détectée depuis URL:', pathLang);
        return pathLang;
    }

    // 2. Vérifier localStorage
    const storedLang = localStorage.getItem('lang');
    if (storedLang && this.supportedLangs.includes(storedLang)) {
        // console.log('🔍 Langue détectée depuis localStorage:', storedLang);
        return storedLang;
    }

    // 3. Vérifier langue navigateur
    const browserLang = navigator.language.split('-')[0];
    if (this.supportedLangs.includes(browserLang)) {
        // console.log('🔍 Langue détectée depuis navigateur:', browserLang);
        return browserLang;
    }

    // 4. Langue par défaut
    // console.log('🔍 Langue par défaut:', this.defaultLang);
    return this.defaultLang;
}

/**
* Extraire la langue depuis le path URL
*/
getLanguageFromPath() {
    const path = window.location.pathname;
    const match = path.match(/^\/(fr|en|nl)\//);
    return match ? match[1] : null;
}

/**
* Charger les traductions pour une page
*/
async loadTranslations(pageName) {
    try {
        // console.log(`📥 Chargement traductions: ${pageName}-${this.currentLang}.json`);

        const response = await fetch(`/public/i18n/${this.currentLang}/${pageName}.json`);

        if (!response.ok) {
            throw new Error(`HTTP ${response.status}`);
        }

        this.translations = await response.json();
        // console.log('Traductions chargées:', Object.keys(this.translations).length, 'clés');

        return this.translations;

    } catch (error) {
        // console.error('❌ Erreur chargement traductions:', error);

        // Fallback vers français si échec
        if (this.currentLang !== this.defaultLang) {
            // console.log('🔄 Fallback vers langue par défaut...');
            this.currentLang = this.defaultLang;
            return this.loadTranslations(pageName);
        }

        return {};
    }
}

/**
* Obtenir une traduction par clé
* Supporte les clés imbriquées (ex: "nav.home")
*/
t(key, fallback = '') {
    const keys = key.split('.');
    let value = this.translations;

    for (const k of keys) {
        if (value && typeof value === 'object' && k in value) {
            value = value[k];
        } else {
            // Clé manquante
            this.missingKeys.add(key);
            // console.warn(`⚠️ Clé manquante: "${key}" (langue: ${this.currentLang})`);
            return fallback || `[${key}]`;
        }
    }

    return value;
}

/**
* Appliquer les traductions au DOM
* Utilise l'attribut data-i18n pour mapper les éléments
*/
applyTranslations() {
    // console.log('🎨 Application des traductions au DOM...');

    let translatedCount = 0;
    let errorCount = 0;

    // 1. Textes simples (data-i18n)
document.querySelectorAll('[data-i18n]').forEach(element => {
    const key = element.getAttribute('data-i18n');
    const translation = this.t(key);

    if (translation && translation !== `[${key}]`) {
        element.textContent = translation;
        translatedCount++;
    } else {
        errorCount++;
    }
});

// 2. Attributs (data-i18n-placeholder, data-i18n-title, etc.)
this.translateAttributes();

// 3. Meta tags
this.updateMetaTags();

// 4. HTML lang
this.updateHtmlLang();

// console.log(`Traductions appliquées: ${translatedCount} éléments`);
if (errorCount > 0) {
    // console.warn(`⚠️ ${errorCount} éléments non traduits`);
}

// 5. Rapport clés manquantes
if (this.missingKeys.size > 0) {
    // console.warn('📋 Clés manquantes:', Array.from(this.missingKeys));
}
}

/**
* Traduire les attributs HTML
*/
translateAttributes() {
    const attributes = ['placeholder', 'title', 'aria-label', 'alt'];

    attributes.forEach(attr => {
        document.querySelectorAll(`[data-i18n-${attr}]`).forEach(element => {
            const key = element.getAttribute(`data-i18n-${attr}`);
            const translation = this.t(key);

            if (translation && translation !== `[${key}]`) {
                element.setAttribute(attr, translation);
            }
        });
    });
}

/**
* Mettre à jour les meta tags
*/
updateMetaTags() {
    // Title
    const titleKey = document.querySelector('meta[name="i18n-title"]');
    if (titleKey) {
        const key = titleKey.getAttribute('content');
        document.title = this.t(key, document.title);
    }

    // Description
    const descKey = document.querySelector('meta[name="i18n-description"]');
    const descMeta = document.querySelector('meta[name="description"]');
    if (descKey && descMeta) {
        const key = descKey.getAttribute('content');
        descMeta.setAttribute('content', this.t(key));
    }
}

/**
* Mettre à jour <html lang="">
*/
updateHtmlLang() {
    document.documentElement.setAttribute('lang', this.currentLang);
    // console.log('HTML lang mis à jour:', this.currentLang);
}

/**
* Générer les tags SEO (hreflang, canonical)
*/
generateSEOTags() {
    // console.log('🔖 Génération tags SEO...');

    const currentPath = window.location.pathname;
    const baseUrl = window.location.origin;

    // Enlever l'ancien hreflang/canonical s'ils existent
    document.querySelectorAll('link[rel="alternate"], link[rel="canonical"]').forEach(el => el.remove());

    // Générer hreflang pour chaque langue
    this.supportedLangs.forEach(lang => {
        const link = document.createElement('link');
        link.rel = 'alternate';
        link.hreflang = lang;
        link.href = this.getUrlForLang(lang, currentPath);
        document.head.appendChild(link);
    });

    // x-default
    const defaultLink = document.createElement('link');
    defaultLink.rel = 'alternate';
    defaultLink.hreflang = 'x-default';
    defaultLink.href = this.getUrlForLang(this.defaultLang, currentPath);
    document.head.appendChild(defaultLink);

    // Canonical
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    canonical.href = this.getUrlForLang(this.currentLang, currentPath);
    document.head.appendChild(canonical);

    // console.log('Tags SEO générés');
}

/**
* Obtenir l'URL pour une langue donnée
*/
getUrlForLang(lang, currentPath) {
    const baseUrl = window.location.origin;

    // Enlever le préfixe de langue existant
    let cleanPath = currentPath.replace(/^\/(fr|en|nl)\//, '/');

    // Ajouter le nouveau préfixe
    const newPath = `/${lang}${cleanPath}`;

    return `${baseUrl}${newPath}`;
}

/**
* Changer de langue
*/
async changeLanguage(newLang) {
    if (!this.supportedLangs.includes(newLang)) {
        // console.error('❌ Langue non supportée:', newLang);
        return;
    }

    // console.log('🔄 Changement de langue:', this.currentLang, '→', newLang);

    // Sauvegarder
    localStorage.setItem('lang', newLang);
    this.currentLang = newLang;

    // Rediriger vers la bonne URL
    const currentPath = window.location.pathname;
    const newUrl = this.getUrlForLang(newLang, currentPath);

    window.location.href = newUrl;
}

/**
* Initialiser le système complet
*/
async init(pageName) {
    // console.log('🚀 Initialisation I18n System...');
    // console.log('📄 Page:', pageName);
    // console.log('🌍 Langue:', this.currentLang);

    try {
        // 1. Charger traductions
        await this.loadTranslations(pageName);

        // 2. Appliquer au DOM
        this.applyTranslations();

        // 3. Générer SEO tags
        this.generateSEOTags();

        // 4. Setup listeners
        this.setupLanguageListeners();

        // console.log('I18n System initialisé avec succès !');

        return true;

    } catch (error) {
        // console.error('❌ Erreur initialisation I18n:', error);
        return false;
    }
}

/**
* Configurer les listeners pour changement de langue
*/
setupLanguageListeners() {
    document.querySelectorAll('[data-lang-switch]').forEach(button => {
        const lang = button.getAttribute('data-lang-switch');

        button.addEventListener('click', (e) => {
            e.preventDefault();
            this.changeLanguage(lang);
        });
    });
}

/**
* Générer un rapport de validation
*/
generateReport() {
    const report = {
        currentLang: this.currentLang,
        translationsLoaded: Object.keys(this.translations).length,
        missingKeys: Array.from(this.missingKeys),
        elementsWithI18n: document.querySelectorAll('[data-i18n]').length,
        seoTags: {
            hreflang: document.querySelectorAll('link[rel="alternate"]').length,
            canonical: document.querySelectorAll('link[rel="canonical"]').length,
            htmlLang: document.documentElement.getAttribute('lang')
    }
};

console.table(report);
return report;
}
}

// ============================================
// INITIALISATION GLOBALE
// ============================================

// Créer instance globale
window.i18n = new I18nSystem();

// Auto-initialisation quand le DOM est prêt
document.addEventListener('DOMContentLoaded', async () => {
    // Détecter le nom de la page
    const pageName = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

    // Initialiser
    await window.i18n.init(pageName);
});

// Export pour utilisation externe
if (typeof module !== 'undefined' && module.exports) {
    module.exports = I18nSystem;
}
