function Get-GitBranch {
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
