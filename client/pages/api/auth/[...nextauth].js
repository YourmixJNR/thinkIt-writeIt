import CredentialsProvider from "next-auth/providers/credentials";
import NextAuth from "next-auth";
import axios from "axios";

const API_ENDPOINT = process.env.SERVER_API_URL

const authOptions = {
  providers: [
    CredentialsProvider({
      name: "Credentials",
      async authorize(credentials) {
        const { email, password } = credentials;
        try {
          const res = await axios.post(
            `${API_ENDPOINT}/auth/login`,
            { email, password }
          );
          if (res.status === 200 && res.data) {
            return res.data;
          } else if (res.status === 400) {
            throw new Error(res.data.error);
          }
        } catch (err) {
          console.log(err);
          throw new Error(err.response?.data?.error || "Something went wrong");
        }
      },
    }),
  ],
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        return {
          ...token,
          user: user.user,
          accessToken: user.token,
          message: user.message,
          error: user.error,
        };
      }
      return token;
    },
    async session({ session, token }) {
      if (token.error) {
        session.error = token.error;
      } else if (token.message) {
        session.message = token.message;
      }
      return {
        ...session,
        user: token.user,
        accessToken: token.accessToken,
        message: token.message,
        error: token.error,
      };
    },
  },

  secret: process.env.NEXTAUTH_SECRET,
  session: {
    strategy: "jwt",
  },
  pages: {
    signIn: "/auth/login",
  },
};

export default NextAuth(authOptions)