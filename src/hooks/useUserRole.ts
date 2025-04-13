import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";

export const useUserRole = () => {
  const { user, isSignedIn } = useUser();

  const userData = useQuery(api.users.getUserByClerkId, 
    isSignedIn ? { clerkId: user?.id || "" } : { clerkId: "" }
  );

  // If the user is not signed in, we want to avoid showing loading state
  const isLoading = isSignedIn && userData === undefined;

  return {
    isLoading,
    isInterviewer: userData?.role === "interviewer",
    isCandidate: userData?.role === "candidate",
  };
};