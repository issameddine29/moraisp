// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// parkings-garages-nl.js - Traduction néerlandaise pour "Nettoyage Parkings & Garages"

function translateToDutchParking() {
    // console.log('Vertalen van parkeer- en garagereinigingspagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Parkeer- & Garagereiniging <span class="industrial-badge"><i class="fas fa-industry"></i> Industriële uitrusting</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Professionele reiniging en onderhoud van parkeerplaatsen en garages in Brussel. Hogedrukreiniging, ontvetten van vloeren, behandeling van olievlekken, afvoer van afval. Veiligheid en netheid gegarandeerd.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis parking') || btn.textContent.includes('Parking quote')) {
            btn.innerHTML = '<i class="fas fa-parking"></i> Offerte parkeerplaats';
        }
        if (btn.textContent.includes('Appeler maintenant') || btn.textContent.includes('Call now')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Nu bellen';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.parking-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Hogedrukreiniging';
        features[1].textContent = 'Professioneel ontvetten';
        features[2].textContent = 'Afvoer van afval';
        features[3].textContent = 'Signalering & veiligheid';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Schone en veilige parkeerplaatsen';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Parkeerplaatsen en garages zijn ruimtes met veel verkeer die regelmatig en professioneel onderhoud vereisen. Vuil, olievlekken, afval en stof hopen zich snel op, wat glijrisico\'s en een slecht imago veroorzaakt.';
        descParagraphs[1].textContent = 'Onze gespecialiseerde dienst gebruikt industriële uitrusting aangepast aan grote oppervlakken: automatische veegmachines, hogedrukreinigers, industriële stofzuigers en professionele ontvetters. We treden op met een aangepaste planning om verstoringen te minimaliseren.';
    }

    const safetyItem = document.querySelector('.safety-item');
    if (safetyItem) {
        const safetyTitle = safetyItem.querySelector('h3');
        if (safetyTitle) {
            safetyTitle.innerHTML = '<i class="fas fa-exclamation-triangle"></i> Preventie van risico\'s';
        }
        const safetyText = safetyItem.querySelector('p');
        if (safetyText) {
            safetyText.textContent = 'Een schone parkeerplaats vermindert aanzienlijk het risico op ongevallen. Verwijdering van olievlekken (glijrisico), betere zichtbaarheid van signalering, afvoer van brandbaar afval.';
        }
    }

    // 3. PARKING TYPES SECTION
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && (sectionTitle.textContent.includes('Nos solutions parking') || sectionTitle.textContent.includes('Our parking solutions'))) {
        sectionTitle.textContent = 'Onze parkeeroplossingen';
    }

    // Client cards (parking types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Parkings souterrains
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Ondergrondse parkeerplaatsen';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Gebouwen & centra';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Volledige reiniging van ondergrondse parkeerplaatsen: vloeren, muren, plafonds, ventilatiekanalen. Specifieke behandeling voor vocht en condensatie.';
    }

    // Card 2: Parkings aériens
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Bovengrondse parkeerplaatsen';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Winkelcentra';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Onderhoud van oppervlakkige parkeerplaatsen: mechanisch vegen, hogedrukreiniging, behandeling van wegmarkeringen, reiniging van verkeersborden.';
    }

    // Card 3: Garages résidentiels
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Residentiële garages';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Mede-eigendommen';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Reiniging van gebouwgarages: verwijdering van grof vuil, ontvetten van plaatsen, reiniging van individuele boxen, onderhoud van gemeenschappelijke delen.';
    }

    // Card 4: Parkings d'entreprise
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Bedrijfsparkeerplaatsen';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Bedrijven & kantoren';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Regelmatig onderhoud van private bedrijfsparkeerplaatsen: bezoekerszones, gereserveerde plaatsen, PMR-toegang, beveiligde parkeerplaatsen. Planning aangepast aan werkuren.';
    }

    // Card 5: Parkings publics
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Openbare parkeerplaatsen';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Gemeenten';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Reinigingsdienst voor gemeentelijke parkeerplaatsen: automatische kassa\'s, liften, trappen, openbare toiletten, verlichting. Conform hygiënenormen.';
    }

    // Card 6: Parkings logistiques
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Logistieke parkeerplaatsen';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Magazijnen & industriële zones';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Intensieve reiniging van parkeerplaatsen voor vrachtwagens, ontvetten van belangrijke olievlekken, behandeling van hoogwaardige betonnen vloeren.';
    }
}

// 4. PROCESS SECTION
const includedTitle = document.querySelectorAll('.section-title')[1];
if (includedTitle && (includedTitle.textContent.includes('Notre processus industriel') || includedTitle.textContent.includes('Our industrial process'))) {
    includedTitle.textContent = 'Ons industrieel proces';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Analyse & voorbereiding';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Evaluatie van oppervlakken, type vloeren (beton, asfalt, hars), vervuilingsniveau. Installatie van tijdelijke signalering en bescherming van gevoelige zones.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Mechanisch vegen';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Gebruik van professionele automatische veegmachines om grof vuil, grind, zand, bladeren te verwijderen. Volledige dekking van te behandelen oppervlak.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Voorbehandeling van vlekken';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Toepassing van professionele ontvetters op olie-, vet- en brandstofvlekken. Aangepaste inwerktijd volgens ouderdom van vlekken.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Hogedrukreiniging';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Gebruik van industriële reinigers met warm water (optie) en aangepaste reinigingsmiddelen. Druk afgesteld volgens vloertype voor diepe reiniging zonder schade.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Spoelen & wateropzuiging';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Volledig spoelen om alle productresten te verwijderen. Opzuiging van afvalwater met industriële pompen. Respect voor waterlozingsnormen.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Controle & afwerkingen';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Controle op afwezigheid van restvlekken, netheid van muren en signalering. Reiniging van rioolputten, inspectieputten. Gedetailleerd interventierapport.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && (equipmentTitle.textContent.includes('Équipement industriel professionnel') || equipmentTitle.textContent.includes('Professional industrial equipment'))) {
    equipmentTitle.textContent = 'Professionele industriële uitrusting';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Automatische veegmachines';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Professionele machines voor grote oppervlakken. Veegbreedte tot 1,8m, belangrijke opvangcapaciteit, elektrische of thermische werking.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'Hogedrukreinigers';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Mobiele hogedrukreinigeenheden. Instelbare druk (100-200 bar), belangrijke waterdebiet, geïntegreerde water- en producttanks.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Industriële stofzuigers';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Hogekracht stofzuigers voor water en modder. HEPA-filtratie, grote recuperatiecapaciteit, aangepast aan natte en droge vloeren.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Ontvettende producten';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Professioneel assortiment biologisch afbreekbare ontvetters. Effectief op minerale oliën, dierlijke en plantaardige vetten, brandstoffen. Conform milieunormen.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && (faqTitle.textContent.includes('Questions parkings fréquentes') || faqTitle.textContent.includes('Frequent parking questions'))) {
    faqTitle.textContent = 'Veelgestelde vragen over parkeerplaatsen';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Hoeveel tijd moet er voorzien worden voor sluiting van een parkeerplaats tijdens reiniging?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'Dit hangt af van de grootte van de parkeerplaats. Voor een gemiddelde parkeerplaats (100 plaatsen) voorzien we gewoonlijk een sluiting van 4 tot 6 uur. Voor zeer grote parkeerplaatsen werken we per sectie om verstoringen te minimaliseren. We werken vooral \'s nachts of op zondag voor commerciële parkeerplaatsen.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Hoe behandelt u oude en ingekraste olievlekken?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Voor oude vlekken gebruiken we een specifieke behandeling: aanbrengen van geconcentreerde ontvetter met verlengde inwerktijd (tot 24u), mechanisch borstelen, daarna hogedrukreiniging. In extreme gevallen bieden we een oppervlaktebehandeling (stralen of hydrostralen) om de vloer volledig te herstellen.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Wat doet u met het afvalwater van de reiniging?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'We respecteren strikt de Brusselse regelgeving over afvalwater. Het water wordt verzameld door onze industriële stofzuigers en indien nodig behandeld. Voor parkeerplaatsen uitgerust met koolwaterstofscheiders controleren we hun goede werking. We verstrekken op vraag certificaten van waterbehandeling.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Biedt u onderhoud van wegmarkeringen aan?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Ja, we bieden een complete onderhoudsdienst voor wegmarkeringen aan: reiniging van bestaande lijnen, tijdelijke signalering tijdens de werken. We werken samen met gespecialiseerde wegmarkeringsbedrijven voor volledig herschilderen indien nodig. We kunnen deze prestatie opnemen in een jaarlijks onderhoudscontract.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Hoe beheert u de veiligheid tijdens de interventies?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Veiligheid is onze prioriteit. We plaatsen: tijdelijke signalering conform de wegcode, lichtmarkering, personeel in hoge zichtbaarheidskledij, voertuigen uitgerust met zwaailichten. Onze operatoren zijn opgeleid voor de specifieke risico\'s van werken in verkeersomgeving (zelfs verminderd).';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Biedt u regelmatige onderhoudscontracten aan voor parkeerplaatsen?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Absoluut. Onze onderhoudscontracten omvatten gewoonlijk: mechanisch vegen wekelijks of tweewekelijks, hogedrukreiniging maandelijks of driemaandelijks, occasioneel ontvetten van vlekken, regelmatige afvoer van afval, onderhoud van rioolputten. Dalende tarieven volgens frequentie en oppervlakte.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Een schone parkeerplaats: veiligheid en professioneel imago';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Regelmatig onderhoud van uw parkeerplaats of garage verbetert de veiligheid van gebruikers, verlengt de levensduur van de bekledingen en versterkt het professionele imago van uw vestiging.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit') || btn.textContent.includes('Free quote')) {
            btn.innerHTML = '<i class="fas fa-parking"></i> Gratis offerte';
        }
        if (btn.textContent.includes('Audit parking') || btn.textContent.includes('Parking audit')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Parkeeraudit';
        }
        if (btn.textContent.includes('Urgence nettoyage') || btn.textContent.includes('Cleaning emergency')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Spoedschoonmaak';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Interventies 24u/24 voor commerciële parkeerplaatsen - Voordelige jaarcontracten';
}

// Update notification text
const parkingBtn = document.querySelector('.btn-primary');
if (parkingBtn) {
    parkingBtn.addEventListener('click', function() {
        localStorage.setItem('parkingService', 'parkeerplaatsen');
        if (typeof showNotification === 'function') {
            showNotification('Offerteaanvraag voor parkeerplaats geregistreerd. Onze technische dienst neemt contact op binnen 24 uur.', 'success');
        }
    });
}

// Update language buttons
updateLanguageButtons('nl');

// console.log('Parkeer- en garagereinigingspagina vertaling naar Nederlands voltooid!');
}

function loadDutchTranslationParking() {
    translateToDutchParking();
}
// Exposition pour app.js
window.applyTranslations = translateToDutchParking;
