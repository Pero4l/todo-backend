const {readDb} = require('../utils/dpOperation')
const bcrypt = require('bcrypt')

async function loginMiddleware(req, res, next) {
    const {email, password} = req.body

    const users = readDb()
    const userExist = users['details'].find((u) => u.email === email)

    if (!userExist) {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials"
        });
    }

    const passMatch = await bcrypt.compare(password, userExist.password)
    if (!passMatch) {
        return res.status(401).json({
            success: false,
            message: "Invalid credentials"
        });
    }

    req.user = passMatch
    req.data = userExist
    next()
}

module.exports = {
    loginMiddleware
}