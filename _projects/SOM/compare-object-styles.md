---
title: Compare Object Styles
summary: Revit add-in that compares the object styles in multiple Revit models
coverImage: /images/som/compare-object-styles/Compare-Obj-Styles-Report.png
skills: ["C#", "Excel", "Revit", "Revit API"]
date: "2013-11-01"
repo: https://github.com/ericanastas/compare-object-styles
---

Compare Object Styles is a Revit add-in which can compare the object style settings between multiple Revit models or templates. The tool first prompts the user to select the files to compare. It then opens each file, extracts the object style information, and generates an excel report of all the settings.

![Compare Obj Styles](/images/som/compare-object-styles/Compare-Obj-Styles-Report.png)

An example of one of the reports is shown below. Discrepancies between the models are highlighted in red. This includes both differences in the line weights, as well as subcategories that exist in one model but not another.

![Compare Obj Styles Report](/images/som/compare-object-styles/Compare-Obj-Styles-Report.png)
