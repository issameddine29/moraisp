/**
* ENGLISH TRANSLATION - FAQ PAGE
* Complete translation of all FAQ content
*/

window.applyTranslations = function() {
    // console.log('🌍 Applying English translations for FAQ page...');

    try {
        // === TITLE & META ===
        document.title = 'FAQ | Frequently Asked Questions - Morais Cleaning';

        const metaDesc = document.querySelector('meta[name="description"]');
        if (metaDesc) {
            metaDesc.content = 'Answers to frequently asked questions about our professional cleaning services. Rates, services, availability.';
        }

        // === PAGE TITLE ===
        const pageTitle = document.querySelector('h1.display-4');
        if (pageTitle) pageTitle.textContent = 'Frequently Asked Questions (FAQ)';

        const lead = document.querySelector('.lead');
        if (lead) lead.textContent = 'Find quick answers to your questions';

        // === FAQ QUESTIONS ===
        const faqButtons = document.querySelectorAll('.accordion-button');
        const faqAnswers = document.querySelectorAll('.accordion-body');

        // Question 1
        if (faqButtons[0]) {
            const textNode = Array.from(faqButtons[0].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'What are your cleaning rates?';
        }
        if (faqAnswers[0]) {
            faqAnswers[0].textContent = 'Our rates vary according to the type of service, the area to be cleaned and the frequency of intervention. Contact us for a free, personalized quote tailored to your specific needs.';
        }

        // Question 2
        if (faqButtons[1]) {
            const textNode = Array.from(faqButtons[1].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Are you available on weekends and holidays?';
        }
        if (faqAnswers[1]) {
            faqAnswers[1].textContent = 'Yes! We are available 24/7, including weekends and holidays. We adapt to your schedule to minimize the impact on your activity.';
        }

        // Question 3
        if (faqButtons[2]) {
            const textNode = Array.from(faqButtons[2].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Do you use eco-friendly products?';
        }
        if (faqAnswers[2]) {
            faqAnswers[2].textContent = 'Absolutely! We mainly use certified eco-friendly products that respect the environment and your health. All our products comply with European standards.';
        }

        // Question 4
        if (faqButtons[3]) {
            const textNode = Array.from(faqButtons[3].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Do you provide equipment and products?';
        }
        if (faqAnswers[3]) {
            faqAnswers[3].textContent = 'Yes, we provide all professional equipment and necessary products. Our equipment is high quality and adapted to each type of surface.';
        }

        // Question 5
        if (faqButtons[4]) {
            const textNode = Array.from(faqButtons[4].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Are you insured?';
        }
        if (faqAnswers[4]) {
            faqAnswers[4].textContent = 'Yes, we have comprehensive professional insurance covering all our interventions. You can have complete peace of mind entrusting us with your spaces.';
        }

        // Question 6
        if (faqButtons[5]) {
            const textNode = Array.from(faqButtons[5].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'What is the response time?';
        }
        if (faqAnswers[5]) {
            faqAnswers[5].textContent = 'We respond within 24 hours for standard services. For urgent requests, we can intervene within a few hours depending on our availability.';
        }

        // Question 7
        if (faqButtons[6]) {
            const textNode = Array.from(faqButtons[6].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'Do you operate in Belgium and Switzerland?';
        }
        if (faqAnswers[6]) {
            faqAnswers[6].textContent = 'We mainly operate in Brussels and surrounding areas in Belgium. For specific requests outside our usual area, please contact us to discuss possibilities.';
        }

        // Question 8
        if (faqButtons[7]) {
            const textNode = Array.from(faqButtons[7].childNodes).find(n => n.nodeType === 3);
            if (textNode) textNode.textContent = 'How does the initial contact work?';
        }
        if (faqAnswers[7]) {
            faqAnswers[7].textContent = 'Simply contact us by phone, email or via our contact form. We will discuss your needs, provide you with a free estimate and, if necessary, schedule a site visit to provide you with an accurate quote.';
        }

        // console.log('English translations applied successfully (FAQ)');

    } catch (error) {
        // console.error('❌ Error applying English translations (FAQ):', error);
    }
};
