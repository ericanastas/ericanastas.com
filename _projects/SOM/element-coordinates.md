---
title: Element Coordinates
summary: Revit add-in that writes the coordinates of elements in a model to parameters that can be tagged and scheduled
coverImage: /images/som/element-coordinates/Element-Coordinates.png
tags: ["C#.Net", "Revit", "Revit API"]
date: "2013-11-20"
---

This Revit add-in reads the actual XYZ coordinates of families in a Revit model and writes the values back to parameters on the family instances. The values can then be scheduled or shown in tags. For example this can be used with a "Work Point" family for extracting all the coordinates of the work points that define the geometry of a complex project.
