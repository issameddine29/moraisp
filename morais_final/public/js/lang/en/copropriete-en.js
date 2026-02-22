// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// en-translation-copropriete.js - English manual translation for "Nettoyage de Copropriétés"


function translateToEnglishCopropriete() {
    // console.log('Translating Copropriété page to English...');

    // 1. HERO SECTION
    const heroTitle = document.querySelector('.hero-title');
    if (heroTitle) {
        heroTitle.innerHTML = 'Condominium & Apartment Building Cleaning <span class="copropriete-badge"><i class="fas fa-building"></i> Property Managers & Boards</span>';
    }

    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        heroSubtitle.textContent = 'Complete maintenance and cleaning service for condominiums in Brussels. Common areas, elevators, parking lots, entrance halls. Custom contracts for property managers and condominium boards.';
    }

    // Hero buttons
    const buttons = document.querySelectorAll('.hero-actions .btn');
    buttons.forEach(btn => {
        if (btn.textContent.includes('Demander un devis')) {
            btn.innerHTML = '<i class="fas fa-file-contract"></i> Request a quote';
        }
        if (btn.textContent.includes('Contacter un expert')) {
            btn.innerHTML = '<i class="fas fa-phone-alt"></i> Contact an expert';
        }
    });

    // Hero features
    const coproFeatures = document.querySelectorAll('.copropriete-feature span');
    if (coproFeatures.length >= 4) {
        coproFeatures[0].textContent = 'Custom scheduling';
        coproFeatures[1].textContent = 'Dedicated team';
        coproFeatures[2].textContent = 'Monthly reports';
        coproFeatures[3].textContent = 'Professional liability insurance';
    }

    // 2. DESCRIPTION SECTION
    const descTitle = document.querySelector('.description-text h2');
    if (descTitle) {
        descTitle.textContent = 'Professional maintenance for condominiums';
    }

    const descParagraphs = document.querySelectorAll('.description-text p');
    if (descParagraphs.length >= 2) {
        descParagraphs[0].textContent = 'Maintaining common areas is essential to preserve property value, ensure resident safety, and maintain a pleasant quality of life. Our specialized condominium service offers a complete and tailored solution.';
        descParagraphs[1].textContent = 'We work closely with property managers and condominium boards to establish custom schedules, respecting time constraints and allocated budgets. Our team is trained in the specific needs of collective buildings.';
    }

    // Syndic section
    const syndicItem = document.querySelector('.syndic-item');
    if (syndicItem) {
        const syndicTitle = syndicItem.querySelector('h3');
        if (syndicTitle) {
            syndicTitle.innerHTML = '<i class="fas fa-chart-line"></i> For property managers';
        }
        const syndicText = syndicItem.querySelector('p');
        if (syndicText) {
            syndicText.textContent = 'We simplify your management with detailed reports, clear per-unit billing, and responsiveness to specific requests from unit owners.';
        }
    }

    // Stats
    const statLabels = document.querySelectorAll('.stat-label');
    if (statLabels.length >= 4) {
        statLabels[0].textContent = 'Emergency availability';
        statLabels[1].textContent = 'Satisfaction rate';
        statLabels[2].textContent = 'Condominiums in Brussels';
        statLabels[3].textContent = 'Years of experience';
    }

    // 3. AREAS OF INTERVENTION SECTION
    const zonesTitle = document.querySelector('.section-title');
    if (zonesTitle && zonesTitle.textContent.includes('Zones entretenues')) {
        zonesTitle.textContent = 'Maintained Areas';
    }

    // Client cards (zones)
const clientCards = document.querySelectorAll('.client-card');
if (clientCards.length >= 6) {
    // Card 1: Halls & Entrances
    const card1Title = clientCards[0].querySelector('h3');
    if (card1Title) card1Title.textContent = 'Lobbies & Entrances';
    const card1Tag = clientCards[0].querySelector('.client-tag');
    if (card1Tag && card1Tag.textContent.includes('Parties communes')) {
        card1Tag.textContent = 'Common areas';
    }
    const card1Desc = clientCards[0].querySelector('p');
    if (card1Desc) {
        card1Desc.textContent = 'Floor cleaning (marble, parquet, tiles), entrance windows, mailboxes, intercoms, mirrors.';
    }

    // Card 2: Staircases
    const card2Title = clientCards[1].querySelector('h3');
    if (card2Title) card2Title.textContent = 'Staircases';
    const card2Tag = clientCards[1].querySelector('.client-tag');
    if (card2Tag && card2Tag.textContent.includes('Circulation')) {
        card2Tag.textContent = 'Circulation';
    }
    const card2Desc = clientCards[1].querySelector('p');
    if (card2Desc) {
        card2Desc.textContent = 'Cleaning of steps, handrails, landings, lighting, wall dusting, carpet maintenance.';
    }

    // Card 3: Elevators
    const card3Title = clientCards[2].querySelector('h3');
    if (card3Title) card3Title.textContent = 'Elevators';
    const card3Tag = clientCards[2].querySelector('.client-tag');
    if (card3Tag && card3Tag.textContent.includes('Équipements')) {
        card3Tag.textContent = 'Equipment';
    }
    const card3Desc = clientCards[2].querySelector('p');
    if (card3Desc) {
        card3Desc.textContent = 'Complete cleaning of cabins, mirrors, control panels, doors, disinfection of contact surfaces.';
    }

    // Card 4: Parking
    const card4Title = clientCards[3].querySelector('h3');
    if (card4Title) card4Title.textContent = 'Parking & Garages';
    const card4Tag = clientCards[3].querySelector('.client-tag');
    if (card4Tag && card4Tag.textContent.includes('Stationnement')) {
        card4Tag.textContent = 'Parking';
    }
    const card4Desc = clientCards[3].querySelector('p');
    if (card4Desc) {
        card4Desc.textContent = 'Mechanical sweeping, floor washing, ramp maintenance, trash bins, lighting, signage.';
    }

    // Card 5: Outdoor spaces
    const card5Title = clientCards[4].querySelector('h3');
    if (card5Title) card5Title.textContent = 'Outdoor Spaces';
    const card5Tag = clientCards[4].querySelector('.client-tag');
    if (card5Tag && card5Tag.textContent.includes('Extérieur')) {
        card5Tag.textContent = 'Exterior';
    }
    const card5Desc = clientCards[4].querySelector('p');
    if (card5Desc) {
        card5Desc.textContent = 'Cleaning of courtyards, terraces, benches, outdoor trash bins, vehicle entrances, snow removal in winter.';
    }

    // Card 6: Technical rooms
    const card6Title = clientCards[5].querySelector('h3');
    if (card6Title) card6Title.textContent = 'Technical Rooms';
    const card6Tag = clientCards[5].querySelector('.client-tag');
    if (card6Tag && card6Tag.textContent.includes('Maintenance')) {
        card6Tag.textContent = 'Maintenance';
    }
    const card6Desc = clientCards[5].querySelector('p');
    if (card6Desc) {
        card6Desc.textContent = 'Maintenance of boiler rooms, trash rooms, machine rooms, bike storage, common storage areas.';
    }
}

// 4. CLEANING FREQUENCY SECTION
const frequencyTitle = document.querySelectorAll('.section-title')[1];
if (frequencyTitle && frequencyTitle.textContent.includes('Fréquences recommandées')) {
    frequencyTitle.textContent = 'Recommended Frequencies';
}

// Update table header
const tableHeaders = document.querySelectorAll('.table-header div');
if (tableHeaders.length >= 3) {
    tableHeaders[0].textContent = 'Area';
    tableHeaders[1].textContent = 'Frequency';
    tableHeaders[2].textContent = 'Estimated duration';
}

// Update table rows
const tableRows = document.querySelectorAll('.table-row');
if (tableRows.length >= 6) {
    // Row 1
    const row1Divs = tableRows[0].querySelectorAll('div');
    if (row1Divs.length >= 1) {
        row1Divs[0].textContent = 'Lobby & Reception';
    }

    // Row 2
    const row2Divs = tableRows[1].querySelectorAll('div');
    if (row2Divs.length >= 1) {
        row2Divs[0].textContent = 'Elevators';
    }

    // Row 3
    const row3Divs = tableRows[2].querySelectorAll('div');
    if (row3Divs.length >= 1) {
        row3Divs[0].textContent = 'Staircases';
    }

    // Row 4
    const row4Divs = tableRows[3].querySelectorAll('div');
    if (row4Divs.length >= 1) {
        row4Divs[0].textContent = 'Underground parking';
    }

    // Row 5
    const row5Divs = tableRows[4].querySelectorAll('div');
    if (row5Divs.length >= 1) {
        row5Divs[0].textContent = 'Outdoor spaces';
    }

    // Row 6
    const row6Divs = tableRows[5].querySelectorAll('div');
    if (row6Divs.length >= 1) {
        row6Divs[0].textContent = 'Technical rooms';
    }
}

// Update frequency badges
const frequencyBadges = document.querySelectorAll('.frequency-badge');
frequencyBadges.forEach(badge => {
    if (badge.classList.contains('frequency-daily')) {
        badge.textContent = 'Daily';
    } else if (badge.classList.contains('frequency-weekly')) {
        badge.textContent = 'Weekly';
    } else if (badge.classList.contains('frequency-monthly')) {
        badge.textContent = 'Monthly';
    }
});

// Update note
const note = document.querySelector('p[style*="text-align: center"]');
if (note) {
    note.textContent = '* Frequencies are adjustable according to budget and specificities of each condominium.';
}

// 5. PROCESS SECTION
const processTitle = document.querySelectorAll('.section-title')[2];
if (processTitle && processTitle.textContent.includes('Notre procédure')) {
    processTitle.textContent = 'Our Condominium Procedure';
}

const includedItems = document.querySelectorAll('.included-item');
if (includedItems.length >= 6) {
    // Step 1
    const step1Title = includedItems[0].querySelector('h3');
    if (step1Title) step1Title.textContent = 'Free initial audit';
    const step1Desc = includedItems[0].querySelector('p');
    if (step1Desc) step1Desc.textContent = 'Complete visit of the condominium, area identification, analysis of specific needs, meeting with property manager.';

    // Step 2
    const step2Title = includedItems[1].querySelector('h3');
    if (step2Title) step2Title.textContent = 'Custom proposal';
    const step2Desc = includedItems[1].querySelector('p');
    if (step2Desc) step2Desc.textContent = 'Establishment of personalized schedule, detailed quote per area, frequency proposals, presentation to the board.';

    // Step 3
    const step3Title = includedItems[2].querySelector('h3');
    if (step3Title) step3Title.textContent = 'Implementation';
    const step3Desc = includedItems[2].querySelector('p');
    if (step3Desc) step3Desc.textContent = 'Assignment of dedicated team, secure key handover, complete briefing, start of services.';

    // Step 4
    const step4Title = includedItems[3].querySelector('h3');
    if (step4Title) step4Title.textContent = 'Regular cleaning';
    const step4Desc = includedItems[3].querySelector('p');
    if (step4Desc) step4Desc.textContent = 'Interventions according to established schedule, respect of schedules, use of appropriate products, discretion assured.';

    // Step 5
    const step5Title = includedItems[4].querySelector('h3');
    if (step5Title) step5Title.textContent = 'Quality control';
    const step5Desc = includedItems[4].querySelector('p');
    if (step5Desc) step5Desc.textContent = 'Regular checks by a supervisor, validated checklists, adjustments if necessary, resident feedback.';

    // Step 6
    const step6Title = includedItems[5].querySelector('h3');
    if (step6Title) step6Title.textContent = 'Monthly reporting';
    const step6Desc = includedItems[5].querySelector('p');
    if (step6Desc) step6Desc.textContent = 'Sending detailed reports to property manager, photos of interventions, consumption tracking, improvement suggestions.';
}

// 6. ADVANTAGES SECTION
const advantagesTitle = document.querySelectorAll('.section-title')[3];
if (advantagesTitle && advantagesTitle.textContent.includes('Pourquoi choisir')) {
    advantagesTitle.textContent = 'Why Choose Morais Cleaning?';
}

const methodSteps = document.querySelectorAll('.method-step');
if (methodSteps.length >= 4) {
    // Advantage 1
    const adv1Title = methodSteps[0].querySelector('h3');
    if (adv1Title) adv1Title.textContent = 'Vetted personnel';
    const adv1Desc = methodSteps[0].querySelector('p');
    if (adv1Desc) adv1Desc.textContent = 'All our agents are screened (criminal record), specifically trained and authorized to work in condominiums.';

    // Advantage 2
    const adv2Title = methodSteps[1].querySelector('h3');
    if (adv2Title) adv2Title.textContent = 'Clear contract';
    const adv2Desc = methodSteps[1].querySelector('p');
    if (adv2Desc) adv2Desc.textContent = 'Detailed contract with commitment on results, flexible termination clauses, transparent billing.';

    // Advantage 3
    const adv3Title = methodSteps[2].querySelector('h3');
    if (adv3Title) adv3Title.textContent = 'Single point of contact';
    const adv3Desc = methodSteps[2].querySelector('p');
    if (adv3Desc) adv3Desc.textContent = 'A dedicated manager for your condominium for all communications, emergencies and adjustments.';

    // Advantage 4
    const adv4Title = methodSteps[3].querySelector('h3');
    if (adv4Title) adv4Title.textContent = 'Professional equipment';
    const adv4Desc = methodSteps[3].querySelector('p');
    if (adv4Desc) adv4Desc.textContent = 'Industrial equipment (floor scrubbers, wet/dry vacuums, high-pressure equipment) for optimal results.';
}

// 7. FAQ SECTION
const faqTitle = document.querySelectorAll('.section-title')[4];
if (faqTitle && faqTitle.textContent.includes('Questions fréquentes')) {
    faqTitle.textContent = 'Frequently Asked Questions - Property Managers';
}

const faqItems = document.querySelectorAll('.faq-item');
if (faqItems.length >= 6) {
    // FAQ 1
    const faq1Btn = faqItems[0].querySelector('.faq-question');
    if (faq1Btn) faq1Btn.textContent = 'How do you determine the cost for a condominium?';
    const faq1Answer = faqItems[0].querySelector('.faq-answer p');
    if (faq1Answer) faq1Answer.textContent = 'The rate is based on: common area surface, number of floors/elevators, desired frequency, technical specificities, and accessibility. We provide a detailed quote per item.';

    // FAQ 2
    const faq2Btn = faqItems[1].querySelector('.faq-question');
    if (faq2Btn) faq2Btn.textContent = 'Can you work outside peak hours?';
    const faq2Answer = faqItems[1].querySelector('.faq-answer p');
    if (faq2Answer) faq2Answer.textContent = 'Absolutely. We adapt our schedules to minimize disruptions: early morning, evening, or weekends. We also work during off-peak daytime hours.';

    // FAQ 3
    const faq3Btn = faqItems[2].querySelector('.faq-question');
    if (faq3Btn) faq3Btn.textContent = 'How do you handle specific requests from unit owners?';
    const faq3Answer = faqItems[2].querySelector('.faq-answer p');
    if (faq3Answer) faq3Answer.textContent = 'We implement an information reporting system via the property manager. A standardized form allows centralizing requests that we process according to their urgency and feasibility.';

    // FAQ 4
    const faq4Btn = faqItems[3].querySelector('.faq-question');
    if (faq4Btn) faq4Btn.textContent = 'Do you offer annual maintenance contracts?';
    const faq4Answer = faqItems[3].querySelector('.faq-answer p');
    if (faq4Answer) faq4Answer.textContent = 'Yes, with benefits: preferential rates, established annual schedule, priority on interventions, included annual review, and flexibility for quarterly adjustments.';

    // FAQ 5
    const faq5Btn = faqItems[4].querySelector('.faq-question');
    if (faq5Btn) faq5Btn.textContent = 'How is key and access management handled?';
    const faq5Answer = faqItems[4].querySelector('.faq-answer p');
    if (faq5Answer) faq5Answer.textContent = 'We use a secure system: duplicate keys under seal, loan/return register, identified agents, and possibility of electronic badges if the building is equipped.';

    // FAQ 6
    const faq6Btn = faqItems[5].querySelector('.faq-question');
    if (faq6Btn) faq6Btn.textContent = 'Are you insured for potential damages?';
    const faq6Answer = faqItems[5].querySelector('.faq-answer p');
    if (faq6Answer) faq6Answer.textContent = 'Yes, we have professional liability insurance of €2,500,000, covering all accidental material damages. Certificate available upon request.';
}

// 8. FINAL CTA SECTION
const ctaBox = document.querySelector('.cta-box');
if (ctaBox) {
    const ctaTitle = ctaBox.querySelector('h2');
    if (ctaTitle) ctaTitle.textContent = 'A clean condominium increases property value';

    const ctaText = ctaBox.querySelector('p');
    if (ctaText) ctaText.textContent = 'Offer your residents a pleasant living environment while preserving property value. Our specialized service adapts to the specific needs of each condominium.';

    const ctaButtons = ctaBox.querySelectorAll('.cta-buttons .btn');
    ctaButtons.forEach(btn => {
        if (btn.textContent.includes('Devis pour copropriété')) {
            btn.innerHTML = '<i class="fas fa-building"></i> Quote for condominium';
        }
        if (btn.textContent.includes('Visite d\'évaluation')) {
            btn.innerHTML = '<i class="fas fa-calendar-alt"></i> Evaluation visit';
        }
        if (btn.textContent.includes('Urgence copropriété')) {
            btn.innerHTML = '<i class="fas fa-phone"></i> Condominium emergency';
        }
    });

    const ctaInfo = ctaBox.querySelector('p[style*="margin-top: 20px"]');
    if (ctaInfo) {
        ctaInfo.innerHTML = '<i class="fas fa-info-circle"></i> Free audit - References available - 7/7 interventions';
    }
}

// Update the simplified quote calculator prompt
const quoteButton = document.querySelector('[onclick*="copropriete"]');
if (quoteButton) {
    quoteButton.removeEventListener('click', quoteButton.onclick);
    quoteButton.addEventListener('click', function() {
        setTimeout(() => {
            const units = prompt("How many units in the condominium?");
            const surface = prompt("Common area surface (m²)?");
            if (units && surface) {
                const estimate = Math.round((parseInt(surface) * 0.8) + (parseInt(units) * 5));
                showNotification(`Estimated quote: ~€${estimate}/month for ${surface}m² and ${units} units.`, 'info');
            }
        }, 1000);
    });
}

// 9. ADD LANGUAGE SWITCHER
addLanguageSwitcher();

// console.log('Condominium page translation to English completed!');
}

function addLanguageSwitcher() {
    // Check if switcher already exists
    if (document.querySelector('.language-switcher')) return;

    const switcher = document.createElement('div');
    switcher.className = 'language-switcher';
    switcher.innerHTML = `
    <button onclick="switchToFrench()" class="lang-btn active">FR</button>
    <button onclick="switchToEnglish()" class="lang-btn">EN</button>
    <button onclick="switchToDutch()" class="lang-btn">NL</button>
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
        background: #8b5cf6;
        color: white;
        border-color: #8b5cf6;
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
function switchToEnglish() {
    translateToEnglishCopropriete();
    updateLanguageButtons('en');
}

function switchToFrench() {
    location.reload(); // Reload original French version
}

function switchToDutch() {
    // console.log('Switching to Dutch - loading Dutch translation...');
    // Will be replaced by Dutch translation function
    if (typeof translateToDutchCopropriete === 'function') {
        translateToDutchCopropriete();
    } else {
        loadDutchTranslation();
    }
}

function updateLanguageButtons(activeLang) {
    const buttons = document.querySelectorAll('.lang-btn');
    buttons.forEach(btn => {
        const lang = btn.textContent.toLowerCase();
        btn.classList.toggle('active', lang === activeLang);
    });
}

// Toast notification function (keep existing functionality)
function showNotification(message, type) {
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `
    <i class="fas fa-bell"></i>
    <span>${message}</span>
    `;
    document.body.appendChild(toast);

    setTimeout(() => toast.classList.add('show'), 100);

    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// Frequency details function
function showFrequencyDetails(frequency) {
    const details = {
        'daily': 'Daily cleaning for high-traffic areas (lobbies, elevators)',
        'weekly': 'Weekly cleaning for regular circulation areas',
        'monthly': 'Monthly maintenance for technical and infrequently used areas'
    };

    if (details[frequency]) {
        showNotification(details[frequency], 'info');
    }
}
// Exposition pour app.js
window.applyTranslations = translateToEnglishCopropriete;
