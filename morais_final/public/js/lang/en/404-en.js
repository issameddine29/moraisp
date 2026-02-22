/**
* EN - 404 page translations
*/
window.applyTranslations = function() {
  try {
    document.title = "404 - Page not found | Morais Cleaning";
    document.querySelectorAll("h1").forEach(el => el.textContent = "404");
    document.querySelectorAll("p:nth-of-type(1)").forEach(el => el.textContent = "Like after a good cleaning, this page no longer exists!");
    document.querySelectorAll("p:nth-of-type(2)").forEach(el => el.textContent = "The page you\u2019re looking for may have been moved, deleted, or never existed.");
    document.querySelectorAll("a.btn, a.mc-btn, a[href*=\"index.html\"]").forEach(el => el.textContent = "Back to Home");
    document.querySelectorAll("h3").forEach(el => el.textContent = "Need help?");
    document.querySelectorAll("#footer-container .mc-footer-title").forEach(el => el.textContent = "Need help?");
  // } catch(e) { console.warn('i18n applyTranslations error:', e); }
};
