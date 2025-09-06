const jwt = require('jsonwebtoken');
const JWT_SECRET = process.env.JWT_SECRET;

function swapMiddleware(req, res, next) {
    try {
        const token = req.headers.authorization;
        if (!token) {
            return res.status(401).json({ error: "Access denied. No token provided." });
        }

        const words = token.split(' ');
        const decoded = jwt.verify(words[1], JWT_SECRET);

        if (decoded.email) {
            req.email = decoded.email;
            next();
        }
    } catch (err) {
        return res.status(401).json({ error: "Invalid token." });
    }
}

module.exports = swapMiddleware;
