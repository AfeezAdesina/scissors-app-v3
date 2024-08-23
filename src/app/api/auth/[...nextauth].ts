<<<<<<< HEAD
import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";

 const handler = NextAuth({
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",
      credentials: {
        email: {  },
        password: {   }
      },
      async authorize(credentials, req): Promise<any> {
        // Add logic here to look up the user from the credentials supplied
        const user = { id: 1, name: "J Smith", email: ''};
        if (user) {
          
          return user
        } else {
          return null
        }
      }
      
    })
  ],
})

export { handler as GET, handler as POST };
=======
import NextAuth from "next-auth";
import GithubProvider from "next-auth/providers/github";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    GithubProvider({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
}

export default NextAuth(authOptions)
>>>>>>> 1563cf47c47f749eb736dd46aaf4c3f41f48daa8
