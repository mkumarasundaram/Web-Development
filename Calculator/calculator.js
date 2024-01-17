const express = require('express')
const bodyParser = require('body-parser')
const app = express()
const port = 3000

app.use(bodyParser.urlencoded({ extended: false }));

app.listen(port, () => {
  console.log(`Calculator app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.sendFile(__dirname+'/index.html');
})

app.post('/',  (req, res) => {
  console.log(req.body)
  var n1 = Number(req.body.num1);
  var n2 = Number(req.body.num2);
  var result = n1+n2;
  res.send("Result = " + result);
})

app.get('/bmicalculator', (req, res) => {
  res.sendFile(__dirname+'/bmiCalculator.html');
})

app.post('/bmicalculator',  (req, res) => {
  console.log(req.body)
  var weight = Number(req.body.weight);
  var height = Number(req.body.height);
  var result = weight / height**2;
  res.send("Result = " + result);
  console.log(height^2);
})
