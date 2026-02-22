/**
 * ============================================================================
 * ACTIVE PAGE INDICATOR - SERVICES UNIQUEMENT
 * Détecte et marque uniquement les pages de services
 * ============================================================================
 */

(function() {
  'use strict';

  // Liste des pages de services
  const servicePages = [
    'nettoyage-bureaux.html',
    'locaux-commerciaux.html',
    'industriel.html',
    'cabinets-medicaux.html',
    'maison-appartement.html',
    'copropriete.html',
    'fin-de-bail.html',
    'conciergerie.html',
    'nettoyage-vitres.html',
    'apres-travaux.html',
    'tapis-moquettes.html',
    'canapes-fauteuils.html',
    'parkings-garages.html'
  ];

  // Fonction principale pour marquer la page active
  function setActiveServiceLink() {
    // Obtenir le chemin actuel de la page
    const currentPath = window.location.pathname;
    const currentPage = currentPath.split('/').pop() || 'index.html';
    
    // console.log('🔍 Page courante:', currentPage);
    
    // Vérifier si on est sur une page de service
    if (!servicePages.includes(currentPage)) {
      // console.log('ℹ️ Pas une page de service, pas d\'indicateur');
      return;
    }
    
    // console.log('✅ Page de service détectée');
    
    // Sélectionner tous les liens dans le dropdown et menu mobile
    const dropdownLinks = document.querySelectorAll('.mc-dropdown-item, .mc-mobile-submenu a');
    
    if (dropdownLinks.length === 0) {
      // console.warn('⚠️ Aucun lien de service trouvé');
      return;
    }
    
    // console.log(`✅ ${dropdownLinks.length} liens de services trouvés`);
    
    let foundActive = false;
    
    // Marquer le service actif dans le dropdown et menu mobile
    dropdownLinks.forEach(link => {
      const href = link.getAttribute('href');
      
      if (!href) return;
      
      // Extraire le nom de fichier du href
      const hrefPage = href.split('/').pop().split('#')[0];
      
      // Vérifier si c'est la page courante
      if (hrefPage === currentPage) {
        link.classList.add('mc-nav-active');
        foundActive = true;
        // console.log('✅ Service actif marqué:', hrefPage);
      } else {
        link.classList.remove('mc-nav-active');
      }
    });
    
    // Marquer le bouton "Services" comme actif
    const servicesButton = document.querySelector('.mc-dropdown-trigger');
    if (servicesButton) {
      servicesButton.classList.add('mc-nav-active');
      // console.log('✅ Bouton Services marqué actif');
    }
    
    if (foundActive) {
      // console.log('✅ Indicateur de service actif appliqué');
    } else {
      // console.warn('⚠️ Service non trouvé dans le menu');
    }
  }

  // Initialisation avec support du chargement dynamique
  function initActiveIndicator() {
    // Essayer immédiatement
    setActiveServiceLink();
    
    // Observer le navbar-container pour le chargement dynamique
    const navbarContainer = document.getElementById('navbar-container');
    
    if (navbarContainer) {
      const observer = new MutationObserver(function(mutations) {
        const navbar = document.querySelector('.mc-navbar');
        if (navbar) {
          // console.log('🔄 Navbar chargée dynamiquement');
          setActiveServiceLink();
          observer.disconnect();
        }
      });
      
      observer.observe(navbarContainer, {
        childList: true,
        subtree: true
      });
      
      // Timeout de sécurité
      setTimeout(() => {
        setActiveServiceLink();
        observer.disconnect();
      }, 500);
    }
  }

  // Démarrer au chargement du DOM
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initActiveIndicator);
  } else {
    initActiveIndicator();
  }
  
  // Réessayer après 1 seconde (sécurité)
  setTimeout(() => {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    if (servicePages.includes(currentPage)) {
      setActiveServiceLink();
    }
  }, 1000);
  
})();
