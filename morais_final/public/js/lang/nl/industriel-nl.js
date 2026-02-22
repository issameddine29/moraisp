// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// industriel-nl.js - Dutch translation for industrial cleaning page

function translateToDutchIndustriel() {
    // console.log('Vertalen industriële pagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Industrieel Reinigen <span class="industriel-badge"><i class="fas fa-industry"></i> Fabrieken & Werkplaatsen</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Gespecialiseerde industriële reinigingsdienst voor fabrieken, magazijnen en werkplaatsen in Brussel. Mechanisch ontvetten, stofverwijdering, machine reiniging, naleving van HACCP en veiligheidsnormen.';
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(btn => {
        if (btn.textContent.includes('Devis industriel') || btn.textContent.includes('Industrial quote')) {
            btn.innerHTML = '<i class="fas fa-calculator"></i> Industriële offerte';
        }
        if (btn.textContent.includes('Expert industriel') || btn.textContent.includes('Industrial expert')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Industrieel expert';
        }
    });

    // Hero features
    const heroFeatures = document.querySelectorAll('.industriel-feature span');
    if (heroFeatures.length >= 4) {
        heroFeatures[0].textContent = 'Zwaar materieel';
        heroFeatures[1].textContent = 'Veiligheidsnormen';
        heroFeatures[2].textContent = 'Interventie 24/7';
        heroFeatures[3].textContent = 'Gekwalificeerd team';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Professionele industriële reiniging';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'In een industriële omgeving is reinheid essentieel voor veiligheid, productiviteit en regelgevende naleving. Onze gespecialiseerde dienst gebruikt industriële apparatuur aangepast aan de specifieke volumes en beperkingen van de sector.';
        descParagraphs[1].textContent = 'We treden op tijdens productiestops (nacht, weekend, technische stops) om de impact op uw activiteit te minimaliseren. Ons team is opgeleid in industriële veiligheidsprocedures en specifieke normen (HACCP, ATEX, etc.).';
    }

    const safetyItem = document.querySelector('.safety-item h3');
    if (safetyItem) {
        safetyItem.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Industriële veiligheid';
    }

    const safetyText = document.querySelector('.safety-item p');
    if (safetyText) {
        safetyText.textContent = 'Onze teams zijn gecertificeerd om in industriële omgevingen te werken: aangepaste PBM, vergrendelingsprocedures, specifieke risicotraining.';
    }

    // 3. INDUSTRIAL SECTORS
    const sectorsTitle = document.querySelector('.section-title');
    if (sectorsTitle && (sectorsTitle.textContent.includes('spécialités industrielles') || sectorsTitle.textContent.includes('industrial specialties'))) {
        sectorsTitle.textContent = 'Onze industriële specialiteiten';
    }

    const clientCards = document.querySelectorAll('.client-card');
    if (clientCards.length >= 4) {
        // Card 1
        const card1Title = clientCards[0].querySelector('h3');
        if (card1Title) card1Title.textContent = 'Manufactuurindustrie';
        const card1Tag = clientCards[0].querySelector('.client-tag');
        if (card1Tag) card1Tag.textContent = 'Productie';
        const card1Desc = clientCards[0].querySelector('p');
        if (card1Desc) card1Desc.textContent = 'Fabrieksreiniging, productielijnen, machinegereedschappen, assemblagewerkplaatsen, technische zones.';

        // Card 2
        const card2Title = clientCards[1].querySelector('h3');
        if (card2Title) card2Title.textContent = 'Magazijnen & Logistiek';
        const card2Tag = clientCards[1].querySelector('.client-tag');
        if (card2Tag) card2Tag.textContent = 'Opslag';
        const card2Desc = clientCards[1].querySelector('p');
        if (card2Desc) card2Desc.textContent = 'Magazijnreiniging, distributiecentra, laaddokken, stellingen, industriële vloeren.';

        // Card 3
        const card3Title = clientCards[2].querySelector('h3');
        if (card3Title) card3Title.textContent = 'Voedingsindustrie';
        const card3Tag = clientCards[2].querySelector('.client-tag');
        if (card3Tag) card3Tag.textContent = 'HACCP';
        const card3Desc = clientCards[2].querySelector('p');
        if (card3Desc) card3Desc.textContent = 'HACCP-conforme reiniging, desinfectie, clean rooms, voedselproductielijnen, laboratoria.';

        // Card 4
        const card4Title = clientCards[3].querySelector('h3');
        if (card4Title) card4Title.textContent = 'Mechanische werkplaatsen';
        const card4Tag = clientCards[3].querySelector('.client-tag');
        if (card4Tag) card4Tag.textContent = 'Mechanica';
        const card4Desc = clientCards[3].querySelector('p');
        if (card4Desc) card4Desc.textContent = 'Machine ontvetting, werkplaatsreiniging, olie- en vloeistofbehandeling, complete stofverwijdering.';
    }

    // 4. EQUIPMENT SECTION
    const equipmentTitle = document.querySelector('.equipment-section .section-title');
    if (equipmentTitle) {
        equipmentTitle.textContent = 'Onze industriële machinevloot';
    }

    const equipmentCards = document.querySelectorAll('.equipment-card h3');
    if (equipmentCards.length >= 4) {
        equipmentCards[0].textContent = 'Vloerreinigingsmachines';
        equipmentCards[1].textContent = 'Industriële stofzuigers';
        equipmentCards[2].textContent = 'Hogedrukreinigers';
        equipmentCards[3].textContent = 'Vegenmachines';
    }

    // Equipment descriptions
    const equipmentDescriptions = document.querySelectorAll('.equipment-card p');
    if (equipmentDescriptions.length >= 4) {
        equipmentDescriptions[0].textContent = 'Ride-on en walk-behind machines voor oppervlakken tot 10.000m². Wassen, zuigen, drogen in één keer.';
        equipmentDescriptions[1].textContent = 'Water/stof stofzuigers 100L, mobiel of gecentraliseerd, HEPA-filtratie, voor fijn stof en afval.';
        equipmentDescriptions[2].textContent = 'Hogedrukreinigers 200-500 bar, warm/koud water, detergent injectie, voor intensieve ontvetting.';
        equipmentDescriptions[3].textContent = 'Mechanische ride-on vegenmachines voor wegen en grote ruimtes. Verzameling van stof en volumineus afval.';
    }

    // 5. SAFETY SECTION
    const safetyTitle = document.querySelectorAll('.section-title')[1];
    if (safetyTitle && (safetyTitle.textContent.includes('Sécurité & Conformité') || safetyTitle.textContent.includes('Safety & Compliance'))) {
        safetyTitle.textContent = 'Veiligheid & Naleving';
    }

    const safetyCards = document.querySelectorAll('.safety-card h3');
    if (safetyCards.length >= 3) {
        safetyCards[0].textContent = 'Veiligheidstraining';
        safetyCards[1].textContent = 'Aangepaste verzekering';
        safetyCards[2].textContent = 'Volledige documentatie';
    }

    const safetyCardTexts = document.querySelectorAll('.safety-card p');
    if (safetyCardTexts.length >= 3) {
        safetyCardTexts[0].textContent = 'Al onze agenten zijn opgeleid in industriële veiligheidsprocedures, vergrendeling, werken op hoogte en specifieke risico\'s.';
        safetyCardTexts[1].textContent = 'Professionele aansprakelijkheidsverzekering van €5.000.000, dekking van schade aan industriële installaties.';
        safetyCardTexts[2].textContent = 'Technische productfiches, gevalideerde procedures, interventierapporten, traceerbaarheid van operaties.';
    }

    // 6. FREQUENCY SECTION
    const frequencyTitle = document.querySelectorAll('.section-title')[2];
    if (frequencyTitle && (frequencyTitle.textContent.includes('Planning d\'intervention') || frequencyTitle.textContent.includes('Industrial intervention'))) {
        frequencyTitle.textContent = 'Industrieel interventieplanning';
    }

    const frequencyIntro = document.querySelector('.frequency-section p');
    if (frequencyIntro) {
        frequencyIntro.textContent = 'We passen onze interventies aan aan uw productiecycli';
    }

    const frequencyOptions = document.querySelectorAll('.frequency-title');
    if (frequencyOptions.length >= 4) {
        frequencyOptions[0].textContent = 'Tijdens nachtstops';
        frequencyOptions[1].textContent = 'Weekend';
        frequencyOptions[2].textContent = 'Technische stops';
        frequencyOptions[3].textContent = 'Dringend occasioneel';
    }

    const frequencyDescriptions = document.querySelectorAll('.frequency-option p');
    if (frequencyDescriptions.length >= 4) {
        frequencyDescriptions[0].textContent = 'Interventies 22u-6u om productie niet te verstoren. Ideaal voor dagelijkse reiniging.';
        frequencyDescriptions[1].textContent = 'Wekelijkse grondige reiniging. Volledige machinestop mogelijk.';
        frequencyDescriptions[2].textContent = 'Grote reiniging tijdens geplande stops (vakanties, onderhoud). Complete reiniging.';
        frequencyDescriptions[3].textContent = 'Snelle interventie na incident (lekkage, morsen, inspectie).';
    }

    // 7. METHODOLOGY SECTION
    const methodologyTitle = document.querySelectorAll('.section-title')[3];
    if (methodologyTitle && (methodologyTitle.textContent.includes('méthodologie industrielle') || methodologyTitle.textContent.includes('industrial methodology'))) {
        methodologyTitle.textContent = 'Onze industriële methodologie';
    }

    const includedItems = document.querySelectorAll('.included-item h3');
    if (includedItems.length >= 6) {
        includedItems[0].textContent = 'Veiligheidsaudit & behoeften';
        includedItems[1].textContent = 'Gepersonaliseerd protocol';
        includedItems[2].textContent = 'Veiligheidsbriefing';
        includedItems[3].textContent = 'Gecontroleerde interventie';
        includedItems[4].textContent = 'Kwaliteitscontrole';
        includedItems[5].textContent = 'Gedetailleerd rapport';
    }

    // 8. CERTIFICATIONS
    const certTitle = document.querySelector('.certifications .section-title');
    if (certTitle) {
        certTitle.textContent = 'Onze industriële certificeringen';
    }

    const certItems = document.querySelectorAll('.cert-item div div:first-child');
    if (certItems.length >= 4) {
        certItems[0].textContent = 'Arbeidsveiligheid';
        certItems[1].textContent = 'HACCP';
        certItems[2].textContent = 'ATEX';
        certItems[3].textContent = 'Reach';
    }

    const certSubs = document.querySelectorAll('.cert-item div div:last-child');
    if (certSubs.length >= 4) {
        certSubs[0].textContent = 'Industriële veiligheidstraining';
        certSubs[1].textContent = 'Voedingsindustrie';
        certSubs[2].textContent = 'Explosieve zones';
        certSubs[3].textContent = 'Chemische producten';
    }

    // 9. FAQ SECTION
    const faqTitle = document.querySelectorAll('.section-title')[4];
    if (faqTitle && (faqTitle.textContent.includes('Questions techniques') || faqTitle.textContent.includes('Technical questions'))) {
        faqTitle.textContent = 'Technische vragen - Industrieel';
    }

    const faqItems = document.querySelectorAll('.faq-question');
    if (faqItems.length >= 6) {
        faqItems[0].textContent = 'Hoe beheert u de veiligheid in onze installaties?';
        faqItems[1].textContent = 'Kunt u tijdens productie tussenkomen?';
        faqItems[2].textContent = 'Welke producten gebruikt u voor industriële ontvetting?';
        faqItems[3].textContent = 'Hoe berekent u de kost voor een fabriek?';
        faqItems[4].textContent = 'Biedt u industriële onderhoudscontracten aan?';
        faqItems[5].textContent = 'Bent u uitgerust voor grote oppervlakken (>10.000m²)?';
    }

    const faqAnswers = document.querySelectorAll('.faq-answer p');
    if (faqAnswers.length >= 6) {
        faqAnswers[0].textContent = 'We stellen een specifiek veiligheidsprotocol op met uw HSE-verantwoordelijke. Onze teams volgen vergrendelingsprocedures, dragen vereiste PBM en zijn opgeleid in de specifieke risico\'s van uw site. Voor elke interventie wordt een veiligheidsbriefing gegeven.';
        faqAnswers[1].textContent = 'Om veiligheidsredenen adviseren we interventies buiten de productie (nacht, weekend, technische stops). Voor bepaalde geïsoleerde posten kan reiniging tijdens productie mogelijk zijn met versterkte veiligheidsmaatregelen en isolatie van het gebied.';
        faqAnswers[2].textContent = 'We gebruiken professionele biologisch afbreekbare ontvetters, aangepast aan het type vet (mineraal, plantaardig, synthetisch). Voor de voedingsindustrie gebruiken we producten die zijn goedgekeurd voor voedselcontact. Technische fiches beschikbaar op aanvraag.';
        faqAnswers[3].textContent = 'Op basis van: te reinigen oppervlak, frequentie, technische specificaties (plafondhoogte, vloertype, apparatuur), tijdsbeperkingen en noodzakelijke producten. We verstrekken een gedetailleerde offerte per zone met mogelijke opties.';
        faqAnswers[4].textContent = 'Ja, we bieden jaarlijkse contracten aan met planningsschema, voorkeurstarieven, voorrang op interventies en maandelijkse rapportage. Contracten omvatten meestal regelmatige reiniging + enkele occasionele interventies.';
        faqAnswers[5].textContent = 'Absoluut. Onze machinevloot omvat ride-on vloerreinigingsmachines voor oppervlakken tot 15.000m², industriële stofzuigers van 500L, en we kunnen meerdere teams tegelijk inzetten voor zeer grote oppervlakken.';
    }

    // 10. FINAL CTA
    const ctaBox = document.querySelector('.cta-box');
    if (ctaBox) {
        const ctaTitle = ctaBox.querySelector('h2');
        if (cttaTitle) ctaTitle.textContent = 'Productiviteit verbeterd door reinheid';

        const ctaText = ctaBox.querySelector('p');
        if (ctaText) ctaText.textContent = 'Een schone industriële omgeving vermindert ongevalsrisico\'s, verbetert de efficiëntie van apparatuur en zorgt voor regelgevende naleving. Vertrouw uw industriële reiniging toe aan gekwalificeerde professionals.';

        const ctaButtons = ctaBox.querySelectorAll('.btn');
        if (ctaButtons.length >= 3) {
            ctaButtons[0].innerHTML = '<i class="fas fa-industry"></i> Industriële offerte';
            ctaButtons[1].innerHTML = '<i class="fas fa-hard-hat"></i> Gratis veiligheidsaudit';
            ctaButtons[2].innerHTML = '<i class="fas fa-phone"></i> Industriële spoedgeval';
        }

        const ctaInfo = ctaBox.querySelector('p:last-child');
        if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Interventies 24/7 - Zwaar materieel - Veiligheidsgekwalificeerd personeel';
    }

    updateLanguageButtons('nl');

    // console.log('Vertaling naar Nederlands voltooid!');
}

// Load Dutch translation when requested
function loadDutchTranslationIndustriel() {
    translateToDutchIndustriel();
}
// Exposition pour app.js
window.applyTranslations = translateToDutchIndustriel;
