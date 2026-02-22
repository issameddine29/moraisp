// SECURITY WARNING: Ce fichier utilise .innerHTML
// IMPORTANT: Assurez-vous de valider/nettoyer toutes les données utilisateur avant de les insérer
// Recommandation: Utilisez textContent pour du texte pur, ou DOMPurify.sanitize() pour du HTML
// Documentation: https://github.com/cure53/DOMPurify

const t = (key, fallback = '') => (window.i18n && typeof window.i18n.t === 'function') ? window.i18n.t(key, fallback) : fallback;

        // Données des représentants
        const representatives = [
            {
                id: 1,
                name: "Sophie Martin",
                role: "Responsable Commerciale",
                region: "Île-de-France",
                sector: "bureaux",
                email: "s.martin@proprenet.com",
                phone: "+33 1 23 45 67 89",
                mobile: "+33 6 12 34 56 78",
                location: "Paris",
                specialties: ["Bureaux", "Commerces", "Copropriétés"],
                experience: "10 ans d'expérience",
                avatar: "SM"
            },
            {
                id: 2,
                name: "Pierre Dubois",
                role: "Représentant Commercial",
                region: "Sud-Est",
                sector: "industriel",
                email: "p.dubois@proprenet.com",
                phone: "+33 4 78 12 34 56",
                mobile: "+33 6 23 45 67 89",
                location: "Lyon",
                specialties: ["Industriel", "Entrepôts", "Parkings"],
                experience: "8 ans d'expérience",
                avatar: "PD"
            },
            {
                id: 3,
                name: "Marie Lambert",
                role: "Responsable Commerciale",
                region: "Ouest",
                sector: "residential",
                email: "m.lambert@proprenet.com",
                phone: "+33 2 99 12 34 56",
                mobile: "+33 6 34 56 78 90",
                location: "Rennes",
                specialties: ["Résidentiel", "Fin de bail", "Maisons"],
                experience: "12 ans d'expérience",
                avatar: "ML"
            },
            {
                id: 4,
                name: "Thomas Leroy",
                role: "Représentant Commercial",
                region: "Sud-Ouest",
                sector: "special",
                email: "t.leroy@proprenet.com",
                phone: "+33 5 61 23 45 67",
                mobile: "+33 6 45 67 89 01",
                location: "Toulouse",
                specialties: ["Après travaux", "Nettoyage spécialisé", "Vitres"],
                experience: "7 ans d'expérience",
                avatar: "TL"
            },
            {
                id: 5,
                name: "Nicolas Bernard",
                role: "Responsable Commercial",
                region: "Nord",
                sector: "medical",
                email: "n.bernard@proprenet.com",
                phone: "+33 3 20 12 34 56",
                mobile: "+33 6 56 78 90 12",
                location: "Lille",
                specialties: ["Médical", "Santé", "Laboratoires"],
                experience: "9 ans d'expérience",
                avatar: "NB"
            },
            {
                id: 6,
                name: "Julie Petit",
                role: "Représentante Commerciale",
                region: "Est",
                sector: "bureaux",
                email: "j.petit@proprenet.com",
                phone: "+33 3 83 12 34 56",
                mobile: "+33 6 67 89 01 23",
                location: "Nancy",
                specialties: ["Bureaux", "Commerces", "Conciergerie"],
                experience: "6 ans d'expérience",
                avatar: "JP"
            },
            {
                id: 7,
                name: "Alexandre Moreau",
                role: "Responsable Grands Comptes",
                region: "Île-de-France",
                sector: "industriel",
                email: "a.moreau@proprenet.com",
                phone: "+33 1 98 76 54 32",
                mobile: "+33 6 78 90 12 34",
                location: "Paris",
                specialties: ["Grands comptes", "Industriel", "Contrats longs"],
                experience: "15 ans d'expérience",
                avatar: "AM"
            },
            {
                id: 8,
                name: "Céline Roux",
                role: "Représentante Commerciale",
                region: "Sud-Est",
                sector: "residential",
                email: "c.roux@proprenet.com",
                phone: "+33 4 91 23 45 67",
                mobile: "+33 6 89 01 23 45",
                location: "Marseille",
                specialties: ["Résidentiel", "Copropriétés", "Maisons"],
                experience: "5 ans d'expérience",
                avatar: "CR"
            }
        ];

        // Éléments du DOM
        const representativesContainer = document.getElementById('representatives-container');
        const regionFilter = document.getElementById('region-filter');
        const sectorFilter = document.getElementById('sector-filter');
        const searchFilter = document.getElementById('search-filter');
        const contactModal = document.getElementById('contactModal');
        const closeModal = document.getElementById('closeModal');
        const modalRepName = document.getElementById('modalRepName');
        const modalRepId = document.getElementById('modalRepId');
        const modalRepEmail = document.getElementById('modalRepEmail');
        const contactForm = document.getElementById('contactForm');

        // Afficher les représentants
        function renderRepresentatives(filteredReps = representatives) {
            representativesContainer.innerHTML = '';
            
            if (filteredReps.length === 0) {
                representativesContainer.innerHTML = `
                    <div class="no-results">
                        <h3>${t('contact.reps.no_results_title','Aucun représentant trouvé')}</h3>
                        <p>${t('contact.reps.no_results_text',"Aucun représentant ne correspond à vos critères de recherche. Essayez avec d'autres filtres.")}</p>
                    </div>
                `;
                return;
            }
            
            filteredReps.forEach(rep => {
                const specialtiesHtml = rep.specialties.map(spec => `<span style="display: inline-block; background: #e9f7f7; color: #0a7e7e; padding: 0.2rem 0.5rem; margin: 0.2rem; border-radius: 3px; font-size: 0.85rem;">${spec}</span>`).join('');
                
                const card = document.createElement('div');
                card.className = 'representative-card';
                card.innerHTML = `
                    <div class="rep-header">
                        <div class="rep-badge">${rep.experience}</div>
                        <div class="rep-avatar">${rep.avatar}</div>
                        <h3 class="rep-name">${rep.name}</h3>
                        <p class="rep-role">${rep.role}</p>
                        <div class="rep-region">${rep.region}</div>
                    </div>
                    <div class="rep-info">
                        <div class="rep-detail">
                            <i class="fas fa-map-marker-alt"></i>
                            <span><strong>${t('contact.reps.labels.location','Localisation')}:</strong> ${rep.location}</span>
                        </div>
                        <div class="rep-detail">
                            <i class="fas fa-phone"></i>
                            <span><strong>${t('contact.reps.labels.phone','Téléphone')}:</strong> ${rep.phone}</span>
                        </div>
                        <div class="rep-detail">
                            <i class="fas fa-mobile-alt"></i>
                            <span><strong>${t('contact.reps.labels.mobile','Mobile')}:</strong> ${rep.mobile}</span>
                        </div>
                        <div class="rep-detail">
                            <i class="fas fa-envelope"></i>
                            <span><strong>${t('contact.reps.labels.email','Email')}:</strong> ${rep.email}</span>
                        </div>
                        <div class="rep-detail">
                            <i class="fas fa-star"></i>
                            <span><strong>${t('contact.reps.labels.specialties','Spécialités')}:</strong> <div style="margin-top: 0.5rem;">${specialtiesHtml}</div></span>
                        </div>
                        <button class="contact-btn" data-rep-id="${rep.id}">
                            <i class="fas fa-envelope"></i> ${t('contact.reps.contact_btn_prefix','Contacter')} ${rep.name.split(' ')[0]}
                        </button>
                    </div>
                `;
                
                representativesContainer.appendChild(card);
            });
            
            // Ajouter les événements aux boutons de contact
            document.querySelectorAll('.contact-btn').forEach(button => {
                button.addEventListener('click', function() {
                    const repId = parseInt(this.getAttribute('data-rep-id'));
                    const rep = representatives.find(r => r.id === repId);
                    openContactModal(rep);
                });
            });
        }

        // Filtrer les représentants
        function filterRepresentatives() {
            const regionValue = regionFilter.value;
            const sectorValue = sectorFilter.value;
            const searchValue = searchFilter.value.toLowerCase();
            
            const filtered = representatives.filter(rep => {
                // Filtre par région
                if (regionValue !== 'all') {
                    const regionMap = {
                        'idf': 'Île-de-France',
                        'nord': 'Nord',
                        'est': 'Est',
                        'ouest': 'Ouest',
                        'sud-est': 'Sud-Est',
                        'sud-ouest': 'Sud-Ouest'
                    };
                    
                    if (rep.region !== regionMap[regionValue]) {
                        return false;
                    }
                }
                
                // Filtre par secteur
                if (sectorValue !== 'all' && rep.sector !== sectorValue) {
                    return false;
                }
                
                // Filtre par recherche
                if (searchValue && !rep.name.toLowerCase().includes(searchValue) && 
                    !rep.role.toLowerCase().includes(searchValue) &&
                    !rep.location.toLowerCase().includes(searchValue)) {
                    return false;
                }
                
                return true;
            });
            
            renderRepresentatives(filtered);
        }

        // Ouvrir le modal de contact
        function openContactModal(rep) {
            modalRepName.textContent = `Contacter ${rep.name}`;
            modalRepId.value = rep.id;
            modalRepEmail.value = rep.email;
            contactModal.style.display = 'flex';
        }

        // Fermer le modal de contact
        closeModal.addEventListener('click', () => {
            contactModal.style.display = 'none';
        });

        // Fermer le modal en cliquant à l'extérieur
        window.addEventListener('click', (e) => {
            if (e.target === contactModal) {
                contactModal.style.display = 'none';
            }
        });

        // Gérer l'envoi du formulaire de contact
        contactForm.addEventListener('submit', async function(e) {
            e.preventDefault();
            
            // URL du webhook n8n
            const WEBHOOK_URL = 'https://n8n.morais-cleaning.com/webhook/contact';
            
            const repId = parseInt(modalRepId.value);
            const rep = representatives.find(r => r.id === repId);
            
            const senderName = document.getElementById('senderName').value;
            const senderEmail = document.getElementById('senderEmail').value;
            const senderPhone = document.getElementById('senderPhone').value;
            const senderCompany = document.getElementById('senderCompany').value;
            const messageSubject = document.getElementById('messageSubject').value;
            const messageContent = document.getElementById('messageContent').value;
            
            const subjectText = {
                'devis': 'Demande de devis',
                'rendezvous': 'Prise de rendez-vous',
                'information': 'Demande d\'information',
                'contrat': 'Discussion contrat',
                'autre': 'Autre demande'
            }[messageSubject];
            
            // Préparer les données
            const data = {
                name: senderName,
                email: senderEmail,
                phone: senderPhone,
                company: senderCompany,
                subject: messageSubject,
                subjectText: subjectText,
                message: messageContent,
                representativeId: repId,
                representativeName: rep ? rep.name : '',
                representativeEmail: rep ? rep.email : '',
                page: window.location.href,
                timestamp: new Date().toISOString(),
                userAgent: navigator.userAgent
            };
            
            // Bouton submit
            const submitBtn = contactForm.querySelector('button[type="submit"]');
            const originalText = submitBtn.textContent;
            submitBtn.disabled = true;
            submitBtn.textContent = 'Envoi en cours...';
            
            // Cacher les anciens messages
            const successMsg = document.getElementById('contact-success');
            const errorMsg = document.getElementById('contact-error');
            if (successMsg) successMsg.style.display = 'none';
            if (errorMsg) errorMsg.style.display = 'none';
            
            try {
                const response = await fetch(WEBHOOK_URL, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(data)
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP error! status: ${response.status}`);
                }
                
                const result = await response.json();
                console.log('Contact envoyé:', result);
                
                // Afficher message de succès
                if (successMsg) {
                    successMsg.style.display = 'block';
                    successMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
                
                // Réinitialiser et fermer
                contactForm.reset();
                setTimeout(() => {
                    contactModal.style.display = 'none';
                    if (successMsg) successMsg.style.display = 'none';
                }, 3000);
                
            } catch (error) {
                console.error('Erreur envoi contact:', error);
                
                // Afficher message d'erreur
                if (errorMsg) {
                    errorMsg.style.display = 'block';
                    errorMsg.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                }
            } finally {
                submitBtn.disabled = false;
                submitBtn.textContent = originalText;
            }
        });

        // Ajouter les événements aux filtres
        regionFilter.addEventListener('change', filterRepresentatives);
        sectorFilter.addEventListener('change', filterRepresentatives);
        searchFilter.addEventListener('input', filterRepresentatives);

        // Initialiser l'affichage
        renderRepresentatives();
  