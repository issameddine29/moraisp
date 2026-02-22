// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nl-translation-copropriete.js - Dutch manual translation for "Nettoyage de Copropriétés"

function translateToDutchCopropriete() {
    // console.log('Vertalen Copropriété pagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Appartementsgebouw & Vastgoedreiniging <span class="copropriete-badge"><i class="fas fa-building"></i> Syndici & Besturen</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Volledig onderhouds- en reinigingsdienst voor appartementsgebouwen in Brussel. Gemeenschappelijke ruimtes, liften, parkings, inkomhallen. Maatwerkcontracten voor syndici en raden van mede-eigenaars.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Demander un devis') || btn.textContent.includes('Request a quote')) {
            btn.innerHTML = '<i class="fas fa-file-contract"></i> Offerte aanvragen';
        }
        if (btn.textContent.includes('Contacter un expert') || btn.textContent.includes('Contact an expert')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Expert contacteren';
        }
    });

    // Hero features
    const coproFeatures = document.querySelectorAll('.copropriete-feature span');
    if (coproFeatures.length >= 4) {
        coproFeatures[0].textContent = 'Maatwerk planning';
        coproFeatures[1].textContent = 'Toegewijd team';
        coproFeatures[2].textContent = 'Maandelijkse rapporten';
        coproFeatures[3].textContent = 'Professionele aansprakelijkheidsverzekering';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Professioneel onderhoud voor appartementsgebouwen';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Het onderhoud van gemeenschappelijke ruimtes is essentieel om de vastgoedwaarde te behouden, de veiligheid van bewoners te garanderen en een aangename levenskwaliteit te handhaven. Onze gespecialiseerde dienst voor appartementsgebouwen biedt een complete en op maat gemaakte oplossing.';
        descParagraphs[1].textContent = 'We werken nauw samen met syndici en raden van mede-eigenaars om op maat gemaakte planningen op te stellen, met respect voor tijdskaders en toegewezen budgetten. Ons team is opgeleid in de specifieke behoeften van collectieve gebouwen.';
    }

    // Syndic section
    const syndicItem = document.querySelector('.syndic-item');
    if (syndicItem) {
        const syndicTitle = syndicItem.querySelector('h3');
        if (syndicTitle) {
            syndicTitle.innerHTML = '<i class="fas fa-chart-line"></i> Voor syndici';
        }
        const syndicText = syndicItem.querySelector('p');
        if (syndicText) {
            syndicText.textContent = 'We vereenvoudigen uw beheer met gedetailleerde rapporten, duidelijke facturering per lot, en responsiviteit op specifieke verzoeken van mede-eigenaars.';
        }
    }

    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 4) {
        statLabels[0].textContent = 'Spoed beschikbaarheid';
        statLabels[1].textContent = 'Tevredenheidspercentage';
        statLabels[2].textContent = 'Appartementsgebouwen in Brussel';
        statLabels[3].textContent = 'Jaren ervaring';
    }

    // 3. AREAS OF INTERVENTION SECTION
    const zonesTitle = document.querySelector('.section-title');
    if (zonesTitle && (zonesTitle.textContent.includes('Zones entretenues') || zonesTitle.textContent.includes('Maintained Areas'))) {
        zonesTitle.textContent = 'Onderhouden Zones';
    }

    // Client cards (zones)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Halls & Entrances
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Inkomhallen & Entrées';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag && (card1Tag.textContent.includes('Parties communes') || card1Tag.textContent.includes('Common areas'))) {
        card1Tag.textContent = 'Gemeenschappelijke ruimtes';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Vloerreiniging (marmer, parket, tegels), toegangsramen, brievenbussen, intercoms, spiegels.';
    }

    // Card 2: Staircases
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Trappenhuizen';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag && (card2Tag.textContent.includes('Circulation') || card2Tag.textContent.includes('Circulatie'))) {
        card2Tag.textContent = 'Circulatie';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Reiniging van traptreden, leuningen, verdiepingen, verlichting, stofzuigen van muren, tapijtonderhoud.';
    }

    // Card 3: Elevators
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Liften';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag && (card3Tag.textContent.includes('Équipements') || card3Tag.textContent.includes('Equipment'))) {
        card3Tag.textContent = 'Uitrusting';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Volledige reiniging van cabines, spiegels, bedieningspanelen, deuren, desinfectie van contactoppervlakken.';
    }

    // Card 4: Parking
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Parkings & Garages';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag && (card4Tag.textContent.includes('Stationnement') || card4Tag.textContent.includes('Parking'))) {
        card4Tag.textContent = 'Parkeren';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Machinaal vegen, vloerreiniging, onderhoud van hellingen, vuilnisbakken, verlichting, signalisatie.';
    }

    // Card 5: Outdoor spaces
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Buitenruimtes';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag && (card5Tag.textContent.includes('Extérieur') || card5Tag.textContent.includes('Exterior'))) {
        card5Tag.textContent = 'Buiten';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Reiniging van binnenplaatsen, terrassen, banken, buitenvuilnisbakken, voertuigingangen, sneeuwruimen in de winter.';
    }

    // Card 6: Technical rooms
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Technische Lokalen';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag && (card6Tag.textContent.includes('Maintenance') || card6Tag.textContent.includes('Onderhoud'))) {
        card6Tag.textContent = 'Onderhoud';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Onderhoud van stookruimtes, vuilnislokalen, machinekamers, fietsenstallingen, gemeenschappelijke bergruimtes.';
    }
}

// 4. CLEANING FREQUENCY SECTION
const frequencyTitle = document.querySelectorAll('.section-title')[1];
if (frequencyTitle && (frequencyTitle.textContent.includes('Fréquences recommandées') || frequencyTitle.textContent.includes('Recommended Frequencies'))) {
    frequencyTitle.textContent = 'Aanbevolen Frequenties';
}

// Update table header
const tableHeaders = document.querySelectorAll('.table-header div');
if (tableHeaders.length >= 3) {
    tableHeaders[0].textContent = 'Zone';
    tableHeaders[1].textContent = 'Frequentie';
    tableHeaders[2].textContent = 'Geschatte duur';
}

// Update table rows
const tableRows = document.querySelectorAll('.table-row');
if (tableRows.length >= 6) {
    // Row 1
    const row1Divs = tableRows[0].querySelectorAll('div');
    if (row1Divs.length >= 1) {
        row1Divs[0].textContent = 'Inkomhal & Receptie';
    }

    // Row 2
    const row2Divs = tableRows[1].querySelectorAll('div');
    if (row2Divs.length >= 1) {
        row2Divs[0].textContent = 'Liften';
    }

    // Row 3
    const row3Divs = tableRows[2].querySelectorAll('div');
    if (row3Divs.length >= 1) {
        row3Divs[0].textContent = 'Trappenhuizen';
    }

    // Row 4
    const row4Divs = tableRows[3].querySelectorAll('div');
    if (row4Divs.length >= 1) {
        row4Divs[0].textContent = 'Ondergrondse parking';
    }

    // Row 5
    const row5Divs = tableRows[4].querySelectorAll('div');
    if (row5Divs.length >= 1) {
        row5Divs[0].textContent = 'Buitenruimtes';
    }

    // Row 6
    const row6Divs = tableRows[5].querySelectorAll('div');
    if (row6Divs.length >= 1) {
        row6Divs[0].textContent = 'Technische lokalen';
    }
}

// Update frequency badges
const frequencyBadges = document.querySelectorAll('.frequency-badge');
frequencyBadges.forEach(badge => {
    if (badge.classList.contains('frequency-daily')) {
        badge.textContent = 'Dagelijks';
    } else if (badge.classList.contains('frequency-weekly')) {
        badge.textContent = 'Wekelijks';
    } else if (badge.classList.contains('frequency-monthly')) {
        badge.textContent = 'Maandelijks';
    }
});

// Update note
const note = document.querySelector('p[style*="text-align: center"]');
if (note) {
    note.textContent = '* Frequenties zijn aanpasbaar volgens budget en specificiteiten van elk appartementsgebouw.';
}

// 5. PROCESS SECTION
const processTitle = document.querySelectorAll('.section-title')[2];
if (processTitle && (processTitle.textContent.includes('Notre procédure') || processTitle.textContent.includes('Our Condominium Procedure'))) {
    processTitle.textContent = 'Onze Procedure voor Appartementsgebouwen';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Gratis initiële audit';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Volledig bezoek van het appartementsgebouw, zone-identificatie, analyse van specifieke behoeften, ontmoeting met de syndicus.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Maatwerk voorstel';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Opstelling van gepersonaliseerde planning, gedetailleerde offerte per zone, frequentievoorstellen, presentatie aan de raad.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Implementatie';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Toewijzing van toegewijd team, veilige sleuteloverdracht, volledige briefing, start van de diensten.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Regelmatige reiniging';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Interventies volgens vastgestelde planning, respect voor tijdschema\'s, gebruik van geschikte producten, discretie verzekerd.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Kwaliteitscontrole';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Regelmatige controles door een verantwoordelijke, gevalideerde checklists, aanpassingen indien nodig, feedback van bewoners.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Maandelijks rapportering';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Verzending van gedetailleerde rapporten aan de syndicus, foto\'s van interventies, opvolging van verbruik, suggesties voor verbetering.';
}

// 6. ADVANTAGES SECTION
const advantagesTitle = document.querySelectorAll('.section-title')[3];
if (advantagesTitle && (advantagesTitle.textContent.includes('Pourquoi choisir') || advantagesTitle.textContent.includes('Why Choose'))) {
    advantagesTitle.textContent = 'Waarom Kiezen voor Morais Cleaning?';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Advantage 1
    const adv1Title = methodSteps[0].querySelector('h3');
    if (adv1Title) adv1Title.textContent = 'Gecontroleerd personeel';
    const adv1Desc = methodSteps[0].querySelector('p');
    if (adv1Desc) adv1Desc.textContent = 'Al onze agenten worden gescreend (strafregister), specifiek opgeleid en gemachtigd om in appartementsgebouwen te werken.';

    // Advantage 2
    const adv2Title = methodSteps[1].querySelector('h3');
    if (adv2Title) adv2Title.textContent = 'Duidelijk contract';
    const adv2Desc = methodSteps[1].querySelector('p');
    if (adv2Desc) adv2Desc.textContent = 'Gedetailleerd contract met engagement op resultaten, flexibele opzegbedingen, transparante facturatie.';

    // Advantage 3
    const adv3Title = methodSteps[2].querySelector('h3');
    if (adv3Title) adv3Title.textContent = 'Enkel aanspreekpunt';
    const adv3Desc = methodSteps[2].querySelector('p');
    if (adv3Desc) adv3Desc.textContent = 'Een toegewezen verantwoordelijke voor uw appartementsgebouw voor alle communicatie, noodgevallen en aanpassingen.';

    // Advantage 4
    const adv4Title = methodSteps[3].querySelector('h3');
    if (adv4Title) adv4Title.textContent = 'Professionele uitrusting';
    const adv4Desc = methodSteps[3].querySelector('p');
    if (adv4Desc) adv4Desc.textContent = 'Industriële uitrusting (autowasmachines, water/stofzuigers, hogedrukmateriaal) voor optimale resultaten.';
}

// 7. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[4];
if (faqTitle && (faqTitle.textContent.includes('Questions fréquentes') || faqTitle.textContent.includes('Frequently Asked Questions'))) {
    faqTitle.textContent = 'Veelgestelde Vragen - Syndici';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Hoe bepaalt u de kost voor een appartementsgebouw?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'Het tarief is gebaseerd op: oppervlakte gemeenschappelijke ruimtes, aantal verdiepingen/liften, gewenste frequentie, technische specificiteiten en toegankelijkheid. We voorzien een gedetailleerde offerte per post.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Kunt u buiten de piekuren werken?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Absoluut. We passen onze schema\'s aan om verstoring te minimaliseren: vroeg in de ochtend, \'s avonds of in het weekend. We werken ook tijdens de rustige uren overdag.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Hoe behandelt u specifieke verzoeken van mede-eigenaars?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'We implementeren een informatiereportagesysteem via de syndicus. Een gestandaardiseerd formulier maakt centralisatie van verzoeken mogelijk die we verwerken volgens hun urgentie en haalbaarheid.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Biedt u jaarlijkse onderhoudscontracten aan?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Ja, met voordelen: preferentiële tarieven, vastgestelde jaarlijkse planning, prioriteit bij interventies, inbegrepen jaarlijkse revisie en flexibiliteit voor driemaandelijkse aanpassingen.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Hoe wordt het sleutel- en toegangsbeheer geregeld?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'We gebruiken een beveiligd systeem: duplicaat sleutels onder zegel, uitleen/teruggave register, geïdentificeerde agenten en mogelijkheid van elektronische badges indien het gebouw daarmee uitgerust is.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Bent u verzekerd voor mogelijke schade?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Ja, we hebben een professionele aansprakelijkheidsverzekering van €2.500.000, die alle accidentele materiële schade dekt. Certificaat beschikbaar op aanvraag.';
}

// 8. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Een proper appartementsgebouw verhoogt de vastgoedwaarde';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Bied uw bewoners een aangename leefomgeving terwijl u de vastgoedwaarde behoudt. Onze gespecialiseerde dienst past zich aan de specifieke behoeften van elk appartementsgebouw aan.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Quote for condominium') || btn.textContent.includes('Devis pour copropriété')) {
            btn.innerHTML = '<i class="fas fa-building"></i> Offerte voor appartementsgebouw';
        }
        if (btn.textContent.includes('Evaluation visit') || btn.textContent.includes('Visite d\'évaluation')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Evaluatiebezoek';
        }
        if (btn.textContent.includes('Condominium emergency') || btn.textContent.includes('Urgence copropriété')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Spoed appartementsgebouw';
        }
    });

    const ctaInfo = ctaBox.querySelector('p[style*="margin-top: 20px"]');
    if (ctaInfo) {
        ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Gratis audit - Referenties beschikbaar - 7/7 interventies';
    }
}

// Update the simplified quote calculator prompt
const quoteButton = document.querySelector('[onclick*="copropriete"]');
if (quoteButton) {
    quoteButton.removeEventListener('click', quoteButton.onclick);
    quoteButton.addEventListener('click', function() {
        setTimeout(() => {
            const units = prompt("Hoeveel lots in het appartementsgebouw?");
            const surface = prompt("Oppervlakte gemeenschappelijke ruimtes (m²)?");
            if (units && surface) {
                const estimate = Math.round((parseInt(surface) * 0.8) + (parseInt(units) * 5));
                showNotification(`Geschatte offerte: ~€${estimate}/maand voor ${surface}m² en ${units} lots.`, 'info');
            }
        }, 1000);
    });
}

// Update language buttons
updateLanguageButtons('nl');

// console.log('Appartementsgebouw pagina vertaling naar Nederlands voltooid!');
}

function loadDutchCoproprieteTranslation() {
    translateToDutchCopropriete();
}

// Update Dutch function in English file
function updateDutchFunctionForCopropriete() {
    // Update the switchToDutch function in the English file
    // Replace with: function switchToDutch() { translateToDutchCopropriete(); }
}

// Update language buttons function
function updateLanguageButtons(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}

// Toast notification function (keep existing functionality)
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

// Frequency details function
function showFrequencyDetails(frequency) {
    const details = {
        'daily': 'Dagelijkse reiniging voor zones met veel verkeer (inkomhallen, liften)',
        'weekly': 'Wekelijkse reiniging voor regelmatige circulatiezones',
        'monthly': 'Maandelijks onderhoud voor technische en weinig gebruikte zones'
    };

    if (details[frequency]) {
        showNotification(details[frequency], 'info');
    }
}

// Add DOMContentLoaded listener if needed
});
// Exposition pour app.js
window.applyTranslations = translateToDutchCopropriete;
