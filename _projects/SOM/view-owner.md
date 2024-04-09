---
title: View Owner
summary: placeholder summary
coverImage: /images/som/view-owner/MISSING_COVER
tags: ["C#.Net", "Revit", "Revit API"]
date: "2014-10-04"
---

The View Owner Revit add-in automates the organization of the views in a Revit model by the users who created them. When enabled the add-in adds a custom "View Owner" shared parameter to the views of a model. As users create new views , this parameter is automatically populated with the name of the current user. This works both when creating new views, and duplicating existing views.

![viewowner_parameter](http://www.ericanastas.com/wp-content/uploads/2014/06/viewowner_parameter.png)

Organizing the project browser by the "View Owner" parameter effectively creates personalized view folders that each user can work in. Everyone in the model can create new working views with out sorting through the views of other users. Views "owned" by a user are always considered working views.

![View Owner](View-Owner.png)

When a view is added to a sheet its owner is automatically set as `SHEET`, which segregates the project browser into working user views and printed `SHEET` views. This makes it apparent to users working in the model when they are in a working view that can be changed, and a view on a sheet that may be printed with a document set.

![movetosheet1](movetosheet1.png)

![movetosheet2](movetosheet2.png)
