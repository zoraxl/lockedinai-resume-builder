"use client";
import { getHasUsedAppBefore } from "lib/redux/local-storage";
import { ResumeDropzone } from "components/ResumeDropzone";
import { useState, useEffect } from "react";
import Link from "next/link";
import CyberButton from "components/CyberButton";

export default function ImportResume() {
  const [hasUsedAppBefore, setHasUsedAppBefore] = useState(false);
  const [hasAddedResume, setHasAddedResume] = useState(false);
  const onFileUrlChange = (fileUrl: string) => {
    setHasAddedResume(Boolean(fileUrl));
  };

  useEffect(() => {
    setHasUsedAppBefore(getHasUsedAppBefore());
  }, []);

  return (
    <div className="flex h-screen items-center">
      <div className="border-design-blue bg-design-dark-grey mx-auto w-[90%] rounded-md border px-10 py-10 text-center shadow-md lg:w-[800px]">
        {!hasUsedAppBefore ? (
          <>
            <h1 className="text-design-blue text-lg font-semibold">
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
            <h1 className="text-design-blue font-semibold">
              Override data with a new resume
            </h1>
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
    <div className="border-design-blue flex-grow border-t" />
    <span className="mx-2 mt-[-2px] flex-shrink text-lg text-gray-400">or</span>
    <div className="border-design-blue flex-grow border-t" />
  </div>
);

const SectionWithHeadingAndCreateButton = ({
  heading,
  buttonText,
}: {
  heading: string;
  buttonText: string;
}) => {
  return (
    <>
      <p className="text-design-blue font-semibold">{heading}</p>
      <div className="mt-5">
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
