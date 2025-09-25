const express = require("express")
const router = express.Router()

const {register, login} = require("../controllers/authController")
const {loginMiddleware} = require('../middlewares/loginMiddleware')


router.post('/register', register)
router.post('/login', loginMiddleware, login)


module.exports = router