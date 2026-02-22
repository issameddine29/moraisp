# PRD — Morais Cleaning Website
## Audit Technique et Corrections

---

## 📋 Problème Initial (Demande Utilisateur)

L'utilisateur a demandé un **audit complet** du système mini-devis + emails pour le site Morais Cleaning (société de nettoyage B2B):

1. **Architecture données** — JSON non standardisé, champs incohérents
2. **Robustesse technique** — Gestion d'erreur fragile
3. **Emails mini-devis** — Templates absents, délai "2h" irréaliste
4. **Emails recrutement** — Email interne absent
5. **UX** — Pas de masquage formulaire après succès
6. **Cohérence projet** — Différences entre mini-devis, devis complet, recrutement

---

## 👥 Personas

| Persona | Description | Besoins |
|---------|-------------|---------|
| **Client B2B** | Entreprise cherchant service de nettoyage | Formulaire rapide, réponse < 48h |
| **Équipe commerciale** | Traite les demandes de devis | Email interne structuré, actions rapides |
| **Candidat** | Postule à un emploi | Confirmation professionnelle |
| **Équipe RH** | Gère les candidatures | Email interne avec CV et actions |

---

## ✅ Exigences Core (Implémentées)

### 1. Mini-Devis — JavaScript (`devis-rapide.js`)
- [x] JSON aplati standardisé
- [x] Champ `nom` ajouté
- [x] Gestion d'erreur robuste (try/catch, response.ok, fallback)
- [x] Timeout réseau + retry automatique
- [x] Masquage formulaire après succès
- [x] Message "48h ouvrables" (pas 2h)
- [x] Zéro `alert()`, zéro `mailto:`

### 2. Mini-Devis — HTML (13 pages + index.html)
- [x] Champ nom ajouté
- [x] Messages succès/erreur premium
- [x] Trust badges "48h" au lieu de "2h"
- [x] Attributs `data-testid` pour tests

### 3. Templates Emails Mini-Devis
- [x] `email-client-mini-devis.html` — Confirmation client premium B2B
- [x] `email-interne-mini-devis.html` — Notification équipe avec actions

### 4. Templates Emails Recrutement
- [x] `email-candidat-recrutement.html` — Amélioré et professionnel
- [x] `email-interne-recrutement.html` — NOUVEAU, notification RH

---

## 📊 Structure JSON Finale

```json
{
  "nom": "string",
  "email": "string",
  "telephone": "string",
  "ville": "string",
  "service": "string",
  "surface": "string",
  "message": "string",
  "source": "mini-devis",
  "page": "string",
  "timestamp": "ISO 8601"
}
```

---

## 📁 Fichiers Modifiés

| Fichier | Action |
|---------|--------|
| `/public/js/devis-rapide.js` | Refonte complète |
| `/index.html` | Section mini-devis mise à jour |
| `/public/html/*.html` (13 fichiers) | Formulaires mis à jour |
| `/public/email-templates/email-client-mini-devis.html` | NOUVEAU |
| `/public/email-templates/email-interne-mini-devis.html` | NOUVEAU |
| `/public/email-templates/email-candidat-recrutement.html` | Amélioré |
| `/public/email-templates/email-interne-recrutement.html` | NOUVEAU |
| `/AUDIT_TECHNIQUE.md` | Documentation complète |

---

## 🔧 Configuration n8n

### Webhook Mini-Devis
```
URL: https://n8n.morais-cleaning.com/webhook/mini-devis
Méthode: POST
Content-Type: application/json
```

### Sujets Email Recommandés
- Client : `Votre demande de devis rapide — Morais Cleaning`
- Interne : `🔔 Mini-devis — {{ $json.nom }} — {{ $json.service }}`
- Candidat : `Votre candidature chez Morais Cleaning`
- RH : `👤 Candidature — {{ $json.nom }} — {{ $json.poste }}`

---

## 📈 Backlog

### P0 (Fait ✅)
- [x] Tous les items listés ci-dessus

### P1 (À considérer)
- [ ] Ajout champ "Fréquence souhaitée" au mini-devis
- [ ] Intégration calendrier pour prise de RDV
- [ ] Estimation tarifaire automatique (calculateur amélioré)

### P2 (Futures)
- [ ] Multi-langue (FR/NL/EN)
- [ ] Dashboard client avec suivi devis
- [ ] Intégration CRM Airtable complète

---

## 📅 Historique

| Date | Action |
|------|--------|
| Jan 2026 | Audit complet + corrections |

---

**Hébergement**: OVHcloud (site statique)
**Stack**: HTML/CSS/JS + n8n webhooks
