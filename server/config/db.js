import mongoose from "mongoose";

let dbConnection;
const startDb = async () => {
  try {
    if (!dbConnection) {
      await mongoose.connect(process.env.DATABASE_URL);
    }
    return dbConnection;
  } catch (error) {
    throw new Error(error);
  }
};

export default startDb;
