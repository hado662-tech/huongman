// ===== GROK AI CONFIGURATION TEMPLATE =====
// File mẫu - KHÔNG chứa API key thật
// Copy file này thành ai-config.js và điền API key

const AI_CONFIG = {
    // Grok API Key - Lấy tại: https://console.x.ai/
    // Thay YOUR_GROK_API_KEY_HERE bằng key thật
    apiKey: 'YOUR_GROK_API_KEY_HERE',
    
    apiEndpoint: 'https://api.x.ai/v1/chat/completions',
    model: 'grok-beta',
    temperature: 0.7,
    maxTokens: 500,
    timeout: 30000,
    useFallback: true,
    
    // System prompt đầy đủ ở file thật (ai-config.js)
    systemPrompt: `Bạn là trợ lý AI của Thẩm Mỹ Viện Hương Mận...`
};

function isApiConfigured() {
    return AI_CONFIG.apiKey && 
           AI_CONFIG.apiKey !== 'YOUR_GROK_API_KEY_HERE' && 
           AI_CONFIG.apiKey.length > 20;
}

window.AI_CONFIG = AI_CONFIG;
window.isApiConfigured = isApiConfigured;
