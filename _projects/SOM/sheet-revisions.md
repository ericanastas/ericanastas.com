---
title: Sheet Revisions
summary: placeholder summary
coverImage: /images/som/sheet-revisions/MISSING_COVER
tags: ["C#.Net", "Revit", "Revit API"]
date: "2013-11-21"
---

Sheet Revisions is a Revit add-in which exposes the sheet revisions in drawing lists. Each sheet in a Revit model may be assigned to any number of revisions. This assignment may be done explicitly by a user, or implicitly by adding a revision cloud to a sheet.

However, Revit does not provide a way to displayed the assigned revisions in a sheet schedule. This add-in thus reads the currently assigned revisions for each sheet and adds custom parameters which can be displayed as columns in a sheet schedule. Dots are added to the revision parameters based on the revision(s) each sheet is assigned to. These parameters can be added as columns of a sheet schedule to generate a project drawing index.

![Sheet Revisions](Sheet-Revisions.png)
