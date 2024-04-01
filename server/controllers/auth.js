import User from "../models/user.js";
import { hashPassword, comparePassword } from "../utils/auth.js";
import jwt from "jsonwebtoken"

// Generate a JWT
const generateToken = (id) => {
    return jwt.sign({ id }, process.env.JWT_SECRET, { expiresIn: "7d" })
}

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email) {
            return res.status(400).send("Please provide username and email")
        }

        if (!password || password.length < 6) {
            return res.status(400).send("Password is required and should be min 6 character long")
        }

        const userExists = await User.findOne({ email })

        if (userExists) {
            return res.status(400).send("Email already taken")
        }

        const hashedPassword = await hashPassword(password)

        const user = new User({
            username,
            email,
            password: hashedPassword
        })

        await user.save()
        console.log(user)
        return res.status(201).json({ success: true })
    } catch (error) {
        return res.status(400).send("Error. Try again")
    }
}

export const login = async (req, res) => {
    try {
        const { email, password } = req.body
        // Check db for email
        const user = await User.findOne({ email })
        if (!user) return res.status(400).send("No user found")
        // Check password match
        const match = await comparePassword(password, user.password)
        if (!match) return res.status(400).send("Incorrect Password")
        const token = generateToken(user._id)
        user.password = undefined

        res.cookie("token", token, {
            httpOnly: true,
        })
        res.json(user)
    } catch (err) {
        console.log(err)
        return res.status(400).send("Error. Try again")
    }
}

export const logout = (req, res) => {
    try {
        res.clearCookie("token")
        return res.status(200).json({ message: "Logged Out" })
    } catch (err) {
        console.log(err)
    }
}