---
title: Project Setup
tags:
  - C#.Net
  - Revit
  - Revit API
  - WPF
id: "2720"
categories:
  - - portfolio
    - Skidmore, Owings &amp; Merrill
date: 2014-04-25 11:17:55
---

Project Setup is a Revit add-in that I developed for setting up Revit project files. Each setup is associated with a specific Revit template file, and consists of one or more setup tasks. The setup editor is shown in the image below.

[![Project Setup Editor](http://www.ericanastas.com/wp-content/uploads/2014/07/Project-Setup-Editor-636x471.png)](Project-Setup-Editor.png)

The image below shows the available tasks that can be added to a setup.

[![Project Setup Tasks](Project-Setup-Tasks.png)](http://www.ericanastas.com/wp-content/uploads/2014/07/Project-Setup-Tasks.png)

When a new Revit model is created with a template that has one or more associated project setups a dialog is displayed that prompts the user to select a setup to run.

![Project Setup Prompt](Project-Setup-Prompt.png)

The setup task are then run on the new file, and the results displayed to the user. Any failed setup tasks are highlighted in red.

[![](http://www.ericanastas.com/wp-content/uploads/2014/04/Project-Setup-Test-636x477.png)](Project-Setup-Test.png)
