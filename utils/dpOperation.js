const fs = require('fs')
const FILE_PATH = './user.json'

function readDb(){
    try{
        if(!fs.existsSync(FILE_PATH)) return []
        const data =fs.readFileSync(FILE_PATH, 'utf-8')
        return JSON.parse(data)

    } catch (err){
        console.log("Error reading file:", err);
        return []
    }
}


function writeDb(users){
    try{
        fs.writeFileSync(FILE_PATH, JSON.stringify(users, null, 2))

    } catch (err){
        console.log("Error writing file:", err);
        
    }
}


module.exports = {
    readDb,
    writeDb
}