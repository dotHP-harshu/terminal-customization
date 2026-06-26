#Requires -Version 7.0

################################################################################
# PowerShell Profile
# Author : Harsh Prajapati
# Version: 1.0
#
# Sections
#   1. Startup (Fastfetch / ASCII Art)
#   2. Prompt Configuration
################################################################################


################################################################################
# SECTION 1 - STARTUP (FASTFETCH / ASCII ART)
################################################################################

# Clear terminal on startup
Clear-Host

# Display Fastfetch using custom configuration
function Show-Fastfetch {
    if (Get-Command fastfetch -ErrorAction SilentlyContinue) {
        fastfetch -c "$HOME\.config\fastfetch\config.jsonc"
    }
}

# Show Fastfetch when PowerShell starts
Show-Fastfetch

# Re-render Fastfetch after clearing terminal
function c {
    Clear-Host
    Show-Fastfetch
}

# Aliases
Set-Alias cls c
Set-Alias clear c


################################################################################
# SECTION 2 - CUSTOM PROMPT
################################################################################

#Requires -Version 7.0
# Catppuccin Prompt — copy this entire file into your $PROFILE

# Colors
$C_TEXT      = [ConsoleColor]::White
$C_DIR       = [ConsoleColor]::Blue
$C_GIT       = [ConsoleColor]::Magenta
$C_SUCCESS   = [ConsoleColor]::Green
$C_MUTED     = [ConsoleColor]::DarkGray
$C_USER      = [ConsoleColor]::Cyan
$C_HOST      = [ConsoleColor]::DarkCyan
$C_BRANCH    = [ConsoleColor]::Yellow
$C_DIRTY     = [ConsoleColor]::Red
$C_CHECK     = [ConsoleColor]::Green
$C_PATH_CYCLE = @([ConsoleColor]::Cyan, [ConsoleColor]::Magenta, [ConsoleColor]::Yellow, [ConsoleColor]::Green)

# Helpers
function Get-SmartPath {
    $path = (Get-Location).ProviderPath
    $userHome = $HOME
    if ($path.StartsWith($userHome)) { $path = $path.Replace($userHome, "~") }
    if ($path.Length -gt 40) { $leaf = Split-Path $path -Leaf; return "...\$leaf" }
    return $path
}

function Get-GitBranch {
    try {
        if (-not (Test-Path ".git")) { return $null }
        $b = git branch --show-current 2>$null
        if ($LASTEXITCODE -eq 0 -and $b) { return $b.Trim() }
    } catch {}
    return $null
}

function Get-GitStatus {
    try {
        if (-not (Test-Path ".git")) { return "" }
        $dirty = git status --porcelain 2>$null
        if ($LASTEXITCODE -eq 0 -and $dirty) { return " *" }
        return " ✓"
    } catch {}
    return ""
}

function Write-ColoredPath {
    param([string]$Path)
    $segments = $Path -split '[\\/]'
    $idx = 0
    $nonEmpty = $segments | Where-Object { $_ -ne '' }
    $count = $nonEmpty.Count
    foreach ($seg in $segments) {
        if ($seg -eq '') { continue }
        $color = $C_PATH_CYCLE[$idx % $C_PATH_CYCLE.Count]
        Write-Host $seg -NoNewline -ForegroundColor $color
        if ($idx -lt $count - 1) {
            Write-Host "\" -NoNewline -ForegroundColor $C_MUTED
        }
        $idx++
    }
}

function Get-ExecutionTime {
    try {
        if ($global:LAST_EXECUTION_DURATION -and $global:LAST_EXECUTION_DURATION -gt 0) {
            return $global:LAST_EXECUTION_DURATION
        }
    } catch {}
    return $null
}

# Prompt
function prompt {
    $path = Get-SmartPath
    $branch = Get-GitBranch
    $gitStatus = Get-GitStatus

    Write-Host "╭─" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "󰣇 " -NoNewline -ForegroundColor $C_DIR
    Write-Host $env:USERNAME -ForegroundColor $C_USER

    Write-Host "│" -ForegroundColor $C_MUTED

    Write-Host "├─" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "󰉋 " -NoNewline -ForegroundColor $C_DIR
    Write-ColoredPath $path
    Write-Host "" -NoNewline

    if ($branch) {
        Write-Host "├─" -NoNewline -ForegroundColor $C_MUTED
        Write-Host " " -NoNewline -ForegroundColor $C_GIT
        Write-Host $branch -NoNewline -ForegroundColor $C_BRANCH
        Write-Host $gitStatus -ForegroundColor $C_TEXT
    }

    $execTime = Get-ExecutionTime
    if ($null -ne $execTime) {
        $ms = [math]::Round($execTime * 1000)
        Write-Host "├─" -NoNewline -ForegroundColor $C_MUTED
        Write-Host "󰍛 ${ms}ms" -ForegroundColor $C_MUTED
    }

    Write-Host "│" -ForegroundColor $C_MUTED
    Write-Host "╰─" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "❯ " -NoNewline -ForegroundColor $C_SUCCESS
    return " "
}


################################################################################
# END OF PROFILE
################################################################################