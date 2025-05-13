import { writeClient } from "@/sanity/lib/write-client";
import { v4 as uuid } from "uuid";

export async function uploadProfileImageToSanity(imageUrl: string): Promise<string> {
  const response = await fetch(imageUrl);
  const buffer = await response.arrayBuffer();

  const asset = await writeClient.assets.upload("image", Buffer.from(buffer), {
    filename: `profile-${uuid()}.jpg`,
    contentType: "image/jpeg", // or "image/png" depending on what you expect
  });

  return asset._id;
}
