import express from 'express'
import cors from 'cors'
import dontenv from 'dotenv'
import notesRoutes from './routes/notesRoutes.js'
import connectDB from './config/db.js'
// import jwt from 'jsonwebtoken'
// import { authenticateToken } from './utilities.js'

dontenv.config()
// mongoose.connect(config.connectionString)
const app = express()
connectDB()
app.use(express.json())

app.use(
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
)

app.use("/api/auth", notesRoutes)

app.listen(8000, () => console.log("Server started on port 8000"))