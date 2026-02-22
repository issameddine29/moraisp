// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// devis-gratuit-nl.js - Traduction néerlandaise voor "Devis Gratuit"

function translateToDutchQuote() {
    // console.log('Vertalen van offertepagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.textContent = 'Krijg Uw Persoonlijke Offerte';
    }

    const heroBadge = document.querySelector('.hero-badge span');
    if (heroBadge) {
        heroBadge.textContent = 'GRATIS OFFERTE ZONDER VERBINTENIS';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Vraag uw gratis schatting aan voor alle professionele reinigingsdiensten in Brussel. Transparant, snel en aangepast aan uw specifieke behoeften.';
    }

    // Hero features
    const heroFeatures = document.querySelectorAll('.hero-feature span');
    if (heroFeatures.length >= 4) {
        heroFeatures[0].textContent = 'Antwoord binnen 24u maximum';
        heroFeatures[1].textContent = 'Gratis offerte zonder verbintenis';
        heroFeatures[2].textContent = 'Transparante prijzen, geen verrassingen';
        heroFeatures[3].textContent = 'Snel starten mogelijk';
    }

    // Hero button
    const heroButton = document.querySelector('.quote-hero .btn-accent');
    if (heroButton) {
        heroButton.innerHTML = '<i class="fas fa-calculator"></i> Start de schatting';
    }

    // 2. CALCULATOR SECTION
    const calculatorTitle = document.querySelector('#calculator-title');
    if (calculatorTitle) {
        calculatorTitle.textContent = 'Online Schatting';
    }

    const calculatorSubtitle = document.querySelector('.quote-calculator .section-subtitle');
    if (calculatorSubtitle) {
        calculatorSubtitle.textContent = 'Beantwoord enkele vragen om een gepersonaliseerde schatting te krijgen';
    }

    // Steps labels
    const steps = document.querySelectorAll('.calculator-step .step-label');
    if (steps.length >= 4) {
        steps[0].textContent = 'Type Dienst';
        steps[1].textContent = 'Details & Opties';
        steps[2].textContent = 'Frequentie';
        steps[3].textContent = 'Uw Contactgegevens';
    }

    // Step 1: Service Type
    const step1Title = document.querySelector('#step-1 h3');
    if (step1Title) {
        step1Title.textContent = 'Welk type reiniging zoekt u?';
    }

    const serviceOptions = document.querySelectorAll('.service-option');
    if (serviceOptions.length >= 4) {
        // Option 1
        const option1Title = serviceOptions[0].querySelector('h4');
        if (option1Title) option1Title.textContent = 'Kantoren & Commerciële Lokalen';
        const option1Desc = serviceOptions[0].querySelector('p');
        if (option1Desc) option1Desc.textContent = 'Regelmatige of eenmalige reiniging voor bedrijven en winkels';

        // Option 2
        const option2Title = serviceOptions[1].querySelector('h4');
        if (option2Title) option2Title.textContent = 'Residentieel & Mede-eigendommen';
        const option2Desc = serviceOptions[1].querySelector('p');
        if (option2Desc) option2Desc.textContent = 'Appartementen, huizen, gemeenschappelijke ruimtes van gebouwen';

        // Option 3
        const option3Title = serviceOptions[2].querySelector('h4');
        if (option3Title) option3Title.textContent = 'Gespecialiseerde Reiniging';
        const option3Desc = serviceOptions[2].querySelector('p');
        if (option3Desc) option3Desc.textContent = 'Tapijten, karpetten, ramen, zetels, einde huurcontract';

        // Option 4
        const option4Title = serviceOptions[3].querySelector('h4');
        if (option4Title) option4Title.textContent = 'Industrieel & Na Bouwwerken';
        const option4Desc = serviceOptions[3].querySelector('p');
        if (option4Desc) option4Desc.textContent = 'Bouwplaatsen, industriële lokalen, dieptereiniging';
    }

    // Step 1 buttons
    const nextButton1 = document.querySelector('#step-1 .next-step');
    if (nextButton1) {
        nextButton1.innerHTML = 'Volgende <i class="fas fa-arrow-right"></i>';
    }

    // Step 2: Details & Options
    const step2Title = document.querySelector('#step-2 h3');
    if (step2Title) {
        step2Title.textContent = 'Meer details over uw behoeften';
    }

    // Surface area
    const surfaceLabel = document.querySelector('label[for="surface-area"]');
    if (surfaceLabel) {
        surfaceLabel.innerHTML = 'Te reinigen oppervlakte (m²) <span class="required">*</span>';
    }

    const sliderLabels = document.querySelectorAll('.slider-header span');
    if (sliderLabels.length >= 3) {
        sliderLabels[0].textContent = 'Kleine oppervlakte';
        sliderLabels[2].textContent = 'Grote oppervlakte';
    }

    // Specific services
    const servicesLabel = document.querySelectorAll('.form-label')[1];
    if (servicesLabel) {
        servicesLabel.textContent = 'Specifieke diensten nodig';
    }

    const checkboxes = document.querySelectorAll('.checkbox-option');
    if (checkboxes.length >= 6) {
        // Checkbox 1
        const cb1Label = checkboxes[0].querySelector('label');
        if (cb1Label) cb1Label.textContent = 'Reiniging tapijten/karpetten';

        // Checkbox 2
        const cb2Label = checkboxes[1].querySelector('label');
        if (cb2Label) cb2Label.textContent = 'Reiniging ramen';

        // Checkbox 3
        const cb3Label = checkboxes[2].querySelector('label');
        if (cb3Label) cb3Label.textContent = 'Sanitair & keukens';

        // Checkbox 4
        const cb4Label = checkboxes[3].querySelector('label');
        if (cb4Label) cb4Label.textContent = 'Behandeling vloeren';

        // Checkbox 5
        const cb5Label = checkboxes[4].querySelector('label');
        if (cb5Label) cb5Label.textContent = 'Speciale desinfectie';

        // Checkbox 6
        const cb6Label = checkboxes[5].querySelector('label');
        if (cb6Label) cb6Label.textContent = 'Levering producten inbegrepen';
    }

    // Special notes
    const notesLabel = document.querySelectorAll('.form-label')[2];
    if (notesLabel) {
        notesLabel.textContent = 'Opmerkingen of speciale vereisten';
    }

    const textarea = document.querySelector('#special-notes');
    if (textarea) {
        textarea.placeholder = 'Specificeer alle specifieke vereisten, speciale uren, of andere belangrijke informatie...';
    }

    // Step 2 buttons
    const prevButton2 = document.querySelector('#step-2 .prev-step');
    if (prevButton2) {
        prevButton2.innerHTML = '<i class="fas fa-arrow-left"></i> Vorige';
    }

    const nextButton2 = document.querySelector('#step-2 .next-step');
    if (nextButton2) {
        nextButton2.innerHTML = 'Volgende <i class="fas fa-arrow-right"></i>';
    }

    // Step 3: Frequency
    const step3Title = document.querySelector('#step-3 h3');
    if (step3Title) {
        step3Title.textContent = 'Frequentie van de dienst';
    }

    const frequencyOptions = document.querySelectorAll('#step-3 .service-option');
    if (frequencyOptions.length >= 4) {
        // Option 1
        const freq1Title = frequencyOptions[0].querySelector('h4');
        if (freq1Title) freq1Title.textContent = 'Eenmalig / Uniek';
        const freq1Desc = frequencyOptions[0].querySelector('p');
        if (freq1Desc) freq1Desc.textContent = 'Eenmalige of occasionele reiniging';
        const freq1Small = frequencyOptions[0].querySelector('small');
        if (freq1Small) freq1Small.textContent = 'Ideaal voor einde huur, na bouwwerken, of speciale gelegenheid';

        // Option 2
        const freq2Title = frequencyOptions[1].querySelector('h4');
        if (freq2Title) freq2Title.textContent = 'Wekelijks';
        const freq2Desc = frequencyOptions[1].querySelector('p');
        if (freq2Desc) freq2Desc.textContent = 'Regelmatige reiniging elke week';
        const freq2Small = frequencyOptions[1].querySelector('small');
        if (freq2Small) freq2Small.textContent = 'Voor kantoren, winkels of regelmatige woningen';

        // Option 3
        const freq3Title = frequencyOptions[2].querySelector('h4');
        if (freq3Title) freq3Title.textContent = 'Maandelijks';
        const freq3Desc = frequencyOptions[2].querySelector('p');
        if (freq3Desc) freq3Desc.textContent = 'Maandelijks of tweemaandelijks onderhoud';
        const freq3Small = frequencyOptions[2].querySelector('small');
        if (freq3Small) freq3Small.textContent = 'Voor routineonderhoud van ruimtes';

        // Option 4
        const freq4Title = frequencyOptions[3].querySelector('h4');
        if (freq4Title) freq4Title.textContent = 'Dagelijks';
        const freq4Desc = frequencyOptions[3].querySelector('p');
        if (freq4Desc) freq4Desc.textContent = 'Volledige dagelijkse dienst';
        const freq4Small = frequencyOptions[3].querySelector('small');
        if (freq4Small) freq4Small.textContent = 'Voor bedrijven met intensieve behoeften';
    }

    // Step 3 buttons
    const prevButton3 = document.querySelector('#step-3 .prev-step');
    if (prevButton3) {
        prevButton3.innerHTML = '<i class="fas fa-arrow-left"></i> Vorige';
    }

    const nextButton3 = document.querySelector('#step-3 .next-step');
    if (nextButton3) {
        nextButton3.innerHTML = 'Volgende <i class="fas fa-arrow-right"></i>';
    }

    // Step 4: Contact Information
    const step4Title = document.querySelector('#step-4 h3');
    if (step4Title) {
        step4Title.textContent = 'Uw contactgegevens';
    }

    // Estimation result
    const estimationTitle = document.querySelector('.estimation-title');
    if (estimationTitle) {
        estimationTitle.textContent = 'Indicatieve schatting';
    }

    const estimationNote = document.querySelector('.estimation-note');
    if (estimationNote) {
        estimationNote.textContent = '* Deze prijs is een schatting op basis van uw antwoorden. Een precieze offerte wordt u toegestuurd na analyse van uw aanvraag.';
    }

    // Form labels
    const nameLabel = document.querySelector('label[for="quote-name"]');
    if (nameLabel) {
        nameLabel.innerHTML = 'Volledige naam <span class="required">*</span>';
    }
    document.getElementById('quote-name').placeholder = 'Uw naam en voornaam';

    const companyLabel = document.querySelector('label[for="quote-company"]');
    if (companyLabel) {
        companyLabel.textContent = 'Bedrijf (indien van toepassing)';
    }
    document.getElementById('quote-company').placeholder = 'Naam van uw bedrijf';

    const emailLabel = document.querySelector('label[for="quote-email"]');
    if (emailLabel) {
        emailLabel.innerHTML = 'E-mail <span class="required">*</span>';
    }
    document.getElementById('quote-email').placeholder = 'uw@email.com';

    const phoneLabel = document.querySelector('label[for="quote-phone"]');
    if (phoneLabel) {
        phoneLabel.innerHTML = 'Telefoon <span class="required">*</span>';
    }
    document.getElementById('quote-phone').placeholder = '+32 XXX XX XX XX';

    const addressLabel = document.querySelector('label[for="quote-address"]');
    if (addressLabel) {
        addressLabel.innerHTML = 'Adres van de werf <span class="required">*</span>';
    }
    document.getElementById('quote-address').placeholder = 'Volledig adres in Brussel';

    const messageLabel = document.querySelector('label[for="quote-message"]');
    if (messageLabel) {
        messageLabel.textContent = 'Aanvullend bericht';
    }
    document.getElementById('quote-message').placeholder = 'Specificeer alle aanvullende informatie nuttig voor uw offerte...';

    // Privacy checkbox
    const privacyCheckbox = document.querySelector('#quote-privacy + label');
    if (privacyCheckbox) {
        privacyCheckbox.innerHTML = 'Ik accepteer het <a href="../privacy.html" target="_blank">privacybeleid</a> en autoriseer de verwerking van mijn persoonlijke gegevens <span class="required">*</span>';
    }

    // Newsletter checkbox
    const newsletterCheckbox = document.querySelector('#quote-newsletter + label');
    if (newsletterCheckbox) {
        newsletterCheckbox.textContent = 'Ik wens aanbiedingen en nieuws van Morais Cleaning te ontvangen';
    }

    // Step 4 buttons
    const prevButton4 = document.querySelector('#step-4 .prev-step');
    if (prevButton4) {
        prevButton4.innerHTML = '<i class="fas fa-arrow-left"></i> Vorige';
    }

    const submitButton = document.querySelector('#submitQuoteBtn');
    if (submitButton) {
        submitButton.innerHTML = '<i class="fas fa-paper-plane"></i> Mijn aanvraag versturen';
    }

    // 3. CONTACT INFO SECTION
    const contactTitle = document.querySelector('#contact-title');
    if (contactTitle) {
        contactTitle.textContent = 'Contacteer Ons Direct';
    }

    const contactSubtitle = document.querySelector('.contact-info-section .section-subtitle');
    if (contactSubtitle) {
        contactSubtitle.textContent = 'Verschillende manieren om ons te bereiken voor uw offerteaanvragen';
    }

    const contactCards = document.querySelectorAll('.contact-card');
    if (contactCards.length >= 3) {
        // Card 1: Phone
        const card1Title = contactCards[0].querySelector('h3');
        if (card1Title) card1Title.textContent = 'Telefoon';
        const card1Desc = contactCards[0].querySelector('p');
        if (card1Desc) card1Desc.textContent = 'Bel ons voor een snelle offerte';
        const card1Schedule = contactCards[0].querySelectorAll('p')[1];
        if (card1Schedule) {
            card1Schedule.innerHTML = '<i class="fas fa-clock"></i> Ma-Vr: 8u-18u<br><i class="fas fa-clock"></i> Za: 9u-13u';
        }

        // Card 2: Email
        const card2Title = contactCards[1].querySelector('h3');
        if (card2Title) card2Title.textContent = 'E-mail';
        const card2Desc = contactCards[1].querySelector('p');
        if (card2Desc) card2Desc.textContent = 'Stuur ons uw gegevens per e-mail';
        const card2Info = contactCards[1].querySelectorAll('p')[1];
        if (card2Info) card2Info.textContent = 'Antwoord gegarandeerd binnen 24u';

        // Card 3: Zone
        const card3Title = contactCards[2].querySelector('h3');
        if (card3Title) card3Title.textContent = 'Interventiezone';
        const card3Desc = contactCards[2].querySelector('p');
        if (card3Desc) card3Desc.textContent = 'Wij bedekken de hele regio Brussel';
        const card3List = contactCards[2].querySelectorAll('p')[1];
        if (card3List) {
            card3List.innerHTML = 'Brussel-Stad en gemeenten<br>Woluwe-Saint-Lambert<br>Elsene, Etterbeek<br>Anderlecht, Molenbeek<br>En alle omliggende gemeenten';
        }
    }

    // 4. FAQ SECTION
    const faqTitle = document.querySelector('#faq-title');
    if (faqTitle) {
        faqTitle.textContent = 'Vragen over onze Offertes';
    }

    const faqSubtitle = document.querySelector('.faq-section .section-subtitle');
    if (faqSubtitle) {
        faqSubtitle.textContent = 'Alles wat u moet weten over onze prijzen en proces';
    }

    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length >= 5) {
        // FAQ 1
        const faq1Btn = faqItems[0].querySelector('.faq-question');
        if (faq1Btn) faq1Btn.textContent = 'Hoe worden uw prijzen berekend?';
        const faq1Answer = faqItems[0].querySelector('.faq-answer p');
        if (faq1Answer) {
            faq1Answer.textContent = 'Onze prijzen worden berekend op basis van verschillende criteria: te reinigen oppervlakte, type dienst, frequentie, technische specificiteiten en noodzakelijke uitrusting. We bieden altijd een optimale prijs-kwaliteitverhouding met totale transparantie over de kosten.';
        }

        // FAQ 2
        const faq2Btn = faqItems[1].querySelector('.faq-question');
        if (faq2Btn) faq2Btn.textContent = 'Is de offerte echt gratis en zonder verbintenis?';
        const faq2Answer = faqItems[1].querySelector('.faq-answer p');
        if (faq2Answer) {
            faq2Answer.textContent = 'Absoluut. Onze online schatting en de gedetailleerde offerte die we u daarna sturen zijn volledig gratis. U heeft geen enkele verplichting tot bestelling na ontvangst van de offerte.';
        }

        // FAQ 3
        const faq3Btn = faqItems[2].querySelector('.faq-question');
        if (faq3Btn) faq3Btn.textContent = 'Hoe snel ontvang ik mijn offerte?';
        const faq3Answer = faqItems[2].querySelector('.faq-answer p');
        if (faq3Answer) {
            faq3Answer.textContent = 'De online schatting is onmiddellijk. Voor een gedetailleerde gepersonaliseerde offerte engageren we ons om u binnen 24 werkuren maximum te antwoorden, vaak veel sneller.';
        }

        // FAQ 4
        const faq4Btn = faqItems[3].querySelector('.faq-question');
        if (faq4Btn) faq4Btn.textContent = 'Bieden jullie maandelijkse pakketten aan?';
        const faq4Answer = faqItems[3].querySelector('.faq-answer p');
        if (faq4Answer) {
            faq4Answer.textContent = 'Ja, wij bieden maandelijkse, driemaandelijkse en jaarlijkse pakketten aan met voorkoestarief voor langetermijncontracten. Deze pakketten omvatten vaak gratis bijkomende diensten.';
        }

        // FAQ 5 (previously hidden)
        const faq5Btn = faqItems[4].querySelector('.faq-question');
        if (faq5Btn) faq5Btn.textContent = 'Welke betaalmiddelen aanvaarden jullie?';
        const faq5Answer = faqItems[4].querySelector('.faq-answer p');
        if (faq5Answer) {
            faq5Answer.textContent = 'Wij aanvaarden overschrijvingen, krediet-/debetkaarten, PayPal en voor bedrijven kunnen we facturen met vervaltermijnen opstellen. Alle prijzen zijn inclusief BTW.';
        }
        
        // Make FAQ 5 visible
        faqItems[4].querySelector('.faq-answer').removeAttribute('hidden');
    }

    // 5. FINAL CTA SECTION
    const ctaTitle = document.querySelector('#cta-title');
    if (ctaTitle) {
        ctaTitle.textContent = 'Heeft u een Dringende Offerte Nodig?';
    }

    const ctaText = document.querySelector('.final-cta p');
    if (ctaText) {
        ctaText.textContent = 'Contacteer ons direct per telefoon voor een onmiddellijke schatting en een snelle start van uw reinigingswerken.';
    }

    // CTA buttons
    const ctaButtons = document.querySelectorAll('.final-cta .btn');
    if (ctaButtons.length >= 2) {
        ctaButtons[0].innerHTML = '<i class="fas fa-phone"></i> Nu bellen: 0478/95.12.69';
        ctaButtons[1].innerHTML = '<i class="fas fa-calculator"></i> Herstart de schatting';
    }

    // Features list
    const featureList = document.querySelectorAll('.final-cta span');
    if (featureList.length >= 4) {
        featureList[0].textContent = 'Gratis offerte';
        featureList[1].textContent = 'Antwoord binnen 24u';
        featureList[2].textContent = 'Zonder verbintenis';
        featureList[3].textContent = 'Transparante prijzen';
    }

    // Update meta tags
    updateMetaTagsDutch();

    // console.log('Offertepagina vertaling naar Nederlands voltooid!');
}

function updateMetaTagsDutch() {
    // Update page title
    document.title = 'Gratis Offerte - Morais Cleaning - Reiniging Brussel';

    // Update meta description
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
        metaDescription.content = 'Vraag uw gratis offerte aan voor alle reinigingsdiensten in Brussel: kantoren, commerciële lokalen, residentieel, tapijten, ramen, einde huurcontract. Snel antwoord binnen 24u.';
    }

    // Update meta keywords
    const metaKeywords = document.querySelector('meta[name="keywords"]');
    if (metaKeywords) {
        metaKeywords.content = 'offerte reiniging Brussel, gratis offerte reiniging, prijzen professionele reiniging, schatting kantoorreiniging, prijs tapijtreiniging, offerte raamreiniging, tarief einde huur';
    }

    // Update OG tags
    const ogTitle = document.querySelector('meta[property="og:title"]');
    if (ogTitle) {
        ogTitle.content = 'Gratis Reinigingsofferte - Morais Cleaning Brussel';
    }

    const ogDescription = document.querySelector('meta[property="og:description"]');
    if (ogDescription) {
        ogDescription.content = 'Krijg een gepersonaliseerde offerte voor uw professionele reinigingsbehoeften in Brussel. Snelle, transparante en zonder verbintenis dienst.';
    }

    // Update Twitter tags
    const twitterTitle = document.querySelector('meta[name="twitter:title"]');
    if (twitterTitle) {
        twitterTitle.content = 'Gratis Reinigingsofferte - Morais Cleaning';
    }
}

function loadDutchTranslationQuote() {
    translateToDutchQuote();
}

// Update language buttons function
function updateLanguageButtons(lang) {
    // Add language selector logic if needed
    if (lang === 'nl') {
        // console.log('Taal ingesteld op Nederlands voor offertepagina');
        // U kunt hier logica voor taalselector toevoegen
    }
}

// Exposition pour app.js
window.applyQuoteTranslationsNL = translateToDutchQuote;