import mongoose from "mongoose";
import { Schema } from "mongoose";

const userSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    username: {
      type: String,
      trim: true,
    },
    password: {
      type: String,
      required: true,
      min: 6,
      max: 64,
    },
    name: {
      type: String,
    },
    picture: {
      type: String,
      default: "https://i.ibb.co/DWd2KqS/user.png",
    },
    bio: {
      type: String,
    },
    favoriteContent: {
      type: String,
    },
    hireable: {
      type: Boolean,
    },
    socialMedia: {
      facebook: {
        type: String,
        trim: true,
      },
      instagram: {
        type: String,
        trim: true,
      },
      twitter: {
        type: String,
        trim: true,
      },
      linkedin: {
        type: String,
        trim: true,
      },
    },
  },
  { timestamps: true }
);

export default mongoose.model("User", userSchema);
