import dotenv from 'dotenv'
import express from 'express'
import logger from './utils/logger'

dotenv.config()

const app = express()
app.get('/', (req, res) => res.send('Hello world!'))
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).send("Something went wrong")
})

const HOST = process.env.HOST || "localhost",
  PORT = process.env.PORT || 3000
app.listen(PORT, HOST, () => logger(`Server is running on ${HOST}:${PORT}`))
