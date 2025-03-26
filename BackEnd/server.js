require('dotenv').config()

const { config } = require('dotenv')
const app = require('./src/app')



app.listen(3000 , ()=>{
    console.log('Server is running on http://localhost:3000')
})