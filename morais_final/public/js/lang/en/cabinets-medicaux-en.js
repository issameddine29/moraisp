// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// en-translation-clinics.js - English manual translation for "Petites Cliniques"


function translateToEnglishClinics() {
    // console.log('Translating clinics page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Small Clinics & Medical Offices Cleaning <span class="clinic-badge"><i class="fas fa-shield-alt"></i> Medical hygiene</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Specialized cleaning and disinfection service for small clinics, medical centers and group practices in Brussels. Hospital protocols adapted to medium-sized structures.';
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(btn => {
        if (btn.textContent.includes('Devis clinique')) {
            btn.innerHTML = '<i class="fas fa-clipboard-check"></i> Clinic quote';
        }
        if (btn.textContent.includes('Contact rapide')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Quick contact';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.clinic-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Clinic specialized';
        features[1].textContent = 'Adapted schedules';
        features[2].textContent = 'Sanitary standards';
        features[3].textContent = 'Trained team';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Medical cleaning for medium-sized structures';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Small clinics and group medical practices have specific hygiene needs: several consultation rooms, common areas, sterilization zones, and a larger patient flow. Our service is specially designed for these structures.';
        descParagraphs[1].textContent = 'We adapt our protocols to the size of your clinic, respecting critical areas (operating room, dressing rooms, laboratory) while optimizing costs for medium-sized structures.';
    }

    const hygieneItem = document.querySelector('.hygiene-item');
    if (hygieneItem) {
        const hygieneTitle = hygieneItem.querySelector('h3');
        if (hygieneTitle) {
            hygieneTitle.innerHTML = '<i class="fas fa-exclamation-circle"></i> Controlled risk areas';
        }
        const hygieneText = hygieneItem.querySelector('p');
        if (hygieneText) {
            hygieneText.textContent = 'We particularly identify and treat high infection risk areas: operating rooms, sterilization units, analysis laboratories.';
        }
    }

    // 3. TYPES OF CLINICS SECTION
    const clinicsTitle = document.querySelector('.section-title');
    if (clinicsTitle && clinicsTitle.textContent.includes('Pour quelles structures')) {
        clinicsTitle.textContent = 'For which medical structures?';
    }

    // Client cards (clinics types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 3) {
    // Card 1: Physiotherapy centers
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Physiotherapy centers';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = '3-10 rooms';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Cleaning of rehabilitation rooms, rehabilitation pool, therapeutic equipment, common areas.';
    }

    // Card 2: Medical houses
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Medical houses';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'General practitioners';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Maintenance of common waiting rooms, administrative offices, multiple practices, shared sanitary facilities.';
    }

    // Card 3: Dental centers
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Dental centers';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Multiple dentists';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Disinfection of multiple dental units, central sterilization room, prosthesis laboratory.';
    }
}

// 4. CLEANING PROTOCOL SECTION
const protocolTitle = document.querySelectorAll('.section-title')[1];
if (protocolTitle && protocolTitle.textContent.includes('Notre protocole')) {
    protocolTitle.textContent = 'Our protocol for clinics';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Initial audit';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Analysis of patient flows, identification of critical areas, personalized cleaning plan for your structure.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Medical areas disinfection';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Complete treatment of consultation rooms, equipment, work surfaces and contact points.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Common areas';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Thorough cleaning of waiting room, reception, corridors, patient and staff sanitary facilities.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Technical areas';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Maintenance of sterilization rooms, laboratories, internal pharmacies, technical premises.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Administrative offices';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Cleaning of secretarial offices, archives, meeting rooms, staff relaxation areas.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Control & Documentation';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Systematic verification, follow-up sheet, disinfection certification, intervention report.';
}

// 5. SPECIFIC ADVANTAGES SECTION
const advantagesTitle = document.querySelectorAll('.section-title')[2];
if (advantagesTitle && advantagesTitle.textContent.includes('Pourquoi choisir')) {
    advantagesTitle.textContent = 'Why choose our service for clinics?';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Advantage 1
    const adv1Title = methodSteps[0].querySelector('h3');
    if (adv1Title) adv1Title.textContent = 'Adapted rates';
    const adv1Desc = methodSteps[0].querySelector('p');
    if (adv1Desc) adv1Desc.textContent = 'Economic packages for medium-sized structures, no extra cost for small clinics.';

    // Advantage 2
    const adv2Title = methodSteps[1].querySelector('h3');
    if (adv2Title) adv2Title.textContent = 'Schedule flexibility';
    const adv2Desc = methodSteps[1].querySelector('p');
    if (adv2Desc) adv2Desc.textContent = 'Interventions in the evening, weekends, or according to your opening hours to the public.';

    // Advantage 3
    const adv3Title = methodSteps[2].querySelector('h3');
    if (adv3Title) adv3Title.textContent = 'Trained personnel';
    const adv3Desc = methodSteps[2].querySelector('p');
    if (adv3Desc) adv3Desc.textContent = 'Team specialized in hospital hygiene, knowing the specificities of clinics.';

    // Advantage 4
    const adv4Title = methodSteps[3].querySelector('h3');
    if (adv4Title) adv4Title.textContent = 'Custom contract';
    const adv4Desc = methodSteps[3].querySelector('p');
    if (adv4Desc) adv4Desc.textContent = 'Flexible commitment (daily, weekly, monthly) adapted to your medical activity.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && faqTitle.textContent.includes('Questions fréquentes')) {
    faqTitle.textContent = 'Frequently asked questions - Clinics';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'What difference with cleaning of large hospitals?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'We adapt hospital protocols to medium-sized structures. Less bureaucracy, more flexibility, adapted rates, and a more direct relationship with the clinic manager.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Can you manage multiple medical sites?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Yes, we intervene on multiple sites of the same organization (satellite clinics, secondary practices) with centralized coordination and grouped rates.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'How do you handle clinic medical waste?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'We implement a compliant DASRI sorting system, with collection by approved provider, complete traceability, and training of your staff in good practices.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Do you offer free hygiene audits?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Yes, we perform an initial free audit of your premises, with recommendations to optimize your cleaning procedures and reduce infection risks.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'What training for your medical personnel?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Our agents follow a specific "Hygiene in medico-social environment" training, with annual refresher, and are aware of common infectious diseases.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Do you have medical references in Brussels?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Yes, we clean several medical houses, physiotherapy centers and dental clinics in Brussels. References available on request with client agreement.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'A clean clinic = confident patients';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Hygiene is the first thing your patients notice. Entrust the cleaning of your clinic to professionals trained in medical sanitary requirements.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis clinique médicale')) {
            btn.innerHTML = '<i class="fas fa-hospital"></i> Medical clinic quote';
        }
        if (btn.textContent.includes('Audit gratuit')) {
            btn.innerHTML = '<i class="fas fa-calendar-check"></i> Free audit';
        }
        if (btn.textContent.includes('Urgence sanitaire')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Sanitary emergency';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> First free audit - No commitment';
}

// 8. UPDATE NOTIFICATIONS AND OTHER TEXTS
updateClinicNotifications();

// console.log('Translation to English completed!');

// Update language switcher
updateLanguageButtons('en');
}

function updateClinicNotifications() {
    // Update notification texts
    const clinicBtns = document.querySelectorAll('[onclick*="cliniques"]');
    clinicBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            localStorage.setItem('medicalService', 'clinic');
            showNotification('Request for medical clinic registered.', 'success');
        });
    });
}

// Notification function update
function showNotification(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `
    <i class="fas fa-bell"></i>
    <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishClinics;
