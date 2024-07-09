---
title: Open Asset Data Export
summary: Revit add-in that generates an excel report of Revit families in an Open Asset library
coverImage: /images/som/open-asset-export/Open-Asset-Tools-Menu.png
skills: ["C#", "REST", "Revit", "Revit API"]
date: "2014-08-08"
repo: https://github.com/ericanastas/open-asset-export
---

This Revit add-in connects to the API of an Open Asset BIM library and extracts all the family information into a single large excel file.

![Open Asset Tools Excel](/images/som/open-asset-export/Open-Asset-Tools-Excel.png)

The resulting file can then be used to analyze the contents of the library. For example the table below shows the distribution of families by category and release.

![Open Asset Tools Excel 2](/images/som/open-asset-export/Open-Asset-Tools-Excel-2.png)

This table show which releases of Revit each family is available for, and also highlights where there are duplicate families in the library.

![Open Asset Tools Excel 3](/images/som/open-asset-export/Open-Asset-Tools-Excel-3.png)
