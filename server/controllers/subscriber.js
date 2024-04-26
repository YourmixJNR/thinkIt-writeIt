import Subscriber from "../models/subscriber.js";
import { generateEmailToken, verifyEmailToken } from "../utils/jwt.js";
import { sendMail } from "../utils/mail.js";

const clientUrl = process.env.CLIENT_URL;

export const subscribe = async (req, res) => {
    try {
        const { email } = req.body;
        if (!email) {
            return res.status(400).json({
                message: "Bad request",
                error: "Fields can't be empty",
            });
        }

        const checkEmail = await Subscriber.findOne({ email });

        if (checkEmail) {
            return res.status(400).json({
                message: "Bad request",
                error: "Already subscribe",
            });
        }

        const emailToken = generateEmailToken(email);

        const newSubscriber = await Subscriber.create({
            email: email,
            token: emailToken,
        });

        newSubscriber.save();

        await sendMail({
            recipient: email.toLowerCase().trim(),
            subject: "thinkIt-writeIt: Verify your email",
            content: `Click this link to verify your email: ${clientUrl}/verify?token=${emailToken}`,
        });

        return res.status(200).json({
            message: "Successfully subscribed! Please confirm your email.",
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
            error: err.message,
        });
    }
};

export const verifyMail = async (req, res) => {
    try {
        const { token } = req.query;
        if (!token) {
            return res.status(400).json({
                message: "Bad request",
                error: "No token provided",
            });
        }
        const { email } = verifyEmailToken(token);
        console.log(email);
        if (!email) {
            return res.status(400).json({
                message: "Bad request",
                error: "Invalid or expired token.",
            });
        }
        return res.render("verify", {
            title: "thinkIt-writeIt",
            email,
        });
    } catch (err) {
        console.error(err);
        return res.status(500).json({
            message: "Internal server error",
            error: err.message,
        });
    }
};
