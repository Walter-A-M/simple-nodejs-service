const express = require('express')
const app = express()
//const bodyparser = require('body-parser')
//app.use(bodyParser.json());
require("dotenv").config();

app.get('/', (req,res) =>{
    res.send('Hello, world!')
})

app.use(express.json())

app.post('/secret', (req,res) => 
{
    const {USERNAME,PASSWORD} = req.body;

    const user = USERNAME === process.env.USERNAME && PASSWORD === process.env.PASSWORD; 

    if(!user){
        //return res.status(401).json({ message: 'Invalid credentials' });
        //res.send('wrong!');
    }  

    res.json({ message: process.env.SECRET_MESSAGE}); 
    res.send(process.env.SECRET_MESSAGE);
})

app.listen(3000, () => {
    console.log("よ～")
})