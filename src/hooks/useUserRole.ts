import { useUser } from "@clerk/nextjs";
import { useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { useRouter } from "next/navigation";
import { useEffect } from "react";

export const useUserRole = () => {
  const { user, isSignedIn } = useUser();
  const router = useRouter();

  const userData = useQuery(api.users.getUserByClerkId, 
    isSignedIn ? { clerkId: user?.id || "" } : { clerkId: "" }
  );

  // If the user is not signed in, we want to avoid showing loading state
  const isLoading = isSignedIn && userData === undefined;

  useEffect(() => {
    const currentPath = window.location.pathname;
    // Check if we have user data and the current path is not root or role-selection
    if (userData && currentPath !== "/" && currentPath !== "/role-selection") {
      // Redirect to role selection if role or hasSelectedRole is unset/undefined
      if (!userData.role || !userData.hasSelectedRole) {
        router.push("/role-selection");
      }
    }
  }, [userData, router]);

  return {
    isLoading,
    isInterviewer: userData?.role === "interviewer",
    isCandidate: userData?.role === "candidate",
    hasSelectedRole: !!userData?.hasSelectedRole,
  };
};
