const ASCII_ART = `

██████╗    █████╗  ████████╗  ██╗  ██╗  ██████╗
██╔══██╗  ██╔══██╗ ╚══██╔══╝  ██║  ██║  ██╔══██╗
██║  ██║  ██║  ██║    ██║     ███████║  ██████╔╝
██║  ██║  ██║  ██║    ██║     ██╔══██║  ██╔═══╝
██████╔╝  ╚█████╔╝    ██║     ██║  ██║  ██║
╚═════╝    ╚════╝     ╚═╝     ╚═╝  ╚═╝  ╚═╝

`
const TERMINAL = `
 ╭─ 󰣇 harsh@DESKTOP
 │
 ├─ 󰉋 ~\Projects\SchoolFlow
 ├─ main ✓
 ├─ 󰍛 12ms
 │
 ╰─❯ 
`
export default function Overview() {

    return (
        // Overview
        <section id="overview">
            <div className="container">
                <div className="section-header reveal">
                    <span className="label">What this does</span>
                    <h2>Two layers of customization</h2>
                    <p>This project replaces the default PowerShell experience with a terminal that shows system information on
                        startup and presents a styled, informative prompt every time you press Enter.</p>
                </div>

                <div className="bento bento--asymmetric stagger">
                    <div className="reveal">
                        <span className="label">Layer 1</span>
                        <h3>ASCII Startup Banner</h3>
                        <p>When you open a terminal, Fastfetch displays your custom ASCII art. The logo uses Catppuccin Mocha colors and renders with JetBrains Mono Nerd Font.</p>
                        <div style={{ marginTop: "1.5rem" }}>
                            <div className="os-window">
                                <div className="os-window__bar">
                                    <span className="os-window__dot"></span>
                                    <span className="os-window__dot"></span>
                                    <span className="os-window__dot"></span>
                                </div>
                                <div className="os-window__body">
                                    <div className="terminal-preview" style={{ color: "var(--text-secondary)" }}>
                                        <pre>{ASCII_ART}</pre>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="reveal">
                        <span className="label">Layer 2</span>
                        <h3>Custom Prompt</h3>
                        <p>Every command line starts with a styled prompt showing your username, smart-truncated path, git branch with
                            status, and optional language version or execution time. 10 styles included.</p>
                        <div style={{ marginTop: "1.5rem" }}>
                            <div className="os-window">
                                <div className="os-window__bar">
                                    <span className="os-window__dot"></span>
                                    <span className="os-window__dot"></span>
                                    <span className="os-window__dot"></span>
                                </div>
                                <div className="os-window__body">
                                    <div className="terminal-preview">
                                        <div>
                                            <span className="c-muted">╭─</span><span className="c-nerd"> 󰣇 </span><span
                                            className="c-cyan">harsh@DESKTOP</span>
                                        </div>
                                        <div><span className="c-muted">│</span></div>
                                        <div><span className="c-muted">├─</span><span className="c-nerd"> 󰉋 </span><span
                                            className="c-path">~\Projects\SchoolFlow</span></div>
                                        <div><span className="c-muted">├─</span><span className="c-nerd"> </span><span className="c-yellow">main</span> <span
                                            className="c-green">✓</span></div>
                                        <div><span className="c-muted">├─</span><span className="c-nerd"> 󰍛 12ms</span></div>
                                        <div><span className="c-muted">│</span></div>
                                        <div><span className="c-muted">╰─</span><span className="c-green">❯ </span></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}