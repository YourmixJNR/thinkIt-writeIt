import User from "../models/user.js";

const userProfile = async (req, res) => {
  try {
    const username = req.params.username;
    const getProfile = await User.findOne({ username }).select(
      "-password -_id -createdAt -updatedAt -__v"
    );
    if (!getProfile) {
      return res.status(404).json({
        message: "Not found",
        error: "User not found",
      });
    }
    res.status(200).json({
      message: "Success!",
      data: getProfile,
    });
  } catch (err) {
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};

export default userProfile;
