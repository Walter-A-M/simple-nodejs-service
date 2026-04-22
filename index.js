require("dotenv").config();

const express = require('express')
const app = express()

app.use(express.json())
app.use(express.urlencoded({ extended: true }));


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

app.post('/secret', (req, res) => {
  const { name, pass } = req.body;

  const valid =
    name === process.env.AUSERNAME &&
    pass === process.env.APASSWORD;

  if (!valid) {
    return res.status(401).send('Invalid credentials');
  }

  res.send(process.env.SECRET_MESSAGE);
});

app.listen(3000, () => {
    console.log("よ～")
})