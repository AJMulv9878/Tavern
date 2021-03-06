const router = require('express').Router();
const signupRoutes = require('./signup');
const loginRoutes = require('./login');
const userRoutes = require('./user.js');

router.use('/signup', signupRoutes);
router.use('/login', loginRoutes);
router.use('/user', userRoutes);

module.exports = router;