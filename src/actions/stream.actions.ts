"use server";

import { currentUser } from "@clerk/nextjs/server";
import { StreamClient } from "@stream-io/node-sdk";

export const streamTokenProvider = async () => {
  try {
    const user = await currentUser();

    if (!user) {
      console.error("Stream token provider: User not authenticated");
      throw new Error("User not authenticated");
    }

    console.log("Stream token provider: API key available:", !!process.env.NEXT_PUBLIC_STREAM_API_KEY);
    console.log("Stream token provider: Secret key available:", !!process.env.STREAM_SECRET_KEY);

    const streamClient = new StreamClient(
      process.env.NEXT_PUBLIC_STREAM_API_KEY!,
      process.env.STREAM_SECRET_KEY!
    );

    const token = streamClient.generateUserToken({ user_id: user.id });
    console.log("Stream token generated successfully for user:", user.id);
    
    return token;
  } catch (error) {
    console.error("Failed to generate Stream token:", error);
    throw error;
  }
};