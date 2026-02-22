// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// parkings-garages-en.js - English translation for "Nettoyage Parkings & Garages"


function translateToEnglishParking() {
    // console.log('Translating parking and garage cleaning page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Parking & Garage Cleaning <span class="industrial-badge"><i class="fas fa-industry"></i> Industrial Equipment</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Professional cleaning and maintenance of parking lots and garages in Brussels. High pressure washing, floor degreasing, oil stain treatment, waste disposal. Safety and cleanliness guaranteed.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis parking')) {
            btn.innerHTML = '<i class="fas fa-parking"></i> Parking quote';
        }
        if (btn.textContent.includes('Appeler maintenant')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Call now';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.parking-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'High pressure washing';
        features[1].textContent = 'Professional degreasing';
        features[2].textContent = 'Waste disposal';
        features[3].textContent = 'Signaling & safety';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Clean and secure parking lots';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Parking lots and garages are high-traffic spaces that require regular and professional maintenance. Dirt, oil stains, waste and dust accumulate quickly, creating slip risks and a poor image.';
        descParagraphs[1].textContent = 'Our specialized service uses industrial equipment adapted to large surfaces: automatic sweepers, high pressure washers, industrial vacuums and professional degreasers. We intervene with an adapted schedule to minimize disruptions.';
    }

    const safetyItem = document.querySelector('.safety-item');
    if (safetyItem) {
        const safetyTitle = safetyItem.querySelector('h3');
        if (safetyTitle) {
            safetyTitle.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Risk prevention';
        }
        const safetyText = safetyItem.querySelector('p');
        if (safetyText) {
            safetyText.textContent = 'A clean parking lot significantly reduces accident risks. Elimination of oil stains (slip risk), better visibility of signage, disposal of flammable waste.';
        }
    }

    // 3. PARKING TYPES SECTION
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && sectionTitle.textContent.includes('Nos solutions parking')) {
        sectionTitle.textContent = 'Our parking solutions';
    }

    // Client cards (parking types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Parkings souterrains
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Underground parkings';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Buildings & centers';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Complete cleaning of underground parkings: floors, walls, ceilings, ventilation ducts. Specific treatment for humidity and condensation.';
    }

    // Card 2: Parkings aériens
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Surface parkings';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Shopping centers';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Maintenance of surface parkings: mechanical sweeping, high pressure washing, ground marking treatment, signage panel cleaning.';
    }

    // Card 3: Garages résidentiels
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Residential garages';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Co-ownerships';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Cleaning of building garages: bulky waste disposal, spot degreasing, individual box cleaning, common areas maintenance.';
    }

    // Card 4: Parkings d'entreprise
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Company parkings';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Companies & offices';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Regular maintenance of private company parkings: visitor areas, reserved spots, PMR access, secure parkings. Schedule adapted to business hours.';
    }

    // Card 5: Parkings publics
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Public parkings';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Municipalities';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Cleaning service for municipal parkings: automatic tellers, elevators, stairs, public toilets, lighting. Compliance with public hygiene standards.';
    }

    // Card 6: Parkings logistiques
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Logistic parkings';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Warehouses & industrial zones';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Intensive cleaning of truck parking areas, degreasing of significant oil stains, treatment of high-resistance concrete floors.';
    }
}

// 4. PROCESS SECTION
const includedTitle = document.querySelectorAll('.section-title')[1];
if (includedTitle && includedTitle.textContent.includes('Notre processus industriel')) {
    includedTitle.textContent = 'Our industrial process';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Analysis & preparation';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Evaluation of surfaces, floor types (concrete, asphalt, resin), dirt level. Installation of temporary signage and protection of sensitive areas.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Mechanical sweeping';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Use of professional automatic sweepers to eliminate large waste, gravel, sand, leaves. Complete coverage of surface to treat.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Stain pre-treatment';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Application of professional degreasers on oil, grease, fuel stains. Adapted soaking time according to stain age.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'High pressure washing';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Use of industrial washers with hot water (option) and adapted detergents. Pressure adjusted according to floor type for deep cleaning without damage.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Rinsing & water suction';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Complete rinsing to eliminate all product residues. Suction of wastewater with industrial pumps. Respect of water discharge standards.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Control & finishing';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Verification of absence of residual stains, cleanliness of walls and signage. Cleaning of sewer grates, inspection pits. Detailed intervention report.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && equipmentTitle.textContent.includes('Équipement industriel professionnel')) {
    equipmentTitle.textContent = 'Professional industrial equipment';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Automatic sweepers';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Professional machines for large surfaces. Sweeping width up to 1.8m, important collection capacity, electric or thermal operation.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'High pressure washers';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Mobile high pressure washing units. Adjustable pressure (100-200 bars), important water flow, integrated water and product tanks.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Industrial vacuums';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'High power vacuums for water and mud. HEPA filtration, large recovery capacity, adapted to wet and dry floors.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Degreasing products';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Professional range of biodegradable degreasers. Effective on mineral oils, animal and vegetable fats, fuels. Compliant with environmental standards.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && faqTitle.textContent.includes('Questions parkings fréquentes')) {
    faqTitle.textContent = 'Frequent parking questions';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'How much time should be planned for parking closure during cleaning?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'This depends on the parking size. For an average parking (100 spots), we generally recommend closure of 4 to 6 hours. For very large parkings, we proceed by sections to minimize disruptions. We mainly work at night or on Sunday for commercial parkings.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'How do you treat old and encrusted oil stains?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'For old stains, we use specific treatment: application of concentrated degreaser with extended soaking time (up to 24h), mechanical brushing, then high pressure washing. In extreme cases, we offer surface treatment (sandblasting or hydroblasting) to completely restore the floor.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'What do you do with wastewater from washing?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'We strictly respect Brussels regulations on wastewater. The water is collected by our industrial vacuums and treated if necessary. For parkings equipped with hydrocarbon separators, we verify their proper functioning. We provide water treatment certificates upon request.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Do you offer ground marking maintenance?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Yes, we offer a complete ground marking maintenance service: cleaning of existing lines, temporary signage during works. We collaborate with specialized road marking companies for complete repainting if necessary. We can include this service in an annual maintenance contract.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'How do you manage safety during interventions?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Safety is our priority. We set up: temporary signage compliant with traffic code, light marking, personnel in high visibility clothing, vehicles equipped with warning lights. Our operators are trained for specific risks of work in traffic environment (even reduced).';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Do you offer regular maintenance contracts for parkings?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Absolutely. Our maintenance contracts generally include: mechanical sweeping weekly or bi-weekly, high pressure washing monthly or quarterly, occasional stain degreasing, regular waste disposal, maintenance of sewer grates. Decreasing rates according to frequency and surface area.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'A clean parking: safety and professional image';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Regular maintenance of your parking lot or garage improves user safety, extends coating lifespan and strengthens the professional image of your establishment.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit')) {
            btn.innerHTML = '<i class="fas fa-parking"></i> Free quote';
        }
        if (btn.textContent.includes('Audit parking')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Parking audit';
        }
        if (btn.textContent.includes('Urgence nettoyage')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Cleaning emergency';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> 24/7 interventions for commercial parkings - Advantageous annual packages';
}

// Update notification text
const parkingBtn = document.querySelector('.btn-primary');
if (parkingBtn) {
    parkingBtn.addEventListener('click', function() {
        localStorage.setItem('parkingService', 'parkings');
        if (typeof showNotification === 'function') {
            showNotification('Parking quote request registered. Our technical service will contact you within 24 hours.', 'success');
        }
    });
}

// 8. ADD LANGUAGE SWITCHER
addLanguageSwitcherParking();

// console.log('Parking and garage cleaning page translation to English completed!');
}

function addLanguageSwitcherParking() {
    // Check if switcher already exists
    if (document.querySelector('.language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
    <button onclick="switchToFrenchParking()" class="lang-btn active">FR</button>
    <button onclick="switchToEnglishParking()" class="lang-btn">EN</button>
    <button onclick="switchToDutchParking()" class="lang-btn">NL</button>
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
function switchToEnglishParking() {
    translateToEnglishParking();
    updateLanguageButtonsParking('en');
}

function switchToFrenchParking() {
    location.reload(); // Reload original French version
}

function switchToDutchParking() {
    // console.log('Switching to Dutch - loading Dutch translation...');
    // Load Dutch translation function when available
    if (typeof translateToDutchParking === 'function') {
        translateToDutchParking();
    } else {
        alert('Dutch translation coming soon!');
    }
}

function updateLanguageButtonsParking(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishParking;
