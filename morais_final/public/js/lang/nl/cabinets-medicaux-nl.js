// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nl-translation-clinics.js - Dutch manual translation for "Petites Cliniques"

function translateToDutchClinics() {
    // console.log('Vertalen klinieken pagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Reiniging Kleine Klinieken & Medische Praktijken <span class="clinic-badge"><i class="fas fa-shield-alt"></i> Medische hygiëne</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Gespecialiseerde reinigings- en desinfectiedienst voor kleine klinieken, medische centra en groepspraktijken in Brussel. Ziekenhuisprotocollen aangepast aan middelgrote structuren.';
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(btn => {
        if (btn.textContent.includes('Devis clinique') || btn.textContent.includes('Clinic quote')) {
            btn.innerHTML = '<i class="fas fa-clipboard-check"></i> Kliniek offerte';
        }
        if (btn.textContent.includes('Contact rapide') || btn.textContent.includes('Quick contact')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Snel contact';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.clinic-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Gespecialiseerd klinieken';
        features[1].textContent = 'Aangepaste uren';
        features[2].textContent = 'Sanitaire normen';
        features[3].textContent = 'Getraind team';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Medische reiniging voor middelgrote structuren';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Kleine klinieken en groepspraktijken hebben specifieke hygiënische behoeften: verschillende consultatieruimtes, gemeenschappelijke ruimtes, sterilisatiezones en een grotere patiëntenstroom. Onze dienst is speciaal ontworpen voor deze structuren.';
        descParagraphs[1].textContent = 'We passen onze protocollen aan aan de grootte van uw kliniek, waarbij we kritieke zones respecteren (operatiekamer, verbandkamers, laboratorium) en tegelijkertijd de kosten optimaliseren voor middelgrote structuren.';
    }

    const hygieneItem = document.querySelector('.hygiene-item');
    if (hygieneItem) {
        const hygieneTitle = hygieneItem.querySelector('h3');
        if (hygieneTitle) {
            hygieneTitle.innerHTML = '<i class="fas fa-exclamation-circle"></i> Gecontroleerde risicozones';
        }
        const hygieneText = hygieneItem.querySelector('p');
        if (hygieneText) {
            hygieneText.textContent = 'We identificeren en behandelen bijzonder zones met hoog infectierisico: operatiekamers, sterilisatie-eenheden, analyselaboratoria.';
        }
    }

    // 3. TYPES OF CLINICS SECTION
    const clinicsTitle = document.querySelector('.section-title');
    if (clinicsTitle && (clinicsTitle.textContent.includes('Pour quelles structures') || clinicsTitle.textContent.includes('For which medical'))) {
        clinicsTitle.textContent = 'Voor welke medische structuren?';
    }

    // Client cards (clinics types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 3) {
    // Card 1: Fysiotherapiecentra
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Fysiotherapiecentra';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = '3-10 zalen';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Reiniging van revalidatiezalen, revalidatiezwembad, therapeutische apparatuur, gemeenschappelijke ruimtes.';
    }

    // Card 2: Medische huizen
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Medische huizen';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Huisartsen';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Onderhoud van gemeenschappelijke wachtzalen, administratieve kantoren, meerdere praktijken, gedeelde sanitaire voorzieningen.';
    }

    // Card 3: Tandheelkundige centra
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Tandheelkundige centra';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Meerdere tandartsen';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Desinfectie van meerdere tandheelkundige units, centrale sterilisatieruimte, protheselaboratorium.';
    }
}

// 4. CLEANING PROTOCOL SECTION
const protocolTitle = document.querySelectorAll('.section-title')[1];
if (protocolTitle && (protocolTitle.textContent.includes('Notre protocole') || protocolTitle.textContent.includes('Our protocol'))) {
    protocolTitle.textContent = 'Ons protocol voor klinieken';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Initiële audit';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Analyse van patiëntenstromen, identificatie van kritieke zones, gepersonaliseerd reinigingsplan voor uw structuur.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Desinfectie medische zones';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Volledige behandeling van consultatieruimtes, apparatuur, werkoppervlakken en contactpunten.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Gemeenschappelijke ruimtes';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Grondige reiniging van wachtzaal, receptie, gangen, sanitaire voorzieningen voor patiënten en personeel.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Technische zones';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Onderhoud van sterilisatieruimtes, laboratoria, interne apotheken, technische lokalen.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Administratieve kantoren';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Reiniging van secretariaten, archieven, vergaderzalen, ontspanningsruimtes personeel.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Controle & Documentatie';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Systematische verificatie, opvolgingsfiche, desinfectiecertificaat, interventierapport.';
}

// 5. SPECIFIC ADVANTAGES SECTION
const advantagesTitle = document.querySelectorAll('.section-title')[2];
if (advantagesTitle && (advantagesTitle.textContent.includes('Pourquoi choisir') || advantagesTitle.textContent.includes('Why choose'))) {
    advantagesTitle.textContent = 'Waarom kiezen voor onze dienst voor klinieken?';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Advantage 1
    const adv1Title = methodSteps[0].querySelector('h3');
    if (adv1Title) adv1Title.textContent = 'Aangepaste tarieven';
    const adv1Desc = methodSteps[0].querySelector('p');
    if (adv1Desc) adv1Desc.textContent = 'Economische pakketten voor middelgrote structuren, geen extra kosten voor kleine klinieken.';

    // Advantage 2
    const adv2Title = methodSteps[1].querySelector('h3');
    if (adv2Title) adv2Title.textContent = 'Urenflexibiliteit';
    const adv2Desc = methodSteps[1].querySelector('p');
    if (adv2Desc) adv2Desc.textContent = 'Interventies \'s avonds, weekends, of volgens uw openingsuren voor het publiek.';

    // Advantage 3
    const adv3Title = methodSteps[2].querySelector('h3');
    if (adv3Title) adv3Title.textContent = 'Getraind personeel';
    const adv3Desc = methodSteps[2].querySelector('p');
    if (adv3Desc) adv3Desc.textContent = 'Team gespecialiseerd in ziekenhuishygiëne, kennis van de specificiteiten van klinieken.';

    // Advantage 4
    const adv4Title = methodSteps[3].querySelector('h3');
    if (adv4Title) adv4Title.textContent = 'Contract op maat';
    const adv4Desc = methodSteps[3].querySelector('p');
    if (adv4Desc) adv4Desc.textContent = 'Flexibele verbintenis (dagelijks, wekelijks, maandelijks) aangepast aan uw medische activiteit.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && (faqTitle.textContent.includes('Questions fréquentes') || faqTitle.textContent.includes('Frequently asked'))) {
    faqTitle.textContent = 'Veelgestelde vragen - Klinieken';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Welk verschil met reiniging van grote ziekenhuizen?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'We passen ziekenhuisprotocollen aan aan middelgrote structuren. Minder bureaucratie, meer flexibiliteit, aangepaste tarieven en een directere relatie met de kliniekmanager.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Kunt u meerdere medische sites beheren?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Ja, we interveniëren op meerdere sites van dezelfde organisatie (satellietklinieken, secundaire praktijken) met gecentraliseerde coördinatie en gegroepeerde tarieven.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Hoe behandelt u medisch afval van klinieken?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'We implementeren een conform DASRI-sorteersysteem, met inzameling door erkende leverancier, volledige traceerbaarheid en training van uw personeel in goede praktijken.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Biedt u gratis hygiëne-audits aan?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Ja, we voeren een initiële gratis audit van uw lokalen uit, met aanbevelingen om uw reinigingsprocedures te optimaliseren en infectierisico\'s te verminderen.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Welke opleiding voor uw medisch personeel?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Onze agenten volgen een specifieke "Hygiëne in medisch-sociale omgeving" opleiding, met jaarlijkse bijscholing, en zijn bewust van courante infectieziekten.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Heeft u medische referenties in Brussel?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Ja, we reinigen verschillende medische huizen, fysiotherapiecentra en tandheelkundige klinieken in Brussel. Referenties beschikbaar op aanvraag met akkoord van de klant.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Een schone kliniek = vertrouwende patiënten';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Hygiëne is het eerste wat uw patiënten opmerken. Vertrouw de reiniging van uw kliniek toe aan professionals die zijn opgeleid in medische sanitaire vereisten.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis clinique médicale') || btn.textContent.includes('Medical clinic quote')) {
            btn.innerHTML = '<i class="fas fa-hospital"></i> Medische kliniek offerte';
        }
        if (btn.textContent.includes('Audit gratuit') || btn.textContent.includes('Free audit')) {
            btn.innerHTML = '<i class="fas fa-calendar-check"></i> Gratis audit';
        }
        if (btn.textContent.includes('Urgence sanitaire') || btn.textContent.includes('Sanitary emergency')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Sanitaire spoed';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Eerste gratis audit - Geen verbintenis';
}

// 8. UPDATE NOTIFICATIONS
updateDutchNotifications();

// console.log('Vertaling naar Nederlands voltooid!');

// Update language switcher
updateLanguageButtons('nl');
}

function updateDutchNotifications() {
    // Update notification texts
    const clinicBtns = document.querySelectorAll('[onclick*="cliniques"]');
    clinicBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            localStorage.setItem('medicalService', 'kliniek');
            showNotification('Aanvraag voor medische kliniek geregistreerd.', 'success');
        });
    });
}
// Exposition pour app.js
window.applyTranslations = translateToDutchClinics;
