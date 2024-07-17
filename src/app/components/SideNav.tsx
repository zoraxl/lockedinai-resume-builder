"use client";
import Link from "next/link";
import PropTypes from "prop-types";

import React, { useState, useEffect } from "react";

// TODO: add proper types
export function SideNav({ setMinimize, minimize }: any) {
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
      <div className="flex h-24 shrink-0 items-center border-b border-white/[.2]">
        {!minimize ? (
          <div>
            <Link href="#">
              <img
                className="m-8 mx-auto h-full w-auto object-contain"
                src={"assets/logo/white_logo.png"}
                alt="Your Company"
              />
            </Link>
          </div>
        ) : (
          <div className="flex w-full justify-center">
            <Link href="#">
              <img
                className="m-8 mx-auto h-[40px] w-[40px] object-contain"
                src={"assets/toggled_logo.png"}
                alt="Your Company"
              />
            </Link>
          </div>
        )}
      </div>
      <div className="font-poppins flex w-full items-center justify-between text-white">
        <div className="ml-4 mt-1">
          <h3 className="overflow-hidden truncate text-[16px] font-[600]">
            Mirza Adil
          </h3>
          {/* <div className="  flex items-center">
                {subscriptionType === 'paid' ? (
                  <>
                    <RiVipCrownFill
                      size={20}
                      className="text-design-orange mr-1"
                    />
                    <span className="text-design-orange  text-sm mr-4 flex items-center font-[600]">
                      PRO
                    </span>
                    <div className="relative group">
                      <ClickTooltip showTable={true}>
                        <button
                          className="cursor-pointer flex items-center gap-1 transition duration-150 ease-out hover:brightness-90"
                          onClick={() => navigate('/app/credits')}
                        >
                          <PiCoinsFill className="text-[#00F0FF]" />
                          <span className="text-white text-sm font-[600]">
                            {sessionsLeft}
                          </span>
                        </button>
                      </ClickTooltip>
                    </div>
                  </>
                ) : (
                  <>
                    <div className="flex items-center gap-1">
                      <FaUser className="text-[#00F0FF] h-4" size={17} />{' '}
                      <span className="text-[#00F0FF] text-sm mr-4 flex items-center font-[600]">
                        FREE
                      </span>
                    </div>
                    <div className="relative group">
                      <ClickTooltip showTable={true}>
                        <button
                          className="cursor-pointer flex items-center gap-1 transition duration-150 ease-out hover:brightness-90"
                          onClick={() => navigate('/app/credits')}
                        >
                          <PiCoinsFill className="text-[#00F0FF]" />
                          <span className="text-white text-sm font-[600]">
                            {sessionsLeft}
                          </span>
                        </button>
                      </ClickTooltip>
                    </div>
                  </>
                )}
              </div> */}
        </div>
      </div>
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
