import React from "react";

function CyberButton({
  text,
  onClick,
  disabled,
  loading,
}: {
  text: string;
  onClick?: any;
  disabled?: boolean;
  loading?: boolean;
}) {
  return (
    <button className="btn" onClick={onClick} disabled={disabled || loading}>
      <span className="btn__content">{text}</span>
    </button>
  );
}

export default CyberButton;
