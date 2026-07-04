
import React from "react"
import CodeBlock from "./CodeBlock"
import Accordion from "./Accordion"

interface FAQs_INTERFACE{
    question:string,
    answer:React.JSX.Element
}
function Faq() {

    const FAQs :FAQs_INTERFACE[] = [
        {
            question: "Icons show as boxes or weird characters",
            answer:<p>You have not installed the Nerd Font, or your terminal is not set to use it. Install JetBrains Mono
                Nerd Font from nerdfonts.com, then go to your terminal settings and set the font to "JetBrainsMono Nerd
                Font". Restart the terminal after changing.</p>
        },
        {
            question: "Fastfetch does not show on startup",
            answer:<p>Check if it is installed by running <code>fastfetch --version</code> in PowerShell. If not found,
                install it with <code>winget install fastfetch</code>. Also verify that your profile includes the
                <code>Show-Fastfetch</code> function and that it is called at the top of the profile script.
              </p>
        },
        {
            question: "Prompt looks broken after editing",
            answer:<p>Open <code>$PROFILE</code> in Notepad and check for syntax errors. PowerShell is strict about string
                escaping and brackets. If you are stuck, delete everything and paste a fresh copy of your chosen
                standalone file.</p>
        },
        {
            question: "cls or clear does not redraw Fastfetch",
            answer:<> <p>Make sure your profile includes the alias lines at the bottom:</p>
              <CodeBlock code={`function c {\n    Clear-Host\n    Show-Fastfetch\n}\n\nSet-Alias cls c\nSet-Alias clear c\n`}/></>
        },
        {
            question: "Path colors look wrong",
            answer:<p>The <code>$C_PATH_CYCLE</code> array might be empty or contain invalid color names. Make sure each
                entry is a valid <code>[ConsoleColor]</code> value. The cycle repeats if your path has more segments
                than the number of colors defined.</p>
         },
        {
            question: "Can I use this with Windows Terminal only?",
            answer:<p>The prompt scripts work in any PowerShell 7+ terminal. The Fastfetch startup banner works in any
                terminal that supports it. Windows Terminal is recommended for the best experience with themes and
                transparency, but ConEmu, Cmder, and VS Code's integrated terminal all work.</p>
         },
    ]
  return (
      <section id="faq">
    <div className="container container--narrow">
      <div className="section-header reveal">
        <span className="label">Troubleshooting</span>
        <h2>Frequently asked questions</h2>
      </div>

      <div className="accordion reveal" id="faq-accordion">
        {
            FAQs.map((faq)=>(
                <Accordion key={faq.question.replace(" ","")} question={faq.question} answer={faq.answer}/>
            ))
        }
      </div>
    </div>
  </section>
  )
}

export default Faq