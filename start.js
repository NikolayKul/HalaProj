require('dotenv').config()

const express = require('express'),
  app = express(),
  logger = require('./utils/logger'),
  PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello world!'))

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something went wrong")
})

app.listen(PORT, () => logger(`Server is running on port ${PORT}`))
