"use client";

import * as React from "react";
import { useTheme } from "next-themes";
import { StoreContext } from "@/app/dashboardWrapper";
import { Switch } from "@/components/ui/switch";

const ToggleTheme = () => {
  const { setTheme, theme } = useTheme();
  const { isSidebarCollapsed } = React.useContext(StoreContext);

  return (
    <>
      {!isSidebarCollapsed ? (
        <div className="flex items-center gap-2 text-xs px-4 py-3">
          <Switch
            className={`transition-all ease-in-out duration-200 text-xs ${
              theme === "dark" && "!bg-[#8576FF]"
            }`}
            onClick={() => setTheme(theme === "light" ? "dark" : "light")}
          />
          {theme === "light" ? "Dark mode" : "Light mode"}
        </div>
      ) : null}
    </>
  );
};

export default ToggleTheme;
