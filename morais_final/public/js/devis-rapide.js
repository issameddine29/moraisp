/**
 * devis-rapide.js — Morais Cleaning
 * VERSION 4.0 — AUDIT COMPLET
 *
 * CORRECTIONS :
 *  - JSON APLATI et standardisé (cohérent avec devis complet + recrutement)
 *  - Gestion d'erreur robuste (try/catch, response.ok, timeout)
 *  - Délai réaliste : 48h ouvrables (pas 2h)
 *  - Zéro alert(), zéro mailto:
 *  - Masquage formulaire après succès
 *  - UX premium B2B
 */

/* ============================================ */
/* CONFIGURATION                                */
/* ============================================ */
const MINI_DEVIS_CONFIG = {
    webhookUrl: 'https://n8n.morais-cleaning.com/webhook/mini-devis',
    timeout: 15000,
    maxRetries: 2,
    retryDelay: 1000
};

/* ============================================ */
/* MAPPING PAGES → SERVICES                     */
/* ============================================ */
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

/* ============================================ */
/* INITIALISATION                               */
/* ============================================ */
document.addEventListener('DOMContentLoaded', function() {
    preselectService();
    initFormValidation();
    initFormSubmission();
});

/* ============================================ */
/* PRÉ-SÉLECTION AUTOMATIQUE DU SERVICE         */
/* ============================================ */
function preselectService() {
    const currentPage = window.location.pathname.split('/').pop();
    const serviceValue = SERVICE_PAGE_MAPPING[currentPage];
    
    if (serviceValue) {
        const serviceSelect = document.getElementById('devis-service');
        if (serviceSelect) {
            serviceSelect.value = serviceValue;
        }
    }
}

/* ============================================ */
/* VALIDATION EN TEMPS RÉEL                     */
/* ============================================ */
function initFormValidation() {
    const form = document.getElementById('devisRapideForm');
    if (!form) return;

    // Validation temps réel sur les champs requis
    form.querySelectorAll('input[required], select[required]').forEach(field => {
        field.addEventListener('blur', () => validateField(field));
        field.addEventListener('input', () => clearFieldError(field));
    });
}

function validateField(field) {
    clearFieldError(field);
    const value = field.value?.trim() || '';
    let isValid = true;
    let errorMsg = '';

    if (field.hasAttribute('required') && !value) {
        isValid = false;
        errorMsg = 'Ce champ est obligatoire.';
    } else if (field.type === 'email' && value && !isValidEmail(value)) {
        isValid = false;
        errorMsg = 'Adresse email invalide.';
    } else if (field.type === 'tel' && value && !isValidPhone(value)) {
        isValid = false;
        errorMsg = 'Numéro de téléphone invalide.';
    }

    if (!isValid) {
        showFieldError(field, errorMsg);
    }

    return isValid;
}

function showFieldError(field, message) {
    field.classList.add('field-error');
    field.setAttribute('aria-invalid', 'true');
    
    const errorEl = document.createElement('div');
    errorEl.className = 'field-error-msg';
    errorEl.textContent = message;
    errorEl.style.cssText = 'color:#e74c3c;font-size:0.85rem;margin-top:4px;';
    field.parentElement.appendChild(errorEl);
}

function clearFieldError(field) {
    field.classList.remove('field-error');
    field.removeAttribute('aria-invalid');
    const errorEl = field.parentElement.querySelector('.field-error-msg');
    if (errorEl) errorEl.remove();
}

function isValidEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

function isValidPhone(phone) {
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
    return /^[\+]?[0-9]{8,15}$/.test(cleaned);
}

/* ============================================ */
/* SOUMISSION DU FORMULAIRE                     */
/* ============================================ */
function initFormSubmission() {
    const form = document.getElementById('devisRapideForm');
    if (!form) return;

    form.addEventListener('submit', handleFormSubmit);
}

async function handleFormSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnHtml = submitBtn.innerHTML;

    // Validation de tous les champs
    let isFormValid = true;
    form.querySelectorAll('input[required], select[required]').forEach(field => {
        if (!validateField(field)) isFormValid = false;
    });

    if (!isFormValid) {
        const firstError = form.querySelector('[aria-invalid="true"]');
        if (firstError) firstError.scrollIntoView({ behavior: 'smooth', block: 'center' });
        return;
    }

    // Désactiver le bouton et afficher le loader
    submitBtn.disabled = true;
    submitBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

    // Cacher les messages précédents
    hideMessages();

    /**
     * JSON APLATI — Structure standardisée compatible n8n / Airtable
     * Cohérent avec calculateur-devis-avance.js et forms-manager.js
     */
    const payload = {
        // Coordonnées
        nom:        sanitize(document.getElementById('devis-nom')?.value || ''),
        email:      sanitize(document.getElementById('devis-email')?.value || ''),
        telephone:  sanitize(document.getElementById('devis-telephone')?.value || ''),
        
        // Demande
        ville:      sanitize(document.getElementById('devis-ville')?.value || ''),
        service:    sanitize(document.getElementById('devis-service')?.value || ''),
        surface:    sanitize(document.getElementById('devis-surface')?.value || ''),
        message:    sanitize(document.getElementById('devis-message')?.value || ''),
        
        // Méta
        source:     'mini-devis',
        page:       window.location.pathname,
        timestamp:  new Date().toISOString()
    };

    try {
        const result = await sendToWebhook(payload);

        if (result.success) {
            // SUCCÈS : Masquer le formulaire et afficher le message
            form.style.display = 'none';
            showSuccess();

            // Analytics (optionnel)
            if (typeof gtag !== 'undefined') {
                gtag('event', 'conversion', {
                    'event_category': 'Mini-Devis',
                    'event_label': payload.service
                });
            }
        } else {
            throw new Error(result.error || 'Erreur inconnue');
        }

    } catch (error) {
        console.error('[MC] Erreur envoi mini-devis:', error);
        showError('Une erreur est survenue (' + (error.message || 'réseau') + '). Veuillez réessayer ou nous appeler au <strong>0478/95.12.69</strong>.');
        
        // Réactiver le bouton
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalBtnHtml;
    }
}

/* ============================================ */
/* ENVOI VERS WEBHOOK N8N — ROBUSTE             */
/* ============================================ */
async function sendToWebhook(data) {
    const { webhookUrl, timeout, maxRetries, retryDelay } = MINI_DEVIS_CONFIG;
    let lastError = null;

    for (let attempt = 0; attempt <= maxRetries; attempt++) {
        try {
            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), timeout);

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify(data),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            // Vérifier le statut HTTP
            if (!response.ok) {
                throw new Error('HTTP ' + response.status);
            }

            // Tenter de parser le JSON (fallback si réponse vide ou texte)
            let result = {};
            try {
                const text = await response.text();
                if (text) {
                    result = JSON.parse(text);
                }
            } catch (parseError) {
                // n8n peut retourner du texte brut — ce n'est pas une erreur
            }

            return { success: true, data: result };

        } catch (error) {
            lastError = error;
            
            // Retry si ce n'est pas la dernière tentative
            if (attempt < maxRetries) {
                await new Promise(resolve => setTimeout(resolve, retryDelay));
            }
        }
    }

    return { success: false, error: lastError?.message || 'Erreur réseau' };
}

/* ============================================ */
/* AFFICHAGE MESSAGES SUCCÈS / ERREUR           */
/* ============================================ */
function showSuccess() {
    const successDiv = document.getElementById('devisSuccess');
    if (successDiv) {
        successDiv.style.display = 'block';
        successDiv.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
}

function showError(htmlMessage) {
    const errorDiv = document.getElementById('devisError');
    if (errorDiv) {
        const errorText = errorDiv.querySelector('p');
        if (errorText) errorText.innerHTML = htmlMessage;
        errorDiv.style.display = 'block';
        errorDiv.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    }
}

function hideMessages() {
    const successDiv = document.getElementById('devisSuccess');
    const errorDiv = document.getElementById('devisError');
    if (successDiv) successDiv.style.display = 'none';
    if (errorDiv) errorDiv.style.display = 'none';
}

/* ============================================ */
/* UTILITAIRES                                  */
/* ============================================ */
function sanitize(str) {
    return String(str).trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

/**
 * API publique pour utilisation externe
 */
function scrollToDevisRapide(service = null) {
    const devisSection = document.getElementById('devis-rapide');
    if (devisSection) {
        devisSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
        
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

window.DevisRapide = {
    scrollTo: scrollToDevisRapide,
    preselect: preselectService
};
