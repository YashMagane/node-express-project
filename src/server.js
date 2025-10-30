import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import planetsRouter from './routes/planets.js';

dotenv.config()
const app = express()
const port = process.env.PORT || 3000

app.use(cors())
app.use(express.json())

app.use('/planets', planetsRouter);

app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: 'Something went wrong' })
})

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`)
})