// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// Script spécifique pour la page industriel
document.addEventListener('DOMContentLoaded', function () {
    // Animation pour les éléments sécurité
    const safetyItems = document.querySelectorAll('.safety-item');
    safetyItems.forEach(item => {
        item.style.animationDelay = (Math.random() * 0.5) + 's';
    });

    // Calculateur de surface industrielle
    const calculateIndustrialQuote = () => {
        const surface = prompt("Surface à nettoyer (m²) ?");
        const type = prompt("Type d'industrie ?\n1. Manufacturier\n2. Agroalimentaire\n3. Entrepôt\n4. Chimique");
        const frequency = prompt("Fréquence ?\n1. Quotidien\n2. Hebdomadaire\n3. Mensuel\n4. Ponctuel");

        if (surface && type && frequency) {
            let basePrice = parseInt(surface) * 0.5; // 0.5€/m² de base

            // Majorations selon type
            if (type.includes('Agro')) basePrice *= 1.3; // +30% pour HACCP
            if (type.includes('Chim')) basePrice *= 1.5; // +50% pour risques

            // Réductions selon fréquence
            if (frequency.includes('Quotid')) basePrice *= 0.7; // -30% pour contrat régulier
            if (frequency.includes('Hebdo')) basePrice *= 0.8; // -20%

            const formattedPrice = new Intl.NumberFormat('fr-BE', { style: 'currency', currency: 'EUR' }).format(Math.round(basePrice));

            let frequencyText = '';
            if (frequency.includes('Quotid')) frequencyText = 'par mois';
            else if (frequency.includes('Hebdo')) frequencyText = 'par mois';
            else if (frequency.includes('Mens')) frequencyText = 'par intervention';
            else frequencyText = 'ponctuel';

            showNotification(`Devis estimé : ${formattedPrice} ${frequencyText} pour ${surface}m² (${type})`, 'info');
            localStorage.setItem('industrialQuote', Math.round(basePrice));
        }
    };

    // Gestion bouton devis
    document.querySelector('[onclick*="industriel"]').addEventListener('click', function (e) {
        if (this.textContent.includes('Devis')) {
            e.preventDefault();
            calculateIndustrialQuote();
        }
    });

    // Animation équipements
    const equipmentCards = document.querySelectorAll('.equipment-card');
    equipmentCards.forEach((card, index) => {
        card.style.animationDelay = `${index * 0.1}s`;
    });

    // Simulation calcul productivité
    const productivityCalculator = () => {
        const downtime = prompt("Temps d'arrêt mensuel pour nettoyage (heures) ?", "20");
        const hourlyCost = prompt("Coût horaire de production (€/h) ?", "150");

        if (downtime && hourlyCost) {
            const currentCost = downtime * hourlyCost;
            const optimizedCost = (downtime * 0.5) * hourlyCost; // Réduction de 50% du temps
            const savings = currentCost - optimizedCost;

            showNotification(`Optimisation possible : économie de ${savings.toFixed(0)}€/mois en réduisant les arrêts de 50%`, 'success');
        }
    };

    // Écouteur pour bouton audit
    document.querySelector('[href*="contact"]').addEventListener('click', function (e) {
        if (this.textContent.includes('Audit')) {
            e.preventDefault();
            productivityCalculator();
        }
    });

    // Animation certifications
    const certItems = document.querySelectorAll('.cert-item');
    certItems.forEach((item, index) => {
        item.style.animationDelay = `${index * 0.1}s`;
        item.classList.add('animate-cert');
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

// Fonction pour afficher les détails équipements
function showEquipmentDetails(type) {
    const details = {
        'autolaveuse': 'Autolaveuse ride-on : Débit 8.000m²/h, réservoir 200L, largeur 1.2m',
        'aspirateur': 'Aspirateur industriel : 500L, filtration HEPA H14, 3.000W, mobile',
        'hp': 'Nettoyeur HP : 500 bar, eau chaude 80°C, débit 20L/min, chariot',
        'balayeuse': 'Balayeuse mécanique : Largeur 1.8m, bac 300L, aspiration cyclonique'
    };

    if (details[type]) {
        showNotification(details[type], 'info');
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