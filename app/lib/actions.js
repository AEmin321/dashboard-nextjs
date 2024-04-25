"use server";
import { connectToMongo } from "./utils";
import User from "./models/User";
import Product from "./models/Product";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import bcrypt from "bcrypt";

export const addUser = async (formData) => {
  const { username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);
  try {
    connectToMongo();

    const salt = await bcrypt.genSalt(10);
    const hashedPass = await bcrypt.hash(password, salt);

    const newUser = new User({
      username: username,
      email: email,
      password: hashedPass,
      phone: phone,
      isAdmin: isAdmin,
      isActive: isActive,
      address: address,
    });
    await newUser.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/users");
  redirect("/dashboard/users");
};

export const addProduct = async (formData) => {
  const { title, size, description, price, stock, category, color } =
    Object.fromEntries(formData);
  try {
    connectToMongo();

    const newProduct = new Product({
      title: title,
      size: size,
      desc: description,
      price: price,
      stock: stock,
      category: category,
      color: color,
    });
    await newProduct.save();
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/products");
  redirect("/dashboard/products");
};

export const deleteProduct = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToMongo();
    await Product.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/products");
};

export const deleteUser = async (formData) => {
  const { id } = Object.fromEntries(formData);

  try {
    connectToMongo();
    await User.findByIdAndDelete(id);
  } catch (error) {
    console.log(error);
  }
  revalidatePath("/dashboard/users");
};

export const getSingleUser = async (id) => {
  try {
    connectToMongo();
    const user = await User.findById(id);
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const getSingleProduct = async (id) => {
  try {
    connectToMongo();
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    console.log(error);
  }
};
