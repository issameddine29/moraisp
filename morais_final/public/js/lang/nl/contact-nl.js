// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// js/pages/contact.js - Nederlandse versie voor Contactpagina

document.addEventListener('DOMContentLoaded', function() {
    // Gegevens van vertegenwoordigers
    const representatives = [
        {
            id: 1,
            name: "Jan De Vries",
            regio: "Brussel",
            specialiteit: "Kantoren & Winkels",
            ervaring: 8,
            telefoon: "+32 2 123 45 67",
            email: "jan.devries@moraiscleaning.be",
            beschrijving: "Gespecialiseerd in commerciële ruimtes en winkelcentra.",
            talen: ["Nederlands", "Frans", "Engels"],
            beschikbaarheid: "Beschikbaar",
            sector: "bureaux"
        },
        {
            id: 2,
            name: "Marie Claes",
            regio: "Vlaanderen",
            specialiteit: "Industrieel & Magazijnen",
            ervaring: 12,
            telefoon: "+32 3 234 56 78",
            email: "marie.claes@moraiscleaning.be",
            beschrijving: "Expert in industriële reiniging en logistieke centra.",
            talen: ["Nederlands", "Engels"],
            beschikbaarheid: "Beschikbaar",
            sector: "industriel"
        },
        {
            id: 3,
            name: "Pierre Dubois",
            regio: "Wallonië",
            specialiteit: "Medisch & Gezondheid",
            ervaring: 10,
            telefoon: "+32 4 345 67 89",
            email: "pierre.dubois@moraiscleaning.be",
            beschrijving: "Gespecialiseerd in ziekenhuizen en medische centra.",
            talen: ["Frans", "Nederlands"],
            beschikbaarheid: "Bezig",
            sector: "medical"
        },
        {
            id: 4,
            name: "Lisa Janssen",
            regio: "Brussel",
            specialiteit: "Residentieel & Mede-eigendommen",
            ervaring: 6,
            telefoon: "+32 2 456 78 90",
            email: "lisa.janssen@moraiscleaning.be",
            beschrijving: "Expert in appartementsgebouwen en residentiële complexen.",
            talen: ["Nederlands", "Frans", "Duits"],
            beschikbaarheid: "Beschikbaar",
            sector: "residential"
        },
        {
            id: 5,
            name: "Thomas Maes",
            regio: "Vlaanderen",
            specialiteit: "Gespecialiseerd (einde huur, na werken)",
            ervaring: 15,
            telefoon: "+32 3 567 89 01",
            email: "thomas.maes@moraiscleaning.be",
            beschrijving: "Gespecialiseerd in dieptereiniging en opknapwerken.",
            talen: ["Nederlands", "Engels"],
            beschikbaarheid: "Met verlof",
            sector: "special"
        },
        {
            id: 6,
            name: "Sophie Lambert",
            regio: "Wallonië",
            specialiteit: "Kantoren & Winkels",
            ervaring: 7,
            telefoon: "+32 4 678 90 12",
            email: "sophie.lambert@moraiscleaning.be",
            beschrijving: "Gespecialiseerd in retail en winkelketens.",
            talen: ["Frans", "Nederlands", "Engels"],
            beschikbaarheid: "Beschikbaar",
            sector: "bureaux"
        }
    ];

    // DOM Elementen
    const representativesContainer = document.getElementById('representatives-container');
    const regionFilter = document.getElementById('region-filter');
    const sectorFilter = document.getElementById('sector-filter');
    const searchFilter = document.getElementById('search-filter');
    const contactModal = document.getElementById('contactModal');
    const closeModal = document.getElementById('closeModal');
    const contactForm = document.getElementById('contactForm');
    const modalRepName = document.getElementById('modalRepName');
    const modalRepId = document.getElementById('modalRepId');
    const modalRepEmail = document.getElementById('modalRepEmail');

    // Initialisatie
    function init() {
        renderRepresentatives(representatives);
        setupFilters();
        setupModal();
    }

    // Toon vertegenwoordigers kaarten
    function renderRepresentatives(reps) {
        representativesContainer.innerHTML = '';
        
        if (reps.length === 0) {
            representativesContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>Geen vertegenwoordigers gevonden met deze criteria.</p>
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
                        <div class="rep-status ${getStatusClass(rep.beschikbaarheid)}">
                            <span class="status-dot"></span>
                            ${rep.beschikbaarheid}
                        </div>
                    </div>
                </div>
                
                <div class="rep-details">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Regio</strong>
                            <p>${rep.regio}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-briefcase"></i>
                        <div>
                            <strong>Specialiteit</strong>
                            <p>${rep.specialiteit}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-chart-line"></i>
                        <div>
                            <strong>Ervaring</strong>
                            <p>${rep.ervaring} jaar</p>
                        </div>
                    </div>
                </div>
                
                <div class="rep-contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${rep.telefoon}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${rep.email}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-comments"></i>
                        <span>${rep.talen.join(', ')}</span>
                    </div>
                </div>
                
                <p class="rep-description">${rep.beschrijving}</p>
                
                <button class="contact-btn" data-rep-id="${rep.id}">
                    <i class="fas fa-envelope"></i>
                    Contacteer ${rep.name.split(' ')[0]}
                </button>
            `;
            
            representativesContainer.appendChild(card);
        });

        // Voeg event listeners toe aan contact knoppen
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

    // Krijg CSS klasse voor status
    function getStatusClass(status) {
        const statusMap = {
            'Beschikbaar': 'status-available',
            'Bezig': 'status-busy',
            'Met verlof': 'status-leave'
        };
        return statusMap[status] || 'status-unknown';
    }

    // Stel filters in
    function setupFilters() {
        // Regio filter
        regionFilter.addEventListener('change', filterRepresentatives);
        
        // Sector filter
        sectorFilter.addEventListener('change', filterRepresentatives);
        
        // Zoek filter
        searchFilter.addEventListener('input', filterRepresentatives);
    }

    // Filter vertegenwoordigers op basis van criteria
    function filterRepresentatives() {
        const regionValue = regionFilter.value;
        const sectorValue = sectorFilter.value;
        const searchValue = searchFilter.value.toLowerCase();
        
        let filtered = representatives;
        
        // Filter op regio
        if (regionValue !== 'all') {
            filtered = filtered.filter(rep => {
                // Map Franse regio waarden naar Nederlandse namen
                const regionMap = {
                    'idf': 'Brussel',
                    'nord': 'Vlaanderen',
                    'est': 'Wallonië',
                    'ouest': 'Vlaanderen',
                    'sud-est': 'Wallonië',
                    'sud-ouest': 'Wallonië'
                };
                const expectedRegion = regionMap[regionValue];
                return rep.regio === expectedRegion;
            });
        }
        
        // Filter op sector
        if (sectorValue !== 'all') {
            filtered = filtered.filter(rep => rep.sector === sectorValue);
        }
        
        // Filter op zoekopdracht
        if (searchValue) {
            filtered = filtered.filter(rep => 
                rep.name.toLowerCase().includes(searchValue) ||
                rep.specialiteit.toLowerCase().includes(searchValue) ||
                rep.regio.toLowerCase().includes(searchValue)
            );
        }
        
        renderRepresentatives(filtered);
    }

    // Stel modal in
    function setupModal() {
        // Sluit modal bij klikken op X
        closeModal.addEventListener('click', closeContactModal);
        
        // Sluit modal bij klikken buiten
        contactModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeContactModal();
            }
        });
        
        // Sluit modal met Escape toets
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && contactModal.classList.contains('active')) {
                closeContactModal();
            }
        });
        
        // Behandel formulier verzending
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitContactForm();
        });
    }

    // Open contact modal
    function openContactModal(vertegenwoordiger) {
        modalRepName.textContent = `Contacteer ${vertegenwoordiger.name}`;
        modalRepId.value = vertegenwoordiger.id;
        modalRepEmail.value = vertegenwoordiger.email;
        
        // Vul onderwerp vooraf met naam vertegenwoordiger
        const subjectSelect = document.getElementById('messageSubject');
        subjectSelect.value = 'devis'; // Standaard waarde
        
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Sluit contact modal
    function closeContactModal() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
        contactForm.reset();
    }

    // Verzend contact formulier
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

        // In een echte applicatie zou je dit naar een server sturen
        // console.log('Formulier verzonden:', formData);
        
        // Toon succesbericht (in het Nederlands)
        alert('Uw bericht is succesvol verzonden! Onze vertegenwoordiger zal u zo spoedig mogelijk contacteren.');
        
        // Sluit modal
        closeContactModal();
    }

    // Initialiseer de pagina
    init();
});

// Voeg CSS toe voor de Nederlandse versie
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
    
    /* Modal stijlen */
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