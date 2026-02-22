// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// nl-translation-conciergerie.js - Dutch manual translation for "Conciergerie"

function translateToDutchConciergerie() {
    // console.log('Vertalen concierge pagina naar Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Premium Conciërge Dienst <span class="concierge-badge"><i class="fas fa-key"></i> Op maat</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Bespaar tijd en vereenvoudig uw leven met onze complete conciërge dienst in Brussel. Schoonmaak, boodschappen, strijken, evenementen organisatie, huisdierenoppas: wij regelen alles voor u.';
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.hero-actions .btn');
    heroButtons.forEach(btn => {
        if (btn.textContent.includes('Planifier un audit') || btn.textContent.includes('Schedule audit')) {
            btn.innerHTML = '<i class="fas fa-calendar-check"></i> Audit plannen';
        }
        if (btn.textContent.includes('Parler à un conseiller') || btn.textContent.includes('Talk to advisor')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Adviseur spreken';
        }
    });

    // Hero features
    const features = document.querySelectorAll('.concierge-feature span');
    if (features.length >= 4) {
        features[0].textContent = 'Tijdwinst gegarandeerd';
        features[1].textContent = 'Geverifieerd personeel';
        features[2].textContent = 'Dienst op maat';
        features[3].textContent = 'Beschikbaar 7/7';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Uw persoonlijke assistent in Brussel';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Tussen werk, gezin en dagelijkse verplichtingen is het moeilijk alles te beheren. Onze conciërge dienst geeft u de luxe van tijd door alle tijdrovende taken van uw dagelijks leven over te nemen.';
        descParagraphs[1].textContent = 'Of u nu een overbelaste professional, een actief gezin of een senior bent die zijn zelfstandigheid wil behouden, ons team van professionele conciërges past zich aan uw specifieke behoeften aan met discretie en efficiëntie.';
    }

    const timeItem = document.querySelector('.time-item');
    if (timeItem) {
        const timeTitle = timeItem.querySelector('h3');
        if (timeTitle) {
            timeTitle.innerHTML = '<i class="fas fa-chart-line"></i> Investering rendement';
        }
        const timeText = timeItem.querySelector('p');
        if (timeText) {
            timeText.textContent = 'Onze dienst bespaart u gemiddeld 10-15 uur per week. Gebruik deze tijd voor wat echt telt: familie, hobby\'s, persoonlijke ontwikkeling.';
        }
    }

    // 3. SERVICES SECTION
    const servicesTitle = document.querySelector('.section-title');
    if (servicesTitle && (servicesTitle.textContent.includes('Nos services conciergerie') || servicesTitle.textContent.includes('Our concierge services'))) {
        servicesTitle.textContent = 'Onze conciërge diensten';
    }

    // Service cards
    const serviceCards = document.querySelectorAll('.service-card');
    if (serviceCards.length >= 6) {
        // Card 1: Surveillance
        const card1Title = serviceCards[0].querySelector('h3');
        if (card1Title) card1Title.textContent = 'Toezicht & Bezoeken';
        const card1Desc = serviceCards[0].querySelector('p');
        if (card1Desc) {
            card1Desc.textContent = 'Regelmatige bezoeken aan uw pand, controle van openingen/sluitingen, simulatie van aanwezigheid, gedetailleerd rapport met foto\'s.';
        }

        // Card 2: Pakketten
        const card2Title = serviceCards[1].querySelector('h3');
        if (card2Title) card2Title.textContent = 'Pakket Ontvangst';
        const card2Desc = serviceCards[1].querySelector('p');
        if (card2Desc) {
            card2Desc.textContent = 'Ontvangst en veilige opslag van uw pakketten, aangetekende post, retouren beheren in uw afwezigheid, gedetailleerde inventaris.';
        }

        // Card 3: Planten
        const card3Title = serviceCards[2].querySelector('h3');
        if (card3Title) card3Title.textContent = 'Planten Onderhoud';
        const card3Desc = serviceCards[2].querySelector('p');
        if (card3Desc) {
            card3Desc.textContent = 'Gepersonaliseerd water geven voor elke plant, bemesting, rotatie voor optimaal licht, stof verwijderen van bladeren.';
        }

        // Card 4: Dieren
        const card4Title = serviceCards[3].querySelector('h3');
        if (card4Title) card4Title.textContent = 'Huisdieren Oppas';
        const card4Desc = serviceCards[3].querySelector('p');
        if (card4Desc) {
            card4Desc.textContent = 'Dagelijkse bezoeken voor uw huisdieren, voeding, wandelingen, veterinaire zorgen indien nodig, regelmatig foto\'s verstuurd.';
        }

        // Card 5: Technisch
        const card5Title = serviceCards[4].querySelector('h3');
        if (card5Title) card5Title.textContent = 'Technisch Beheer';
        const card5Desc = serviceCards[4].querySelector('p');
        if (card5Desc) {
            card5Desc.textContent = 'Controle van waterlekken, toezicht op verwarming/airconditioning, beheer van dringende storingen, coördinatie met vakmensen.';
        }

        // Card 6: Schoonmaak
        const card6Title = serviceCards[5].querySelector('h3');
        if (card6Title) card6Title.textContent = 'Huishoudelijk Onderhoud';
        const card6Desc = serviceCards[5].querySelector('p');
        if (card6Desc) {
            card6Desc.textContent = 'Regelmatige reiniging, verluchting van kamers, afvalbeheer, lakens vervangen, optimale netheid behouden.';
        }
    }

    // 4. PROCESS SECTION
    const processTitle = document.querySelectorAll('.section-title')[1];
    if (processTitle && (processTitle.textContent.includes('Comment ça marche') || processTitle.textContent.includes('How it works'))) {
        processTitle.textContent = 'Hoe werkt het?';
    }

    const methodSteps = document.querySelectorAll('.method-step');
    if (methodSteps.length >= 4) {
        // Step 1
        const step1Title = methodSteps[0].querySelector('h3');
        if (step1Title) step1Title.textContent = '1. Planning';
        const step1Desc = methodSteps[0].querySelector('p');
        if (step1Desc) step1Desc.textContent = 'Eerste contact, evaluatie van uw behoeften, creatie van een persoonlijke planning, ondertekening van het contract.';

        // Step 2
        const step2Title = methodSteps[1].querySelector('h3');
        if (step2Title) step2Title.textContent = '2. Sleutel Overdracht';
        const step2Desc = methodSteps[1].querySelector('p');
        if (step2Desc) step2Desc.textContent = 'Veilige overdracht van sleutels (beveiligde kluis of dubbele sleutel), gedetailleerde briefing over uw instructies.';

        // Step 3
        const step3Title = methodSteps[2].querySelector('h3');
        if (step3Title) step3Title.textContent = '3. Interventie';
        const step3Desc = methodSteps[2].querySelector('p');
        if (step3Desc) step3Desc.textContent = 'Uitvoering van diensten volgens planning, regelmatige communicatie, foto\'s indien gevraagd.';

        // Step 4
        const step4Title = methodSteps[3].querySelector('h3');
        if (step4Title) step4Title.textContent = '4. Rapport & Evaluatie';
        const step4Desc = methodSteps[3].querySelector('p');
        if (step4Desc) step4Desc.textContent = 'Gedetailleerd rapport bij uw terugkeer, teruggave van sleutels, ervaringsfeedback, facturatie.';
    }

    // 5. SECURITY SECTION
    const securityTitle = document.querySelectorAll('.section-title')[2];
    if (securityTitle && (securityTitle.textContent.includes('Notre engagement sécurité') || securityTitle.textContent.includes('Our security commitment'))) {
        securityTitle.textContent = 'Onze veiligheidsbetrokkenheid';
    }

    const includedItems = document.querySelectorAll('.included-item');
    if (includedItems.length >= 4) {
        // Security 1
        const sec1Title = includedItems[0].querySelector('h3');
        if (sec1Title) sec1Title.textContent = 'Geverifieerd personeel';
        const sec1Desc = includedItems[0].querySelector('p');
        if (sec1Desc) sec1Desc.textContent = 'Al onze conciërges worden zorgvuldig geselecteerd, met antecedentenonderzoek en specifieke training.';

        // Security 2
        const sec2Title = includedItems[1].querySelector('h3');
        if (sec2Title) sec2Title.textContent = 'Contract & Verzekering';
        const sec2Desc = includedItems[1].querySelector('p');
        if (sec2Desc) sec2Desc.textContent = 'Gedetailleerd contract met vertrouwelijkheidsovereenkomst en beroepsaansprakelijkheidsverzekering.';

        // Security 3
        const sec3Title = includedItems[2].querySelector('h3');
        if (sec3Title) sec3Title.textContent = 'Veiligheid van sleutels';
        const sec3Desc = includedItems[2].querySelector('p');
        if (sec3Desc) sec3Desc.textContent = 'Systeem van dubbele sleutel of beveiligde kluis. Volledige traceerbaarheid van elke interventie.';

        // Security 4
        const sec4Title = includedItems[3].querySelector('h3');
        if (sec4Title) sec4Title.textContent = 'Transparantie';
        const sec4Desc = includedItems[3].querySelector('p');
        if (sec4Desc) sec4Desc.textContent = 'Gedetailleerde rapporten met foto\'s (op aanvraag), logboek, historiek van interventies.';
    }

    // 6. FAQ SECTION
    const faqTitle = document.querySelectorAll('.section-title')[3];
    if (faqTitle && (faqTitle.textContent.includes('Questions fréquentes') || faqTitle.textContent.includes('Frequently asked'))) {
        faqTitle.textContent = 'Veelgestelde vragen';
    }

    const faqItems = document.querySelectorAll('.faq-item');
    if (faqItems.length >= 4) {
        // FAQ 1
        const faq1Btn = faqItems[0].querySelector('.faq-question');
        if (faq1Btn) faq1Btn.textContent = 'Hoe garandeert u de veiligheid van mijn sleutels?';
        const faq1Answer = faqItems[0].querySelector('.faq-answer p');
        if (faq1Answer) faq1Answer.textContent = 'Ons beveiligingssysteem is meerdere niveaus:';
        const faq1List = faqItems[0].querySelectorAll('.faq-answer li');
        if (faq1List.length >= 5) {
            faq1List[0].innerHTML = '<strong>Beveiligde kluis</strong> : Opslag in onze 24/7 beveiligde lokalen';
            faq1List[1].innerHTML = '<strong>Dubbele sleutel systeem</strong> : Mogelijkheid volgens uw voorkeur';
            faq1List[2].innerHTML = '<strong>Traceerbaarheid</strong> : Elke sleutelmanipulatie wordt geregistreerd';
            faq1List[3].innerHTML = '<strong>Verzekering</strong> : Volledige dekking bij verlies';
            faq1List[4].innerHTML = '<strong>Systematische terugkeer</strong> : Sleutels worden persoonlijk teruggegeven bij uw terugkeer';
        }

        // FAQ 2
        const faq2Btn = faqItems[1].querySelector('.faq-question');
        if (faq2Btn) faq2Btn.textContent = 'Kan ik diensten wijzigen tijdens mijn afwezigheid?';
        const faq2Answer = faqItems[1].querySelector('.faq-answer p');
        if (faq2Answer) faq2Answer.textContent = 'Ja, wij zijn flexibel:';
        const faq2List = faqItems[1].querySelectorAll('.faq-answer li');
        if (faq2List.length >= 5) {
            faq2List[0].innerHTML = '<strong>Direct contact</strong> : Uw toegewezen referent beschikbaar via telefoon/WhatsApp';
            faq2List[1].innerHTML = '<strong>Wijzigingen mogelijk</strong> : Toevoegen of verwijderen van diensten volgens uw behoeften';
            faq2List[2].innerHTML = '<strong>Noodgevallen</strong> : Beheer van onvoorziene gebeurtenissen (waterlek, storing, etc.)';
            faq2List[3].innerHTML = '<strong>Communicatie</strong> : Regelmatige updates indien gewenst';
            faq2List[4].innerHTML = '<strong>Aangepaste facturatie</strong> : Alleen de uitgevoerde diensten worden gefactureerd';
        }

        // FAQ 3
        const faq3Btn = faqItems[2].querySelector('.faq-question');
        if (faq3Btn) faq3Btn.textContent = 'Biedt u diensten aan voor bedrijven?';
        const faq3Answer = faqItems[2].querySelector('.faq-answer p');
        if (faq3Answer) faq3Answer.textContent = 'Absoluut, onze diensten passen zich aan voor professionals:';
        const faq3List = faqItems[2].querySelectorAll('.faq-answer li');
        if (faq3List.length >= 5) {
            faq3List[0].innerHTML = '<strong>Professionele lokalen</strong> : Kantoren, winkels, showrooms';
            faq3List[1].innerHTML = '<strong>Specifieke diensten</strong> : Water geven binnenplanten, schoonmaak, postbeheer';
            faq3List[2].innerHTML = '<strong>Flexibele uren</strong> : Interventies in de avond of weekend';
            faq3List[3].innerHTML = '<strong>Facturatie</strong> : Professionele offerte met aftrekbare BTW';
            faq3List[4].innerHTML = '<strong>Jaarcontract</strong> : Mogelijkheid van maandelijks of jaarlijks contract';
        }

        // FAQ 4
        const faq4Btn = faqItems[3].querySelector('.faq-question');
        if (faq4Btn) faq4Btn.textContent = 'Hoe verloopt het eerste contact?';
        const faq4Answer = faqItems[3].querySelector('.faq-answer p');
        if (faq4Answer) faq4Answer.textContent = 'Ons opnameproces is eenvoudig en veilig:';
        const faq4List = faqItems[3].querySelectorAll('.faq-answer li');
        if (faq4List.length >= 5) {
            faq4List[0].innerHTML = '<strong>Eerste contact</strong> : Via telefoon, e-mail of online formulier';
            faq4List[1].innerHTML = '<strong>Gratis bezoek</strong> : Ontmoeting bij uw huis/lokalen om uw behoeften te evalueren';
            faq4List[2].innerHTML = '<strong>Gepersonaliseerde offerte</strong> : Gedetailleerd voorstel zonder verplichting';
            faq4List[3].innerHTML = '<strong>Contract ondertekening</strong> : Opstellen van contract en instructies';
            faq4List[4].innerHTML = '<strong>Briefing</strong> : Overdracht van belangrijke informatie voor uw vertrek';
        }
    }

    // 7. FINAL CTA SECTION
    const ctaBox = document.querySelector('.cta-box');
    if (ctaBox) {
        const ctaTitle = ctaBox.querySelector('h2');
        if (ctaTitle) ctaTitle.textContent = 'Vertrek met een gerust hart';

        const ctaText = ctaBox.querySelector('p');
        if (ctaText) ctaText.textContent = 'Vertrouw ons het beheer van uw huis of professionele ruimte toe tijdens uw afwezigheid';

        const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
        ctaButtons.forEach(btn => {
            if (btn.textContent.includes('Planifier un service') || btn.textContent.includes('Schedule service')) {
                btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Dienst plannen';
            }
            if (btn.textContent.includes('Demander un devis') || btn.textContent.includes('Request quote')) {
                btn.innerHTML = '<i class="fas fa-file-alt"></i> Offerte aanvragen';
            }
            if (btn.textContent.includes('Appeler maintenant') || btn.textContent.includes('Call now')) {
                btn.innerHTML = '<i class="fas fa-phone"></i> Nu bellen';
            }
        });

        const ctaInfo = ctaBox.querySelector('p:last-child');
        if (ctaInfo) ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Eerste audit gratis | Dienst beschikbaar 7/7 | Personalisatie volgens uw behoeften';
    }

    // console.log('Vertaling naar Nederlands voltooid!');

    // Update language switcher
    updateLanguageButtons('nl');
}
// Exposition pour app.js
window.applyTranslations = translateToDutchConciergerie;
