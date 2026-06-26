#Requires -Version 7.0
# PowerLevel10K Inspired Prompt — copy this entire file into your $PROFILE

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
$C_AHEAD     = [ConsoleColor]::Cyan
$C_BEHIND    = [ConsoleColor]::DarkRed
$C_CHECK     = [ConsoleColor]::Green
$C_PATH_CYCLE = @([ConsoleColor]::Blue, [ConsoleColor]::Cyan, [ConsoleColor]::Magenta, [ConsoleColor]::Yellow)

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
        if (-not (Test-Path ".git")) { return $null }
        $dirty = $false
        $ahead = 0
        $behind = 0

        $porcelain = git status --porcelain 2>$null
        if ($LASTEXITCODE -eq 0 -and $porcelain) { $dirty = $true }

        $upstream = git rev-list --count '@{upstream}..HEAD' 2>$null
        if ($LASTEXITCODE -eq 0 -and $upstream) { $ahead = [int]$upstream }

        $upstreamBehind = git rev-list --count 'HEAD..@{upstream}' 2>$null
        if ($LASTEXITCODE -eq 0 -and $upstreamBehind) { $behind = [int]$upstreamBehind }

        return @{
            Dirty  = $dirty
            Ahead  = $ahead
            Behind = $behind
        }
    } catch {}
    return $null
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

function Get-GitIndicator {
    param([hashtable]$Status)
    if (-not $Status) { return " ✓" }
    $indicator = ""
    if ($Status.Dirty) { $indicator = " *" }
    if ($Status.Ahead -gt 0) { $indicator += " ↑$($Status.Ahead)" }
    if ($Status.Behind -gt 0) { $indicator += " ↓$($Status.Behind)" }
    if (-not $indicator) { $indicator = " ✓" }
    return $indicator
}

# Prompt
function prompt {
    $path = Get-SmartPath
    $branch = Get-GitBranch
    $gitStatus = Get-GitStatus

    Write-Host "" -NoNewline -ForegroundColor $C_DIR
    Write-Host " 󰣇 " -NoNewline -ForegroundColor $C_TEXT
    Write-Host "" -NoNewline -ForegroundColor $C_DIR
    Write-Host " " -NoNewline -ForegroundColor $C_TEXT
    Write-Host $env:USERNAME -ForegroundColor $C_USER

    Write-Host "" -NoNewline -ForegroundColor $C_DIR
    Write-Host " 󰉋 " -NoNewline -ForegroundColor $C_TEXT
    Write-Host "" -NoNewline -ForegroundColor $C_DIR
    Write-Host " " -NoNewline -ForegroundColor $C_TEXT
    Write-ColoredPath $path
    Write-Host "" -ForegroundColor $C_TEXT

    if ($branch) {
        $indicator = Get-GitIndicator $gitStatus

        Write-Host "" -NoNewline -ForegroundColor $C_GIT
        Write-Host "  " -NoNewline -ForegroundColor $C_TEXT
        Write-Host "" -NoNewline -ForegroundColor $C_GIT
        Write-Host " " -NoNewline -ForegroundColor $C_TEXT
        Write-Host $branch -NoNewline -ForegroundColor $C_BRANCH
        Write-Host $indicator -ForegroundColor $C_TEXT
    }

    Write-Host "❯ " -NoNewline -ForegroundColor $C_SUCCESS
    return " "
}
