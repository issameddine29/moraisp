// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// devis-gratuit-en.js - Traduction anglaise pour "Devis Gratuit"

function translateToEnglishQuote() {
    // console.log('Translating quote page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.textContent = 'Get Your Personalized Quote';
    }

    const heroBadge = document.querySelector('.hero-badge span');
    if (heroBadge) {
        heroBadge.textContent = 'FREE QUOTE WITH NO OBLIGATION';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Request your free estimate for all professional cleaning services in Brussels. Transparent, fast and tailored to your specific needs.';
    }

    // Hero features
    const heroFeatures = document.querySelectorAll('.hero-feature span');
    if (heroFeatures.length >= 4) {
        heroFeatures[0].textContent = 'Response within 24h maximum';
        heroFeatures[1].textContent = 'Free quote with no obligation';
        heroFeatures[2].textContent = 'Transparent prices, no surprises';
        heroFeatures[3].textContent = 'Quick start possible';
    }

    // Hero button
    const heroButton = document.querySelector('.quote-hero .btn-accent');
    if (heroButton) {
        heroButton.innerHTML = '<i class="fas fa-calculator"></i> Start the estimate';
    }

    // 2. CALCULATOR SECTION
    const calculatorTitle = document.querySelector('#calculator-title');
    if (calculatorTitle) {
        calculatorTitle.textContent = 'Online Estimate';
    }

    const calculatorSubtitle = document.querySelector('.quote-calculator .section-subtitle');
    if (calculatorSubtitle) {
        calculatorSubtitle.textContent = 'Answer a few questions to get a personalized estimate';
    }

    // Steps labels
    const steps = document.querySelectorAll('.calculator-step .step-label');
    if (steps.length >= 4) {
        steps[0].textContent = 'Service Type';
        steps[1].textContent = 'Details & Options';
        steps[2].textContent = 'Frequency';
        steps[3].textContent = 'Your Contact Information';
    }

    // Step 1: Service Type
    const step1Title = document.querySelector('#step-1 h3');
    if (step1Title) {
        step1Title.textContent = 'What type of cleaning are you looking for?';
    }

    const serviceOptions = document.querySelectorAll('.service-option');
    if (serviceOptions.length >= 4) {
        // Option 1
        const option1Title = serviceOptions[0].querySelector('h4');
        if (option1Title) option1Title.textContent = 'Offices & Commercial Premises';
        const option1Desc = serviceOptions[0].querySelector('p');
        if (option1Desc) option1Desc.textContent = 'Regular or one-time cleaning for businesses and stores';

        // Option 2
        const option2Title = serviceOptions[1].querySelector('h4');
        if (option2Title) option2Title.textContent = 'Residential & Condominiums';
        const option2Desc = serviceOptions[1].querySelector('p');
        if (option2Desc) option2Desc.textContent = 'Apartments, houses, common areas of buildings';

        // Option 3
        const option3Title = serviceOptions[2].querySelector('h4');
        if (option3Title) option3Title.textContent = 'Specialized Cleaning';
        const option3Desc = serviceOptions[2].querySelector('p');
        if (option3Desc) option3Desc.textContent = 'Carpets, rugs, windows, sofas, end of lease';

        // Option 4
        const option4Title = serviceOptions[3].querySelector('h4');
        if (option4Title) option4Title.textContent = 'Industrial & Post-Construction';
        const option4Desc = serviceOptions[3].querySelector('p');
        if (option4Desc) option4Desc.textContent = 'Construction sites, industrial premises, deep cleaning';
    }

    // Step 1 buttons
    const nextButton1 = document.querySelector('#step-1 .next-step');
    if (nextButton1) {
        nextButton1.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    }

    // Step 2: Details & Options
    const step2Title = document.querySelector('#step-2 h3');
    if (step2Title) {
        step2Title.textContent = 'More details about your needs';
    }

    // Surface area
    const surfaceLabel = document.querySelector('label[for="surface-area"]');
    if (surfaceLabel) {
        surfaceLabel.innerHTML = 'Area to clean (m²) <span class="required">*</span>';
    }

    const sliderLabels = document.querySelectorAll('.slider-header span');
    if (sliderLabels.length >= 3) {
        sliderLabels[0].textContent = 'Small area';
        sliderLabels[2].textContent = 'Large area';
    }

    // Specific services
    const servicesLabel = document.querySelectorAll('.form-label')[1];
    if (servicesLabel) {
        servicesLabel.textContent = 'Specific services needed';
    }

    const checkboxes = document.querySelectorAll('.checkbox-option');
    if (checkboxes.length >= 6) {
        // Checkbox 1
        const cb1Label = checkboxes[0].querySelector('label');
        if (cb1Label) cb1Label.textContent = 'Carpet/rug cleaning';

        // Checkbox 2
        const cb2Label = checkboxes[1].querySelector('label');
        if (cb2Label) cb2Label.textContent = 'Window cleaning';

        // Checkbox 3
        const cb3Label = checkboxes[2].querySelector('label');
        if (cb3Label) cb3Label.textContent = 'Restrooms & kitchens';

        // Checkbox 4
        const cb4Label = checkboxes[3].querySelector('label');
        if (cb4Label) cb4Label.textContent = 'Floor treatment';

        // Checkbox 5
        const cb5Label = checkboxes[4].querySelector('label');
        if (cb5Label) cb5Label.textContent = 'Special disinfection';

        // Checkbox 6
        const cb6Label = checkboxes[5].querySelector('label');
        if (cb6Label) cb6Label.textContent = 'Product supply included';
    }

    // Special notes
    const notesLabel = document.querySelectorAll('.form-label')[2];
    if (notesLabel) {
        notesLabel.textContent = 'Notes or special requirements';
    }

    const textarea = document.querySelector('#special-notes');
    if (textarea) {
        textarea.placeholder = 'Specify any specific requirements, special schedules, or other important information...';
    }

    // Step 2 buttons
    const prevButton2 = document.querySelector('#step-2 .prev-step');
    if (prevButton2) {
        prevButton2.innerHTML = '<i class="fas fa-arrow-left"></i> Previous';
    }

    const nextButton2 = document.querySelector('#step-2 .next-step');
    if (nextButton2) {
        nextButton2.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    }

    // Step 3: Frequency
    const step3Title = document.querySelector('#step-3 h3');
    if (step3Title) {
        step3Title.textContent = 'Service frequency';
    }

    const frequencyOptions = document.querySelectorAll('#step-3 .service-option');
    if (frequencyOptions.length >= 4) {
        // Option 1
        const freq1Title = frequencyOptions[0].querySelector('h4');
        if (freq1Title) freq1Title.textContent = 'One-time / Single';
        const freq1Desc = frequencyOptions[0].querySelector('p');
        if (freq1Desc) freq1Desc.textContent = 'Single or occasional cleaning';
        const freq1Small = frequencyOptions[0].querySelector('small');
        if (freq1Small) freq1Small.textContent = 'Ideal for end of lease, after construction, or special occasion';

        // Option 2
        const freq2Title = frequencyOptions[1].querySelector('h4');
        if (freq2Title) freq2Title.textContent = 'Weekly';
        const freq2Desc = frequencyOptions[1].querySelector('p');
        if (freq2Desc) freq2Desc.textContent = 'Regular cleaning each week';
        const freq2Small = frequencyOptions[1].querySelector('small');
        if (freq2Small) freq2Small.textContent = 'For offices, stores or regular residences';

        // Option 3
        const freq3Title = frequencyOptions[2].querySelector('h4');
        if (freq3Title) freq3Title.textContent = 'Monthly';
        const freq3Desc = frequencyOptions[2].querySelector('p');
        if (freq3Desc) freq3Desc.textContent = 'Monthly or bi-monthly maintenance';
        const freq3Small = frequencyOptions[2].querySelector('small');
        if (freq3Small) freq3Small.textContent = 'For routine space maintenance';

        // Option 4
        const freq4Title = frequencyOptions[3].querySelector('h4');
        if (freq4Title) freq4Title.textContent = 'Daily';
        const freq4Desc = frequencyOptions[3].querySelector('p');
        if (freq4Desc) freq4Desc.textContent = 'Complete daily service';
        const freq4Small = frequencyOptions[3].querySelector('small');
        if (freq4Small) freq4Small.textContent = 'For businesses with intensive needs';
    }

    // Step 3 buttons
    const prevButton3 = document.querySelector('#step-3 .prev-step');
    if (prevButton3) {
        prevButton3.innerHTML = '<i class="fas fa-arrow-left"></i> Previous';
    }

    const nextButton3 = document.querySelector('#step-3 .next-step');
    if (nextButton3) {
        nextButton3.innerHTML = 'Next <i class="fas fa-arrow-right"></i>';
    }

    // Step 4: Contact Information
    const step4Title = document.querySelector('#step-4 h3');
    if (step4Title) {
        step4Title.textContent = 'Your contact information';
    }

    // Estimation result
    const estimationTitle = document.querySelector('.estimation-title');
    if (estimationTitle) {
        estimationTitle.textContent = 'Indicative estimate';
    }

    const estimationNote = document.querySelector('.estimation-note');
    if (estimationNote) {
        estimationNote.textContent = '* This price is an estimate based on your responses. A precise quote will be sent to you after analysis of your request.';
    }

    // Form labels
    const nameLabel = document.querySelector('label[for="quote-name"]');
    if (nameLabel) {
        nameLabel.innerHTML = 'Full name <span class="required">*</span>';
    }
    document.getElementById('quote-name').placeholder = 'Your first and last name';

    const companyLabel = document.querySelector('label[for="quote-company"]');
    if (companyLabel) {
        companyLabel.textContent = 'Company (if applicable)';
    }
    document.getElementById('quote-company').placeholder = 'Your company name';

    const emailLabel = document.querySelector('label[for="quote-email"]');
    if (emailLabel) {
        emailLabel.innerHTML = 'Email <span class="required">*</span>';
    }
    document.getElementById('quote-email').placeholder = 'your@email.com';

    const phoneLabel = document.querySelector('label[for="quote-phone"]');
    if (phoneLabel) {
        phoneLabel.innerHTML = 'Phone <span class="required">*</span>';
    }
    document.getElementById('quote-phone').placeholder = '+32 XXX XX XX XX';

    const addressLabel = document.querySelector('label[for="quote-address"]');
    if (addressLabel) {
        addressLabel.innerHTML = 'Site address <span class="required">*</span>';
    }
    document.getElementById('quote-address').placeholder = 'Complete address in Brussels';

    const messageLabel = document.querySelector('label[for="quote-message"]');
    if (messageLabel) {
        messageLabel.textContent = 'Additional message';
    }
    document.getElementById('quote-message').placeholder = 'Specify any additional information useful for your quote...';

    // Privacy checkbox
    const privacyCheckbox = document.querySelector('#quote-privacy + label');
    if (privacyCheckbox) {
        privacyCheckbox.innerHTML = 'I accept the <a href="../privacy.html" target="_blank">privacy policy</a> and I authorize the processing of my personal data <span class="required">*</span>';
    }

    // Newsletter checkbox
    const newsletterCheckbox = document.querySelector('#quote-newsletter + label');
    if (newsletterCheckbox) {
        newsletterCheckbox.textContent = 'I wish to receive offers and news from Morais Cleaning';
    }

    // Step 4 buttons
    const prevButton4 = document.querySelector('#step-4 .prev-step');
    if (prevButton4) {
        prevButton4.innerHTML = '<i class="fas fa-arrow-left"></i> Previous';
    }

    const submitButton = document.querySelector('#submitQuoteBtn');
    if (submitButton) {
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Send my request';
    }

    // 3. CONTACT INFO SECTION
    const contactTitle = document.querySelector('#contact-title');
    if (contactTitle) {
        contactTitle.textContent = 'Contact Us Directly';
    }

    const contactSubtitle = document.querySelector('.contact-info-section .section-subtitle');
    if (contactSubtitle) {
        contactSubtitle.textContent = 'Several ways to reach us for your quote requests';
    }

    const contactCards = document.querySelectorAll('.contact-card');
    if (contactCards.length >= 3) {
        // Card 1: Phone
        const card1Title = contactCards[0].querySelector('h3');
        if (card1Title) card1Title.textContent = 'Phone';
        const card1Desc = contactCards[0].querySelector('p');
        if (card1Desc) card1Desc.textContent = 'Call us for a quick quote';
        const card1Schedule = contactCards[0].querySelectorAll('p')[1];
        if (card1Schedule) {
            card1Schedule.innerHTML = '<i class="fas fa-clock"></i> Mon-Fri: 8am-6pm<br><i class="fas fa-clock"></i> Sat: 9am-1pm';
        }

        // Card 2: Email
        const card2Title = contactCards[1].querySelector('h3');
        if (card2Title) card2Title.textContent = 'Email';
        const card2Desc = contactCards[1].querySelector('p');
        if (card2Desc) card2Desc.textContent = 'Send us your details by email';
        const card2Info = contactCards[1].querySelectorAll('p')[1];
        if (card2Info) card2Info.textContent = 'Response guaranteed within 24h';

        // Card 3: Zone
        const card3Title = contactCards[2].querySelector('h3');
        if (card3Title) card3Title.textContent = 'Service area';
        const card3Desc = contactCards[2].querySelector('p');
        if (card3Desc) card3Desc.textContent = 'We cover the entire Brussels region';
        const card3List = contactCards[2].querySelectorAll('p')[1];
        if (card3List) {
            card3List.innerHTML = 'Brussels-City and municipalities<br>Woluwe-Saint-Lambert<br>Ixelles, Etterbeek<br>Anderlecht, Molenbeek<br>And all neighboring municipalities';
        }
    }

    // 4. FAQ SECTION
    const faqTitle = document.querySelector('#faq-title');
    if (faqTitle) {
        faqTitle.textContent = 'Questions about our Quotes';
    }

    const faqSubtitle = document.querySelector('.faq-section .section-subtitle');
    if (faqSubtitle) {
        faqSubtitle.textContent = 'Everything you need to know about our prices and process';
    }

    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length >= 5) {
        // FAQ 1
        const faq1Btn = faqItems[0].querySelector('.faq-question');
        if (faq1Btn) faq1Btn.textContent = 'How are your prices calculated?';
        const faq1Answer = faqItems[0].querySelector('.faq-answer p');
        if (faq1Answer) {
            faq1Answer.textContent = 'Our prices are calculated based on several criteria: area to clean, type of service, frequency, technical specifics and necessary equipment. We always offer optimal value for money with total transparency on costs.';
        }

        // FAQ 2
        const faq2Btn = faqItems[1].querySelector('.faq-question');
        if (faq2Btn) faq2Btn.textContent = 'Is the quote really free and without obligation?';
        const faq2Answer = faqItems[1].querySelector('.faq-answer p');
        if (faq2Answer) {
            faq2Answer.textContent = 'Absolutely. Our online estimate and the detailed quote we send you afterwards are completely free. You have no obligation to order after receiving the quote.';
        }

        // FAQ 3
        const faq3Btn = faqItems[2].querySelector('.faq-question');
        if (faq3Btn) faq3Btn.textContent = 'How long will it take to receive my quote?';
        const faq3Answer = faqItems[2].querySelector('.faq-answer p');
        if (faq3Answer) {
            faq3Answer.textContent = 'The online estimate is immediate. For a detailed personalized quote, we commit to responding within 24 business hours maximum, often much faster.';
        }

        // FAQ 4
        const faq4Btn = faqItems[3].querySelector('.faq-question');
        if (faq4Btn) faq4Btn.textContent = 'Do you offer monthly packages?';
        const faq4Answer = faqItems[3].querySelector('.faq-answer p');
        if (faq4Answer) {
            faq4Answer.textContent = 'Yes, we offer monthly, quarterly and annual packages with preferential rates for long-term contracts. These packages often include free additional services.';
        }

        // FAQ 5 (previously hidden)
        const faq5Btn = faqItems[4].querySelector('.faq-question');
        if (faq5Btn) faq5Btn.textContent = 'What payment methods do you accept?';
        const faq5Answer = faqItems[4].querySelector('.faq-answer p');
        if (faq5Answer) {
            faq5Answer.textContent = 'We accept bank transfers, credit/debit cards, PayPal and for businesses, we can issue invoices with payment terms. All prices include VAT.';
        }
        
        // Make FAQ 5 visible
        faqItems[4].querySelector('.faq-answer').removeAttribute('hidden');
    }

    // 5. FINAL CTA SECTION
    const ctaTitle = document.querySelector('#cta-title');
    if (ctaTitle) {
        ctaTitle.textContent = 'Need an Urgent Quote?';
    }

    const ctaText = document.querySelector('.final-cta p');
    if (ctaText) {
        ctaText.textContent = 'Contact us directly by phone for an immediate estimate and quick start of your cleaning work.';
    }

    // CTA buttons
    const ctaButtons = document.querySelectorAll('.final-cta .btn');
    if (ctaButtons.length >= 2) {
        ctaButtons[0].innerHTML = '<i class="fas fa-phone"></i> Call now: 0478/95.12.69';
        ctaButtons[1].innerHTML = '<i class="fas fa-calculator"></i> Restart the estimate';
    }

    // Features list
    const featureList = document.querySelectorAll('.final-cta span');
    if (featureList.length >= 4) {
        featureList[0].textContent = 'Free quote';
        featureList[1].textContent = 'Response within 24h';
        featureList[2].textContent = 'No obligation';
        featureList[3].textContent = 'Transparent prices';
    }

    // Update meta tags
    updateMetaTagsEnglish();

    // console.log('Quote page translation to English completed!');
}

function updateMetaTagsEnglish() {
    // Update page title
    document.title = 'Free Quote - Morais Cleaning - Cleaning Brussels';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = 'Request your free quote for all cleaning services in Brussels: offices, commercial premises, residential, carpets, windows, end-of-lease. Quick response within 24h.';
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.content = 'cleaning quote Brussels, free cleaning quote, professional cleaning prices, office cleaning estimate, carpet cleaning price, window cleaning quote, end of lease price';
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.content = 'Free Cleaning Quote - Morais Cleaning Brussels';
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.content = 'Get a personalized quote for your professional cleaning needs in Brussels. Fast, transparent and no-obligation service.';
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.content = 'Free Cleaning Quote - Morais Cleaning';
    }
}

function loadEnglishTranslationQuote() {
    translateToEnglishQuote();
}

// Update language buttons function
function updateLanguageButtons(lang) {
    // Add language selector logic if needed
    if (lang === 'en') {
        // console.log('Language set to English for quote page');
        // You can add language selector update logic here
    }
}

// Exposition pour app.js
window.applyQuoteTranslations = translateToEnglishQuote;