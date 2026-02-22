// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

/**
* INDEX INTERACTIONS - Morais Cleaning
* Gère toutes les interactions sur index.html
*/

(function() {
    'use strict';

    // Mapping data-service → pages réelles
    const SERVICE_PAGES = {
        "bureaux": "/public/html/nettoyage-bureaux.html",
        "copro": "/public/html/copropriete.html",
        "conciergerie": "/public/html/conciergerie.html",
        "medicaux": "/public/html/cabinets-medicaux.html",
        "commerciaux": "/public/html/locaux-commerciaux.html",
        "maison": "/public/html/maison-appartement.html",
        "bail": "/public/html/fin-de-bail.html",
        "vitres": "/public/html/nettoyage-vitres.html",
        "travaux": "/public/html/apres-travaux.html",
        "industriel": "/public/html/industriel.html",
        "parkings": "/public/html/parkings-garages.html",
        "tapis": "/public/html/tapis-moquettes.html",
        "canapes": "/public/html/canapes-fauteuils.html",
        "airbnb": "/public/pages/contact.html",
        "demenagement": "/public/pages/contact.html"
    };

    /**
    * 1. CATÉGORIES SERVICES
    */
    function initServicesCategories() {
        const categoryBtns = document.querySelectorAll('.services .category-btn');
        const serviceCategories = document.querySelectorAll('.service-category');

        if (!categoryBtns.length || !serviceCategories.length) {
            return; // Pas sur index.html
        }

        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');

                // Mettre à jour les boutons actifs
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

        // console.log('Catégories services initialisées');
    }

    /**
    * 2. BOUTONS "SAVOIR PLUS"
    */
    function initServiceButtons() {
        const savoirPlusBtns = document.querySelectorAll('.savoir-plus-btn');

        savoirPlusBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const service = btn.getAttribute('data-service');
                const page = SERVICE_PAGES[service];

                if (page) {
                    window.location.href = page;
                } else {
                    // console.warn(`Aucune page trouvée pour le service: ${service}`);
                    // Fallback vers contact
                    window.location.href = '/public/pages/contact.html';
                }
            });
        });

        // console.log(`${savoirPlusBtns.length} boutons "Savoir plus" initialisés`);
    }

    /**
    * 3. BOUTONS "DEMANDER UN DEVIS"
    */
    function initQuoteButtons() {
        const devisBtns = document.querySelectorAll('.devis-btn, .btn-primary[data-i18n="cta.devis"]');

        devisBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();

                // Vérifier si section #devis-rapide existe
                const devisSection = document.getElementById('devis-rapide');

                if (devisSection) {
                    // Scroll vers #devis-rapide
                    devisSection.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                } else {
                    // Fallback vers page devis
                    window.location.href = 'public/pages/devis.html';
                }
            });
        });

        // console.log(`${devisBtns.length} boutons devis initialisés`);
    }

    /**
    * 4. BOUTONS "CONTACT"
    */
    function initContactButtons() {
        const contactBtns = document.querySelectorAll('.contact-btn, .btn-secondary[data-i18n="cta.contact"]');

        contactBtns.forEach(btn => {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                window.location.href = '/public/pages/contact.html';
            });
        });

        // console.log(`${contactBtns.length} boutons contact initialisés`);
    }

    /**
    * 5. CATÉGORIES RÉALISATIONS + RECHERCHE
    */
    function initRealisationsCategoriesAndSearch() {
        const categoryBtns = document.querySelectorAll('.realisations .real-category-btn');
        const realisationCategories = document.querySelectorAll('.realisation-category');
        const searchInput = document.getElementById('search-realisations');
        const allRealisationsContainer = document.getElementById('all-realisations');

        if (!categoryBtns.length || !realisationCategories.length) {
            return; // Pas sur index.html
        }

        // Gestion des catégories
        categoryBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                const category = btn.getAttribute('data-category');

                // Mettre à jour les boutons actifs
                categoryBtns.forEach(b => b.classList.remove('active'));
                btn.classList.add('active');

                // Si catégorie "all", remplir le container
                if (category === 'all' && allRealisationsContainer) {
                    fillAllRealisations();
                }

                // Afficher la catégorie correspondante
                realisationCategories.forEach(cat => {
                    if (cat.getAttribute('data-category') === category) {
                        cat.classList.add('active');
                    } else {
                        cat.classList.remove('active');
                    }
                });

                // Réinitialiser la recherche
                if (searchInput) {
                    searchInput.value = '';
                    filterRealisations('');
                }
            });
        });

        // Gestion de la recherche
        if (searchInput) {
            searchInput.addEventListener('input', (e) => {
                const query = e.target.value.toLowerCase();
                filterRealisations(query);
            });
        }

        // console.log('Catégories réalisations + recherche initialisées');
    }

    /**
    * Remplit le container "all-realisations" avec toutes les réalisations
    */
    function fillAllRealisations() {
        const allRealisationsContainer = document.getElementById('all-realisations');
        if (!allRealisationsContainer) return;

        // Vider le container
        allRealisationsContainer.innerHTML = '';

        // Récupérer toutes les réalisations de toutes les catégories
        const allItems = document.querySelectorAll('.realisation-category:not([data-category="all"]) .realisation-item');

        allItems.forEach(item => {
            // Cloner l'élément
            const clone = item.cloneNode(true);
            allRealisationsContainer.appendChild(clone);
        });

        // console.log(`${allItems.length} réalisations ajoutées à "Toutes"`);
    }

    /**
    * Filtre les réalisations selon la recherche
    */
    function filterRealisations(query) {
        // Trouver la catégorie active
        const activeCategory = document.querySelector('.realisation-category.active');
        if (!activeCategory) return;

        const items = activeCategory.querySelectorAll('.realisation-item');

        items.forEach(item => {
            const title = item.querySelector('h4')?.textContent.toLowerCase() || '';
            const desc = item.querySelector('p')?.textContent.toLowerCase() || '';

            if (title.includes(query) || desc.includes(query)) {
                item.style.display = '';
            } else {
                item.style.display = 'none';
            }
        });
    }

    /**
    * 6. BOUTON "VOIR TOUTES LES RÉALISATIONS"
    */
    function initVoirToutesButton() {
        const voirToutesBtn = document.querySelector('[data-action="voir-toutes"]');

        if (voirToutesBtn) {
            voirToutesBtn.addEventListener('click', () => {
                // Activer la catégorie "all"
                const allCategoryBtn = document.querySelector('.real-category-btn[data-category="all"]');
                if (allCategoryBtn) {
                    allCategoryBtn.click();
                }
            });

            // console.log('Bouton "Voir toutes" initialisé');
        }
    }

    /**
    * INITIALISATION GLOBALE (appelée depuis app.js)
*/
function initIndexInteractions() {
    // Vérifier qu'on est bien sur index.html
    const pageName = window.location.pathname.split('/').pop().replace('.html', '') || 'index';

    if (pageName !== 'index' && pageName !== '') {
        return; // Pas sur index.html
    }

    // console.log('🎯 Initialisation des interactions INDEX.HTML');

    // Initialiser toutes les fonctionnalités
    initServicesCategories();
    initServiceButtons();
    initQuoteButtons();
    initContactButtons();
    initRealisationsCategoriesAndSearch();
    initVoirToutesButton();

    // console.log('Toutes les interactions index.html initialisées');
}

// Exposer la fonction pour app.js
window.initIndexInteractions = initIndexInteractions;

})();
