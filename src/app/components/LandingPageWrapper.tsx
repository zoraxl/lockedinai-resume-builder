"use client";
/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import { Fragment, useState, useEffect, useRef } from "react";
import { Dialog, Transition } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
// import toggleSidebar from "../assets/toggle_sidebar.png";

import { SideNav } from "components/SideNav";
// import SettingsModal from "../Modals/SettingsModal.react";

function LandingPageInner() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [openReferral, setOpenReferral] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);
  const [minimize, setMinimize] = useState(false);
  const [isPopupVisible, setIsPopupVisible] = useState(false);
  const [tooltipVisible, setTooltipVisible] = useState({
    copy: false,
    discord: false,
    support: false,
  });
  const divRef = useRef(null);

  const togglePopup = () => {
    setIsPopupVisible(!isPopupVisible);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (divRef.current && !divRef.current.contains(event.target)) {
        setIsPopupVisible(false);
      }
    }

    // Add event listener for clicks outside the div
    document.addEventListener("click", handleClickOutside);

    // Clean up the event listener on component unmount
    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, []);

  //   useEffect(() => {
  //     if (location.pathname.startsWith("/app/pilot")) {
  //       setMinimize(true);
  //     }
  //   }, [location.pathname]);

  return (
    <div>
      <Transition.Root show={sidebarOpen} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-50 lg:hidden"
          onClose={setSidebarOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full flex w-16 items-center justify-center p-5">
                    <button
                      type="button"
                      className="-m-2.5 p-2.5"
                      onClick={() => setSidebarOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      {/* <XMarkIcon
                        className="h-6 w-6 text-white"
                        aria-hidden="true"
                      /> */}
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                {/* <PageNav /> */}
                <SideNav
                  openReferral={openReferral}
                  setOpenReferral={setOpenReferral}
                  sidebarOpen={sidebarOpen}
                  setOpenSet={setOpenSettings}
                  setSidebarOpen={setSidebarOpen}
                />
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openReferral} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-hidden"
          onClose={() => setOpenReferral(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex justify-center">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 flex w-full items-center justify-center">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-full top-0 flex h-full items-center justify-center">
                    {/* <button
                      type="button"
                      className="text-white p-2.5"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      <Transition.Root show={openSettings} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-hidden"
          onClose={() => setOpenSettings(false)}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex justify-center">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="fixed inset-y-0 right-0 flex w-full items-center justify-center overflow-y-auto">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute right-full top-0 flex h-full items-center justify-center">
                    {/* <button
                      type="button"
                      className="text-white p-2.5"
                      onClick={() => setOpen(false)}
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon className="h-6 w-6" aria-hidden="true" />
                    </button> */}
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                {/* <SettingsModal setOpen={() => setOpenSettings(false)} /> */}
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>

      {/* Static sidebar for desktop */}
      <div
        className={`hidden lg:fixed lg:inset-y-0 lg:z-50 lg:flex lg:flex-col ${minimize ? "lg:w-22" : "lg:w-72"}`}
      >
        {/* Sidebar component, swap this element with another sidebar if you like */}
        {/* <PageNav /> */}
        <img
          onClick={() => setMinimize((prev) => !prev)}
          //   src={toggleSidebar}
          className={`absolute -right-5 top-1/2 -translate-y-1/2 transform cursor-pointer ${minimize ? "" : "rotate-[180deg]"}`}
        />

        <SideNav />
      </div>

      <div
        className={`${minimize ? "lg:pl-[10rem]" : "lg:pl-72"} min-h-screen bg-gray-900`}
      >
        <main className="max-w-screen-3xl mx-auto bg-gray-900/90"></main>
      </div>
    </div>
  );
}

// export function LandPageWrapper() {
//   const { getToken } = useAuth();

//   useEffect(() => {
//     const signInWithClerk = async () => {
//       const auth = getAuth();
//       const token = await getToken({ template: "integration_firebase" });
//       const userCredentials = signInWithCustomToken(auth, token);
//     };
//     signInWithClerk();
//   }, []);

//   return <LandingPage />;
// }

export function LandingPageWrapper() {
  return <LandingPageInner />;
}
