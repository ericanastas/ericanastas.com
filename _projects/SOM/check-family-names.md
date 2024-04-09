---
title: Check Family Names
summary: placeholder summary
coverImage: /images/som/check-family-names/MISSING_COVER
tags: ["Revit", "Revit API"]
date: "2013-12-06"
draft: true
---

This Revit add-in validates the names of families in a Revit project based on a predefined naming standard . The standard is defined as an an Excel file, where each row represents a naming standard for a specific Revit category. When a model is checked the selected standards file is compared against all the families in the active Revit document, and the results of the check are exported as an Excel report. Families with at least one matching standard are show as passing, while any family no matching standards show as failed.

![Check Family Names 3](Check-Family-Names-3.png)

![Check Family Names](Check-Family-Names1.png)

![Check Family Names 2](Check-Family-Names-2.png)