// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// en-translation-conciergerie.js - English manual translation for "Conciergerie"


function translateToEnglishConciergerie() {
    // console.log('Translating concierge page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Premium Concierge Service <span class="concierge-badge"><i class="fas fa-key"></i> Customized</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Save time and simplify your life with our complete concierge service in Brussels. Cleaning, shopping, ironing, event organization, pet sitting: we handle everything for you.';
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(btn => {
        if (btn.textContent.includes('Planifier un audit')) {
            btn.innerHTML = '<i class="fas fa-calendar-check"></i> Schedule audit';
        }
        if (btn.textContent.includes('Parler à un conseiller')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Talk to advisor';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.concierge-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Time saving guaranteed';
        features[1].textContent = 'Verified staff';
        features[2].textContent = 'Customized service';
        features[3].textContent = 'Available 7/7';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Your personal assistant in Brussels';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Between work, family and daily obligations, it is difficult to manage everything. Our concierge service gives you the luxury of time by taking over all time-consuming tasks of your daily life.';
        descParagraphs[1].textContent = 'Whether you are an overloaded professional, an active family or a senior wishing to maintain their independence, our team of professional concierges adapts to your specific needs with discretion and efficiency.';
    }

    const timeItem = document.querySelector('.time-item');
    if (timeItem) {
        const timeTitle = timeItem.querySelector('h3');
        if (timeTitle) {
            timeTitle.innerHTML = '<i class="fas fa-chart-line"></i> Return on investment';
        }
        const timeText = timeItem.querySelector('p');
        if (timeText) {
            timeText.textContent = 'Our service saves you on average 10-15 hours per week. Use this time for what really matters: family, hobbies, personal development.';
        }
    }

    // 3. SERVICES SECTION
    const servicesTitle = document.querySelector('.section-title');
    if (servicesTitle && servicesTitle.textContent.includes('Nos services conciergerie')) {
        servicesTitle.textContent = 'Our concierge services';
    }

    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length >= 6) {
        // Card 1: Surveillance
        const card1Title = serviceCards[0].querySelector('h3');
        if (card1Title) card1Title.textContent = 'Surveillance & Visits';
        const card1Desc = serviceCards[0].querySelector('p');
        if (card1Desc) {
            card1Desc.textContent = 'Regular visits to your property, checking openings/closings, presence simulation, detailed report with photos.';
        }

        // Card 2: Parcels
        const card2Title = serviceCards[1].querySelector('h3');
        if (card2Title) card2Title.textContent = 'Parcel Reception';
        const card2Desc = serviceCards[1].querySelector('p');
        if (card2Desc) {
            card2Desc.textContent = 'Reception and secure storage of your parcels, registered mail, managing returns in your absence, detailed inventory.';
        }

        // Card 3: Plants
        const card3Title = serviceCards[2].querySelector('h3');
        if (card3Title) card3Title.textContent = 'Plant Maintenance';
        const card3Desc = serviceCards[2].querySelector('p');
        if (card3Desc) {
            card3Desc.textContent = 'Personalized watering for each plant, fertilization, rotation for optimal light, dust removal from leaves.';
        }

        // Card 4: Pets
        const card4Title = serviceCards[3].querySelector('h3');
        if (card4Title) card4Title.textContent = 'Pet Sitting';
        const card4Desc = serviceCards[3].querySelector('p');
        if (card4Desc) {
            card4Desc.textContent = 'Daily visits for your pets, feeding, walks, veterinary care if needed, regular photos sent.';
        }

        // Card 5: Technical
        const card5Title = serviceCards[4].querySelector('h3');
        if (card5Title) card5Title.textContent = 'Technical Management';
        const card5Desc = serviceCards[4].querySelector('p');
        if (card5Desc) {
            card5Desc.textContent = 'Checking water leaks, monitoring heating/air conditioning, managing urgent breakdowns, coordination with craftsmen.';
        }

        // Card 6: Cleaning
        const card6Title = serviceCards[5].querySelector('h3');
        if (card6Title) card6Title.textContent = 'Household Maintenance';
        const card6Desc = serviceCards[5].querySelector('p');
        if (card6Desc) {
            card6Desc.textContent = 'Regular cleaning, ventilation of rooms, waste management, changing sheets, maintaining optimal cleanliness.';
        }
    }

    // 4. PROCESS SECTION
    const processTitle = document.querySelectorAll('.section-title')[1];
    if (processTitle && processTitle.textContent.includes('Comment ça marche')) {
        processTitle.textContent = 'How does it work?';
    }

    const methodSteps = document.querySelectorAll('.method-step');
    if (methodSteps.length >= 4) {
        // Step 1
        const step1Title = methodSteps[0].querySelector('h3');
        if (step1Title) step1Title.textContent = '1. Planning';
        const step1Desc = methodSteps[0].querySelector('p');
        if (step1Desc) step1Desc.textContent = 'First contact, evaluation of your needs, creation of a personalized schedule, signing of the contract.';

        // Step 2
        const step2Title = methodSteps[1].querySelector('h3');
        if (step2Title) step2Title.textContent = '2. Key Handover';
        const step2Desc = methodSteps[1].querySelector('p');
        if (step2Desc) step2Desc.textContent = 'Secure handover of keys (secure safe or double key), detailed briefing on your instructions.';

        // Step 3
        const step3Title = methodSteps[2].querySelector('h3');
        if (step3Title) step3Title.textContent = '3. Intervention';
        const step3Desc = methodSteps[2].querySelector('p');
        if (step3Desc) step3Desc.textContent = 'Execution of services according to schedule, regular communication, photos if requested.';

        // Step 4
        const step4Title = methodSteps[3].querySelector('h3');
        if (step4Title) step4Title.textContent = '4. Report & Assessment';
        const step4Desc = methodSteps[3].querySelector('p');
        if (step4Desc) step4Desc.textContent = 'Detailed report upon your return, return of keys, experience feedback, invoicing.';
    }

    // 5. SECURITY SECTION
    const securityTitle = document.querySelectorAll('.section-title')[2];
    if (securityTitle && securityTitle.textContent.includes('Notre engagement sécurité')) {
        securityTitle.textContent = 'Our security commitment';
    }

    const includedItems = document.querySelectorAll('.included-item');
    if (includedItems.length >= 4) {
        // Security 1
        const sec1Title = includedItems[0].querySelector('h3');
        if (sec1Title) sec1Title.textContent = 'Verified staff';
        const sec1Desc = includedItems[0].querySelector('p');
        if (sec1Desc) sec1Desc.textContent = 'All our concierges are carefully selected, with background checks and specific training.';

        // Security 2
        const sec2Title = includedItems[1].querySelector('h3');
        if (sec2Title) sec2Title.textContent = 'Contract & Insurance';
        const sec2Desc = includedItems[1].querySelector('p');
        if (sec2Desc) sec2Desc.textContent = 'Detailed contract with confidentiality agreement and professional liability insurance.';

        // Security 3
        const sec3Title = includedItems[2].querySelector('h3');
        if (sec3Title) sec3Title.textContent = 'Key security';
        const sec3Desc = includedItems[2].querySelector('p');
        if (sec3Desc) sec3Desc.textContent = 'Double key system or secure safe. Complete traceability of each intervention.';

        // Security 4
        const sec4Title = includedItems[3].querySelector('h3');
        if (sec4Title) sec4Title.textContent = 'Transparency';
        const sec4Desc = includedItems[3].querySelector('p');
        if (sec4Desc) sec4Desc.textContent = 'Detailed reports with photos (upon request), logbook, history of interventions.';
    }

    // 6. FAQ SECTION
    const faqTitle = document.querySelectorAll('.section-title')[3];
    if (faqTitle && faqTitle.textContent.includes('Questions fréquentes')) {
        faqTitle.textContent = 'Frequently asked questions';
    }

    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length >= 4) {
        // FAQ 1
        const faq1Btn = faqItems[0].querySelector('.faq-question');
        if (faq1Btn) faq1Btn.textContent = 'How do you ensure the security of my keys?';
        const faq1Answer = faqItems[0].querySelector('.faq-answer p');
        if (faq1Answer) faq1Answer.textContent = 'Our security system is multi-level:';
        const faq1List = faqItems[0].querySelectorAll('.faq-answer li');
        if (faq1List.length >= 5) {
            faq1List[0].innerHTML = '<strong>Secure safe</strong> : Storage in our 24/7 secured premises';
            faq1List[1].innerHTML = '<strong>Double key system</strong> : Option possible according to your preferences';
            faq1List[2].innerHTML = '<strong>Traceability</strong> : Every key manipulation is recorded';
            faq1List[3].innerHTML = '<strong>Insurance</strong> : Complete coverage in case of loss';
            faq1List[4].innerHTML = '<strong>Systematic return</strong> : Keys are returned personally upon your return';
        }

        // FAQ 2
        const faq2Btn = faqItems[1].querySelector('.faq-question');
        if (faq2Btn) faq2Btn.textContent = 'Can I modify services during my absence?';
        const faq2Answer = faqItems[1].querySelector('.faq-answer p');
        if (faq2Answer) faq2Answer.textContent = 'Yes, we are flexible:';
        const faq2List = faqItems[1].querySelectorAll('.faq-answer li');
        if (faq2List.length >= 5) {
            faq2List[0].innerHTML = '<strong>Direct contact</strong> : Your assigned referent available by phone/WhatsApp';
            faq2List[1].innerHTML = '<strong>Possible modifications</strong> : Adding or removing services according to your needs';
            faq2List[2].innerHTML = '<strong>Emergencies</strong> : Management of unforeseen events (water leak, breakdown, etc.)';
            faq2List[3].innerHTML = '<strong>Communication</strong> : Regular updates if desired';
            faq2List[4].innerHTML = '<strong>Adjusted billing</strong> : Only services performed are billed';
        }

        // FAQ 3
        const faq3Btn = faqItems[2].querySelector('.faq-question');
        if (faq3Btn) faq3Btn.textContent = 'Do you offer services for businesses?';
        const faq3Answer = faqItems[2].querySelector('.faq-answer p');
        if (faq3Answer) faq3Answer.textContent = 'Absolutely, our services adapt to professionals:';
        const faq3List = faqItems[2].querySelectorAll('.faq-answer li');
        if (faq3List.length >= 5) {
            faq3List[0].innerHTML = '<strong>Professional premises</strong> : Offices, shops, showrooms';
            faq3List[1].innerHTML = '<strong>Specific services</strong> : Watering indoor plants, cleaning, mail management';
            faq3List[2].innerHTML = '<strong>Flexible hours</strong> : Interventions in evening or weekend';
            faq3List[3].innerHTML = '<strong>Billing</strong> : Professional quote with deductible VAT';
            faq3List[4].innerHTML = '<strong>Annual contract</strong> : Possibility of monthly or annual contract';
        }

        // FAQ 4
        const faq4Btn = faqItems[3].querySelector('.faq-question');
        if (faq4Btn) faq4Btn.textContent = 'How does the first contact work?';
        const faq4Answer = faqItems[3].querySelector('.faq-answer p');
        if (faq4Answer) faq4Answer.textContent = 'Our welcome process is simple and secure:';
        const faq4List = faqItems[3].querySelectorAll('.faq-answer li');
        if (faq4List.length >= 5) {
            faq4List[0].innerHTML = '<strong>Initial contact</strong> : By phone, email or online form';
            faq4List[1].innerHTML = '<strong>Free visit</strong> : Meeting at your home/premises to evaluate your needs';
            faq4List[2].innerHTML = '<strong>Personalized quote</strong> : Detailed proposal without commitment';
            faq4List[3].innerHTML = '<strong>Contract signing</strong> : Establishment of contract and instructions';
            faq4List[4].innerHTML = '<strong>Briefing</strong> : Transmission of important information before your departure';
        }
    }

    // 7. FINAL CTA SECTION
    const ctaBox = document.querySelector('.cta-box');
    if (ctaBox) {
        const ctaTitle = ctaBox.querySelector('h2');
        if (ctaTitle) ctaTitle.textContent = 'Leave with peace of mind';

        const ctaText = ctaBox.querySelector('p');
        if (ctaText) ctaText.textContent = 'Entrust us with the management of your home or professional space during your absence';

        const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
        ctaButtons.forEach(btn => {
            if (btn.textContent.includes('Planifier un service')) {
                btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Schedule service';
            }
            if (btn.textContent.includes('Demander un devis')) {
                btn.innerHTML = '<i class="fas fa-file-alt"></i> Request quote';
            }
            if (btn.textContent.includes('Appeler maintenant')) {
                btn.innerHTML = '<i class="fas fa-phone"></i> Call now';
            }
        });

        const ctaInfo = ctaBox.querySelector('p:last-child');
        if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> First audit free | Service available 7/7 | Customization according to your needs';
    }

    // console.log('Translation to English completed!');

    // Update language switcher
    updateLanguageButtons('en');
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishConciergerie;
