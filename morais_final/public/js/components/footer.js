// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

/**
* Footer Component Controller - Morais Cleaning
* Gère le chargement et les fonctionnalités du footer
*/

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        footerContainerId: 'footer-container',
        footerHtmlPath: getBasePath() + 'public/components/footer.html',
        backToTopBtnId: 'mc-back-to-top',
        scrollThreshold: 300
    };

    /**
    * Détermine le chemin de base selon la profondeur de la page
    */
    function getBasePath() {
        const path = window.location.pathname;

        // Si on est dans /public/html/ ou /public/pages/ ou /public/legal/ (2 niveaux de profondeur)
    if (path.includes('/public/html/') ||
    path.includes('/public/pages/') ||
    path.includes('/public/legal/')) {
        return '../../';
    }

    // Si on est à la racine (index.html, 404.html)
return './';
}

/**
* Charge le footer via fetch
*/
async function loadFooter() {
    const container = document.getElementById(CONFIG.footerContainerId);

    if (!container) {
        // console.warn('Footer container not found. Skipping footer injection.');
        return;
    }

    // Éviter double injection
    if (container.hasAttribute('data-loaded')) {
        return;
    }

    try {
        const response = await fetch(CONFIG.footerHtmlPath);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        container.innerHTML = html;
        container.setAttribute('data-loaded', 'true');

        // Initialiser les fonctionnalités après injection
        initFooter();

    } catch (error) {
        // console.error('Failed to load footer:', error);
        // Fallback : footer simple en cas d'erreur
        container.innerHTML = `
        <footer style="background: #2C3E50; color: white; padding: 2rem; text-align: center;">
        <p>&copy; ${new Date().getFullYear()} Morais Cleaning - Tous droits réservés</p>
        </footer>
        `;
    }
}

/**
* Initialise toutes les fonctionnalités du footer
*/
function initFooter() {
    convertAbsoluteLinks();
    initBackToTop();
}

/**
* Convertit les liens absolus en liens relatifs selon la profondeur
*/
function convertAbsoluteLinks() {
    const basePath = getBasePath();
    const footer = document.getElementById('mc-footer');
    if (!footer) return;

    // Convertir tous les liens qui commencent par /
    const links = footer.querySelectorAll('a[href^="/"]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Enlever le / initial et ajouter basePath
        const newHref = basePath + href.substring(1);
        link.setAttribute('href', newHref);
    });
}

/**
* Initialise le bouton "Retour en haut"
*/
function initBackToTop() {
    const btn = document.getElementById(CONFIG.backToTopBtnId);
    if (!btn) return;

    // Afficher/masquer selon le scroll
    window.addEventListener('scroll', () => {
        if (window.pageYOffset > CONFIG.scrollThreshold) {
            btn.classList.add('visible');
        } else {
            btn.classList.remove('visible');
        }
    });

    // Scroll to top au clic
    btn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
}

// Auto-initialisation au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadFooter);
} else {
    loadFooter();
}

// Exposer pour usage externe si nécessaire
window.McFooter = {
    reload: loadFooter
};

})();
