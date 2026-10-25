$ErrorActionPreference = 'Stop'

$projectRoot = [System.IO.Path]::GetFullPath((Join-Path $PSScriptRoot '..'))
$distPath = Join-Path $projectRoot 'dist'
$sourceFiles = @(
    'index.html'
    'style.css'
    'app.js'
    'favicon.svg'
    'CV_Pedro_Zahonero_ES.docx'
    'robots.txt'
    'sitemap.xml'
)

New-Item -ItemType Directory -Path $distPath -Force | Out-Null

foreach ($file in $sourceFiles) {
    $sourcePath = Join-Path $projectRoot $file
    if (-not (Test-Path -LiteralPath $sourcePath -PathType Leaf)) {
        throw "Falta el archivo requerido: $file"
    }
    Copy-Item -LiteralPath $sourcePath -Destination $distPath -Force
}

$assetsTarget = Join-Path $distPath 'assets'
New-Item -ItemType Directory -Path $assetsTarget -Force | Out-Null
Get-ChildItem -LiteralPath (Join-Path $projectRoot 'assets') -File | Copy-Item -Destination $assetsTarget -Force

Write-Output "Artefacto generado en $distPath"
