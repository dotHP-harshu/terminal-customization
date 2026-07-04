import React from "react";
import CodeBlock from "./CodeBlock";

function Hiw() {
  return (
    <section id="how-it-works">
      <div className="container container--narrow">
        <div className="section-header reveal">
          <span className="label">Under the hood</span>
          <h2>How it works</h2>
          <p>
            The startup flow is straightforward. Here is what happens from the
            moment you open a terminal.
          </p>
        </div>

        <div className="flow reveal">
          <div className="flow__item">
            <div className="flow__item-title">Terminal Opens</div>
            <div className="flow__item-desc">
              Windows Terminal launches PowerShell 7
            </div>
          </div>
          <div className="flow__arrow">
            <svg
              viewBox="0 0 16 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 2v16M4 14l4 4 4-4" />
            </svg>
          </div>
          <div className="flow__item">
            <div className="flow__item-title">$PROFILE Loads</div>
            <div className="flow__item-desc">
              PowerShell reads your profile script from Documents\PowerShell\
            </div>
          </div>
          <div className="flow__arrow">
            <svg
              viewBox="0 0 16 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 2v16M4 14l4 4 4-4" />
            </svg>
          </div>
          <div className="flow__item">
            <div className="flow__item-title">Clear-Host + Show-Fastfetch</div>
            <div className="flow__item-desc">
              Screen clears, Fastfetch runs with your config and ASCII art
            </div>
          </div>
          <div className="flow__arrow">
            <svg
              viewBox="0 0 16 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 2v16M4 14l4 4 4-4" />
            </svg>
          </div>
          <div className="flow__item">
            <div className="flow__item-title">prompt Function Renders</div>
            <div className="flow__item-desc">
              Custom prompt draws username, path, git, and other info
            </div>
          </div>
          <div className="flow__arrow">
            <svg
              viewBox="0 0 16 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.5"
            >
              <path d="M8 2v16M4 14l4 4 4-4" />
            </svg>
          </div>
          <div className="flow__item">
            <div className="flow__item-title">Ready for Input</div>
            <div className="flow__item-desc">
              You type commands. On cls/clear, Show-Fastfetch re-runs.
            </div>
          </div>
        </div>

        {/* <!-- VS Code Integration --> */}
        <div style={{ marginTop: "4rem" }} className="reveal">
          <h3>VS Code Integration</h3>
          <p>
            To make VS Code's integrated terminal also show Fastfetch on
            startup, add a custom profile to your VS Code
            <code>settings.json</code>.
          </p>
          <CodeBlock
            filename="settings.json"
            code={`{\n  "terminal.integrated.profiles.windows": {\n    "PowerShell": {\n      "source": "PowerShell",\n      "args": [\n        "-NoExit",\n        "-Command",\n        "fastfetch -c 'C:/Users/YourName/.config/fastfetch/config.jsonc'"\n      ]\n    }\n  }\n}\n`}
          />
          <p style={{ marginTop: "1rem" }}>
            Replace <code>C:/Users/YourName/</code> with your actual home path.
            Run
            <code>$HOME</code> in PowerShell to find it.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Hiw;
