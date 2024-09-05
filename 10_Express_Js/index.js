const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello from home page!')
});

app.get("/about", (req, res) => {
    res.send("Hello from about page!" + " hey " + req.query.name + " you are " + req.query.age);
});

app.listen(port);