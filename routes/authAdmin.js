const router = require('express').Router();
const handleAdminLogin = require('../controllers/authAdminController.js')
router.post('/', handleAdminLogin)

module.exports = router