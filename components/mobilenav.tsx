import React from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import ToggleTheme from "./ToggleTheme";
import UserProfile from "./UserProfile";
import Home from "./svg/Home";
import Events from "./svg/Events";
import Speakers from "./svg/Speakers";
import Reports from "./svg/Reports";
import Notifications from "./svg/Notifications";
import Messages from "./svg/Messages";
import Settings from "./svg/Settings";

interface MobileNavLinkProps {
  href: string;
  iconNode: React.ReactNode;
  label: string;
  rightNode?: React.ReactNode;
}

const MobileNavLink = ({
  href,
  iconNode,
  label,
  rightNode,
}: MobileNavLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex items-center text-sm relative rounded 
           justify-between p-4
          hover:text-[#8576FF] hover:bg-[#FCF7FF] gap-4 transition-colors ${
            isActive ? "bg-[#FCF7FF] text-[#8576FF]" : ""
          }
        }`}
      >
        <div className="flex gap-4 items-center">
          {iconNode}
          <span className={`font-medium`}>{label}</span>
        </div>
        {rightNode}
      </div>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <div className="absolute px-6 top-20 bottom-0 left-0 right-0 h-[100%] w-[100%] dark:bg-[#484554]">
      {/* LINKS */}
      <div className="flex-grow mt-2">
        <MobileNavLink href="/" iconNode={<Home />} label="Home" />
        <MobileNavLink href="#" iconNode={<Events />} label="Events" />
        <MobileNavLink href="#" iconNode={<Speakers />} label="Speakers" />
        <MobileNavLink href="#" iconNode={<Reports />} label="Reports" />
        <MobileNavLink
          href="#"
          iconNode={<Notifications />}
          label="Notifications"
          rightNode={
            <>
              <span className="bg-[#F43F5E] text-xs flex items-center justify-center text-white rounded-full h-6 w-6">
                3
              </span>
            </>
          }
        />
        <MobileNavLink href="#" iconNode={<Messages />} label="Messages" />
        <MobileNavLink href="#" iconNode={<Settings />} label="Settings" />

        <ToggleTheme />

        <UserProfile />
      </div>
    </div>
  );
};

export default MobileNav;
