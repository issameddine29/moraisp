// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nl-translation-commercial.js - Dutch translation for "Nettoyage Locaux Commerciaux"

function translateToDutchCommercial() {
    // console.log('Vertalen commerciële pagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Reiniging Commerciële Ruimtes <span class="business-badge"><i class="fas fa-briefcase"></i> Professioneel</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Regelmatig professioneel onderhoud van uw commerciële ruimtes in Brussel. Kantoren, winkels, restaurants, winkelcentra. Een schone omgeving voor uw klanten en personeel.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis commercial') || btn.textContent.includes('Commercial quote')) {
            btn.innerHTML = '<i class="fas fa-building"></i> Commerciële offerte';
        }
        if (btn.textContent.includes('Appeler maintenant') || btn.textContent.includes('Call now')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Nu bellen';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.commercial-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Reguliere contracten';
        features[1].textContent = 'Flexibele uren';
        features[2].textContent = 'Ecologische producten';
        features[3].textContent = 'Professionele verzekering';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Een onberispelijke professionele omgeving';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Het imago van uw bedrijf hangt af van de netheid van uw panden. Wij bieden op maat gemaakte commerciële reinigingsoplossingen aangepast aan uw specifieke behoeften en openingsuren.';
        descParagraphs[1].textContent = 'Ons team, opgeleid in commerciële reinigingstechnieken, grijpt in buiten de werkuren om uw activiteit niet te verstoren. We gebruiken professionele apparatuur en effectieve, milieuvriendelijke producten.';
    }

    const businessItem = document.querySelector('.business-item');
    if (businessItem) {
        const businessTitle = businessItem.querySelector('h3');
        if (businessTitle) {
            businessTitle.innerHTML = '<i class="fas fa-chart-line"></i> Impact op uw imago';
        }
        const businessText = businessItem.querySelector('p');
        if (businessText) {
            businessText.textContent = 'Schone panden verhogen de klanttevredenheid met 40% en verbeteren de productiviteit van uw team. Investeer in netheid, investeer in uw succes.';
        }
    }

    // 3. COMMERCIAL TYPES SECTION
    const travauxTitle = document.querySelector('.section-title');
    if (travauxTitle && (travauxTitle.textContent.includes('Nos spécialités commerciales') || travauxTitle.textContent.includes('Our commercial specialties'))) {
        travauxTitle.textContent = 'Onze commerciële specialiteiten';
    }

    // Client cards (commercial types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 5) {
    // Card 1: Offices
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Bedrijfskantoren';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Bedrijven & startups';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Dagelijkse of wekelijkse reiniging van kantoren, vergaderzalen, gemeenschappelijke ruimtes en professionele sanitairvoorzieningen.';
    }

    // Card 2: Retail
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Winkels';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Boutiques & winkels';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Reiniging van etalages, vloeren, paskamers en verkoopruimtes. Interventies buiten openingsuren.';
    }

    // Card 3: Restaurants
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Restaurants & Horeca';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Voedselveiligheid';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Professionele reiniging van keukens, eetzalen, sanitair. Ontvetting, desinfectie conform AFSCA-normen.';
    }

    // Card 4: Shopping centers
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Winkelcentra';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Grote oppervlakken';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Onderhoud van gangen, openbare toiletten, roltrappen, rustzones. Op maat gemaakt interventieschema.';
    }

    // Card 5: Gyms
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Fitnesscentra & sportscholen';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Sportfaciliteiten';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Desinfectie van machines, vloeren, kleedkamers en douches. Bestrijding van bacteriën en schimmels in vochtige omgevingen.';
    }
}

// 4. INCLUDED SERVICES SECTION
const includedTitle = document.querySelectorAll('.section-title')[1];
if (includedTitle && (includedTitle.textContent.includes('Notre offre complète') || includedTitle.textContent.includes('Our complete business'))) {
    includedTitle.textContent = 'Ons volledige zakelijke aanbod';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Gratis initiële audit';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Bezoek van uw panden, behoefteanalyse, opstelling van een persoonlijk reinigingsplan volgens uw activiteit.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Contract op maat';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Aangepaste frequentie (dagelijks, wekelijks, occasioneel). Flexibele uren volgens uw openingsbeperkingen.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Vloerreiniging';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Stofzuigen, wassen, polijsten volgens de vloerbedekking (tapijt, parket, tegels, beton). Specifieke behandelingen.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Professionele sanitairvoorzieningen';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Grondige reiniging van toiletten, urinoirs, wasbakken. Bijvullen van verbruiksartikelen (zeep, papier).';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Gemeenschappelijke ruimtes';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Onderhoud van bedrijfskeukens, pauzeruimtes, gangen, liften, ontvangsthallen en recepties.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Opvolging en rapportage';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Regelmatig overleg met de verantwoordelijke, controlechecklists, interventierapporten, reactiviteit op verzoeken.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && (equipmentTitle.textContent.includes('Solutions techniques professionnelles') || equipmentTitle.textContent.includes('Professional technical'))) {
    equipmentTitle.textContent = 'Professionele technische oplossingen';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Monoborstels en zelfrijdende schrobzuigers';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Professionele machines voor grote ruimtes. Wassen, spoelen, drogen in één beweging. Waterbesparing.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'HST-apparatuur';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Hogetemperatuur-stoomreiniging voor delicate oppervlakken. Eliminatie van bacteriën zonder chemicaliën.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Commerciële stofzuigers';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Krachtig en stil. HEPA-filtratie voor allergenen. Geschikt voor tapijten en harde oppervlakken.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Ecologische producten';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Volledig assortiment Ecolabel-gecertificeerde producten. Effectief, veilig voor gebruikers en milieu.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && (faqTitle.textContent.includes('Questions commerciales fréquentes') || faqTitle.textContent.includes('Frequently asked business'))) {
    faqTitle.textContent = 'Veelgestelde zakelijke vragen';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Wat zijn uw interventie-uren?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'We grijpen vooral in buiten de openingsuren (\'s avonds, \'s nachts, weekend) om uw activiteit niet te verstoren. Voor 24/7-open inrichtingen stellen we een specifiek schema op.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Biedt u jaarcontracten aan?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Ja, we bieden jaarlijkse onderhoudscontracten aan met preferentiële tarieven. Deze contracten omvatten een vast aantal bezoeken per week/maand, met mogelijkheid tot aanvullende occasionele diensten.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Zijn uw werknemers verzekerd?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Absoluut. Al onze werknemers zijn gedekt door professionele aansprakelijkheidsverzekering, arbeidsongevallenverzekering en garantie voor zaaksschade. Wij verstrekken verzekeringsattesten op aanvraag.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Hoe beheert u toegangssleutels?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Verschillende opties: beveiligd sleutelsysteem met dubbele verificatie, toegang via bewaking, of aanwezigheid van een verantwoordelijke ter plaatse. We ondertekenen vertrouwelijkheidsovereenkomsten betreffende de toegang tot uw panden.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Biedt u "all-inclusive"-pakketten aan?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Ja, ons "Business Premium"-pakket omvat: dagelijkse reiniging, levering van verbruiksartikelen (zeep, papier, vuilniszakken), kleine onderhoudsreparaties en twee grote jaarlijkse reinigingen (ramen, tapijten).';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Wat is uw interventiegebied?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Wij dekken de hele regio Brussel-Hoofdstad en omliggende gemeenten. Voor grote oppervlakken buiten Brussel bestuderen we elke aanvraag geval per geval met aangepaste verplaatsingskosten.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Een onberispelijke professionele omgeving';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Vertrouw het onderhoud van uw commerciële panden toe aan professionals. Schone ruimtes verbeteren het imago van uw bedrijf, de klanttevredenheid en het welzijn van uw teams.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Demander un devis') || btn.textContent.includes('Request a quote')) {
            btn.innerHTML = '<i class="fas fa-file-contract"></i> Offerte aanvragen';
        }
        if (btn.textContent.includes('Audit gratuit') || btn.textContent.includes('Free audit')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Gratis audit';
        }
        if (btn.textContent.includes('Service commercial') || btn.textContent.includes('Commercial service')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Commerciële dienst';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Korting voor jaarcontracten - Vereenvoudigde maandelijkse facturatie';
}

// Update notification text
const commercialBtn = document.querySelector('.btn-primary');
if (commercialBtn) {
    commercialBtn.addEventListener('click', function() {
        localStorage.setItem('commercialService', 'commerciële-ruimtes');
        // Update notification function if exists
        if (typeof showNotification === 'function') {
            showNotification('Commerciële offerteaanvraag geregistreerd. Onze verkoopsafdeling neemt binnen 24 uur contact met u op.', 'success');
        }
    });
}

// Update language buttons
updateLanguageButtons('nl');

// console.log('Commerciële pagina vertaling naar Nederlands voltooid!');
}

function loadDutchTranslationCommercial() {
    translateToDutchCommercial();
}
// Exposition pour app.js
window.applyTranslations = translateToDutchCommercial;
