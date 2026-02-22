// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nl-translation-home.js - Dutch translation for "Nettoyage Maison & Appartement"

function translateToDutchHome() {
    // console.log('Vertalen woningreinigingspagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Huis & Appartement Reiniging <span class="trust-badge"><i class="fas fa-home"></i> Vertrouwd Personeel</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Regelmatige schoonmaak, grondige reiniging of voorjaarsschoonmaak voor uw huis of appartement in Brussel. Geniet van een onberispelijk interieur zonder moeite. Zorgvuldig geselecteerd personeel en ecologische producten.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Devis ménage') || btn.textContent.includes('Cleaning quote')) {
            btn.innerHTML = '<i class="fas fa-broom"></i> Schoonmaak offerte';
        }
        if (btn.textContent.includes('Appeler maintenant') || btn.textContent.includes('Call now')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Nu bellen';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.home-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Gecontroleerd personeel';
        features[1].textContent = 'Ecologische producten';
        features[2].textContent = 'Sleutel-op-de-deur service';
        features[3].textContent = 'Aansprakelijkheidsverzekering';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Uw huis in goede handen';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Tussen werk, gezin en dagelijkse verplichtingen wordt tijd vinden voor grondige schoonmaak vaak een onmogelijke missie. Daar komen wij in beeld.';
        descParagraphs[1].textContent = 'Onze residentiële schoonmaakdienst bevrijdt u van deze taak. We passen onze interventie aan aan uw levensstijl: regelmatig, occasioneel of seizoensgebonden. Elk lid van ons team is opgeleid in residentiële schoonmaaktechnieken en geselecteerd op betrouwbaarheid.';
    }

    const familyItem = document.querySelector('.family-item');
    if (familyItem) {
        const familyTitle = familyItem.querySelector('h3');
        if (familyTitle) {
            familyTitle.innerHTML = '<i class="fas fa-heart"></i> Voor drukke gezinnen';
        }
        const familyText = familyItem.querySelector('p');
        if (familyText) {
            familyText.textContent = 'We begrijpen de behoeften van gezinnen. Exclusief gebruik van niet-toxische producten, respect voor persoonlijke bezittingen en uren aangepast aan uw schema.';
        }
    }

    // 3. RESIDENTIAL TYPES SECTION
    const sectionTitle = document.querySelector('.section-title');
    if (sectionTitle && (sectionTitle.textContent.includes('Nos formules résidentielles') || sectionTitle.textContent.includes('Our residential packages'))) {
        sectionTitle.textContent = 'Onze residentiële formules';
    }

    // Client cards (residential types)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Regular cleaning
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Regelmatige schoonmaak';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag) {
        card1Tag.textContent = 'Wekelijks / Tweewekelijks';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Regelmatig onderhoud van uw woning. Stofzuigen, afstoffen, oppervlaktereiniging, keuken en sanitair. Flexibel schema.';
    }

    // Card 2: Seasonal cleaning
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Seizoensgebonden grote schoonmaak';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag) {
        card2Tag.textContent = 'Lente / Herfst';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Grondige reiniging 1-2 keer per jaar. Ramen, kasten, gordijnen, toestellen, moeilijk bereikbare plekken.';
    }

    // Card 3: After moving
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Na verhuizing';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag) {
        card3Tag.textContent = 'Intrek / Uittrek';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Volledige opknapbeurt van oud of nieuw huis. Grondige reiniging om waarborg terug te krijgen of te verwelkomen in een schone ruimte.';
    }

    // Card 4: Senior assistance
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Hulp voor senioren';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag) {
        card4Tag.textContent = 'Aangepaste dienst';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Lichte schoonmaak aangepast aan ouderen. Bijzondere aandacht voor specifieke behoeften, zachte producten en vertrouwensrelatie.';
    }

    // Card 5: Families with pets
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Gezinnen met huisdieren';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag) {
        card5Tag.textContent = 'Huisdierharen & allergenen';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Gespecialiseerde reiniging voor huizen met huisdieren. Verwijdering van dierenharen, geurbehandeling, producten aangepast voor veiligheid van huisdieren.';
    }

    // Card 6: Seasonal rental
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Seizoensverhuur';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag) {
        card6Tag.textContent = 'Airbnb / Verhuur';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Schoonmaakdienst tussen elke verhuur. Linnenwissel, bijvullen, complete checklist om nieuwe huurders te verwelkomen.';
    }
}

// 4. INCLUDED SERVICES SECTION
const includedTitle = document.querySelectorAll('.section-title')[1];
if (includedTitle && (includedTitle.textContent.includes('Notre procédure résidentielle') || includedTitle.textContent.includes('Our residential procedure'))) {
    includedTitle.textContent = 'Onze residentiële procedure';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Eerste contact & offerte';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Beoordeling van uw behoeften, bezoek indien nodig, gedetailleerde offerte zonder verplichting. Bespreking van uw voorkeuren en specifieke vereisten.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Toewijzing van een toegewezen persoon';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Wij wijzen u een professional toe die uw contactpersoon wordt. Zelfde persoon bij elk bezoek voor een vertrouwensrelatie.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Reiniging leefruimtes';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Woonkamer, eetkamer, slaapkamers: volledig afstoffen, stofzuigen/tapijt, licht opruimen, oppervlaktebehandeling.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Keuken en badkamers';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Reiniging van aanrechten, toestellen, gootstenen. Sanitair: toiletten, douche, bad, spiegels, blinkende kranen.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Afrondingen en details';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Afvoer van vuilnis, klein opruimen, glasoppervlakbehandeling, laatste controle van over het hoofd geziene zones.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Feedback en aanpassingen';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Na elke interventie controleren we uw tevredenheid. Aanpassing van diensten indien nodig om precies aan uw verwachtingen te voldoen.';
}

// 5. EQUIPMENT SECTION
const equipmentTitle = document.querySelectorAll('.section-title')[2];
if (equipmentTitle && (equipmentTitle.textContent.includes('Notre approche respectueuse') || equipmentTitle.textContent.includes('Our respectful approach'))) {
    equipmentTitle.textContent = 'Onze respectvolle aanpak';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Equipment 1
    const eq1Title = methodSteps[0].querySelector('h3');
    if (eq1Title) eq1Title.textContent = 'Ecologische producten';
    const eq1Desc = methodSteps[0].querySelector('p');
    if (eq1Desc) eq1Desc.textContent = 'Uitsluitend Ecolabel-gecertificeerde producten, niet-toxisch, zonder synthetische geurstoffen. Veilig voor kinderen, huisdieren en gevoelige personen.';

    // Equipment 2
    const eq2Title = methodSteps[1].querySelector('h3');
    if (eq2Title) eq2Title.textContent = 'Zachte methodes';
    const eq2Desc = methodSteps[1].querySelector('p');
    if (eq2Desc) eq2Desc.textContent = 'Handmatige reinigingstechnieken die efficiëntie zonder agressiviteit prioriteren. Behoud van uw oppervlakken en uitrusting.';

    // Equipment 3
    const eq3Title = methodSteps[2].querySelector('h3');
    if (eq3Title) eq3Title.textContent = 'Opgeleid personeel';
    const eq3Desc = methodSteps[2].querySelector('p');
    if (eq3Desc) eq3Desc.textContent = 'Onze teams zijn opgeleid in de specificiteiten van residentiële reiniging: delicate, discretie, respect voor privacy en persoonlijke bezittingen.';

    // Equipment 4
    const eq4Title = methodSteps[3].querySelector('h3');
    if (eq4Title) eq4Title.textContent = 'Professionele uitrusting';
    const eq4Desc = methodSteps[3].querySelector('p');
    if (eq4Desc) eq4Desc.textContent = 'Stofzuigers met HEPA-filtratie, kwaliteitsmicrovezels, uitrusting aangepast aan elk type oppervlak voor onberispelijke resultaten.';
}

// 6. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[3];
if (faqTitle && (faqTitle.textContent.includes('Questions résidentielles fréquentes') || faqTitle.textContent.includes('Frequently asked residential'))) {
    faqTitle.textContent = 'Veelgestelde residentiële vragen';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'Moet ik aanwezig zijn tijdens de schoonmaak?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'Nee, het is niet nodig. Veel van onze klanten laten ons sleutels of een duplicaat. We hebben een beveiligd sleutelsysteem en ondertekenen een vertrouwelijkheidsovereenkomst. U kunt ook aanwezig zijn als u dat verkiest.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Brengt u uw eigen producten en materiaal mee?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Ja, we brengen alles mee wat nodig is: ecologische producten, professionele stofzuiger, microvezels, emmers, enz. Als u specifieke producten heeft die u verkiest, gebruiken we die graag.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'Hoe waarborgt u de veiligheid van mijn bezittingen?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'Al onze werknemers zijn gecontroleerd (blanco strafblad), verzekerd met professionele aansprakelijkheidsverzekering en ondertekenen een vertrouwelijkheidsclausule. We zijn ook verzekerd voor eventuele zaaksschade.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Kan ik specifieke taken aanvragen?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Absoluut! Elke schoonmaak is gepersonaliseerd. U kunt ons een lijst met prioriteiten of specifieke zones geven om te behandelen. We stellen samen een reinigingsplan op aangepast aan uw behoeften.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'Wat gebeurt er als ik niet tevreden ben?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'Uw tevredenheid is gegarandeerd. Als iets u niet bevalt, neem dan binnen 24 uur contact met ons op en we komen gratis terug om het probleem recht te zetten. We hechten groot belang aan de vertrouwensrelatie.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Biedt u voordelige maandelijkse pakketten aan?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Ja, we bieden maandelijkse pakketten aan met tot 15% korting afhankelijk van de frequentie. Deze pakketten omvatten doorgaans: regelmatige schoonmaak + een maandelijkse aanvullende dienst (ramen, koelkast, enz.).';
}

// 7. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'Herwin tijd om te leven';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Bevrijd uzelf van schoonmaakklussen en geniet van uw vrije tijd. Een schoon huis verbetert uw dagelijks welzijn en levenskwaliteit.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis gratuit') || btn.textContent.includes('Free quote')) {
            btn.innerHTML = '<i class="fas fa-home"></i> Gratis offerte';
        }
        if (btn.textContent.includes('Planifier une visite') || btn.textContent.includes('Schedule a visit')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Bezoek plannen';
        }
        if (btn.textContent.includes('Nous appeler') || btn.textContent.includes('Call us')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Bel ons';
        }
    });

    const ctaInfo = ctaBox.querySelector('p:last-child');
    if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Eerste gratis proef voor nieuwe klanten - Tevredenheid gegarandeerd';
}

// Update notification text
const homeBtn = document.querySelector('.btn-primary');
if (homeBtn) {
    homeBtn.addEventListener('click', function() {
        localStorage.setItem('homeService', 'huis-appartement');
        // Update notification function if exists
        if (typeof showNotification === 'function') {
            showNotification('Schoonmaak offerteaanvraag geregistreerd. We nemen binnen 24 uur contact met u op om een bezoek in te plannen.', 'success');
        }
    });
}

// Update language buttons
updateLanguageButtons('nl');

// console.log('Woningreinigingspagina vertaling naar Nederlands voltooid!');
}

function loadDutchTranslationHome() {
    translateToDutchHome();
}
// Exposition pour app.js
window.applyTranslations = translateToDutchHome;
