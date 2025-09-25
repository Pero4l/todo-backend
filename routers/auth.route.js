const exprees = require("express")
const router = exprees.Router()

const {register} = require("../controllers/authController")


router.post('/register', register)


module.exports = router