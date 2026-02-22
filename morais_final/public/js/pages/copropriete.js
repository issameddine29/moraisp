// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// Script spécifique pour la page copropriétés
document.addEventListener('DOMContentLoaded', function () {
    // Animation pour les éléments
    const syndicItems = document.querySelectorAll('.syndic-item');
    syndicItems.forEach(item => {
        item.style.animationDelay = (Math.random() * 0.5) + 's';
    });

    // Animation des statistiques
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        let current = 0;
        const increment = finalValue.includes('+') ? 1 : parseInt(finalValue) / 60;
        const timer = setInterval(() => {
            current += increment;
            if (current >= parseInt(finalValue)) {
                stat.textContent = finalValue;
                clearInterval(timer);
            } else {
                stat.textContent = Math.floor(current) + (finalValue.includes('+') ? '+' : '');
            }
        }, 30);
    });

    // Gestion des fréquences
    const frequencyBadges = document.querySelectorAll('.frequency-badge');
    frequencyBadges.forEach(badge => {
        badge.addEventListener('mouseenter', function () {
            const type = this.classList.contains('frequency-daily') ? 'Quotidien' :
            this.classList.contains('frequency-weekly') ? 'Hebdomadaire' : 'Mensuel';
            this.title = `Fréquence : ${type}`;
        });
    });

    // Calculatrice de devis simplifiée
    document.querySelector('[onclick*="copropriete"]').addEventListener('click', function () {
        setTimeout(() => {
            const units = prompt("Combien de lots dans la copropriété ?");
            const surface = prompt("Surface des parties communes (m²) ?");
            if (units && surface) {
                const estimate = Math.round((parseInt(surface) * 0.8) + (parseInt(units) * 5));
                showNotification(`Devis estimé : ~${estimate}€/mois pour ${surface}m² et ${units} lots.`, 'info');
            }
        }, 1000);
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

// Fonction pour afficher les détails de fréquence
function showFrequencyDetails(frequency) {
    const details = {
        'daily': 'Nettoyage quotidien pour les zones à fort passage (halls, ascenseurs)',
        'weekly': 'Nettoyage hebdomadaire pour les zones de circulation régulière',
        'monthly': 'Entretien mensuel pour les zones techniques et peu fréquentées'
    };

    if (details[frequency]) {
        showNotification(details[frequency], 'info');
    }
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