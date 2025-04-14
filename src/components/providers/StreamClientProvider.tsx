"use client"

import { ReactNode, useEffect, useState } from "react";
import { StreamVideoClient, StreamVideo } from "@stream-io/video-react-sdk";
import "@stream-io/video-react-sdk/dist/css/styles.css";
import { useUser } from "@clerk/nextjs";
import LoaderUI from "../LoaderUI";
import { streamTokenProvider } from "@/actions/stream.actions";

const StreamVideoProvider = ({ children }: { children: ReactNode }) => {
  const [streamVideoClient, setStreamVideoClient] = useState<StreamVideoClient>();
  const { user, isLoaded } = useUser();

  useEffect(() => {
    if (!isLoaded || !user) return;

    try {
      // Log environment variables for debugging
      console.log("Stream API Key available:", !!process.env.NEXT_PUBLIC_STREAM_API_KEY);
      
      const client = new StreamVideoClient({
        apiKey: process.env.NEXT_PUBLIC_STREAM_API_KEY!,
        user: {
          id: user?.id,
          name: `${user?.firstName || ''} ${user?.lastName || ''}`.trim() || user?.id,
          image: user?.imageUrl,
        },
        tokenProvider: streamTokenProvider,
      });

      console.log("Stream Video client initialized successfully for user:", user.id);
      setStreamVideoClient(client);
    } catch (error) {
      console.error("Failed to initialize Stream Video client:", error);
    }
  }, [user, isLoaded]);

  if (!streamVideoClient) return <LoaderUI />;

  return <StreamVideo client={streamVideoClient}>{children}</StreamVideo>;
};

export default StreamVideoProvider;