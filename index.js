const express = require("express");
const app = express();

require('dotenv').config()

const authRouter = require('./routers/auth.route')

app.use(express.json())

app.get('/', (req, res) => {
    res.status(200).json({
        "success": true,
        "message": "Welcome to my Todo project"
    })
})

app.use('/auth', authRouter)

const PORT = 8000 ;
app.listen(PORT, () =>{
    console.log(`server running on PORT ${PORT}`);
    
})