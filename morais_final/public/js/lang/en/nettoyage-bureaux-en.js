// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// en-translation-office.js - English translation for "Nettoyage de Bureaux"


function translateToEnglishOffice() {
    // console.log('Translating office cleaning page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Office Cleaning <span class="professional-badge"><i class="fas fa-briefcase"></i> Business Solutions</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'A clean and healthy work environment increases your team\'s productivity. Daily, weekly or occasional cleaning of your offices in Brussels. Interventions outside working hours.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis entreprise') || btn.textContent.includes('Business quote')) {
            btn.innerHTML = '<i class="fas fa-building"></i> Business quote';
        }
        if (btn.textContent.includes('Appeler maintenant') || btn.textContent.includes('Call now')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Call now';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.office-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Flexible hours';
        features[1].textContent = 'Verified staff';
        features[2].textContent = 'Ecological products';
        features[3].textContent = 'Quality check-lists';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'A spotless professional environment';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'In an office space, cleanliness is not just an aesthetic issue. It directly influences productivity, employee well-being and your company\'s image.';
        descParagraphs[1].textContent = 'Our office cleaning service is designed for modern businesses. We intervene discreetly outside working hours to avoid disrupting your activities. Our teams are trained in the specifics of office spaces.';
    }

    const productivityItem = document.querySelector('.productivity-item');
    if (productivityItem) {
        const productivityTitle = productivityItem.querySelector('h3');
        if (productivityTitle) {
            productivityTitle.innerHTML = '<i class="fas fa-chart-line"></i> Increased productivity';
        }
        const productivityText = productivityItem.querySelector('p');
        if (productivityText) {
            productivityText.textContent = 'According to studies, a clean work environment can increase employee productivity by up to 15%. Reduction in sickness absences thanks to better hygiene.';
        }
    }

    // 3. OFFICE TYPES SECTION
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && sectionTitle.textContent.includes('Solutions pour tous types d\'entreprises')) {
        sectionTitle.textContent = 'Solutions for all types of businesses';
    }

    // Client cards (office types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Open spaces
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title && card1Title.textContent.includes('Open spaces')) {
        card1Title.textContent = 'Open spaces';
    }
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Large spaces';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Daily cleaning of shared offices, workstations, meeting rooms and common areas. Optimized management of large volumes.';
    }

    // Card 2: Individual offices
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title && card2Title.textContent.includes('Bureaux individuels')) {
        card2Title.textContent = 'Individual offices';
    }
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Management & executives';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Delicate cleaning of executive offices, respect for sensitive documents, attention to personal items and specific equipment.';
    }

    // Card 3: Meeting rooms
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title && card3Title.textContent.includes('Salles de réunion')) {
        card3Title.textContent = 'Meeting rooms';
    }
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Collaborative spaces';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Morning preparation of rooms, cleaning after use, emptying of trash cans, whiteboard treatment, equipment storage.';
    }

    // Card 4: Break areas
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title && card4Title.textContent.includes('Espaces détente')) {
        card4Title.textContent = 'Break areas';
    }
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Kitchens & cafeterias';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Cleaning of company kitchens, coffee machines, refrigerators, microwaves. Removal of food waste, supply of cleaning products.';
    }

    // Card 5: Professional sanitary facilities
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title && card5Title.textContent.includes('Sanitaires professionnels')) {
        card5Title.textContent = 'Professional sanitary facilities';
    }
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Toilets & changing rooms';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Daily cleaning and disinfection, restocking of consumables (soap, paper), maintenance of hand dryers and dispensers.';
    }

    // Card 6: Reception areas
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title && card6Title.textContent.includes('Zones d\'accueil')) {
        card6Title.textContent = 'Reception areas';
    }
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Reception & lobbies';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'First impression for your clients. Cleaning of lobbies, reception, elevators, glass doors. Spaces always impeccably presentable.';
    }
}

// 4. INCLUDED SERVICES SECTION
const includedTitle = document.querySelectorAll('.section-title')[1];
if (includedTitle && includedTitle.textContent.includes('Notre processus qualité')) {
    includedTitle.textContent = 'Our quality process';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Free initial audit';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Visit of your premises, analysis of specific needs, development of a personalized cleaning plan and accurate estimate.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Optimized planning';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Establishment of an intervention schedule adapted to your opening hours. Night, morning or weekend interventions according to your needs.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Surface cleaning';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Complete dusting of desks, computer stations, phones. Cleaning of screens, keyboards, mice with adapted products.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Floor maintenance';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Vacuuming of carpets, washing of hard floors, specific treatment according to coating. Weekly deep cleaning.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Waste management';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Daily emptying of trash cans, selective sorting compliant with Brussels regulations, disposal to approved centers.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Quality control';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Systematic control check-list, monthly intervention reports, quarterly follow-up meetings with the designated manager.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && equipmentTitle.textContent.includes('Équipement professionnel pour bureaux')) {
    equipmentTitle.textContent = 'Professional equipment for offices';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Silent HEPA vacuum cleaners';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Professional equipment with low noise level and HEPA filtration to capture 99.97% of allergens and fine particles.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'Automatic scrubbers';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Professional machines for large spaces. Wash, rinse and dry in one pass for quick and effective intervention.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Specific office products';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Complete range of adapted products: screen cleaners, keyboard disinfectants, deodorizing products without aggressive fragrances.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Microfiber equipment';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'High-quality microfiber cloths for effective cleaning without chemicals. Different colors to avoid cross-contamination.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && faqTitle.textContent.includes('Questions entreprises fréquentes')) {
    faqTitle.textContent = 'Frequently asked business questions';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'What are your intervention hours for offices?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'We intervene mainly outside office hours: evenings (from 6pm), nights or very early in the morning (before 8am). For companies operating 24/7, we establish a specific schedule based on activity peaks.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Do you offer monthly or annual contracts?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Yes, we offer monthly maintenance contracts with preferential rates. These contracts include a defined number of visits per week, supply of consumables (garbage bags, products) and periodic additional services (window cleaning, carpet shampooing).';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'How do you manage security and access to our premises?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Several options: secure key system with double verification, access via temporary badge, or presence of a security guard. All our employees are verified (clean criminal record) and sign strict confidentiality clauses. We provide professional liability insurance certificates.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'What do you do with confidential waste?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'For confidential documents, we offer a specific secure destruction service. Documents are placed in sealed bags and entrusted to a certified provider who provides a destruction certificate. This service can be included in your contract.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Do you offer additional services?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Yes, in addition to regular cleaning, we offer: window cleaning (interior and exterior), carpet shampooing, blind and curtain cleaning, deep disinfection, indoor plant maintenance, and minor maintenance (light bulb replacement, small repairs).';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'How does billing work for businesses?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'We invoice monthly based on a fixed package or a detailed quote. All our invoices include VAT (21%) with complete legal mentions. For liable companies, VAT is recoverable. We can issue invoices in multiple languages (FR, NL, EN) if necessary.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Invest in a healthy work environment';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Clean offices improve productivity, reduce sickness absences and strengthen the professional image of your company. Entrust the maintenance of your premises to experts.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit')) {
            btn.innerHTML = '<i class="fas fa-file-contract"></i> Free quote';
        }
        if (btn.textContent.includes('Audit sans engagement')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> No-obligation audit';
        }
        if (btn.textContent.includes('Service commercial')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Commercial service';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Discount for annual contracts - Free one-week trial';
}

// Update notification text
const officeBtn = document.querySelector('.btn-primary');
if (officeBtn) {
    officeBtn.addEventListener('click', function() {
        localStorage.setItem('officeService', 'offices');
        // Update notification function if exists
        if (typeof showNotification === 'function') {
            showNotification('Business quote request registered. Our commercial service will contact you within 24 hours.', 'success');
        }
    });
}

// 8. ADD LANGUAGE SWITCHER
addLanguageSwitcherOffice();

// console.log('Office cleaning page translation to English completed!');
}

function addLanguageSwitcherOffice() {
    // Check if switcher already exists
    if (document.querySelector('.language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
    <button onclick="switchToFrenchOffice()" class="lang-btn active">FR</button>
    <button onclick="switchToEnglishOffice()" class="lang-btn">EN</button>
    <button onclick="switchToDutchOffice()" class="lang-btn">NL</button>
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
function switchToEnglishOffice() {
    translateToEnglishOffice();
    updateLanguageButtonsOffice('en');
}

function switchToFrenchOffice() {
    location.reload(); // Reload original French version
}

function switchToDutchOffice() {
    // console.log('Switching to Dutch - loading Dutch translation...');
    // Load Dutch translation function when available
    if (typeof translateToDutchOffice === 'function') {
        translateToDutchOffice();
    } else {
        alert('Dutch translation coming soon!');
    }
}

function updateLanguageButtonsOffice(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishOffice;
