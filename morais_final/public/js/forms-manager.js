// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

/**
* FORMS MANAGER - MORAIS CLEANING
*
* Gestion des soumissions de formulaires vers n8n
* - Contact
* - Recrutement
*
* Inclut validation, UX loading, gestion erreurs
*/

import { N8N_CONTACT_WEBHOOK_URL, N8N_RECRUIT_WEBHOOK_URL, sendToN8N } from './config/n8n-config.js';

// ============================================================
// UTILITIES
// ============================================================

/**
* Récupère la langue courante
*/
function getCurrentLang() {
    try {
        return localStorage.getItem('morais_lang') || 'fr';
    } catch (e) {
        return 'fr';
    }
}

/**
* Valide un email
*/
function isValidEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(email);
}

/**
* Valide un téléphone (format international ou local)
*/
function isValidPhone(phone) {
    // Nettoyer le numéro
    const cleaned = phone.replace(/[\s\-\(\)\.]/g, '');
    // Accepter format international (+32...) ou local (0...)
return /^[\+]?[0-9]{8,15}$/.test(cleaned);
}

/**
* Sanitize input (trim + basic cleaning)
*/
function sanitize(str) {
    return String(str).trim().replace(/</g, '&lt;').replace(/>/g, '&gt;');
}

// ============================================================
// UI FEEDBACK
// ============================================================

/**
* Affiche un loader sur un bouton
*/
function showButtonLoader(button, originalText) {
    button.disabled = true;
    button.setAttribute('data-original-text', originalText);
    button.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';
}

/**
* Retire le loader d'un bouton
*/
function hideButtonLoader(button) {
    const originalText = button.getAttribute('data-original-text') || 'Envoyer';
    button.disabled = false;
    button.innerHTML = originalText;
}

/**
* Affiche une notification
*/
function showNotification(message, type = 'success') {
    // Supprimer les anciennes notifications
    document.querySelectorAll('.form-notification').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = `form-notification form-notification-${type}`;
    notification.innerHTML = `
    <div class="form-notification-content">
    <i class="fas fa-${type === 'success' ? 'check-circle' : 'exclamation-circle'}"></i>
    <span>${message}</span>
    </div>
    `;

    document.body.appendChild(notification);

    // Afficher avec animation
    setTimeout(() => notification.classList.add('show'), 100);

    // Supprimer après 5s
    setTimeout(() => {
        notification.classList.remove('show');
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// ============================================================
// CONTACT FORM
// ============================================================

/**
* Initialise le formulaire de contact
*/
export function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', handleContactSubmit);
    // console.log('Formulaire contact initialisé');
}

/**
* Gère la soumission du formulaire contact
*/
async function handleContactSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Récupérer les valeurs
    const formData = {
        fullName: sanitize(form.querySelector('[name="name"], [name="fullName"], #contact-name')?.value || ''),
        email: sanitize(form.querySelector('[name="email"], #contact-email')?.value || ''),
        phone: sanitize(form.querySelector('[name="phone"], #contact-phone')?.value || ''),
        serviceWanted: sanitize(form.querySelector('[name="service"], #contact-service')?.value || ''),
        message: sanitize(form.querySelector('[name="message"], #contact-message')?.value || ''),
        pageUrl: window.location.href,
        timestamp: new Date().toISOString(),
        lang: getCurrentLang()
};

// Validation
if (!formData.fullName) {
    showNotification('Veuillez entrer votre nom', 'error');
    return;
}

if (!formData.email || !isValidEmail(formData.email)) {
    showNotification('Veuillez entrer un email valide', 'error');
    return;
}

if (formData.phone && !isValidPhone(formData.phone)) {
    showNotification('Veuillez entrer un numéro de téléphone valide', 'error');
    return;
}

if (!formData.message) {
    showNotification('Veuillez entrer un message', 'error');
    return;
}

// Afficher loader
showButtonLoader(submitBtn, originalBtnText);

try {
    // Envoyer à n8n
    const result = await sendToN8N(N8N_CONTACT_WEBHOOK_URL, formData);

    if (result.success) {
        showNotification('Votre message a été envoyé avec succès ! Nous vous répondrons dans les plus brefs délais.', 'success');
        form.reset();
    } else {
        throw new Error(result.error);
    }

} catch (error) {
    // console.error('Erreur soumission contact:', error);
    showNotification('Une erreur est survenue. Veuillez réessayer ou nous contacter par téléphone.', 'error');

} finally {
    hideButtonLoader(submitBtn);
}
}

// ============================================================
// RECRUITMENT FORM
// ============================================================

/**
* Initialise le formulaire de recrutement
*/
export function initRecruitmentForm() {
    const form = document.getElementById('recruitment-form') || document.getElementById('recrutement-form');
    if (!form) return;

    form.addEventListener('submit', handleRecruitmentSubmit);
    // console.log('Formulaire recrutement initialisé');
}

/**
* Gère la soumission du formulaire recrutement
*/
async function handleRecruitmentSubmit(e) {
    e.preventDefault();

    const form = e.target;
    const submitBtn = form.querySelector('button[type="submit"]');
    const originalBtnText = submitBtn.textContent;

    // Récupérer les valeurs
    const formData = {
        fullName: sanitize(form.querySelector('[name="name"], [name="fullName"], #recruit-name')?.value || ''),
        email: sanitize(form.querySelector('[name="email"], #recruit-email')?.value || ''),
        phone: sanitize(form.querySelector('[name="phone"], #recruit-phone')?.value || ''),
        city: sanitize(form.querySelector('[name="city"], #recruit-city')?.value || ''),
        message: sanitize(form.querySelector('[name="message"], [name="experience"], #recruit-message')?.value || ''),
        pageUrl: window.location.href,
        timestamp: new Date().toISOString(),
        lang: getCurrentLang()
};

// Gestion du CV (fichier)
const cvInput = form.querySelector('input[type="file"]');
if (cvInput && cvInput.files.length > 0) {
    const file = cvInput.files[0];

    // Vérifier la taille (max 5MB)
if (file.size > 5 * 1024 * 1024) {
    showNotification('Le fichier CV est trop volumineux (max 5MB)', 'error');
    return;
}

// Convertir en base64 pour les petits fichiers
if (file.size <= 2 * 1024 * 1024) {
    try {
        const base64 = await fileToBase64(file);
        formData.cvFile = {
            name: file.name,
            type: file.type,
            size: file.size,
            data: base64
        };
    } catch (error) {
        // console.warn('Erreur conversion CV en base64:', error);
    }
} else {
    // Pour les gros fichiers, juste les métadonnées
    formData.cvFile = {
        name: file.name,
        type: file.type,
        size: file.size,
        note: 'Fichier trop volumineux pour envoi direct. Veuillez l\'envoyer par email.'
    };
}
}

// Validation
if (!formData.fullName) {
    showNotification('Veuillez entrer votre nom', 'error');
    return;
}

if (!formData.email || !isValidEmail(formData.email)) {
    showNotification('Veuillez entrer un email valide', 'error');
    return;
}

if (formData.phone && !isValidPhone(formData.phone)) {
    showNotification('Veuillez entrer un numéro de téléphone valide', 'error');
    return;
}

// Afficher loader
showButtonLoader(submitBtn, originalBtnText);

try {
    // Envoyer à n8n
    const result = await sendToN8N(N8N_RECRUIT_WEBHOOK_URL, formData);

    if (result.success) {
        showNotification('Votre candidature a été envoyée avec succès ! Nous examinerons votre profil et vous contacterons rapidement.', 'success');
        form.reset();
    } else {
        throw new Error(result.error);
    }

} catch (error) {
    // console.error('Erreur soumission recrutement:', error);
    showNotification('Une erreur est survenue. Veuillez réessayer ou nous envoyer votre CV par email.', 'error');

} finally {
    hideButtonLoader(submitBtn);
}
}

/**
* Convertit un fichier en base64
*/
function fileToBase64(file) {
    return new Promise((resolve, reject) => {
        const reader = new FileReader();
        reader.onload = () => {
            const base64 = reader.result.split(',')[1];
            resolve(base64);
        };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}

// ============================================================
// INIT GLOBAL
// ============================================================

export function initForms() {
    initContactForm();
    initRecruitmentForm();
}
