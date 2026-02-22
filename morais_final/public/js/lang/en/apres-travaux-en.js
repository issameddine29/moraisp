// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// en-translation-afterworks.js - English manual translation for "Nettoyage Après Travaux"


function translateToEnglishAfterWorks() {
    // console.log('Translating to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Post-Construction Cleaning <span class="urgent-badge"><i class="fas fa-exclamation-triangle"></i> Emergencies accepted</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Complete restoration of your premises after construction. Removal of dust, construction residues and preparation for occupancy in Brussels and surrounding areas';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis urgent') || btn.textContent.includes('Devis après-travaux')) {
            btn.innerHTML = '<i class="fas fa-broom"></i> Urgent quote';
        }
        if (btn.textContent.includes('Appeler maintenant')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Call now';
        }
        if (btn.textContent.includes('Planifier une visite')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Schedule a visit';
        }
        if (btn.textContent.includes('Urgence chantier')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Construction emergency';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.travaux-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Intervention within 24-48h';
        features[1].textContent = 'Industrial equipment';
        features[2].textContent = 'Ecological disposal';
        features[3].textContent = 'Finishing checklist';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Industrial cleaning for your construction sites';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'After construction, renovation or fitting-out works, premises are often covered in dust, residues and debris. Our specialized post-construction cleaning service guarantees a complete and safe restoration.';
        descParagraphs[1].textContent = 'We intervene on all types of sites: apartments, houses, offices, commercial and industrial spaces. Our team uses professional equipment (industrial vacuums, steam machines, high-pressure cleaners) for impeccable results.';
    }

    const dangerItem = document.querySelector('.danger-item');
    if (dangerItem) {
        const dangerTitle = dangerItem.querySelector('h3');
        if (dangerTitle) {
            dangerTitle.innerHTML = '<i class="fas fa-exclamation-circle"></i> Warning about fine dust';
        }
        const dangerText = dangerItem.querySelector('p');
        if (dangerText) {
            dangerText.textContent = 'Plaster, cement and concrete dust is harmful to health. Our HEPA filtration equipment guarantees their complete elimination.';
        }
    }

    // 3. TYPES OF WORK SECTION
    const travauxTitle = document.querySelector('.section-title');
    if (travauxTitle && travauxTitle.textContent.includes('Pour quels types')) {
        travauxTitle.textContent = 'For which types of work?';
    }

    // Client cards (travaux types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 3) {
    // Card 1: Construction
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title && card1Title.textContent.includes('Construction')) {
        card1Title.textContent = 'New construction';
    }
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Sites & delivery';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Cleaning of concrete, plaster and cement dust after construction. Preparation for delivery.';
    }

    // Card 2: Painting
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title && card2Title.textContent.includes('Peinture')) {
        card2Title.textContent = 'Painting & Finishing';
    }
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Painters & decorators';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Cleaning of paint splashes, glue marks, sanding residues. Perfect finishing.';
    }

    // Card 3: Sanitary
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title && card3Title.textContent.includes('Travaux sanitaires')) {
        card3Title.textContent = 'Sanitary works';
    }
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Bathrooms & kitchens';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Cleaning after bathroom, kitchen installation. Stripping of joints, removal of residues.';
    }
}

// 4. PROCEDURE SECTION
const procedureTitle = document.querySelectorAll('.section-title')[1];
if (procedureTitle && procedureTitle.textContent.includes('Notre procédure')) {
    procedureTitle.textContent = 'Our complete procedure';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Site assessment';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Analysis of residue types, surface to be treated, access. Determination of necessary equipment.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Waste removal';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Collection and sorting of construction waste. Disposal to approved centers with certificates.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Complete dusting';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'HEPA vacuuming of fine dust on all surfaces: walls, ceilings, floors, ducts.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Surface cleaning';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Removal of plaster, cement, paint marks. Cleaning of windows, joinery, tiles.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Sanitary & Kitchen';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Thorough cleaning of sanitary facilities, sinks, faucets. Degreasing of joints and surfaces.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Final control';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Point-by-point verification. Final touches. Handover of ready-to-occupy premises.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && equipmentTitle.textContent.includes('Équipement professionnel')) {
    equipmentTitle.textContent = 'Professional equipment';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'HEPA industrial vacuums';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = '99.97% filtration of fine particles. Essential for plaster and cement dust.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'High pressure cleaners';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'For concrete floors, terraces, facades. Removal of stubborn construction residues.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Steam generators';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Eco-friendly cleaning without chemicals. Ideal for delicate surfaces and sanitary facilities.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Air extractors';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Renewal of ambient air. Elimination of paint, glue and chemical odors.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && faqTitle.textContent.includes('Questions fréquentes')) {
    faqTitle.textContent = 'Frequently asked questions';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'How soon after the works can you intervene?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'We can intervene as soon as the works are completed and electrical/plumbing systems secured. For emergencies, we intervene within 24h. Ideally, schedule our intervention before installing delicate finishes (parquet, carpet).';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'What do you do with construction waste?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'We carry out selective sorting (plaster, wood, metal, inert waste) and dispose to approved recycling centers. We provide disposal certificates compliant with Brussels legislation.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Is plaster dust dangerous?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Yes, plaster and cement dust is irritating to the respiratory tract. Our HEPA equipment captures 99.97%. Our staff wears protective equipment (masks, goggles).';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Can you clean ducts and pipes?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Yes, we have specific equipment for cleaning ventilation ducts, electrical conduits and exposed plumbing. This service is crucial to prevent dust redispersion.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Do you charge VAT?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Yes, all our invoices include VAT at the applicable rate. For liable companies, VAT is recoverable. We issue detailed invoices with full legal mentions.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Do you offer a "ready to live" package?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Yes, our "ready to live" package includes: complete removal, HEPA dusting, surface cleaning, sanitary facilities, kitchen, quality control and final light cleaning. It\'s the all-in-one solution.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Construction finished? We intervene!';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Don\'t let construction residues compromise your project. Our specialized team guarantees a complete and safe restoration of your premises.';

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> 7-day interventions for construction professionals';
}

// 8. ADD LANGUAGE SWITCHER
addLanguageSwitcher();

// console.log('Translation to English completed!');
}

function addLanguageSwitcher() {
    // Check if switcher already exists
    if (document.querySelector('.language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
    <button onclick="switchToFrench()" class="lang-btn active">FR</button>
    <button onclick="switchToEnglish()" class="lang-btn">EN</button>
    <button onclick="switchToDutch()" class="lang-btn">NL</button>
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
function switchToEnglish() {
    translateToEnglishAfterWorks();
    updateLanguageButtons('en');
}

function switchToFrench() {
    location.reload(); // Reload original French version
}

function switchToDutch() {
    // Will be replaced by Dutch translation function
    // console.log('Switching to Dutch - loading Dutch translation...');
    loadDutchTranslation();
}

function updateLanguageButtons(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishAfterWorks;
