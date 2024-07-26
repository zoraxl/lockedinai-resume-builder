import clsx from "clsx";
import React, { useEffect, useState } from "react";

const NewCyberButton = ({
  id,
  onClick,
  label,

  text,
}: any) => {
  const [btnStyle, setBtnStyle] = useState("");

  return (
    <button id={id} onClick={onClick} className={clsx(`btn`, "btn--secondary")}>
      <span className="btn__content">{text}</span>
      <span className="btn__glitch"></span>
      <span className="btn__label">{label}</span>
    </button>
  );
};

export default NewCyberButton;
