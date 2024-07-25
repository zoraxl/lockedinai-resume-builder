import { Dialog, Transition } from "@headlessui/react";
import OriginalButton from "components/OriginalButton";
import { Input, Textarea } from "components/ResumeForm/Form/InputGroup";
import React, { useState, useEffect, Fragment } from "react";

// import Button from "../components/MyNewComponents/Button.react";

function getTimeEpoch() {
  return new Date().getTime().toString();
}
const curve = "/assets/curve-1-small.svg";
const curve2 = "/assets/curve-2-small.svg";
const Close = "/assets/close-blue.svg";
const InputVector = "/assets/input-vector.svg";

function ModalContent(props: any) {
  const { setFormOpen, title } = props;

  const [jobTitle, setJobTitle] = useState("");
  const [jobDesc, setJobDesc] = useState("");

  return (
    <section className="relative z-50 w-[370px]">
      <div className="absolute bottom-[-17px] left-0 flex items-center">
        <img src={curve} alt="curve" style={{ width: "100px" }} />
        <img src={curve2} alt="curve2" style={{ width: "100px" }} />
      </div>
      <div className="clipped-modal relative mx-auto flex h-full min-h-[300px] w-[370px] items-center justify-center bg-white before:relative before:left-[0px] before:top-[14px] before:block before:h-[23px] before:w-[39px] before:bg-[rgba(38,38,38,0.9)] md:min-h-[350px] md:w-[551px]">
        <div className="clipped-modal absolute h-[99%] w-[99%] !bg-black">
          <img
            onClick={() => setFormOpen(false)}
            src={Close}
            alt="close"
            className="absolute right-4 top-2 z-50 cursor-pointer"
          />
          <section className="sm:custom-overflow-vertical flex w-full flex-col px-[20px] py-[20px] sm:overflow-y-auto md:py-[30px]">
            <h2 className="border-b border-b-white/30 pb-1 text-sm font-medium leading-[18px] text-white md:text-lg">
              {title}
            </h2>

            <div className="grid grid-cols-6">
              <div className="h-[10px]" />
              <Input
                label="Job Title"
                labelClassName="col-span-full"
                name="jobTitle"
                placeholder="Enter Job Title here.."
                value={jobTitle}
                onChange={(_, val) => setJobTitle(val)}
              />
              <div className="h-[20px]" />
              <Textarea
                label="Job Description"
                labelClassName="col-span-full"
                name="jobDesc"
                placeholder="Enter Job Description here.."
                value={jobDesc}
                onChange={(_, val) => setJobDesc(val)}
                ignoreAutoSize={true}
              />

              <div className="col-span-full mt-[10px] flex justify-end gap-2">
                <OriginalButton
                  className="h-6 w-20 min-w-max bg-cyan-500 px-2 text-xs text-black transition duration-200 ease-out hover:bg-cyan-500/80 md:h-10"
                  text={"Confirm"}
                />
                <OriginalButton
                  handleClick={() => setFormOpen(false)}
                  className="h-6 w-20 min-w-max bg-gray-400 px-2 text-xs text-black transition duration-200 ease-out hover:bg-gray-600 md:h-10"
                  text={"Cancel"}
                />
              </div>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}

function JobInputModal(props: any) {
  const { formOpen, setFormOpen, title } = props;

  return (
    <Transition.Root show={formOpen} as={Fragment}>
      <Dialog
        as="div"
        className="fixed inset-0 z-50 overflow-hidden"
        onClose={setFormOpen}
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
            <Dialog.Panel className="fixed inset-y-0 right-0 flex w-full justify-center">
              <div className="absolute left-[50%] top-[50%] z-10 translate-x-[-50%] translate-y-[-50%]">
                <ModalContent setFormOpen={setFormOpen} title={title} />
              </div>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

export default JobInputModal;
