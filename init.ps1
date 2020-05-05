# initialize project

function Start-Exit () {
    $window.Dispose()
}
function Show-Gui () {
    Add-Type -AssemblyName System.Windows.Forms
    Add-Type -AssemblyName System.Drawing
    $window = New-Object System.Windows.Forms.Form
    $window.Width = 300
    $window.Height = 150
    $window.Text = "Project: MAeDN"
#    $Label = New-Object System.Windows.Forms.Label
#    $Label.Location = New-Object System.Drawing.Size(10,10)
#    $Label.Text = "Text im Fenster"
#    $Label.AutoSize = $True
#    $window.Controls.Add($Label)
#    $windowTextBox = New-Object System.Windows.Forms.TextBox
#    $windowTextBox.Location = New-Object System.Drawing.Size(10,30)
#    $windowTextBox.Size = New-Object System.Drawing.Size(500,500)
#    $window.Controls.Add($windowTextBox)
 
    $windowButton = New-Object System.Windows.Forms.Button
    $windowButton.Location = New-Object System.Drawing.Size(40,30)
    $windowButton.Size = New-Object System.Drawing.Size(200,50)
    $windowButton.Text = "EXIT"
    $windowButton.Add_Click({
        Start-Exit
#         write-host $windowTextBox.Text
#         $window.Dispose()
      })
 
    $window.Controls.Add($windowButton)

    [void]$window.ShowDialog()
}
function Open-Browser () {
    Start-Process -FilePath 'chrome.exe' -PassThru -ArgumentList "--user-data-dir=$PSScriptRoot\.temp", '--start-maximized', "$PSScriptRoot\src\index.html", '--auto-open-devtools-for-tabs'
}

function Open-Editor () {
    Start-Process -FilePath 'notepad++.exe' -PassThru -ArgumentList "$PSScriptRoot\src\index.html", "$PSScriptRoot\src\scripts\main.js", "$PSScriptRoot\src\scripts\board.js", "$PSScriptRoot\src\style\main.css"
}

Clear-Host
Write-Output "Init Project"
# open browser
#Start-Browser

# open Notepad and files
#$Out = Open-Files
#$Process = Start-Process -FilePath 'notepad++.exe' -PassThru -ArgumentList "$PSScriptRoot\src\index.html", "$PSScriptRoot\src\scripts\main.js", "$PSScriptRoot\src\scripts\board.js", "$PSScriptRoot\src\style\main.css"
$procBrowser = Open-Browser
$procEditor = Open-Editor

Show-Gui
$procBrowser.Kill()
$procEditor.Kill()
