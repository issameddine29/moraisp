/**
* TRADUCTION NÉERLANDAISE - INDEX.HTML
* Traduction manuelle complète
*/

window.applyTranslations = function() {
    // console.log('🌍 Toepassing van Nederlandse vertalingen voor index.html...');

    try {
        // === TITLE & META ===
        document.title = 'Morais Cleaning - Professionele Schoonmaak in Brussel';

        // === HERO SECTION ===
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) heroTitle.textContent = 'Professionele Schoonmaak in Brussel';

        const heroSubtitle = document.querySelector('.hero p');
        if (heroSubtitle) heroSubtitle.textContent = 'Hoogwaardige schoonmaakdiensten voor bedrijven en particulieren. Vertrouw op ons ervaren team voor een onberispelijke omgeving.';

        const devisBtn = document.querySelector('.hero .devis-btn');
        if (devisBtn) devisBtn.textContent = 'Snelle Offerte';

        const contactBtn = document.querySelector('.hero .contact-btn');
        if (contactBtn) contactBtn.textContent = 'Contacteer Ons';

        // === ABOUT SECTION ===
        const aboutTitle = document.querySelector('.about .section-title h2');
        if (aboutTitle) aboutTitle.textContent = 'Over Morais Cleaning';

        const aboutSubtitle = document.querySelector('.about h3');
        if (aboutSubtitle) aboutSubtitle.textContent = 'Uitmuntendheid in schoonmaak sinds meer dan 10 jaar';

        const aboutIntro = document.querySelector('.about-text > p');
        if (aboutIntro) aboutIntro.textContent = 'Morais Cleaning is een professioneel schoonmaakbedrijf gevestigd in Brussel, gespecialiseerd in het leveren van hoogwaardige schoonmaakdiensten voor bedrijven, kantoren, winkels en particulieren.';

        // Values
        const valueItems = document.querySelectorAll('.value-item');
        if (valueItems[0]) {
            valueItems[0].querySelector('h4').textContent = 'Gegarandeerde Kwaliteit';
            valueItems[0].querySelector('p').textContent = 'We gebruiken professionele producten en bewezen methoden voor onberispelijke resultaten.';
        }
        if (valueItems[1]) {
            valueItems[1].querySelector('h4').textContent = 'Gekwalificeerd Personeel';
            valueItems[1].querySelector('p').textContent = 'Ons team is opgeleid, ervaren en volgt strikte procedures voor elke interventie.';
        }
        if (valueItems[2]) {
            valueItems[2].querySelector('h4').textContent = '7/7 Beschikbaarheid';
            valueItems[2].querySelector('p').textContent = 'We passen ons aan uw schema aan, zelfs buiten kantooruren om verstoringen te minimaliseren.';
        }
        if (valueItems[3]) {
            valueItems[3].querySelector('h4').textContent = 'Verzekerde Veiligheid';
            valueItems[3].querySelector('p').textContent = 'Al onze producten zijn geselecteerd op hun effectiviteit en respect voor het milieu en gebruikers.';
        }

        const signature = document.querySelector('.signature');
        if (signature) signature.textContent = '"Uitmuntendheid in schoonmaak, dienst na dienst"';

        // === SERVICES SECTION ===
        const servicesTitle = document.querySelector('.services .section-title h2');
        if (servicesTitle) servicesTitle.textContent = 'Onze Diensten';

        // Categories
        const categoryBtns = document.querySelectorAll('.services-categories .category-btn');
        if (categoryBtns[0]) categoryBtns[0].textContent = 'Professioneel';
        if (categoryBtns[1]) categoryBtns[1].textContent = 'Residentieel';
        if (categoryBtns[2]) categoryBtns[2].textContent = 'Gespecialiseerd';

        // Service category titles
        const catTitles = document.querySelectorAll('.service-category-title');
        if (catTitles[0]) catTitles[0].textContent = 'Professionele Diensten';
        if (catTitles[1]) catTitles[1].textContent = 'Residentiële Diensten';
        if (catTitles[2]) catTitles[2].textContent = 'Gespecialiseerde Diensten';

        // "Savoir plus" buttons
        const learnMoreBtns = document.querySelectorAll('.savoir-plus-btn');
        learnMoreBtns.forEach(btn => {
            btn.textContent = 'Meer Weten';
        });

        // Service cards - Professional
        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards[0]) {
            serviceCards[0].querySelector('h3').textContent = 'Kantoorschoonmaak';
            serviceCards[0].querySelector('p').textContent = 'Dagelijks of occasioneel onderhoud van uw werkruimtes voor een professionele en gezonde omgeving.';
        }
        if (serviceCards[1]) {
            serviceCards[1].querySelector('h3').textContent = 'Gemeenschappelijke Ruimtes';
            serviceCards[1].querySelector('p').textContent = 'Reiniging van gemeenschappelijke ruimtes, inkomhallen, trappen en liften voor flatgebouwen.';
        }
        if (serviceCards[2]) {
            serviceCards[2].querySelector('h3').textContent = 'Conciërgedienst';
            serviceCards[2].querySelector('p').textContent = 'Volledige conciërgediensten inclusief schoonmaak, onderhoud en kleine reparaties.';
        }

        // === REALISATION SECTION ===
        const realisationsTitle = document.querySelector('.realisations .section-title h2');
        if (realisationsTitle) realisationsTitle.textContent = 'Onze Projecten';

        const realisationsSubtitle = document.querySelector('.realisations .section-title p');
        if (realisationsSubtitle) realisationsSubtitle.textContent = 'Ontdek enkele van onze recente prestaties en het vertrouwen dat onze klanten in ons stellen.';

        // Realisation category buttons
        const realCatBtns = document.querySelectorAll('.real-category-btn');
        if (realCatBtns[0]) realCatBtns[0].textContent = 'Alles';
        if (realCatBtns[1]) realCatBtns[1].textContent = 'Kantoren';
        if (realCatBtns[2]) realCatBtns[2].textContent = 'Residentieel';
        if (realCatBtns[3]) realCatBtns[3].textContent = 'Gespecialiseerd';

        // === TESTIMONIALS SECTION ===
        const testimonialsTitle = document.querySelector('.testimonials .section-title h2');
        if (testimonialsTitle) testimonialsTitle.textContent = 'Klantengetuigenissen';

        // === FAQ SECTION ===
        const faqTitle = document.querySelector('.faq .section-title h2');
        if (faqTitle) faqTitle.textContent = 'Veelgestelde Vragen';

        // === DEVIS SECTION ===
        const devisTitle = document.querySelector('.quote-form .section-title h2');
        if (devisTitle) devisTitle.textContent = 'Vraag een Gratis Offerte Aan';

        const devisSubtitle = document.querySelector('.quote-form .section-title p');
        if (devisSubtitle) devisSubtitle.textContent = 'Vul dit formulier in en wij nemen binnen 24 uur contact met u op om uw behoeften te bespreken.';

        // console.log('Nederlandse vertalingen succesvol toegepast');

    } catch (error) {
        // console.error('❌ Fout bij toepassen van Nederlandse vertalingen:', error);
    }
};
