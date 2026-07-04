"use client"
import React, { useState } from "react";

interface Props{
    question:string,
    answer:React.JSX.Element
}

function Accordion({question,answer}:Props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="accordion__item" data-open="false">
      <button
        className="accordion__trigger"
        onClick={() => setIsOpen((prev) => !prev)}
      >
        <span>{question}</span>
        <span
          className="accordion__icon"
          style={{ rotate: `${isOpen ? "45deg" : "0deg"}` }}
        >
          +
        </span>
      </button>
      {isOpen && (
        <div className="accordion__content">
          <div className="accordion__content-inner">
            {answer}
          </div>
        </div>
      )}
    </div>
  );
}

export default Accordion;
