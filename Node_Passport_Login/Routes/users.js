
const express = require('express');
const router = express.Router();

// Login Page
router.get('/login', (req, res) => {
    console.log('Login page accessed');
    res.render('login');
});

// Register Page
router.get('/register', (req, res) => {
    console.log("Register page accessed");
    res.render('register');
});

module.exports = router;
