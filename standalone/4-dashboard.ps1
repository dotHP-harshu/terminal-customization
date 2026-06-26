#Requires -Version 7.0
# Dashboard Prompt — copy this entire file into your $PROFILE

# Colors
$C_TEXT      = [ConsoleColor]::White
$C_DIR       = [ConsoleColor]::Blue
$C_GIT       = [ConsoleColor]::Magenta
$C_SUCCESS   = [ConsoleColor]::Green
$C_MUTED     = [ConsoleColor]::DarkGray
$C_INFO      = [ConsoleColor]::Cyan
$C_USER      = [ConsoleColor]::Cyan
$C_HOST      = [ConsoleColor]::DarkCyan
$C_BRANCH    = [ConsoleColor]::Yellow
$C_DIRTY     = [ConsoleColor]::Red
$C_CHECK     = [ConsoleColor]::Green
$C_CPU       = [ConsoleColor]::Green
$C_RAM       = [ConsoleColor]::Yellow
$C_BAT       = [ConsoleColor]::Cyan
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

function Get-CpuUsage {
    try { return [math]::Round((Get-CimInstance Win32_Processor | Measure-Object -Property LoadPercentage -Average).Average) } catch {}
    return $null
}

function Get-RamUsage {
    try {
        $os = Get-CimInstance Win32_OperatingSystem
        return [math]::Round(($os.TotalVisibleMemorySize - $os.FreePhysicalMemory) / 1MB, 1)
    } catch {}
    return $null
}

function Get-Battery {
    try {
        $bat = Get-CimInstance Win32_Battery -ErrorAction SilentlyContinue
        if ($bat) { return $bat.EstimatedChargeRemaining }
    } catch {}
    return $null
}

# Prompt
function prompt {
    $path = Get-SmartPath
    $branch = Get-GitBranch
    $gitStatus = Get-GitStatus
    $cpu = Get-CpuUsage
    $ram = Get-RamUsage
    $battery = Get-Battery

    Write-Host "───────────────────────────────────" -ForegroundColor $C_MUTED

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

    $stats = @()
    if ($null -ne $cpu) { $stats += @{ Text = "CPU $cpu%"; Color = $C_CPU } }
    if ($null -ne $ram) { $stats += @{ Text = "RAM $ram GB"; Color = $C_RAM } }
    if ($battery) { $stats += @{ Text = "󰍹 $battery%"; Color = $C_BAT } }
    if ($stats.Count -gt 0) {
        foreach ($s in $stats) { Write-Host "$($s.Text)   " -NoNewline -ForegroundColor $s.Color }
        Write-Host ""
    }

    Write-Host ""
    Write-Host "───────────────────────────────────" -ForegroundColor $C_MUTED
    Write-Host ""
    Write-Host "❯ " -NoNewline -ForegroundColor $C_SUCCESS
    return " "
}
