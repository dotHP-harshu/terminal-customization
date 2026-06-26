#Requires -Version 7.0
# Modern Dev Prompt — copy this entire file into your $PROFILE

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
        if (-not (Test-Path ".git")) { return "" }
        $dirty = git status --porcelain 2>$null
        if ($LASTEXITCODE -eq 0 -and $dirty) { return " *" }
        return " ✓"
    } catch {}
    return ""
}

function Get-NodeVersion {
    try {
        if (-not (Test-Path "package.json")) { return $null }
        $v = node --version 2>$null
        if ($LASTEXITCODE -eq 0 -and $v) { return $v.Trim() }
    } catch {}
    return $null
}

function Get-PythonVersion {
    try {
        $hasEnv = $null -ne $env:VIRTUAL_ENV
        $hasVenv = (Test-Path ".venv") -or (Test-Path "venv")
        if (-not $hasEnv -and -not $hasVenv) { return $null }
        $v = python --version 2>$null
        if ($LASTEXITCODE -eq 0 -and $v) { return ($v -replace "^Python\s+", "") }
    } catch {}
    return $null
}

function Get-JavaVersion {
    try {
        $hasMvn = Test-Path "pom.xml"
        $hasGradle = Test-Path "build.gradle" -or Test-Path "build.gradle.kts"
        if (-not $hasMvn -and -not $hasGradle) { return $null }
        $v = java -version 2>&1 | Select-Object -First 1
        if ($v -match '"([^"]+)"') { return $Matches[1] }
    } catch {}
    return $null
}

function Get-RustVersion {
    try {
        if (-not (Test-Path "Cargo.toml")) { return $null }
        $v = rustc --version 2>$null
        if ($LASTEXITCODE -eq 0 -and $v) {
            if ($v -match "rustc\s+(\S+)") { return $Matches[1] }
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
    Write-Host "$env:USERNAME" -NoNewline -ForegroundColor $C_USER
    Write-Host "@" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "$env:COMPUTERNAME" -ForegroundColor $C_HOST

    Write-Host "│" -ForegroundColor $C_MUTED

    Write-Host "├─" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "󰉋 " -NoNewline -ForegroundColor $C_DIR
    Write-ColoredPath $path
    Write-Host "" -NoNewline

    if ($branch) {
        Write-Host "├─" -NoNewline -ForegroundColor $C_MUTED
        Write-Host " " -NoNewline -ForegroundColor $C_GIT
        Write-Host $branch -NoNewline -ForegroundColor $C_BRANCH
        Write-Host "$gitStatus" -ForegroundColor $C_TEXT
    }

    $nv = Get-NodeVersion; if ($nv) {
        Write-Host "├─" -NoNewline -ForegroundColor $C_MUTED
        Write-Host "󰎙 $nv" -ForegroundColor $C_MUTED
    }
    $pv = Get-PythonVersion; if ($pv) {
        Write-Host "├─" -NoNewline -ForegroundColor $C_MUTED
        Write-Host "󰌠 $pv" -ForegroundColor $C_MUTED
    }
    $jv = Get-JavaVersion; if ($jv) {
        Write-Host "├─" -NoNewline -ForegroundColor $C_MUTED
        Write-Host "󰬷 $jv" -ForegroundColor $C_MUTED
    }
    $rv = Get-RustVersion; if ($rv) {
        Write-Host "├─" -NoNewline -ForegroundColor $C_MUTED
        Write-Host "󱘗 $rv" -ForegroundColor $C_MUTED
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
