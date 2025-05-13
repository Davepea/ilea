import axios from "axios";
import { writeClient } from "@/sanity/lib/write-client";

async function uploadImageFromUrl(imageUrl: string) {
  try {
    const response = await axios.get(imageUrl, { responseType: "arraybuffer" });
    const buffer = Buffer.from(response.data, "binary");

    const asset = await writeClient.assets.upload("image", buffer, {
      filename: "profile-image.jpg",
      contentType: "image/jpeg",
    });

    return {
      _type: "image",
      asset: {
        _type: "reference",
        _ref: asset._id,
      },
    };
  } catch (err) {
    console.error("❌ Failed to upload image to Sanity:", err);
    return null;
  }
}

export default uploadImageFromUrl;
