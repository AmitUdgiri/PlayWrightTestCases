param(
    [string]$RepoPath = "$(Get-Location)",
    [string]$RepoName = "",
    [string]$RemoteURL = "",
    [string]$UserName = "AmitUdgiri",
    [string]$UserEmail = "your-email@example.com",
    [string]$Branch = "main",
    [string]$CommitMessage = "Update via script",
    [string]$Files = ".",
    [switch]$UseSSH,
    [switch]$ForcePush,
    [switch]$AmendAuthor
)

Set-Location -Path $RepoPath

# Ensure this is a git repo
if (-not (Test-Path .git)) {
    Write-Error "Not a git repository: $RepoPath"
    exit 1
}

# Set local repo author
git config user.name "$UserName"
git config user.email "$UserEmail"

# Stage
git add $Files

# Commit if there are changes
$changes = git status --porcelain
if ([string]::IsNullOrWhiteSpace($changes)) {
    Write-Host "No changes to commit."
} else {
    git commit -m "$CommitMessage"
    if ($AmendAuthor) {
        git commit --amend --author="$UserName <$UserEmail>" --no-edit
    }
}

# If RemoteURL provided, set origin directly. Otherwise, if RepoName provided, construct one.
if ($RemoteURL -ne "") {
    $url = $RemoteURL
    git remote remove origin 2>$null
    git remote add origin $url
    Write-Host "Set origin -> $url"
} elseif ($RepoName -ne "") {
    if ($UseSSH) {
        $url = "git@github.com:AmitUdgiri/$RepoName.git"
    } else {
        $url = "https://github.com/AmitUdgiri/$RepoName.git"
    }
    git remote remove origin 2>$null
    git remote add origin $url
    Write-Host "Set origin -> $url"
}

# Push
$pushArgs = "origin $Branch"
if ($ForcePush) { git push --force origin $Branch } else { git push origin $Branch }

# Show authors for verification
git shortlog -sne | Out-Host

Write-Host "Done. Verify the repository on GitHub and remove any undesired collaborators via the web UI or API."
