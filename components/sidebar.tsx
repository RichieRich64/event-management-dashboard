"use client";

import { Menu } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";
import ToggleTheme from "./ToggleTheme";
import ToggleSidebar from "./ToggleSidebar";
import UserProfile from "./UserProfile";
import Home from "./svg/Home";
import Events from "./svg/Events";
import Speakers from "./svg/Speakers";
import Reports from "./svg/Reports";
import Notifications from "./svg/Notifications";
import Messages from "./svg/Messages";
import Settings from "./svg/Settings";

interface SidebarLinkProps {
  href: string;
  iconNode: React.ReactNode;
  label: string;
  isCollapsed: boolean;
  rightNode?: React.ReactNode;
}

const SidebarLink = ({
  href,
  iconNode,
  label,
  isCollapsed,
  rightNode,
}: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center text-sm relative rounded ${
          isCollapsed ? "justify-center py-4" : "justify-between p-4"
        }
        hover:text-[#8576FF] hover:bg-[#FCF7FF] gap-4 transition-colors ${
          isActive ? "bg-[#FCF7FF] text-[#8576FF]" : ""
        }
      }`}
      >
        <div className="flex gap-4 items-center">
          {iconNode}
          <span className={`${isCollapsed ? "hidden" : "block"} font-medium`}>
            {label}
          </span>
        </div>
        {rightNode}
      </div>
    </Link>
  );
};

interface SidebarProps {
  isSidebarCollapsed: boolean;
  setIsSidebarCollapsed: React.Dispatch<React.SetStateAction<boolean>>;
}

const Sidebar = ({
  isSidebarCollapsed,
  setIsSidebarCollapsed,
}: SidebarProps) => {
  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  const sidebarClassNames = `fixed flex flex-col p-2 ${
    isSidebarCollapsed ? "w-0 md:w-16" : "w-72 md:w-64"
  } bg-white transition-all duration-300 overflow-hidden h-full shadow-md z-40 dark:bg-[#484554] hidden md:block`;

  return (
    <div className={sidebarClassNames}>
      {/* TOP LOGO */}
      <div
        className={`flex gap-3 justify-between md:justify-normal items-center pt-8 ${
          isSidebarCollapsed ? "px-5" : "pl-4"
        }`}
      >
        <h1
          className={`${
            isSidebarCollapsed ? "hidden" : "block"
          } font-extrabold text-2xl`}
        >
          EMD
        </h1>

        <button
          className="md:hidden px-3 py-3 bg-gray-100 rounded-full hover:bg-blue-100"
          onClick={toggleSidebar}
        >
          <Menu className="w-4 h-4" />
        </button>
      </div>

      {/* LINKS */}
      <div className="flex-grow mt-8">
        <SidebarLink
          href="/"
          iconNode={<Home />}
          label="Home"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="#"
          iconNode={<Events />}
          label="Events"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="#"
          iconNode={<Speakers />}
          label="Speakers"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="#"
          iconNode={<Reports />}
          label="Reports"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="#"
          iconNode={<Notifications />}
          label="Notifications"
          isCollapsed={isSidebarCollapsed}
          rightNode={
            <>
              {isSidebarCollapsed ? (
                <span className="absolute text-[#F43F5E] top-1 right-2">●</span>
              ) : (
                <span className="bg-[#F43F5E] text-xs flex items-center justify-center text-white rounded-full h-6 w-6">
                  3
                </span>
              )}
            </>
          }
        />
        <SidebarLink
          href="#"
          iconNode={<Messages />}
          label="Messages"
          isCollapsed={isSidebarCollapsed}
        />
        <SidebarLink
          href="#"
          iconNode={<Settings />}
          label="Settings"
          isCollapsed={isSidebarCollapsed}
        />

        <ToggleSidebar />

        <ToggleTheme />

        <UserProfile />
      </div>
    </div>
  );
};

export default Sidebar;
