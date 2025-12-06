import mongoose from 'mongoose'

export const connectDB = async () => {

    try {
        await mongoose.connect(process.env.MONGO_URL, {})
        console.log("MongoDB connected Successfully.")
    } catch (error) {
        console.log("Error connecting t MongoDB", error)
        process.exit(1)
    }
}

export default connectDB