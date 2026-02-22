/**
* NL - 404 pagina vertalingen
*/
window.applyTranslations = function() {
  try {
    document.title = "404 - Pagina niet gevonden | Morais Cleaning";
    document.querySelectorAll("h1").forEach(el => el.textContent = "404");
    document.querySelectorAll("p:nth-of-type(1)").forEach(el => el.textContent = "Zoals na een goede schoonmaak: deze pagina bestaat niet meer!");
    document.querySelectorAll("p:nth-of-type(2)").forEach(el => el.textContent = "De pagina die je zoekt is mogelijk verplaatst, verwijderd of heeft nooit bestaan.");
    document.querySelectorAll("a.btn, a.mc-btn, a[href*=\"index.html\"]").forEach(el => el.textContent = "Terug naar startpagina");
    document.querySelectorAll("h3").forEach(el => el.textContent = "Hulp nodig?");
  // } catch(e) { console.warn('i18n applyTranslations error:', e); }
};
