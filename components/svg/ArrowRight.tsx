import React from "react";

type ArrowRightProps = {
  color?: string | null;
};

const ArrowRight = ({ color }: ArrowRightProps) => {
  return (
    <svg
      width="4"
      height="6"
      viewBox="0 0 4 6"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.375 1.375L3.125 3L1.375 4.625"
        stroke={color ?? "#334155"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRight;
