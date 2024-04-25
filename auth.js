import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./auth.config";
import { connectToMongo } from "./app/lib/utils";
import User from "./app/lib/models/User";
import bcrypt from "bcrypt";

const login = async (credentials) => {
  try {
    connectToMongo();
    const user = await User.findOne({ username: credentials.username });
    if (!user) {
      throw new Error("wrong username");
    }

    const isPassCorrect = await bcrypt.compare(
      credentials.password,
      user.password
    );
    if (!isPassCorrect) {
      throw new Error("Wrong password.");
    }
    return user;
  } catch (error) {
    console.log(error);
  }
};

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (error) {
          return null;
        }
      },
    }),
  ],
});
