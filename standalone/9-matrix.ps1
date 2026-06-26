#Requires -Version 7.0
# Matrix Prompt — copy this entire file into your $PROFILE

# Colors
$C_SUCCESS   = [ConsoleColor]::Green
$C_MUTED     = [ConsoleColor]::DarkGray
$C_USER      = [ConsoleColor]::Green
$C_HOST      = [ConsoleColor]::DarkGreen
$C_BRANCH    = [ConsoleColor]::Green
$C_DIRTY     = [ConsoleColor]::Yellow
$C_CHECK     = [ConsoleColor]::Green
$C_PATH_CYCLE = @([ConsoleColor]::Green, [ConsoleColor]::DarkGreen, [ConsoleColor]::Cyan, [ConsoleColor]::DarkCyan)

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

    Write-Host "SYSTEM ONLINE" -ForegroundColor $C_SUCCESS

    Write-Host "USER........" -NoNewline -ForegroundColor $C_MUTED
    Write-Host $env:USERNAME -ForegroundColor $C_USER

    Write-Host "PROJECT....." -NoNewline -ForegroundColor $C_MUTED
    Write-ColoredPath $path
    Write-Host "" -NoNewline

    if ($branch) {
        Write-Host "BRANCH......" -NoNewline -ForegroundColor $C_MUTED
        Write-Host $branch -ForegroundColor $C_BRANCH
    }

    Write-Host ""
    Write-Host "> " -NoNewline -ForegroundColor $C_SUCCESS
    return " "
}
