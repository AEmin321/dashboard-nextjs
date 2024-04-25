import { connectToMongo } from "./utils";
import User from "./models/User";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export const addUser = async (formData) => {
  "use server";
  const { username, email, password, phone, isAdmin, isActive, address } =
    Object.fromEntries(formData);
  try {
    connectToMongo();
    const newUser = new User({
      username: username,
      email: email,
      password: password,
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
