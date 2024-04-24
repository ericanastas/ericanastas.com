---
title: List Loaded Assmblies
summary: placeholder summary
coverImage: /images/placeholder.png
tags: ["Revit", "C#.Net", "Revit API"]
date: "2018-06-12"
repo: https://github.com/ericanastas/list-assemblies
---

## List Assemblies

Exports and compares all .NET Assemblies Loaded into the AppDomain of Revit. This tool is used to debug conflicts between third party libraries referenced by Revit Add-Ins. This adds two commands to External Tools:

## List Loaded Assemblies

Exports a CSV file of all .NET assemblies loaded into Revit's AppDomain with their version and location. This can be used to debug conflicts between libraries used by different add-ins.

## Compare Loaded Assemblies Lists

Compares a selections of assembly lists exported by the List Loaded Assemblies command, and saves a report of the differences.
