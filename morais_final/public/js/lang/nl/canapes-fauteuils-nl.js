// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nl-translation-sofas.js - Dutch manual translation for "Canapés & Fauteuils"

function translateToDutchSofas() {
    // console.log('Vertalen sofa pagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Reiniging Banken & Fauteuils <span class="sofa-badge"><i class="fas fa-couch"></i> Thuis</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Geef nieuw leven aan uw banken, fauteuils en zitmeubels met onze professionele reinigingsdienst thuis in Brussel. Vlekverwijdering, volledige desinfectie, anti-mijt behandeling en ontgeuring.';
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit') || btn.textContent.includes('Free quote')) {
            btn.innerHTML = '<i class="fas fa-couch"></i> Gratis offerte';
        }
        if (btn.textContent.includes('Contact rapide') || btn.textContent.includes('Quick contact')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Snel contact';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.sofa-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Bij u thuis';
        features[1].textContent = 'Snel drogen';
        features[2].textContent = 'Resultaatgarantie';
        features[3].textContent = 'Ecologisch';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Dieptereiniging voor gestoffeerde meubelen';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Uw bank of fauteuil verzamelt stof, mijten, vlekken en geuren na verloop van tijd. Onze professionele reinigingsdienst gebruikt de heetwaterextractiemethode die diep in de vezels doordringt voor complete reiniging.';
        descParagraphs[1].textContent = 'We behandelen alle soorten stoffen: katoen, fluweel, linnen, leer, kunstleder, microvezel en technische stoffen. Ons team brengt alle benodigde apparatuur (professionele extractor, aangepaste producten, bescherming) direct bij u thuis.';
    }

    const allergyItem = document.querySelector('.allergy-item');
    if (allergyItem) {
        const allergyTitle = allergyItem.querySelector('h3');
        if (allergyTitle) {
            allergyTitle.innerHTML = '<i class="fas fa-exclamation-circle"></i> Allergieën & mijten';
        }
        const allergyText = allergyItem.querySelector('p');
        if (allergyText) {
            allergyText.textContent = 'Onze anti-mijt behandelingen elimineren 99% van de allergenen, ideaal voor gevoelige personen, astmalijders of met huisdieren.';
        }
    }

    // Before/After labels
    const beforeLabel = document.querySelector('.before-label');
    if (beforeLabel) beforeLabel.textContent = 'Voor';

    const afterLabel = document.querySelector('.after-label');
    if (afterLabel) afterLabel.textContent = 'Na';

    // 3. TYPES OF FURNITURE SECTION
    const furnitureTitle = document.querySelector('.section-title');
    if (furnitureTitle && (furnitureTitle.textContent.includes('Quels meubles') || furnitureTitle.textContent.includes('Which furniture'))) {
        furnitureTitle.textContent = 'Welke meubelen reinigen wij?';
    }

    // Client cards (furniture types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Hoekbanken
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Hoekbanken';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Stof';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Volledige reiniging van zitvlakken, rugleuningen, armleuningen en kussens. Behandeling van naden en hoeken.';
    }
    const card1Price = clientCards[0].querySelector('.price-badge');
    if (card1Price) card1Price.textContent = 'Vanaf €95';

    // Card 2: Leren banken
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Leren banken';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Echt leer';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Reiniging en voeding van leer, anti-barst behandeling, UV-bescherming, vlekverwijdering.';
    }
    const card2Price = clientCards[1].querySelector('.price-badge');
    if (card2Price) card2Price.textContent = 'Vanaf €110';

    // Card 3: Clubfauteuils
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Clubfauteuils';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Leer';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Reiniging van clubfauteuils, bergères, relaxfauteuils, inclusief mechanisme en afneembare kussens.';
    }
    const card3Price = clientCards[2].querySelector('.price-badge');
    if (card3Price) card3Price.textContent = 'Vanaf €65';

    // Card 4: Stoelen & Zitmeubels
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Stoelen & Zitmeubels';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Gestoffeerde zittingen';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Reiniging van eetkamerstoelen, bureaustoelen, banken en gestoffeerde krukken.';
    }
    const card4Price = clientCards[3].querySelector('.price-badge');
    if (card4Price) card4Price.textContent = 'Vanaf €25/stuk';

    // Card 5: Slaapbanken
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Slaapbanken';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Uitschuifbaar';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Volledige reiniging inclusief mechanisme, matras en verschillende zitposities.';
    }
    const card5Price = clientCards[4].querySelector('.price-badge');
    if (card5Price) card5Price.textContent = 'Vanaf €120';

    // Card 6: Kussens & Poufs
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Kussens & Poufs';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Decoratief';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Reiniging van decoratieve kussens, poufs, plaids en woonkamer textielaccessoires.';
    }
    const card6Price = clientCards[5].querySelector('.price-badge');
    if (card6Price) card6Price.textContent = 'Vanaf €15/stuk';
}

// 4. CLEANING PROCESS SECTION
const processTitle = document.querySelectorAll('.section-title')[1];
if (processTitle && (processTitle.textContent.includes('Notre processus') || processTitle.textContent.includes('Our process'))) {
    processTitle.textContent = 'Ons proces in 6 stappen';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Gratis diagnose';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Stofevaluatie, vlekkenidentificatie, gepersonaliseerd advies en transparante offerte zonder verbintenis.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Voorbereiding';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Volledig stofzuigen om stof en haren te verwijderen, stofzuigen van hoeken, bescherming van aangrenzende zones.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Voorbehandeling';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Toepassing van specifieke oplossingen om hardnekkig vuil te vlekken en los te maken voor dieptereiniging.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Extractie reiniging';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Gebruik van heetwaterextractor die reinigingsoplossing injecteert en vuil in één operatie opzuigt.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Complementaire behandelingen';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Toepassing van anti-mijt, ontgeurders en anti-vlek bescherming volgens uw behoeften.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Drogen & Afwerking';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Gebruik van professionele ventilatoren voor snel drogen (2-6u), resultaatcontrole, onderhoudsadvies.';
}

// 5. ADVANTAGES SECTION
const advantagesTitle = document.querySelectorAll('.section-title')[2];
if (advantagesTitle && (advantagesTitle.textContent.includes('Pourquoi nous choisir') || advantagesTitle.textContent.includes('Why choose us'))) {
    advantagesTitle.textContent = 'Waarom voor ons kiezen?';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Advantage 1
    const adv1Title = methodSteps[0].querySelector('h3');
    if (adv1Title) adv1Title.textContent = 'Thuisdienst';
    const adv1Desc = methodSteps[0].querySelector('p');
    if (adv1Desc) adv1Desc.textContent = 'Wij komen bij u thuis met alle apparatuur. U hoeft uw meubelen niet te verplaatsen.';

    // Advantage 2
    const adv2Title = methodSteps[1].querySelector('h3');
    if (adv2Title) adv2Title.textContent = 'Snel drogen';
    const adv2Desc = methodSteps[1].querySelector('p');
    if (adv2Desc) adv2Desc.textContent = 'Uw bank is binnen enkele uren bruikbaar dankzij onze professionele apparatuur.';

    // Advantage 3
    const adv3Title = methodSteps[2].querySelector('h3');
    if (adv3Title) adv3Title.textContent = 'Tevredenheidsgarantie';
    const adv3Desc = methodSteps[2].querySelector('p');
    if (adv3Desc) adv3Desc.textContent = 'Als u niet tevreden bent met het resultaat, komen wij gratis terug om de behandeling over te doen.';

    // Advantage 4
    const adv4Title = methodSteps[3].querySelector('h3');
    if (adv4Title) adv4Title.textContent = 'Ecologische producten';
    const adv4Desc = methodSteps[3].querySelector('p');
    if (adv4Desc) adv4Desc.textContent = 'We gebruiken biologisch afbreekbare, niet-toxische en milieuvriendelijke oplossingen.';
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
    if (faq1Btn) faq1Btn.textContent = 'Hoe lang duurt het reinigen van een bank?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'Voor een 3-zitsbank: 1u30 tot 2u actieve reiniging. Drogen varieert van 2 tot 6 uur afhankelijk van stof en ventilatie. We brengen ventilatoren mee om het proces te versnellen.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Beschadigt water het stof?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Nee, onze extractiemethode gebruikt een gecontroleerde hoeveelheid heet water die onmiddellijk wordt opgezogen. We testen altijd eerst een discrete zone en passen de kracht aan volgens het stof.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Kunt u alle vlekken verwijderen?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'We verwijderen 95% van de courante vlekken (voeding, dranken, inkt, vet). Sommige oude of chemische vlekken kunnen een spoor achterlaten, maar worden aanzienlijk verminderd.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Moet ik iets voorbereiden voor uw bezoek?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Gewoon de toegang tot de bank vrijmaken en de afneembare kussens verwijderen. We brengen alle nodige apparatuur en bescherming mee.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Zijn producten gevaarlijk voor kinderen of huisdieren?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Onze producten zijn niet-toxisch en biologisch afbreekbaar. Eenmaal droog is de bank perfect veilig. We raden gewoon aan te wachten op volledige droging voor gebruik.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Biedt u pakketten aan voor meerdere stukken?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Ja, we bieden gereduceerde tarieven aan voor het reinigen van meerdere banken/fauteuils, of voor vaste klanten. Vraag ons een gepersonaliseerde offerte.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Geef nieuw leven aan uw favoriete meubelen!';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Profiteer van onze voordelige tarieven voor professionele reiniging die vlekken, mijten en geuren elimineert. Uw bank als nieuw, direct bij u thuis.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit') || btn.textContent.includes('Free quote')) {
            btn.innerHTML = '<i class="fas fa-couch"></i> Gratis offerte';
        }
        if (btn.textContent.includes('Prendre rendez-vous') || btn.textContent.includes('Make appointment')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Afspraak maken';
        }
        if (btn.textContent.includes('Urgence tache') || btn.textContent.includes('Stain emergency')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Vlek noodgeval';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Beschikbaar 7/7 - Snelle hulp voor recente vlekken';
}

// 8. UPDATE PRICE ESTIMATOR FUNCTION FOR DUTCH
updateDutchPriceEstimator();

// console.log('Vertaling naar Nederlands voltooid!');

// Update language switcher
updateLanguageButtons('nl');
}

function updateDutchPriceEstimator() {
    // Update price estimator function for Dutch
    window.estimatePrice = function(type, size) {
        const prices = {
            'bank-2': 75,
            'bank-3': 95,
            'bank-hoek': 125,
            'fauteuil': 65,
            'stoel': 25,
            'kussen': 15
        };
        return prices[type] || 0;
    };

    // Update notification texts for sofas in Dutch
    const sofaBtns = document.querySelectorAll('[onclick*="canapes"]');
    sofaBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            localStorage.setItem('serviceType', 'banken-fauteuils');
            setTimeout(() => {
                const type = prompt("Welk type meubel wilt u laten reinigen?\n1. Bank\n2. Fauteuil\n3. Stoel\n4. Anders");
                const pieces = prompt("Hoeveel zitplaatsen/stukken?");
                if (type && pieces) {
                    showNotification(`Offerte in voorbereiding voor ${pieces} ${type.toLowerCase()}...`, 'success');
                }
            }, 1000);
        });
    });
}
// Exposition pour app.js
window.applyTranslations = translateToDutchSofas;
