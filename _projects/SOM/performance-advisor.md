---
title: Performance Advisor
summary: placeholder summary
coverImage: /images/som/performance-advisor/Perf-Advisor.png
tags: ["C#.Net", "Revit", "Revit API", "WPF"]
date: "2013-11-04"
---

The Revit 2014 API added a PerformanceAdviser class which can be used to check a Revit model for various issues can can hinder the performance of the model. This functionality, however, was not exposed through the UI and could only be accessed through the API and custom add-ins.

This add-in exposes these checks to regular users through a simple user interface. The results of the performance checks are displayed through the default warnings dialog, and can also be exported to a report file.

![Perf Warning](/images/som/performance-advisor/Perf-Warning.png)

![Perf Report](/images/som/performance-advisor/Perf-Report.png)
