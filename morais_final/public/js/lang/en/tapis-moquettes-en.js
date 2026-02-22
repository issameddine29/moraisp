// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// en-translation-carpets.js - English manual translation for "Nettoyage Tapis & Moquettes"


function translateToEnglishCarpets() {
    // console.log('Translating Carpets & Rugs to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Carpet & Rug Cleaning <span class="hygiene-badge"><i class="fas fa-spa"></i> Hygiene & health</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Professional deep cleaning service for carpets and rugs in Brussels. Removal of stains, mites, allergens and odors. Shampooing, extraction, rapid drying. Give new life to your textile floorings.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis nettoyage') || btn.textContent.includes('Devis gratuit')) {
            btn.innerHTML = '<i class="fas fa-rug"></i> Cleaning quote';
        }
        if (btn.textContent.includes('Appeler maintenant')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Call now';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.carpet-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Rapid drying';
        features[1].textContent = 'Anti-mites';
        features[2].textContent = 'Hypoallergenic';
        features[3].textContent = 'Stain-resistant treatment';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'A healthy and clean indoor environment';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Carpets and rugs accumulate dust, allergens, mites and invisible bacteria. A simple vacuum cleaner is not enough to remove these particles embedded deep in the fibers.';
        descParagraphs[1].textContent = 'Our professional cleaning method combines shampoo and extraction for a deep result. We use certified ecological products that clean thoroughly while preserving the colors and texture of your floor coverings.';
    }

    const healthItem = document.querySelector('.health-item');
    if (healthItem) {
        const healthTitle = healthItem.querySelector('h3');
        if (healthTitle) {
            healthTitle.innerHTML = '<i class="fas fa-heartbeat"></i> Health and well-being';
        }
        const healthText = healthItem.querySelector('p');
        if (healthText) {
            healthText.textContent = 'A clean carpet reduces up to 80% of allergens in the air. Particularly important for children, asthma sufferers or allergy sufferers. Improves indoor air quality.';
        }
    }

    // 3. TYPES OF CARPETS SECTION
    const carpetTitle = document.querySelector('.section-title');
    if (carpetTitle && carpetTitle.textContent.includes('Nos spécialités')) {
        carpetTitle.textContent = 'Our textile specialties';
    }

    // Client cards (carpet types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Wall-to-wall carpets
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Wall-to-wall carpets';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Residential & commercial';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Professional cleaning of fixed carpets. Treatment adapted to fiber type (wool, synthetic, mixed). Stain protection included.';
    }

    // Card 2: Oriental carpets
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Oriental & Persian rugs';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Sentimental value';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Gentle cleaning of valuable rugs. Mild products to preserve natural dyes, manual techniques for fringes and borders.';
    }

    // Card 3: Office carpets
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Office carpets & companies';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Intensive use';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Cleaning of carpets in professional environment. Treatment of coffee, food, ink stains. Evening or weekend interventions.';
    }

    // Card 4: Pets carpets
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Carpets with pets';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Hairs & odors';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Specific treatment to remove animal hairs, urine odors, organic stains. Enzymatic products to neutralize persistent odors.';
    }

    // Card 5: Post-damage carpets
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'After damage';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Water, fire, damage';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Repair and cleaning after water damage, fire, accidental damage. Professional drying techniques to prevent mold formation.';
    }

    // Card 6: Stairs carpets
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Stair carpets & difficult areas';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Limited access';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Specific cleaning of stair treads, corners, dead spots. Adapted equipment for areas with difficult access without moving furniture.';
    }
}

// 4. PROCEDURE SECTION
const procedureTitle = document.querySelectorAll('.section-title')[1];
if (procedureTitle && procedureTitle.textContent.includes('Notre méthode')) {
    procedureTitle.textContent = 'Our professional method';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Inspection & diagnosis';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Identification of fiber type, color fastness test, localization of specific stains. Evaluation of soiling level and specific needs.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Deep vacuuming';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Industrial vacuuming with beating system to dislodge dust and allergens embedded in the fibers. Optimal preparation for cleaning.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Pre-treatment of stains';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Application of specific products according to stain nature: organic, greasy, colored, old. Controlled dwell time for maximum efficiency.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Shampoo & extraction';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Application of ecological shampoo using rotating machines. Simultaneous extraction of dirty water with 95% moisture removed. Most efficient method for deep cleaning.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Accelerated drying';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Use of professional fans for rapid drying (2-6 hours depending on thickness). Prevention of mold formation and quick return to normal use.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Protection & finishing';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Application of stain repellent (optional). Final brushing to straighten fibers. Final inspection and maintenance advice.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && equipmentTitle.textContent.includes('Technologie')) {
    equipmentTitle.textContent = 'Professional technology';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Extraction machines';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Professional devices combining clean water injection with dirty water suction. Optimal extraction power for deep cleaning and rapid drying.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'Turbo-dryers';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Professional high-speed fans for accelerated drying. Prevention of mold formation and return to normal use within hours.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Ecological products';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Shampoos and stain removers certified Ecolabel, hypoallergenic, without chemical perfumes. Respectful of fibers and environment, safe for children and pets.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Test equipment';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Color fastness testers, inspection magnifiers, UV lamps to detect invisible stains. Precise diagnosis for adapted treatment.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && faqTitle.textContent.includes('Questions tapis')) {
    faqTitle.textContent = 'Frequently asked questions about carpets';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'How long does it take for my carpet to be completely dry?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'With our professional extraction method and turbo-dryers, most carpets are dry in 2 to 6 hours. Thick or wool carpets may require 6 to 12 hours. We advise not to replace furniture before complete drying to avoid marks.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Does professional cleaning damage the colors of antique carpets?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'We always perform a color fastness test before any treatment. For valuable or antique carpets, we use specific mild products and manual techniques. Our experience allows us to adapt treatment to each fiber type and dye.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Can you remove animal urine odors?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Yes, we use specific enzymatic products that break down urine molecules responsible for odors. Treatment includes: product application, deep penetration, extraction, and sometimes UV treatment. Efficiency depends on stain age and fabric type.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Do all furniture need to be moved before your intervention?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'We move light furniture (chairs, small tables) included in our service. For heavy furniture (sofas, cabinets, beds), we recommend moving them if possible for complete cleaning. Otherwise, we clean around them. Metal furniture legs may need pads to avoid rust stains.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Do you offer an anti-mite treatment?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Yes, we offer a specific anti-mite treatment that removes up to 95% of mites and their droppings (main allergens). This treatment is particularly recommended for children\'s rooms, allergy sufferers or asthma patients. Long-lasting effect up to 6 months.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'How often should carpets and rugs be professionally cleaned?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'We recommend professional cleaning every 12 to 18 months for regular maintenance. For households with pets, young children, or allergy sufferers, every 6 to 12 months. For specific stains or before a special event, one-time cleaning is recommended.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Give new life to your textile floors';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'A clean carpet not only improves the aesthetics of your interior but also the quality of the air you breathe. Remove allergens, mites and bacteria for a healthier environment.';

    const ctaButtons = ctaBox.querySelectorAll('.btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit')) {
            btn.innerHTML = '<i class="fas fa-rug"></i> Free quote';
        }
        if (btn.textContent.includes('Diagnostic gratuit')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Free diagnosis';
        }
        if (btn.textContent.includes('Urgence tache')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Stain emergency';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Free color fastness test - Satisfaction guarantee - Annual maintenance packages';
}

// Update language buttons if they exist
if (typeof updateLanguageButtons === 'function') {
    updateLanguageButtons('en');
}

// console.log('Translation Carpets & Rugs to English completed!');
}

// Functions for language switching
function switchToEnglishCarpets() {
    translateToEnglishCarpets();
}

function switchToDutchCarpets() {
    if (typeof loadDutchCarpetTranslation === 'function') {
        loadDutchCarpetTranslation();
    }
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishCarpets;
