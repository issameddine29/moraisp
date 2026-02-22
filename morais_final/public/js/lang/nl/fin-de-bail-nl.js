// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nl-translation-fin-de-bail.js - Dutch manual translation for "Nettoyage Fin de Bail"

function translateToDutchFinDeBail() {
    // console.log('Vertalen Eind Huur pagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Einde Huur Reiniging <span class="bail-badge"><i class="fas fa-file-contract"></i> 100% Waarborg Garantie</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Gespecialiseerde reinigingsdienst conform vastgoedkantoorvereisten in Brussel. Schriftelijke garantie voor volledige waarborgteruggave. Succesvolle plaatsopname of gratis reiniging.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Garantie caution') || btn.textContent.includes('Deposit guarantee')) {
            btn.innerHTML = '<i class="fas fa-shield-alt"></i> Waarborg garantie';
        }
        if (btn.textContent.includes('Expert fin de bail') || btn.textContent.includes('End of lease expert')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Einde huur expert';
        }
    });

    // Hero features
    const bailFeatures = document.querySelectorAll('.bail-feature span');
    if (bailFeatures.length >= 4) {
        bailFeatures[0].textContent = 'Schriftelijke garantie inbegrepen';
        bailFeatures[1].textContent = 'Conform kantoren';
        bailFeatures[2].textContent = '100% waarborg teruggekregen';
        bailFeatures[3].textContent = 'Interventie 24h/48h';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Uw waarborg in veiligheid';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Einde huur reiniging is de meest kritieke stap om uw waarborg terug te krijgen. Vastgoedkantoren zijn steeds veeleisender en houden gemiddeld 30% van de waarborg in voor properheidsproblemen.';
        descParagraphs[1].textContent = 'Onze dienst is specifiek ontworpen om aan de strikte criteria van uitgaande plaatsopnames te voldoen. We kennen perfect de controlepunten van de belangrijkste Brusselse kantoren en garanderen een conform resultaat.';
    }

    // Guarantee section
    const guaranteeItem = document.querySelector('.guarantee-item');
    if (guaranteeItem) {
        const guaranteeTitle = guaranteeItem.querySelector('h3');
        if (guaranteeTitle) {
            guaranteeTitle.innerHTML = '<i class="fas fa-award"></i> Onze unieke garantie';
        }
        const guaranteeText = guaranteeItem.querySelector('p');
        if (guaranteeText) {
            guaranteeText.textContent = 'Als uw waarborg wordt ingehouden wegens properheid na onze interventie, vergoeden wij het ingehouden bedrag volledig EN doen we de reiniging gratis opnieuw. Contractuele garantie.';
        }
    }

    // Statistics
    const statTexts = document.querySelectorAll('.stat-text');
    if (statTexts.length >= 4) {
        statTexts[0].textContent = 'van onze klanten krijgen 100% van hun waarborg terug';
        statTexts[1].textContent = 'gemiddelde waarborg ingehouden zonder professionele reiniging';
        statTexts[2].textContent = 'gemiddelde spoedinterventietijd';
        statTexts[3].textContent = 'verborgen kosten, transparante offerte';
    }

    // 3. PACKAGES SECTION
    const packagesTitle = document.querySelector('.section-title');
    if (packagesTitle && (packagesTitle.textContent.includes('Nos formules') || packagesTitle.textContent.includes('Our End of Lease'))) {
        packagesTitle.textContent = 'Onze Einde Huur Formules';
    }

    // Client cards (packages)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Studio
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Studio/Kot (≤35m²)';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag && (card1Tag.textContent.includes('Étudiants') || card1Tag.textContent.includes('Students'))) {
        card1Tag.textContent = 'Studenten';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Volledige studentenstudio reiniging: kitchenette, badkamer, éénkamerappartement. Ideaal voor studentenresidenties.';
    }
    const card1Price = clientCards[0].querySelector('div[style*="margin-top: 10px"]');
    if (card1Price) {
        card1Price.textContent = '€149 BTW inbegrepen';
    }
    const card1Note = clientCards[0].querySelector('small');
    if (card1Note) {
        card1Note.textContent = 'Garantie inbegrepen';
    }

    // Card 2: Apartment F1
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Appartement F1 (35-50m²)';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag && (card2Tag.textContent.includes('Célibataires') || card2Tag.textContent.includes('Singles'))) {
        card2Tag.textContent = 'Alleenstaanden';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Reiniging 1 hoofdruimte + uitgeruste keuken + badkamer. Huishoudtoestellen inbegrepen.';
    }
    const card2Price = clientCards[1].querySelector('div[style*="margin-top: 10px"]');
    if (card2Price) {
        card2Price.textContent = '€199 BTW inbegrepen';
    }
    const card2Note = clientCards[1].querySelector('small');
    if (card2Note) {
        card2Note.textContent = 'Garantie inbegrepen';
    }

    // Card 3: Apartment F2
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Appartement F2 (50-70m²)';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag && (card3Tag.textContent.includes('Couples') || card3Tag.textContent.includes('Koppels'))) {
        card3Tag.textContent = 'Koppels';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Reiniging 2 kamers, keuken, badkamer, hal. Perfect voor jonge koppels.';
    }
    const card3Price = clientCards[2].querySelector('div[style*="margin-top: 10px"]');
    if (card3Price) {
        card3Price.textContent = '€259 BTW inbegrepen';
    }
    const card3Note = clientCards[2].querySelector('small');
    if (card3Note) {
        card3Note.textContent = 'Garantie inbegrepen';
    }

    // Card 4: Apartment F3/F4
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Appartement F3/F4 (70-100m²)';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag && (card4Tag.textContent.includes('Familles') || card4Tag.textContent.includes('Families'))) {
        card4Tag.textContent = 'Gezinnen';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Reiniging 3-4 kamers, 2 badkamers, keuken, gangen. Ideaal voor gezinnen.';
    }
    const card4Price = clientCards[3].querySelector('div[style*="margin-top: 10px"]');
    if (card4Price) {
        card4Price.textContent = '€349 BTW inbegrepen';
    }
    const card4Note = clientCards[3].querySelector('small');
    if (card4Note) {
        card4Note.textContent = 'Garantie inbegrepen';
    }

    // Card 5: House
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Huis (>100m²)';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag && (card5Tag.textContent.includes('Grandes surfaces') || card5Tag.textContent.includes('Large surfaces'))) {
        card5Tag.textContent = 'Grote oppervlakken';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Volledige huisreiniging met verdiepingen, garage, kelder, terrassen. Offerte op maat.';
    }
    const card5Price = clientCards[4].querySelector('div[style*="margin-top: 10px"]');
    if (card5Price) {
        card5Price.textContent = 'Vanaf €449';
    }
    const card5Note = clientCards[4].querySelector('small');
    if (card5Note) {
        card5Note.textContent = 'Gratis offerte';
    }

    // Card 6: Emergency
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = '24h Spoed';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag && (card6Tag.textContent.includes('Dernière minute') || card6Tag.textContent.includes('Last minute'))) {
        card6Tag.textContent = 'Laatste minuut';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Plaatsopname morgen? We treden op binnen 24u. 30% toeslag voor spoeddienst.';
    }
    const card6Price = clientCards[5].querySelector('div[style*="margin-top: 10px"]');
    if (card6Price) {
        card6Price.textContent = '+30%';
    }
    const card6Note = clientCards[5].querySelector('small');
    if (card6Note) {
        card6Note.textContent = 'Beschikbaar 7/7';
    }
}

// 4. CHECKLIST SECTION
const checklistTitle = document.querySelectorAll('.section-title')[1];
if (checklistTitle && (checklistTitle.textContent.includes('Notre checklist') || checklistTitle.textContent.includes('Our Professional'))) {
    checklistTitle.textContent = 'Onze Professionele Checklist';
}

// Checklist intro
const checklistIntro = document.querySelector('.checklist-detailed p');
if (checklistIntro) {
    checklistIntro.textContent = 'We controleren deze 25 kritieke punten voor een succesvolle plaatsopname';
}

// Update categories and items
const categoryTitles = document.querySelectorAll('.checklist-category h4');
if (categoryTitles.length >= 4) {
    categoryTitles[0].innerHTML = '<i class="fas fa-kitchen-set"></i> Keuken';
    categoryTitles[1].innerHTML = '<i class="fas fa-bath"></i> Badkamer';
    categoryTitles[2].innerHTML = '<i class="fas fa-expand"></i> Kamers en Vloeren';
    categoryTitles[3].innerHTML = '<i class="fas fa-wind"></i> Afwerking';
}

// Kitchen checklist items
const kitchenItems = document.querySelectorAll('.checklist-items')[0];
if (kitchenItems) {
    const items = kitchenItems.querySelectorAll('.checklist-item-detailed span');
    if (items.length >= 6) {
        items[0].textContent = 'Ontvette kookplaten';
        items[1].textContent = 'Oven binnenkant en deur';
        items[2].textContent = 'Gereinigde dampkap en filters';
        items[3].textContent = 'Koelkast binnenkant/buitenkant';
        items[4].textContent = 'Magnetron binnenkant/buitenkant';
        items[5].textContent = 'Ontvette vaatwasser';
    }
}

// Bathroom checklist items
const bathroomItems = document.querySelectorAll('.checklist-items')[1];
if (bathroomItems) {
    const items = bathroomItems.querySelectorAll('.checklist-item-detailed span');
    if (items.length >= 5) {
        items[0].textContent = 'Gebleekte tegellijntjes';
        items[1].textContent = 'Ontkalking van sanitair';
        items[2].textContent = 'Douchewand zonder strepen';
        items[3].textContent = 'Glanzende spiegels en kranen';
        items[4].textContent = 'Gereinigde afvoer';
    }
}

// Rooms checklist items
const roomsItems = document.querySelectorAll('.checklist-items')[2];
if (roomsItems) {
    const items = roomsItems.querySelectorAll('.checklist-item-detailed span');
    if (items.length >= 5) {
        items[0].textContent = 'Stofvrije plinten';
        items[1].textContent = 'Schakelaars en stopcontacten';
        items[2].textContent = 'Binnenramen';
        items[3].textContent = 'Gordijnen en jaloezieën';
        items[4].textContent = 'Kasten binnenkant/buitenkant';
    }
}

// Finishing checklist items
const finishingItems = document.querySelectorAll('.checklist-items')[3];
if (finishingItems) {
    const items = finishingItems.querySelectorAll('.checklist-item-detailed span');
    if (items.length >= 5) {
        items[0].textContent = 'Gereinigd balkon/terras';
        items[1].textContent = 'Kelder/garage indien van toepassing';
        items[2].textContent = 'Brievenbus';
        items[3].textContent = 'Volledige ventilatie';
        items[4].textContent = 'Geneutraliseerde geuren';
    }
}

// 5. TESTIMONIALS SECTION
const testimonialsTitle = document.querySelectorAll('.section-title')[2];
if (testimonialsTitle && (testimonialsTitle.textContent.includes('Ils ont récupéré') || testimonialsTitle.textContent.includes('They Recovered'))) {
    testimonialsTitle.textContent = 'Zij Hebben Hun Waarborg Teruggekregen';
}

// Update testimonials
const testimonialTexts = document.querySelectorAll('.testimonial-text');
if (testimonialTexts.length >= 3) {
    testimonialTexts[0].textContent = '"Perfecte plaatsopname met ERA. De eigenaar vond absoluut niets aan te merken. Volledige waarborg binnen 48u terug. Ik beveel aan 200%!"';
    testimonialTexts[1].textContent = '"Met 2 kinderen en een kat was ik bezorgd om sporen. Het team heeft alles perfect gereinigd. Century 21 tekende zonder voorbehoud. Een echte opluchting."';
    testimonialTexts[2].textContent = '"Spoed: plaatsopname de volgende dag. Ze kwamen dezelfde avond, werkten tot 22u. Onberispelijk resultaat. Dienstverlening boven mijn verwachtingen."';
}

const testimonialAuthors = document.querySelectorAll('.testimonial-author span');
if (testimonialAuthors.length >= 3) {
    testimonialAuthors[0].textContent = 'Marie D., studente - Studio 30m²';
    testimonialAuthors[1].textContent = 'Thomas L., gezin - F3 75m²';
    testimonialAuthors[2].textContent = 'Sophie R., expat - Spoedvertrek';
}

// 6. PROCESS SECTION
const processTitle = document.querySelectorAll('.section-title')[3];
if (processTitle && (processTitle.textContent.includes('Notre processus') || processTitle.textContent.includes('Our Guaranteed'))) {
    processTitle.textContent = 'Ons Gegarandeerd Proces';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Directe online offerte';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Geef oppervlakte en woningtype op. Onmiddellijke offerte met garantie inbegrepen. Veilige reservatie in 2 minuten.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Gepersonaliseerde checklist';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Verzending van een specifieke checklist voor uw woning en kantoor. Optimale voorbereiding voor onze interventie.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Professionele interventie';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Gespecialiseerd einde huur team, professioneel materiaal, goedgekeurde producten. Discrete en efficiënte interventie.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Strikte kwaliteitscontrole';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Punt-voor-punt verificatie met onze checklist. Voor/na foto\'s. Onmiddellijke aanpassingen indien nodig.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Ondersteunde plaatsopname';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Advies voor de plaatsopname. Mogelijkheid tot begeleiding (optie). Telefonische ondersteuning tijdens inspectie.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Waarborg opvolging';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Herinnering bij late waarborg. Bijstand bij geschil. Toepassing van onze garantie indien nodig (zelden).';
}

// 7. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[4];
if (faqTitle && (faqTitle.textContent.includes('Questions fréquentes') || faqTitle.textContent.includes('Frequently Asked'))) {
    faqTitle.textContent = 'Veelgestelde Vragen - Einde Huur';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Hoe werkt uw waarborggarantie precies?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'Contractuele garantie: als uw kantoor/eigenaar een deel van uw waarborg inhoudt wegens properheid na onze dienst, vergoeden wij het ingehouden bedrag volledig EN doen we de reiniging gratis opnieuw. Bewijs van inhouden vereist.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Moet ik de woning volledig leegmaken voor uw dienst?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Ja, de woning moet volledig geleegd zijn van uw persoonlijke bezittingen en meubels. We reinigen oppervlakken, niet objecten. Indien nodig kunnen we een opruimdienst aanbieden (optie).';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Wat als mijn kantoor specifieke vereisten heeft?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Stuur ons het plaatsopnamedocument of specifieke vereisten van uw kantoor. We passen onze checklist dienovereenkomstig aan. We werken regelmatig met de belangrijkste Brusselse kantoren.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Kan ik aanwezig zijn tijdens de reiniging?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'U kan, maar het is niet nodig. De meeste klanten laten ons de sleutels achter en gaan weg. We werken autonoom en sturen u foto\'s van het resultaat.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Aanvaardt u studenten met beperkt budget?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Ja, we bieden studententarief en betaling in 2 keer zonder kosten (bewijs vereist). De studio aan €149 is onze populairste formule bij studenten.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Hoe lang voor de plaatsopname moet ik u contacteren?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Bij voorkeur 3-5 dagen op voorhand. Voor spoedgevallen treden we op binnen 24u (met toeslag). We zijn beschikbaar 7/7, vooral op einde maand (verhuisperiode).';
}

// 8. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Investeer in de terugkeer van uw waarborg';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Voor €149 tot €449 verzekert u zich van 100% waarborgteruggave (vaak €1.000 tot €3.000). Onze garantie beschermt u. Zorgenloze plaatsopname gegarandeerd.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Calculate my gain') || btn.textContent.includes('Calculer mon gain')) {
            btn.innerHTML = '<i class="fas fa-calculator"></i> Bereken mijn winst';
        }
        if (btn.textContent.includes('Book now') || btn.textContent.includes('Réserver maintenant')) {
            btn.innerHTML = '<i class="fas fa-calendar-check"></i> Nu reserveren';
        }
        if (btn.textContent.includes('End of lease emergency') || btn.textContent.includes('Urgence fin de bail')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Spoed einde huur';
        }
    });

    const ctaInfo = ctaBox.querySelector('p[style*="margin-top: 20px"]');
    if (ctaInfo) {
        ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Schriftelijke garantie inbegrepen - Betaling na succesvolle plaatsopname - Beschikbaar 7/7';
    }
}

// Update ROI calculator function
const calculateCustomROI = () => {
    const caution = prompt("Bedrag van uw waarborg (borg)?", "1500");
    if (caution) {
        const surface = prompt("Oppervlakte van uw woning (m²)?", "50");
        let cleaningCost = 250;

        if (surface <= 35) cleaningCost = 149;
    else if (surface <= 50) cleaningCost = 199;
else if (surface <= 70) cleaningCost = 259;
else if (surface <= 100) cleaningCost = 349;
else cleaningCost = 449;

const potentialLoss = Math.round(caution * 0.3);
const netGain = caution - cleaningCost;
const roi = ((netGain - (caution - potentialLoss)) / cleaningCost * 100).toFixed(0);

showNotification(`ROI: ${roi}%. Door €${cleaningCost} te investeren, wint u €${netGain - (caution - potentialLoss)} netto.`, 'success');
}
};

// Update button event listener
const calculateBtn = document.querySelector('[onclick*="fin-de-bail"]');
if (calculateBtn && (calculateBtn.textContent.includes('Calculate') || calculateBtn.textContent.includes('Bereken'))) {
    calculateBtn.addEventListener('click', function(e) {
        if (this.textContent.includes('Bereken')) {
            e.preventDefault();
            calculateCustomROI();
        }
    });
}

// Update testimonial function
const shareTestimonial = () => {
    const name = prompt("Uw voornaam?");
    const surface = prompt("Oppervlakte van uw woning?");
    const agency = prompt("Naam van uw kantoor/eigenaar?");

    if (name && surface) {
        showNotification(`Bedankt ${name}! Uw getuigenis helpt toekomstige klanten gerust te stellen.`, 'success');
    }
};

// Update language buttons
updateLanguageButtons('nl');

// console.log('Einde Huur pagina vertaling naar Nederlands voltooid!');
}

function loadDutchFinDeBailTranslation() {
    translateToDutchFinDeBail();
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
window.applyTranslations = translateToDutchFinDeBail;
