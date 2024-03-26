import User from "../models/user.js";
import { hashPassword, comparePassword } from "../utils/auth.js";

export const register = async (req, res) => {
    try {
        const { username, email, password } = req.body;

        if (!username || !email) {
            res.status(400).send("Please provide valid username and email")
        }

        if (!password || password.length < 6) {
            res.status(400).send("Password is required and should be min 6 character long")
        }

        const userExists = await User.findOne({ email })

        if (userExists) {
            res.status(400).send("Email already taken")
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