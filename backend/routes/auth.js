const express = require('express');
const User = require('../models/User');
const { body, validationResult } = require('express-validator');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const fetchUser = require('../middleware/fetchUser');

const router = express.Router();
const JWT_SECRETKEY = "srikantisverygoodboy";

// 400 - client error

// ROUTE 1: Create a user POST: /api/auth/createuser  NO AUTH
router.post('/createuser', [
    body('name', 'Enter a valid name').isLength({ min: 3 }),
    body('email').isEmail(),
    body('password').isLength({ min: 5 })
], async (req, res) => {
    let success = false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, error: errors.array() })
    }
    // Checks if same user present or not
    // Put in try because sometimes mongodb server can fail
    try {
        const { name, email, password } = req.body;
        let user = await User.findOne({ email: email });
        if (user) { // Already exits 
            return res.status(400).json({success, msg: 'Sorry this email already exits.'});
        }
        // hashing passwords with bcryptjs
        const salt = await bcrypt.genSalt();
        const secPass = await bcrypt.hash(password, salt);
        user = await User.create({
            name, email, password: secPass
        });
        // data should be unique like _id
        const data = {
            user: { id: user.id }
        };
        const authToken = jwt.sign(data, JWT_SECRETKEY);
        success = true; 
        res.json({success, authToken});
    }
    catch (error) {
        console.error(error);
        res.status(500).send("Internal server error occured.");
    }
});

// ROUTE 2: Authenticate a user: POST "/api/auth/login". Doesn't require auth
router.post('/login', [
    body('email', 'Enter a valid email.').isEmail(),
    body('password', 'Password cannot be blank').exists()
], async (req, res) => {
    // If there are error then return bad requests and errors
    const errors = validationResult(req);
    let success = false; 
    if (!errors.isEmpty()) {
        success = false
        return res.status(400).json({ error: errors.array() });
    }
    const { email, password } = req.body;
    try {
        const user = await User.findOne({ email: email });
        if (!user) {
            return res.status(400).json({ msg: "Please try to login with correct credentials" });
        }
        const passwordCompare = await bcrypt.compare(password, user.password);
        if (!passwordCompare) {
            return res.status(400).json({ msg: "Please try to login with correct credentials" });
        }

        const data = {
            user: { id: user.id }
        };
        success = true
        const authToken = jwt.sign(data, JWT_SECRETKEY);
        res.send({ success, authToken });
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Internal server error occured.");
    }
})

// ROUTE 3: Get logged in user details via /auth/getUser. Login required
router.post('/getUser', fetchUser, async (req, res) => {
    try {
        // res.send(req.user.id);
        const userId = req.user.id;
        const user = await User.findById(userId).select("-password");
        res.send(user);
    }
    catch (err) {
        console.error(err);
        res.status(500).send("Internal server error occured.");
    }
});

module.exports = router; 