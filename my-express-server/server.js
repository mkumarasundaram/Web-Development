const express = require('express')
const app = express()
const port = 3000

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.get('/', (req, res) => {
  res.send('<h1>Hello World!</h1>')
})

app.get('/contact', (req, res) => {
  res.send('<h1>Contact me at <i>mkumarasundaram@gmail.com </i></h1>')
})

app.get('/about', (req, res) => {
  res.send('<h1>This page is created by Kumara Sundaram</h1>')
})
