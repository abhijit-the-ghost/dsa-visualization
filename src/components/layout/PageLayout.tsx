import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Header } from "@/components/layout/Header";
import { ScrollToTop } from "@/components/layout/ScrollToTop";
import { Sidebar } from "@/components/layout/Sidebar";

const MOBILE_BREAKPOINT = 768;

export function PageLayout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(
    () => window.innerWidth < MOBILE_BREAKPOINT,
  );

  useEffect(() => {
    const handleResize = () => {
      const nextIsMobile = window.innerWidth < MOBILE_BREAKPOINT;
      setIsMobile(nextIsMobile);

      if (!nextIsMobile) {
        setIsSidebarOpen(false);
      }
    };

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="min-h-screen bg-base-200">
      <ScrollToTop />
      <Header
        isMobile={isMobile}
        onMenuToggle={() => setIsSidebarOpen((isOpen) => !isOpen)}
      />
      <Sidebar
        isMobile={isMobile}
        isOpen={isSidebarOpen}
        onClose={() => setIsSidebarOpen(false)}
      />
      <main className="min-h-screen bg-base-200 px-4 pt-16 md:pl-64">
        <div className="mx-auto w-full max-w-7xl py-8">
          <Outlet />
        </div>
      </main>
    </div>
  );
}
