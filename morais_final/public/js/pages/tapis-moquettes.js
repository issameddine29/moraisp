// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// Script spécifique pour la page tapis & moquettes
document.addEventListener('DOMContentLoaded', function () {
    // Animation pour les éléments santé
    const healthItems = document.querySelectorAll('.health-item');
    healthItems.forEach(item => {
        item.style.animationDelay = (Math.random() * 0.5) + 's';
    });

    // Gestion du bouton devis nettoyage
    const carpetBtn = document.querySelector('.btn-primary');
    if (carpetBtn) {
        carpetBtn.addEventListener('click', function () {
            localStorage.setItem('carpetService', 'tapis-moquettes');
            showNotification('Demande de devis nettoyage enregistrée. Nous vous contacterons sous 24h pour convenir d\'un diagnostic.', 'success');
        });
    }

    // Préchargement des images
    const images = [
        'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });
});

function showNotification(message, type) {
    // Créer une notification toast
    const toast = document.createElement('div');
    toast.className = `toast-notification ${type}`;
    toast.innerHTML = `
    <i class="fas fa-rug"></i>
    <span>${message}</span>
    `;
    document.body.appendChild(toast);

    // Afficher
    setTimeout(() => toast.classList.add('show'), 100);

    // Supprimer après 5 secondes
    setTimeout(() => {
        toast.classList.remove('show');
        setTimeout(() => toast.remove(), 300);
    }, 5000);
}

// console.log('🔧 FAQ JavaScript chargé');
window.addEventListener('load', function() {
    setTimeout(function() {
        const faqItems = document.querySelectorAll('.faq-item');
        // console.log('📊 FAQ items:', faqItems.length);
        if (faqItems.length === 0) return;
        faqItems.forEach((item, index) => {
            const question = item.querySelector('.faq-question');
            if (!question) return;
            question.addEventListener('click', function(e) {
                e.preventDefault();
                const wasOpen = item.classList.contains('is-open');
                faqItems.forEach(otherItem => otherItem.classList.remove('is-open'));
                if (!wasOpen) {
                    item.classList.add('is-open');
                    // console.log('FAQ', index + 1, 'ouverte');
                }
            });
        });
        // console.log('FAQ OK');
    }, 300);
});