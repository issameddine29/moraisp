// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// en-translation-home.js - English translation for "Nettoyage Maison & Appartement"


function translateToEnglishHome() {
    // console.log('Translating home cleaning page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'House & Apartment Cleaning <span class="trust-badge"><i class="fas fa-home"></i> Trusted Staff</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Regular cleaning, deep cleaning or spring cleaning for your house or apartment in Brussels. Enjoy a spotless interior without effort. Carefully selected staff and ecological products.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis ménage') || btn.textContent.includes('Cleaning quote')) {
            btn.innerHTML = '<i class="fas fa-broom"></i> Cleaning quote';
        }
        if (btn.textContent.includes('Appeler maintenant') || btn.textContent.includes('Call now')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Call now';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.home-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Verified staff';
        features[1].textContent = 'Ecological products';
        features[2].textContent = 'Turnkey service';
        features[3].textContent = 'Liability insurance';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Your home in good hands';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Between work, family and daily obligations, finding time for thorough cleaning often becomes mission impossible. That\'s where we come in.';
        descParagraphs[1].textContent = 'Our residential cleaning service frees you from this chore. We adapt our intervention to your lifestyle: regular, occasional or seasonal. Each member of our team is trained in residential cleaning techniques and selected for their reliability.';
    }

    const familyItem = document.querySelector('.family-item');
    if (familyItem) {
        const familyTitle = familyItem.querySelector('h3');
        if (familyTitle) {
            familyTitle.innerHTML = '<i class="fas fa-heart"></i> For busy families';
        }
        const familyText = familyItem.querySelector('p');
        if (familyText) {
            familyText.textContent = 'We understand the needs of families. Exclusive use of non-toxic products, respect for personal belongings, and schedules adapted to your timetable.';
        }
    }

    // 3. RESIDENTIAL TYPES SECTION
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && sectionTitle.textContent.includes('Nos formules résidentielles')) {
        sectionTitle.textContent = 'Our residential packages';
    }

    // Client cards (residential types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Regular cleaning
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title && card1Title.textContent.includes('Ménage régulier')) {
        card1Title.textContent = 'Regular cleaning';
    }
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Weekly / Bi-weekly';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Regular maintenance of your home. Vacuuming, dusting, surface cleaning, kitchen and bathroom. Flexible schedule.';
    }

    // Card 2: Seasonal cleaning
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title && card2Title.textContent.includes('Grand ménage saisonnier')) {
        card2Title.textContent = 'Seasonal deep cleaning';
    }
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Spring / Autumn';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Thorough cleaning 1-2 times per year. Windows, cabinets, curtains, appliances, hard-to-reach areas.';
    }

    // Card 3: After moving
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title && card3Title.textContent.includes('Après déménagement')) {
        card3Title.textContent = 'After moving';
    }
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Move-in / Move-out';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Complete restoration of old or new home. Thorough cleaning to recover deposit or welcome into a clean space.';
    }

    // Card 4: Senior assistance
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title && card4Title.textContent.includes('Aide aux seniors')) {
        card4Title.textContent = 'Senior assistance';
    }
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Adapted service';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Light cleaning adapted for elderly people. Special attention to specific needs, gentle products, and trust relationship.';
    }

    // Card 5: Families with pets
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title && card5Title.textContent.includes('Familles avec animaux')) {
        card5Title.textContent = 'Families with pets';
    }
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Pet hair & allergens';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Specialized cleaning for homes with pets. Removal of pet hair, odor treatment, products adapted for pet safety.';
    }

    // Card 6: Seasonal rental
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title && card6Title.textContent.includes('Location saisonnière')) {
        card6Title.textContent = 'Seasonal rental';
    }
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Airbnb / Rentals';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Cleaning service between each rental. Linen change, restocking, complete checklist to prepare for new tenants.';
    }
}

// 4. INCLUDED SERVICES SECTION
const includedTitle = document.querySelectorAll('.section-title')[1];
if (includedTitle && includedTitle.textContent.includes('Notre procédure résidentielle')) {
    includedTitle.textContent = 'Our residential procedure';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'First contact & quote';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Assessment of your needs, visit if necessary, detailed quote without obligation. Discussion about your preferences and specific requirements.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Assignment of a dedicated person';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'We assign you a professional who will become your contact person. Same person at each visit for a trust relationship.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Living areas cleaning';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Living room, dining room, bedrooms: complete dusting, vacuuming/carpet, light tidying, surface treatment.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Kitchen and bathrooms';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Cleaning of worktops, appliances, sinks. Bathrooms: toilets, shower, bathtub, mirrors, shiny faucets.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Finishing touches and details';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Garbage removal, small tidying, glass surface treatment, final check of overlooked areas.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Feedback and adjustments';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'After each intervention, we check your satisfaction. Adjustment of services if necessary to exactly match your expectations.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && equipmentTitle.textContent.includes('Notre approche respectueuse')) {
    equipmentTitle.textContent = 'Our respectful approach';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Ecological products';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Exclusively Ecolabel certified products, non-toxic, without synthetic fragrances. Safe for children, pets and sensitive people.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'Gentle methods';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Manual cleaning techniques prioritizing efficiency without aggressiveness. Preservation of your surfaces and equipment.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Trained staff';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Our teams are trained in residential cleaning specifics: delicacy, discretion, respect for privacy and personal belongings.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Professional equipment';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Vacuum cleaners with HEPA filtration, quality microfibers, equipment adapted to each type of surface for impeccable results.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && faqTitle.textContent.includes('Questions résidentielles fréquentes')) {
    faqTitle.textContent = 'Frequently asked residential questions';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Do I need to be present during cleaning?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'No, it\'s not necessary. Many of our clients leave us keys or a duplicate. We have a secure key system and sign a confidentiality agreement. You can also be present if you prefer.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Do you bring your own products and equipment?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Yes, we bring everything needed: ecological products, professional vacuum cleaner, microfibers, buckets, etc. If you have specific products you prefer, we\'ll gladly use them.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'How do you ensure the security of my belongings?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'All our employees are verified (clean criminal record), insured with professional liability insurance, and sign a confidentiality clause. We are also insured for potential property damage.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Can I request specific tasks?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Absolutely! Each cleaning is personalized. You can provide us with a list of priorities or specific areas to treat. We establish together a cleaning plan adapted to your needs.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'What happens if I\'m not satisfied?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Your satisfaction is guaranteed. If something doesn\'t suit you, contact us within 24 hours and we\'ll return free of charge to rectify the problem. We place great importance on the trust relationship.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Do you offer advantageous monthly packages?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Yes, we offer monthly packages with up to 15% discount depending on frequency. These packages generally include: regular cleaning + a monthly additional service (windows, refrigerator, etc.).';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Regain time to live';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Free yourself from cleaning chores and enjoy your free time. A clean home improves your daily well-being and quality of life.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit')) {
            btn.innerHTML = '<i class="fas fa-home"></i> Free quote';
        }
        if (btn.textContent.includes('Planifier une visite')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Schedule a visit';
        }
        if (btn.textContent.includes('Nous appeler')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Call us';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> First free trial for new customers - Satisfaction guaranteed';
}

// Update notification text
const homeBtn = document.querySelector('.btn-primary');
if (homeBtn) {
    homeBtn.addEventListener('click', function() {
        localStorage.setItem('homeService', 'house-apartment');
        // Update notification function if exists
        if (typeof showNotification === 'function') {
            showNotification('Cleaning quote request registered. We will contact you within 24 hours to schedule a visit.', 'success');
        }
    });
}

// 8. ADD LANGUAGE SWITCHER
addLanguageSwitcherHome();

// console.log('Home cleaning page translation to English completed!');
}

function addLanguageSwitcherHome() {
    // Check if switcher already exists
    if (document.querySelector('.language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
    <button onclick="switchToFrenchHome()" class="lang-btn active">FR</button>
    <button onclick="switchToEnglishHome()" class="lang-btn">EN</button>
    <button onclick="switchToDutchHome()" class="lang-btn">NL</button>
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
function switchToEnglishHome() {
    translateToEnglishHome();
    updateLanguageButtonsHome('en');
}

function switchToFrenchHome() {
    location.reload(); // Reload original French version
}

function switchToDutchHome() {
    // console.log('Switching to Dutch - loading Dutch translation...');
    // Load Dutch translation function when available
    if (typeof translateToDutchHome === 'function') {
        translateToDutchHome();
    } else {
        alert('Dutch translation coming soon!');
    }
}

function updateLanguageButtonsHome(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishHome;
