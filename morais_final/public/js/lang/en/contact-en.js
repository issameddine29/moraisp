// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

// js/pages/contact.js - English version for Contact page

document.addEventListener('DOMContentLoaded', function() {
    // Sample representatives data
    const representatives = [
        {
            id: 1,
            name: "John Smith",
            region: "Brussels",
            specialty: "Offices & Retail",
            experience: 8,
            phone: "+32 2 123 45 67",
            email: "john.smith@moraiscleaning.com",
            description: "Specialized in commercial spaces and shopping centers.",
            languages: ["English", "French", "Dutch"],
            availability: "Available",
            sector: "bureaux"
        },
        {
            id: 2,
            name: "Maria Johnson",
            region: "Flanders",
            specialty: "Industrial & Warehouses",
            experience: 12,
            phone: "+32 3 234 56 78",
            email: "maria.johnson@moraiscleaning.com",
            description: "Expert in industrial cleaning and logistics centers.",
            languages: ["English", "Dutch"],
            availability: "Available",
            sector: "industriel"
        },
        {
            id: 3,
            name: "Pierre Martin",
            region: "Wallonia",
            specialty: "Medical & Healthcare",
            experience: 10,
            phone: "+32 4 345 67 89",
            email: "pierre.martin@moraiscleaning.com",
            description: "Specialized in hospitals and medical centers.",
            languages: ["French", "English", "Dutch"],
            availability: "Busy",
            sector: "medical"
        },
        {
            id: 4,
            name: "Lisa Brown",
            region: "Brussels",
            specialty: "Residential & Condominiums",
            experience: 6,
            phone: "+32 2 456 78 90",
            email: "lisa.brown@moraiscleaning.com",
            description: "Expert in apartment buildings and residential complexes.",
            languages: ["English", "French", "German"],
            availability: "Available",
            sector: "residential"
        },
        {
            id: 5,
            name: "Thomas Wilson",
            region: "Flanders",
            specialty: "Specialized (end of lease, after construction)",
            experience: 15,
            phone: "+32 3 567 89 01",
            email: "thomas.wilson@moraiscleaning.com",
            description: "Specialized in deep cleaning and renovation clean-up.",
            languages: ["English", "Dutch"],
            availability: "On Leave",
            sector: "special"
        },
        {
            id: 6,
            name: "Sophie Davis",
            region: "Wallonia",
            specialty: "Offices & Retail",
            experience: 7,
            phone: "+32 4 678 90 12",
            email: "sophie.davis@moraiscleaning.com",
            description: "Specialized in retail and store chains.",
            languages: ["French", "English", "Dutch"],
            availability: "Available",
            sector: "bureaux"
        }
    ];

    // DOM Elements
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

    // Initialize
    function init() {
        renderRepresentatives(representatives);
        setupFilters();
        setupModal();
    }

    // Render representatives cards
    function renderRepresentatives(reps) {
        representativesContainer.innerHTML = '';
        
        if (reps.length === 0) {
            representativesContainer.innerHTML = `
                <div class="no-results">
                    <i class="fas fa-search"></i>
                    <p>No representatives found with these criteria.</p>
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
                        <div class="rep-status ${getStatusClass(rep.availability)}">
                            <span class="status-dot"></span>
                            ${rep.availability}
                        </div>
                    </div>
                </div>
                
                <div class="rep-details">
                    <div class="detail-item">
                        <i class="fas fa-map-marker-alt"></i>
                        <div>
                            <strong>Region</strong>
                            <p>${rep.region}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-briefcase"></i>
                        <div>
                            <strong>Specialty</strong>
                            <p>${rep.specialty}</p>
                        </div>
                    </div>
                    <div class="detail-item">
                        <i class="fas fa-chart-line"></i>
                        <div>
                            <strong>Experience</strong>
                            <p>${rep.experience} years</p>
                        </div>
                    </div>
                </div>
                
                <div class="rep-contact-info">
                    <div class="contact-item">
                        <i class="fas fa-phone"></i>
                        <span>${rep.phone}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-envelope"></i>
                        <span>${rep.email}</span>
                    </div>
                    <div class="contact-item">
                        <i class="fas fa-comments"></i>
                        <span>${rep.languages.join(', ')}</span>
                    </div>
                </div>
                
                <p class="rep-description">${rep.description}</p>
                
                <button class="contact-btn" data-rep-id="${rep.id}">
                    <i class="fas fa-envelope"></i>
                    Contact ${rep.name.split(' ')[0]}
                </button>
            `;
            
            representativesContainer.appendChild(card);
        });

        // Add event listeners to contact buttons
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

    // Get status class for styling
    function getStatusClass(status) {
        const statusMap = {
            'Available': 'status-available',
            'Busy': 'status-busy',
            'On Leave': 'status-leave'
        };
        return statusMap[status] || 'status-unknown';
    }

    // Setup filters
    function setupFilters() {
        // Region filter
        regionFilter.addEventListener('change', filterRepresentatives);
        
        // Sector filter
        sectorFilter.addEventListener('change', filterRepresentatives);
        
        // Search filter
        searchFilter.addEventListener('input', filterRepresentatives);
    }

    // Filter representatives based on criteria
    function filterRepresentatives() {
        const regionValue = regionFilter.value;
        const sectorValue = sectorFilter.value;
        const searchValue = searchFilter.value.toLowerCase();
        
        let filtered = representatives;
        
        // Filter by region
        if (regionValue !== 'all') {
            filtered = filtered.filter(rep => {
                // Map French region values to English names
                const regionMap = {
                    'idf': 'Brussels',
                    'nord': 'Flanders',
                    'est': 'Wallonia',
                    'ouest': 'Flanders',
                    'sud-est': 'Wallonia',
                    'sud-ouest': 'Wallonia'
                };
                const expectedRegion = regionMap[regionValue];
                return rep.region === expectedRegion;
            });
        }
        
        // Filter by sector
        if (sectorValue !== 'all') {
            filtered = filtered.filter(rep => rep.sector === sectorValue);
        }
        
        // Filter by search
        if (searchValue) {
            filtered = filtered.filter(rep => 
                rep.name.toLowerCase().includes(searchValue) ||
                rep.specialty.toLowerCase().includes(searchValue) ||
                rep.region.toLowerCase().includes(searchValue)
            );
        }
        
        renderRepresentatives(filtered);
    }

    // Setup modal
    function setupModal() {
        // Close modal when clicking X
        closeModal.addEventListener('click', closeContactModal);
        
        // Close modal when clicking outside
        contactModal.addEventListener('click', function(e) {
            if (e.target === this) {
                closeContactModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape' && contactModal.classList.contains('active')) {
                closeContactModal();
            }
        });
        
        // Handle form submission
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            submitContactForm();
        });
    }

    // Open contact modal
    function openContactModal(representative) {
        modalRepName.textContent = `Contact ${representative.name}`;
        modalRepId.value = representative.id;
        modalRepEmail.value = representative.email;
        
        // Pre-fill subject with representative's name
        const subjectSelect = document.getElementById('messageSubject');
        subjectSelect.value = 'devis'; // Default value
        
        contactModal.classList.add('active');
        document.body.style.overflow = 'hidden';
    }

    // Close contact modal
    function closeContactModal() {
        contactModal.classList.remove('active');
        document.body.style.overflow = '';
        contactForm.reset();
    }

    // Submit contact form
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

        // In a real application, you would send this to a server
        // console.log('Form submitted:', formData);
        
        // Show success message (in English)
        alert('Your message has been sent successfully! Our representative will contact you as soon as possible.');
        
        // Close modal
        closeContactModal();
    }

    // Initialize the page
    init();
});

// Add some CSS for the English version
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
    
    /* Modal styles */
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