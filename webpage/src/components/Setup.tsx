import CodeBlock from "./CodeBlock"

function Setup() {
    return (
        // Setup Guide
        <section id="setup">
            <div className="container container--narrow">
                <div className="section-header reveal">
                    <span className="label">Step by step</span>
                    <h2>Setup guide</h2>
                    <p>Follow these four steps in order. Each one builds on the previous.</p>
                </div>

                <div className="steps">

                    {/* <!-- Step 1: Font --> */}
                    <div className="step reveal">
                        <div className="step__number"></div>
                        <div className="step__body">
                            <h3>Install the Nerd Font</h3>
                            <p>Go to <a href="https://www.nerdfonts.com/font-downloads"
                                style={{ textDecoration: "underline", textUnderlineOffset: "3px" }}>nerdfonts.com/font-downloads</a>, search
                                for JetBrainsMono, download the zip, extract it, and install every .ttf file. Then set your terminal to
                                use "JetBrainsMono Nerd Font" in its settings.</p>
                        </div>
                    </div>

                    {/* <!-- Step 2: Fastfetch --> */}
                    <div className="step reveal">
                        <div className="step__number"></div>
                        <div className="step__body">
                            <h3>Install Fastfetch and configure it</h3>
                            <p>Fastfetch reads your ASCII art and system info on terminal startup. Install it, then create the config
                                directory and copy the two files from this repo.</p>
                            <CodeBlock code={`winget install fastfetch`}/>
                            <CodeBlock code={`mkdir "$HOME\.config\fastfetch"`}/>
                            <CodeBlock code={
                                `# Copy from this repo:\n    #   fastfetch/ascii.txt      -> your ASCII logo\n    #   fastfetch/config.jsonc   -> display config`
                            } />
                        </div>
                        <p style={{ marginTop: "1rem" }}></p>
                        <p style={{ marginTop: "1rem" }}>You can
                            find
                            <code><a href="https://github.com/dotHP-harshu/terminal-customization/" target="_blank"><u>./fastfetch/</u></a></code>
                            in github.<br />
                            The config file points to <code>~/.config/fastfetch/ascii.txt</code> and
                            applies Catppuccin Mocha colors. Edit <code>ascii.txt</code> with your own art if desired.</p>
                    </div>
                </div>

                {/* <!-- Step 3: Profile --> */}
                <div className="step reveal">
                    <div className="step__number"></div>
                    <div className="step__body">
                        <h3>Set up your PowerShell profile</h3>
                        <p>Your PowerShell profile runs every time you open a terminal. This is where the startup banner and custom
                            prompt live.</p>
                        <CodeBlock code={`# Find your profile path
$PROFILE

# Create it if it doesn't exist
if (!(Test-Path -Path $PROFILE)) {
    New - Item - ItemType File -Path $PROFILE -Force
}

# Open in Notepad
notepad $PROFILE
`} />
                        <p style={{ marginTop: "1rem" }}>Delete everything in that file, then paste the contents of your chosen prompt
                            file from the <code>standalone/</code> folder. Save and close.</p>
                    </div>
                </div>

                {/* <!-- Step 4: Restart --> */}
                <div className="step reveal">
                    <div className="step__number"></div>
                    <div className="step__body">
                        <h3>Restart your terminal</h3>
                        <p>Close and reopen Windows Terminal. You should see the Fastfetch banner followed by your new styled
                            prompt. To test the clear shortcut, type <kbd>cls</kbd> or <kbd>clear</kbd> and press Enter.</p>
                    </div>
                </div>

            </div>

        </section >
    )
}

export default Setup