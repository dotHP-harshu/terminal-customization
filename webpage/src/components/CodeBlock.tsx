"use client";
import { useState } from "react";

function CodeBlock({
  code,
  filename = "PowerShell",
}: {
  code: string;
  filename?: string;
}) {
  const [isCopied, setIsCopied] = useState(false);
  const copyCode = (text: string) => {
    navigator.clipboard.writeText(text).then(() => {
      setIsCopied(true);
      setTimeout(() => {
        setIsCopied(false);
      }, 1500);
    });
  };
  return (
    <div className="code-block">
      <div className="code-block__header">
        <span className="code-block__filename">{filename}</span>
        <button className="code-block__copy" onClick={() => copyCode(code)}>
          {isCopied ? "Copied" : "Copy"}
        </button>
      </div>
      <pre>
        <code>{code}</code>
      </pre>
    </div>
  );
}

export default CodeBlock;
