---
title: View Profiler
summary: placeholder summary
coverImage: /images/som/view-profiler/MISSING_COVER
tags: ["C#.Net", "Revit", "Revit API"]
date: "2013-10-06"
draft: true
---

The View Profiler add-in is used to test and evaluate the performance of views in a Revit model. First, the Profile View command times how long it takes to refresh the active view. Views that take an excessively long time to refresh can be evaluated further using the Profile Views By Category command. This systematically isolates the elements of each category, and generates an excel report showing how long it took to refresh the view with each category isolated. This can help narrow down which objects in the view are causing the performance problem.

![Profile View Warning](http://www.ericanastas.com/wp-content/uploads/2014/06/Profile-View-Warning.png)

![Profile View Report](Profile-View-Report.png)