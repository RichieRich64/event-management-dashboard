"use client";

import { useState, useEffect } from "react";

//a Util function that will conver the absolute width into breakpoints
// eslint-disable-next-line @typescript-eslint/no-explicit-any
function getBreakPoint(windowWidth: any) {
  if (windowWidth) {
    if (windowWidth < 768) {
      return "md";
    } else {
      return "lg";
    }
  } else {
    return undefined;
  }
}

function useWindowSize() {
  const isWindowClient =
    typeof window === "object" && typeof window !== "undefined";
  const [windowSize, setWindowSize] = useState(
    isWindowClient
      ? getBreakPoint(window.innerWidth) //👈
      : undefined
  );
  useEffect(() => {
    //a handler which will be called on change of the screen resize
    function setSize() {
      setWindowSize(getBreakPoint(window.innerWidth)); //👈
    }
    if (isWindowClient) {
      //register the window resize listener
      window.addEventListener("resize", setSize);
      //unregister the listerner on destroy of the hook
      return () => window.removeEventListener("resize", setSize);
    }
  }, [isWindowClient, setWindowSize]);
  return windowSize;
}

export default useWindowSize;
