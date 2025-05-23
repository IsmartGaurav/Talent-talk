"use client";

import Link from "next/link";
import { ModeToggle } from "./ModeToggle";
import { CodeIcon } from "lucide-react";
import { SignedIn, UserButton } from "@clerk/nextjs";
import DashboardBtn from "./DashbordBtn";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

function Navbar() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  // After mounting, we can access the theme
  useEffect(() => {
    setMounted(true);
  }, []);
  
  // Use resolvedTheme which correctly handles system preference
  const logoSrc = mounted ? (resolvedTheme === "dark" ? "/DarkLogo.png" : "/LightLogo.png") : "/LightLogo.png";

  return (
    <nav className="border-b">
      <div className="flex h-16 items-center px-4 container mx-auto">
        {/* LEFT SIDE -LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2 font-semibold text-2xl mr-6 font-mono hover:opacity-80 transition-opacity"
        >
          <img src={logoSrc} alt="Logo" className="h-8 w-auto object-contain" />
 
        </Link>

        {/* RIGHT SIDE - ACTIONS */}
        <div className="flex items-center space-x-4 ml-auto">
        <ModeToggle />
        <DashboardBtn />
        <SignedIn>
            <UserButton />
        </SignedIn>
        </div>

      </div>
    </nav>
  );
}
export default Navbar;