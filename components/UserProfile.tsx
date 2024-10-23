import React, { useContext } from "react";
import User from "./svg/User";
import { StoreContext } from "@/app/dashboardWrapper";

const UserProfile = () => {
  const { isSidebarCollapsed } = useContext(StoreContext);

  return (
    <div
      className={`flex items-center gap-2 p-4 text-xs ${
        isSidebarCollapsed && "justify-center"
      }`}
    >
      <div>
        <User />
      </div>
      {!isSidebarCollapsed && (
        <div className="flex flex-col">
          <h3>Rudra Devi</h3>
          <h4>rudra.devi@gmail.com</h4>
        </div>
      )}
    </div>
  );
};

export default UserProfile;
