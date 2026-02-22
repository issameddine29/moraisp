/**
* EN - FAQ v2 translations
*/
window.applyTranslations = function() {
  try {
    document.title = "FAQ | Frequently Asked Questions - Morais Cleaning";
    document.querySelectorAll("h1").forEach(el => el.textContent = "Frequently Asked Questions (FAQ)");
    document.querySelectorAll("h2").forEach(el => el.textContent = "Didn\u2019t find your answer ?");
    document.querySelectorAll(".faq-hero p").forEach(el => el.textContent = "Answers to the most common questions about our professional cleaning services.");

    // Questions & answers
    const qa = [
      ["What are your cleaning rates?","Our rates vary depending on the service type, surface area and frequency. Contact us for a free, personalized quote."],
      ["Are you available on weekends and public holidays?","Yes! We’re available 24/7, including weekends and public holidays. We adapt to your schedule to minimize impact on your business."],
      ["Do you use eco-friendly products?","Absolutely! We mainly use certified eco-friendly products that respect the environment and your health. All products comply with EU standards."],
      ["Do you provide equipment and products?","Yes, we provide all professional equipment and the necessary products. Our equipment is high quality and suitable for each surface type."],
      ["Are you insured?","Yes, we have full professional liability insurance. All our staff are trained and covered by our insurance."],
      ["What is your response time?","For urgent requests, we can intervene within 24 hours. For planned services, we adapt to your schedule depending on availability."],
      ["Do you operate in Belgium and Switzerland?","Yes! We operate in Belgium (mainly Brussels and the region) and in Switzerland (cantons of Vaud and Valais). Contact us to confirm coverage for your area."],
      ["How does a first contact work?","Contact us via the form, phone or WhatsApp. We then schedule a free visit to assess your needs and provide a detailed, no-obligation quote."]
    ];

    // Translate all question buttons
    document.querySelectorAll('.faq-question').forEach((btn) => {
      const t = (btn.textContent || '').trim();
      const found = qa.find(x => x[0] && t.toLowerCase().includes(x[0].toLowerCase()) ) || null;
    });

    // Robust mapping by current FR text:
    const frToEn = new Map([
      ["Quels sont vos tarifs de nettoyage ?","What are your cleaning rates?"],
      ["Êtes-vous disponibles le weekend et les jours fériés ?","Are you available on weekends and public holidays?"],
      ["Utilisez-vous des produits écologiques ?","Do you use eco-friendly products?"],
      ["Fournissez-vous le matériel et les produits ?","Do you provide equipment and products?"],
      ["Êtes-vous assurés ?","Are you insured?"],
      ["Quel est le délai d'intervention ?","What is your response time?"],
      ["Intervenez-vous en Belgique et en Suisse ?","Do you operate in Belgium and Switzerland?"],
      ["Comment se déroule un premier contact ?","How does a first contact work?"]
    ]);

    const frAnsToEn = new Map([
      ["Nos tarifs varient selon le type de service, la surface à nettoyer et la fréquence d'intervention. Contactez-nous pour un devis gratuit et personnalisé adapté à vos besoins spécifiques.",
       "Our rates vary depending on the service type, surface area and frequency. Contact us for a free, personalized quote tailored to your needs."],
      ["Oui ! Nous sommes disponibles 24h/7j, y compris les weekends et jours fériés. Nous nous adaptons à vos horaires pour minimiser l'impact sur votre activité.",
       "Yes! We’re available 24/7, including weekends and public holidays. We adapt to your schedule to minimize the impact on your business."],
      ["Absolument ! Nous utilisons principalement des produits écologiques certifiés, respectueux de l'environnement et de votre santé. Tous nos produits sont conformes aux normes européennes.",
       "Absolutely! We mainly use certified eco‑friendly products that respect the environment and your health. All our products comply with EU standards."],
      ["Oui, nous fournissons tout le matériel professionnel et les produits nécessaires. Nos équipements sont de haute qualité et adaptés à chaque type de surface.",
       "Yes, we provide all professional equipment and the necessary products. Our equipment is high quality and suitable for each surface type."],
      ["Oui, nous disposons d'une assurance responsabilité civile professionnelle complète. Tous nos employés sont formés et couverts par notre assurance.",
       "Yes, we have full professional liability insurance. All our staff are trained and covered by our insurance."],
      ["Pour les interventions d'urgence, nous pouvons intervenir dans les 24 heures. Pour les prestations planifiées, nous nous adaptons à votre planning selon vos disponibilités.",
       "For urgent requests, we can intervene within 24 hours. For planned services, we adapt to your schedule depending on availability."],
      ["Oui ! Nous intervenons en Belgique (principalement Bruxelles et région) et en Suisse (cantons de Vaud et Valais). Contactez-nous pour vérifier la couverture de votre zone.",
       "Yes! We operate in Belgium (mainly Brussels and the region) and in Switzerland (cantons of Vaud and Valais). Contact us to confirm coverage for your area."],
      ["Contactez-nous via notre formulaire, téléphone ou WhatsApp. Nous programmons ensuite une visite gratuite pour évaluer vos besoins et vous proposer un devis détaillé sans engagement.",
       "Contact us via our form, phone or WhatsApp. We then schedule a free visit to assess your needs and provide a detailed, no‑obligation quote."]
    ]);

    document.querySelectorAll('.faq-question').forEach(el => {
      const fr = (el.textContent || '').trim();
      if (frToEn.has(fr)) el.textContent = frToEn.get(fr);
    });

    document.querySelectorAll('.faq-answer').forEach(el => {
      const fr = (el.textContent || '').replace(/\s+/g,' ').trim();
      if (frAnsToEn.has(fr)) el.textContent = frAnsToEn.get(fr);
    });

    // CTA section buttons/links
    document.querySelectorAll('a[href*="contact"], a[href*="devis"]').forEach(a => {
      const t=(a.textContent||'').trim();
      if (/Contactez|Contacter/i.test(t)) a.textContent = "Contact us";
      if (/Devis/i.test(t)) a.textContent = "Request a quote";
    });
  // } catch(e) { console.warn('i18n applyTranslations error:', e); }
};
