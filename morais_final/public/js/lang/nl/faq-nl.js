/**
* NEDERLANDSE VERTALING - FAQ PAGINA
* Volledige vertaling van alle FAQ-inhoud
*/

window.applyTranslations = function() {
    // console.log('🌍 Toepassing van Nederlandse vertalingen voor FAQ-pagina...');

    try {
        // === TITLE & META ===
        document.title = 'FAQ | Veelgestelde Vragen - Morais Cleaning';

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = 'Antwoorden op veelgestelde vragen over onze professionele schoonmaakdiensten. Tarieven, diensten, beschikbaarheid.';
        }

        // === PAGE TITLE ===
        const pageTitle = document.querySelector('h1.display-4');
        if (pageTitle) pageTitle.textContent = 'Veelgestelde Vragen (FAQ)';

        const lead = document.querySelector('.lead');
        if (lead) lead.textContent = 'Vind snel antwoorden op uw vragen';

        // === FAQ QUESTIONS ===
        const faqButtons = document.querySelectorAll('.accordion-button');
        const faqAnswers = document.querySelectorAll('.accordion-body');

        // Vraag 1
        if (faqButtons[0]) {
            const textNode = Array.from(faqButtons[0].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Wat zijn uw schoonmaaktarieven?';
        }
        if (faqAnswers[0]) {
            faqAnswers[0].textContent = 'Onze tarieven variëren afhankelijk van het type dienst, de te reinigen oppervlakte en de frequentie van interventie. Neem contact met ons op voor een gratis, gepersonaliseerde offerte die is afgestemd op uw specifieke behoeften.';
        }

        // Vraag 2
        if (faqButtons[1]) {
            const textNode = Array.from(faqButtons[1].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Bent u beschikbaar in het weekend en op feestdagen?';
        }
        if (faqAnswers[1]) {
            faqAnswers[1].textContent = 'Ja! We zijn 24/7 beschikbaar, inclusief weekends en feestdagen. We passen ons aan uw schema aan om de impact op uw activiteit te minimaliseren.';
        }

        // Vraag 3
        if (faqButtons[2]) {
            const textNode = Array.from(faqButtons[2].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Gebruikt u milieuvriendelijke producten?';
        }
        if (faqAnswers[2]) {
            faqAnswers[2].textContent = 'Absoluut! We gebruiken hoofdzakelijk gecertificeerde milieuvriendelijke producten die het milieu en uw gezondheid respecteren. Al onze producten voldoen aan de Europese normen.';
        }

        // Vraag 4
        if (faqButtons[3]) {
            const textNode = Array.from(faqButtons[3].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Levert u apparatuur en producten?';
        }
        if (faqAnswers[3]) {
            faqAnswers[3].textContent = 'Ja, we leveren alle professionele apparatuur en benodigde producten. Onze apparatuur is van hoge kwaliteit en aangepast aan elk type oppervlak.';
        }

        // Vraag 5
        if (faqButtons[4]) {
            const textNode = Array.from(faqButtons[4].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Bent u verzekerd?';
        }
        if (faqAnswers[4]) {
            faqAnswers[4].textContent = 'Ja, we hebben een uitgebreide beroepsaansprakelijkheidsverzekering die al onze interventies dekt. U kunt uw ruimtes met een gerust hart aan ons toevertrouwen.';
        }

        // Vraag 6
        if (faqButtons[5]) {
            const textNode = Array.from(faqButtons[5].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Wat is de reactietijd?';
        }
        if (faqAnswers[5]) {
            faqAnswers[5].textContent = 'We reageren binnen 24 uur voor standaard diensten. Voor urgente verzoeken kunnen we binnen enkele uren interveniëren, afhankelijk van onze beschikbaarheid.';
        }

        // Vraag 7
        if (faqButtons[6]) {
            const textNode = Array.from(faqButtons[6].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Werkt u in België en Zwitserland?';
        }
        if (faqAnswers[6]) {
            faqAnswers[6].textContent = 'We werken hoofdzakelijk in Brussel en omgeving in België. Voor specifieke verzoeken buiten ons gebruikelijke gebied, neem contact met ons op om de mogelijkheden te bespreken.';
        }

        // Vraag 8
        if (faqButtons[7]) {
            const textNode = Array.from(faqButtons[7].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Hoe werkt het eerste contact?';
        }
        if (faqAnswers[7]) {
            faqAnswers[7].textContent = 'Neem gewoon contact met ons op via telefoon, e-mail of via ons contactformulier. We bespreken uw behoeften, geven u een gratis schatting en plannen indien nodig een plaatsbezoek om u een nauwkeurige offerte te geven.';
        }

        // console.log('Nederlandse vertalingen succesvol toegepast (FAQ)');

    } catch (error) {
        // console.error('❌ Fout bij toepassen van Nederlandse vertalingen (FAQ):', error);
    }
};
