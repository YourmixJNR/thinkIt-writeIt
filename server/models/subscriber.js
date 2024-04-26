import mongoose from "mongoose";
import { Schema } from "mongoose";

const subscriberSchema = new Schema(
  {
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    verified: {
      type: Boolean,
    },
  },
  { timestamps: true }
);

export default mongoose.model("Subscriber", subscriberSchema);
