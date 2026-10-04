import { QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/Footer";
import Header from "@/components/layout/Header";
import MainNav from "@/components/layout/MainNav";
import { queryClient } from "@/lib/queryClient";

const AppLayout = () => {
  return (
    <QueryClientProvider client={queryClient}>
    <div className="flex min-h-screen flex-col bg-white text-neutral-800 antialiased">
      <div className="site-header-gradient sticky top-0 z-40 overflow-visible shadow-md">
        <div className="mx-auto flex max-w-6xl flex-wrap items-start gap-x-4 px-4 py-2 sm:px-6 lg:items-center lg:px-8 lg:py-3">
          <Header />
          <MainNav />
        </div>
      </div>
      <main className="flex-1">
        <Outlet />
      </main>
      <Footer />
    </div>
    </QueryClientProvider>
  );
};

export default AppLayout;
