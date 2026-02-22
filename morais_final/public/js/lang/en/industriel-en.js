// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// industriel-en.js - English translation for industrial cleaning page

if (urlParams.get('lang') === 'en') {
    translateToEnglishIndustriel();
}
});

function translateToEnglishIndustriel() {
    // console.log('Translating industrial page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Industrial Cleaning <span class="industriel-badge"><i class="fas fa-industry"></i> Factories & Workshops</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Specialized industrial cleaning service for factories, warehouses and workshops in Brussels. Mechanical degreasing, dust removal, machine cleaning, compliance with HACCP and safety standards.';
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(btn => {
        if (btn.textContent.includes('Devis industriel')) {
            btn.innerHTML = '<i class="fas fa-calculator"></i> Industrial quote';
        }
        if (btn.textContent.includes('Expert industriel')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Industrial expert';
        }
    });

    // Hero features
    const heroFeatures = document.querySelectorAll('.industriel-feature span');
    if (heroFeatures.length >= 4) {
        heroFeatures[0].textContent = 'Heavy equipment';
        heroFeatures[1].textContent = 'Safety standards';
        heroFeatures[2].textContent = '24/7 intervention';
        heroFeatures[3].textContent = 'Qualified team';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Professional industrial cleaning';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'In an industrial environment, cleanliness is essential for safety, productivity and regulatory compliance. Our specialized service uses industrial equipment adapted to the specific volumes and constraints of the sector.';
        descParagraphs[1].textContent = 'We intervene during production shutdowns (night, weekend, technical stops) to minimize the impact on your activity. Our team is trained in industrial safety procedures and specific standards (HACCP, ATEX, etc.).';
    }

    const safetyItem = document.querySelector('.safety-item h3');
    if (safetyItem) {
        safetyItem.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Industrial safety';
    }

    const safetyText = document.querySelector('.safety-item p');
    if (safetyText) {
        safetyText.textContent = 'Our teams are certified to work in industrial environments: appropriate PPE, lockout procedures, specific risk training.';
    }

    // 3. INDUSTRIAL SECTORS
    const sectorsTitle = document.querySelector('.section-title');
    if (sectorsTitle && sectorsTitle.textContent.includes('spécialités industrielles')) {
        sectorsTitle.textContent = 'Our industrial specialties';
    }

    const clientCards = document.querySelectorAll('.client-card');
    if (clientCards.length >= 4) {
        // Card 1
        const card1Title = clientCards[0].querySelector('h3');
        if (card1Title) card1Title.textContent = 'Manufacturing industry';
        const card1Tag = clientCards[0].querySelector('.client-tag');
        if (card1Tag) card1Tag.textContent = 'Production';
        const card1Desc = clientCards[0].querySelector('p');
        if (card1Desc) card1Desc.textContent = 'Factory cleaning, production lines, machine tools, assembly workshops, technical areas.';

        // Card 2
        const card2Title = clientCards[1].querySelector('h3');
        if (card2Title) card2Title.textContent = 'Warehouses & Logistics';
        const card2Tag = clientCards[1].querySelector('.client-tag');
        if (card2Tag) card2Tag.textContent = 'Storage';
        const card2Desc = clientCards[1].querySelector('p');
        if (card2Desc) card2Desc.textContent = 'Warehouse cleaning, distribution centers, loading docks, shelving, industrial floors.';

        // Card 3
        const card3Title = clientCards[2].querySelector('h3');
        if (card3Title) card3Title.textContent = 'Food industry';
        const card3Tag = clientCards[2].querySelector('.client-tag');
        if (card3Tag) card3Tag.textContent = 'HACCP';
        const card3Desc = clientCards[2].querySelector('p');
        if (card3Desc) card3Desc.textContent = 'HACCP compliant cleaning, disinfection, clean rooms, food production lines, laboratories.';

        // Card 4
        const card4Title = clientCards[3].querySelector('h3');
        if (card4Title) card4Title.textContent = 'Mechanical workshops';
        const card4Tag = clientCards[3].querySelector('.client-tag');
        if (card4Tag) card4Tag.textContent = 'Mechanics';
        const card4Desc = clientCards[3].querySelector('p');
        if (card4Desc) card4Desc.textContent = 'Machine degreasing, workshop cleaning, oil and fluid treatment, complete dust removal.';
    }

    // 4. EQUIPMENT SECTION
    const equipmentTitle = document.querySelector('.equipment-section .section-title');
    if (equipmentTitle) {
        equipmentTitle.textContent = 'Our industrial machinery fleet';
    }

    const equipmentCards = document.querySelectorAll('.equipment-card h3');
    if (equipmentCards.length >= 4) {
        equipmentCards[0].textContent = 'Floor scrubbers';
        equipmentCards[1].textContent = 'Industrial vacuum cleaners';
        equipmentCards[2].textContent = 'High pressure cleaners';
        equipmentCards[3].textContent = 'Sweepers';
    }

    // Equipment descriptions
    const equipmentDescriptions = document.querySelectorAll('.equipment-card p');
    if (equipmentDescriptions.length >= 4) {
        equipmentDescriptions[0].textContent = 'Ride-on and walk-behind machines for surfaces up to 10,000m². Washing, suction, drying in one pass.';
        equipmentDescriptions[1].textContent = 'Water/dust vacuum cleaners 100L, mobile or centralized, HEPA filtration, for fine dust and waste.';
        equipmentDescriptions[2].textContent = 'High pressure cleaners 200-500 bar, hot/cold water, detergent injection, for intensive degreasing.';
        equipmentDescriptions[3].textContent = 'Mechanical ride-on sweepers for roads and large areas. Collection of dust and bulky waste.';
    }

    // 5. SAFETY SECTION
    const safetyTitle = document.querySelectorAll('.section-title')[1];
    if (safetyTitle && safetyTitle.textContent.includes('Sécurité & Conformité')) {
        safetyTitle.textContent = 'Safety & Compliance';
    }

    const safetyCards = document.querySelectorAll('.safety-card h3');
    if (safetyCards.length >= 3) {
        safetyCards[0].textContent = 'Safety training';
        safetyCards[1].textContent = 'Adapted insurance';
        safetyCards[2].textContent = 'Complete documentation';
    }

    const safetyCardTexts = document.querySelectorAll('.safety-card p');
    if (safetyCardTexts.length >= 3) {
        safetyCardTexts[0].textContent = 'All our agents are trained in industrial safety procedures, lockout, work at height, and specific risks.';
        safetyCardTexts[1].textContent = 'Professional liability insurance of €5,000,000, covering damage to industrial installations.';
        safetyCardTexts[2].textContent = 'Technical product sheets, validated procedures, intervention reports, traceability of operations.';
    }

    // 6. FREQUENCY SECTION
    const frequencyTitle = document.querySelectorAll('.section-title')[2];
    if (frequencyTitle && frequencyTitle.textContent.includes('Planning d\'intervention')) {
        frequencyTitle.textContent = 'Industrial intervention planning';
    }

    const frequencyIntro = document.querySelector('.frequency-section p');
    if (frequencyIntro) {
        frequencyIntro.textContent = 'We adapt our interventions to your production cycles';
    }

    const frequencyOptions = document.querySelectorAll('.frequency-title');
    if (frequencyOptions.length >= 4) {
        frequencyOptions[0].textContent = 'During night shutdowns';
        frequencyOptions[1].textContent = 'Weekend';
        frequencyOptions[2].textContent = 'Technical stops';
        frequencyOptions[3].textContent = 'Urgent occasional';
    }

    const frequencyDescriptions = document.querySelectorAll('.frequency-option p');
    if (frequencyDescriptions.length >= 4) {
        frequencyDescriptions[0].textContent = 'Interventions 10pm-6am to avoid disrupting production. Ideal for daily cleaning.';
        frequencyDescriptions[1].textContent = 'Weekly thorough cleaning. Complete machine shutdown possible.';
        frequencyDescriptions[2].textContent = 'Major cleaning during scheduled stops (holidays, maintenance). Complete cleaning.';
        frequencyDescriptions[3].textContent = 'Rapid intervention following an incident (leak, spill, inspection).';
    }

    // 7. METHODOLOGY SECTION
    const methodologyTitle = document.querySelectorAll('.section-title')[3];
    if (methodologyTitle && methodologyTitle.textContent.includes('méthodologie industrielle')) {
        methodologyTitle.textContent = 'Our industrial methodology';
    }

    const includedItems = document.querySelectorAll('.included-item h3');
    if (includedItems.length >= 6) {
        includedItems[0].textContent = 'Security audit & needs';
        includedItems[1].textContent = 'Customized protocol';
        includedItems[2].textContent = 'Safety briefing';
        includedItems[3].textContent = 'Controlled intervention';
        includedItems[4].textContent = 'Quality control';
        includedItems[5].textContent = 'Detailed reporting';
    }

    // 8. CERTIFICATIONS
    const certTitle = document.querySelector('.certifications .section-title');
    if (certTitle) {
        certTitle.textContent = 'Our industrial certifications';
    }

    const certItems = document.querySelectorAll('.cert-item div div:first-child');
    if (certItems.length >= 4) {
        certItems[0].textContent = 'Work safety';
        certItems[1].textContent = 'HACCP';
        certItems[2].textContent = 'ATEX';
        certItems[3].textContent = 'Reach';
    }

    const certSubs = document.querySelectorAll('.cert-item div div:last-child');
    if (certSubs.length >= 4) {
        certSubs[0].textContent = 'Industry safety training';
        certSubs[1].textContent = 'Food industry';
        certSubs[2].textContent = 'Explosive areas';
        certSubs[3].textContent = 'Chemical products';
    }

    // 9. FAQ SECTION
    const faqTitle = document.querySelectorAll('.section-title')[4];
    if (faqTitle && faqTitle.textContent.includes('Questions techniques')) {
        faqTitle.textContent = 'Technical questions - Industrial';
    }

    const faqItems = document.querySelectorAll('.faq-question');
    if (faqItems.length >= 6) {
        faqItems[0].textContent = 'How do you manage safety in our facilities?';
        faqItems[1].textContent = 'Can you intervene during production?';
        faqItems[2].textContent = 'What products do you use for industrial degreasing?';
        faqItems[3].textContent = 'How do you calculate the cost for a factory?';
        faqItems[4].textContent = 'Do you offer industrial maintenance contracts?';
        faqItems[5].textContent = 'Are you equipped for large surfaces (>10,000m²)?';
    }

    const faqAnswers = document.querySelectorAll('.faq-answer p');
    if (faqAnswers.length >= 6) {
        faqAnswers[0].textContent = 'We establish a specific safety protocol with your HSE manager. Our teams follow lockout procedures, wear required PPE, and are trained in the specific risks of your site. A safety briefing is conducted before each intervention.';
        faqAnswers[1].textContent = 'For safety reasons, we recommend interventions outside production (night, weekend, technical stops). For certain isolated stations, cleaning during production may be possible with reinforced safety measures and area isolation.';
        faqAnswers[2].textContent = 'We use professional biodegradable degreasers, adapted to the type of grease (mineral, vegetable, synthetic). For the food industry, we use food contact approved products. Technical sheets available on request.';
        faqAnswers[3].textContent = 'Based on: surface to be cleaned, frequency, technical specificities (ceiling height, floor type, equipment), time constraints, and necessary products. We provide a detailed quote by area with possible options.';
        faqAnswers[4].textContent = 'Yes, we offer annual contracts with planning schedule, preferential rates, priority on interventions, and monthly reporting. Contracts generally include regular cleaning + some occasional interventions.';
        faqAnswers[5].textContent = 'Absolutely. Our machinery fleet includes ride-on floor scrubbers for surfaces up to 15,000m², 500L industrial vacuum cleaners, and we can deploy several teams simultaneously for very large surfaces.';
    }

    // 10. FINAL CTA
    const ctaBox = document.querySelector('.cta-box');
    if (ctaBox) {
        const ctaTitle = ctaBox.querySelector('h2');
        if (ctaTitle) ctaTitle.textContent = 'Productivity improved by cleanliness';

        const ctaText = ctaBox.querySelector('p');
        if (ctaText) ctaText.textContent = 'A clean industrial environment reduces accident risks, improves equipment efficiency, and ensures regulatory compliance. Entrust your industrial cleaning to qualified professionals.';

        const ctaButtons = ctaBox.querySelectorAll('.btn');
        if (ctaButtons.length >= 3) {
            ctaButtons[0].innerHTML = '<i class="fas fa-industry"></i> Industrial quote';
            ctaButtons[1].innerHTML = '<i class="fas fa-hard-hat"></i> Free security audit';
            ctaButtons[2].innerHTML = '<i class="fas fa-phone"></i> Industrial emergency';
        }

        const ctaInfo = ctaBox.querySelector('p:last-child');
        if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> 24/7 interventions - Heavy equipment - Safety qualified personnel';
    }

    // Add language switcher
    addLanguageSwitcher();
    updateLanguageButtons('en');

    // console.log('Translation to English completed!');
}

// Add language switcher function (same as in other files)
function addLanguageSwitcher() {
    if (document.querySelector('.language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
    <button onclick="switchToFrench()" class="lang-btn">FR</button>
    <button onclick="switchToEnglish()" class="lang-btn active">EN</button>
    <button onclick="switchToDutch()" class="lang-btn">NL</button>
    `;

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

function switchToEnglish() {
    translateToEnglishIndustriel();
}

function switchToFrench() {
    location.reload();
}

function switchToDutch() {
    if (typeof translateToDutchIndustriel === 'function') {
        translateToDutchIndustriel();
    } else {
        // console.log('Dutch translation not loaded yet');
    }
}

function updateLanguageButtons(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishIndustriel;
