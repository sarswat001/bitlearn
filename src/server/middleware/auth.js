const jwt = require('jsonwebtoken');
require("dotenv").config();

const authenticateJwtAdmin = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.ADMIN_SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        console.log(user);
        next();
        });
    } else {
        res.sendStatus(401);
    }
};

const authenticateJwtUser = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (authHeader) {
        const token = authHeader.split(" ")[1];
        jwt.verify(token, process.env.USER_SECRET_KEY, (err, user) => {
        if (err) {
            return res.sendStatus(403);
        }
        req.user = user;
        next();
        });
    } else {
        res.sendStatus(401);
    }
};

const generateJwt = (user, type) => {
    const payload = { username: user.username };
    if (type === "user") {
        return jwt.sign(payload, process.env.USER_SECRET_KEY, { expiresIn: "5h" });
    } else {
        return jwt.sign(payload, process.env.ADMIN_SECRET_KEY, { expiresIn: "5h" });
    }
};
module.exports = {
    authenticateJwtAdmin,
    authenticateJwtUser,
    generateJwt
}