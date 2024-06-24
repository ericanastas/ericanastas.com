---
title: Project Setup
summary: Revit add-in that automates the setup of new project models
coverImage: /images/som/project-setup/Project-Setup-Editor.png
tags: ["C#", "Revit", "Revit API", "WPF", "UX Design"]
date: "2014-04-25"
repo: https://github.com/ericanastas/project-setup
---

Project Setup is a Revit add-in that I developed for setting up Revit project files. Each setup is associated with a specific Revit template file, and consists of one or more setup tasks. The setup editor is shown in the image below.

![Project Setup Editor](/images/som/project-setup/Project-Setup-Editor.png)

The image below shows the available tasks that can be added to a setup.

![Project Setup Tasks](/images/som/project-setup/Project-Setup-Tasks.png)

When a new Revit model is created with a template that has one or more associated project setups a dialog is displayed that prompts the user to select a setup to run.

![Project Setup Prompt](/images/som/project-setup/Project-Setup-Prompt.png)

The setup task are then run on the new file, and the results displayed to the user. Any failed setup tasks are highlighted in red.

![](/images/som/project-setup/Project-Setup-Test.png)
