---
title: Show Hidden Elements
summary: placeholder summary
tags: ["C#.Net", "Revit", "Revit API"]
date: "2013-11-06"
---

Typically elements of a Revit model should be hidden from views through global settings such as the visibility graphics settings of a view, or view filters. However, Revit also has the ability to hide specific elements selected by a user in a specific view. While this can be a useful fallback, it can also be overused by users, and can lead to issues when troubleshooting graphics issues. This add-in automatically displays any elements in the view that have been explicitly hidden by a user and displays a prompt with the the number of elements displayed. The displayed elements are also left selected in the model. This both highlights the elements to the user, and allows them to be easily hidden again if needed.

[![Show Hidden Menu](Show-Hidden-Menu.png)](http://www.ericanastas.com/wp-content/uploads/2013/11/Show-Hidden-Menu.png)
