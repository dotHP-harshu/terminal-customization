const PROMPTS = [
    {
        id: "1-modern",
        name: "Modern Dev",
        tag: "Full-featured",
        tagClass: "tag-green",
        desc: "Username, smart path, git, language versions, execution time. The everything prompt.",
        preview: `<span class="c-muted">╭─</span><span class="c-nerd"> \u{F08C7} </span><span class="c-cyan">harsh@DESKTOP</span>
<span class="c-muted">|</span>
<span class="c-muted">├─</span><span class="c-nerd"> \u{F024B} </span><span class="c-path">~\Projects\SchoolFlow</span>
<span class="c-muted">├─</span><span class="c-nerd"> \u{F02DA} </span><span class="c-yellow">main</span> <span class="c-green">v</span>
<span class="c-muted">├─</span><span class="c-nerd"> \u{F0399} v24.2.0</span>
<span class="c-muted">├─</span><span class="c-nerd"> \u{F0320} 3.13</span>
<span class="c-muted">├─</span><span class="c-nerd"> \u{F035B} 12ms</span>
<span class="c-muted">|</span>
<span class="c-muted">╰─</span><span class="c-green">\u{F054A} </span>`,
        file: "1-modern.ps1"
    },
    {
        id: "2-hacker",
        name: "Hacker",
        tag: "Compact",
        tagClass: "tag-blue",
        desc: "Tight and efficient. Git ahead/behind indicators when out of sync.",
        preview: `<span class="c-muted">╭─[</span><span class="c-cyan">harsh@desktop</span><span class="c-muted">]</span>
<span class="c-muted">├─[</span><span class="c-path">~/SchoolFlow</span><span class="c-muted">]</span>
<span class="c-muted">╰─[</span><span class="c-magenta">git:</span> <span class="c-yellow">main</span> <span class="c-green">v</span><span class="c-muted">]</span>

<span class="c-green">\u{F054A}</span> `,
        file: "2-hacker.ps1"
    },
    {
        id: "3-powerlevel",
        name: "PowerLevel",
        tag: "Rounded",
        tagClass: "tag-purple",
        desc: "PowerLevel10K vibes with colored blocks. Clean and recognizable.",
        preview: ` <span class="c-nerd"> \u{F08C7} </span> <span class="c-cyan">Harsh</span>
 <span class="c-nerd"> \u{F024B} </span> <span class="c-path">SchoolFlow</span>
   <span class="c-yellow">main</span> <span class="c-green">v</span>
<span class="c-green">\u{F054A}</span> `,
        file: "3-powerlevel.ps1"
    },
    {
        id: "4-dashboard",
        name: "Dashboard",
        tag: "System",
        tagClass: "tag-yellow",
        desc: "Live CPU, RAM, and battery stats between divider lines. Windows only.",
        preview: `<span class="c-muted">-----------------------------------</span>

<span class="c-nerd"> \u{F08C7} </span> <span class="c-cyan">Harsh</span>
<span class="c-nerd"> \u{F024B} </span> <span class="c-path">SchoolFlow</span>
 <span class="c-nerd"> \u{F02DA} </span> <span class="c-yellow">main</span> <span class="c-green">v</span>

<span class="c-muted">CPU 12%   RAM 8.2 GB   \u{F0579} 82%</span>

<span class="c-muted">-----------------------------------</span>

<span class="c-green">\u{F054A}</span> `,
        file: "4-dashboard.ps1"
    },
    {
        id: "5-vscode",
        name: "VS Code Explorer",
        tag: "Familiar",
        tagClass: "tag-green",
        desc: "Tree-style like VS Code file explorer. Clean and instantly familiar.",
        preview: `<span class="c-cyan">Harsh</span>
<span class="c-muted">|</span>
<span class="c-muted">╭─</span><span class="c-nerd"> \u{F024B} </span><span class="c-path">SchoolFlow</span>
<span class="c-muted">├─ </span><span class="c-yellow">main</span> <span class="c-green">v</span>
<span class="c-muted">╰─</span><span class="c-green">\u{F054A}</span> `,
        file: "5-vscode.ps1"
    },
    {
        id: "6-catppuccin",
        name: "Catppuccin",
        tag: "Soft",
        tagClass: "tag-pink",
        desc: "Soft Catppuccin Mocha palette with execution time tracking.",
        preview: `<span class="c-muted">╭─</span><span class="c-nerd"> \u{F08C7} </span><span class="c-cyan">Harsh</span>
<span class="c-muted">|</span>
<span class="c-muted">├─</span><span class="c-nerd"> \u{F024B} </span><span class="c-path">SchoolFlow</span>
<span class="c-muted">├─</span> <span class="c-yellow">main</span>
<span class="c-muted">├─</span><span class="c-nerd"> \u{F035B} 5ms</span>
<span class="c-muted">|</span>
<span class="c-muted">╰─</span><span class="c-green">\u{F054A} </span>`,
        file: "6-catppuccin.ps1"
    },
    {
        id: "7-cyberpunk",
        name: "Cyberpunk",
        tag: "Neon",
        tagClass: "tag-purple",
        desc: "Magenta and cyan with block art header. Makes a statement.",
        preview: `<span class="c-nerd">\u{25E2}\u{2588}\u{2588} </span><span class="c-blue">USER</span><span class="c-nerd"> \u{2588}\u{2588}\u{25E3}</span>

<span class="c-nerd"> \u{F08C7} </span> <span class="c-cyan">harsh</span>
<span class="c-nerd"> \u{F024B} </span> <span class="c-path">SchoolFlow</span>
 <span class="c-nerd"> \u{F02DA} </span> <span class="c-yellow">main</span>

<span class="c-magenta">\u{263E}\u{263E}\u{263E} </span>`,
        file: "7-cyberpunk.ps1"
    },
    {
        id: "8-apple",
        name: "Apple",
        tag: "Minimal",
        tagClass: "tag-blue",
        desc: "One line, one separator. Apple Terminal vibes. Maximum simplicity.",
        preview: `<span class="c-cyan">Harsh</span> at <span class="c-path">SchoolFlow</span>

<span class="c-yellow">main</span> <span class="c-green">v</span>

<span class="c-green">\u{F054A}</span> `,
        file: "8-apple.ps1"
    },
    {
        id: "9-matrix",
        name: "Matrix",
        tag: "Matrix",
        tagClass: "tag-green",
        desc: "Everything in green. Labels with dots. Feels like a movie terminal.",
        preview: `<span class="c-green">SYSTEM ONLINE</span>

<span class="c-green">USER</span><span class="c-muted">........</span><span class="c-green">harsh</span>
<span class="c-green">PROJECT</span><span class="c-muted">.....</span><span class="c-green">SchoolFlow</span>
<span class="c-green">BRANCH</span><span class="c-muted">......</span><span class="c-green">main</span>

<span class="c-green">\u{F054A}</span> `,
        file: "9-matrix.ps1"
    },
    {
        id: "default",
        name: "Basic",
        tag: "Default",
        tagClass: "tag-yellow",
        desc: "Box drawing with language detection. Essentials only.",
        preview: `<span class="c-muted">╭─</span><span class="c-nerd"> \u{F08C7} </span><span class="c-cyan">Harsh@DESKTOP</span>
<span class="c-muted">|</span>
<span class="c-muted">├─</span><span class="c-nerd"> \u{F024B} </span><span class="c-path">D:\Projects\SchoolFlow</span>
<span class="c-muted">├─</span> <span class="c-yellow">main</span> <span class="c-green">v</span>
<span class="c-muted">├─</span><span class="c-nerd"> \u{F1044} Node v24.2.0</span>
<span class="c-muted">|</span>
<span class="c-muted">╰─</span><span class="c-green">\u{F054A}</span> `,
        file: "default.ps1"
    }
];

const PS1_CODE = {
    "1-modern.ps1": `#Requires -Version 7.0
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
        Write-Host "󰍛 \${ms}ms" -ForegroundColor $C_MUTED
    }

    Write-Host "│" -ForegroundColor $C_MUTED
    Write-Host "╰─" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "❯ " -NoNewline -ForegroundColor $C_SUCCESS
    return " "
}
`,    "2-hacker.ps1": `#Requires -Version 7.0
# Hacker Style Prompt — copy this entire file into your $PROFILE

# Colors
$C_TEXT      = [ConsoleColor]::White
$C_DIR       = [ConsoleColor]::Blue
$C_GIT       = [ConsoleColor]::Magenta
$C_SUCCESS   = [ConsoleColor]::Green
$C_MUTED     = [ConsoleColor]::DarkGray
$C_USER      = [ConsoleColor]::Green
$C_HOST      = [ConsoleColor]::DarkGreen
$C_BRANCH    = [ConsoleColor]::Yellow
$C_DIRTY     = [ConsoleColor]::Red
$C_AHEAD     = [ConsoleColor]::Cyan
$C_BEHIND    = [ConsoleColor]::DarkRed
$C_CHECK     = [ConsoleColor]::Green
$C_PATH_CYCLE = @([ConsoleColor]::Green, [ConsoleColor]::DarkGreen, [ConsoleColor]::Cyan, [ConsoleColor]::Yellow)

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

    Write-Host "┌──[" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "$env:USERNAME" -NoNewline -ForegroundColor $C_USER
    Write-Host "@" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "$env:COMPUTERNAME" -NoNewline -ForegroundColor $C_HOST
    Write-Host "]" -ForegroundColor $C_MUTED

    Write-Host "├──[" -NoNewline -ForegroundColor $C_MUTED
    Write-ColoredPath $path
    Write-Host "]" -ForegroundColor $C_MUTED

    if ($branch) {
        $indicator = Get-GitIndicator $gitStatus
        Write-Host "└──[" -NoNewline -ForegroundColor $C_MUTED
        Write-Host "git:" -NoNewline -ForegroundColor $C_GIT
        Write-Host $branch -NoNewline -ForegroundColor $C_BRANCH
        Write-Host $indicator -NoNewline -ForegroundColor $C_MUTED
        Write-Host "]" -ForegroundColor $C_MUTED
    } else {
        Write-Host "└──" -NoNewline -ForegroundColor $C_MUTED
    }

    Write-Host ""
    Write-Host "❯ " -NoNewline -ForegroundColor $C_SUCCESS
    return " "
}
`,    "3-powerlevel.ps1": `#Requires -Version 7.0
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
`,    "4-dashboard.ps1": `#Requires -Version 7.0
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
`,    "5-vscode.ps1": `#Requires -Version 7.0
# VS Code Theme Prompt — copy this entire file into your $PROFILE

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

# Prompt
function prompt {
    $path = Get-SmartPath
    $branch = Get-GitBranch
    $gitStatus = Get-GitStatus

    Write-Host $env:USERNAME -ForegroundColor $C_USER
    Write-Host "│" -ForegroundColor $C_MUTED

    Write-Host "├──" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "󰉋 " -NoNewline -ForegroundColor $C_DIR
    Write-ColoredPath $path
    Write-Host "" -NoNewline

    if ($branch) {
        Write-Host "├──" -NoNewline -ForegroundColor $C_MUTED
        Write-Host " " -NoNewline -ForegroundColor $C_GIT
        Write-Host $branch -NoNewline -ForegroundColor $C_BRANCH
        Write-Host $gitStatus -ForegroundColor $C_TEXT
    }

    Write-Host "└──" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "❯ " -NoNewline -ForegroundColor $C_SUCCESS
    return " "
}
`,    "6-catppuccin.ps1": `#Requires -Version 7.0
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
        Write-Host "󰍛 \${ms}ms" -ForegroundColor $C_MUTED
    }

    Write-Host "│" -ForegroundColor $C_MUTED
    Write-Host "╰─" -NoNewline -ForegroundColor $C_MUTED
    Write-Host "❯ " -NoNewline -ForegroundColor $C_SUCCESS
    return " "
}
`,    "7-cyberpunk.ps1": `#Requires -Version 7.0
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
`,    "8-apple.ps1": `#Requires -Version 7.0
# Apple Terminal Prompt — copy this entire file into your $PROFILE

# Colors
$C_TEXT      = [ConsoleColor]::White
$C_GIT       = [ConsoleColor]::Magenta
$C_SUCCESS   = [ConsoleColor]::Green
$C_MUTED     = [ConsoleColor]::DarkGray
$C_USER      = [ConsoleColor]::Cyan
$C_HOST      = [ConsoleColor]::DarkCyan
$C_BRANCH    = [ConsoleColor]::Yellow
$C_DIRTY     = [ConsoleColor]::Red
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
            Write-Host "/" -NoNewline -ForegroundColor $C_MUTED
        }
        $idx++
    }
}

# Prompt
function prompt {
    $path = Get-SmartPath
    $branch = Get-GitBranch
    $gitStatus = Get-GitStatus

    Write-Host $env:USERNAME -NoNewline -ForegroundColor $C_USER
    Write-Host " at " -NoNewline -ForegroundColor $C_TEXT
    Write-ColoredPath $path
    Write-Host "" -NoNewline

    if ($branch) {
        Write-Host ""
        Write-Host $branch -NoNewline -ForegroundColor $C_BRANCH
        Write-Host $gitStatus -ForegroundColor $C_TEXT
    }

    Write-Host ""
    Write-Host "❯ " -NoNewline -ForegroundColor $C_SUCCESS
    return " "
}
`,    "9-matrix.ps1": `#Requires -Version 7.0
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
`,    "default.ps1": `function Get-GitBranch {
    try {
        $branch = git branch --show-current 2>$null
        if ($LASTEXITCODE -eq 0 -and $branch) {
            return $branch.Trim()
        }
    } catch {}
    return $null
}

function Get-NodeVersion {
    try {
        if (Test-Path "package.json") {
            $v = node --version 2>$null
            if ($LASTEXITCODE -eq 0) { return $v.Trim() }
        }
    } catch {}
    return $null
}

function Get-PythonVersion {
    try {
        if ($env:VIRTUAL_ENV -or (Test-Path ".venv") -or (Test-Path "venv")) {
            $v = python --version 2>$null
            if ($LASTEXITCODE -eq 0) { return $v.Trim() }
        }
    } catch {}
    return $null
}

function prompt {
    $path = (Get-Location).Path
    $branch = Get-GitBranch
    $nodeVer = Get-NodeVersion
    $pythonVer = Get-PythonVersion
    $elapsed = if ($global:LAST_EXECUTION_DURATION) { "$($global:LAST_EXECUTION_DURATION)ms" } else { $null }

    Write-Host "╭─" -NoNewline -ForegroundColor DarkGray
    Write-Host "" -NoNewline -ForegroundColor Blue
    Write-Host "󰣇 " -NoNewline -ForegroundColor Blue
    Write-Host $env:USERNAME -NoNewline -ForegroundColor Cyan
    Write-Host "@" -NoNewline -ForegroundColor DarkGray
    Write-Host $env:COMPUTERNAME -ForegroundColor Blue

    Write-Host "│" -ForegroundColor DarkGray

    Write-Host "├─" -NoNewline -ForegroundColor DarkGray
    Write-Host "󰉋 " -NoNewline -ForegroundColor Green
    Write-Host $path -ForegroundColor Green

    if ($branch) {
        Write-Host "├─" -NoNewline -ForegroundColor DarkGray
        Write-Host "" -NoNewline -ForegroundColor Magenta
        Write-Host " $branch" -NoNewline -ForegroundColor Magenta
        Write-Host " ✓" -ForegroundColor Green
    }

    if ($nodeVer) {
        Write-Host "├─" -NoNewline -ForegroundColor DarkGray
        Write-Host "󱐋 " -NoNewline -ForegroundColor Green
        Write-Host "Node $nodeVer" -ForegroundColor Green
    }

    if ($pythonVer) {
        Write-Host "├─" -NoNewline -ForegroundColor DarkGray
        Write-Host "" -NoNewline -ForegroundColor Yellow
        Write-Host " Python $pythonVer" -ForegroundColor Yellow
    }

    if ($elapsed) {
        Write-Host "├─" -NoNewline -ForegroundColor DarkGray
        Write-Host "󰍛 " -NoNewline -ForegroundColor DarkYellow
        Write-Host "$elapsed" -ForegroundColor DarkYellow
    }

    Write-Host "│" -ForegroundColor DarkGray
    Write-Host "╰─❯ " -NoNewline -ForegroundColor DarkGray
    return " "
}
`
};