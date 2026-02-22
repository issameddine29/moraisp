// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

{
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Devis Nettoyage Professionnel",
    "provider": {
        "@type": "Organization",
        "name": "Morais Cleaning",
        "url": "https://moraiscleaning.be",
        "telephone": "+32478951269",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Bruxelles",
            "addressCountry": "BE"
        }
    },
    "description": "Devis gratuit pour services de nettoyage professionnel à Bruxelles",
    "areaServed": {
        "@type": "AdministrativeArea",
        "name": "Région Bruxelloise"
    },
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Services de Nettoyage",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage de Bureaux"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Nettoyage Résidentiel"
                }
            }
        ]
    }
}

document.addEventListener('DOMContentLoaded', function () {
    // Variables globales pour le calcul
    let quoteData = {
        serviceType: null,
        surface: 100,
        options: [],
        frequency: null,
        estimatedPrice: 0
    };

    // Navigation entre étapes
    const steps = document.querySelectorAll('.calculator-step');
    const stepContents = document.querySelectorAll('.step-content');

    // Navigation clic sur les étapes
    steps.forEach(step => {
        step.addEventListener('click', function () {
            const stepNumber = this.dataset.step;
            goToStep(stepNumber);
        });
    });

    // Navigation suivant/précédent
    document.querySelectorAll('.next-step').forEach(button => {
        button.addEventListener('click', function () {
            const nextStep = this.dataset.next;
            if (validateCurrentStep()) {
                goToStep(nextStep);
                updateEstimation();
            }
        });
    });

    document.querySelectorAll('.prev-step').forEach(button => {
        button.addEventListener('click', function () {
            const prevStep = this.dataset.prev;
            goToStep(prevStep);
        });
    });

    // Gestion des sélections de service
    document.querySelectorAll('.service-option[data-service]').forEach(option => {
        option.addEventListener('click', function () {
            // Retirer la sélection précédente
            document.querySelectorAll('.service-option[data-service]').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Ajouter la nouvelle sélection
            this.classList.add('selected');
            quoteData.serviceType = this.dataset.service;

            // Mettre à jour l'estimation
            updateEstimation();
        });
    });

    // Gestion des sélections de fréquence
    document.querySelectorAll('.service-option[data-frequency]').forEach(option => {
        option.addEventListener('click', function () {
            // Retirer la sélection précédente
            document.querySelectorAll('.service-option[data-frequency]').forEach(opt => {
                opt.classList.remove('selected');
            });

            // Ajouter la nouvelle sélection
            this.classList.add('selected');
            quoteData.frequency = this.dataset.frequency;

            // Mettre à jour l'estimation
            updateEstimation();
        });
    });

    // Slider de surface
    const surfaceSlider = document.getElementById('surface-area');
    const surfaceValue = document.getElementById('surface-value');

    if (surfaceSlider) {
        surfaceSlider.addEventListener('input', function () {
            quoteData.surface = parseInt(this.value);
            surfaceValue.textContent = `${this.value} m²`;
            updateEstimation();
        });
    }

    // Gestion des options
    document.querySelectorAll('input[name="options"]').forEach(checkbox => {
        checkbox.addEventListener('change', function () {
            const optionValue = this.value;

            if (this.checked) {
                if (!quoteData.options.includes(optionValue)) {
                    quoteData.options.push(optionValue);
                }
            } else {
                quoteData.options = quoteData.options.filter(opt => opt !== optionValue);
            }

            updateEstimation();
        });
    });

    // Soumission du formulaire
    const quoteForm = document.getElementById('quoteForm');
    const submitQuoteBtn = document.getElementById('submitQuoteBtn');

    if (quoteForm) {
        quoteForm.addEventListener('submit', async function (e) {
            e.preventDefault();

            // Validation
            let isValid = true;
            const requiredFields = this.querySelectorAll('[required]');

            requiredFields.forEach(field => {
                if (!field.value.trim()) {
                    isValid = false;
                    showError(field, 'Ce champ est obligatoire');
                } else {
                    clearError(field);
                }
            });

            // Validation email
            const emailField = document.getElementById('quote-email');
            if (emailField.value && !isValidEmail(emailField.value)) {
                isValid = false;
                showError(emailField, 'Veuillez entrer une adresse email valide');
            }

            // Validation téléphone
            const phoneField = document.getElementById('quote-phone');
            if (phoneField.value && !isValidPhone(phoneField.value)) {
                isValid = false;
                showError(phoneField, 'Veuillez entrer un numéro de téléphone valide');
            }

            if (!isValid) {
                showNotification('Veuillez corriger les erreurs dans le formulaire', 'error');
                return;
            }

            // Préparer les données du formulaire
            const contactData = {
                senderName: document.getElementById('senderName').value,
                senderEmail: document.getElementById('senderEmail').value,
                senderPhone: document.getElementById('senderPhone').value,
                senderCompany: document.getElementById('senderCompany').value,
                messageSubject: document.getElementById('messageSubject').value,
                messageContent: document.getElementById('messageContent').value,
                modalRepId: document.getElementById('modalRepId')?.value || '',
                modalRepEmail: document.getElementById('modalRepEmail')?.value || '',
                source: 'contact',
                page: window.location.pathname,
                timestamp: new Date().toISOString()
            };

            // Désactiver le bouton
            submitQuoteBtn.disabled = true;
            submitQuoteBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Envoi en cours...';

            try {
                // Envoi au webhook n8n
                const WEBHOOK_URL = 'https://n8n.morais-cleaning.com/webhook/contact';
                
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(contactData)
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }

                const result = await response.json();
                console.log('Webhook response:', result);

                // Succès
                showNotification('Message envoyé avec succès ! Nous vous répondrons sous 24h.', 'success');

                // Réinitialisation
                quoteForm.reset();
                resetCalculator();

                // Scroll vers le haut
                window.scrollTo({ top: 0, behavior: 'smooth' });

            } catch (error) {
                showNotification('Une erreur est survenue. Veuillez réessayer.', 'error');
                console.error('Erreur:', error);
            } finally {
                submitQuoteBtn.disabled = false;
                submitQuoteBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Envoyer ma demande';
            }
            });
        }

        // Gestion des FAQ
        const faqQuestions = document.querySelectorAll('.faq-question');
        faqQuestions.forEach(question => {
            question.addEventListener('click', function () {
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                const answerId = this.getAttribute('aria-controls');
                const answer = document.getElementById(answerId);

                // Fermer toutes les autres FAQ
                faqQuestions.forEach(q => {
                    if (q !== this) {
                        q.setAttribute('aria-expanded', 'false');
                        q.classList.remove('active');
                        const otherAnswerId = q.getAttribute('aria-controls');
                        const otherAnswer = document.getElementById(otherAnswerId);
                        if (otherAnswer) {
                            otherAnswer.classList.remove('active');
                            otherAnswer.hidden = true;
                        }
                    }
                });

                // Basculer l'état actuel
                this.setAttribute('aria-expanded', !isExpanded);
                this.classList.toggle('active');

                if (answer) {
                    answer.classList.toggle('active');
                    answer.hidden = isExpanded;
                }
            });
        });

        // Animation au scroll
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('fade-in');
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        document.querySelectorAll('.fade-in:not(.visible)').forEach(el => observer.observe(el));
    });

    // Fonctions utilitaires
    function goToStep(stepNumber) {
        // Mettre à jour la navigation
        document.querySelectorAll('.calculator-step').forEach(step => {
            step.classList.remove('active');
            if (parseInt(step.dataset.step) < parseInt(stepNumber)) {
                step.classList.add('completed');
            } else {
                step.classList.remove('completed');
            }
        });

        document.querySelector(`.calculator-step[data-step="${stepNumber}"]`).classList.add('active');

        // Afficher le contenu correspondant
        document.querySelectorAll('.step-content').forEach(content => {
            content.classList.remove('active');
        });

        document.getElementById(`step-${stepNumber}`).classList.add('active');
    }

    function validateCurrentStep() {
        const currentStep = document.querySelector('.step-content.active');
        let isValid = true;

        // Validation spécifique à l'étape 1
        if (currentStep.id === 'step-1') {
            const selectedService = document.querySelector('.service-option[data-service].selected');
            if (!selectedService) {
                isValid = false;
                showNotification('Veuillez sélectionner un type de service', 'error');
            }
        }

        // Validation spécifique à l'étape 3
        if (currentStep.id === 'step-3') {
            const selectedFrequency = document.querySelector('.service-option[data-frequency].selected');
            if (!selectedFrequency) {
                isValid = false;
                showNotification('Veuillez sélectionner une fréquence', 'error');
            }
        }

        return isValid;
    }

    function updateEstimation() {
        // Calcul basique de l'estimation
        let basePrice = 0;

        // Prix de base par type de service
        switch (quoteData.serviceType) {
            case 'bureaux':
            basePrice = 25; // € par heure
            break;
            case 'residentiel':
            basePrice = 28; // € par heure
            break;
            case 'specialise':
            basePrice = 35; // € par heure
            break;
            case 'industriel':
            basePrice = 30; // € par heure
            break;
            default:
            basePrice = 25;
        }

        // Facteur surface (approximatif)
    const surfaceFactor = Math.max(1, quoteData.surface / 100);

    // Options supplémentaires
    let optionsFactor = 1;
    quoteData.options.forEach(option => {
        switch (option) {
            case 'tapis':
            case 'vitres':
            optionsFactor += 0.2;
            break;
            case 'desinfection':
            optionsFactor += 0.15;
            break;
            case 'materiel':
            optionsFactor += 0.1;
            break;
        }
    });

    // Facteur fréquence
    let frequencyFactor = 1;
    switch (quoteData.frequency) {
        case 'ponctuel':
        frequencyFactor = 1.2;
        break;
        case 'hebdomadaire':
        frequencyFactor = 0.9;
        break;
        case 'mensuel':
        frequencyFactor = 1;
        break;
        case 'quotidien':
        frequencyFactor = 0.8;
        break;
    }

    // Calcul final
    let estimatedHours = Math.max(2, surfaceFactor * 2); // Minimum 2 heures
    quoteData.estimatedPrice = Math.round(basePrice * estimatedHours * optionsFactor * frequencyFactor);

    // Mise à jour de l'affichage
    const priceElement = document.getElementById('estimated-price');
    if (priceElement && quoteData.estimatedPrice > 0) {
        priceElement.textContent = `€ ${quoteData.estimatedPrice}`;
    }
}

function resetCalculator() {
    // Réinitialiser les données
    quoteData = {
        serviceType: null,
        surface: 100,
        options: [],
        frequency: null,
        estimatedPrice: 0
    };

    // Réinitialiser l'interface
    document.querySelectorAll('.service-option').forEach(opt => {
        opt.classList.remove('selected');
    });

    document.querySelectorAll('input[name="options"]').forEach(cb => {
        cb.checked = false;
    });

    const slider = document.getElementById('surface-area');
    if (slider) {
        slider.value = 100;
        document.getElementById('surface-value').textContent = '100 m²';
    }

    const priceElement = document.getElementById('estimated-price');
    if (priceElement) {
        priceElement.textContent = '€ ---';
    }

    // Retourner à la première étape
    goToStep('1');
}

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidPhone(phone) {
    const phoneRegex = /^[+]?[\d\s\-\(\)]{10,}$/;
    return phoneRegex.test(phone.replace(/\s/g, ''));
}

function showError(field, message) {
    // Supprimer l'erreur précédente
    clearError(field);

    // Ajouter la nouvelle erreur
    const errorElement = document.createElement('div');
    errorElement.className = 'error-message';
    errorElement.style.cssText = `
    color: var(--accent);
    font-size: 0.85rem;
    margin-top: 5px;
    display: block;
    `;
    errorElement.textContent = message;
    field.parentElement.appendChild(errorElement);

    field.style.borderColor = 'var(--accent)';
}

function clearError(field) {
    const existingError = field.parentElement.querySelector('.error-message');
    if (existingError) {
        existingError.remove();
    }
    field.style.borderColor = '';
}

function showNotification(message, type = 'success') {
    // Supprimer les notifications existantes
    document.querySelectorAll('.notification-toast').forEach(n => n.remove());

    const notification = document.createElement('div');
    notification.className = `notification-toast ${type}`;
    notification.setAttribute('role', 'alert');
    notification.setAttribute('aria-live', 'polite');

    const icon = type === 'success' ? 'check-circle' : 'exclamation-triangle';

    notification.innerHTML = `
    <div class="notification-content">
    <i class="fas fa-${icon}"></i>
    <span>${message}</span>
    </div>
    `;

    document.body.appendChild(notification);

    // Animation d'entrée
    requestAnimationFrame(() => {
        notification.style.transform = 'translateX(0)';
        notification.style.opacity = '1';
    });

    // Supprimer après 5 secondes
    setTimeout(() => {
        notification.style.transform = 'translateX(400px)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    }, 5000);
}

// Support pour les anciens navigateurs
if (!Element.prototype.closest) {
    Element.prototype.closest = function (s) {
        var el = this;
        do {
            if (el.matches(s)) return el;
            el = el.parentElement || el.parentNode;
        } while (el !== null && el.nodeType === 1);
        return null;
    };
}

if ('loading' in HTMLImageElement.prototype) {
    const images = document.querySelectorAll('img[loading="lazy"]');
    images.forEach(img => {
        img.src = img.dataset.src;
    });
}