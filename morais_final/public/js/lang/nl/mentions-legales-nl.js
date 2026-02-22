/**
* TRADUCTION NÉERLANDAISE - MENTIONS-LEGALES.HTML
* Basis vertaling - te voltooien
*/

window.applyTranslations = function() {
    // console.log('🌍 Toepassing van Nederlandse vertalingen voor mentions-legales.html...');

    try {
        // === TITLE ===
        document.title = 'Wettelijke Kennisgeving - Morais Cleaning';

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
                btn.textContent = 'Vraag een offerte';
            }
        });

        const contactButtons = document.querySelectorAll('.contact-btn, .btn-contact, [data-action="contact"]');
        contactButtons.forEach(btn => {
            if (btn.textContent.includes('Contact')) {
                btn.textContent = 'Neem contact op';
            }
        });

        // console.log('Nederlandse vertalingen toegepast (mentions-legales)');

    } catch (error) {
        // console.error('❌ Fout bij toepassen van Nederlandse vertalingen (mentions-legales):', error);
    }
};
