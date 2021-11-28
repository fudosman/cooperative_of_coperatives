const router = require('express').Router();
const userCtrl = require('../../controller/users/user');

// User registration
router.post('/register', userCtrl.register);
// User login
router.post('/login', userCtrl.login);

module.exports = router;