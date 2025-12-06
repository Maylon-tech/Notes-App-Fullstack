import User from '../models/Notes.js'


export const authLogin = async (req, res) => {
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
}


export const createNote = async (req, res) => {
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
}


export const updateNote = async (req, res) => { }


export const deleteNote = async (req, res) => { }

