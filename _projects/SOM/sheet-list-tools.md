---
title: Sheet List Tools
summary: placeholder summary
coverImage: /images/som/sheet-list-tools/Export-Sheet-List.png
tags: ["C#.Net", "Revit", "Revit API"]
date: "2013-10-04"
repo: https://github.com/ericanastas/sheet-list-tools
---

Sheet List tools can be used to create and rename drawing sheets in a Revit model through Excel. Often drawing lists are created by senior designers on a project outside of Revit in Excel. This tool can read these excel files and create real sheets in a Revit model. In addition to the sheet name and number, new sheets can also be identified as placeholder sheets. Placeholder sheets are used for consultant sheets that are not created in the model, but still need to show up in the drawing list. The import command can also be used to rename existing sheets with matching sheet numbers.

![Import Sheet List](/images/som/sheet-list-tools/Import-Sheet-List.png)

The tool can also work in the other direction by exporting the current sheets in the model to a Excel.

![Export Sheet List](/images/som/sheet-list-tools/Export-Sheet-List.png)
