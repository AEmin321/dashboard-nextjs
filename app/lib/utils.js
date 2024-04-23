import mongoose from "mongoose";

const connection = {};

export const connectToMongo = async () => {
  try {
    if (connection.isConnected) return;
    const db = await mongoose.connect(process.env.MONGO_URL);
    connection.isConnected = db.connections[0].readyState;
    console.log("Connected to mongod DB");
  } catch (error) {
    console.log(error);
  }
};
