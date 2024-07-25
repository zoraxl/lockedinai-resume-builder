import React from "react";
import PropTypes from "prop-types";
export default function OriginalButton({
  loading,
  text,
  className,
  border,
  type = "submit",
  element,
  handleClick,
  children,
  fillDeg,
}: any) {
  const combinedClassName = `mx-auto relative block login_clip min-w-[60px] max-w-[116px] items-center font-inter font-[600] text-[14px] ${className}`;
  return (
    <div>
      <button onClick={handleClick} type={type} className={combinedClassName}>
        {loading ? (
          <div
            className="text-design-white mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-solid border-[white] border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
            role="status"
          ></div>
        ) : null}
        {border ? (
          <div
            className={`absolute right-[3px] top-0 z-[50] h-full w-[3px] ${border}`}
          ></div>
        ) : null}
        {text}
        {element}
        {children}
      </button>
    </div>
  );
}

OriginalButton.propTypes = {
  text: PropTypes.string,
  loading: PropTypes.bool,
  className: PropTypes.string,
  border: PropTypes.string,
  element: PropTypes.element,
  handleClick: PropTypes.func,
};
