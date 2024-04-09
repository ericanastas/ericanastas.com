---
title: Project Setup
summary: placeholder summary
coverImage: /images/som/project-setup/MISSING_COVER
tags: ["C#.Net", "Revit", "Revit API", "WPF"]
date: "2014-04-25"
---

Project Setup is a Revit add-in that I developed for setting up Revit project files. Each setup is associated with a specific Revit template file, and consists of one or more setup tasks. The setup editor is shown in the image below.

![Project Setup Editor](Project-Setup-Editor.png)

The image below shows the available tasks that can be added to a setup.

![Project Setup Tasks](http://www.ericanastas.com/wp-content/uploads/2014/07/Project-Setup-Tasks.png)

When a new Revit model is created with a template that has one or more associated project setups a dialog is displayed that prompts the user to select a setup to run.

![Project Setup Prompt](Project-Setup-Prompt.png)

The setup task are then run on the new file, and the results displayed to the user. Any failed setup tasks are highlighted in red.

![](Project-Setup-Test.png)
