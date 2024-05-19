import User from "../models/user.js";

export const currentUser = async (req, res) => {
  try {
    const id = req.auth._id;
    const user = await User.findOne({ _id: id }).select(
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

export const updateUser = async (req, res) => {
  try {
    const id = req.auth._id;
    const { username, name, bio, favoriteContent, hireable, socialMedia } =
      req.body;
    if (
      !username &&
      !name &&
      !bio &&
      !favoriteContent &&
      !hireable &&
      !socialMedia
    ) {
      return res.status(400).json({
        message: "Bad request",
        error: "Fields can't be empty",
      });
    }

    const usernameExists = await User.findOne({ username });
    if (usernameExists && usernameExists._id.toString() !== id) {
      return res.status(400).json({
        message: "Bad request",
        error: "Username already taken",
      });
    }

    await User.findOneAndUpdate(
      { _id: id },
      { username, name, bio, favoriteContent, hireable, socialMedia },
      {
        new: true,
      }
    );
    res.status(200).json({
      message: "Profile updated",
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({
      message: "Internal server error",
      error: err.message,
    });
  }
};
