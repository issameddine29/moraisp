/**
* CONFIGURATION N8N - MORAIS CLEANING
*
* Configuration des webhooks n8n pour les formulaires
* Contact et Recrutement
*
* IMPORTANT : Remplacer les URLs par les vraies URLs n8n
*/

// URLs des webhooks n8n
export const N8N_CONTACT_WEBHOOK_URL = 'https://n8n.morais-cleaning.com/webhook/contact';
export const N8N_RECRUIT_WEBHOOK_URL = 'https://n8n.morais-cleaning.com/webhook/recrutement';

// Configuration
export const N8N_CONFIG = {
    // Timeout des requêtes (ms)
timeout: 10000,

// Retry en cas d'échec
maxRetries: 2,
retryDelay: 1000,

// Headers personnalisés (si nécessaire)
headers: {
    'Content-Type': 'application/json',
    // 'Authorization': 'Bearer YOUR_TOKEN', // Si authentification requise
},

// Mode debug
debug: false
};

// Fonction helper pour envoyer des données à n8n
export async function sendToN8N(webhookUrl, data, options = {}) {
    const config = { ...N8N_CONFIG, ...options };

    // Vérifier que l'URL est configurée
    if (!webhookUrl || webhookUrl.includes('votre-instance-n8n.com')) {
        // console.warn('⚠️ URL n8n non configurée. Veuillez mettre à jour n8n-config.js');
        return {
            success: false,
            error: 'URL n8n non configurée'
        };
    }

    let lastError = null;

    // Retry loop
    for (let attempt = 0; attempt <= config.maxRetries; attempt++) {
        try {
            if (config.debug) {
                // console.log(`[n8n] Tentative ${attempt + 1}/${config.maxRetries + 1}`, data);
            }

            const controller = new AbortController();
            const timeoutId = setTimeout(() => controller.abort(), config.timeout);

            const response = await fetch(webhookUrl, {
                method: 'POST',
                headers: config.headers,
                body: JSON.stringify(data),
                signal: controller.signal
            });

            clearTimeout(timeoutId);

            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }

            const result = await response.json().catch(() => ({}));

            if (config.debug) {
                // console.log('[n8n] Succès:', result);
            }

            return {
                success: true,
                data: result
            };

        } catch (error) {
            lastError = error;

            if (config.debug) {
                // console.error(`[n8n] Erreur tentative ${attempt + 1}:`, error);
            }

            // Si ce n'est pas la dernière tentative, attendre avant de réessayer
            if (attempt < config.maxRetries) {
                await new Promise(resolve => setTimeout(resolve, config.retryDelay));
            }
        }
    }

    // Échec après tous les retries
    return {
        success: false,
        error: lastError?.message || 'Erreur lors de l\'envoi à n8n'
    };
}
