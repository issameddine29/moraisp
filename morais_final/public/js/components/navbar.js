// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

/**
* Navbar Component Controller - Morais Cleaning
* Gère le chargement, l'affichage et les interactions de la navbar
*/

(function() {
    'use strict';

    // Configuration
    const CONFIG = {
        navbarContainerId: 'navbar-container',
        navbarHtmlPath: getBasePath() + 'public/components/navbar.html',
        burgerBtnId: 'mc-burger-btn',
        navbarMenuId: 'mc-navbar-menu',
        dropdownClass: 'mc-has-dropdown',
        activeClass: 'active',
        openClass: 'open',
        scrolledClass: 'scrolled'
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
* Charge la navbar via fetch
*/
async function loadNavbar() {
    const container = document.getElementById(CONFIG.navbarContainerId);

    if (!container) {
        // console.warn('Navbar container not found. Skipping navbar injection.');
        return;
    }

    // Éviter double injection
    if (container.hasAttribute('data-loaded')) {
        return;
    }

    try {
        const response = await fetch(CONFIG.navbarHtmlPath);

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const html = await response.text();
        container.innerHTML = html;
        container.setAttribute('data-loaded', 'true');

        // Initialiser les fonctionnalités après injection
        initNavbar();

    } catch (error) {
        // console.error('Failed to load navbar:', error);
        // Fallback : navbar simplifiée en cas d'erreur
        container.innerHTML = `
        <nav class="mc-navbar-fallback" style="background: #2C5AA0; padding: 1rem;">
        <div style="max-width: 1200px; margin: 0 auto; color: white; text-align: center;">
        <strong>Morais Cleaning</strong>
        </div>
        </nav>
        `;
    }
}

/**
* Initialise toutes les fonctionnalités de la navbar
*/
function initNavbar() {
    convertAbsoluteLinks();
    initBurgerMenu();
    initDropdownMenu();
    initScrollBehavior();
    initLangSwitcher();
    highlightActivePage();
}

/**
* Convertit les liens absolus en liens relatifs selon la profondeur
*/
function convertAbsoluteLinks() {
    const basePath = getBasePath();
    const navbar = document.getElementById('mc-navbar');
    if (!navbar) return;

    // Convertir tous les liens qui commencent par /
    const links = navbar.querySelectorAll('a[href^="/"]');
    links.forEach(link => {
        const href = link.getAttribute('href');
        // Enlever le / initial et ajouter basePath
        const newHref = basePath + href.substring(1);
        link.setAttribute('href', newHref);
    });
}

/**
* Initialise le burger menu (mobile)
*/
function initBurgerMenu() {
    const burgerBtn = document.getElementById(CONFIG.burgerBtnId);
    const navbarMenu = document.getElementById(CONFIG.navbarMenuId);
    const navbarOverlay = document.getElementById('mc-navbar-overlay');

    if (!burgerBtn || !navbarMenu) return;

    burgerBtn.addEventListener('click', () => {
        const isOpen = navbarMenu.classList.toggle(CONFIG.openClass);
        burgerBtn.classList.toggle(CONFIG.activeClass);
        burgerBtn.setAttribute('aria-expanded', isOpen);

        if (navbarOverlay) {
            navbarOverlay.classList.toggle(CONFIG.activeClass, isOpen);
        }

        document.body.style.overflow = isOpen ? 'hidden' : '';
    });

    if (navbarOverlay) {
        navbarOverlay.addEventListener('click', () => {
            navbarMenu.classList.remove(CONFIG.openClass);
            burgerBtn.classList.remove(CONFIG.activeClass);
            burgerBtn.setAttribute('aria-expanded', 'false');
            navbarOverlay.classList.remove(CONFIG.activeClass);
            document.body.style.overflow = '';
        });
    }

    const navLinks = navbarMenu.querySelectorAll('.mc-navbar-link:not(.mc-dropdown-trigger), .mc-dropdown-item');
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            navbarMenu.classList.remove(CONFIG.openClass);
            burgerBtn.classList.remove(CONFIG.activeClass);
            burgerBtn.setAttribute('aria-expanded', 'false');
            if (navbarOverlay) navbarOverlay.classList.remove(CONFIG.activeClass);
            document.body.style.overflow = '';
        });
    });

    document.addEventListener('click', (e) => {
        if (!navbarMenu.contains(e.target) && !burgerBtn.contains(e.target)) {
            navbarMenu.classList.remove(CONFIG.openClass);
            burgerBtn.classList.remove(CONFIG.activeClass);
            burgerBtn.setAttribute('aria-expanded', 'false');
            if (navbarOverlay) navbarOverlay.classList.remove(CONFIG.activeClass);
            document.body.style.overflow = '';
        }
    });
}

/**
* Initialise le menu dropdown Services
*/
function initDropdownMenu() {
    const dropdownItems = document.querySelectorAll('.' + CONFIG.dropdownClass);

    dropdownItems.forEach(item => {
        const trigger = item.querySelector('.mc-dropdown-trigger');
        const menu = item.querySelector('.mc-dropdown-menu, .mc-megamenu');

        if (!trigger || !menu) return;

        // Toggle dropdown au clic
        trigger.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();

            // Fermer les autres dropdowns
            dropdownItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove(CONFIG.openClass);
                    const otherTrigger = otherItem.querySelector('.mc-dropdown-trigger');
                    if (otherTrigger) otherTrigger.setAttribute('aria-expanded', 'false');
                }
            });

            // Toggle dropdown actuel
            const isOpen = item.classList.toggle(CONFIG.openClass);
            trigger.setAttribute('aria-expanded', isOpen);
        });

        const menuLinks = menu.querySelectorAll('.mc-dropdown-item, .mc-megamenu-item');
        menuLinks.forEach(link => {
            link.addEventListener('click', () => {
                item.classList.remove(CONFIG.openClass);
                trigger.setAttribute('aria-expanded', 'false');
            });
        });
    });

    // Fermer dropdown au clic extérieur
    document.addEventListener('click', (e) => {
        if (!e.target.closest('.' + CONFIG.dropdownClass)) {
            dropdownItems.forEach(item => {
                item.classList.remove(CONFIG.openClass);
                const trigger = item.querySelector('.mc-dropdown-trigger');
                if (trigger) trigger.setAttribute('aria-expanded', 'false');
            });
        }
    });
}

/**
* Gère le comportement au scroll (navbar sticky avec effet)
*/
function initScrollBehavior() {
    const navbar = document.getElementById('mc-navbar');
    if (!navbar) return;

    let lastScroll = 0;

    window.addEventListener('scroll', () => {
        const currentScroll = window.pageYOffset;

        // Ajouter classe "scrolled" après 50px
        if (currentScroll > 50) {
            navbar.classList.add(CONFIG.scrolledClass);
        } else {
            navbar.classList.remove(CONFIG.scrolledClass);
        }

        lastScroll = currentScroll;
    });
}

/**
* Initialise le sélecteur de langue
*/
function initLangSwitcher() {
    const langButtons = document.querySelectorAll('.mc-lang-btn');

    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');

            // Appeler la fonction switchLanguage si elle existe
            if (typeof window.switchLanguage === 'function') {
                window.switchLanguage(lang);
            }

            // Mettre à jour l'état actif
            langButtons.forEach(b => b.classList.remove(CONFIG.activeClass));
            btn.classList.add(CONFIG.activeClass);
        });
    });

    // Marquer la langue active par défaut (FR)
const defaultLang = document.querySelector('.mc-lang-btn[data-lang="fr"]');
if (defaultLang) defaultLang.classList.add(CONFIG.activeClass);
}

/**
* Surligne le lien actif selon la page actuelle
*/
function highlightActivePage() {
    const currentPath = window.location.pathname;
    const links = document.querySelectorAll('.mc-navbar-link, .mc-dropdown-item');

    links.forEach(link => {
        const href = link.getAttribute('href');
        if (href && currentPath.includes(href.split('#')[0].split('?')[0])) {
            link.classList.add(CONFIG.activeClass);
        }
    });
}

// Auto-initialisation au chargement du DOM
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', loadNavbar);
} else {
    loadNavbar();
}

// Exposer pour usage externe si nécessaire
window.McNavbar = {
    reload: loadNavbar
};

})();
