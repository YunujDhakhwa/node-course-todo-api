const express = require('express');
const bodyParser = require('body-parser');

var {
  mongoose
} = require('./db/mongoose');
var {
  Todo
} = require('./models/todos')
var {
  User
} = require('./models/users')


var app = express();

app.use(bodyParser.json());

app.post('/todos', (req, res) => {
  console.log(req.body);
  var todo = new Todo({text: req.body.text});
  todo.save().then((docs) => {
    res.send(docs).status(200);
  }, (err) => {
    res.status(400).send(err)
  });
});

app.listen(3000, () => {
  console.log('Server up and running');
})
