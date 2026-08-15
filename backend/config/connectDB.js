import mongoose from "mongoose"

const connectDB = async () => {
    try {
        const DB_URI = process.env.DB_URI
        await mongoose.connect(DB_URI)
    } catch (error) {
        console.log(error.message)
    }
}

export default connectDB