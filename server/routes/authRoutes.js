const express = require('express');
const passport = require('passport');
const router = express.Router();
const authController = require('../controllers/authController');

router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));
router.get("/google/callback", passport.authenticate("google", { failureRedirect: "http://localhost:3000/login" }), authController.googleAuthCallback);
router.get("/login/success", authController.loginSuccess);
router.get("/logout", authController.logout);

module.exports = router;
