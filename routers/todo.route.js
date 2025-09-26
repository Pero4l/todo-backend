const express = require("express")
const router = express.Router()

const {addTodo, deleteTodo, getAllTodos, pagination, getPastTodo, markDone, getAuserTodo} = require('../controllers/todoController')
const {authMiddleware} = require('../middlewares/authMiddleware')

router.post('/add', authMiddleware, addTodo)
router.delete('/delete', authMiddleware, deleteTodo)
router.get('/getall', authMiddleware, getAllTodos)
router.get('/pagination', authMiddleware, pagination)
router.get('/past', authMiddleware, getPastTodo)
router.patch('/markdone', authMiddleware, markDone)
router.get('/usertodo', authMiddleware, getAuserTodo)


module.exports = router