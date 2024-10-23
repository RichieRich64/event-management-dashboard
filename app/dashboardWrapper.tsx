"use client";

import React, { useState, createContext, useContext } from "react";
import Sidebar from "@/components/sidebar";
import FooterMobileNav from "@/components/footermobilenav";
import MobileNav from "@/components/mobilenav";
import Hamburger from "@/components/svg/Hamburger";
import CloseIcon from "@/components/svg/CloseIcon";

export const StoreContext = createContext<{
  isSidebarCollapsed: boolean;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  setIsSidebarCollapsed: any;
}>({
  isSidebarCollapsed: false,
  setIsSidebarCollapsed: () => {},
});

const DashboardLayout = ({ children }: { children: React.ReactNode }) => {
  const { isSidebarCollapsed, setIsSidebarCollapsed } =
    useContext(StoreContext);

  const [showMobileFullLinks, setShowMobileFullLinks] = useState(false);

  return (
    <div
      className={`flex bg-gray-50 w-full min-h-screen text-[#334155] dark:text-white`}
    >
      <Sidebar
        isSidebarCollapsed={isSidebarCollapsed}
        setIsSidebarCollapsed={setIsSidebarCollapsed}
      />
      <main
        className={`flex flex-col w-full h-full py-7 px-9 bg-gray-50 dark:bg-[#383544] ${
          isSidebarCollapsed ? "md:pl-24" : "md:pl-72"
        }`}
      >
        <div className="flex items-center justify-between md:hidden pb-3 mb-3 border-b">
          <h1 className={`font-extrabold text-2xl`}>EMD</h1>

          <span
            className="cursor-pointer"
            onClick={() => setShowMobileFullLinks(!showMobileFullLinks)}
          >
            {showMobileFullLinks ? <CloseIcon /> : <Hamburger />}
          </span>
        </div>
        {showMobileFullLinks && <MobileNav />}

        {!showMobileFullLinks && children}

        {!showMobileFullLinks && <FooterMobileNav />}
      </main>
    </div>
  );
};

const DashboardWrapper = ({ children }: { children: React.ReactNode }) => {
  const [isSidebarCollapsed, setIsSidebarCollapsed] = useState(false);

  return (
    <StoreContext.Provider
      value={{ isSidebarCollapsed, setIsSidebarCollapsed }}
    >
      <DashboardLayout>{children}</DashboardLayout>
    </StoreContext.Provider>
  );
};

export default DashboardWrapper;
