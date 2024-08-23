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