import React from "react";

type ArrowLeftProps = {
  color?: string | null;
};

const ArrowLeft = ({ color }: ArrowLeftProps) => {
  return (
    <svg
      width="4"
      height="6"
      viewBox="0 0 4 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M2.625 1.375L0.875 3L2.625 4.625"
        stroke={color ?? "#334155"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
