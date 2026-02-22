/**
* NL - FAQ v2 vertalingen
*/
window.applyTranslations = function() {
  try {
    document.title = "FAQ | Veelgestelde vragen - Morais Cleaning";
    document.querySelectorAll("h1").forEach(el => el.textContent = "Veelgestelde vragen (FAQ)");
    document.querySelectorAll("h2").forEach(el => el.textContent = "Heb je je antwoord niet gevonden?");
    document.querySelectorAll(".faq-hero p").forEach(el => el.textContent = "Antwoorden op de meest gestelde vragen over onze professionele schoonmaakdiensten.");

    const frToNl = new Map([
      ["Quels sont vos tarifs de nettoyage ?","Wat zijn jullie schoonmaaktarieven?"],
      ["Êtes-vous disponibles le weekend et les jours fériés ?","Zijn jullie beschikbaar in het weekend en op feestdagen?"],
      ["Utilisez-vous des produits écologiques ?","Gebruiken jullie ecologische producten?"],
      ["Fournissez-vous le matériel et les produits ?","Leveren jullie het materiaal en de producten?"],
      ["Êtes-vous assurés ?","Zijn jullie verzekerd?"],
      ["Quel est le délai d'intervention ?","Wat is jullie interventietermijn?"],
      ["Intervenez-vous en Belgique et en Suisse ?","Werken jullie in België en Zwitserland?"],
      ["Comment se déroule un premier contact ?","Hoe verloopt een eerste contact?"]
    ]);

    const frAnsToNl = new Map([
      ["Nos tarifs varient selon le type de service, la surface à nettoyer et la fréquence d'intervention. Contactez-nous pour un devis gratuit et personnalisé adapté à vos besoins spécifiques.",
       "Onze tarieven variëren volgens het type dienst, de te reinigen oppervlakte en de frequentie. Contacteer ons voor een gratis, persoonlijke offerte op maat van jouw behoeften."],
      ["Oui ! Nous sommes disponibles 24h/7j, y compris les weekends et jours fériés. Nous nous adaptons à vos horaires pour minimiser l'impact sur votre activité.",
       "Ja! We zijn 24/7 beschikbaar, ook in het weekend en op feestdagen. We passen ons aan jouw planning aan om de impact op je activiteit te beperken."],
      ["Absolument ! Nous utilisons principalement des produits écologiques certifiés, respectueux de l'environnement et de votre santé. Tous nos produits sont conformes aux normes européennes.",
       "Zeker! We gebruiken vooral gecertificeerde ecologische producten die het milieu en je gezondheid respecteren. Al onze producten voldoen aan de Europese normen."],
      ["Oui, nous fournissons tout le matériel professionnel et les produits nécessaires. Nos équipements sont de haute qualité et adaptés à chaque type de surface.",
       "Ja, we voorzien al het professionele materiaal en de nodige producten. Onze apparatuur is van hoge kwaliteit en aangepast aan elk type oppervlak."],
      ["Oui, nous disposons d'une assurance responsabilité civile professionnelle complète. Tous nos employés sont formés et couverts par notre assurance.",
       "Ja, we hebben een volledige beroepsaansprakelijkheidsverzekering. Al onze medewerkers zijn opgeleid en gedekt door onze verzekering."],
      ["Pour les interventions d'urgence, nous pouvons intervenir dans les 24 heures. Pour les prestations planifiées, nous nous adaptons à votre planning selon vos disponibilités.",
       "Voor dringende interventies kunnen we binnen 24 uur langskomen. Voor geplande prestaties passen we ons aan jouw planning aan volgens beschikbaarheid."],
      ["Oui ! Nous intervenons en Belgique (principalement Bruxelles et région) et en Suisse (cantons de Vaud et Valais). Contactez-nous pour vérifier la couverture de votre zone.",
       "Ja! We werken in België (voornamelijk Brussel en omgeving) en in Zwitserland (kantons Vaud en Wallis). Contacteer ons om de dekking van jouw zone te bevestigen."],
      ["Contactez-nous via notre formulaire, téléphone ou WhatsApp. Nous programmons ensuite une visite gratuite pour évaluer vos besoins et vous proposer un devis détaillé sans engagement.",
       "Contacteer ons via het formulier, telefoon of WhatsApp. Daarna plannen we een gratis bezoek om je behoeften te evalueren en een gedetailleerde offerte zonder verplichting te bezorgen."]
    ]);

    document.querySelectorAll('.faq-question').forEach(el => {
      const fr = (el.textContent || '').trim();
      if (frToNl.has(fr)) el.textContent = frToNl.get(fr);
    });

    document.querySelectorAll('.faq-answer').forEach(el => {
      const fr = (el.textContent || '').replace(/\s+/g,' ').trim();
      if (frAnsToNl.has(fr)) el.textContent = frAnsToNl.get(fr);
    });

    document.querySelectorAll('a[href*="contact"], a[href*="devis"]').forEach(a => {
      const t=(a.textContent||'').trim();
      if (/Contactez|Contacter/i.test(t)) a.textContent = "Contacteer ons";
      if (/Devis/i.test(t)) a.textContent = "Offerte aanvragen";
    });
  // } catch(e) { console.warn('i18n applyTranslations error:', e); }
};
