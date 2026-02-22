// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// js/pages/contact.js - Version française pour la page Contact

document.addEventListener('DOMContentLoaded', function() {
    // Données des représentants
    const representatives = [
        {
            id: 1,
            name: "Jean Martin",
            region: "Île-de-France",
            specialite: "Bureaux & Commerces",
            experience: 8,
            telephone: "01 23 45 67 89",
            email: "jean.martin@moraiscleaning.fr",
            description: "Spécialisé dans les espaces commerciaux et les centres commerciaux.",
            langues: ["Français", "Anglais", "Espagnol"],
            disponibilite: "Disponible",
            secteur: "bureaux"
        },
        {
            id: 2,
            name: "Marie Dubois",
            region: "Nord",
            specialite: "Industriel & Entrepôts",
            experience: 12,
            telephone: "03 21 43 65 87",
            email: "marie.dubois@moraiscleaning.fr",
            description: "Expert en nettoyage industriel et centres logistiques.",
            langues: ["Français", "Anglais"],
            disponibilite: "Disponible",
            secteur: "industriel"
        },
        {
            id: 3,
            name: "Pierre Lambert",
            region: "Est",
            specialite: "Médical & Santé",
            experience: 10,
            telephone: "03 25 47 69 81",
            email: "pierre.lambert@moraiscleaning.fr",
            description: "Spécialisé dans les hôpitaux et centres médicaux.",
            langues: ["Français", "Allemand"],
            disponibilite: "Occupé",
            secteur: "medical"
        },
        {
            id: 4,
            name: "Sophie Bernard",
            region: "Ouest",
            specialite: "Résidentiel & Copropriétés",
            experience: 6,
            telephone: "02 41 63 85 07",
            email: "sophie.bernard@moraiscleaning.fr",
            description: "Expert en immeubles d'habitation et complexes résidentiels.",
            langues: ["Français", "Anglais"],
            disponibilite: "Disponible",
            secteur: "residential"
        },
        {
            id: 5,
            name: "Thomas Petit",
            region: "Sud-Est",
            specialite: "Spécialisé (fin de bail, après travaux)",
            experience: 15,
            telephone: "04 91 23 45 67",
            email: "thomas.petit@moraiscleaning.fr",
            description: "Spécialisé dans le nettoyage approfondi et après rénovation.",
            langues: ["Français", "Italien"],
            disponibilite: "En congé",
            secteur: "special"
        },
        {
            id: 6,
            name: "Camille Rousseau",
            region: "Sud-Ouest",
            specialite: "Bureaux & Commerces",
            experience: 7,
            telephone: "05 56 78 90 12",
            email: "camille.rousseau@moraiscleaning.fr",
            description: "Spécialisé dans la grande distribution et les chaînes de magasins.",
            langues: ["Français", "Espagnol"],
            disponibilite: "Disponible",
            secteur: "bureaux"
        }
    ];

    // Éléments DOM
    const representativesContainer = document.getElementById('representatives-container');
    const regionFilter = document.getElementById('region-filter');
    const secteurFilter = document.getElementById('sector-filter');
    const searchFilter = document.getElementById('search-filter');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');
    const modalRepName = document.getElementById('modalRepName');
    const modalRepId = document.getElementById('modalRepId');
    const modalRepEmail = document.getElementById('modalRepEmail');

    // Initialisation
    function init() {
        renderRepresentatives(representatives);
        setupFilters();
        setupModal();
    }

    // Afficher les cartes des représentants
    function renderRepresentatives(reps) {
        representativesContainer.innerHTML = '';
        
        if (reps.length === 0) {
            representativesContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>Aucun représentant trouvé avec ces critères.</p>
                </div>
            `;
            return;
        }

        reps.forEach(rep => {
            const card = document.createElement('div');
            card.className = 'representative-card';
            card.innerHTML = `
                <div class="rep-header">
                    <div class="rep-avatar">
                        <i class="fas fa-user-tie"></i>
                    </div>
                    <div class="rep-info">
                        <h3 class="rep-name">${rep.name}</h3>
                        <div class="rep-status ${getStatusClass(rep.disponibilite)}">
                            <span class="status-dot"></span>
                            ${rep.disponibilite}
                        </div>
                    </div>
                </div>
                
                <div class="rep-details">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Région</strong>
                            <p>${rep.region}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-briefcase"></i>
                        <div>
                            <strong>Spécialité</strong>
                            <p>${rep.specialite}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-chart-line"></i>
                        <div>
                            <strong>Expérience</strong>
                            <p>${rep.experience} ans</p>
                        </div>
                    </div>
                </div>
                
                <div class="rep-contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${rep.telephone}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${rep.email}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-comments"></i>
                        <span>${rep.langues.join(', ')}</span>
                    </div>
                </div>
                
                <p class="rep-description">${rep.description}</p>
                
                <button class="contact-btn" data-rep-id="${rep.id}">
                    <i class="fas fa-envelope"></i>
                    Contacter ${rep.name.split(' ')[0]}
                </button>
            `;
            
            representativesContainer.appendChild(card);
        });

        // Ajouter les écouteurs d'événements aux boutons de contact
        document.querySelectorAll('.contact-btn').forEach(btn => {
            btn.addEventListener('click', function() {
                const repId = parseInt(this.getAttribute('data-rep-id'));
                const rep = representatives.find(r => r.id === repId);
                if (rep) {
                    openContactModal(rep);
                }
            });
        });
    }

    // Obtenir la classe CSS pour le statut
    function getStatusClass(status) {
        const statusMap = {
            'Disponible': 'status-available',
            'Occupé': 'status-busy',
            'En congé': 'status-leave'
        };
        return statusMap[status] || 'status-unknown';
    }

    // Configurer les filtres
    function setupFilters() {
        // Filtre région
        regionFilter.addEventListener('change', filterRepresentatives);
        
        // Filtre secteur
        secteurFilter.addEventListener('change', filterRepresentatives);
        
        // Filtre recherche
        searchFilter.addEventListener('input', filterRepresentatives);
    }

    // Filtrer les représentants selon les critères
    function filterRepresentatives() {
        const regionValue = regionFilter.value;
        const secteurValue = secteurFilter.value;
        const searchValue = searchFilter.value.toLowerCase();
        
        let filtered = representatives;
        
        // Filtrer par région
        if (regionValue !== 'all') {
            filtered = filtered.filter(rep => {
                const regionMap = {
                    'idf': 'Île-de-France',
                    'nord': 'Nord',
                    'est': 'Est',
                    'ouest': 'Ouest',
                    'sud-est': 'Sud-Est',
                    'sud-ouest': 'Sud-Ouest'
                };
                const expectedRegion = regionMap[regionValue];
                return rep.region === expectedRegion;
            });
        }
        
        // Filtrer par secteur
        if (secteurValue !== 'all') {
            filtered = filtered.filter(rep => rep.secteur === secteurValue);
        }
        
        // Filtrer par recherche
        if (searchValue) {
            filtered = filtered.filter(rep => 
                rep.name.toLowerCase().includes(searchValue) ||
                rep.specialite.toLowerCase().includes(searchValue) ||
                rep.region.toLowerCase().includes(searchValue)
            );
        }
        
        renderRepresentatives(filtered);
    }

    // Configurer la modal
    function setupModal() {
        // Fermer la modal en cliquant sur X
        closeModal.addEventListener('click', closeContactModal);
        
        // Fermer la modal en cliquant à l'extérieur
        contactModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeContactModal();
            }
        });
        
        // Fermer la modal avec la touche Échap
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && contactModal.classList.contains('active')) {
                closeContactModal();
            }
        });
        
        // Gérer l'envoi du formulaire
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitContactForm();
        });
    }

    // Ouvrir la modal de contact
    function openContactModal(representative) {
        modalRepName.textContent = `Contacter ${representative.name}`;
        modalRepId.value = representative.id;
        modalRepEmail.value = representative.email;
        
        // Pré-remplir le sujet avec le nom du représentant
        const subjectSelect = document.getElementById('messageSubject');
        subjectSelect.value = 'devis'; // Valeur par défaut
        
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Fermer la modal de contact
    function closeContactModal() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
        contactForm.reset();
    }

    // Soumettre le formulaire de contact
    function submitContactForm() {
        const formData = {
            repId: modalRepId.value,
            repEmail: modalRepEmail.value,
            senderName: document.getElementById('senderName').value,
            senderEmail: document.getElementById('senderEmail').value,
            senderPhone: document.getElementById('senderPhone').value,
            senderCompany: document.getElementById('senderCompany').value,
            subject: document.getElementById('messageSubject').value,
            message: document.getElementById('messageContent').value,
            timestamp: new Date().toISOString()
        };

        // Dans une application réelle, vous enverriez ces données à un serveur
        // console.log('Formulaire soumis:', formData);
        
        // Afficher un message de succès (en français)
        alert('Votre message a été envoyé avec succès ! Notre représentant vous contactera dans les plus brefs délais.');
        
        // Fermer la modal
        closeContactModal();
    }

    // Initialiser la page
    init();
});

// Ajouter du CSS pour la version française
const style = document.createElement('style');
style.textContent = `
    .no-results {
        text-align: center;
        padding: 3rem;
        grid-column: 1 / -1;
        color: #666;
    }
    
    .no-results i {
        font-size: 3rem;
        color: #ccc;
        margin-bottom: 1rem;
    }
    
    .representative-card {
        background: white;
        border-radius: 10px;
        padding: 1.5rem;
        box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        transition: transform 0.3s ease;
    }
    
    .representative-card:hover {
        transform: translateY(-5px);
    }
    
    .rep-header {
        display: flex;
        align-items: center;
        margin-bottom: 1rem;
    }
    
    .rep-avatar {
        width: 60px;
        height: 60px;
        background: #f0f7ff;
        border-radius: 50%;
        display: flex;
        align-items: center;
        justify-content: center;
        margin-right: 1rem;
    }
    
    .rep-avatar i {
        font-size: 1.5rem;
        color: #0066cc;
    }
    
    .rep-name {
        margin: 0;
        font-size: 1.2rem;
        color: #333;
    }
    
    .rep-status {
        display: flex;
        align-items: center;
        font-size: 0.9rem;
        margin-top: 0.25rem;
    }
    
    .status-dot {
        width: 8px;
        height: 8px;
        border-radius: 50%;
        margin-right: 0.5rem;
    }
    
    .status-available .status-dot {
        background-color: #28a745;
    }
    
    .status-busy .status-dot {
        background-color: #ffc107;
    }
    
    .status-leave .status-dot {
        background-color: #dc3545;
    }
    
    .rep-details {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
        gap: 1rem;
        margin-bottom: 1rem;
    }
    
    .detail-item {
        display: flex;
        align-items: flex-start;
    }
    
    .detail-item i {
        color: #0066cc;
        margin-right: 0.5rem;
        margin-top: 0.25rem;
    }
    
    .detail-item strong {
        display: block;
        font-size: 0.85rem;
        color: #666;
    }
    
    .detail-item p {
        margin: 0;
        font-size: 0.95rem;
        color: #333;
    }
    
    .rep-contact-info {
        background: #f8f9fa;
        padding: 1rem;
        border-radius: 8px;
        margin-bottom: 1rem;
    }
    
    .contact-item {
        display: flex;
        align-items: center;
        margin-bottom: 0.5rem;
        font-size: 0.9rem;
    }
    
    .contact-item:last-child {
        margin-bottom: 0;
    }
    
    .contact-item i {
        color: #666;
        margin-right: 0.75rem;
        width: 20px;
        text-align: center;
    }
    
    .rep-description {
        font-size: 0.9rem;
        color: #555;
        line-height: 1.5;
        margin-bottom: 1.5rem;
    }
    
    .contact-btn {
        width: 100%;
        padding: 0.75rem;
        background: #0066cc;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s ease;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 0.5rem;
    }
    
    .contact-btn:hover {
        background: #0052a3;
    }
    
    .contact-btn i {
        font-size: 0.9rem;
    }
    
    /* Styles de la modal */
    .contact-modal {
        display: none;
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background: rgba(0,0,0,0.5);
        z-index: 1000;
        align-items: center;
        justify-content: center;
    }
    
    .contact-modal.active {
        display: flex;
    }
    
    .modal-content {
        background: white;
        width: 90%;
        max-width: 500px;
        border-radius: 10px;
        padding: 2rem;
        position: relative;
        max-height: 90vh;
        overflow-y: auto;
    }
    
    .modal-header {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1.5rem;
    }
    
    .modal-title {
        margin: 0;
        color: #333;
    }
    
    .close-modal {
        background: none;
        border: none;
        font-size: 2rem;
        cursor: pointer;
        color: #666;
        line-height: 1;
    }
    
    .form-group {
        margin-bottom: 1.5rem;
    }
    
    .form-group label {
        display: block;
        margin-bottom: 0.5rem;
        color: #333;
        font-weight: 500;
    }
    
    .form-group input,
    .form-group select,
    .form-group textarea {
        width: 100%;
        padding: 0.75rem;
        border: 1px solid #ddd;
        border-radius: 5px;
        font-size: 1rem;
    }
    
    .form-group input:focus,
    .form-group select:focus,
    .form-group textarea:focus {
        outline: none;
        border-color: #0066cc;
    }
    
    .modal-btn {
        width: 100%;
        padding: 1rem;
        background: #0066cc;
        color: white;
        border: none;
        border-radius: 5px;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s ease;
    }
    
    .modal-btn:hover {
        background: #0052a3;
    }
`;
document.head.appendChild(style);