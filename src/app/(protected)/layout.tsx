"use client";

import { SignedIn, SignedOut, useAuth } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";
import { useEffect } from "react";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const { isLoaded, isSignedIn } = useAuth();
  
  // Use useEffect for client-side redirects
  useEffect(() => {
    if (isLoaded && !isSignedIn) {
      window.location.href = "/sign-in";
    }
  }, [isLoaded, isSignedIn]);
  
  // While checking auth state, show nothing
  if (!isLoaded) {
    return null;
  }
  
  // Show nothing if not signed in (redirect will happen)
  if (!isSignedIn) {
    return null;
  }
  
  // Only render the content if signed in
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
