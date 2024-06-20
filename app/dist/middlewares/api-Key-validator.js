"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyValidator = void 0;
// Lista de API Keys válidas (em um ambiente real, isso seria armazenado de forma mais segura)
const VALID_API_KEYS = ['123456', 'abcdef', 'ghijkl'];
const apiKeyValidator = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (!apiKey) {
        return res.status(401).json({ message: 'API key is missing' });
    }
    if (!VALID_API_KEYS.includes(apiKey)) {
        return res.status(403).json({ message: 'Invalid API key' });
    }
    next();
};
exports.apiKeyValidator = apiKeyValidator;
//# sourceMappingURL=api-Key-validator.js.map