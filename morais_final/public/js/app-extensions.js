// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

/**
* EXTENSION APP.JS - MORAIS CLEANING
*
* Ajout des fonctionnalités :
* - Bouton WhatsApp flottant global
* - Initialisation formulaires n8n
* - Améliorations UX
*
* À ajouter À LA FIN de app.js (avant la fermeture de la fonction IIFE)
* juste AVANT la section AUTO-INITIALISATION
*/

// ============================================================
// BOUTON WHATSAPP FLOTTANT GLOBAL
// ============================================================

function initWhatsAppButton() {
    // Vérifier si le bouton existe déjà
    if (document.querySelector('.whatsapp-float')) {
        return;
    }

    // Créer le conteneur du flotteur
    const floaterContainer = document.createElement('div');
    floaterContainer.className = 'whatsapp-floater-container';

    // Créer le menu des services
    const menuServices = document.createElement('div');
    menuServices.className = 'whatsapp-services-menu';
    
    // Liste des 13 services organisés par catégorie
    const servicesData = {
        'Professionnel': [
            { name: 'Bureaux', url: '/public/html/nettoyage-bureaux.html' },
            { name: 'Commerciaux', url: '/public/html/locaux-commerciaux.html' },
            { name: 'Industriel', url: '/public/html/industriel.html' },
            { name: 'Médicaux', url: '/public/html/cabinets-medicaux.html' }
        ],
        'Résidentiel': [
            { name: 'Maison', url: '/public/html/maison-appartement.html' },
            { name: 'Copropriété', url: '/public/html/copropriete.html' },
            { name: 'Fin de bail', url: '/public/html/fin-de-bail.html' },
            { name: 'Conciergerie', url: '/public/html/conciergerie.html' }
        ],
        'Spécialisé': [
            { name: 'Vitres', url: '/public/html/nettoyage-vitres.html' },
            { name: 'Après travaux', url: '/public/html/apres-travaux.html' },
            { name: 'Tapis & Moquettes', url: '/public/html/tapis-moquettes.html' },
            { name: 'Canapés & Fauteuils', url: '/public/html/canapes-fauteuils.html' },
            { name: 'Parkings & Garages', url: '/public/html/parkings-garages.html' }
        ]
    };

    // Titre du menu
    const menuTitle = document.createElement('div');
    menuTitle.className = 'whatsapp-menu-title';
    menuTitle.textContent = '✨ Nos services';
    menuServices.appendChild(menuTitle);

    // Container des services
    const servicesList = document.createElement('div');
    servicesList.className = 'whatsapp-services-list';

    // Ajouter les services par catégorie
    Object.entries(servicesData).forEach(([category, services]) => {
        const categoryTitle = document.createElement('div');
        categoryTitle.className = 'whatsapp-service-category';
        categoryTitle.textContent = category;
        servicesList.appendChild(categoryTitle);

        services.forEach(service => {
            const link = document.createElement('a');
            link.href = service.url;
            link.className = 'whatsapp-service-link';
            link.textContent = service.name;
            link.setAttribute('data-service', service.name.toLowerCase());
            link.addEventListener('click', () => {
                menuServices.classList.remove('open');
            });
            servicesList.appendChild(link);
        });
    });

    menuServices.appendChild(servicesList);

    // Créer le bouton WhatsApp flottant
    const whatsappBtn = document.createElement('a');
    whatsappBtn.href = 'https://wa.me/32478951269?text=Bonjour,%20je%20souhaite%20un%20devis%20pour%20un%20service%20de%20nettoyage.';
    whatsappBtn.className = 'whatsapp-float pulse';
    whatsappBtn.target = '_blank';
    whatsappBtn.rel = 'noopener noreferrer';
    whatsappBtn.setAttribute('aria-label', 'Contactez-nous sur WhatsApp');
    whatsappBtn.innerHTML = '<i class="fab fa-whatsapp"></i>';
    whatsappBtn.setAttribute('data-toggle', 'whatsapp-menu');

    // Ajouter les éléments au conteneur
    floaterContainer.appendChild(menuServices);
    floaterContainer.appendChild(whatsappBtn);

    // Ajouter au body
    document.body.appendChild(floaterContainer);

    // Gestion du clic sur le bouton
    whatsappBtn.addEventListener('click', (e) => {
        const isOpen = menuServices.classList.contains('open');
        
        if (isOpen) {
            e.preventDefault();
            menuServices.classList.remove('open');
        } else {
            e.preventDefault();
            menuServices.classList.add('open');
        }
    });

    // Fermer le menu quand on clique en dehors
    document.addEventListener('click', (e) => {
        if (!floaterContainer.contains(e.target)) {
            menuServices.classList.remove('open');
        }
    });

    // console.log('Flotteur WhatsApp premium avec services organisés initialisé');
}

// ============================================================
// FORMULAIRES N8N (ASYNCHRONE)
// ============================================================

async function initN8NForms() {
    // Vérifier si on est sur une page avec formulaire
    const hasContactForm = document.getElementById('contact-form');
    const hasRecruitForm = document.getElementById('recruitment-form') || document.getElementById('recrutement-form');

    if (!hasContactForm && !hasRecruitForm) {
        return; // Pas de formulaire sur cette page
    }

    try {
        // Importer dynamiquement le module forms-manager
        const formsModule = await import('./forms-manager.js');

        // Initialiser les formulaires
        formsModule.initForms();

        // console.log('Formulaires n8n initialisés');

    } catch (error) {
        // console.warn('⚠️ Impossible de charger forms-manager.js:', error);
        // console.warn('Les formulaires fonctionneront en mode dégradé');
    }
}

// ============================================================
// FAQ ACCORDION (TOUTES PAGES)
// ============================================================

function initFAQ() {
    const faqItems = document.querySelectorAll('.faq-item');

    if (faqItems.length === 0) {
        return; // Pas de FAQ sur cette page
    }

    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');

        if (!question) return;

        question.addEventListener('click', () => {
            // Toggle current item
            const isOpen = item.classList.toggle('open');

            // Fermer les autres items (optionnel - comportement accordion)
        if (isOpen) {
            faqItems.forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('open');
                }
            });
        }
    });
});

// console.log(`FAQ initialisée (${faqItems.length} items)`);
}

// ============================================================
// BOUTONS CTA "DEVIS" INTELLIGENTS
// ============================================================

function initDevisButtons() {
    const devisButtons = document.querySelectorAll('.devis-btn, .btn-devis, [href="#devis-rapide"], [data-action="devis"]');

    if (devisButtons.length === 0) {
        return;
    }

    devisButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            e.preventDefault();

            // Si on est sur index.html ET que la section #devis-rapide existe
            if (window.location.pathname === '/index.html' || window.location.pathname === '/') {
                const devisSection = document.getElementById('devis-rapide');
                if (devisSection) {
                    devisSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    return;
                }
            }

            // Sinon, rediriger vers index.html#devis-rapide
            window.location.href = '/index.html#devis-rapide';
        });
    });

    // console.log(`Boutons devis initialisés (${devisButtons.length})`);
}

// ============================================================
// BOUTONS CTA "CONTACT" INTELLIGENTS
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
// BACK TO TOP (SCROLL)
// ============================================================

function initBackToTop() {
    const backToTopBtn = document.getElementById('mc-back-to-top');

    if (!backToTopBtn) {
        return;
    }

    // Afficher/masquer selon scroll
    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            backToTopBtn.classList.add('visible');
        } else {
            backToTopBtn.classList.remove('visible');
        }
    });

    // Clic pour remonter
    backToTopBtn.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // console.log('Bouton "Retour en haut" initialisé');
}

// ============================================================
// MODIFICATION DE LA FONCTION PRINCIPALE initApp()
// ============================================================

/*
* INSTRUCTIONS :
*
* Dans la fonction initApp() existante, APRÈS l'étape 7 (chargement traductions),
// * AJOUTER ces lignes AVANT le console.log final :
*
*     // 8. Initialiser WhatsApp flottant
*     initWhatsAppButton();
*
*     // 9. Initialiser formulaires n8n
*     await initN8NForms();
*
*     // 10. Initialiser FAQ
*     initFAQ();
*
*     // 11. Initialiser boutons CTA
*     initDevisButtons();
*     initContactButtons();
*
*     // 12. Initialiser back to top
*     initBackToTop();
*
* Ces fonctions viennent s'ajouter à l'orchestration existante.
*/
