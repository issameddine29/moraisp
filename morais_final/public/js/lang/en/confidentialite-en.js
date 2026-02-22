/**
* TRADUCTION ANGLAISE - CONFIDENTIALITE.HTML
* Basic translation - to be completed
*/

window.applyTranslations = function() {
    // console.log('🌍 Applying English translations for confidentialite.html...');

    try {
        // === TITLE ===
        document.title = 'Privacy Policy - Morais Cleaning';

        // === PAGE TITLE ===
        const pageTitle = document.querySelector('.section-title h1, .recruitment-hero h1, .service-hero h1, h1');
        if (pageTitle && !pageTitle.querySelector('span')) {
            const currentText = pageTitle.textContent.trim();
            // Keep current text for now - complete translation needed
        }

        // === BUTTONS ===
        const devisButtons = document.querySelectorAll('.devis-btn, .btn-devis, [data-action="devis"]');
        devisButtons.forEach(btn => {
            if (btn.textContent.includes('Devis')) {
                btn.textContent = 'Get a Quote';
            }
        });

        const contactButtons = document.querySelectorAll('.contact-btn, .btn-contact, [data-action="contact"]');
        contactButtons.forEach(btn => {
            if (btn.textContent.includes('Contact')) {
                btn.textContent = 'Contact Us';
            }
        });

        // console.log('English translations applied (confidentialite)');

    } catch (error) {
        // console.error('❌ Error applying English translations (confidentialite):', error);
    }
};
