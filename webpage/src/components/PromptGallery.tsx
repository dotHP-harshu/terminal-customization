"use client";
import { PROMPTS } from "@/data/prompts";
import PromptCard from "./PromptCard";
import { useState } from "react";
import CodeModal from "./CodeModal";

function PromptGallery() {
  const [promptFile, setPromptFile] = useState("");
  const [isShowingModal, setIsShowingModal] = useState(false);
  const showModal = (file:string)=>{
    setPromptFile(file)
    setIsShowingModal(true)
  }
  return (
    <>
      <section id="prompts">
        <div className="container">
          <div className="section-header reveal">
            <span className="label">10 styles</span>
            <h2>Prompt gallery</h2>
            <p>
              Click any prompt to view its full source code. Copy the entire
              file into your <code>$PROFILE</code> to use it.
            </p>
          </div>

          <div className="prompt-grid stagger" id="prompt-grid">
            {PROMPTS.map((prompt, i) => (
              <PromptCard key={prompt.id} prompt={prompt} i={i} showModal={showModal} />
            ))}
          </div>
        </div>
      </section>
      {isShowingModal && (
        <CodeModal
          file={promptFile}
          hideModal={() => setIsShowingModal(false)}
        />
      )}
    </>
  );
}

export default PromptGallery;
