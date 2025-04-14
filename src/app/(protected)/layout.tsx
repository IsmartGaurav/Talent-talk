"use client";

import { useAuth } from "@clerk/nextjs";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";
import StreamVideoProvider from "@/components/providers/StreamClientProvider";
import { useUserRole } from "@/hooks/useUserRole";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, isSignedIn } = useAuth();
  const { hasSelectedRole, isLoading } = useUserRole();
  
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/sign-in";
    }
  }, [isLoaded, isSignedIn]);
  
  // While checking auth state or user role, show nothing
  if (!isLoaded || isLoading) {
    return null;
  }
  
  // Show nothing if not signed in (redirect will happen)
  if (!isSignedIn) {
    return null;
  }
  
  return (
    <div className="min-h-screen">
      <Navbar />
      <StreamVideoProvider>
        <main className="px-4 sm:px-6 lg:px-8">{children}</main>
      </StreamVideoProvider>
    </div>
  );
}



