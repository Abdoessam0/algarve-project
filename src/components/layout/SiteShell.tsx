import type { ReactNode } from "react";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

// Server Component
type SiteShellProps = {
  children: React.ReactNode
  fullWidth?: boolean
}



export default function SiteShell({ children }: SiteShellProps) {
  return (
    <>
      <Navbar />
      <main className="flex-1 pt-16 md:pt-0">{children}</main>
      <Footer />
    </>
  );
}

