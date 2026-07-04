import CodeBlock from "./CodeBlock"

function Customisation() {
  return (
    // <!-- Customization -->
  <section id="customize">
    <div className="container container--narrow">
      <div className="section-header reveal">
        <span className="label">Make it yours</span>
        <h2>Customization</h2>
        <p>Every prompt file defines its color palette at the top. Here is what each variable controls and how to change
          it.</p>
      </div>

      <div className="bento bento--2 stagger">
        <div className="reveal">
          <h3>Color Variables</h3>
          <p>Each standalone file begins with a block of <code>$C_*</code> variables. These map to PowerShell's
            <code>[ConsoleColor]</code> enum.
          </p>
          <div style={{marginTop: "1.5rem", display: "flex", flexDirection: "column", gap: "0.5rem"}}>
            <div style={{display: "flex", alignItems: "center" ,gap: "0.75rem"}}>
              <span style={{width: "10px", height: "10px", background: "#22C55E" , borderRadius: "2px"}}></span>
              <code>$C_SUCCESS</code>
              <span style={{fontSize: "0.8rem", color: "var(--text-secondary)"}}>Prompt character, clean indicators</span>
            </div>
            <div style={{display: "flex", alignItems: "center" ,gap: "0.75rem"}}>
              <span style={{width: "10px", height: "10px", background: "#3B82F6", borderRadius: "2px"}}></span>
              <code>$C_DIR</code>
              <span style={{fontSize: "0.8rem", color: "var(--text-secondary)"}}>Folder and directory icons</span>
            </div>
            <div style={{display: "flex", alignItems: "center" ,gap: "0.75rem"}}>
              <span style={{width: "10px", height: "10px", background: "#D946EF", borderRadius: "2px"}}></span>
              <code>$C_GIT</code>
              <span style={{fontSize: "0.8rem", color: "var(--text-secondary)"}}>Git branch icon</span>
            </div>
            <div style={{display: "flex", alignItems: "center" ,gap: "0.75rem"}}>
              <span style={{width: "10px", height: "10px", background: "#EAB308", borderRadius: "2px"}}></span>
              <code>$C_BRANCH</code>
              <span style={{fontSize: "0.8rem", color: "var(--text-secondary)"}}>Git branch name</span>
            </div>
            <div style={{display: "flex", alignItems: "center" ,gap: "0.75rem"}}>
              <span style={{width: "10px", height: "10px", background: "#0EA5E9", borderRadius: "2px"}}></span>
              <code>$C_USER</code>
              <span style={{fontSize: "0.8rem", color: "var(--text-secondary)"}}>Username</span>
            </div>
            <div style={{display: "flex", alignItems: "center" ,gap: "0.75rem"}}>
              <span style={{width: "10px", height: "10px", background: "#EF4444", borderRadius: "2px"}}></span>
              <code>$C_DIRTY</code>
              <span style={{fontSize: "0.8rem", color: "var(--text-secondary)"}}>Dirty git indicator (*)</span>
            </div>
          </div>
          <p style={{marginTop: "1.25rem"}}>Available colors: <code>White</code>, <code>Black</code>,
            <code>DarkGray</code>, <code>Gray</code>, <code>Red</code>, <code>DarkRed</code>, <code>Green</code>,
            <code>DarkGreen</code>, <code>Blue</code>, <code>DarkBlue</code>, <code>Cyan</code>, <code>DarkCyan</code>,
            <code>Magenta</code>, <code>DarkMagenta</code>, <code>Yellow</code>, <code>DarkYellow</code>.
          </p>
        </div>

        <div className="reveal">
          <h3>Path Color Cycle</h3>
          <p>The <code>$C_PATH_CYCLE</code> array controls the colors for each folder level in the path. Each segment
            gets the next color in the list.</p>
          <CodeBlock filename="Default cycle" code={`$C_PATH_CYCLE = @(\n    [ConsoleColor]::Blue,\n    [ConsoleColor]::Cyan,\n    [ConsoleColor]::Magenta,\n    [ConsoleColor]::Yellow\n)`} />
          <p style={{marginTop: "1rem"}}>Add, remove, or reorder colors. The cycle repeats if the path has more segments
            than colors.</p>

          <h3 style={{marginTop: "2rem"}}>Username and Hostname</h3>
          <p>Most prompts read from environment variables automatically. To hardcode a different name, replace
            <code>$env:USERNAME</code> with a string.
          </p>
          <CodeBlock filename="Custom name" code={`# Default (reads from system)\nWrite-Host $env:USERNAME ...\n\n# Custom name\nWrite-Host "harsh" ...\n
            `} />
        </div>
      </div>

      {/* <!-- Color Palette Reference --> */}
      <div style={{marginTop: "3rem"}} className="reveal">
        <h3>Catppuccin Mocha Hex Values</h3>
        <p style={{marginTop: "0.5rem", marginBottom: "1.5rem"}}>For Fastfetch ASCII art coloring in
          <code>config.jsonc</code>.
        </p>
        <div className="swatch-grid">
          <div className="swatch">
            <div className="swatch__color" style={{background: "#F5E0DC"}}></div>
            <div className="swatch__label">#F5E0DC Rosewater</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#F2CDCD"}}></div>
            <div className="swatch__label">#F2CDCD Flamingo</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#F5C2E7"}}></div>
            <div className="swatch__label">#F5C2E7 Pink</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#FAB387"}}></div>
            <div className="swatch__label">#FAB387 Peach</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#F9E2AF"}}></div>
            <div className="swatch__label">#F9E2AF Yellow</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#A6E3A1"}}></div>
            <div className="swatch__label">#A6E3A1 Green</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#94E2D5"}}></div>
            <div className="swatch__label">#94E2D5 Teal</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#89DCEB"}}></div>
            <div className="swatch__label">#89DCEB Sky</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#74C7EC"}}></div>
            <div className="swatch__label">#74C7EC Sapphire</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#89B4FA"}}></div>
            <div className="swatch__label">#89B4FA Blue</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#B4BEFE"}}></div>
            <div className="swatch__label">#B4BEFE Lavender</div>
          </div>
          <div className="swatch">
            <div className="swatch__color" style={{background: "#CBA6F7"}}></div>
            <div className="swatch__label">#CBA6F7 Mauve</div>
          </div>
        </div>
      </div>
    </div>
  </section>
  )
}

export default Customisation