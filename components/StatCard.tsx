"use client";

import React from "react";
import Info from "./svg/Info";
import { useTheme } from "next-themes";

type StatCardProps = {
  title: string;
  primaryIcon: JSX.Element;
  value: string;
  changePercentage: string;
};

const StatCard = ({
  title,
  primaryIcon,
  value,
  changePercentage,
}: StatCardProps) => {
  const { theme } = useTheme();

  return (
    <div
      className={`flex-1 ${
        theme === "light" && "border border-[#F2F2F7]"
      }  p-4 rounded font-semibold dark:bg-[#484554]`}
    >
      <div className="flex gap-1 items-center text-[#64748B] dark:text-white">
        <h3>{title}</h3>
        <Info />
      </div>
      <div className="flex gap-2 items-center">
        <h2 className="text-[#334155] dark:text-white text-xl">{value}</h2>
        <span>{primaryIcon}</span>
        <h5
          className={`text-[10px] ${
            changePercentage.includes("-") ? "text-[#F43F5E]" : "text-[#10B981]"
          }`}
        >
          {changePercentage}
        </h5>
      </div>
    </div>
  );
};

export default StatCard;
