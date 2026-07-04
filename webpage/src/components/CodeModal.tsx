"use client";
import { PS1_CODE } from "@/data/prompts";
import { useEffect, useState } from "react";

interface Props {
  file: string;
  hideModal: () => void;
}
function CodeModal({ file, hideModal }: Props) {
  const [isCopied, setIsCopied] = useState(false);

  const copyCode = (text: string) => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        setIsCopied(true);
        setTimeout(() => {
          setIsCopied(false);
        }, 2500);
      })
      .catch((error) => {
        console.log("Error on copying the code.");
      });
  };

  const [promptCode, setPromptCode] = useState(() => {
    return PS1_CODE[file];
  });

  return (
    //   <!-- Code Modal -->
    <div className="modal-overlay" id="modal-overlay" onClick={hideModal}>
      <div
        className="modal"
        onClick={(e)=>e.stopPropagation()}
        //   onclick="event.stopPropagation()"
      >
        <div className="modal__header">
          <span className="modal__title" id="modal-title">
            Source Code
          </span>
          <div style={{ display: "flex", gap: "0.5rem", alignItems: "center" }}>
            <button
              className="code-block__copy"
              id="modal-copy"
              onClick={() => copyCode(promptCode)}
            >
              {isCopied ? "Copied" : "Copy"}
            </button>
            <button className="modal__close" onClick={hideModal}>
              &times;
            </button>
          </div>
        </div>
        <div className="modal__body">
          <pre>
            <code id="modal-code">{promptCode}</code>
          </pre>
        </div>
      </div>
    </div>
  );
}

export default CodeModal;
