import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'

// mongodb
import connectDB from './db/connect.js'

// routers
import authRouter from './routes/authRoutes.js'
import jobsRouter from './routes/jobsRoutes.js'

// middleware
import notFoundMiddleware from './middleware/not-found.js'
import errorHandlerMiddleware from './middleware/error-handler.js'

// authenticator
import authenticateUser from './middleware/auth.js'

const app = express()

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())


app.get('/', (req, res) => {
  res.send({msg: 'Welcome'})
})

// router
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

app.use(notFoundMiddleware)
app.use(errorHandlerMiddleware)
const port = process.env.PORT || 5000

const start = async () => {
  try {
    await connectDB(process.env.MOGO_URL)
    app.listen(port, () => console.log(`Server is listening on port ${port}...`))
  } catch(error) {
    console.log(error)
  }
}
start()