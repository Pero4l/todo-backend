const exprees = require("express");
const app = exprees();
const PORT = 8000;

const authRouter = require('./routers/auth.route')

app.use(exprees.json())

app.get('/', (req, res) => {
    res.status(200).json({
        "success": true,
        "message": "Welcome to my Todo project"
    })
})

app.use('/auth', authRouter)


app.listen(PORT, () =>{
    console.log(`server running on PORT ${PORT}`);
    
})