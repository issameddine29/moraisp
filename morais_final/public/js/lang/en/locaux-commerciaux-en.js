// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// en-translation-commercial.js - English translation for "Nettoyage Locaux Commerciaux"


function translateToEnglishCommercial() {
    // console.log('Translating commercial page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Commercial Premises Cleaning <span class="business-badge"><i class="fas fa-briefcase"></i> Professional</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Regular professional maintenance of your commercial spaces in Brussels. Offices, shops, restaurants, shopping centers. A clean environment for your clients and staff.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis commercial') || btn.textContent.includes('Commercial quote')) {
            btn.innerHTML = '<i class="fas fa-building"></i> Commercial quote';
        }
        if (btn.textContent.includes('Appeler maintenant') || btn.textContent.includes('Call now')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Call now';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.commercial-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Regular contracts';
        features[1].textContent = 'Flexible schedules';
        features[2].textContent = 'Ecological products';
        features[3].textContent = 'Professional insurance';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'A spotless professional environment';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Your company\'s image depends on the cleanliness of your premises. We offer tailor-made commercial cleaning solutions adapted to your specific needs and opening hours.';
        descParagraphs[1].textContent = 'Our team trained in commercial cleaning techniques intervenes outside working hours to avoid disrupting your activity. We use professional equipment and effective, environmentally friendly products.';
    }

    const businessItem = document.querySelector('.business-item');
    if (businessItem) {
        const businessTitle = businessItem.querySelector('h3');
        if (businessTitle) {
            businessTitle.innerHTML = '<i class="fas fa-chart-line"></i> Impact on your image';
        }
        const businessText = businessItem.querySelector('p');
        if (businessText) {
            businessText.textContent = 'Clean premises increase customer satisfaction by 40% and improve your team\'s productivity. Invest in cleanliness, invest in your success.';
        }
    }

    // 3. COMMERCIAL TYPES SECTION
    const travauxTitle = document.querySelector('.section-title');
    if (travauxTitle && travauxTitle.textContent.includes('Nos spécialités commerciales')) {
        travauxTitle.textContent = 'Our commercial specialties';
    }

    // Client cards (commercial types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 5) {
    // Card 1: Offices
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title && card1Title.textContent.includes('Bureaux d\'entreprise')) {
        card1Title.textContent = 'Corporate offices';
    }
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Companies & startups';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Daily or weekly cleaning of offices, meeting rooms, common areas and professional sanitary facilities.';
    }

    // Card 2: Retail
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title && card2Title.textContent.includes('Commerces de détail')) {
        card2Title.textContent = 'Retail stores';
    }
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Boutiques & shops';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Cleaning of windows, floors, fitting rooms and sales areas. Interventions outside opening hours.';
    }

    // Card 3: Restaurants
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title && card3Title.textContent.includes('Restaurants & Horeca')) {
        card3Title.textContent = 'Restaurants & Hospitality';
    }
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Food safety';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Professional cleaning of kitchens, dining rooms, sanitary facilities. Degreasing, disinfection compliant with AFSCA standards.';
    }

    // Card 4: Shopping centers
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title && card4Title.textContent.includes('Centres commerciaux')) {
        card4Title.textContent = 'Shopping centers';
    }
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Large surfaces';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Maintenance of aisles, public toilets, escalators, rest areas. Custom intervention schedule.';
    }

    // Card 5: Gyms
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title && card5Title.textContent.includes('Salles de sport')) {
        card5Title.textContent = 'Gyms & Fitness centers';
    }
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Sports facilities';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Disinfection of machines, floors, locker rooms and showers. Fight against bacteria and fungi in humid environments.';
    }
}

// 4. INCLUDED SERVICES SECTION
const includedTitle = document.querySelectorAll('.section-title')[1];
if (includedTitle && includedTitle.textContent.includes('Notre offre complète')) {
    includedTitle.textContent = 'Our complete business offer';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Free initial audit';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Visit of your premises, needs analysis, development of a personalized cleaning plan according to your activity.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Tailored contract';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Adapted frequency (daily, weekly, occasional). Flexible hours according to your opening constraints.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Floor cleaning';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Vacuuming, washing, polishing according to the flooring (carpet, parquet, tiles, concrete). Specific treatments.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Professional sanitary facilities';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Thorough cleaning of toilets, urinals, sinks. Restocking of consumables (soap, paper).';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Common areas';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Maintenance of office kitchens, break rooms, corridors, elevators, reception halls and lobbies.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Follow-up and reporting';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Regular meeting with the manager, control checklists, intervention reports, responsiveness to requests.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && equipmentTitle.textContent.includes('Solutions techniques professionnelles')) {
    equipmentTitle.textContent = 'Professional technical solutions';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Single-brush and scrubber-driers';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Professional machines for large spaces. Wash, rinse, dry in one pass. Water savings.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'HVE equipment';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'High-temperature steam cleaning for delicate surfaces. Elimination of bacteria without chemicals.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Commercial vacuum cleaners';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Powerful and silent. HEPA filtration for allergens. Suitable for carpets and hard surfaces.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Ecological products';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Complete range of Ecolabel certified products. Effective, safe for users and the environment.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && faqTitle.textContent.includes('Questions commerciales fréquentes')) {
    faqTitle.textContent = 'Frequently asked business questions';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'What are your intervention hours?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'We intervene mainly outside opening hours (evening, night, weekend) to avoid disrupting your activity. For establishments open 24/7, we establish a specific schedule.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Do you offer annual contracts?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Yes, we offer annual maintenance contracts with preferential rates. These contracts include a defined number of visits per week/month, with the possibility of additional occasional services.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Are your employees insured?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Absolutely. All our employees are covered by professional liability insurance, work accident insurance and property damage guarantee. We provide insurance certificates upon request.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'How do you manage access keys?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Several options: secure key system with double verification, access via security guards, or presence of a responsible person on site. We sign confidentiality agreements regarding access to your premises.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Do you offer "all-inclusive" packages?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Yes, our "Business Premium" package includes: daily cleaning, supply of consumables (soap, paper, garbage bags), minor maintenance repairs, and two major annual cleanings (windows, carpets).';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'What is your intervention area?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'We cover the entire Brussels-Capital region and surrounding municipalities. For large surfaces outside Brussels, we study each request on a case-by-case basis with adapted travel costs.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'A spotless professional environment';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Entrust the maintenance of your commercial premises to professionals. Clean spaces improve your company\'s image, customer satisfaction and the well-being of your teams.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Demander un devis')) {
            btn.innerHTML = '<i class="fas fa-file-contract"></i> Request a quote';
        }
        if (btn.textContent.includes('Audit gratuit')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Free audit';
        }
        if (btn.textContent.includes('Service commercial')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Commercial service';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Discount for annual contracts - Simplified monthly invoicing';
}

// 8. BUTTONS AND OTHER TEXT
const auditBtn = document.querySelector('a[href="../contact.html"]');
if (auditBtn && auditBtn.textContent.includes('Audit gratuit')) {
    auditBtn.innerHTML = '<i class="fas fa-calendar-alt"></i> Free audit';
}

// Update notification text
const commercialBtn = document.querySelector('.btn-primary');
if (commercialBtn) {
    commercialBtn.addEventListener('click', function() {
        localStorage.setItem('commercialService', 'commercial-premises');
        // Update notification function if exists
        if (typeof showNotification === 'function') {
            showNotification('Commercial quote request registered. Our sales department will contact you within 24 hours.', 'success');
        }
    });
}

// 9. ADD LANGUAGE SWITCHER
addLanguageSwitcherCommercial();

// console.log('Commercial page translation to English completed!');
}

function addLanguageSwitcherCommercial() {
    // Check if switcher already exists
    if (document.querySelector('.language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
    <button onclick="switchToFrenchCommercial()" class="lang-btn active">FR</button>
    <button onclick="switchToEnglishCommercial()" class="lang-btn">EN</button>
    <button onclick="switchToDutchCommercial()" class="lang-btn">NL</button>
    `;

    // Style the switcher
    const style = document.createElement('style');
    style.textContent = `
    .language-switcher {
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        background: white;
        padding: 8px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        display: flex;
        gap: 5px;
    }
    .lang-btn {
        padding: 6px 12px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
    }
    .lang-btn.active {
        background: #1a365d;
        color: white;
        border-color: #1a365d;
    }
    @media (max-width: 768px) {
        .language-switcher {
            top: 80px;
            right: 10px;
        }
    }
    `;

    document.head.appendChild(style);
    document.body.appendChild(switcher);
}

// Functions for language switching
function switchToEnglishCommercial() {
    translateToEnglishCommercial();
    updateLanguageButtonsCommercial('en');
}

function switchToFrenchCommercial() {
    location.reload(); // Reload original French version
}

function switchToDutchCommercial() {
    // console.log('Switching to Dutch - loading Dutch translation...');
    // Load Dutch translation function when available
    if (typeof translateToDutchCommercial === 'function') {
        translateToDutchCommercial();
    } else {
        alert('Dutch translation coming soon!');
    }
}

function updateLanguageButtonsCommercial(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}

// Update the existing notification function to English
if (typeof showNotification === 'function') {
    // Override or extend the notification function for English
    const originalShowNotification = showNotification;
    showNotification = function(message, type) {
        // Translate common messages
        if (message.includes('Demande de devis commercial enregistrée')) {
            message = 'Commercial quote request registered. Our sales department will contact you within 24 hours.';
        }
        originalShowNotification(message, type);
    };
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishCommercial;
