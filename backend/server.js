import express from 'express'
import cors from 'cors'
import dontenv from 'dotenv'
import config from './config.json'
import mongoose from 'mongoose'
import jwt from 'jsonwebtoken'
import { authenticateToken } from './utilities.js'
import User from './models/Notes.js'


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

    const isUser = await User.findOne({ email: email })

    if (isUser) {
        return res.json({
            error: true,
            message: "User already exist."
        })
    }

    const user = new User({
        fullName,
        email,
        password,
    })

    await user.save()
})

// Login Account
app.post("/login", async (req, res) => {
    const { email, password } = req.body

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

    const userInfo = await User.findOne({ email: email })

    if (!userInfo) {
        return res.status(400).json({ message: "User not found" })
    }

    if (userInfo.email == email && userInfo.password == password) {
        const user = { user: userInfo }
        const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECRET, {
            expireIn: "36000m",
        })
        return res.json({
            error: false,
            message: "Login Successful",
            email,
            accessToken,
        })
    } else {
        return res.status(400).json({
            error: true,
            message: "Invalid Credentials."
        })
    }
})

app.listen(8000, () => console.log("Server started on port 8000"))