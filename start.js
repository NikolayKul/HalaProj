import dotenv from 'dotenv'
import express from 'express'
import logger from './utils/logger'

dotenv.config()

const app = express(),
  PORT = process.env.PORT || 3000

app.get('/', (req, res) => res.send('Hello world!'))

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something went wrong")
})

app.listen(PORT, () => logger(`Server is running on port ${PORT}`))
