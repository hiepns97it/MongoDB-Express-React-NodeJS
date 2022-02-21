import cors from 'cors'
import express from 'express'
import dotenv from 'dotenv'
dotenv.config()
import 'express-async-errors'
import morgan from 'morgan'

import helmet from 'helmet'
import xss from 'xss-clean'
import mongoSanitize from 'express-mongo-sanitize'

// build BE
import { dirname } from 'path'
import { fileURLToPath } from 'url'
import path from 'path'


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

const __dirname = dirname(fileURLToPath(import.meta.url))

const app = express()

if (process.env.NODE_ENV !== 'production') {
  app.use(morgan('dev'))
}

app.use(cors())
app.use(express.json())
app.use(helmet())
app.use(xss())
app.use(mongoSanitize())

// only when ready to deploy
app.use(express.static(path.resolve(__dirname, './client/build')))

// router
app.use('/api/v1/auth', authRouter)
app.use('/api/v1/jobs', authenticateUser, jobsRouter)

// only when ready to deploy
app.get('*', function (request, response) {
  response.sendFile(path.resolve(__dirname, './client/build', 'index.html'))
})

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