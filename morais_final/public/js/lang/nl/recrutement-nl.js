// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// recrutement-nl.js - Nederlandse vertaling voor "Carrières & Recrutement"

function translateRecruitmentToDutch() {
    // console.log('Vacaturepagina vertalen naar het Nederlands...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.textContent = 'Kom bij ons team';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Bouw een carrière op bij Morais Cleaning, marktleider in professionele reiniging in Brussel.';
    }

    // Hero highlights
    const highlights = document.querySelectorAll('.hero-highlight span');
    if (highlights.length >= 3) {
        highlights[0].textContent = 'Dynamisch team';
        highlights[1].textContent = 'Voortdurende opleiding';
        highlights[2].textContent = 'Snelle groei';
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.cta-buttons .btn');
    heroButtons.forEach(btn => {
        const span = btn.querySelector('span');
        if (span) {
            if (span.textContent.includes('Voir nos offres')) {
                span.textContent = 'Bekijk onze vacatures';
            }
            if (span.textContent.includes('Postuler')) {
                span.textContent = 'Nu solliciteren';
            }
        }
    });

    // 2. EXPERTISE SECTION
    const expertiseTitle = document.querySelector('.expertise-section .section-title h2');
    if (expertiseTitle) {
        expertiseTitle.textContent = 'Onze Expertisegebieden';
    }

    const expertiseSubtitle = document.querySelector('.expertise-section .section-title p');
    if (expertiseSubtitle) {
        expertiseSubtitle.textContent = 'Sluit u aan bij een team gespecialiseerd in alle soorten reiniging';
    }

    // Expertise cards
    const expertiseCards = document.querySelectorAll('.expertise-card h4');
    if (expertiseCards.length >= 4) {
        expertiseCards[0].textContent = 'Kantoren & Commerciële Ruimtes';
        expertiseCards[1].textContent = 'Residentieel & Mede-eigendom';
        expertiseCards[2].textContent = 'Industrieel & Na Bouw';
        expertiseCards[3].textContent = 'Gespecialiseerde Reiniging';
    }

    // Services tags
    const serviceTags = document.querySelectorAll('.service-tag');
    if (serviceTags.length >= 8) {
        serviceTags[0].textContent = 'Tapijten & Vloerkleden';
        serviceTags[1].textContent = 'Parkeerplaatsen & Garages';
        serviceTags[2].textContent = 'Ramen';
        serviceTags[3].textContent = 'Einde Huurcontract';
        serviceTags[4].textContent = 'Zetels & Fauteuils';
        serviceTags[5].textContent = 'Medische Praktijken';
        serviceTags[6].textContent = 'Conciërgediensten';
        serviceTags[7].textContent = 'Industriële Reiniging';
    }

    const servicesTitle = document.querySelector('.services-list strong');
    if (servicesTitle) {
        servicesTitle.textContent = 'Specifieke diensten:';
    }

    // 3. WHY JOIN SECTION
    const whyTitle = document.querySelector('.why-join-section .section-title h2');
    if (whyTitle) {
        whyTitle.textContent = 'Waarom Kiezen voor Ons?';
    }

    const whySubtitle = document.querySelector('.why-join-section .section-title p');
    if (whySubtitle) {
        whySubtitle.textContent = 'De voordelen van een carrière bij ons';
    }

    // Benefit cards
    const benefitTitles = document.querySelectorAll('.benefit-card h3');
    if (benefitTitles.length >= 3) {
        benefitTitles[0].textContent = 'Aantrekkelijke Vergoeding';
        benefitTitles[1].textContent = 'Voortdurende Opleiding';
        benefitTitles[2].textContent = 'Gegarandeerde Veiligheid';
    }

    const benefitDescs = document.querySelectorAll('.benefit-card p');
    if (benefitDescs.length >= 3) {
        benefitDescs[0].textContent = 'Competitief salaris met premies en volledige sociale voordelen.';
        benefitDescs[1].textContent = 'Certificerende opleidingsprogramma\'s en ontwikkeling in nieuwe technieken.';
        benefitDescs[2].textContent = 'Uitrusting verstrekt, veiligheidsopleiding en uitgebreide verzekering.';
    }

    // 4. JOBS SECTION
    const jobsTitle = document.querySelector('.jobs-section .section-title h2');
    if (jobsTitle) {
        jobsTitle.textContent = 'Vacatures';
    }

    const jobsSubtitle = document.querySelector('.jobs-section .section-title p');
    if (jobsSubtitle) {
        jobsSubtitle.textContent = 'Ontdek de beschikbare mogelijkheden';
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length >= 8) {
        filterButtons[0].textContent = 'Alle';
        filterButtons[1].textContent = 'Reiniging';
        filterButtons[2].textContent = 'Supervisors';
        filterButtons[3].textContent = 'Commercieel';
        filterButtons[4].textContent = 'Kantoren';
        filterButtons[5].textContent = 'Residentieel';
        filterButtons[6].textContent = 'Industrieel';
        filterButtons[7].textContent = 'Gespecialiseerd';
    }

    // Job Card 1: Agent de Nettoyage
    const job1Title = document.querySelector('.job-card[data-category="nettoyage"] .job-title h3');
    if (job1Title) job1Title.textContent = 'Reinigingsagent';

    const job1Location = document.querySelector('.job-card[data-category="nettoyage"] .job-title p');
    if (job1Location) job1Location.textContent = 'Brussel - Voltijds';

    const job1Tags = document.querySelectorAll('.job-card[data-category="nettoyage"] .job-tag');
    if (job1Tags.length >= 3) {
        job1Tags[0].textContent = 'Vast Contract';
        job1Tags[1].textContent = 'Voltijds';
        job1Tags[2].textContent = 'Opleiding verstrekt';
    }

    const job1Details = document.querySelectorAll('.job-card[data-category="nettoyage"] .job-detail span');
    if (job1Details.length >= 2) {
        job1Details[0].textContent = 'Brussel';
        job1Details[1].textContent = 'Flexibele uren';
    }

    const job1Desc = document.querySelector('.job-card[data-category="nettoyage"] .job-description');
    if (job1Desc) {
        job1Desc.innerHTML = 'Veelzijdige reinigingsagent voor kantoren, commerciële en residentiële ruimtes. <strong>Mogelijke specialisaties:</strong> tapijten, ramen, einde huurcontract.';
    }

    const job1Apply = document.querySelector('.job-card[data-category="nettoyage"] .btn span');
    if (job1Apply) job1Apply.textContent = 'Solliciteren';

    // Job Card 2: Superviseur Nettoyage
    const job2Title = document.querySelector('.job-card[data-category="superviseur"] .job-title h3');
    if (job2Title) job2Title.textContent = 'Reinigingssupervisor';

    const job2Location = document.querySelector('.job-card[data-category="superviseur"] .job-title p');
    if (job2Location) job2Location.textContent = 'Brussel - Voltijds';

    const job2Tags = document.querySelectorAll('.job-card[data-category="superviseur"] .job-tag');
    if (job2Tags.length >= 3) {
        job2Tags[0].textContent = 'Vast Contract';
        job2Tags[1].textContent = 'Management';
        job2Tags[2].textContent = 'Ervaring vereist';
    }

    const job2Details = document.querySelectorAll('.job-card[data-category="superviseur"] .job-detail span');
    if (job2Details.length >= 2) {
        job2Details[0].textContent = 'Brussel';
        job2Details[1].textContent = 'Daguren';
    }

    const job2Desc = document.querySelector('.job-card[data-category="superviseur"] .job-description');
    if (job2Desc) {
        job2Desc.textContent = 'Supervisor om teams te beheren op diverse sites: industrieel, na bouw, medische praktijken.';
    }

    // Job Card 3: Commercial B2B
    const job3Title = document.querySelector('.job-card[data-category="commercial"] .job-title h3');
    if (job3Title) job3Title.textContent = 'B2B Verkoper';

    const job3Location = document.querySelector('.job-card[data-category="commercial"] .job-title p');
    if (job3Location) job3Location.textContent = 'Brussel - Voltijds';

    const job3Tags = document.querySelectorAll('.job-card[data-category="commercial"] .job-tag');
    if (job3Tags.length >= 3) {
        job3Tags[0].textContent = 'Vast Contract';
        job3Tags[1].textContent = 'Verkoop';
        job3Tags[2].textContent = 'Auto verstrekt';
    }

    const job3Details = document.querySelectorAll('.job-card[data-category="commercial"] .job-detail span');
    if (job3Details.length >= 2) {
        job3Details[0].textContent = 'Brussel & Brabant';
        job3Details[1].textContent = 'Flexibele uren';
    }

    const job3Desc = document.querySelector('.job-card[data-category="commercial"] .job-description');
    if (job3Desc) {
        job3Desc.textContent = 'Verkoper om zakelijk klantenportefeuille te ontwikkelen. Rijbewijs B vereist.';
    }

    // 5. PROCESS SECTION
    const processTitle = document.querySelector('.process-section .section-title h2');
    if (processTitle) {
        processTitle.textContent = 'Rekruteringsproces';
    }

    const processSubtitle = document.querySelector('.process-section .section-title p');
    if (processSubtitle) {
        processSubtitle.textContent = 'Een eenvoudig en transparant traject';
    }

    const processSteps = document.querySelectorAll('.process-step');
    if (processSteps.length >= 4) {
        // Step 1
        const step1Title = processSteps[0].querySelector('h4');
        if (step1Title) step1Title.textContent = 'Sollicitatie';
        const step1Desc = processSteps[0].querySelector('p');
        if (step1Desc) step1Desc.textContent = 'Online formulier of CV per e-mail';

        // Step 2
        const step2Title = processSteps[1].querySelector('h4');
        if (step2Title) step2Title.textContent = 'Voorselectie';
        const step2Desc = processSteps[1].querySelector('p');
        if (step2Desc) step2Desc.textContent = 'Beoordeling binnen 48u door ons HR-team';

        // Step 3
        const step3Title = processSteps[2].querySelector('h4');
        if (step3Title) step3Title.textContent = 'Telefonisch gesprek';
        const step3Desc = processSteps[2].querySelector('p');
        if (step3Desc) step3Desc.textContent = 'Uitwisseling van 30 minuten';

        // Step 4
        const step4Title = processSteps[3].querySelector('h4');
        if (step4Title) step4Title.textContent = 'Persoonlijk gesprek';
        const step4Desc = processSteps[3].querySelector('p');
        if (step4Desc) step4Desc.textContent = 'Vergadering met HR en manager';
    }

    // 6. APPLICATION FORM SECTION
    const formTitle = document.querySelector('.form-title h2');
    if (formTitle) {
        formTitle.textContent = 'Nu Solliciteren';
    }

    const formSubtitle = document.querySelector('.form-title p');
    if (formSubtitle) {
        formSubtitle.textContent = 'Stuur ons uw sollicitatie';
    }

    // Form labels
    const labels = document.querySelectorAll('.form-label');
    if (labels.length >= 6) {
        labels[0].textContent = 'Volledige naam ';
        labels[1].textContent = 'E-mail ';
        labels[2].textContent = 'Telefoon ';
        labels[3].textContent = 'Functie ';
        labels[4].textContent = 'Gebied van bijzondere interesse';
        labels[5].innerHTML = 'Motivatie ';
    }

    // Form placeholders
    const nameInput = document.getElementById('app-name');
    if (nameInput) nameInput.placeholder = 'Uw naam en voornaam';

    const emailInput = document.getElementById('app-email');
    if (emailInput) emailInput.placeholder = 'uw@email.com';

    const phoneInput = document.getElementById('app-phone');
    if (phoneInput) phoneInput.placeholder = '+32 XXX XX XX XX';

    const motivationText = document.getElementById('app-motivation');
    if (motivationText) motivationText.placeholder = 'Waarom wilt u bij Morais Cleaning komen?';

    // Position dropdown
    const positionSelect = document.getElementById('app-position');
    if (positionSelect) {
        positionSelect.innerHTML = `
        <option value="">Kies een functie</option>
        <option value="agent-nettoyage">Reinigingsagent</option>
        <option value="superviseur">Supervisor</option>
        <option value="commercial">Verkoopsvertegenwoordiger</option>
        <option value="autre">Andere</option>
        `;
    }

    // Interest dropdown
    const interestSelect = document.getElementById('app-interest');
    if (interestSelect) {
        interestSelect.innerHTML = `
        <option value="tapis">Tapijten & Vloerkleden</option>
        <option value="vitres">Ramenreiniging</option>
        <option value="bureaux">Kantoren & Ruimtes</option>
        <option value="industriel">Industrieel</option>
        <option value="medical">Medische Praktijken</option>
        <option value="residentiel">Residentieel</option>
        <option value="fin-bail">Einde Huurcontract</option>
        <option value="apres-travaux">Na Bouw</option>
        `;
    }

    const multipleInfo = document.querySelector('.file-info');
    if (multipleInfo) {
        multipleInfo.textContent = 'Houd Ctrl (Cmd op Mac) ingedrukt om meerdere opties te selecteren';
    }

    // File upload
    const fileUpload = document.querySelector('.file-upload-label span');
    if (fileUpload) fileUpload.textContent = 'Upload uw CV';

    const fileInfo = document.querySelector('.file-upload + .file-info');
    if (fileInfo) fileInfo.textContent = 'Geaccepteerde formaten: PDF, DOC, DOCX - Max 5MB';

    // Privacy checkbox
    const privacyLabel = document.querySelector('.checkbox-group label');
    if (privacyLabel) {
        privacyLabel.innerHTML = 'Ik accepteer het <a href="../privacy.html">privacybeleid</a> ';
    }

    // Submit button
    const submitBtn = document.getElementById('submitApplicationBtn');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Mijn sollicitatie verzenden';
    }

    // 7. FAQ SECTION
    const faqTitle = document.querySelector('.faq-section .section-title h2');
    if (faqTitle) {
        faqTitle.textContent = 'Veelgestelde Vragen';
    }

    const faqSubtitle = document.querySelector('.faq-section .section-title p');
    if (faqSubtitle) {
        faqSubtitle.textContent = 'Antwoorden op rekruteringsvragen';
    }

    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length >= 4) {
        faqQuestions[0].textContent = 'Wat zijn de vereisten?';
        faqQuestions[1].textContent = 'Biedt u opleidingen aan?';
        faqQuestions[2].textContent = 'Reactietijd?';
        faqQuestions[3].textContent = 'Wat zijn de sociale voordelen?';
    }

    const faqAnswers = document.querySelectorAll('.faq-answer p');
    if (faqAnswers.length >= 4) {
        faqAnswers[0].textContent = 'Voor agenten: geen ervaring vereist (opleiding verstrekt). Voor supervisor: minimum 2 jaar ervaring. Werkvergunning in België vereist.';
        faqAnswers[1].textContent = 'Ja, initiële opleiding van 3 dagen voor alle nieuwe werknemers, en gratis voortdurende opleiding voor carrièregroei.';
        faqAnswers[2].textContent = 'Reactie binnen 48u na sollicitatie. Volledig proces in 1-2 weken maximum.';
        faqAnswers[3].textContent = 'Competitieve vergoeding, voortdurende opleiding, uitrusting verstrekt, uitgebreide verzekering en snelle carrièremogelijkheden.';
    }

    // 8. FINAL CTA SECTION
    const finalCtaTitle = document.querySelector('.final-cta h2');
    if (finalCtaTitle) {
        finalCtaTitle.textContent = 'Klaar om bij ons te komen?';
    }

    const finalCtaText = document.querySelector('.final-cta p');
    if (finalCtaText) {
        finalCtaText.textContent = 'Solliciteer nu voor een lonende carrière in Brussel.';
    }

    const finalButtons = document.querySelectorAll('.final-cta .btn');
    finalButtons.forEach(btn => {
        if (btn.textContent.includes('Postuler maintenant')) {
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Nu solliciteren';
        }
        if (btn.textContent.includes('Nous appeler')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Bel ons';
        }
    });

    const benefitItems = document.querySelectorAll('.benefit-item span');
    if (benefitItems.length >= 4) {
        benefitItems[0].textContent = 'Snelle reactie';
        benefitItems[1].textContent = 'Transparant proces';
        benefitItems[2].textContent = 'Gegarandeerde groei';
        benefitItems[3].textContent = 'Voortdurende opleiding';
    }

    // 9. SCHEMA.ORG
    const schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
        const schema = JSON.parse(schemaScript.textContent);
        schema.title = "Reinigingsagent";
        schema.description = "Veelzijdige reinigingsagent voor kantoren, commerciële en residentiële ruimtes in Brussel.";
        schema.industry = "Professionele reiniging";
        schema.workHours = "Voltijds";
        schema.employmentType = "Vast contract";

        schemaScript.textContent = JSON.stringify(schema, null, 2);
    }

    // Update notification messages in JavaScript
    const notificationScript = document.querySelector('script');
    const scriptContent = notificationScript.textContent;
    if (scriptContent) {
        const updatedScript = scriptContent
        .replace('Candidature envoyée ! Nous vous recontacterons sous 48h.', 'Sollicitatie verzonden! We nemen binnen 48 uur contact met u op.')
    .replace('Veuillez remplir tous les champs obligatoires', 'Gelieve alle verplichte velden in te vullen')
.replace('Email invalide', 'Ongeldige e-mail');

notificationScript.textContent = updatedScript;
}

// console.log('Vacaturepagina vertaling naar Nederlands voltooid!');
}

function loadDutchTranslationRecruitment() {
    translateRecruitmentToDutch();
}
// Exposition pour app.js
window.applyTranslations = translateRecruitmentToDutch;
