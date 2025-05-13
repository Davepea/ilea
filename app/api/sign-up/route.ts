// app/api/sign-up/route.ts

import { NextResponse } from "next/server";
import { SignUpSchema } from "@/lib/validation/authSchemas";
import { writeClient } from "@/sanity/lib/write-client";
import bcrypt from "bcryptjs";
import clientPromise from "@/lib/mongodb";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const parsed = SignUpSchema.safeParse(body);

    if (!parsed.success) {
      return NextResponse.json(
        { success: false, error: "Invalid input" },
        { status: 400 }
      );
    }

    const { password, ...userData } = parsed.data;
    const { email, name } = userData;

    // Check if email exists in Sanity
    const existingSanityUser = await writeClient.fetch(
      `*[_type == "user" && email == $email][0]`,
      { email }
    );
    if (existingSanityUser) {
      return NextResponse.json(
        { success: false, error: "Email already in use" },
        { status: 409 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Connect to MongoDB
    const client = await clientPromise;
    const db = client.db("authdb");
    const mongoUsers = db.collection("users");

    // Check if user already exists in MongoDB
    const existingMongoUser = await mongoUsers.findOne({ email });
    if (existingMongoUser) {
      return NextResponse.json(
        { success: false, error: "Email already in use" },
        { status: 409 }
      );
    }

    // Save user to MongoDB
    await mongoUsers.insertOne({
      email,
      name,
      password: hashedPassword,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Save public user profile to Sanity
    await writeClient.create({
      _type: "user",
      ...userData,
      profileImage: null,
      role: "user",
      isActive: true,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Signup Error:", err);
    return NextResponse.json(
      { success: false, error: "Server error" },
      { status: 500 }
    );
  }
}
