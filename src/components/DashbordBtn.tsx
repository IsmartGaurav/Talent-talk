"use client";

import Link from "next/link";
import { Button } from "./ui/button";
import { SparklesIcon, LogInIcon } from "lucide-react";
import { useUserRole } from "@/hooks/useUserRole";
import { usePathname } from "next/navigation";
import { SignedIn, SignedOut } from "@clerk/nextjs";

function DasboardBtn() {
  const { isCandidate, isLoading } = useUserRole();
  const pathname = usePathname();
  
  // Only show Dashboard button to non-candidates
  const showDashboard = !isCandidate && !isLoading;
  
  // For root route only
  const isRootRoute = pathname === "/";
  
  return (
    <>
      <SignedIn>
        {showDashboard && (
          <Link href={"/dashboard"}>
            <Button className="gap-2 font-medium" size={"sm"}>
              <SparklesIcon className="size-4" />
              Dashboard
            </Button>
          </Link>
        )}
      </SignedIn>
      
      <SignedOut>
        {isRootRoute && (
          <Link href={"/sign-in"}>
            <Button className="gap-2 font-medium" size={"sm"}>
              <LogInIcon className="size-4" />
              Sign In
            </Button>
          </Link>
        )}
      </SignedOut>
    </>
  );
}
export default DasboardBtn;