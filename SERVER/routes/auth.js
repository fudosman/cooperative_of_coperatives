const router = require('express').Router();
const authCtrl = require('../controller/auth');

// User registration
router.post('/register', authCtrl.register);
// User login
router.post('/login', authCtrl.login);

module.exports = router;