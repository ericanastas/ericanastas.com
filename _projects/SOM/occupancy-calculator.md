---
title: Occupancy Calculator
summary: Revit add-in that calculates the maximum occupants for areas in a Revit model
coverImage: /images/som/occupancy-calculator/Occupancy-Calculator-2.png
skills: ["C#", "Revit", "Revit API"]
date: "2013-10-16"
repo: https://github.com/ericanastas/occupancy-calculator
---

Occupancy Calculator is a Revit add-in that calculates the maximum occupants per each area in a Revit model based on an assigned occupant load factor. The add-in includes both options to round up and to round down to a whole number of occupants. While it is possible to perform the same calculation using a calculated parameter in a Revit schedule, these values can not be displayed in an area tag. Because the add-in is updating an occupancy parameter on the actual area objects, these values can be displayed in a tag.
