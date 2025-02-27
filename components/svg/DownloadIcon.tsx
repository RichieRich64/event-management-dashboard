import React from "react";

type DownloadIconProps = {
  color?: string | null;
};

const DownloadIcon = ({ color }: DownloadIconProps) => {
  return (
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M1.16663 7.83333V8.83333C1.16663 9.9379 2.06206 10.8333 3.16663 10.8333H8.83329C9.93786 10.8333 10.8333 9.9379 10.8333 8.83333V7.83333M5.99996 7.5V1.16666M5.99996 7.5L3.83329 5.16666M5.99996 7.5L8.16663 5.16666"
        stroke={color ?? "#141414"}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default DownloadIcon;
