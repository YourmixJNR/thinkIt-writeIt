import mongoose from "mongoose";

const URI = process.env.MONGO_URI || "";
const password = process.env.MONGO_PASSWORD || "";
const connectionString = URI.replace("<password>", password);

const startDb = async () => {
  try {
    await mongoose.connect(connectionString);
    console.log(`Db connected`);
  } catch (err) {
    console.error(err.message);
    console.error(`Db connection failed`);
  }
};

export default startDb;
