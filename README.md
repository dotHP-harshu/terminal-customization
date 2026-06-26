# 🚀 Ultimate Windows Terminal Customization

This project provides a complete configuration to transform your Windows Terminal and VS Code into an aesthetic, high-performance developer environment, featuring the "DOTHP" branding.

---

## 📋 Prerequisites

Before starting, ensure you have the **JetBrains Mono Nerd Font** installed. This is required for icons and ASCII art to render correctly.

1.  **Download**: [Nerd Fonts Official Site](https://www.nerdfonts.com/font-downloads) (Search for "JetBrainsMono").
2.  **Install**: Unzip and install the `.ttf` files to your system.

---

## 🛠 Installation Steps

### 1. Install Fastfetch
Fastfetch is used to display system info and the custom logo.
```powershell
winget install fastfetch
```

### 2. Configure Terminal UI
Apply the **Catppuccin Mocha** theme and transparency:
1.  Open Terminal Settings (`Ctrl + ,`).
2.  Click **Open JSON file** at the bottom left.
3.  Ensure your settings include:
    *   **Opacity**: 80% with Acrylic blur.
    *   **Font**: `JetBrainsMono Nerd Font`.
    *   **Theme**: Catppuccin Mocha.

### 3. Create Configuration Files
1.  **Directory**: `mkdir "$HOME\.config\fastfetch"`
2.  **Logo**: Create `ascii.txt` in that folder with your custom art.
3.  **Config**: Create `config.jsonc` in that folder.
    *   *Note*: Update the `source` path in `config.jsonc` to point to your `ascii.txt`.

### 4. Automate Startup
Add the logic to your PowerShell profile:
1.  Run `notepad $profile` in your terminal.
2.  Paste the contents of `Microsoft.PowerToys.Configure.psd1` (or the logic provided in this repo).

---

## 🎨 Customization Options

You can easily personalize your terminal by modifying the variables in the configuration files.

### Prompt Customization
Open `Microsoft.PowerToys.Configure.psd1` and locate the `prompt` function:

*   **Change User/Host**:
    ```powershell
    $user = "yourname"
    $hostName = "yourmachine"
    ```
*   **Change Colors**: Modify `$userColor`, `$pathColor`, and `$gitColor`. 
    *   *Supported Colors*: `Green`, `Blue`, `Yellow`, `Cyan`, `Magenta`, `Red`, `White`, etc.

### Fastfetch Customization
*   **ASCII Logo**: Edit `fastfetch/ascii.txt` to change the startup logo.
*   **Modules**: Edit `fastfetch/config.jsonc` to add or remove system information modules (CPU, GPU, Memory, etc.).

---

## 📂 File Structure

*   `Microsoft.PowerToys.Configure.psd1`: The PowerShell profile script.
*   `fastfetch/ascii.txt`: Custom ASCII art logo.
*   `fastfetch/config.jsonc`: Fastfetch layout configuration.
*   `vs-code.json`: Recommended VS Code terminal settings.

---

## ✅ Summary of Locations
*   **Startup Script**: Run `$profile` in terminal to see the path.
*   **Fastfetch Config**: `%USERPROFILE%\.config\fastfetch\`

**Your terminal is now uniquely yours! 🌟**
