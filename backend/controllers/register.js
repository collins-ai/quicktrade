import bcrypt from "bcrypt"
import User from "../models/user.js"

const registerController = async (req, res) => {
    try {
        const { username, email, password, confirmpassword } = req.body
        if (!username || !email || !password || !confirmpassword) {
            return res.status(400).json(`all fields are required!`)
        }

        const usedEmail = await User.findOne({ email })
        if (usedEmail) {
            return res.status(409).json(`email address already taken!`)
        }

        if (password !== confirmpassword) {
            return res.status(400).json(`recheck your password!`)
        }

        const hashedPassword = await bcrypt.hash(password, 10)
        const userData = await User.create({
            username, email, password: hashedPassword
        })

        res.status(201).json(userData)
    } catch (error) {
        res.status(500).json(error.message)
    }
}

export default registerController