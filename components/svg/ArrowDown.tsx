import React from "react";

type ArrowDownProps = {
  color?: string | null;
};

const ArrowDown = ({ color }: ArrowDownProps) => {
  return (
    <svg
      width="6"
      height="5"
      viewBox="0 0 6 5"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M5.16667 1.16666L3 3.5L0.833336 1.16666"
        stroke={color ?? "#334155"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowDown;
