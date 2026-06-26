# Terminal Customization Setup

So you want your terminal to look good? This guide walks you through every step — no guessing, no "figure it out yourself." We'll go from a boring default terminal to something you actually enjoy staring at.

---

## What You're Getting

Here's the deal. This repo has:

- **10 different prompt styles** — from minimal to cyberpunk to dashboard
- **Fastfetch** — shows your system info with a custom ASCII logo on startup
- **VS Code integration** — your terminal inside VS Code also looks good
- **Everything runs on native PowerShell** — no Oh My Posh, no Starship, no external modules

Pick a style, follow the steps, done.

---

## Step 1: Install the Font

Before anything else, you need **JetBrains Mono Nerd Font**. Without it, the icons will show up as weird boxes.

1. Go to [nerdfonts.com/font-downloads](https://www.nerdfonts.com/font-downloads)
2. Search for **JetBrainsMono**
3. Download the zip, extract it
4. Open the `.ttf` files and click **Install** on each one

That's it. The font is now available system-wide.

---

## Step 2: Install Fastfetch

Fastfetch shows your system info (CPU, RAM, OS, etc.) when you open the terminal. It's optional but looks great.

```powershell
winget install fastfetch
```

If you skip this, the prompt will still work — it just won't show the startup banner.

---

## Step 3: Set Up Fastfetch Config

Fastfetch needs two files to display your custom ASCII art and colors.

### Create the config folder

```powershell
mkdir "$HOME\.config\fastfetch"
```

### Copy the files

Take these two files from this repo and drop them into that folder:

| File | Where to get it | What it does |
|------|----------------|--------------|
| `ascii.txt` | `fastfetch/ascii.txt` | Your custom ASCII logo |
| `config.jsonc` | `fastfetch/config.jsonc` | Colors, display settings, logo source |

After copying, your folder should look like:

```
C:\Users\YourName\.config\fastfetch\
├── ascii.txt
└── config.jsonc
```

### What's in the config

Open `fastfetch/config.jsonc` and you'll see:

```jsonc
{
  "logo": {
    "type": "file",
    "source": "~/.config/fastfetch/ascii.txt",
    "color": {
      "1": "#F5E0DC",
      "2": "#F2CDCD",
      // ... more Catppuccin colors
    },
    "padding": { "top": 1, "right": 5 }
  },
  "display": {
    "separator": " │ ",
    "key": { "width": 14 },
    "brightColor": true
  }
}
```

The `source` line tells fastfetch where your ASCII art lives. The colors are from the **Catppuccin Mocha** palette — soft, easy on the eyes.

If you want to use your own ASCII art, just replace `ascii.txt` with your own text file. Keep it under 7 lines for best results.

---

## Step 4: Set Up the PowerShell Profile

This is the main event. Your profile runs every time you open a terminal.

### Where is your profile?

Run this in PowerShell:

```powershell
$PROFILE
```

It'll show you a path like:

```
C:\Users\YourName\Documents\PowerShell\Microsoft.PowerShell_profile.ps1
```

### Create the profile (if it doesn't exist)

```powershell
if (!(Test-Path -Path $PROFILE)) {
    New-Item -ItemType File -Path $PROFILE -Force
}
```

### Choose your prompt style

Pick **one** of the standalone files from the `standalone/` folder:

| File | Style | What It Shows |
|------|-------|---------------|
| `1-modern.ps1` | Modern Dev | Username, smart path, git, Node/Python/Java/Rust, execution time |
| `2-hacker.ps1` | Hacker | Compact `┌──[user@host]` with git ahead/behind |
| `3-powerlevel.ps1` | PowerLevel | Rounded blocks, git indicators |
| `4-dashboard.ps1` | Dashboard | Live CPU/RAM/Battery stats |
| `5-vscode.ps1` | VS Code | Tree-style like VS Code Explorer |
| `6-catppuccin.ps1` | Catppuccin | Soft pastel colors with execution time |
| `7-cyberpunk.ps1` | Cyberpunk | Magenta/cyan with block art header |
| `8-apple.ps1` | Apple | Minimal "username at path" |
| `9-matrix.ps1` | Matrix | Green "SYSTEM ONLINE" terminal aesthetic |
| `default.ps1` | Default | Basic box-drawing with Node/Python |

### Apply it

Open your profile in Notepad:

```powershell
notepad $PROFILE
```

**Delete everything** in that file, then paste the entire contents of your chosen `.ps1` file. Save and close.

For example, if you picked the Modern Dev style, open `standalone/1-modern.ps1`, select all, copy, paste into Notepad, save.

### Restart your terminal

Close and reopen Windows Terminal. You should see fastfetch output (if installed) followed by your new prompt.

---

## Step 5: Customize Your Prompt

### Change your username/hostname display

In most standalone files, the prompt reads from environment variables automatically:

```powershell
Write-Host $env:USERNAME -NoNewline -ForegroundColor $C_USER
Write-Host "@" -NoNewline -ForegroundColor $C_MUTED
Write-Host $env:COMPUTERNAME -ForegroundColor $C_HOST
```

This pulls from your Windows username and computer name — no need to edit anything.

If you want to hardcode a different name, replace `$env:USERNAME` with your preferred string:

```powershell
Write-Host "Harsh" -NoNewline -ForegroundColor $C_USER
```

### Change colors

Every standalone file defines its color palette at the top. Here's what the variables mean:

```powershell
$C_TEXT      = [ConsoleColor]::White      # Regular text
$C_DIR       = [ConsoleColor]::Blue       # Folder icons
$C_GIT       = [ConsoleColor]::Magenta    # Git branch icon
$C_SUCCESS   = [ConsoleColor]::Green      # Prompt character (❯)
$C_MUTED     = [ConsoleColor]::DarkGray   # Lines, separators
$C_USER      = [ConsoleColor]::Cyan       # Username
$C_HOST      = [ConsoleColor]::DarkCyan   # Computer name
$C_BRANCH    = [ConsoleColor]::Yellow     # Git branch name
$C_DIRTY     = [ConsoleColor]::Red        # Dirty indicator (*)
$C_CHECK     = [ConsoleColor]::Green      # Clean indicator (✓)
```

Available colors: `White`, `Black`, `DarkGray`, `Gray`, `Red`, `DarkRed`, `Green`, `DarkGreen`, `Blue`, `DarkBlue`, `Cyan`, `DarkCyan`, `Magenta`, `DarkMagenta`, `Yellow`, `DarkYellow`.

### Change the path colors

The path segments cycle through an array of colors:

```powershell
$C_PATH_CYCLE = @(
    [ConsoleColor]::Blue,
    [ConsoleColor]::Cyan,
    [ConsoleColor]::Magenta,
    [ConsoleColor]::Yellow
)
```

Each folder level gets the next color in the cycle. Add, remove, or reorder colors to taste.

---

## Step 6: Set Up in VS Code (Optional)

If you use VS Code, you can make its integrated terminal also run fastfetch with your config.

### Copy VS Code settings

Take `vs-code.json` from this repo and merge it into your VS Code `settings.json`:

```json
{
  "terminal.integrated.profiles.windows": {
    "PowerShell": {
      "source": "PowerShell",
      "args": [
        "-NoExit",
        "-Command",
        "fastfetch -c 'C:/Users/YourName/.config/fastfetch/config.jsonc'"
      ]
    }
  }
}
```

**Important**: Change `C:/Users/YourName/` to your actual user path. You can get it by running:

```powershell
$HOME
```

---

## Step 7: The "cls" Shortcut

When you type `cls` or `clear` in the terminal, it clears the screen **and** redraws fastfetch automatically.

This is built into `PROFILE_PLACEHOLDER.psd1` (the file you pasted into `$PROFILE`). The key lines are:

```powershell
function c {
    Clear-Host
    Show-Fastfetch
}

Set-Alias cls c
Set-Alias clear c
```

If your chosen standalone file doesn't include this, you can add these lines to the bottom of your `$PROFILE`.

---

## What Each Prompt Style Looks Like

### 1-modern.ps1 (The All-Rounder)

```
╭─󰣇 Harsh@DESKTOP
│
├─󰉋 ~\Projects\SchoolFlow
├─ main ✓
├─󰎙 v24.2.0
├─󰌠 3.13
├─󰍛 12ms
│
╰─❯ 
```

Shows everything: who you are, where you are, what branch, what language versions, how long the last command took.

### 2-hacker.ps1 (The Compact One)

```
┌──[harsh@desktop]
├──[~/SchoolFlow]
└──[git: main ✓]

❯ 
```

Tight, efficient, no wasted space. Shows git ahead/behind if you're out of sync.

### 3-powerlevel.ps1 (The Rounded One)

```
 󰣇  Harsh
 󰉋  SchoolFlow
   main ✓
❯ 
```

PowerLevel10K vibes with colored blocks.

### 4-dashboard.ps1 (The System Monitor)

```
───────────────────────────────────

󰣇 Harsh
󰉋 SchoolFlow
 main ✓

CPU 12%   RAM 8.2 GB   󰍹 82%

───────────────────────────────────

❯ 
```

Live system stats between divider lines. Only works on Windows (uses `Get-CimInstance`).

### 5-vscode.ps1 (The Explorer)

```
Harsh
│
├──󰉋 SchoolFlow
├── main ✓
└──❯ 
```

Looks like VS Code's file explorer. Clean and familiar.

### 6-catppuccin.ps1 (The Pastel One)

```
╭─󰣇 Harsh
│
├─󰉋 SchoolFlow
├─ main
├─󰍛 5ms
│
╰─❯ 
```

Soft colors, execution time, same layout as the modern one but with the Catppuccin palette.

### 7-cyberpunk.ps1 (The Loud One)

```
◢██ USER ██◣

󰣇 harsh
󰉋 SchoolFlow
 main

>>> 
```

Magenta and cyan with a block art header. For people who want their terminal to make a statement.

### 8-apple.ps1 (The Minimal One)

```
Harsh at SchoolFlow

main ✓

❯ 
```

One line, one separator. Apple Terminal vibes.

### 9-matrix.ps1 (The Green One)

```
SYSTEM ONLINE

USER........harsh
PROJECT.....SchoolFlow
BRANCH......main

> 
```

Everything in green. Labels with dots. Feels like a movie terminal.

### default.ps1 (The Basic One)

```
╭─󰣇 Harsh@DESKTOP
│
├─󰉋 D:\Projects\SchoolFlow
├─ main ✓
├─󱐋 Node v24.2.0
│
╰─❯ 
```

Box drawing with language detection. No smart path, no execution time — just the essentials.

---

## Troubleshooting

### Icons show as boxes or weird characters

Install the Nerd Font. See Step 1.

### Fastfetch doesn't show on startup

Check if it's installed:

```powershell
fastfetch --version
```

If not found, reinstall with `winget install fastfetch`.

### Prompt looks broken after editing

Open `$PROFILE` in Notepad and check for typos. PowerShell is picky about syntax. If you're stuck, paste a fresh copy of your chosen standalone file.

### "cls" doesn't redraw fastfetch

Make sure your profile includes the alias lines:

```powershell
Set-Alias cls c
Set-Alias clear c
```

### Path colors look wrong

The `$C_PATH_CYCLE` array might be empty or have invalid color names. Make sure each entry is a valid `[ConsoleColor]` value.

---

## File Reference

Here's what everything in this repo does:

```
terminal-customization/
├── README.md                    # Original docs
├── setup.md                     # This file
├── PROMPTS-IDEAS.md             # Design philosophy + prompt mockups
├── DEFAULT_PROFILE_FILE.psd1    # Annotated skeleton (shows structure)
├── PROFILE_PLACEHOLDER.psd1     # Complete working profile (startup + Catppuccin prompt)
├── vs-code.json                 # VS Code terminal profile config
├── youtube summary.md           # Tutorial video notes
├── fastfetch/
│   ├── ascii.txt                # DOTHP ASCII logo
│   ├── config.jsonc             # Fastfetch config (colors + display)
│   └── DEFAULT_CONFIG.jsonc     # Empty skeleton config
├── standalone/
│   ├── default.ps1              # Basic box-drawing prompt
│   ├── 1-modern.ps1             # Full-featured modern dev prompt
│   ├── 2-hacker.ps1             # Compact hacker style
│   ├── 3-powerlevel.ps1         # PowerLevel10K-inspired
│   ├── 4-dashboard.ps1          # Live system stats
│   ├── 5-vscode.ps1             # VS Code Explorer style
│   ├── 6-catppuccin.ps1         # Catppuccin Mocha themed
│   ├── 7-cyberpunk.ps1          # Cyberpunk neon style
│   ├── 8-apple.ps1              # Apple Terminal minimal
│   └── 9-matrix.ps1             # Matrix green terminal
└── mimo-prompts/                # (empty, for future use)
```

---

## Quick Start (TL;DR)

```powershell
# 1. Install font from nerdfonts.com
# 2. Install fastfetch
winget install fastfetch

# 3. Create config folder
mkdir "$HOME\.config\fastfetch"

# 4. Copy fastfetch/ascii.txt and fastfetch/config.jsonc into that folder

# 5. Create profile
if (!(Test-Path -Path $PROFILE)) { New-Item -ItemType File -Path $PROFILE -Force }

# 6. Open profile, paste contents of your chosen standalone/*.ps1
notepad $PROFILE

# 7. Restart terminal
```

You're done. Your terminal now looks like something you'd actually want to use.
