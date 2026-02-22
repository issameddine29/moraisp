/**
* TRADUCTION ANGLAISE - INDEX.HTML
* Traduction manuelle complète
*/

window.applyTranslations = function() {
    // console.log('🌍 Applying English translations for index.html...');

    try {
        // === TITLE & META ===
        document.title = 'Morais Cleaning - Professional Cleaning in Brussels';

        // === HERO SECTION ===
        const heroTitle = document.querySelector('.hero h1');
        if (heroTitle) heroTitle.textContent = 'Professional Cleaning in Brussels';

        const heroSubtitle = document.querySelector('.hero p');
        if (heroSubtitle) heroSubtitle.textContent = 'High-quality cleaning services for businesses and individuals. Trust our experienced team for an impeccable environment.';

        const devisBtn = document.querySelector('.hero .devis-btn');
        if (devisBtn) devisBtn.textContent = 'Quick Quote';

        const contactBtn = document.querySelector('.hero .contact-btn');
        if (contactBtn) contactBtn.textContent = 'Contact Us';

        // === ABOUT SECTION ===
        const aboutTitle = document.querySelector('.about .section-title h2');
        if (aboutTitle) aboutTitle.textContent = 'About Morais Cleaning';

        const aboutSubtitle = document.querySelector('.about h3');
        if (aboutSubtitle) aboutSubtitle.textContent = 'Excellence in cleaning for over 10 years';

        const aboutIntro = document.querySelector('.about-text > p');
        if (aboutIntro) aboutIntro.textContent = 'Morais Cleaning is a professional cleaning company based in Brussels, specialized in providing high-quality cleaning services for businesses, offices, shops and individuals.';

        // Values
        const valueItems = document.querySelectorAll('.value-item');
        if (valueItems[0]) {
            valueItems[0].querySelector('h4').textContent = 'Guaranteed Quality';
            valueItems[0].querySelector('p').textContent = 'We use professional products and proven methods for impeccable results.';
        }
        if (valueItems[1]) {
            valueItems[1].querySelector('h4').textContent = 'Qualified Staff';
            valueItems[1].querySelector('p').textContent = 'Our team is trained, experienced and follows strict procedures for each intervention.';
        }
        if (valueItems[2]) {
            valueItems[2].querySelector('h4').textContent = '7/7 Availability';
            valueItems[2].querySelector('p').textContent = 'We adapt to your schedule, even outside business hours to minimize disruptions.';
        }
        if (valueItems[3]) {
            valueItems[3].querySelector('h4').textContent = 'Assured Safety';
            valueItems[3].querySelector('p').textContent = 'All our products are selected for their effectiveness and respect for the environment and users.';
        }

        const signature = document.querySelector('.signature');
        if (signature) signature.textContent = '"Excellence in cleaning, service after service"';

        // === SERVICES SECTION ===
        const servicesTitle = document.querySelector('.services .section-title h2');
        if (servicesTitle) servicesTitle.textContent = 'Our Services';

        // Categories
        const categoryBtns = document.querySelectorAll('.services-categories .category-btn');
        if (categoryBtns[0]) categoryBtns[0].textContent = 'Professional';
        if (categoryBtns[1]) categoryBtns[1].textContent = 'Residential';
        if (categoryBtns[2]) categoryBtns[2].textContent = 'Specialized';

        // Service category titles
        const catTitles = document.querySelectorAll('.service-category-title');
        if (catTitles[0]) catTitles[0].textContent = 'Professional Services';
        if (catTitles[1]) catTitles[1].textContent = 'Residential Services';
        if (catTitles[2]) catTitles[2].textContent = 'Specialized Services';

        // "Savoir plus" buttons
        const learnMoreBtns = document.querySelectorAll('.savoir-plus-btn');
        learnMoreBtns.forEach(btn => {
            btn.textContent = 'Learn More';
        });

        // Service cards - Professional
        const serviceCards = document.querySelectorAll('.service-card');
        if (serviceCards[0]) {
            serviceCards[0].querySelector('h3').textContent = 'Office Cleaning';
            serviceCards[0].querySelector('p').textContent = 'Daily or occasional maintenance of your workspaces for a professional and healthy environment.';
        }
        if (serviceCards[1]) {
            serviceCards[1].querySelector('h3').textContent = 'Common Areas';
            serviceCards[1].querySelector('p').textContent = 'Cleaning of common areas, entrance halls, stairs and elevators for condominiums.';
        }
        if (serviceCards[2]) {
            serviceCards[2].querySelector('h3').textContent = 'Concierge Service';
            serviceCards[2].querySelector('p').textContent = 'Complete concierge services including cleaning, maintenance and minor repairs.';
        }

        // === REALISATION SECTION ===
        const realisationsTitle = document.querySelector('.realisations .section-title h2');
        if (realisationsTitle) realisationsTitle.textContent = 'Our Projects';

        const realisationsSubtitle = document.querySelector('.realisations .section-title p');
        if (realisationsSubtitle) realisationsSubtitle.textContent = 'Discover some of our recent achievements and the trust our clients place in us.';

        // Realisation category buttons
        const realCatBtns = document.querySelectorAll('.real-category-btn');
        if (realCatBtns[0]) realCatBtns[0].textContent = 'All';
        if (realCatBtns[1]) realCatBtns[1].textContent = 'Offices';
        if (realCatBtns[2]) realCatBtns[2].textContent = 'Residential';
        if (realCatBtns[3]) realCatBtns[3].textContent = 'Specialized';

        // === TESTIMONIALS SECTION ===
        const testimonialsTitle = document.querySelector('.testimonials .section-title h2');
        if (testimonialsTitle) testimonialsTitle.textContent = 'Client Testimonials';

        // === FAQ SECTION ===
        const faqTitle = document.querySelector('.faq .section-title h2');
        if (faqTitle) faqTitle.textContent = 'Frequently Asked Questions';

        // === DEVIS SECTION ===
        const devisTitle = document.querySelector('.quote-form .section-title h2');
        if (devisTitle) devisTitle.textContent = 'Request a Free Quote';

        const devisSubtitle = document.querySelector('.quote-form .section-title p');
        if (devisSubtitle) devisSubtitle.textContent = 'Fill out this form and we will contact you within 24 hours to discuss your needs.';

        // console.log('English translations applied successfully');

    } catch (error) {
        // console.error('❌ Error applying English translations:', error);
    }
};
