// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nl-translation-carpets.js - Dutch manual translation for "Nettoyage Tapis & Moquettes"

function translateToDutchCarpets() {
    // console.log('Vertalen Tapis & Moquettes naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Tapijt & Vloerkleed Reiniging <span class="hygiene-badge"><i class="fas fa-spa"></i> Hygiëne & gezondheid</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Professionele diepreiniging van tapijten en vloerkleden in Brussel. Verwijdering van vlekken, mijten, allergenen en geuren. Shampoo, extractie, sneldroging. Geef uw textielvloeren nieuw leven.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis nettoyage') || btn.textContent.includes('Devis gratuit')) {
            btn.innerHTML = '<i class="fas fa-rug"></i> Reinigingsofferte';
        }
        if (btn.textContent.includes('Appeler maintenant')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Nu bellen';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.carpet-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Sneldroging';
        features[1].textContent = 'Anti-mijten';
        features[2].textContent = 'Hypoallergeen';
        features[3].textContent = 'Vlekwerende behandeling';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Een gezonde en propere binnenomgeving';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Tapijten en vloerkleden verzamelen stof, allergenen, mijten en onzichtbare bacteriën. Een gewone stofzuiger volstaat niet om deze diep in de vezels ingebedde deeltjes te verwijderen.';
        descParagraphs[1].textContent = 'Onze professionele reinigingsmethode combineert shampoo en extractie voor een diepgaand resultaat. We gebruiken gecertificeerde ecologische producten die grondig reinigen terwijl ze de kleuren en textuur van uw vloerbedekking behouden.';
    }

    const healthItem = document.querySelector('.health-item');
    if (healthItem) {
        const healthTitle = healthItem.querySelector('h3');
        if (healthTitle) {
            healthTitle.innerHTML = '<i class="fas fa-heartbeat"></i> Gezondheid en welzijn';
        }
        const healthText = healthItem.querySelector('p');
        if (healthText) {
            healthText.textContent = 'Een proper tapijt vermindert tot 80% van de allergenen in de lucht. Bijzonder belangrijk voor kinderen, astmapatiënten of allergielijders. Verbetert de kwaliteit van de binnenlucht.';
        }
    }

    // 3. TYPES OF CARPETS SECTION
    const carpetTitle = document.querySelector('.section-title');
    if (carpetTitle && carpetTitle.textContent.includes('Nos spécialités')) {
        carpetTitle.textContent = 'Onze textielspecialiteiten';
    }

    // Client cards (carpet types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Wall-to-wall carpets
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Vloerkleden muur tot muur';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Residentieel & commercieel';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Professionele reiniging van vaste vloerkleden. Behandeling aangepast aan vezeltype (wol, synthetisch, gemengd). Vlekbescherming inbegrepen.';
    }

    // Card 2: Oriental carpets
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Orientaalse & Perzische tapijten';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Sentimentele waarde';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Zachte reiniging van waardevolle tapijten. Milde producten om natuurlijke kleurstoffen te behouden, handmatige technieken voor franjes en randen.';
    }

    // Card 3: Office carpets
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Kantoortapijten & bedrijven';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Intensief gebruik';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Reiniging van tapijten in professionele omgeving. Behandeling van koffie-, voedsel- en inktvlekken. Interventies in de avond of weekend.';
    }

    // Card 4: Pets carpets
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Tapijten met huisdieren';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Haren & geuren';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Specifieke behandeling om dierenharen, urinegeuren, organische vlekken te verwijderen. Enzymatische producten om aanhoudende geuren te neutraliseren.';
    }

    // Card 5: Post-damage carpets
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Na schade';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Water, vuur, schade';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Herstel en reiniging na waterschade, brand, accidentele schade. Professionele droogtechnieken om schimmelvorming te voorkomen.';
    }

    // Card 6: Stairs carpets
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Trapmatten & moeilijke zones';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Beperkte toegang';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Specifieke reiniging van traptreden, hoekjes, dode hoeken. Aangepaste uitrusting voor zones met moeilijke toegang zonder meubels te verplaatsen.';
    }
}

// 4. PROCEDURE SECTION
const procedureTitle = document.querySelectorAll('.section-title')[1];
if (procedureTitle && procedureTitle.textContent.includes('Notre méthode')) {
    procedureTitle.textContent = 'Onze professionele methode';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Inspectie & diagnose';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Identificatie van vezeltype, kleurvastheidstest, lokalisatie van specifieke vlekken. Evaluatie van vervuilingsniveau en specifieke behoeften.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Diepe stofzuiging';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Industriële stofzuiging met klopsysteem om stof en allergenen los te maken die in de vezels ingebed zijn. Optimale voorbereiding voor reiniging.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Voorbehandeling van vlekken';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Toepassing van specifieke producten volgens aard van vlekken: organisch, vet, gekleurd, oud. Gecontroleerde inwerktijd voor maximale efficiëntie.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Shampoo & extractie';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Toepassing van ecologische shampoo met roterende machines. Gelijktijdige extractie van vuil water met 95% vocht verwijderd. Meest efficiënte methode voor diepreiniging.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Versneld drogen';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Gebruik van professionele ventilatoren voor sneldroging (2-6 uur volgens dikte). Preventie van schimmelvorming en snel terugkeer naar normaal gebruik.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Bescherming & afwerking';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Aanbrengen van vlekwerend middel (optioneel). Eindborstelen om vezels recht te zetten. Eindinspectie en onderhoudsadvies.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && equipmentTitle.textContent.includes('Technologie')) {
    equipmentTitle.textContent = 'Professionele technologie';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Extractiemachines';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Professionele apparaten die injectie van proper water combineren met zuiging van vuil water. Optimale extractiekracht voor diepreiniging en sneldroging.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'Turbo-drogers';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Professionele ventilatoren op hoge snelheid voor versneld drogen. Preventie van schimmelvorming en terugkeer naar normaal gebruik binnen enkele uren.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Ecologische producten';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Shampoos en vlekkenverwijderaars gecertificeerd Ecolabel, hypoallergeen, zonder chemische parfums. Respectvol voor vezels en milieu, veilig voor kinderen en dieren.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Testuitrusting';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Kleurvastheidstesters, inspectieloepen, UV-lampen om onzichtbare vlekken te detecteren. Precieze diagnose voor aangepaste behandeling.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && faqTitle.textContent.includes('Questions tapis')) {
    faqTitle.textContent = 'Veelgestelde vragen over tapijten';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Hoe lang duurt het voordat mijn tapijt volledig droog is?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'Met onze professionele extractiemethode en turbo-drogers zijn de meeste tapijten droog in 2 tot 6 uur. Dikke of wollen vloerkleden kunnen 6 tot 12 uur nodig hebben. We adviseren om meubels pas terug te plaatsen na volledige droging om vlekken te vermijden.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Beschadigt professionele reiniging de kleuren van antieke tapijten?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'We voeren altijd een kleurvastheidstest uit vóór elke behandeling. Voor waardevolle of antieke tapijten gebruiken we specifieke milde producten en handmatige technieken. Onze ervaring laat ons toe de behandeling aan te passen aan elk vezeltype en kleurstof.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Kunt u urinegeuren van dieren verwijderen?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Ja, we gebruiken specifieke enzymatische producten die de urinemoleculen afbreken die verantwoordelijk zijn voor de geuren. De behandeling omvat: aanbrengen van product, diepe penetratie, extractie, en soms UV-behandeling. De efficiëntie hangt af van de ouderdom van de vlekken en het type weefsel.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Moeten alle meubels verplaatst worden voor uw tussenkomst?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'We verplaatsen lichte meubels (stoelen, kleine tafels) inbegrepen in onze service. Voor zware meubels (zitbanken, kasten, bedden), raden we aan deze te verplaatsen indien mogelijk voor volledige reiniging. Zo niet, reinigen we errond. Meubelpoten in metaal kunnen viltjes nodig hebben om roestvlekken te vermijden.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Biedt u een anti-mijtbehandeling aan?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Ja, we bieden een specifieke anti-mijtbehandeling aan die tot 95% van de mijten en hun uitwerpselen (hoofdallergenen) verwijdert. Deze behandeling is bijzonder aanbevolen voor kinderkamers, allergiepatiënten of astmalijders. Langdurig effect tot 6 maanden.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Hoe vaak moeten tapijten en vloerkleden professioneel gereinigd worden?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'We adviseren professionele reiniging om de 12 tot 18 maanden voor regelmatig onderhoud. Voor huishoudens met dieren, jonge kinderen, of allergiepatiënten, om de 6 tot 12 maanden. Bij specifieke vlekken of voor een speciaal evenement, wordt een eenmalige reiniging aanbevolen.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Geef uw textielvloeren nieuw leven';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Een proper tapijt verbetert niet alleen de esthetiek van uw interieur maar ook de kwaliteit van de lucht die u inademt. Verwijder allergenen, mijten en bacteriën voor een gezondere omgeving.';

    const ctaButtons = ctaBox.querySelectorAll('.btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit')) {
            btn.innerHTML = '<i class="fas fa-rug"></i> Gratis offerte';
        }
        if (btn.textContent.includes('Diagnostic gratuit')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Gratis diagnose';
        }
        if (btn.textContent.includes('Urgence tache')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Vlek spoedgeval';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Gratis kleurvastheidstest - Tevredenheidsgarantie - Jaarlijks onderhoudsforfaits';
}

// Update language buttons if they exist
if (typeof updateLanguageButtons === 'function') {
    updateLanguageButtons('nl');
}

// console.log('Vertaling Tapis & Moquettes naar Nederlands voltooid!');
}

function loadDutchCarpetTranslation() {
    translateToDutchCarpets();
}
// Exposition pour app.js
window.applyTranslations = translateToDutchCarpets;
