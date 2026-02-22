// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// en-translation-fin-de-bail.js - English manual translation for "Nettoyage Fin de Bail"


function translateToEnglishFinDeBail() {
    // console.log('Translating End of Lease page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'End of Lease Cleaning <span class="bail-badge"><i class="fas fa-file-contract"></i> 100% Deposit Guarantee</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Specialized cleaning service meeting real estate agency requirements in Brussels. Written guarantee for full deposit recovery. Successful property inspection or free cleaning.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Garantie caution')) {
            btn.innerHTML = '<i class="fas fa-shield-alt"></i> Deposit guarantee';
        }
        if (btn.textContent.includes('Expert fin de bail')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> End of lease expert';
        }
    });

    // Hero features
    const bailFeatures = document.querySelectorAll('.bail-feature span');
    if (bailFeatures.length >= 4) {
        bailFeatures[0].textContent = 'Written guarantee included';
        bailFeatures[1].textContent = 'Agency compliant';
        bailFeatures[2].textContent = '100% deposit recovered';
        bailFeatures[3].textContent = '24h/48h intervention';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Your deposit secured';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'End of lease cleaning is the most critical step to recover your deposit. Real estate agencies are increasingly demanding and retain on average 30% of the security deposit for cleanliness issues.';
        descParagraphs[1].textContent = 'Our service is specifically designed to meet the strict criteria of exit property inspections. We know perfectly the checkpoints of major Brussels agencies and guarantee a compliant result.';
    }

    // Guarantee section
    const guaranteeItem = document.querySelector('.guarantee-item');
    if (guaranteeItem) {
        const guaranteeTitle = guaranteeItem.querySelector('h3');
        if (guaranteeTitle) {
            guaranteeTitle.innerHTML = '<i class="fas fa-award"></i> Our unique guarantee';
        }
        const guaranteeText = guaranteeItem.querySelector('p');
        if (guaranteeText) {
            guaranteeText.textContent = 'If your deposit is withheld for cleanliness reasons after our intervention, we fully refund the withheld amount AND redo the cleaning free of charge. Contractual guarantee.';
        }
    }

    // Statistics
    const statTexts = document.querySelectorAll('.stat-text');
    if (statTexts.length >= 4) {
        statTexts[0].textContent = 'of our clients recover 100% of their deposit';
        statTexts[1].textContent = 'average deposit withheld without professional cleaning';
        statTexts[2].textContent = 'average emergency intervention time';
        statTexts[3].textContent = 'hidden fees, transparent quote';
    }

    // 3. PACKAGES SECTION
    const packagesTitle = document.querySelector('.section-title');
    if (packagesTitle && packagesTitle.textContent.includes('Nos formules')) {
        packagesTitle.textContent = 'Our End of Lease Packages';
    }

    // Client cards (packages)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Studio
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Studio/Student Room (≤35m²)';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag && card1Tag.textContent.includes('Étudiants')) {
        card1Tag.textContent = 'Students';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Complete student studio cleaning: kitchenette, bathroom, single room. Ideal for student residences.';
    }
    const card1Price = clientCards[0].querySelector('div[style*="margin-top: 10px"]');
    if (card1Price) {
        card1Price.textContent = '€149 VAT included';
    }
    const card1Note = clientCards[0].querySelector('small');
    if (card1Note) {
        card1Note.textContent = 'Guarantee included';
    }

    // Card 2: Apartment F1
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Apartment F1 (35-50m²)';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag && card2Tag.textContent.includes('Célibataires')) {
        card2Tag.textContent = 'Singles';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Cleaning 1 main room + equipped kitchen + bathroom. Appliances included.';
    }
    const card2Price = clientCards[1].querySelector('div[style*="margin-top: 10px"]');
    if (card2Price) {
        card2Price.textContent = '€199 VAT included';
    }
    const card2Note = clientCards[1].querySelector('small');
    if (card2Note) {
        card2Note.textContent = 'Guarantee included';
    }

    // Card 3: Apartment F2
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Apartment F2 (50-70m²)';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag && card3Tag.textContent.includes('Couples')) {
        card3Tag.textContent = 'Couples';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Cleaning 2 rooms, kitchen, bathroom, hallway. Perfect for young couples.';
    }
    const card3Price = clientCards[2].querySelector('div[style*="margin-top: 10px"]');
    if (card3Price) {
        card3Price.textContent = '€259 VAT included';
    }
    const card3Note = clientCards[2].querySelector('small');
    if (card3Note) {
        card3Note.textContent = 'Guarantee included';
    }

    // Card 4: Apartment F3/F4
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Apartment F3/F4 (70-100m²)';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag && card4Tag.textContent.includes('Familles')) {
        card4Tag.textContent = 'Families';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Cleaning 3-4 rooms, 2 bathrooms, kitchen, hallways. Ideal for families.';
    }
    const card4Price = clientCards[3].querySelector('div[style*="margin-top: 10px"]');
    if (card4Price) {
        card4Price.textContent = '€349 VAT included';
    }
    const card4Note = clientCards[3].querySelector('small');
    if (card4Note) {
        card4Note.textContent = 'Guarantee included';
    }

    // Card 5: House
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'House (>100m²)';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag && card5Tag.textContent.includes('Grandes surfaces')) {
        card5Tag.textContent = 'Large surfaces';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Complete house cleaning with floors, garage, basement, terraces. Custom quote.';
    }
    const card5Price = clientCards[4].querySelector('div[style*="margin-top: 10px"]');
    if (card5Price) {
        card5Price.textContent = 'From €449';
    }
    const card5Note = clientCards[4].querySelector('small');
    if (card5Note) {
        card5Note.textContent = 'Free quote';
    }

    // Card 6: Emergency
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = '24h Emergency';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag && card6Tag.textContent.includes('Dernière minute')) {
        card6Tag.textContent = 'Last minute';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Property inspection tomorrow? We intervene within 24h. 30% surcharge for express service.';
    }
    const card6Price = clientCards[5].querySelector('div[style*="margin-top: 10px"]');
    if (card6Price) {
        card6Price.textContent = '+30%';
    }
    const card6Note = clientCards[5].querySelector('small');
    if (card6Note) {
        card6Note.textContent = 'Available 7/7';
    }
}

// 4. CHECKLIST SECTION
const checklistTitle = document.querySelectorAll('.section-title')[1];
if (checklistTitle && checklistTitle.textContent.includes('Notre checklist')) {
    checklistTitle.textContent = 'Our Professional Checklist';
}

// Checklist intro
const checklistIntro = document.querySelector('.checklist-detailed p');
if (checklistIntro) {
    checklistIntro.textContent = 'We check these 25 critical points for a successful property inspection';
}

// Update categories and items
const categoryTitles = document.querySelectorAll('.checklist-category h4');
if (categoryTitles.length >= 4) {
    categoryTitles[0].innerHTML = '<i class="fas fa-kitchen-set"></i> Kitchen';
    categoryTitles[1].innerHTML = '<i class="fas fa-bath"></i> Bathroom';
    categoryTitles[2].innerHTML = '<i class="fas fa-expand"></i> Rooms and Floors';
    categoryTitles[3].innerHTML = '<i class="fas fa-wind"></i> Finishing';
}

// Kitchen checklist items
const kitchenItems = document.querySelectorAll('.checklist-items')[0];
if (kitchenItems) {
    const items = kitchenItems.querySelectorAll('.checklist-item-detailed span');
    if (items.length >= 6) {
        items[0].textContent = 'Degreased cooking surfaces';
        items[1].textContent = 'Oven interior and door';
        items[2].textContent = 'Cleaned hood and filters';
        items[3].textContent = 'Refrigerator interior/exterior';
        items[4].textContent = 'Microwave interior/exterior';
        items[5].textContent = 'Degreased dishwasher';
    }
}

// Bathroom checklist items
const bathroomItems = document.querySelectorAll('.checklist-items')[1];
if (bathroomItems) {
    const items = bathroomItems.querySelectorAll('.checklist-item-detailed span');
    if (items.length >= 5) {
        items[0].textContent = 'Bleached tile joints';
        items[1].textContent = 'Descaling of sanitary fixtures';
        items[2].textContent = 'Shower panel without streaks';
        items[3].textContent = 'Shiny mirrors and faucets';
        items[4].textContent = 'Cleaned drain';
    }
}

// Rooms checklist items
const roomsItems = document.querySelectorAll('.checklist-items')[2];
if (roomsItems) {
    const items = roomsItems.querySelectorAll('.checklist-item-detailed span');
    if (items.length >= 5) {
        items[0].textContent = 'Dusted baseboards';
        items[1].textContent = 'Switches and sockets';
        items[2].textContent = 'Interior windows';
        items[3].textContent = 'Blinds and curtains';
        items[4].textContent = 'Cabinets interior/exterior';
    }
}

// Finishing checklist items
const finishingItems = document.querySelectorAll('.checklist-items')[3];
if (finishingItems) {
    const items = finishingItems.querySelectorAll('.checklist-item-detailed span');
    if (items.length >= 5) {
        items[0].textContent = 'Cleaned balcony/terrace';
        items[1].textContent = 'Basement/garage if applicable';
        items[2].textContent = 'Mailbox';
        items[3].textContent = 'Complete ventilation';
        items[4].textContent = 'Neutralized odors';
    }
}

// 5. TESTIMONIALS SECTION
const testimonialsTitle = document.querySelectorAll('.section-title')[2];
if (testimonialsTitle && testimonialsTitle.textContent.includes('Ils ont récupéré')) {
    testimonialsTitle.textContent = 'They Recovered Their Deposit';
}

// Update testimonials
const testimonialTexts = document.querySelectorAll('.testimonial-text');
if (testimonialTexts.length >= 3) {
    testimonialTexts[0].textContent = '"Perfect property inspection with ERA. The landlord found absolutely nothing to complain about. Full deposit returned in 48h. I recommend 200%!"';
    testimonialTexts[1].textContent = '"With 2 children and a cat, I was worried about marks. The team cleaned everything perfectly. Century 21 signed without reservation. A real relief."';
    testimonialTexts[2].textContent = '"Emergency: property inspection the next day. They came the same evening, worked until 10pm. Impeccable result. Service beyond my expectations."';
}

const testimonialAuthors = document.querySelectorAll('.testimonial-author span');
if (testimonialAuthors.length >= 3) {
    testimonialAuthors[0].textContent = 'Marie D., student - Studio 30m²';
    testimonialAuthors[1].textContent = 'Thomas L., family - F3 75m²';
    testimonialAuthors[2].textContent = 'Sophie R., expat - Urgent departure';
}

// 6. PROCESS SECTION
const processTitle = document.querySelectorAll('.section-title')[3];
if (processTitle && processTitle.textContent.includes('Notre processus')) {
    processTitle.textContent = 'Our Guaranteed Process';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Instant online quote';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Indicate surface area and property type. Immediate quote with guarantee included. Secure booking in 2 minutes.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Personalized check-list';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Sending a specific check-list for your property and agency. Optimal preparation before our intervention.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Professional intervention';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Specialized end of lease team, professional equipment, agency approved products. Discreet and effective intervention.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Strict quality control';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Point-by-point verification with our check-list. Before/after photos. Immediate adjustments if necessary.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Assisted property inspection';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Advice for the property inspection. Possibility of accompaniment (option). Phone support during inspection.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Deposit follow-up';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Reminder if deposit is late. Assistance in case of dispute. Application of our guarantee if necessary (rare).';
}

// 7. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[4];
if (faqTitle && faqTitle.textContent.includes('Questions fréquentes')) {
    faqTitle.textContent = 'Frequently Asked Questions - End of Lease';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'How exactly does your deposit guarantee work?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'Contractual guarantee: if your agency/landlord withholds part of your deposit for cleanliness reasons after our service, we fully refund the withheld amount AND redo the cleaning free of charge. Proof of withholding required.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Do I need to completely empty the property before your service?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Yes, the property must be completely emptied of your personal belongings and furniture. We clean surfaces, not objects. If needed, we can offer a clearance service (option).';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'What if my agency has specific requirements?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Send us the property inspection document or specific requirements from your agency. We adapt our check-list accordingly. We regularly work with major Brussels agencies.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Can I be present during the cleaning?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'You can, but it\'s not necessary. Most of our clients leave us the keys and go. We work autonomously and send you photos of the result.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Do you accept students with limited budgets?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Yes, we offer student rates and payment in 2 installments without fees (proof required). The studio at €149 is our most popular package among students.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'How long before the property inspection should I call you?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Ideally 3-5 days in advance. For emergencies, we intervene within 24h (with surcharge). We are available 7/7, especially at the end of the month (moving period).';
}

// 8. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Invest in recovering your deposit';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'For €149 to €449, ensure you recover 100% of your deposit (often €1,000 to €3,000). Our guarantee protects you. Stress-free property inspection guaranteed.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Calculer mon gain')) {
            btn.innerHTML = '<i class="fas fa-calculator"></i> Calculate my gain';
        }
        if (btn.textContent.includes('Réserver maintenant')) {
            btn.innerHTML = '<i class="fas fa-calendar-check"></i> Book now';
        }
        if (btn.textContent.includes('Urgence fin de bail')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> End of lease emergency';
        }
    });

    const ctaInfo = ctaBox.querySelector('p[style*="margin-top: 20px"]');
    if (ctaInfo) {
        ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Written guarantee included - Payment after successful property inspection - Available 7/7';
    }
}

// Update ROI calculator function
const calculateCustomROI = () => {
    const caution = prompt("Amount of your deposit (security deposit)?", "1500");
    if (caution) {
        const surface = prompt("Surface area of your property (m²)?", "50");
        let cleaningCost = 250;

        if (surface <= 35) cleaningCost = 149;
    else if (surface <= 50) cleaningCost = 199;
else if (surface <= 70) cleaningCost = 259;
else if (surface <= 100) cleaningCost = 349;
else cleaningCost = 449;

const potentialLoss = Math.round(caution * 0.3);
const netGain = caution - cleaningCost;
const roi = ((netGain - (caution - potentialLoss)) / cleaningCost * 100).toFixed(0);

showNotification(`ROI: ${roi}%. By investing €${cleaningCost}, you gain €${netGain - (caution - potentialLoss)} net.`, 'success');
}
};

// Update button event listener
const calculateBtn = document.querySelector('[onclick*="fin-de-bail"]');
if (calculateBtn && calculateBtn.textContent.includes('Calculate')) {
    calculateBtn.addEventListener('click', function(e) {
        if (this.textContent.includes('Calculate')) {
            e.preventDefault();
            calculateCustomROI();
        }
    });
}

// Update testimonial function
const shareTestimonial = () => {
    const name = prompt("Your first name?");
    const surface = prompt("Surface area of your property?");
    const agency = prompt("Name of your agency/landlord?");

    if (name && surface) {
        showNotification(`Thank you ${name}! Your testimonial helps reassure future clients.`, 'success');
    }
};

// 9. ADD LANGUAGE SWITCHER
addLanguageSwitcher();

// console.log('End of Lease page translation to English completed!');
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
        background: #dc2626;
        color: white;
        border-color: #dc2626;
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
    translateToEnglishFinDeBail();
    updateLanguageButtons('en');
}

function switchToFrench() {
    location.reload(); // Reload original French version
}

function switchToDutch() {
    // console.log('Switching to Dutch - loading Dutch translation...');
    // Will be replaced by Dutch translation function
    if (typeof translateToDutchFinDeBail === 'function') {
        translateToDutchFinDeBail();
    } else {
        loadDutchFinDeBailTranslation();
    }
}

function updateLanguageButtons(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}

// Toast notification function
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
window.applyTranslations = translateToEnglishFinDeBail;
