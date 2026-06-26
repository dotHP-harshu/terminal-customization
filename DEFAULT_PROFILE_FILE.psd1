# =====================================================================
# PowerShell Profile
# File: $PROFILE
#
# Purpose:
#   Customize the PowerShell terminal by configuring startup behavior,
#   prompt appearance, helper functions, aliases, and developer tools.
#
# This profile currently provides:
#   ✔ Fastfetch on startup
#   ✔ Fastfetch after "cls" or "clear"
#   ✔ Custom multi-line prompt
#   ✔ Git branch & status
#   ✔ Language version detection
#   ✔ Colored path rendering
#   ✔ Execution time display
#
# =====================================================================

# Requires PowerShell 7+
# Prevents the profile from running on unsupported versions.
# ---------------------------------------------------------------------
#Requires -Version 7.0


# =====================================================================
# SECTION 1 — TERMINAL STARTUP
# =====================================================================

# Clears the terminal when PowerShell starts.
Clear-Host

# Displays Fastfetch using the specified configuration.
# This is also reused whenever the screen is cleared.
function Show-Fastfetch {

    # Only execute if Fastfetch is installed.
    if (Get-Command fastfetch -ErrorAction SilentlyContinue) {

        fastfetch -c "$HOME\.config\fastfetch\config.jsonc"

    }
}

# Show Fastfetch once during terminal startup.
Show-Fastfetch



# =====================================================================
# SECTION 2 — COLORS
# =====================================================================
#
# All colors used throughout the prompt.
# Keeping them together makes theme customization easy.
#

$C_TEXT      = [ConsoleColor]::White
$C_DIR       = [ConsoleColor]::Blue
$C_GIT       = [ConsoleColor]::Magenta
$C_SUCCESS   = [ConsoleColor]::Green
$C_MUTED     = [ConsoleColor]::DarkGray

$C_USER      = [ConsoleColor]::Cyan
$C_HOST      = [ConsoleColor]::DarkCyan

$C_BRANCH    = [ConsoleColor]::Yellow
$C_DIRTY     = [ConsoleColor]::Red

$C_AHEAD     = [ConsoleColor]::Cyan
$C_BEHIND    = [ConsoleColor]::DarkRed

$C_CHECK     = [ConsoleColor]::Green

# Path colors rotate through these values.
$C_PATH_CYCLE = @(
    [ConsoleColor]::Blue,
    [ConsoleColor]::Cyan,
    [ConsoleColor]::Magenta,
    [ConsoleColor]::Yellow
)



# =====================================================================
# SECTION 3 — HELPER FUNCTIONS
# =====================================================================
#
# Helper functions return information used by the prompt.
# They do not print anything directly.
#

# Get-SmartPath
# Returns a shortened version of the current path.
#
# Example:
#
# C:\Users\Harsh\Projects\App
#
# becomes
#
# ~\Projects\App
#
# or
#
# ...\App
#
function Get-SmartPath {
    ...
}

# Get current Git branch.
function Get-GitBranch {
    ...
}

# Return:
#
# ✓  = clean repository
# *  = uncommitted changes
#
function Get-GitStatus {
    ...
}

# Detect Node.js version inside a Node project.
function Get-NodeVersion {
    ...
}

# Detect Python version when using a virtual environment.
function Get-PythonVersion {
    ...
}

# Detect Java version in Maven/Gradle projects.
function Get-JavaVersion {
    ...
}

# Detect Rust version in Cargo projects.
function Get-RustVersion {
    ...
}

# Draw the current directory with alternating colors.
function Write-ColoredPath {
    ...
}

# Returns execution time of previous command.
function Get-ExecutionTime {
    ...
}



# =====================================================================
# SECTION 4 — CUSTOM PROMPT
# =====================================================================
#
# The prompt function executes every time PowerShell waits
# for user input.
#
# It prints:
#
# User + Computer
# Current directory
# Git information
# Language versions
# Execution time
#
# Finally it returns a blank string because all output
# has already been written using Write-Host.
#

function prompt {

    ...

    return " "

}



# =====================================================================
# SECTION 5 — CUSTOM COMMANDS
# =====================================================================

# c
#
# Clears the terminal
# then redraws Fastfetch.
#
# Used instead of overriding Clear-Host.
#
function c {

    Clear-Host
    Show-Fastfetch

}



# =====================================================================
# SECTION 6 — ALIASES
# =====================================================================
#
# Make cls and clear behave like the custom command.
#

Set-Alias cls c
Set-Alias clear c



# =====================================================================
# END OF PROFILE
# =====================================================================