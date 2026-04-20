This is the complete, comprehensive guide to transforming your terminal as shown in the video, including the "DOTHP" customization and VS Code integration.

---

# 🚀 Ultimate Windows Terminal Customization Guide

This guide covers the full setup to transform your Windows Terminal and VS Code into an aesthetic, high-performance developer environment.

## 📋 Prerequisites
Before you start, you need to install the **JetBrains Mono Nerd Font**. This is required to see the icons and the ASCII art correctly.
1. Download from: [Nerd Fonts Official Site](https://www.nerdfonts.com/font-downloads) (Search for "JetBrainsMono").
2. Unzip and **Install** the `.ttf` files to your Windows system.

---

## 🛠 Step 1: Install Fastfetch
Fastfetch is the tool that displays the system information and your custom "DOTHP" logo.
1. Open your terminal and run:
   ```powershell
   winget install fastfetch
   ```

---

## 🛠 Step 2: Configure Terminal UI & Colors
We will now apply the **Catppuccin Mocha** theme and transparency.
1. Open Windows Terminal settings: `Ctrl + ,`
2. Click **Open JSON file** at the bottom left.
3. Replace the contents with the provided `settings.json` code (or merge the `schemes` and `defaults` sections).
4. **Key Settings Applied:**
   * **Opacity:** 80% with Acrylic blur.
   * **Font:** JetBrainsMono Nerd Font.
   * **Theme:** Catppuccin Mocha.

---

## 🛠 Step 3: Create the Config Files
You need a place to store your "DOTHP" logo and the Fastfetch layout.
1. Create the directory:
   ```powershell
   mkdir "$HOME\.config\fastfetch"
   ```
2. **The Logo:** Create a file named `ascii.txt` in that folder and paste:
   ```text
   ██████╗   ██████╗  ████████╗ ██╗  ██╗ ██████╗ 
   ██╔══██╗ ██╔═══██╗ ╚══██╔══╝ ██║  ██║ ██╔══██╗
   ██║  ██║ ██║   ██║    ██║    ███████║ ██████╔╝
   ██║  ██║ ██║   ██║    ██║    ██╔══██║ ██╔═══╝ 
   ██████╔╝ ╚██████╔╝    ██║    ██║  ██║ ██║     
   ╚═════╝   ╚═════╝     ╚═╝    ╚═╝  ╚═╝ ╚═╝     
   ```
3. **The Config:** Create a file named `config.jsonc` in that same folder and paste your modules code. 
   * **IMPORTANT:** Update the `source` path inside `config.jsonc` to:
     `"source": "C:/Users/YOUR_USERNAME/.config/fastfetch/ascii.txt"`

---

## 🛠 Step 4: Automate the Startup (PowerShell Profile)
To make the "DOTHP" logo appear automatically every time you open a terminal:
1. In your terminal, type:
   ```powershell
   notepad $profile
   ```
2. If Notepad asks to create a new file, click **Yes**.
3. Paste this logic into the file and save:
   ```powershell
   [Console]::OutputEncoding = [System.Text.Encoding]::UTF8
   Clear-Host
   if (Get-Command fastfetch -ErrorAction SilentlyContinue) {
       fastfetch -c "$HOME\.config\fastfetch\config.jsonc"
   }
   ```

---

## 🛠 Step 5: VS Code Terminal Integration
To make your VS Code terminal match your new aesthetic:
1. Open VS Code and press `Ctrl + ,` (Settings).
2. Search for **Terminal Font Family** and set it to:
   `'JetBrainsMono Nerd Font Mono'`
3. Search for **Terminal Integrated Default Profile Windows** and ensure it is set to **PowerShell**.
4. Restart the VS Code terminal (`Ctrl + ` `).

---

## ✅ Summary of File Locations
* **Terminal Settings:** `Settings > Open JSON file`
* **Startup Script:** `$profile` (Run this in terminal to find the path)
* **Custom Logo:** `C:\Users\YOUR_NAME\.config\fastfetch\ascii.txt`
* **Fastfetch Layout:** `C:\Users\YOUR_NAME\.config\fastfetch\config.jsonc`

**Your terminal is now fixed. It’s glowing, organized, and uniquely yours!**
```