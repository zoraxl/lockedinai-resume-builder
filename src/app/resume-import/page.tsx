"use client";
import {
  getHasUsedAppBefore,
  LOCAL_STORAGE_KEY,
} from "lib/redux/local-storage";
import { ResumeDropzone } from "components/ResumeDropzone";
import { useState, useEffect } from "react";
import Link from "next/link";
import CyberButton from "components/CyberButton";
import {
  initialResumeState,
  setResume,
  setResumeToDefault,
} from "lib/redux/resumeSlice";
import {
  useAppDispatch,
  useSaveStateToLocalStorageOnChange,
} from "lib/redux/hooks";
import { Provider, useDispatch } from "react-redux";
import { store } from "lib/redux/store";

export default function ImportResume() {
  const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
  const [hasAddedResume, setHasAddedResume] = useState(false);

  useSaveStateToLocalStorageOnChange();

  const dispatch = useDispatch();
  const onFileUrlChange = (fileUrl: string) => {
    setHasAddedResume(Boolean(fileUrl));
  };

  useEffect(() => {
    setHasUsedAppBefore(getHasUsedAppBefore());
  }, []);

  return (
    <div className="flex h-screen items-center">
      <div className="mx-auto w-[90%] rounded-md border border-design-blue bg-design-dark-grey px-10 py-10 text-center shadow-md lg:w-[800px]">
        {!hasUsedAppBefore ? (
          <>
            <h1 className="text-lg font-semibold text-design-blue">
              Import data from an existing resume
            </h1>
            <ResumeDropzone
              onFileUrlChange={onFileUrlChange}
              className="mt-5"
            />
            {!hasAddedResume && (
              <>
                <OrDivider />
                <SectionWithHeadingAndCreateButton
                  heading="Don't have a resume yet?"
                  buttonText="Create from scratch"
                />
              </>
            )}
          </>
        ) : (
          <>
            {!hasAddedResume && (
              <>
                <SectionWithHeadingAndCreateButton
                  heading="You have data saved in browser from prior session"
                  buttonText="Continue where I left off"
                />
                <OrDivider />
              </>
            )}
            <h1 className="font-semibold text-design-blue">
              Override data with a new resume
            </h1>
            <>
              <SectionWithHeadingAndCreateButton
                buttonText="Create from scratch"
                onClick={() => dispatch(setResumeToDefault())}
              />
            </>
            <ResumeDropzone
              onFileUrlChange={onFileUrlChange}
              className="mt-5"
            />
          </>
        )}
      </div>
    </div>
  );
}

const OrDivider = () => (
  <div className="mx-[-2.5rem] flex items-center pb-6 pt-8" aria-hidden="true">
    <div className="flex-grow border-t border-design-blue" />
    <span className="mx-2 mt-[-2px] flex-shrink text-lg text-gray-400">or</span>
    <div className="flex-grow border-t border-design-blue" />
  </div>
);

const SectionWithHeadingAndCreateButton = ({
  heading,
  buttonText,
  onClick,
}: {
  heading?: string;
  buttonText: string;
  onClick?: any;
}) => {
  return (
    <>
      <p className="font-semibold text-design-blue">{heading}</p>
      <div className="mt-5" onClick={onClick}>
        <Link
          href="/resume-builder"
          // className="outline-theme-blue rounded-full bg-sky-500 px-6 pb-2 pt-1.5 text-base font-semibold text-white"
        >
          <CyberButton text={buttonText} />
        </Link>
      </div>
    </>
  );
};
