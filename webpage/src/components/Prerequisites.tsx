export default function Prerequistites() {
    return (
        // Prerequistites
        <section id="prerequisites">
            <div className="container container--narrow">
                <div className="section-header reveal">
                    <span className="label">Before you start</span>
                    <h2>Prerequisites</h2>
                    <p>Three things you need installed before proceeding. The font is mandatory, the rest are recommended.</p>
                </div>

                <div className="bento bento--3 stagger">
                    <div className="reveal">
                        <span className="label">Required</span>
                        <h3>JetBrains Mono Nerd Font</h3>
                        <p>Without this, icons render as empty boxes. Download from nerdfonts.com and install the .ttf files.</p>
                    </div>
                    <div className="reveal">
                        <span className="label">Recommended</span>
                        <h3>Fastfetch</h3>
                        <p>Displays system info with your ASCII logo on startup. Install via winget.</p>
                        <div className="code-block" style={{ marginTop: "1rem" }}>
                            <pre>winget install fastfetch</pre>
                        </div>
                    </div>
                    <div className="reveal">
                        <span className="label">Required</span>
                        <h3>PowerShell 7+</h3>
                        <p>The prompt scripts use features only available in PowerShell 7 or later. Check with
                            <code>$PSVersionTable</code>.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}