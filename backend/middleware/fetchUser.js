const jwt = require('jsonwebtoken');

const JWT_SECRETKEY = "srikantisverygoodboy";

// 401- Authentication failed
const fetchUser = (req, res, next) => {
    // Get the user from jwt token and add it to req obj
    const token = req.header('auth-token');
    if (!token) {
        return res.status(401).json({success: false, msg:"Please authenticate with a valid token"})
    }
    try {
        const data = jwt.verify(token, JWT_SECRETKEY);
        req.user = data.user;
        next();
    }
    catch (err) {
        return res.status(401).json({success: false, msg:"Please authenticate with a valid token"})
    }
}

module.exports = fetchUser; 