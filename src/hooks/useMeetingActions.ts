import { useRouter } from "next/navigation";
import { useStreamVideoClient } from "@stream-io/video-react-sdk";
import toast from "react-hot-toast";

const useMeetingActions = () => {
  const router = useRouter();
  const client = useStreamVideoClient();

  const createInstantMeeting = async () => {
    console.log("Creating instant meeting, client available:", !!client);
    
    if (!client) {
      console.error("Stream Video client not initialized");
      toast.error("Cannot create meeting. Please try again later.");
      return;
    }

    try {
      const id = crypto.randomUUID();
      console.log("Generated meeting ID:", id);
      
      const call = client.call("default", id);
      console.log("Call object created:", !!call);

      await call.getOrCreate({
        data: {
          starts_at: new Date().toISOString(),
          custom: {
            description: "Instant Meeting",
          },
        },
      });

      console.log("Meeting created successfully, redirecting to:", `/meeting/${call.id}`);
      router.push(`/meeting/${call.id}`);
      toast.success("Meeting Created");
    } catch (error) {
      console.error("Error creating meeting:", error);
      toast.error("Failed to create meeting");
    }
  };

  const joinMeeting = (callId: string) => {
    if (!client) return toast.error("Failed to join meeting. Please try again.");
    router.push(`/meeting/${callId}`);
  };

  return { createInstantMeeting, joinMeeting };
};

export default useMeetingActions;