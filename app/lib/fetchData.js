import User from "./models/User";
import Product from "./models/Product";
import { connectToMongo } from "./utils";

export const fetchUsers = async (query, page) => {
  const regex = new RegExp(query, "i");
  const itemsPerPage = 5;
  try {
    await connectToMongo();
    const count = await User.find({ username: { $regex: regex } }).count();
    const users = await User.find({ username: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (page - 1));
    return { count, users };
  } catch (error) {
    console.log(error);
  }
};
export const fetchProducts = async (query, page) => {
  const regex = new RegExp(query, "i");
  const itemsPerPage = 5;
  try {
    await connectToMongo();
    const count = await Product.find({ title: { $regex: regex } }).count();
    const products = await Product.find({ title: { $regex: regex } })
      .limit(itemsPerPage)
      .skip(itemsPerPage * (page - 1));
    return { count, products };
  } catch (error) {
    console.log(error);
  }
};
