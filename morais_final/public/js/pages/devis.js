document.addEventListener('DOMContentLoaded', function () {
    // Navigation entre sections
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                const headerHeight = document.querySelector('#navbar-container')?.offsetHeight || 100;
                const targetPosition = targetElement.getBoundingClientRect().top + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // ===== GESTION FAQ =====
    const faqQuestions = document.querySelectorAll('.faq-question');
    
    if (faqQuestions.length > 0) {
        faqQuestions.forEach(question => {
            question.addEventListener('click', function () {
                const faqItem = this.closest('.faq-item');
                const answer = faqItem.querySelector('.faq-answer');
                const isExpanded = this.getAttribute('aria-expanded') === 'true';
                
                // Fermer tous les autres items
                document.querySelectorAll('.faq-item').forEach(item => {
                    if (item !== faqItem) {
                        const otherQuestion = item.querySelector('.faq-question');
                        const otherAnswer = item.querySelector('.faq-answer');
                        if (otherQuestion && otherAnswer) {
                            otherQuestion.classList.remove('active');
                            otherQuestion.setAttribute('aria-expanded', 'false');
                            otherAnswer.classList.remove('active');
                        }
                    }
                });
                
                // Basculer l'état du question actuel
                if (isExpanded) {
                    this.classList.remove('active');
                    this.setAttribute('aria-expanded', 'false');
                    answer.classList.remove('active');
                } else {
                    this.classList.add('active');
                    this.setAttribute('aria-expanded', 'true');
                    answer.classList.add('active');
                }
            });
        });
    }

    // ===== POLYFILL SUPPORT =====

    if (!Element.prototype.closest) {
        Element.prototype.closest = function (s) {
            var el = this;
            do {
                if (el.matches(s)) return el;
                el = el.parentElement || el.parentNode;
            } while (el !== null && el.nodeType === 1);
            return null;
        };
    }

    if ('loading' in HTMLImageElement.prototype) {
        const images = document.querySelectorAll('img[loading="lazy"]');
        images.forEach(img => {
            img.src = img.dataset.src;
        });
    }
});
