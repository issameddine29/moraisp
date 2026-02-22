// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nl-translation-afterworks.js - Dutch manual translation for "Nettoyage Après Travaux"

function translateToDutchAfterWorks() {
    // console.log('Vertalen naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Schoonmaak Na Werkzaamheden <span class="urgent-badge"><i class="fas fa-exclamation-triangle"></i> Spoedgevallen geaccepteerd</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Volledige herinrichting van uw panden na bouw. Verwijdering van stof, bouwresten en voorbereiding voor bewoning in Brussel en omgeving';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis urgent') || btn.textContent.includes('Urgent quote') || btn.textContent.includes('Devis après-travaux')) {
            btn.innerHTML = '<i class="fas fa-broom"></i> Dringende offerte';
        }
        if (btn.textContent.includes('Appeler maintenant') || btn.textContent.includes('Call now')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Nu bellen';
        }
        if (btn.textContent.includes('Planifier une visite') || btn.textContent.includes('Schedule a visit')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Bezoek plannen';
        }
        if (btn.textContent.includes('Urgence chantier') || btn.textContent.includes('Construction emergency')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Bouwplaats spoedgeval';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.travaux-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Interventie binnen 24-48u';
        features[1].textContent = 'Industrieel materieel';
        features[2].textContent = 'Ecologische afvoer';
        features[3].textContent = 'Afrondingschecklist';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Industriële reiniging voor uw bouwplaatsen';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Na bouw-, renovatie- of inrichtingswerken zijn panden vaak bedekt met stof, resten en afval. Onze gespecialiseerde schoonmaakdienst na werkzaamheden garandeert een volledig en veilig herstel.';
        descParagraphs[1].textContent = 'We interveniëren op alle soorten plaatsen: appartementen, huizen, kantoren, commerciële en industriële ruimtes. Ons team gebruikt professionele uitrusting (industriële stofzuigers, stoommachines, hogedrukreinigers) voor een onberispelijk resultaat.';
    }

    const dangerItem = document.querySelector('.danger-item');
    if (dangerItem) {
        const dangerTitle = dangerItem.querySelector('h3');
        if (dangerTitle) {
            dangerTitle.innerHTML = '<i class="fas fa-exclamation-circle"></i> Waarschuwing voor fijn stof';
        }
        const dangerText = dangerItem.querySelector('p');
        if (dangerText) {
            dangerText.textContent = 'Gips-, cement- en betonstof is schadelijk voor de gezondheid. Onze HEPA-filterapparatuur garandeert de volledige verwijdering ervan.';
        }
    }

    // 3. TYPES OF WORK SECTION
    const travauxTitle = document.querySelector('.section-title');
    if (travauxTitle && (travauxTitle.textContent.includes('Pour quels types') || travauxTitle.textContent.includes('For which types'))) {
        travauxTitle.textContent = 'Voor welke soorten werkzaamheden?';
    }

    // Client cards (travaux types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 3) {
    // Card 1: Construction
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Nieuwe bouw';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Bouwplaatsen & levering';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Reiniging van beton-, gips- en cementstof na de bouw. Voorbereiding voor levering.';
    }

    // Card 2: Painting
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Schilder- & Afwerkingswerken';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Schilders & decorateurs';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Reiniging van verfspatten, lijmsporen, schuurresten. Perfecte afwerking.';
    }

    // Card 3: Sanitary
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Sanitaire werken';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Badkamers & keukens';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Reiniging na installatie van badkamers, keukens. Ontvetten van voegen, verwijderen van resten.';
    }
}

// 4. PROCEDURE SECTION
const procedureTitle = document.querySelectorAll('.section-title')[1];
if (procedureTitle && (procedureTitle.textContent.includes('Notre procédure') || procedureTitle.textContent.includes('Our complete'))) {
    procedureTitle.textContent = 'Onze volledige procedure';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Plaatsbeoordeling';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Analyse van resttypes, te behandelen oppervlak, toegang. Bepaling van benodigde apparatuur.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Afvalverwijdering';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Inzameling en sortering van bouwafval. Afvoer naar erkende centra met certificaten.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Volledige stofzuiging';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'HEPA-stofzuigen van fijn stof op alle oppervlakken: muren, plafonds, vloeren, kanalen.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Oppervlaktereiniging';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Verwijdering van gips-, cement-, verfsporen. Reiniging van ramen, houtwerk, tegels.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Sanitair & Keuken';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Grondige reiniging van sanitair, gootstenen, kranen. Ontvetten van voegen en oppervlakken.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Eindcontrole';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Punt-voor-punt verificatie. Laatste aanpassingen. Overdracht van kant-en-klare ruimtes.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && (equipmentTitle.textContent.includes('Équipement professionnel') || equipmentTitle.textContent.includes('Professional equipment'))) {
    equipmentTitle.textContent = 'Professionele uitrusting';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'HEPA industriële stofzuigers';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = '99,97% filtratie van fijne deeltjes. Essentieel voor gips- en cementstof.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'Hogedrukreinigers';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Voor betonnen vloeren, terrassen, gevels. Verwijdering van hardnekkige bouwresten.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Stoomgeneratoren';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Milieuvriendelijke reiniging zonder chemicaliën. Ideaal voor delicate oppervlakken en sanitair.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Luchtafzuigers';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Vernieuwing van de omgevingslucht. Eliminatie van verf-, lijm- en chemische geuren.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && (faqTitle.textContent.includes('Questions fréquentes') || faqTitle.textContent.includes('Frequently asked'))) {
    faqTitle.textContent = 'Veelgestelde vragen';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Hoe snel na de werken kunt u tussenkomen?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'We kunnen tussenkomen zodra de werken voltooid zijn en elektrische/waterleidinginstallaties beveiligd zijn. Voor spoedgevallen treden we binnen 24 uur op. Bij voorkeur plant u onze interventie vóór de plaatsing van delicate afwerkingen (parket, tapijt).';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Wat doet u met bouwafval?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'We voeren selectieve sortering uit (gips, hout, metaal, inert afval) en voeren af naar erkende recyclagecentra. We verstrekken verwijderingscertificaten conform de Brusselse wetgeving.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Is gipsstof gevaarlijk?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Ja, gips- en cementstof is irriterend voor de luchtwegen. Onze HEPA-apparatuur vangt 99,97% op. Ons personeel draagt beschermingsmiddelen (maskers, veiligheidsbrillen).';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Kunt u kanalen en leidingen reinigen?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Ja, we hebben specifieke apparatuur voor het reinigen van ventilatiekanalen, elektrische leidingen en blootliggende leidingen. Deze dienst is cruciaal om herverspreiding van stof te voorkomen.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Rekent u BTW aan?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Ja, al onze facturen bevatten BTW tegen het toepasselijke tarief. Voor btw-plichtige ondernemingen is de btw terugvorderbaar. We maken gedetailleerde facturen op met volledige wettelijke vermeldingen.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Biedt u een "klaar om te bewonen" pakket aan?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Ja, ons "klaar om te bewonen" pakket omvat: volledige verwijdering, HEPA-stofzuiging, oppervlaktereiniging, sanitair, keuken, kwaliteitscontrole en laatste lichte schoonmaak. Het is de alles-in-één oplossing.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Bouwplaats klaar? We komen tussen!';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Laat bouwresten uw project niet in gevaar brengen. Ons gespecialiseerd team garandeert een volledig en veilig herstel van uw panden.';

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Interventies 7/7 voor bouwprofessionals';
}

// Update language buttons
updateLanguageButtons('nl');

// console.log('Vertaling naar Nederlands voltooid!');
}

function loadDutchTranslation() {
    translateToDutchAfterWorks();
}

// Add to English file's switchToDutch function
function updateDutchFunction() {
    // This function would be in the English file
    // Replace: function switchToDutch() { console.log('Switching to Dutch...'); }
// With: function switchToDutch() { translateToDutchAfterWorks(); }
}
// Exposition pour app.js
window.applyTranslations = translateToDutchAfterWorks;
