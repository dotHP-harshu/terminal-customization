export default function Hero (){
    return (
        //  Hero 
  <header className="hero">
    <div className="container container--narrow">
      <span className="label reveal">Open-source / PowerShell 7+</span>
      <h1 className="reveal">Make your terminal<br/>actually worth looking at.</h1>
      <p className="hero__sub reveal">Custom ASCII startup art. 10 handcrafted prompt styles. Smart path colors, git status,
        language detection. All native PowerShell, no external prompt frameworks.</p>
      <div className="hero__actions reveal">
        <a href="https://github.com/dotHP-harshu/terminal-customization" target="_blank" className="btn btn--primary">GitHub</a>
        <a href="#prompts" className="btn btn--ghost">View Prompt Styles</a>
      </div>
    </div>
  </header>
    )
}