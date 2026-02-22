# AUDIT TECHNIQUE COMPLET — Morais Cleaning
## Date : Janvier 2026

---

## 1. RÉSUMÉ EXÉCUTIF

### Problèmes identifiés et corrigés ✅

| Composant | Problème | Solution |
|-----------|----------|----------|
| **Mini-devis JS** | Structure JSON incohérente, pas de champ `nom` | JSON aplati standardisé, ajout du champ `nom` |
| **Mini-devis JS** | Gestion d'erreur fragile (`response.json()` sans vérification) | Try/catch complet, vérification `response.ok`, fallback texte |
| **Mini-devis JS** | Délai irréaliste "2h" | Corrigé en "48 heures ouvrables" |
| **Mini-devis JS** | Utilisation de `alert()` et `mailto:` | Supprimés, remplacés par blocs UX intégrés |
| **Mini-devis HTML** | Pas de champ nom client | Ajout du champ `devis-nom` |
| **Mini-devis HTML** | Messages succès/erreur basiques | Blocs premium B2B avec design cohérent |
| **Emails mini-devis** | Templates absents | Créés : `email-client-mini-devis.html` + `email-interne-mini-devis.html` |
| **Emails recrutement** | Template interne absent | Créé : `email-interne-recrutement.html` |

---

## 2. ARCHITECTURE DONNÉES — STRUCTURE JSON STANDARDISÉE

### ✅ Structure JSON finale (cohérente sur tous les formulaires)

```json
{
  "nom": "string",
  "email": "string",
  "telephone": "string",
  "ville": "string",
  "service": "string",
  "surface": "string",
  "message": "string",
  "source": "mini-devis | calculateur-devis-avance | contact | recrutement",
  "page": "string (pathname)",
  "timestamp": "string (ISO 8601)"
}
```

### Règles appliquées
- ✅ Aucun objet imbriqué
- ✅ Aucun champ inutile
- ✅ Nommage cohérent français uniquement
- ✅ Cohérence totale avec devis complet
- ✅ Cohérence totale avec recrutement
- ✅ Compatible Airtable / n8n

---

## 3. ROBUSTESSE TECHNIQUE

### Gestion d'erreur — Pattern appliqué partout

```javascript
async function sendToWebhook(data) {
    try {
        const controller = new AbortController();
        const timeoutId = setTimeout(() => controller.abort(), timeout);

        const response = await fetch(webhookUrl, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
            signal: controller.signal
        });

        clearTimeout(timeoutId);

        // 1. Vérification statut HTTP
        if (!response.ok) {
            throw new Error('HTTP ' + response.status);
        }

        // 2. Parse JSON avec fallback si réponse texte/vide
        let result = {};
        try {
            const text = await response.text();
            if (text) result = JSON.parse(text);
        } catch (parseError) {
            // n8n peut retourner du texte brut — pas une erreur
        }

        return { success: true, data: result };

    } catch (error) {
        // Retry logic...
        return { success: false, error: error.message };
    }
}
```

### Éléments de robustesse
- ✅ Timeout réseau configurable (15s par défaut)
- ✅ Retry automatique (2 tentatives)
- ✅ Vérification `response.ok` avant parsing
- ✅ Fallback si réponse non-JSON
- ✅ AbortController pour annulation propre
- ✅ Messages d'erreur informatifs pour l'utilisateur

---

## 4. UX — EXPÉRIENCE UTILISATEUR

### Après soumission réussie
- ✅ Formulaire masqué (`form.style.display = 'none'`)
- ✅ Message succès premium affiché
- ✅ Scroll automatique vers le message
- ✅ Aucun `alert()`
- ✅ Aucun comportement brutal

### Validation temps réel
- ✅ Validation sur `blur` et `input`
- ✅ Messages d'erreur inline
- ✅ Attribut `aria-invalid` pour accessibilité
- ✅ Focus sur premier champ en erreur

---

## 5. TEMPLATES EMAILS — VERSION PREMIUM B2B

### Fichiers créés/modifiés

| Fichier | Usage | Variables n8n |
|---------|-------|---------------|
| `email-client-mini-devis.html` | Confirmation client | `$json.nom`, `$json.email`, `$json.service`, `$json.ville`, etc. |
| `email-interne-mini-devis.html` | Notification équipe | Idem + boutons actions rapides |
| `email-interne-recrutement.html` | Notification RH | `$json.nom`, `$json.poste`, `$json.motivation`, etc. |

### Caractéristiques des emails
- ✅ Design responsive (mobile-first)
- ✅ Compatible Outlook/Gmail/Apple Mail
- ✅ En-tête avec branding Morais Cleaning
- ✅ Récapitulatif structuré
- ✅ Délai "48 heures ouvrables" (pas 2h)
- ✅ Boutons d'action rapide (email interne)
- ✅ Signature professionnelle
- ✅ Pied de page légal

### Sujet email recommandé (n8n)
```
Client: Votre demande de devis rapide — Morais Cleaning
Interne: 🔔 Mini-devis — {{ $json.nom }} — {{ $json.service }}
Recrutement: 👤 Candidature — {{ $json.nom }} — {{ $json.poste }}
```

---

## 6. COHÉRENCE PROJET

### Tableau de cohérence entre formulaires

| Aspect | Mini-devis | Devis complet | Contact | Recrutement |
|--------|------------|---------------|---------|-------------|
| JSON aplati | ✅ | ✅ | ✅ | ✅ (FormData) |
| Gestion erreur | ✅ | ✅ | ✅ | ✅ |
| Masquage form | ✅ | ✅ | ❌ (reset) | ✅ |
| Message succès | ✅ | ✅ | ✅ (notification) | ✅ |
| Délai réponse | 48h | 24-48h | ASAP | 48h |

---

## 7. FICHIERS MODIFIÉS

### JavaScript
- `/public/js/devis-rapide.js` — **REFONTE COMPLÈTE**

### HTML
- `/index.html` — Section mini-devis mise à jour

### Templates emails
- `/public/email-templates/email-client-mini-devis.html` — **NOUVEAU**
- `/public/email-templates/email-interne-mini-devis.html` — **NOUVEAU**
- `/public/email-templates/email-interne-recrutement.html` — **NOUVEAU**

---

## 8. CONFIGURATION N8N RECOMMANDÉE

### Webhook mini-devis
```
URL: https://n8n.morais-cleaning.com/webhook/mini-devis
Méthode: POST
Content-Type: application/json
```

### Workflow n8n suggéré
1. **Webhook** — Réception du payload
2. **Set** — Formatage des données si nécessaire
3. **Send Email (Client)** — Template `email-client-mini-devis.html`
4. **Send Email (Interne)** — Template `email-interne-mini-devis.html`
5. **Airtable** (optionnel) — Enregistrement dans base CRM

---

## 9. TESTS RECOMMANDÉS

### Scénarios de test

1. **Soumission valide**
   - Remplir tous les champs requis
   - Vérifier masquage formulaire
   - Vérifier affichage message succès
   - Vérifier réception emails

2. **Validation champs**
   - Email invalide → message erreur
   - Téléphone invalide → message erreur
   - Champs requis vides → message erreur

3. **Gestion erreur réseau**
   - Couper connexion → message erreur affiché
   - Bouton réactivé après erreur

4. **Responsive**
   - Test mobile (< 600px)
   - Test tablette
   - Test desktop

---

## 10. MAINTENANCE

### Points d'attention
- Mettre à jour `MINI_DEVIS_CONFIG.webhookUrl` si l'URL change
- Tester après chaque modification n8n
- Vérifier les templates emails sur différents clients

### Évolutions possibles
- Ajout d'un champ "Fréquence souhaitée"
- Intégration calendrier pour prise de RDV
- Estimation tarifaire automatique

---

**Document généré lors de l'audit technique complet — Janvier 2026**
