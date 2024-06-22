"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.apiKeyValidator = void 0;
const get_api_key_service_1 = require("../services/get-api-key/get-api-key.service");
const apiKeyValidator = (req, res, next) => {
    const apiKey = req.header('x-api-key');
    if (!apiKey) {
        return res.status(401).json({ message: 'API key is missing' });
    }
    const service = new get_api_key_service_1.GetApiKeyService();
    service.execute({ key: apiKey }).then((key) => {
        if (!key) {
            return res.status(403).json({ message: 'Invalid API key' });
        }
        else {
            next();
        }
    }).catch(() => {
        return res.status(403).json({ message: 'Invalid API key' });
    });
};
exports.apiKeyValidator = apiKeyValidator;
//# sourceMappingURL=api-Key-validator.js.map