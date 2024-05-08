---
title: View Profiler
summary: Revit add-in that evaluates the performance of views in a Revit model
coverImage: /images/som/view-profiler/Profile-View1.png
tags: ["C#.Net", "Revit", "Revit API"]
date: "2013-10-06"
repo: https://github.com/ericanastas/view-profiler
---

The View Profiler add-in is used to test and evaluate the performance of views in a Revit model. First, the Profile View command times how long it takes to refresh the active view. Views that take an excessively long time to refresh can be evaluated further using the Profile Views By Category command. This systematically isolates the elements of each category, and generates an excel report showing how long it took to refresh the view with each category isolated. This can help narrow down which objects in the view are causing the performance problem.

![Profile View Warning](/images/som/view-profiler/Profile-View-Warning.png)

![Profile View Report](/images/som/view-profiler/Profile-View-Report.png)
