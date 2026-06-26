#Requires -Version 7.0
# Cyberpunk Prompt — copy this entire file into your $PROFILE

# Colors
$C_TEXT      = [ConsoleColor]::White
$C_DIR       = [ConsoleColor]::Blue
$C_GIT       = [ConsoleColor]::Magenta
$C_SUCCESS   = [ConsoleColor]::Green
$C_MUTED     = [ConsoleColor]::DarkGray
$C_USER      = [ConsoleColor]::Magenta
$C_HOST      = [ConsoleColor]::DarkMagenta
$C_BRANCH    = [ConsoleColor]::Cyan
$C_DIRTY     = [ConsoleColor]::Yellow
$C_CHECK     = [ConsoleColor]::Green
$C_PATH_CYCLE = @([ConsoleColor]::Magenta, [ConsoleColor]::Cyan, [ConsoleColor]::Yellow, [ConsoleColor]::Green)

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

# Prompt
function prompt {
    $path = Get-SmartPath
    $branch = Get-GitBranch
    $gitStatus = Get-GitStatus

    Write-Host "◢" -NoNewline -ForegroundColor $C_GIT
    Write-Host "██ " -NoNewline -ForegroundColor $C_GIT
    Write-Host "USER" -NoNewline -ForegroundColor $C_DIR
    Write-Host " ██◣" -ForegroundColor $C_GIT

    Write-Host "󰣇 " -NoNewline -ForegroundColor $C_DIR
    Write-Host $env:USERNAME -ForegroundColor $C_USER

    Write-Host "󰉋 " -NoNewline -ForegroundColor $C_DIR
    Write-ColoredPath $path
    Write-Host "" -NoNewline

    if ($branch) {
        Write-Host " " -NoNewline -ForegroundColor $C_GIT
        Write-Host $branch -NoNewline -ForegroundColor $C_BRANCH
        Write-Host $gitStatus -ForegroundColor $C_TEXT
    }

    Write-Host ""
    Write-Host ">>> " -NoNewline -ForegroundColor $C_GIT
    return " "
}
