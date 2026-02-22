// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// en-translation-sofas.js - English manual translation for "Canapés & Fauteuils"


function translateToEnglishSofas() {
    // console.log('Translating sofas page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Sofas & Armchairs Cleaning <span class="sofa-badge"><i class="fas fa-couch"></i> At home</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Give new life to your sofas, armchairs and seats with our professional cleaning service at home in Brussels. Stain removal, complete disinfection, anti-mite treatment and deodorization.';
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit')) {
            btn.innerHTML = '<i class="fas fa-couch"></i> Free quote';
        }
        if (btn.textContent.includes('Contact rapide')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Quick contact';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.sofa-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'At your home';
        features[1].textContent = 'Fast drying';
        features[2].textContent = 'Results guarantee';
        features[3].textContent = 'Ecological';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Deep cleaning for upholstered furniture';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Your sofa or armchair accumulates dust, mites, stains and odors over time. Our professional cleaning service uses the hot water extraction method that penetrates deep into fibers for complete cleaning.';
        descParagraphs[1].textContent = 'We treat all types of fabrics: cotton, velvet, linen, leather, faux leather, microfiber, and technical fabrics. Our team brings all necessary equipment (professional extractor, adapted products, protections) directly to your home.';
    }

    const allergyItem = document.querySelector('.allergy-item');
    if (allergyItem) {
        const allergyTitle = allergyItem.querySelector('h3');
        if (allergyTitle) {
            allergyTitle.innerHTML = '<i class="fas fa-exclamation-circle"></i> Allergies & mites';
        }
        const allergyText = allergyItem.querySelector('p');
        if (allergyText) {
            allergyText.textContent = 'Our anti-mite treatments eliminate 99% of allergens, ideal for sensitive people, asthmatics or with pets.';
        }
    }

    // Before/After labels
    const beforeLabel = document.querySelector('.before-label');
    if (beforeLabel) beforeLabel.textContent = 'Before';

    const afterLabel = document.querySelector('.after-label');
    if (afterLabel) afterLabel.textContent = 'After';

    // 3. TYPES OF FURNITURE SECTION
    const furnitureTitle = document.querySelector('.section-title');
    if (furnitureTitle && furnitureTitle.textContent.includes('Quels meubles')) {
        furnitureTitle.textContent = 'Which furniture do we clean?';
    }

    // Client cards (furniture types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Corner sofas
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Corner sofas';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Fabric';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Complete cleaning of seats, backs, armrests and cushions. Treatment of seams and corners.';
    }
    const card1Price = clientCards[0].querySelector('.price-badge');
    if (card1Price) card1Price.textContent = 'From €95';

    // Card 2: Leather sofas
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Leather sofas';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Real leather';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Cleaning and nourishing leather, anti-cracking treatment, UV protection, stain removal.';
    }
    const card2Price = clientCards[1].querySelector('.price-badge');
    if (card2Price) card2Price.textContent = 'From €110';

    // Card 3: Club armchairs
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Club armchairs';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Leather';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Cleaning of club armchairs, bergères, recliners, including mechanism and detachable cushions.';
    }
    const card3Price = clientCards[2].querySelector('.price-badge');
    if (card3Price) card3Price.textContent = 'From €65';

    // Card 4: Chairs & Seats
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Chairs & Seats';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Upholstered seats';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Cleaning of dining chairs, office seats, benches, and upholstered stools.';
    }
    const card4Price = clientCards[3].querySelector('.price-badge');
    if (card4Price) card4Price.textContent = 'From €25/piece';

    // Card 5: Sofa beds
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Sofa beds';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Convertibles';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Complete cleaning including mechanism, mattress and different seating positions.';
    }
    const card5Price = clientCards[4].querySelector('.price-badge');
    if (card5Price) card5Price.textContent = 'From €120';

    // Card 6: Cushions & Poufs
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Cushions & Poufs';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Decorative';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Cleaning of decorative cushions, poufs, throws, and living room textile accessories.';
    }
    const card6Price = clientCards[5].querySelector('.price-badge');
    if (card6Price) card6Price.textContent = 'From €15/piece';
}

// 4. CLEANING PROCESS SECTION
const processTitle = document.querySelectorAll('.section-title')[1];
if (processTitle && processTitle.textContent.includes('Notre processus')) {
    processTitle.textContent = 'Our process in 6 steps';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Free diagnosis';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Fabric evaluation, stain identification, personalized advice and transparent quote without commitment.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Preparation';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Complete vacuuming to remove dust and hairs, dusting of corners, protection of adjacent areas.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Pre-treatment';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Application of specific solutions to stain and dislodge stubborn dirt before deep cleaning.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Extraction cleaning';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Use of hot water extractor that injects cleaning solution and sucks up dirt in one operation.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Complementary treatments';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Application of anti-mite, deodorizers, and anti-stain protections according to your needs.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Drying & Finishing';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Use of professional fans for fast drying (2-6h), result verification, maintenance advice.';
}

// 5. ADVANTAGES SECTION
const advantagesTitle = document.querySelectorAll('.section-title')[2];
if (advantagesTitle && advantagesTitle.textContent.includes('Pourquoi nous choisir')) {
    advantagesTitle.textContent = 'Why choose us?';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Advantage 1
    const adv1Title = methodSteps[0].querySelector('h3');
    if (adv1Title) adv1Title.textContent = 'Home service';
    const adv1Desc = methodSteps[0].querySelector('p');
    if (adv1Desc) adv1Desc.textContent = 'We come to your home with all equipment. No need to move your furniture.';

    // Advantage 2
    const adv2Title = methodSteps[1].querySelector('h3');
    if (adv2Title) adv2Title.textContent = 'Fast drying';
    const adv2Desc = methodSteps[1].querySelector('p');
    if (adv2Desc) adv2Desc.textContent = 'Your sofa is usable in a few hours thanks to our professional equipment.';

    // Advantage 3
    const adv3Title = methodSteps[2].querySelector('h3');
    if (adv3Title) adv3Title.textContent = 'Satisfaction guarantee';
    const adv3Desc = methodSteps[2].querySelector('p');
    if (adv3Desc) adv3Desc.textContent = 'If you are not satisfied with the result, we come back free of charge to redo the treatment.';

    // Advantage 4
    const adv4Title = methodSteps[3].querySelector('h3');
    if (adv4Title) adv4Title.textContent = 'Ecological products';
    const adv4Desc = methodSteps[3].querySelector('p');
    if (adv4Desc) adv4Desc.textContent = 'We use biodegradable, non-toxic and environmentally friendly solutions.';
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
    if (faq1Btn) faq1Btn.textContent = 'How long does sofa cleaning take?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'For a 3-seater sofa: 1h30 to 2h of active cleaning. Drying varies from 2 to 6 hours depending on fabric and ventilation. We bring fans to speed up the process.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Does water damage the fabric?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'No, our extraction method uses a controlled amount of hot water that is immediately sucked up. We always test a discreet area beforehand and adjust power according to fabric.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Can you remove all stains?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'We remove 95% of common stains (food, drinks, ink, grease). Some old or chemical stains may leave a trace, but will be significantly attenuated.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Do I need to prepare something before your visit?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Simply clear access to the sofa and remove detachable cushions. We bring all necessary equipment and protections.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Are products dangerous for children or pets?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Our products are non-toxic and biodegradable. Once dry, the sofa is perfectly safe. We simply recommend waiting for complete drying before use.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Do you offer packages for several pieces?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Yes, we offer reduced rates for cleaning multiple sofas/armchairs, or for regular customers. Ask us for a personalized quote.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Give new life to your favorite furniture!';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Take advantage of our competitive prices for professional cleaning that eliminates stains, mites and odors. Your sofa like new, directly at your home.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit')) {
            btn.innerHTML = '<i class="fas fa-couch"></i> Free quote';
        }
        if (btn.textContent.includes('Prendre rendez-vous')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Make appointment';
        }
        if (btn.textContent.includes('Urgence tache')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Stain emergency';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Available 7/7 - Quick fix for recent stains';
}

// 8. UPDATE PRICE ESTIMATOR FUNCTION
updatePriceEstimator();

// console.log('Translation to English completed!');

// Update language switcher
updateLanguageButtons('en');
}

function updatePriceEstimator() {
    // Update price estimator function
    window.estimatePrice = function(type, size) {
        const prices = {
            'sofa-2': 75,
            'sofa-3': 95,
            'sofa-corner': 125,
            'armchair': 65,
            'chair': 25,
            'cushion': 15
        };
        return prices[type] || 0;
    };

    // Update notification texts for sofas
    const sofaBtns = document.querySelectorAll('[onclick*="canapes"]');
    sofaBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            localStorage.setItem('serviceType', 'sofas-armchairs');
            setTimeout(() => {
                const type = prompt("What type of furniture would you like to clean?\n1. Sofa\n2. Armchair\n3. Chair\n4. Other");
                const pieces = prompt("How many seats/pieces?");
                if (type && pieces) {
                    showNotification(`Quote being prepared for ${pieces} ${type.toLowerCase()}...`, 'success');
                }
            }, 1000);
        });
    });
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishSofas;
