import User from "../models/user.js";
import { hashPassword, comparePassword } from "../utils/auth.js";
import { generateToken } from "../utils/jwt.js";

export const register = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email) {
      return res.status(400).json({
        message: "Bad request",
        error: "Email required",
      });
    }

    if (!password || password.length < 6) {
      return res.status(400).json({
        message: "Bad request",
        error: "Password should be min 6 character long",
      });
    }

    const userExists = await User.findOne({ email });

    if (userExists) {
      return res.status(400).json({
        message: "Bad request",
        error: "Email already taken",
      });
    }

    const hashedPassword = await hashPassword(password);

    const user = new User({
      email,
      password: hashedPassword,
    });

    await user.save();
    return res.status(200).json({ message: "Registration Successful" });
  } catch (err) {
    return res.status(400).json({
      message: "Error. Try again",
      error: err.message,
    });
  }
};

export const login = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Check db for email
    const user = await User.findOne({ email });
    if (!user)
      return res.status(400).json({
        message: "Bad request",
        error: "No user found",
      });
    // Check password match
    const match = await comparePassword(password, user.password);
    if (!match)
      return res.status(400).json({
        message: "Bad request",
        error: "Incorrect password",
      });
    const token = generateToken(user._id);
    // user.password = undefined
    const filterUser = await User.findOne({ email }).select(
      "-password -role -_id -createdAt -updatedAt -__v"
    );

    //set cookie
    res.cookie("token", token, {
      httpOnly: true,
      secure: true,
      sameSite: "None",
      partitioned: true,
      path: "/",
    });

    return res
      .header("Authorization", `Bearer ${token}`)
      .status(200)
      .json({ user: filterUser, message: "Login Successfully", token });
  } catch (err) {
    console.log(err);
    return res.status(400).json({
      message: "Bad request",
      error: err.message,
    });
  }
};

export const logout = (req, res) => {
  try {
    res.clearCookie("token");
    return res.status(200).json({ message: "Logged Out" });
  } catch (err) {
    console.log(err);
  }
};
