// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nettoyage-vitres-nl.js - Traduction néerlandaise pour "Nettoyage de Vitres"

function translateToDutchWindows() {
    // console.log('Vertalen van raamreinigingspagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Raamreiniging <span class="expert-badge"><i class="fas fa-window-maximize"></i> Hoogte-expert</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Professionals in raamreiniging in Brussel. Binnen, buiten, panoramische ramen, gevels, gebouwen. Professionele veiligheidsuitrusting voor alle hoogtes. Onberispelijke resultaten zonder strepen.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis vitres') || btn.textContent.includes('Window quote')) {
            btn.innerHTML = '<i class="fas fa-spray-can"></i> Offerte ramen';
        }
        if (btn.textContent.includes('Appeler maintenant') || btn.textContent.includes('Call now')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Nu bellen';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.window-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Veiligheidsuitrusting';
        features[1].textContent = 'Streepvrij';
        features[2].textContent = 'Alle hoogtes';
        features[3].textContent = 'Direct resultaat';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Kristalheldere ramen in alle veiligheid';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Raamreiniging is niet alleen een esthetische kwestie. Schone ramen verhogen het natuurlijke licht, verbeteren de thermische isolatie en verlengen de levensduur van de ramen.';
        descParagraphs[1].textContent = 'Ons gespecialiseerd raamreinigingsteam werkt met professionele uitrusting aangepast aan elke situatie: telescopische stokken, hoogwerkers, veiligheidsharnassen voor hoogtewerk. We gebruiken technieken en producten die een streepvrij resultaat garanderen.';
    }

    const safetyItem = document.querySelector('.safety-item');
    if (safetyItem) {
        const safetyTitle = safetyItem.querySelector('h3');
        if (safetyTitle) {
            safetyTitle.innerHTML = '<i class="fas fa-shield-alt"></i> Veiligheid eerst';
        }
        const safetyText = safetyItem.querySelector('p');
        if (safetyText) {
            safetyText.textContent = 'Onze technici zijn opgeleid voor hoogtewerk, uitgerust met gecertificeerde veiligheidsharnassen en volgen strikt de veiligheidsprotocollen. Specifieke burgerlijke aansprakelijkheidsverzekering voor hoogtewerk.';
        }
    }

    // 3. WINDOW TYPES SECTION
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && (sectionTitle.textContent.includes('Nos spécialités vitres') || sectionTitle.textContent.includes('Our window specialties'))) {
        sectionTitle.textContent = 'Onze raamspecialiteiten';
    }

    // Client cards (window types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Particuliers
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Particulieren';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Huis & appartement';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Volledige reiniging van ramen binnen en buiten. Vensters, glazen deuren, veranda\'s, panoramische ramen. Seizoenskaarten beschikbaar.';
    }

    // Card 2: Bureaux & entreprises
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Kantoren & bedrijven';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Glazen gevels';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Reiniging van glazen gevels, etalageruiten, gordijngevels. Nachtelijke interventies om de activiteit niet te verstoren.';
    }

    // Card 3: Commerces & boutiques
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Winkels & boetieks';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Etalages & ingangen';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Onberispelijke reiniging van etalages om klanten aan te trekken. Verwijdering van vingerafdrukken, stickers, regenresten. Frequentie aangepast aan uw sector.';
    }

    // Card 4: Centres commerciaux
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Winkelcentra';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Grote glasoppervlakken';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Regelmatig onderhoud van enorme glasoppervlakken, koepels, glazen daken, lichtstraten. Specifieke uitrusting voor zeer grote hoogtes.';
    }

    // Card 5: Immeubles résidentiels
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Residentiële gebouwen';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Mede-eigendommen';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Reiniging van gevels van gebouwen, glazen hallen, panoramische liften. Jaarcontracten voor syndici van mede-eigendommen.';
    }

    // Card 6: Vitres difficiles d'accès
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Moeilijk bereikbare ramen';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Hoogtespecialist';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Glazen daken, daklichten, ventilatieroosters, dakramen, serres. Veiligheidsuitrusting aangepast aan elke complexe situatie.';
    }
}

// 4. METHODOLOGY SECTION
const includedTitle = document.querySelectorAll('.section-title')[1];
if (includedTitle && (includedTitle.textContent.includes('Notre méthodologie professionnelle') || includedTitle.textContent.includes('Our professional methodology'))) {
    includedTitle.textContent = 'Onze professionele methodologie';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Diagnose & offerte';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Evaluatie van te behandelen oppervlakken, type beglazing, toegankelijkheid. Gedetailleerde offerte met vermelding van specifiek benodigde uitrusting (hoogwerker, telescopische stokken, etc.).';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Voorbereiding & bescherming';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Bescherming van vloeren en aangrenzende oppervlakken. Installatie van veiligheidsuitrusting. Voorbereiding van specifieke reinigingsoplossingen volgens het type beglazing.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Binnenreiniging';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Aanbrengen van de reinigingsoplossing op alle binnenoppervlakken. Verwijdering van strepen, stof, vingerafdrukken. Reiniging van kozijnen en dorpels.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Buitenreiniging';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Gebruik van telescopische stokken of hoogte-uitrusting naargelang de behoeften. Verwijdering van buitenvervuiling: regen, luchtvervuiling, vogeluitwerpselen.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Drogen & afwerking';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Afnemen met professionele rakelkrabbers en microvezeldoeken. Controle op afwezigheid van strepen, krassen of resten. Perfect droog resultaat voor kristalhelder effect.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Eindcontrole & opruimen';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Inspectie onder verschillende lichtinvalshoeken. Verwijdering van bescherming, opruimen van werkzones. Validatie met de klant voor vertrek.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && (equipmentTitle.textContent.includes('Équipement haute technologie') || equipmentTitle.textContent.includes('High-tech equipment'))) {
    equipmentTitle.textContent = 'Hoogtechnologische uitrusting';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Telescopische stokken';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Professionele stokken tot 18 meter. Beveiligd vergrendelingssysteem, lichtheid en wendbaarheid. Bereikt hoge ramen zonder ladder.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'Veiligheidsuitrusting';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Gecertificeerde veiligheidsharnassen, touwen, hoogwerkers, speciale ladders. Voortdurende opleiding in hoogwerktechnieken.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Waterzuiveringssysteem';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Waterzuiveringsunit door omgekeerde osmose. 99,9% puur water dat geen strepen of minerale afzettingen op ramen achterlaat.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Professionele producten';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Specifieke reinigingsoplossingen voor elk type beglazing: enkel glas, dubbel glas, behandeld glas (anti-reflectie, zelfreinigend).';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && (faqTitle.textContent.includes('Questions vitres fréquentes') || faqTitle.textContent.includes('Frequent window questions'))) {
    faqTitle.textContent = 'Veelgestelde vragen over ramen';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Wat is de beste periode om ramen te laten reinigen?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'Lente en herfst zijn ideaal omdat gematigde temperaturen een optimale droging mogelijk maken. We treden echter het hele jaar door op, zelfs in de winter met onze antivriesoplossingen. Vermijd gewoon regenachtige of winderige dagen.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Hoe reinigt u ramen op hogere verdiepingen zonder steigers?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'We gebruiken vooral professionele telescopische stokken (tot 18m) en hoogwerkers naargelang de behoeften. Voor zeer hoge gebouwen beschikken we over touwtechnieken met al het nodige veiligheidsmateriaal.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Reinigt u ook kozijnen en horren?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Ja, onze complete dienst omvat: reiniging van ramen (binnen en buiten), reiniging van kozijnen (alu, hout, PVC), horren, zonwering en gordijnen indien aanwezig, en vensterbanken. We bieden "all-in" pakketten of à la carte aan volgens uw behoeften.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Hoe lang is een offerte voor raamreiniging geldig?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Onze offertes zijn 30 dagen geldig. Na deze termijn kan een nieuw bezoek nodig zijn om te controleren of er geen wijzigingen zijn (nieuwe ramen, gewijzigde toegang, etc.). Voor jaarcontracten met vast schema is de prijs 12 maanden gegarandeerd.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Biedt u pakketten aan voor mede-eigendommen?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Absoluut. We bieden jaarcontracten aan voor syndici van mede-eigendommen, over het algemeen met 2 tot 4 bezoeken per jaar naargelang de behoeften. Deze pakketten omvatten vaak reiniging van gemeenschappelijke glasoppervlakken, ingangshallen en soms gevels. Degressieve tarieven volgens aantal verdiepingen en ramen.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Wat gebeurt er als het regent op de geplande dag van interventie?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'We volgen het weer 48 uur op voorhand. Bij voorspelde regen contacteren we u om de interventie uit te stellen naar een gunstige datum, zonder kosten. Eenmaal ter plaatse, als de regen begint, onderbreken we de werken en spreken we een nieuwe afspraak af.';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Herontdek de helderheid van uw ruimtes';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Schone ramen transformeren onmiddellijk de sfeer van een plaats. Meer helderheid, een vrij uitzicht en een gevoel van vergrote ruimte. Vertrouw op professionals met uitrusting en opleiding.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit') || btn.textContent.includes('Free quote')) {
            btn.innerHTML = '<i class="fas fa-window-restore"></i> Gratis offerte';
        }
        if (btn.textContent.includes('Planifier une visite') || btn.textContent.includes('Schedule a visit')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Bezoek plannen';
        }
        if (btn.textContent.includes('Urgence vitres') || btn.textContent.includes('Window emergency')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Ramennoodgeval';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Korting voor jaarcontracten - Eerste proef tevreden of terugbetaald';
}

// Update notification text
const windowBtn = document.querySelector('.btn-primary');
if (windowBtn) {
    windowBtn.addEventListener('click', function() {
        localStorage.setItem('windowService', 'ramen');
        if (typeof showNotification === 'function') {
            showNotification('Offerteaanvraag voor ramen geregistreerd. We contacteren u binnen 24 uur voor een bezoek.', 'success');
        }
    });
}

// Update language buttons
updateLanguageButtons('nl');

// console.log('Raamreinigingspagina vertaling naar Nederlands voltooid!');
}

function loadDutchTranslationWindows() {
    translateToDutchWindows();
}
// Exposition pour app.js
window.applyTranslations = translateToDutchWindows;
