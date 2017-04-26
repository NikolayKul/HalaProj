var express = require('express')
var app = express()

app.get('/', (req, res) => {
  res.send('Hello world!')
})

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something went wrong")
})

app.listen(3000, () => {
  console.log('Server is running');
})
