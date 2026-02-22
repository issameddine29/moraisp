// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// recrutement-en.js - English translation for "Carrières & Recrutement"


function translateRecruitmentToEnglish() {
    // console.log('Translating recruitment page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-content h1');
    if (heroTitle) {
        heroTitle.textContent = 'Join Our Team';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Build a career at Morais Cleaning, leader in professional cleaning in Brussels.';
    }

    // Hero highlights
    const highlights = document.querySelectorAll('.hero-highlight span');
    if (highlights.length >= 3) {
        highlights[0].textContent = 'Dynamic team';
        highlights[1].textContent = 'Continuous training';
        highlights[2].textContent = 'Rapid growth';
    }

    // Hero buttons
    const heroButtons = document.querySelectorAll('.cta-buttons .btn');
    heroButtons.forEach(btn => {
        const span = btn.querySelector('span');
        if (span) {
            if (span.textContent.includes('Voir nos offres')) {
                span.textContent = 'View our job offers';
            }
            if (span.textContent.includes('Postuler')) {
                span.textContent = 'Apply now';
            }
        }
    });

    // 2. EXPERTISE SECTION
    const expertiseTitle = document.querySelector('.expertise-section .section-title h2');
    if (expertiseTitle) {
        expertiseTitle.textContent = 'Our Areas of Expertise';
    }

    const expertiseSubtitle = document.querySelector('.expertise-section .section-title p');
    if (expertiseSubtitle) {
        expertiseSubtitle.textContent = 'Join a team specialized in all types of cleaning';
    }

    // Expertise cards
    const expertiseCards = document.querySelectorAll('.expertise-card h4');
    if (expertiseCards.length >= 4) {
        expertiseCards[0].textContent = 'Offices & Commercial Premises';
        expertiseCards[1].textContent = 'Residential & Co-ownerships';
        expertiseCards[2].textContent = 'Industrial & Post-Construction';
        expertiseCards[3].textContent = 'Specialized Cleaning';
    }

    // Services tags
    const serviceTags = document.querySelectorAll('.service-tag');
    if (serviceTags.length >= 8) {
        serviceTags[0].textContent = 'Carpets & Rugs';
        serviceTags[1].textContent = 'Parkings & Garages';
        serviceTags[2].textContent = 'Windows';
        serviceTags[3].textContent = 'End of Tenancy';
        serviceTags[4].textContent = 'Sofas & Armchairs';
        serviceTags[5].textContent = 'Medical Practices';
        serviceTags[6].textContent = 'Concierge Services';
        serviceTags[7].textContent = 'Industrial Cleaning';
    }

    const servicesTitle = document.querySelector('.services-list strong');
    if (servicesTitle) {
        servicesTitle.textContent = 'Specific services:';
    }

    // 3. WHY JOIN SECTION
    const whyTitle = document.querySelector('.why-join-section .section-title h2');
    if (whyTitle) {
        whyTitle.textContent = 'Why Choose Us?';
    }

    const whySubtitle = document.querySelector('.why-join-section .section-title p');
    if (whySubtitle) {
        whySubtitle.textContent = 'The advantages of building a career with us';
    }

    // Benefit cards
    const benefitTitles = document.querySelectorAll('.benefit-card h3');
    if (benefitTitles.length >= 3) {
        benefitTitles[0].textContent = 'Attractive Compensation';
        benefitTitles[1].textContent = 'Continuous Training';
        benefitTitles[2].textContent = 'Guaranteed Safety';
    }

    const benefitDescs = document.querySelectorAll('.benefit-card p');
    if (benefitDescs.length >= 3) {
        benefitDescs[0].textContent = 'Competitive salary with bonuses and full social benefits.';
        benefitDescs[1].textContent = 'Certifying training programs and development in new techniques.';
        benefitDescs[2].textContent = 'Equipment provided, safety training and comprehensive insurance.';
    }

    // 4. JOBS SECTION
    const jobsTitle = document.querySelector('.jobs-section .section-title h2');
    if (jobsTitle) {
        jobsTitle.textContent = 'Job Openings';
    }

    const jobsSubtitle = document.querySelector('.jobs-section .section-title p');
    if (jobsSubtitle) {
        jobsSubtitle.textContent = 'Discover available opportunities';
    }

    // Filter buttons
    const filterButtons = document.querySelectorAll('.filter-btn');
    if (filterButtons.length >= 8) {
        filterButtons[0].textContent = 'All';
        filterButtons[1].textContent = 'Cleaning';
        filterButtons[2].textContent = 'Supervisors';
        filterButtons[3].textContent = 'Sales';
        filterButtons[4].textContent = 'Offices';
        filterButtons[5].textContent = 'Residential';
        filterButtons[6].textContent = 'Industrial';
        filterButtons[7].textContent = 'Specialized';
    }

    // Job Card 1: Agent de Nettoyage
    const job1Title = document.querySelector('.job-card[data-category="nettoyage"] .job-title h3');
    if (job1Title) job1Title.textContent = 'Cleaning Agent';

    const job1Location = document.querySelector('.job-card[data-category="nettoyage"] .job-title p');
    if (job1Location) job1Location.textContent = 'Brussels - Full-time';

    const job1Tags = document.querySelectorAll('.job-card[data-category="nettoyage"] .job-tag');
    if (job1Tags.length >= 3) {
        job1Tags[0].textContent = 'Permanent Contract';
        job1Tags[1].textContent = 'Full-time';
        job1Tags[2].textContent = 'Training provided';
    }

    const job1Details = document.querySelectorAll('.job-card[data-category="nettoyage"] .job-detail span');
    if (job1Details.length >= 2) {
        job1Details[0].textContent = 'Brussels';
        job1Details[1].textContent = 'Flexible hours';
    }

    const job1Desc = document.querySelector('.job-card[data-category="nettoyage"] .job-description');
    if (job1Desc) {
        job1Desc.innerHTML = 'Versatile cleaning agent for offices, commercial and residential premises. <strong>Possible specializations:</strong> carpets, windows, end of tenancy.';
    }

    const job1Apply = document.querySelector('.job-card[data-category="nettoyage"] .btn span');
    if (job1Apply) job1Apply.textContent = 'Apply';

    // Job Card 2: Superviseur Nettoyage
    const job2Title = document.querySelector('.job-card[data-category="superviseur"] .job-title h3');
    if (job2Title) job2Title.textContent = 'Cleaning Supervisor';

    const job2Location = document.querySelector('.job-card[data-category="superviseur"] .job-title p');
    if (job2Location) job2Location.textContent = 'Brussels - Full-time';

    const job2Tags = document.querySelectorAll('.job-card[data-category="superviseur"] .job-tag');
    if (job2Tags.length >= 3) {
        job2Tags[0].textContent = 'Permanent Contract';
        job2Tags[1].textContent = 'Management';
        job2Tags[2].textContent = 'Experience required';
    }

    const job2Details = document.querySelectorAll('.job-card[data-category="superviseur"] .job-detail span');
    if (job2Details.length >= 2) {
        job2Details[0].textContent = 'Brussels';
        job2Details[1].textContent = 'Daytime hours';
    }

    const job2Desc = document.querySelector('.job-card[data-category="superviseur"] .job-description');
    if (job2Desc) {
        job2Desc.textContent = 'Supervisor to manage teams on various sites: industrial, post-construction, medical practices.';
    }

    // Job Card 3: Commercial B2B
    const job3Title = document.querySelector('.job-card[data-category="commercial"] .job-title h3');
    if (job3Title) job3Title.textContent = 'B2B Sales Representative';

    const job3Location = document.querySelector('.job-card[data-category="commercial"] .job-title p');
    if (job3Location) job3Location.textContent = 'Brussels - Full-time';

    const job3Tags = document.querySelectorAll('.job-card[data-category="commercial"] .job-tag');
    if (job3Tags.length >= 3) {
        job3Tags[0].textContent = 'Permanent Contract';
        job3Tags[1].textContent = 'Sales';
        job3Tags[2].textContent = 'Car provided';
    }

    const job3Details = document.querySelectorAll('.job-card[data-category="commercial"] .job-detail span');
    if (job3Details.length >= 2) {
        job3Details[0].textContent = 'Brussels & Brabant';
        job3Details[1].textContent = 'Flexible hours';
    }

    const job3Desc = document.querySelector('.job-card[data-category="commercial"] .job-description');
    if (job3Desc) {
        job3Desc.textContent = 'Sales representative to develop corporate client portfolio. Driving license B required.';
    }

    // 5. PROCESS SECTION
    const processTitle = document.querySelector('.process-section .section-title h2');
    if (processTitle) {
        processTitle.textContent = 'Recruitment Process';
    }

    const processSubtitle = document.querySelector('.process-section .section-title p');
    if (processSubtitle) {
        processSubtitle.textContent = 'A simple and transparent journey';
    }

    const processSteps = document.querySelectorAll('.process-step');
    if (processSteps.length >= 4) {
        // Step 1
        const step1Title = processSteps[0].querySelector('h4');
        if (step1Title) step1Title.textContent = 'Application';
        const step1Desc = processSteps[0].querySelector('p');
        if (step1Desc) step1Desc.textContent = 'Online form or CV by email';

        // Step 2
        const step2Title = processSteps[1].querySelector('h4');
        if (step2Title) step2Title.textContent = 'Pre-selection';
        const step2Desc = processSteps[1].querySelector('p');
        if (step2Desc) step2Desc.textContent = 'Review within 48h by our HR team';

        // Step 3
        const step3Title = processSteps[2].querySelector('h4');
        if (step3Title) step3Title.textContent = 'Phone interview';
        const step3Desc = processSteps[2].querySelector('p');
        if (step3Desc) step3Desc.textContent = '30-minute exchange';

        // Step 4
        const step4Title = processSteps[3].querySelector('h4');
        if (step4Title) step4Title.textContent = 'In-person interview';
        const step4Desc = processSteps[3].querySelector('p');
        if (step4Desc) step4Desc.textContent = 'Meeting with HR and manager';
    }

    // 6. APPLICATION FORM SECTION
    const formTitle = document.querySelector('.form-title h2');
    if (formTitle) {
        formTitle.textContent = 'Apply Now';
    }

    const formSubtitle = document.querySelector('.form-title p');
    if (formSubtitle) {
        formSubtitle.textContent = 'Send us your application';
    }

    // Form labels
    const labels = document.querySelectorAll('.form-label');
    if (labels.length >= 6) {
        labels[0].textContent = 'Full name ';
        labels[1].textContent = 'Email ';
        labels[2].textContent = 'Phone ';
        labels[3].textContent = 'Position ';
        labels[4].textContent = 'Area of particular interest';
        labels[5].innerHTML = 'Motivation ';
    }

    // Form placeholders
    const nameInput = document.getElementById('app-name');
    if (nameInput) nameInput.placeholder = 'Your name and surname';

    const emailInput = document.getElementById('app-email');
    if (emailInput) emailInput.placeholder = 'your@email.com';

    const phoneInput = document.getElementById('app-phone');
    if (phoneInput) phoneInput.placeholder = '+32 XXX XX XX XX';

    const motivationText = document.getElementById('app-motivation');
    if (motivationText) motivationText.placeholder = 'Why do you want to join Morais Cleaning?';

    // Position dropdown
    const positionSelect = document.getElementById('app-position');
    if (positionSelect) {
        positionSelect.innerHTML = `
        <option value="">Choose a position</option>
        <option value="agent-nettoyage">Cleaning Agent</option>
        <option value="superviseur">Supervisor</option>
        <option value="commercial">Sales Representative</option>
        <option value="autre">Other</option>
        `;
    }

    // Interest dropdown
    const interestSelect = document.getElementById('app-interest');
    if (interestSelect) {
        interestSelect.innerHTML = `
        <option value="tapis">Carpets & Rugs</option>
        <option value="vitres">Window Cleaning</option>
        <option value="bureaux">Offices & Premises</option>
        <option value="industriel">Industrial</option>
        <option value="medical">Medical Practices</option>
        <option value="residentiel">Residential</option>
        <option value="fin-bail">End of Tenancy</option>
        <option value="apres-travaux">Post-Construction</option>
        `;
    }

    const multipleInfo = document.querySelector('.file-info');
    if (multipleInfo) {
        multipleInfo.textContent = 'Hold Ctrl (Cmd on Mac) to select multiple options';
    }

    // File upload
    const fileUpload = document.querySelector('.file-upload-label span');
    if (fileUpload) fileUpload.textContent = 'Upload your CV';

    const fileInfo = document.querySelector('.file-upload + .file-info');
    if (fileInfo) fileInfo.textContent = 'Accepted formats: PDF, DOC, DOCX - Max 5MB';

    // Privacy checkbox
    const privacyLabel = document.querySelector('.checkbox-group label');
    if (privacyLabel) {
        privacyLabel.innerHTML = 'I accept the <a href="../privacy.html">privacy policy</a> ';
    }

    // Submit button
    const submitBtn = document.getElementById('submitApplicationBtn');
    if (submitBtn) {
        submitBtn.innerHTML = '<i class="fas fa-paper-plane"></i> Send my application';
    }

    // 7. FAQ SECTION
    const faqTitle = document.querySelector('.faq-section .section-title h2');
    if (faqTitle) {
        faqTitle.textContent = 'Frequently Asked Questions';
    }

    const faqSubtitle = document.querySelector('.faq-section .section-title p');
    if (faqSubtitle) {
        faqSubtitle.textContent = 'Answers to recruitment questions';
    }

    const faqQuestions = document.querySelectorAll('.faq-question');
    if (faqQuestions.length >= 4) {
        faqQuestions[0].textContent = 'What are the prerequisites?';
        faqQuestions[1].textContent = 'Do you offer training?';
        faqQuestions[2].textContent = 'Response time?';
        faqQuestions[3].textContent = 'What are the social benefits?';
    }

    const faqAnswers = document.querySelectorAll('.faq-answer p');
    if (faqAnswers.length >= 4) {
        faqAnswers[0].textContent = 'For agents: no experience necessary (training provided). For supervisor: minimum 2 years of experience. Work permit in Belgium required.';
        faqAnswers[1].textContent = 'Yes, initial 3-day training for all new employees, and free continuous training for career development.';
        faqAnswers[2].textContent = 'Response within 48h after application. Complete process in 1-2 weeks maximum.';
        faqAnswers[3].textContent = 'Competitive remuneration, continuous training, equipment provided, comprehensive insurance and rapid career development opportunities.';
    }

    // 8. FINAL CTA SECTION
    const finalCtaTitle = document.querySelector('.final-cta h2');
    if (finalCtaTitle) {
        finalCtaTitle.textContent = 'Ready to join us?';
    }

    const finalCtaText = document.querySelector('.final-cta p');
    if (finalCtaText) {
        finalCtaText.textContent = 'Apply now for a rewarding career in Brussels.';
    }

    const finalButtons = document.querySelectorAll('.final-cta .btn');
    finalButtons.forEach(btn => {
        if (btn.textContent.includes('Postuler maintenant')) {
            btn.innerHTML = '<i class="fas fa-paper-plane"></i> Apply now';
        }
        if (btn.textContent.includes('Nous appeler')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Call us';
        }
    });

    const benefitItems = document.querySelectorAll('.benefit-item span');
    if (benefitItems.length >= 4) {
        benefitItems[0].textContent = 'Quick response';
        benefitItems[1].textContent = 'Transparent process';
        benefitItems[2].textContent = 'Guaranteed growth';
        benefitItems[3].textContent = 'Continuous training';
    }

    // 9. SCHEMA.ORG
    const schemaScript = document.querySelector('script[type="application/ld+json"]');
    if (schemaScript) {
        const schema = JSON.parse(schemaScript.textContent);
        schema.title = "Cleaning Agent";
        schema.description = "Versatile cleaning agent for offices, commercial and residential premises in Brussels.";
        schema.industry = "Professional cleaning";
        schema.workHours = "Full-time";
        schema.employmentType = "Permanent contract";

        schemaScript.textContent = JSON.stringify(schema, null, 2);
    }

    // Update notification messages in JavaScript
    const notificationScript = document.querySelector('script');
    const scriptContent = notificationScript.textContent;
    if (scriptContent) {
        const updatedScript = scriptContent
        .replace('Candidature envoyée ! Nous vous recontacterons sous 48h.', 'Application sent! We will contact you within 48h.')
    .replace('Veuillez remplir tous les champs obligatoires', 'Please fill all required fields')
.replace('Email invalide', 'Invalid email');

notificationScript.textContent = updatedScript;
}

// console.log('Recruitment page translation to English completed!');
}

function addLanguageSwitcherRecruitment() {
    // Check if switcher already exists
    if (document.querySelector('.language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
    <button onclick="switchToFrenchRecruitment()" class="lang-btn active">FR</button>
    <button onclick="switchToEnglishRecruitment()" class="lang-btn">EN</button>
    <button onclick="switchToDutchRecruitment()" class="lang-btn">NL</button>
    `;

    // Style the switcher
    const style = document.createElement('style');
    style.textContent = `
    .language-switcher {
        position: fixed;
        top: 100px;
        right: 20px;
        z-index: 9999;
        background: white;
        padding: 8px;
        border-radius: 8px;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        display: flex;
        gap: 5px;
    }
    .lang-btn {
        padding: 6px 12px;
        border: 1px solid #ddd;
        background: white;
        border-radius: 4px;
        cursor: pointer;
        font-size: 14px;
        font-weight: 600;
    }
    .lang-btn.active {
        background: #2A5C82;
        color: white;
        border-color: #2A5C82;
    }
    @media (max-width: 768px) {
        .language-switcher {
            top: 80px;
            right: 10px;
        }
    }
    `;

    document.head.appendChild(style);
    document.body.appendChild(switcher);
}

// Functions for language switching
function switchToEnglishRecruitment() {
    translateRecruitmentToEnglish();
    updateLanguageButtonsRecruitment('en');
}

function switchToFrenchRecruitment() {
    location.reload(); // Reload original French version
}

function switchToDutchRecruitment() {
    // console.log('Switching to Dutch - loading Dutch translation...');
    // Load Dutch translation function when available
    if (typeof translateRecruitmentToDutch === 'function') {
        translateRecruitmentToDutch();
    } else {
        alert('Dutch translation coming soon!');
    }
}

function updateLanguageButtonsRecruitment(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}
// Exposition pour app.js
window.applyTranslations = translateRecruitmentToEnglish;
