import User from "../models/user.js";

export const currentUser = async (req, res) => {
  try {
    const id = req.auth._id;
    if (!{ id }) {
      return res.status(401).json({
        message: "Unauthorized",
        error: "No user token provided",
      });
    }
    const user = await User.findOne({ id }).select(
      "-password -role -_id -createdAt -updatedAt -__v"
    );
    res.status(200).json({
      message: "All good!",
      data: user,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
