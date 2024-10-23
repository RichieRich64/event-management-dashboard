import React, { useContext } from "react";
import Collapse from "./svg/Collapse";
import { StoreContext } from "@/app/dashboardWrapper";

const ToggleSidebar = () => {
  const { isSidebarCollapsed, setIsSidebarCollapsed } =
    useContext(StoreContext);

  const toggleSidebar = () => {
    setIsSidebarCollapsed(!isSidebarCollapsed);
  };

  return (
    <div
      className="flex items-center gap-2 p-4 cursor-pointer"
      onClick={toggleSidebar}
    >
      <div
        className={`transition-all ease-in-out duration-200 ${
          isSidebarCollapsed && "rotate-180"
        }`}
      >
        <Collapse />
      </div>
      <button
        onClick={toggleSidebar}
        className={`${isSidebarCollapsed ? "hidden" : "block"} text-sm`}
      >
        Collapse
      </button>
    </div>
  );
};

export default ToggleSidebar;
