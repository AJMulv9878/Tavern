const router = require('express').Router();
const loginController = require('../../controllers/loginController');

router.route("/")
    .post(loginController.compare)

module.exports = router;