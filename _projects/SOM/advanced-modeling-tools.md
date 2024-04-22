---
title: Advanced Modeling Tools
summary: placeholder summary
coverImage: /images/som/advanced-modeling-tools/AMT-GHX.png
tags: ["C#.Net", "Revit", "Revit API"]
date: "2015-05-13"
repo: https://github.com/ericanastas/advanced-modeling-tools
---

Advanced Modeling Tools is a Revit add-in that supports the generation of complex geometry in a Revit model. Currently this includes tools that place Revit families from data in an excel file. This includes both standard component families, as well as point based adaptive components. In addition, to the location of the new family instances the add-in can also set any number of built in and custom parameters.

For example here is a grasshopper definition that populates a surface with cubes of various sizes.

![AMT GHX](/images/som/amt/AMT-GHX.png)

The position and size of each cube are then exported to Excel.

![AMT Excel](/images/som/amt/AMT-Excel.png)

Here are the result of loading the excel file into Revit through the add-in.

![AMT Revit](/images/som/amt/AMT-Revit.png)
