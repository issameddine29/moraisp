// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nettoyage-vitres-en.js - English translation for "Nettoyage de Vitres"


function translateToEnglishWindows() {
    // console.log('Translating window cleaning page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Window Cleaning <span class="expert-badge"><i class="fas fa-window-maximize"></i> Height Expert</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Professional window cleaning in Brussels. Interior, exterior, bay windows, facades, buildings. Professional safety equipment for all heights. Impeccable results without streaks.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis vitres')) {
            btn.innerHTML = '<i class="fas fa-spray-can"></i> Window quote';
        }
        if (btn.textContent.includes('Appeler maintenant')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Call now';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.window-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Safety equipment';
        features[1].textContent = 'Streak-free';
        features[2].textContent = 'All heights';
        features[3].textContent = 'Immediate results';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Crystal clear windows in complete safety';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Window cleaning is not just an aesthetic matter. Clean windows increase natural light, improve thermal insulation and extend the lifespan of windows.';
        descParagraphs[1].textContent = 'Our specialized window cleaning team works with professional equipment adapted to each situation: telescopic poles, aerial platforms, safety harnesses for height work. We use techniques and products that guarantee streak-free results.';
    }

    const safetyItem = document.querySelector('.safety-item');
    if (safetyItem) {
        const safetyTitle = safetyItem.querySelector('h3');
        if (safetyTitle) {
            safetyTitle.innerHTML = '<i class="fas fa-shield-alt"></i> Safety first';
        }
        const safetyText = safetyItem.querySelector('p');
        if (safetyText) {
            safetyText.textContent = 'Our technicians are trained for height work, equipped with certified safety harnesses, and strictly follow safety protocols. Specific civil liability insurance for height work.';
        }
    }

    // 3. WINDOW TYPES SECTION
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && sectionTitle.textContent.includes('Nos spécialités vitres')) {
        sectionTitle.textContent = 'Our window specialties';
    }

    // Client cards (window types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Particuliers
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Individuals';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Houses & apartments';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Complete cleaning of interior and exterior windows. Windows, French doors, verandas, bay windows. Seasonal packages available.';
    }

    // Card 2: Bureaux & entreprises
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Offices & businesses';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Glass facades';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Cleaning of glass facades, shop windows, curtain walls. Night interventions to avoid disrupting activities.';
    }

    // Card 3: Commerces & boutiques
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Shops & boutiques';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Shop windows & entrances';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Impeccable cleaning of shop windows to attract customers. Removal of fingerprints, stickers, rain residue. Frequency adapted to your sector.';
    }

    // Card 4: Centres commerciaux
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Shopping centers';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Large glass surfaces';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Regular maintenance of huge glass surfaces, domes, glass roofs, skylights. Specific equipment for very great heights.';
    }

    // Card 5: Immeubles résidentiels
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Residential buildings';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Co-ownerships';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Cleaning of building facades, glass halls, panoramic elevators. Annual packages for co-ownership syndics.';
    }

    // Card 6: Vitres difficiles d'accès
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Hard-to-reach windows';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Height specialist';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Glass roofs, skylights, fanlights, roof windows, glasshouses. Safety equipment adapted to each complex situation.';
    }
}

// 4. METHODOLOGY SECTION
const includedTitle = document.querySelectorAll('.section-title')[1];
if (includedTitle && includedTitle.textContent.includes('Notre méthodologie professionnelle')) {
    includedTitle.textContent = 'Our professional methodology';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Diagnosis & quote';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Evaluation of surfaces to treat, type of glazing, accessibility. Detailed quote mentioning specific equipment needed (aerial platform, poles, etc.).';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Preparation & protection';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Protection of floors and adjacent surfaces. Installation of safety equipment. Preparation of specific cleaning solutions according to glazing type.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Interior cleaning';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Application of cleaning solution on all interior surfaces. Removal of streaks, dust, fingerprints. Cleaning of frames and sills.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Exterior cleaning';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Use of telescopic poles or height equipment according to needs. Removal of exterior dirt: rain, pollution, bird droppings.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Drying & finishing';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Wiping with professional squeegees and microfiber cloths. Verification of absence of streaks, scratches or residue. Perfect drying for crystal clear effect.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Final control & cleanup';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Inspection under different light angles. Removal of protection, cleanup of work areas. Validation with client before departure.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && equipmentTitle.textContent.includes('Équipement haute technologie')) {
    equipmentTitle.textContent = 'High-tech equipment';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Telescopic poles';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Professional poles up to 18 meters. Secure locking system, lightness and maneuverability. Reaches high windows without ladder.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'Safety equipment';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Certified safety harnesses, ropes, aerial platforms, special ladders. Continuous training in height work techniques.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Water purification system';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Water purification unit by reverse osmosis. 99.9% pure water leaving no streaks or mineral deposits on windows.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Professional products';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Specific cleaning solutions for each type of glazing: single glazing, double glazing, treated glazing (anti-reflective, self-cleaning).';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && faqTitle.textContent.includes('Questions vitres fréquentes')) {
    faqTitle.textContent = 'Frequent window questions';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'What is the best period to have windows cleaned?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'Spring and autumn are ideal as moderate temperatures allow optimal drying. However, we intervene all year round, even in winter with our anti-freeze solutions. Just avoid rainy or windy days.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'How do you clean windows on higher floors without scaffolding?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'We mainly use professional telescopic poles (up to 18m) and aerial platforms according to needs. For very high buildings, we have rope access techniques with all necessary safety equipment.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Do you also clean frames and screens?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Yes, our complete service includes: cleaning of windows (interior and exterior), cleaning of frames (aluminum, wood, PVC), screens, blinds and curtains if present, and window sills. We offer "all-in" packages or à la carte according to your needs.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'How long is a window cleaning quote valid?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Our quotes are valid for 30 days. After this period, a new visit may be necessary to verify no changes have occurred (new windows, modified access, etc.). For annual contracts with fixed schedule, the price is guaranteed for 12 months.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Do you offer packages for co-ownerships?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Absolutely. We offer annual packages for co-ownership syndics, generally including 2 to 4 visits per year according to needs. These packages often include cleaning of common glass surfaces, entrance halls and sometimes facades. Decreasing rates according to number of floors and windows.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'What happens if it rains on the scheduled intervention day?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'We monitor the weather 48 hours in advance. If rain is forecast, we contact you to postpone the intervention to a favorable date, without charges. Once on site, if rain begins, we interrupt the work and arrange a new appointment.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Rediscover the brightness of your spaces';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Clean windows immediately transform the atmosphere of a place. More brightness, a clear view, and an increased sense of space. Trust professionals with equipment and training.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit')) {
            btn.innerHTML = '<i class="fas fa-window-restore"></i> Free quote';
        }
        if (btn.textContent.includes('Planifier une visite')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Schedule a visit';
        }
        if (btn.textContent.includes('Urgence vitres')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Window emergency';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Discount for annual contracts - First trial satisfied or refunded';
}

// Update notification text
const windowBtn = document.querySelector('.btn-primary');
if (windowBtn) {
    windowBtn.addEventListener('click', function() {
        localStorage.setItem('windowService', 'windows');
        if (typeof showNotification === 'function') {
            showNotification('Window quote request registered. We will contact you within 24 hours to schedule a visit.', 'success');
        }
    });
}

// 8. ADD LANGUAGE SWITCHER
addLanguageSwitcherWindows();

// console.log('Window cleaning page translation to English completed!');
}

function addLanguageSwitcherWindows() {
    // Check if switcher already exists
    if (document.querySelector('.language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
    <button onclick="switchToFrenchWindows()" class="lang-btn active">FR</button>
    <button onclick="switchToEnglishWindows()" class="lang-btn">EN</button>
    <button onclick="switchToDutchWindows()" class="lang-btn">NL</button>
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
function switchToEnglishWindows() {
    translateToEnglishWindows();
    updateLanguageButtonsWindows('en');
}

function switchToFrenchWindows() {
    location.reload(); // Reload original French version
}

function switchToDutchWindows() {
    // console.log('Switching to Dutch - loading Dutch translation...');
    // Load Dutch translation function when available
    if (typeof translateToDutchWindows === 'function') {
        translateToDutchWindows();
    } else {
        alert('Dutch translation coming soon!');
    }
}

function updateLanguageButtonsWindows(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishWindows;
