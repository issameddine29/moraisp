// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// Script spécifique pour la page locaux commerciaux
document.addEventListener('DOMContentLoaded', function () {
    // Animation pour les éléments business
    const businessItems = document.querySelectorAll('.business-item');
    businessItems.forEach(item => {
        item.style.animationDelay = (Math.random() * 0.5) + 's';
    });

    // Gestion du bouton devis commercial
    const commercialBtn = document.querySelector('.btn-primary');
    if (commercialBtn) {
        commercialBtn.addEventListener('click', function () {
            localStorage.setItem('commercialService', 'locaux-commerciaux');
            showNotification('Demande de devis commercial enregistrée. Notre service commercial vous contactera dans les 24h.', 'success');
        });
    }

    // Préchargement des images
    const images = [
        'https://images.unsplash.com/photo-1497366754035-f200968a6e72?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
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
    <i class="fas fa-briefcase"></i>
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