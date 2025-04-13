import Navbar from "@/components/Navbar";

export default function PublicLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen">
        <Navbar />
      <main className="px-4 sm:px-6 lg:px-8">{children}</main>
    </div>
  );
}
