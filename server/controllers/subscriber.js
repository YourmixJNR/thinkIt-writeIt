import Subscriber from "../models/subscriber.js";
import { generateEmailToken, verifyEmailToken } from "../utils/jwt.js";
import { sendMail } from "../utils/mail.js";

const serverUrl = process.env.SERVER_URL;
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
        error: "Already subscribed",
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
      htmlContent: `Click this link to verify your email: <a href="${serverUrl}/verify?token=${emailToken}">here</a>`,
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
    if (!email) {
      return res.status(400).json({
        message: "Bad request",
        error: "Invalid or expired token.",
      });
    }
    const subscriber = await Subscriber.findOne({ email });

    if (!subscriber) {
      return res.status(404).json({
        message: "Not found",
        error: "Subscriber not found",
      });
    }

    if (subscriber.verified) {
      return res.render("alreadyVerified", {
        title: "thinkIt-writeIt",
        email,
      });
    } else {
      subscriber.verified = true;
      await subscriber.save();

      await sendMail({
        recipient: email.toLowerCase().trim(),
        subject: "Subscribe successfully",
        htmlContent: `You have subscribe successfully to thinkIt-writeIt. Kindly visit our website <a href="${clientUrl}">here</a> to begin.<br><br>Click <a href="${serverUrl}/unsubscribe?email=${email}">here</a> to unsubscribe.`,
      });

      return res.render("verify", {
        title: "thinkIt-writeIt",
        email,
      });
    }
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};

export const unSubscribe = async (req, res) => {
  try {
    const { email } = req.query;
    if (!email) {
      return res.status(400).json({
        message: "Bad request",
        error: "No email provided",
      });
    }
    const subscriber = await Subscriber.findOne({ email });
    if (!subscriber) {
      return res.render("error", {
        message: "Email not found",
      });
    }

    await Subscriber.findOneAndDelete({ email });

    await sendMail({
      recipient: email.toLowerCase().trim(),
      subject: "Unsubscribe successfully",
      htmlContent: `You've unsubscribe successfully from thinkIt-writeIt.<br><br>Click <a href="${clientUrl}">here</a> to subscribe again`,
    });

    return res.render("unSubscribe", {
      title: "thinkIt-writeIt",
      link: `${clientUrl}`,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
