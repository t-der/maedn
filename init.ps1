# initialize project

# open browser
Start-Process -FilePath 'chrome.exe' -ArgumentList "--user-data-dir=$PSScriptRoot\.temp", '--start-maximized', "$PSScriptRoot\src\index.html", '--auto-open-devtools-for-tabs'

# open Notepad and files
Start-Process -FilePath 'notepad++.exe' -ArgumentList "$PSScriptRoot\src\index.html", "$PSScriptRoot\src\scripts\main.js", "$PSScriptRoot\src\scripts\board.js", "$PSScriptRoot\src\style\main.css"
