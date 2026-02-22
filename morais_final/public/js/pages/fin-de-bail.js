// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// Script spécifique pour la page fin de bail
document.addEventListener('DOMContentLoaded', function () {
    // Animation pour les éléments garantie
    const guaranteeItems = document.querySelectorAll('.guarantee-item');
    guaranteeItems.forEach(item => {
        item.style.animationDelay = (Math.random() * 0.5) + 's';
    });

    // Calculateur ROI interactif
    const updateROI = () => {
        const caution = 1500; // Valeur par défaut
        const cleaningCost = 250; // Coût moyen
        const potentialLoss = Math.round(caution * 0.3); // 30% retenue moyenne
        const netGain = caution - cleaningCost;

        document.getElementById('cautionAmount').textContent = caution + '€';
        document.getElementById('potentialLoss').textContent = potentialLoss + '€';
        document.getElementById('netGain').textContent = netGain + '€';
    };

    // Initialisation calculateur
    updateROI();

    // Calculateur personnalisé
    const calculateCustomROI = () => {
        const caution = prompt("Montant de votre caution (dépôt de garantie) ?", "1500");
        if (caution) {
            const surface = prompt("Surface de votre logement (m²) ?", "50");
            let cleaningCost = 250;

            if (surface <= 35) cleaningCost = 149;
            else if (surface <= 50) cleaningCost = 199;
            else if (surface <= 70) cleaningCost = 259;
            else if (surface <= 100) cleaningCost = 349;
            else cleaningCost = 449;

            const potentialLoss = Math.round(caution * 0.3);
            const netGain = caution - cleaningCost;
            const roi = ((netGain - (caution - potentialLoss)) / cleaningCost * 100).toFixed(0);

            showNotification(`ROI : ${roi}%. En investissant ${cleaningCost}€, vous gagnez ${netGain - (caution - potentialLoss)}€ net.`, 'success');

            // Mise à jour affichage
            document.getElementById('cautionAmount').textContent = caution + '€';
            document.getElementById('potentialLoss').textContent = potentialLoss + '€';
            document.getElementById('netGain').textContent = netGain + '€';
        }
    };

    // Gestion bouton calculateur
    document.querySelector('[onclick*="fin-de-bail"]').addEventListener('click', function (e) {
        if (this.textContent.includes('Calculer')) {
            e.preventDefault();
            calculateCustomROI();
        }
    });

    // Animation statistiques
    const statNumbers = document.querySelectorAll('.stat-number');
    statNumbers.forEach(stat => {
        const finalValue = stat.textContent;
        if (finalValue.includes('%') || finalValue.includes('€') || finalValue.includes('h')) {
            const numericValue = parseFloat(finalValue);
            if (!isNaN(numericValue)) {
                let current = 0;
                const increment = numericValue / 60;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= numericValue) {
                        stat.textContent = finalValue;
                        clearInterval(timer);
                    } else {
                        stat.textContent = Math.floor(current) + finalValue.replace(/[0-9]/g, '');
                    }
                }, 30);
            }
        }
    });

    // Simulation garantie
    const guaranteeBadge = document.querySelector('.bail-badge');
    if (guaranteeBadge) {
        guaranteeBadge.addEventListener('click', function () {
            showNotification('Garantie : Si retenue sur caution pour propreté, remboursement intégral + nettoyage gratuit. Contrat signé.', 'success');
        });
    }

    // Animation témoignages
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    testimonialCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.2}s`;
        card.classList.add('animate-in');
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

// Fonction pour partager témoignage
function shareTestimonial() {
    const name = prompt("Votre prénom ?");
    const surface = prompt("Surface de votre logement ?");
    const agency = prompt("Nom de votre agence/propriétaire ?");

    if (name && surface) {
        showNotification(`Merci ${name} ! Votre témoignage nous aide à rassurer les futurs clients.`, 'success');
        // En réalité, on enverrait ces données à un backend
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