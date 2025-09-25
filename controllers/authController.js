const {readDb, writeDb} = require('../utils/dpOperation')
const bcrypt = require('bcrypt')

async function register(req, res){
     const {name, email, password} = req.body;

     let users = readDb()

     if (!name || !email || !password) {
        return res.status(400).json({message: "All fields are required"});
    }
    
    if (password.length < 6) {
        return res.status(400).json({
            message: "Password must be at least 6 characters"
        });

    } else if ( !/[A-Z]/.test(password) || !/[a-z]/.test(password)){
         return res.status(400).json({
            message: "Password must contain both uppercase and lowercase letters"
        });

    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        return res.status(400).json({message: "Invalid email format"});

    } else if (name.length < 3) {
        return res.status(400).json({message: "Name must be at least 3 characters"});
    }

    if(users['details'].find((u)=> u.email === email)){
         return res.status(400).json({
            "success": false,
            "message": "User already exists"
        })
    }

    const hashedPassword = await bcrypt.hash(password, 13)
    const id = users['details'].length + 1;
    const date = new Date().toLocaleDateString('en-CA');

    const newUser = {id, name, email, password: hashedPassword, date}

    users['details'].push(newUser)
    writeDb(users)

    res.status(201).json({ 
        "success" : true,
        "message": "User registered successfully",
        "data": newUser
    });

    



}


module.exports = {
    register
}