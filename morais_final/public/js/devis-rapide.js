// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

/* ============================================ */
/* COMPOSANT DEVIS RAPIDE - JAVASCRIPT          */
/* Gestion du formulaire et pré-sélection       */
/* ============================================ */

/**
 * MAPPING des pages vers les valeurs du select
 * Permet la pré-sélection automatique selon la page visitée
 */
const SERVICE_PAGE_MAPPING = {
    'nettoyage-bureaux.html': 'nettoyage-bureaux',
    'nettoyage-vitres.html': 'nettoyage-vitres',
    'maison-appartement.html': 'maison-appartement',
    'fin-de-bail.html': 'fin-de-bail',
    'apres-travaux.html': 'apres-travaux',
    'locaux-commerciaux.html': 'locaux-commerciaux',
    'copropriete.html': 'copropriete',
    'cabinets-medicaux.html': 'cabinets-medicaux',
    'industriel.html': 'industriel',
    'parkings-garages.html': 'parkings-garages',
    'tapis-moquettes.html': 'tapis-moquettes',
    'canapes-fauteuils.html': 'canapes-fauteuils',
    'conciergerie.html': 'conciergerie'
};

/**
 * Initialisation du composant devis rapide
 */
document.addEventListener('DOMContentLoaded', function() {
    // Pré-sélection automatique du service
    preselectService();
    
    // Gestion de la soumission du formulaire
    const form = document.getElementById('devisRapideForm');
    if (form) {
        form.addEventListener('submit', handleFormSubmit);
    }
});

/**
 * Pré-sélectionne le service selon la page actuelle
 */
function preselectService() {
    // Récupérer le nom du fichier actuel
    const currentPage = window.location.pathname.split('/').pop();
    
    // Trouver le service correspondant
    const serviceValue = SERVICE_PAGE_MAPPING[currentPage];
    
    // Pré-sélectionner dans le select
    if (serviceValue) {
        const serviceSelect = document.getElementById('devis-service');
        if (serviceSelect) {
            serviceSelect.value = serviceValue;
            // console.log(`✓ Service pré-sélectionné : ${serviceValue}`);
        }
    }
}

/**
 * Gestion de la soumission du formulaire
 * @param {Event} e - Événement de soumission
 */
async function handleFormSubmit(e) {
    e.preventDefault();
    
    // Récupérer les données du formulaire
    const formData = {
        service: document.getElementById('devis-service').value,
        ville: document.getElementById('devis-ville').value,
        surface: document.getElementById('devis-surface').value,
        email: document.getElementById('devis-email').value,
        telephone: document.getElementById('devis-telephone').value,
        message: document.getElementById('devis-message').value,
        timestamp: new Date().toISOString(),
        source: 'devis-rapide',
        page: window.location.pathname
    };
    
    // Validation basique
    if (!formData.service || !formData.ville || !formData.email) {
        showError('Veuillez remplir tous les champs obligatoires.');
        return;
    }
    
    // Validation email
    if (!isValidEmail(formData.email)) {
        showError('Veuillez entrer une adresse email valide.');
        return;
    }
    
    // Désactiver le bouton pendant l'envoi
    const submitBtn = e.target.querySelector('button[type="submit"]');
    const originalText = submitBtn.innerHTML;
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
    
    try {
        // Envoi vers le webhook n8n (à adapter selon votre configuration)
        const response = await sendToWebhook(formData);
        
        if (response.success) {
            showSuccess();
            resetForm(e.target);
        } else {
            throw new Error('Erreur d\'envoi');
        }
    } catch (error) {
        // console.error('Erreur lors de l\'envoi:', error);
        showError('Une erreur est survenue. Veuillez réessayer ou nous contacter directement.');
    } finally {
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
    }
}

/**
 * Envoie les données vers le webhook n8n
 * @param {Object} data - Données du formulaire
 * @returns {Promise<Object>} - Réponse du webhook
 */
async function sendToWebhook(data) {
    const WEBHOOK_URL = 'https://n8n.morais-cleaning.com/webhook/mini-devis';
    
    try {
        const response = await fetch(WEBHOOK_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data)
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        return await response.json();
    } catch (error) {
        // console.error('Erreur webhook:', error);
        
        // Fallback : envoi par email si le webhook échoue
        // Vous pouvez aussi utiliser FormSubmit, EmailJS, etc.
        return sendFallbackEmail(data);
    }
}

/**
 * Fallback : envoi par email si le webhook échoue
 * @param {Object} data - Données du formulaire
 * @returns {Promise<Object>}
 */
async function sendFallbackEmail(data) {
    // Option 1 : Utiliser mailto: (basique)
    const subject = encodeURIComponent(`Nouveau devis : ${data.service}`);
    const body = encodeURIComponent(`
Service : ${data.service}
Ville : ${data.ville}
Surface : ${data.surface || 'Non renseignée'}
Email : ${data.email}
Téléphone : ${data.telephone || 'Non renseigné'}
Message : ${data.message || 'Aucun'}
Page : ${data.page}
Date : ${new Date(data.timestamp).toLocaleString('fr-BE')}
    `);
    
    // Ouvrir le client email par défaut
    window.location.href = `mailto:contact@moraiscleaning.be?subject=${subject}&body=${body}`;
    
    // Simuler succès pour l'UX
    return { success: true };
    
    // Option 2 : Utiliser un service comme FormSubmit.co (recommandé)
    /*
    const FORMSUBMIT_URL = 'https://formsubmit.co/ajax/votre-email@moraiscleaning.be';
    
    const response = await fetch(FORMSUBMIT_URL, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(data)
    });
    
    return await response.json();
    */
}

/**
 * Affiche le message de succès
 */
function showSuccess() {
    const form = document.getElementById('devisRapideForm');
    const successMsg = document.getElementById('devisSuccess');
    const errorMsg = document.getElementById('devisError');
    
    if (form) form.style.display = 'none';
    if (errorMsg) errorMsg.style.display = 'none';
    if (successMsg) {
        successMsg.style.display = 'block';
        
        // Scroll vers le message
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
    
    // Analytics/Tracking (optionnel)
    if (typeof gtag !== 'undefined') {
        gtag('event', 'conversion', {
            'send_to': 'AW-XXXXXXXXX/XXXXXX',
            'event_category': 'Devis',
            'event_label': 'Devis Rapide'
        });
    }
}

/**
 * Affiche le message d'erreur
 * @param {string} message - Message d'erreur à afficher
 */
function showError(message) {
    const errorMsg = document.getElementById('devisError');
    const successMsg = document.getElementById('devisSuccess');
    
    if (successMsg) successMsg.style.display = 'none';
    if (errorMsg) {
        errorMsg.style.display = 'block';
        
        // Personnaliser le message si nécessaire
        const errorText = errorMsg.querySelector('p');
        if (errorText && message) {
            errorText.textContent = message;
        }
        
        // Scroll vers le message
        errorMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

/**
 * Réinitialise le formulaire
 * @param {HTMLFormElement} form - Formulaire à réinitialiser
 */
function resetForm(form) {
    if (form) {
        form.reset();
        // Re-pré-sélectionner le service après reset
        setTimeout(preselectService, 100);
    }
}

/**
 * Valide le format de l'email
 * @param {string} email - Email à valider
 * @returns {boolean}
 */
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

/**
 * Smooth scroll vers le formulaire (utilisable depuis d'autres pages)
 * @param {string} service - Service à pré-sélectionner (optionnel)
 */
function scrollToDevisRapide(service = null) {
    const devisSection = document.getElementById('devis-rapide');
    if (devisSection) {
        devisSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
        // Pré-sélectionner un service spécifique si demandé
        if (service) {
            setTimeout(() => {
                const serviceSelect = document.getElementById('devis-service');
                if (serviceSelect) {
                    serviceSelect.value = service;
                    serviceSelect.focus();
                }
            }, 500);
        }
    }
}

// Export pour utilisation externe
window.DevisRapide = {
    scrollTo: scrollToDevisRapide,
    preselect: preselectService
};
