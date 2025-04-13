import { SignedIn, SignedOut } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import Navbar from "@/components/Navbar";

export default function ProtectedLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <SignedIn>
        <div className="min-h-screen">
          <Navbar />
          <main className="px-4 sm:px-6 lg:px-8">{children}</main>
        </div>
      </SignedIn>

      <SignedOut>
        {redirect("/sign-in")}
      </SignedOut>
    </>
  );
}
