import User from "./models/User";
import Product from "./models/Product";
import { connectToMongo } from "./utils";

export const fetchUsers = async () => {
  try {
    await connectToMongo();
    const users = await User.find();
    return users;
  } catch (error) {
    console.log(error)
  }
};
