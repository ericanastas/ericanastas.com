---
title: Advanced Modeling Tools
summary: placeholder summary
tags:
    - C#.Net
    - Revit
    - Revit API
date: "2015-05-13"
img_src: /advanced-modeling-tools/AMT-Excel.png
---

Advanced Modeling Tools is a Revit add-in that supports the generation of complex geometry in a Revit model. Currently this includes tools that place Revit families from data in an excel file. This includes both standard component families, as well as point based adaptive components. In addition, to the location of the new family instances the add-in can also set any number of built in and custom parameters.

For example here is a grasshopper definition that populates a surface with cubes of various sizes.

[![AMT GHX](http://www.ericanastas.com/wp-content/uploads/2015/03/AMT-GHX-636x383.png)](AMT-Excel.png)

The position and size of each cube are then exported to Excel.

[![AMT Excel](http://www.ericanastas.com/wp-content/uploads/2015/03/AMT-Excel-636x466.png)](AMT-Excel.png)

Here are the result of loading the excel file into Revit through the add-in.

[![AMT Revit](http://www.ericanastas.com/wp-content/uploads/2015/03/AMT-Revit-636x703.png)](AMT-Revit.png)
