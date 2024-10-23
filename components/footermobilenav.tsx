import Link from "next/link";
import React from "react";
import { usePathname } from "next/navigation";
import Home from "./svg/Home";
import Events from "./svg/Events";
import Speakers from "./svg/Speakers";
import Reports from "./svg/Reports";

interface SidebarLinkProps {
  href: string;
  iconNode: React.ReactNode;
  label: string;
}

const MobileNavLink = ({ href, iconNode, label }: SidebarLinkProps) => {
  const pathname = usePathname();
  const isActive = pathname === href || (pathname === "/" && href === "/");

  return (
    <Link href={href}>
      <div
        className={`cursor-pointer flex flex-1 items-center text-sm relative
          hover:text-[#8576FF] hover:bg-[#FCF7FF] dark:hover:bg-transparent gap-4 transition-colors p-4 ${
            isActive
              ? "bg-[#FCF7FF] dark:bg-transparent text-[#8576FF] border-t-4 border-[#8576FF]"
              : ""
          }
        }`}
      >
        <div className="flex flex-col gap-3 items-center">
          {iconNode}
          <span className="font-medium">{label}</span>
        </div>
      </div>
    </Link>
  );
};

const MobileNav = () => {
  return (
    <div className="md:hidden">
      <div className="flex items-center justify-betweenn border-t-2">
        <MobileNavLink href="/" iconNode={<Home />} label="Home" />
        <MobileNavLink href="#" iconNode={<Events />} label="Events" />
        <MobileNavLink href="#" iconNode={<Speakers />} label="Speakers" />
        <MobileNavLink href="#" iconNode={<Reports />} label="Reports" />
        <MobileNavLink href="#" iconNode={<Reports />} label="Profile" />
      </div>
    </div>
  );
};

export default MobileNav;
