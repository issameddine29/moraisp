// Redirection automatique après 10 secondes (optionnel)
// setTimeout(() => {
    //     window.location.href = 'index.html';
    // }, 10000);

    // Animation du numéro 404
    document.addEventListener('DOMContentLoaded', function() {
        const number = document.querySelector('.error-404-number');
        const colors = ['#ffffff', '#ffd700', '#ff6b6b', '#4ecdc4'];
        let colorIndex = 0;

        setInterval(() => {
            colorIndex = (colorIndex + 1) % colors.length;
            number.style.color = colors[colorIndex];
        }, 2000);

        // Console Easter Egg
        // console.log('%c🧹 Morais Cleaning - 404 Error', 'font-size: 20px; color: #667eea; font-weight: bold;');
        // console.log('%cCette page est propre... trop propre ! Elle a disparu ! 😄', 'font-size: 14px; color: #764ba2;');
    });