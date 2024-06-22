"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyValidatorAdmin = void 0;
const apiKeyValidatorAdmin = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (!apiKey) {
        return res.status(401).json({ message: 'API key is missing' });
    }
    const keyAdmin = process.env.API_KEY_ADMIN;
    if (keyAdmin !== apiKey) {
        return res.status(403).json({ message: 'Invalid API key' });
    }
    next();
};
exports.apiKeyValidatorAdmin = apiKeyValidatorAdmin;
//# sourceMappingURL=api-Key-validator-admin.js.map