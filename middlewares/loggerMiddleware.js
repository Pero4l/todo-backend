// const fs = require('fs')
// const path = './allRequest.json'

// function loggerMiddleware(req, res, next){
//     const log = `"${new Date().toISOString()} - ${req.method} ${req.originalUrl}"`

//    const data = log

//    console.log(data);
   
//     fs.appendFile(path, data, (err) => {
//         if(err){
//             console.error('Failed to write to log file:', err)
//         }
//     })

//     next()
// }

// module.exports = {loggerMiddleware}