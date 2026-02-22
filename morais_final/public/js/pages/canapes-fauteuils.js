// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// Script spécifique pour la page canapés
document.addEventListener('DOMContentLoaded', function () {
    // Animation pour les éléments
    const allergyItems = document.querySelectorAll('.allergy-item');
    allergyItems.forEach(item => {
        item.style.animationDelay = (Math.random() * 0.5) + 's';
    });

    // Préchargement des images
    const images = [
        'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80',
        'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80'
    ];

    images.forEach(src => {
        const img = new Image();
        img.src = src;
    });

    // Gestion des badges de prix
    const priceBadges = document.querySelectorAll('.price-badge');
    priceBadges.forEach(badge => {
        badge.addEventListener('click', function () {
            const service = this.closest('.client-card').querySelector('h3').textContent;
            const price = this.textContent.replace('À partir de ', '');
            showNotification(`Service : ${service}\n${price} - Devis gratuit disponible`, 'info');
        });
    });

    // Simulation de calcul de prix
    document.querySelectorAll('[onclick*="canapes"]').forEach(btn => {
        btn.addEventListener('click', function () {
            localStorage.setItem('serviceType', 'canapes-fauteuils');
            // Demander des infos supplémentaires via prompt
            setTimeout(() => {
                const type = prompt("Quel type de meuble souhaitez-vous faire nettoyer ?\n1. Canapé\n2. Fauteuil\n3. Chaise\n4. Autre");
                const pieces = prompt("Combien de places/pièces ?");
                if (type && pieces) {
                    showNotification(`Devis en préparation pour ${pieces} ${type.toLowerCase()}...`, 'success');
                }
            }, 1000);
        });
    });
});

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

// Calculatrice de prix simple
function estimatePrice(type, size) {
    const prices = {
        'canape-2': 75,
        'canape-3': 95,
        'canape-angle': 125,
        'fauteuil': 65,
        'chaise': 25,
        'coussin': 15
    };
    return prices[type] || 0;
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
                }
            });
        });
    }, 300);
});