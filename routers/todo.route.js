const express = require("express")
const router = express.Router()

const {addTodo} = require('../controllers/todoController')
const {authMiddleware} = require('../middlewares/authMiddleware')

router.post('/add', authMiddleware, addTodo)


module.exports = router