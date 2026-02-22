document.addEventListener('DOMContentLoaded',function(){
    const burgerBtn=document.getElementById('mc-burger-btn');
    const navbarMenu=document.getElementById('mc-navbar-menu');
    const overlay=document.getElementById('mc-navbar-overlay');
    const serviceTrigger=document.querySelector('.mc-dropdown-trigger');

    // Mobile off-canvas: la CSS du projet utilise principalement la classe `.open`
    if(burgerBtn){
        burgerBtn.addEventListener('click',function(){
            this.classList.toggle('active');
            navbarMenu.classList.toggle('open');
            overlay.classList.toggle('active');
            // compat: certains styles utilisent encore `.show`
            navbarMenu.classList.toggle('show');
            overlay.classList.toggle('show');
            document.body.style.overflow=navbarMenu.classList.contains('open')?'hidden':'auto';
        });
    }

    if(overlay){
        overlay.addEventListener('click',function(){
            burgerBtn.classList.remove('active');
            navbarMenu.classList.remove('open','show');
            overlay.classList.remove('active','show');
            document.body.style.overflow='auto';
        });
    }

    if(serviceTrigger){
        // Dans cette version "dropdown", le bouton Services est suivi par la mini-liste mobile,
        // puis par le dropdown desktop. On cible explicitement les deux.
        const servicesItem = serviceTrigger.closest('.mc-has-dropdown');
        const mobileSubmenu = servicesItem ? servicesItem.querySelector('.mc-mobile-submenu') : null;
        const dropdownMenu = servicesItem ? servicesItem.querySelector('.mc-dropdown-menu') : null;
        const icon=serviceTrigger.querySelector('i');

        serviceTrigger.addEventListener('click',function(e){
            if(window.innerWidth<=992){
                // Mobile: accordéon => ouvre/ferme la mini-navbar (liste simple)
            e.preventDefault();
            e.stopPropagation();

            const isOpen = servicesItem && servicesItem.classList.toggle('open');
            this.setAttribute('aria-expanded', isOpen ? 'true' : 'false');

            if(icon){
                icon.style.transform=isOpen ? 'rotate(180deg)' : 'rotate(0deg)';
            }
        }
    });

    // Desktop: fermeture si clic en dehors du dropdown
    document.addEventListener('click',function(e){
        if(window.innerWidth>992 && dropdownMenu){
            if(!serviceTrigger.contains(e.target) && !dropdownMenu.contains(e.target)){
                if(servicesItem) servicesItem.classList.remove('open');
                serviceTrigger.setAttribute('aria-expanded','false');
                if(icon)icon.style.transform='rotate(0deg)';
            }
        }
    });

    // Desktop: ouverture au hover
    serviceTrigger.addEventListener('mouseenter',function(){
        if(window.innerWidth>992){
            if(servicesItem) servicesItem.classList.add('open');
            serviceTrigger.setAttribute('aria-expanded','true');
        }
    });

    if(servicesItem){
        servicesItem.addEventListener('mouseleave',function(){
            if(window.innerWidth>992){
                servicesItem.classList.remove('open');
                serviceTrigger.setAttribute('aria-expanded','false');
                if(icon)icon.style.transform='rotate(0deg)';
            }
        });
    }

    // Mobile: fermer l'accordéon + le menu off-canvas après sélection d'un service
    if(mobileSubmenu){
        mobileSubmenu.querySelectorAll('a').forEach(a => {
            a.addEventListener('click', () => {
                if(servicesItem) servicesItem.classList.remove('open');
                serviceTrigger.setAttribute('aria-expanded','false');
                if(icon)icon.style.transform='rotate(0deg)';

                if(window.innerWidth<=992){
                    burgerBtn.classList.remove('active');
                    navbarMenu.classList.remove('open','show');
                    overlay.classList.remove('active','show');
                    document.body.style.overflow='auto';
                }
            });
        });
    }
}

// (Ancienne logique mega-menu supprimée: cette version utilise une mini-liste mobile + dropdown desktop)

const langButtons=document.querySelectorAll('.mc-lang-menu button');
if(langButtons.length>0){
    langButtons.forEach(btn=>{
        btn.addEventListener('click',function(){
            const lang=this.dataset.lang;
            document.querySelector('.mc-lang-current').textContent=lang.toUpperCase();
            langButtons.forEach(b=>b.classList.remove('active'));
            this.classList.add('active');
        });
    });
}

const navLinks=document.querySelectorAll('.mc-navbar-link:not(.mc-dropdown-trigger)');
navLinks.forEach(link=>{
    link.addEventListener('click',function(){
        if(window.innerWidth<=992){
            burgerBtn.classList.remove('active');
            navbarMenu.classList.remove('open','show');
            overlay.classList.remove('active','show');
            document.body.style.overflow='auto';
        }
    });
});
});
