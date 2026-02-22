// console.log('🔧 FAQ JavaScript intégré chargé');

// Attendre que tout soit chargé
window.addEventListener('load', function() {
    // console.log('📄 Page complètement chargée, initialisation FAQ...');

    // Petite pause pour laisser app.js se charger
    setTimeout(function() {
        const faqItems = document.querySelectorAll('.faq-item');

        // console.log('📊 Nombre de FAQ items trouvés:', faqItems.length);

        if (faqItems.length === 0) {
            // console.error('❌ Aucun item FAQ trouvé !');
            return;
        }

        faqItems.forEach((item, index) => {
            const question = item.querySelector('.faq-question');

            if (!question) {
                // console.error('❌ Bouton question non trouvé pour item', index);
                return;
            }

            question.addEventListener('click', function() {
                // console.log('🖱️ Clic sur question', index + 1);

                const wasOpen = item.classList.contains('is-open');

                // Fermer tous les autres
                faqItems.forEach(otherItem => {
                    otherItem.classList.remove('is-open');
                });

                // Ouvrir celui-ci si il était fermé
                if (!wasOpen) {
                    item.classList.add('is-open');
                    // console.log('Question', index + 1, 'ouverte');
                } else {
                    // console.log('Question', index + 1, 'fermée');
                }
            });
        });

        // console.log('FAQ initialisée avec succès !');

    }, 500); // Attendre 500ms
});