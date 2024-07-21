import React from "react";

function CyberButton({ text, onClick }: { text: string; onClick?: any }) {
  return (
    <button className="btn" onClick={onClick}>
      <span className="btn__content">{text}</span>
    </button>
  );
}

export default CyberButton;
