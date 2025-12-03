import express from 'express'
import cors from 'cors'
import dontenv from 'dotenv'
import config from './config.json'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { authenticateToken } from './utilities.js'

mongoose.connect(config.connectionString)
const app = express()

app.use(express.json())

app.use(cors({ origin: "*" }))

app.get("/", (req, res) => {
    res.json({ data: "Hello World 2025" })
})

// Create Account
app.post("/create-account", async (req, res) => {
    const { fullName, email, password } = req.body

    if (!fullName) {
        return res
            .status(400)
            .json({ error: true, message: "Full Name is required" })
    }
    if (!email) {
        return res
            .status(400)
            .json({ error: true, message: "Email is required" })
    }
    if (!password) {
        return res
            .status(400)
            .json({ error: true, message: "Password is required" })
    }
})



app.listen(8000, () => console.log("Server started on port 8000"))