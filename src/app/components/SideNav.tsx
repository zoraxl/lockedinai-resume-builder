"use client";
import PropTypes from "prop-types";

import React, { useState, useEffect } from "react";

export function SideNav({}) {
  // Adjust the history window:

  //   const [maxHistoryHeight, setMaxHistoryHeight] = useState(
  //     window.innerHeight - 600,
  //   );

  //   useEffect(() => {
  //     const handleResize = () => {
  //       setMaxHistoryHeight(window.innerHeight - 500);
  //     };

  //     // Set initial height
  //     handleResize();

  //     // Update height on window resize
  //     window.addEventListener("resize", handleResize);

  //     // Clean up event listener on component unmount
  //     return () => {
  //       window.removeEventListener("resize", handleResize);
  //     };
  //   }, []);

  // HANDLE ACTIVE SESSION

  return (
    <div className="flex grow flex-col gap-y-5 bg-gray-900 px-6 pb-4 ring-1 ring-white/10">
      {/* <div className="flex h-10 mt-5 shrink-0 items-center">
        <img
          onClick={() => setSidebarOpen(!sidebarOpen)}
          className="block h-[18px] m-3 cursor-pointer object-contain"
          src={open}
          alt="open nav"
        />
      </div> */}
    </div>
  );
}

SideNav.propTypes = {
  setSidebarOpen: PropTypes.func,
  sidebarOpen: PropTypes.bool,
};
