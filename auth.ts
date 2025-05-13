// auth.ts
import "server-only";

import NextAuth from "next-auth";
import Google from "next-auth/providers/google";
import { writeClient } from "@/sanity/lib/write-client";
import uploadImageFromUrl from "./lib/uploadGoogleImage";

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [ Google({
    clientId: process.env.GOOGLE_CLIENT_ID!,
    clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
  })],
  callbacks: {
    async signIn({ user, account }) {
      try {
        console.log("🔑 Attempting sign-in for:", user.email);
    
        if (!user.email) {
          console.error("❌ No email found on user.");
          return false;
        }
    
        if (account?.provider === "google") {
          const existingUser = await writeClient.fetch(
            `*[_type == "user" && email == $email][0]`,
            { email: user.email }
          );
    
          console.log("🧾 Existing user from Sanity:", existingUser);

          let profileImage = null;

          if (user.image) {
            profileImage = await uploadImageFromUrl(user.image);
          }
    
          if (!existingUser) {
            const newUser = {
              _type: "user",
              email: user.email,
              name: user.name?.split(" ")[0] || "",
              profileImage,
              role: "user",
              isActive: true,
              createdAt: new Date().toISOString(),
              updatedAt: new Date().toISOString(),
            };
    
            console.log("✍️ Creating new user:", newUser);
    
            await writeClient.create(newUser);
            console.log("new user created!!");
            
          }
        }
    
        
        return true;
    
      } catch (err) {
        console.error("❌ Error in signIn callback:", err);
        return false;
      }
    },
    

    async session({ session }) {
      const sanityUser = await writeClient.fetch(
        `*[_type == "user" && email == $email][0]`,
        { email: session.user?.email }
      );

      return {
        ...session,
        user: {
          ...session.user,
          id: sanityUser?._id,
          role: sanityUser?.role || "user",
        },
      };
    },
  },
});
