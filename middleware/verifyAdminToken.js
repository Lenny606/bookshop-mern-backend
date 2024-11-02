import jwt from 'jsonwebtoken';
import dotenv from "dotenv";

dotenv.config()
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

export const verifyAdminToken = (req, res, next) => {
    const token = req.headers['authorization']?.split(" ")[1]

    if (!token) {
        return res.status(401).send({ message: 'Access denied. No token provided.' });
    }

    jwt.verify(token, JWT_SECRET_KEY, function(err, token) {
        if (err) {
            return res.status(403).send({ message: 'Access denied. Invalid token.' });
        }
        req.user = token;
        next();
    })
}