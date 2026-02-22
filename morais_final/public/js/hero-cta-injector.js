// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

/**
 * INJECTION AUTOMATIQUE DES 2 CTA DANS LE HERO
 * - Détecte automatiquement le hero
 * - Ajoute 2 boutons : "Devis rapide" + "Devis complet"
 * - Gère le scroll et la redirection
 * - Responsive et accessible
 * - i18n FR/EN/NL
 */

(function() {
    'use strict';
    
    // Configuration
    const CONFIG = {
        // Sélecteurs pour trouver le hero (par ordre de priorité)
        heroSelectors: [
            '#hero',
            '.hero',
            '.mc-hero',
            '.service-hero',
            '.quote-hero',
            'section.hero',
            'header.hero'
        ],
        
        // ID de la cible du devis rapide
        devisRapideId: 'devis-rapide',
        
        // URL de la page devis complet (adapter selon votre structure)
        devisCompletUrl: '/public/pages/devis.html',
        
        // Clés i18n
        i18nKeys: {
            quoteQuick: 'hero.quoteQuick',
            quoteFull: 'hero.quoteFull'
        },
        
        // Classes CSS des boutons (utiliser l'existant)
        buttonClasses: {
            primary: 'btn btn-primary',
            secondary: 'btn btn-secondary'
        }
    };
    
    /**
     * Trouve la section hero de la page
     */
    function findHeroSection() {
        // Essayer les sélecteurs prioritaires
        for (const selector of CONFIG.heroSelectors) {
            const hero = document.querySelector(selector);
            if (hero) {
                // console.log(`✓ Hero trouvé : ${selector}`);
                return hero;
            }
        }
        
        // Fallback : première section avec un H1
        const sections = document.querySelectorAll('section');
        for (const section of sections) {
            if (section.querySelector('h1')) {
                // console.log('✓ Hero trouvé : première section avec H1');
                return section;
            }
        }
        
        // console.warn('⚠ Aucun hero trouvé');
        return null;
    }
    
    /**
     * Trouve ou crée le conteneur de boutons dans le hero
     */
    function findOrCreateButtonsContainer(hero) {
        // Chercher un conteneur existant
        const existingContainers = [
            '.hero-buttons',
            '.hero-actions',
            '.cta-buttons',
            '.hero-cta'
        ];
        
        for (const selector of existingContainers) {
            const container = hero.querySelector(selector);
            if (container) {
                // console.log(`✓ Conteneur de boutons trouvé : ${selector}`);
                return container;
            }
        }
        
        // Créer un nouveau conteneur
        const container = document.createElement('div');
        container.className = 'hero-buttons hero-cta';
        
        // Insérer après le paragraphe principal (hero-subtitle)
        const subtitle = hero.querySelector('.hero-subtitle, p');
        if (subtitle && subtitle.parentNode) {
            subtitle.parentNode.insertBefore(container, subtitle.nextSibling);
            // console.log('✓ Conteneur de boutons créé après le paragraphe');
        } else {
            // Sinon l'ajouter à la fin du hero-content ou du container
            const heroContent = hero.querySelector('.hero-content, .container');
            if (heroContent) {
                heroContent.appendChild(container);
                // console.log('✓ Conteneur de boutons créé à la fin du hero-content');
            } else {
                hero.appendChild(container);
                // console.log('✓ Conteneur de boutons créé à la fin du hero');
            }
        }
        
        return container;
    }
    
    /**
     * Crée le bouton "Devis rapide" avec scroll
     */
    function createQuickQuoteButton() {
        const btn = document.createElement('button');
        btn.className = CONFIG.buttonClasses.primary + ' hero-cta-quick';
        btn.setAttribute('data-i18n', CONFIG.i18nKeys.quoteQuick);
        btn.setAttribute('aria-label', 'Obtenir un devis rapide');
        btn.type = 'button';
        
        // Icône + texte
        btn.innerHTML = `
            <i class="fas fa-bolt"></i>
            <span class="btn-text">Devis rapide</span>
        `;
        
        // Gestion du clic - scroll vers devis rapide
        btn.addEventListener('click', function(e) {
            e.preventDefault();
            scrollToDevisRapide();
        });
        
        return btn;
    }
    
    /**
     * Crée le bouton "Devis complet" avec lien
     */
    function createFullQuoteButton() {
        const btn = document.createElement('a');
        btn.className = CONFIG.buttonClasses.secondary + ' hero-cta-full';
        btn.setAttribute('data-i18n', CONFIG.i18nKeys.quoteFull);
        btn.setAttribute('aria-label', 'Demander un devis complet');
        btn.href = CONFIG.devisCompletUrl;
        
        // Icône + texte
        btn.innerHTML = `
            <i class="fas fa-calculator"></i>
            <span class="btn-text">Devis complet</span>
        `;
        
        return btn;
    }
    
    /**
     * Scroll smooth vers le devis rapide
     */
    function scrollToDevisRapide() {
        const target = document.getElementById(CONFIG.devisRapideId);
        
        if (target) {
            target.scrollIntoView({ 
                behavior: 'smooth', 
                block: 'start' 
            });
        } else {
            // Si l'élément n'existe pas encore, attendre un peu (injection dynamique)
            // console.log('⏳ Attente du chargement du devis rapide...');
            
            // MutationObserver pour détecter l'ajout de l'élément
            const observer = new MutationObserver(function(mutations, obs) {
                const target = document.getElementById(CONFIG.devisRapideId);
                if (target) {
                    target.scrollIntoView({ 
                        behavior: 'smooth', 
                        block: 'start' 
                    });
                    obs.disconnect();
                }
            });
            
            observer.observe(document.body, {
                childList: true,
                subtree: true
            });
            
            // Timeout de sécurité (3 secondes)
            setTimeout(() => {
                observer.disconnect();
                // console.warn('⚠ Timeout : devis rapide non trouvé');
            }, 3000);
        }
    }
    
    /**
     * Vérifie si les boutons sont déjà présents
     */
    function areButtonsAlreadyPresent(container) {
        // Vérifier les boutons injectés par ce script
        if (container.querySelector('.hero-cta-quick') || 
            container.querySelector('.hero-cta-full')) {
            return true;
        }
        
        // Vérifier les boutons du HTML original
        if (container.querySelector('button[onclick*="scrollToDevisRapide"]') ||
            container.querySelector('a[href*="devis.html"]')) {
            return true;
        }
        
        return false;
    }
    
    /**
     * Injecte les 2 boutons CTA dans le hero
     */
    function injectHeroCTA() {
        // console.log('🚀 Injection des CTA Hero...');
        
        // 1. Trouver le hero
        const hero = findHeroSection();
        if (!hero) {
            // console.warn('⚠ Impossible d\'injecter les CTA : hero non trouvé');
            return;
        }
        
        // 2. Trouver/créer le conteneur de boutons
        const container = findOrCreateButtonsContainer(hero);
        if (!container) {
            // console.warn('⚠ Impossible de créer le conteneur de boutons');
            return;
        }
        
        // 3. Vérifier si déjà présents
        if (areButtonsAlreadyPresent(container)) {
            // console.log('ℹ CTA déjà présents, injection annulée');
            return;
        }
        
        // 4. Nettoyer les anciens boutons (si besoin)
        // Garder seulement si on veut remplacer complètement
        // container.innerHTML = '';
        
        // 5. Créer et ajouter les boutons
        const quickBtn = createQuickQuoteButton();
        const fullBtn = createFullQuoteButton();
        
        container.appendChild(quickBtn);
        container.appendChild(fullBtn);
        
        // console.log('CTA Hero injectés avec succès');
        
        // 6. Appliquer les traductions si le système i18n est prêt
        if (window.applyTranslations && typeof window.applyTranslations === 'function') {
            setTimeout(() => {
                window.applyTranslations();
            }, 100);
        }
    }
    
    /**
     * Détecte le chemin relatif correct pour devis.html selon la page actuelle
     */
    function detectDevisPath() {
        const path = window.location.pathname;
        
        // Si on est à la racine (index.html)
        if (path === '/' || path.endsWith('/index.html') || path.endsWith('/')) {
            CONFIG.devisCompletUrl = 'public/pages/devis.html';
        }
        // Si on est dans /public/html/ (pages services)
        else if (path.includes('/public/html/')) {
            CONFIG.devisCompletUrl = '../pages/devis.html';
        }
        // Si on est dans /public/pages/ (contact, recrutement, etc.)
        else if (path.includes('/public/pages/')) {
            CONFIG.devisCompletUrl = './devis.html';
        }
        // Fallback
        else {
            CONFIG.devisCompletUrl = '/public/pages/devis.html';
        }
        
        // console.log(`📍 Chemin devis détecté : ${CONFIG.devisCompletUrl}`);
    }
    
    /**
     * Initialisation
     */
    function init() {
        // Détecter le bon chemin pour devis.html
        detectDevisPath();
        
        // Attendre le DOM et le système i18n
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', injectHeroCTA);
        } else {
            // DOM déjà chargé
            injectHeroCTA();
        }
    }
    
    // Lancer l'initialisation
    init();
    
    // Exposer la fonction de scroll pour usage externe
    window.scrollToDevisRapide = scrollToDevisRapide;
    
})();
