const {readDb, writeDb} = require('../utils/dpOperation')


async function addTodo(req, res){
    const{title, description} = req.body

    const users = readDb()

    if(!title || !description){
        return res.status(400).json({
            "success": false,
            "message": "Todo title is required"
        })
    }


    if(users['todo'].find((t)=> t.title === title && t.description === description)){
        return res.status(400).json({
            "success": false,
            "message": "Todo already exsit"
        })
    }

    const id = users['todo'].length + 1;
    const date = new Date().toLocaleDateString('en-CA');
    const status = false;

    const newTodo = {
        id,
        title,
        description,
        status,
        date
    }

    users['todo'].push(newTodo)

    writeDb(users)
    res.status(200).json({
            "success": true,
            "message": "Todo added successfully",
            "data": newTodo
        })

}


async function deleteTodo(req, res){
  const { id } = req.body;

  const users = readDb();
  let todo = users['todo'].find((t) => t.id === id);

  if (!todo) {
    return res.status(400).json({
      success: false,
      message: "Could not delete todo",
    });
  }

  users['todo'] = users['todo'].filter((t) => t.id !== id);

  writeDb(users);

  console.log("Todo deleted successfully:", todo);

  res.status(200).json({
    success: true,
    message: "Todo deleted successfully",
    data: todo,
  });

};


async function getAllTodos(req, res) {
    const users = readDb()

    const addData = users['todo']

    res.status(200).json({
        "success": true,
            "message": "Todo gotten successfully",
            "data": addData
    })
    
}




module.exports = {addTodo, deleteTodo, getAllTodos, pagination, getPastTodo}