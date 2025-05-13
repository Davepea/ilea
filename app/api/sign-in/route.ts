// app/api/sign-in/route.ts

import { NextResponse } from "next/server";
import { SignInSchema } from "@/lib/validation/authSchemas";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";
import { writeClient } from "@/sanity/lib/write-client";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = SignInSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    const { email, password } = parsed.data;

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("authdb");
    const mongoUsers = db.collection("users");

    const mongoUser = await mongoUsers.findOne({ email });

    if (!mongoUser) {
      return NextResponse.json(
        { success: false, error: "User not found" },
        { status: 404 }
      );
    }

    const isMatch = await bcrypt.compare(password, mongoUser.password);

    if (!isMatch) {
      return NextResponse.json(
        { success: false, error: "Incorrect password" },
        { status: 401 }
      );
    }

    // Optional: Fetch public user profile from Sanity
    const sanityUser = await writeClient.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );

    return NextResponse.json({
      success: true,
      message: "Login successful",
      user: {
        email: mongoUser.email,
        name: mongoUser.name,
        role: sanityUser?.role || "user",
        profileImage: sanityUser?.profileImage || null,
        sanityId: sanityUser?._id || null,
      },
    });
  } catch (err) {
    console.error("Login error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
