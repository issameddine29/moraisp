// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nl-translation-office.js - Dutch translation for "Nettoyage de Bureaux"

function translateToDutchOffice() {
    // console.log('Vertalen kantoorreinigingspagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Kantoorreiniging <span class="professional-badge"><i class="fas fa-briefcase"></i> Zakelijke oplossingen</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Een schone en gezonde werkomgeving verhoogt de productiviteit van uw team. Dagelijkse, wekelijkse of occasionele reiniging van uw kantoren in Brussel. Interventies buiten de werkuren.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis entreprise') || btn.textContent.includes('Business quote')) {
            btn.innerHTML = '<i class="fas fa-building"></i> Zakelijke offerte';
        }
        if (btn.textContent.includes('Appeler maintenant') || btn.textContent.includes('Call now')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Nu bellen';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.office-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Flexibele uren';
        features[1].textContent = 'Gecontroleerd personeel';
        features[2].textContent = 'Ecologische producten';
        features[3].textContent = 'Kwaliteitschecklists';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Een onberispelijke professionele omgeving';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'In een kantoorruimte is netheid niet alleen een esthetische kwestie. Het beïnvloedt rechtstreeks de productiviteit, het welzijn van de werknemers en het imago van uw bedrijf.';
        descParagraphs[1].textContent = 'Onze kantoorreinigingsdienst is ontworpen voor moderne bedrijven. We grijpen discreet in buiten de werkuren om uw activiteiten niet te verstoren. Onze teams zijn opgeleid in de specificiteiten van kantoorruimtes.';
    }

    const productivityItem = document.querySelector('.productivity-item');
    if (productivityItem) {
        const productivityTitle = productivityItem.querySelector('h3');
        if (productivityTitle) {
            productivityTitle.innerHTML = '<i class="fas fa-chart-line"></i> Verhoogde productiviteit';
        }
        const productivityText = productivityItem.querySelector('p');
        if (productivityText) {
            productivityText.textContent = 'Volgens studies kan een schone werkomgeving de productiviteit van werknemers tot 15% verhogen. Vermindering van ziekteverzuim dankzij betere hygiëne.';
        }
    }

    // 3. OFFICE TYPES SECTION
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && (sectionTitle.textContent.includes('Solutions pour tous types d\'entreprises') || sectionTitle.textContent.includes('Solutions for all types of businesses'))) {
        sectionTitle.textContent = 'Oplossingen voor alle soorten bedrijven';
    }

    // Client cards (office types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Open spaces
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Open ruimtes';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Grote ruimtes';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Dagelijkse reiniging van gedeelde kantoren, werkstations, vergaderzalen en gemeenschappelijke ruimtes. Geoptimaliseerd beheer van grote volumes.';
    }

    // Card 2: Individual offices
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Individuele kantoren';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Management & directie';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Delicate reiniging van directiekantoren, respect voor vertrouwelijke documenten, aandacht voor persoonlijke voorwerpen en specifieke apparatuur.';
    }

    // Card 3: Meeting rooms
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Vergaderzalen';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Collaboratieve ruimtes';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Ochtendvoorbereiding van zalen, reiniging na gebruik, lediging van vuilnisbakken, behandeling van whiteboards, opslag van materiaal.';
    }

    // Card 4: Break areas
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Pauzeruimtes';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Keukens & cafetaria\'s';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Reiniging van bedrijfskeukens, koffiemachines, koelkasten, magnetrons. Verwijdering van voedselafval, bevoorrading van reinigingsproducten.';
    }

    // Card 5: Professional sanitary facilities
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Professionele sanitairvoorzieningen';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Toiletten & kleedkamers';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Dagelijkse reiniging en desinfectie, bijvullen van verbruiksartikelen (zeep, papier), onderhoud van handdrogers en dispensers.';
    }

    // Card 6: Reception areas
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Ontvangstruimtes';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Receptie & lobby\'s';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Eerste indruk voor uw klanten. Reiniging van lobby\'s, receptie, liften, glazen deuren. Ruimtes altijd onberispelijk presentabel.';
    }
}

// 4. INCLUDED SERVICES SECTION
const includedTitle = document.querySelectorAll('.section-title')[1];
if (includedTitle && (includedTitle.textContent.includes('Notre processus qualité') || includedTitle.textContent.includes('Our quality process'))) {
    includedTitle.textContent = 'Ons kwaliteitsproces';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Gratis initiële audit';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Bezoek van uw panden, analyse van specifieke behoeften, opstelling van een persoonlijk reinigingsplan en nauwkeurige schatting.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Geoptimaliseerde planning';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Opstelling van een interventieschema aangepast aan uw openingsuren. Nachtelijke, ochtend- of weekendinterventies volgens uw behoeften.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Oppervlakreiniging';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Volledig afstoffen van bureaus, computerstations, telefoons. Reiniging van schermen, toetsenborden, muizen met aangepaste producten.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Vloeronderhoud';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Stofzuigen van tapijten, wassen van harde vloeren, specifieke behandeling volgens bekleding. Wekelijkse grondige reiniging.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Afvalbeheer';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Dagelijkse lediging van vuilnisbakken, selectieve sortering conform Brusselse regelgeving, afvoer naar erkende centra.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Kwaliteitscontrole';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Systematische controlechecklist, maandelijkse interventierapporten, driemaandelijkse opvolgingsvergaderingen met de aangewezen verantwoordelijke.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && (equipmentTitle.textContent.includes('Équipement professionnel pour bureaux') || equipmentTitle.textContent.includes('Professional equipment for offices'))) {
    equipmentTitle.textContent = 'Professionele uitrusting voor kantoren';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Stille HEPA-stofzuigers';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Professionele uitrusting met laag geluidsniveau en HEPA-filtratie om 99,97% van allergenen en fijne deeltjes te vangen.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'Automatische schrobzuigers';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Professionele machines voor grote ruimtes. Wassen, spoelen en drogen in één beweging voor snelle en effectieve interventie.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Specifieke kantoorproducten';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Volledig assortiment aangepaste producten: schermreinigers, toetsenbordontsmetters, geurverdrijvende producten zonder agressieve geurstoffen.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Microvezeluitrusting';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Hoogwaardige microvezeldoeken voor effectieve reiniging zonder chemicaliën. Verschillende kleuren om kruisbesmetting te voorkomen.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && (faqTitle.textContent.includes('Questions entreprises fréquentes') || faqTitle.textContent.includes('Frequently asked business'))) {
    faqTitle.textContent = 'Veelgestelde zakelijke vragen';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Wat zijn uw interventie-uren voor kantoren?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'We grijpen vooral in buiten kantooruren: \'s avonds (vanaf 18u), \'s nachts of zeer vroeg in de ochtend (voor 8u). Voor 24/7-bedrijven stellen we een specifiek schema op op basis van activiteitspieken.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Biedt u maandelijkse of jaarlijkse contracten aan?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Ja, we bieden maandelijkse onderhoudscontracten aan met preferentiële tarieven. Deze contracten omvatten een vast aantal bezoeken per week, levering van verbruiksartikelen (vuilniszakken, producten) en periodieke aanvullende diensten (ramen reinigen, tapijtshampoo).';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Hoe beheert u de veiligheid en toegang tot onze panden?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Meerdere opties: beveiligd sleutelsysteem met dubbele verificatie, toegang via tijdelijk badge, of aanwezigheid van een bewaker. Al onze werknemers zijn gecontroleerd (blanco strafblad) en ondertekenen strikte vertrouwelijkheidsclausules. We verstrekken professionele aansprakelijkheidsverzekeringscertificaten.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Wat doet u met vertrouwelijk afval?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Voor vertrouwelijke documenten bieden we een specifieke beveiligde vernietigingsdienst aan. Documenten worden in verzegelde zakken geplaatst en toevertrouwd aan een gecertificeerde leverancier die een vernietigingscertificaat verstrekt. Deze dienst kan in uw contract worden opgenomen.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Biedt u aanvullende diensten aan?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Ja, naast reguliere reiniging bieden we aan: ramen reinigen (binnen en buiten), tapijtshampoo, reiniging van jaloezieën en gordijnen, grondige desinfectie, onderhoud van kamerplanten en klein onderhoud (lampen vervangen, kleine reparaties).';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Hoe werkt de facturatie voor bedrijven?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'We factureren maandelijks op basis van een vast pakket of een gedetailleerde offerte. Al onze facturen bevatten BTW (21%) met volledige wettelijke vermeldingen. Voor btw-plichtige bedrijven is de btw terugvorderbaar. We kunnen facturen in meerdere talen (FR, NL, EN) opstellen indien nodig.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Investeer in een gezonde werkomgeving';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Schone kantoren verbeteren de productiviteit, verminderen ziekteverzuim en versterken het professionele imago van uw bedrijf. Vertrouw het onderhoud van uw panden toe aan experts.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit') || btn.textContent.includes('Free quote')) {
            btn.innerHTML = '<i class="fas fa-file-contract"></i> Gratis offerte';
        }
        if (btn.textContent.includes('Audit sans engagement') || btn.textContent.includes('No-obligation audit')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Vrijblijvende audit';
        }
        if (btn.textContent.includes('Service commercial') || btn.textContent.includes('Commercial service')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Commerciële dienst';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Korting voor jaarcontracten - Gratis proefperiode van één week';
}

// Update notification text
const officeBtn = document.querySelector('.btn-primary');
if (officeBtn) {
    officeBtn.addEventListener('click', function() {
        localStorage.setItem('officeService', 'kantoren');
        // Update notification function if exists
        if (typeof showNotification === 'function') {
            showNotification('Zakelijke offerteaanvraag geregistreerd. Onze commerciële dienst neemt binnen 24 uur contact met u op.', 'success');
        }
    });
}

// Update language buttons
updateLanguageButtons('nl');

// console.log('Kantoorreinigingspagina vertaling naar Nederlands voltooid!');
}

function loadDutchTranslationOffice() {
    translateToDutchOffice();
}
// Exposition pour app.js
window.applyTranslations = translateToDutchOffice;
