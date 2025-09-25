const express = require("express")
const router = express.Router()

const {addTodo, deleteTodo} = require('../controllers/todoController')
const {authMiddleware} = require('../middlewares/authMiddleware')

router.post('/add', authMiddleware, addTodo)
router.delete('/delete', authMiddleware, deleteTodo)


module.exports = router