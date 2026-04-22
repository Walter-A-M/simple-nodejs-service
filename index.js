const express = require('express')
const app = express()
const bodyparser = require('body-parser')
app.use(express.json())
app.use(express.urlencoded({ extended: true }));
require("dotenv").config();


app.get('/', (req,res) =>{
    res.send('Hello, world!')
})

app.get('/secret', (req, res) => {
  res.send(`
    <form action="/secret" method="POST">
      <input name="name" placeholder="username" />
      <input name="pass" type="password" placeholder="password" />
      <button type="submit">Login</button>
    </form>
  `);
});

app.post('/secret', (req,res) => 
{
    const {name,pass} = req.body;

    const user = name === process.env.USERNAME && pass === process.env.PASSWORD; 

    if(!user){
        return res.status(401).json({ message: 'Invalid credentials' });
    }  

    res.json({ message: process.env.SECRET_MESSAGE}); 
})

app.listen(3000, () => {
    console.log("よ～")
})