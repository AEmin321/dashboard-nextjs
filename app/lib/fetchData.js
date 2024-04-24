import User from "./models/User";
import Product from "./models/Product";
import { connectToMongo } from "./utils";

export const fetchUsers = async (query) => {
  const regex = new RegExp(query, "i");
  try {
    await connectToMongo();
    const users = await User.find({ username: { $regex: regex } });
    return users;
  } catch (error) {
    console.log(error);
  }
};
