"use client"
import { PROMPTS_INTERFACE } from "@/data/prompts";
import CodeModal from "./CodeModal";

interface Props {
  prompt: PROMPTS_INTERFACE;
  i: number;
  showModal:(file:string)=>void
}
function PromptCard({ prompt, i, showModal }: Props) {

  return (
    <div
    onClick={()=>showModal(prompt.file)}
      className="prompt-card reveal"
      style={{ transitionDelay: `${i * 80}ms` }}
    >
      <div className="prompt-card__header">
        <span className="prompt-card__name">{prompt.name}</span>
        <span className={`tag tag--${prompt.tagClass.replace("tag-", "")}`}>
          {prompt.tag}
        </span>
      </div>
      <div className="prompt-card__preview">{prompt.preview}</div>
      <div className="prompt-card__desc">{prompt.desc}</div>
    </div>
  );
}

export default PromptCard;
