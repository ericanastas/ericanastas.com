---
title: View Owner
summary: Revit add-in that automates the organization of views by the users who created them
coverImage: /images/som/view-owner/view-owner2.png
skills: ["C#", "Revit", "Revit API"]
date: "2014-10-04"
repo: https://github.com/ericanastas/view-owner
---

The View Owner Revit add-in automates the organization of the views in a Revit model by the users who created them. When enabled the add-in adds a custom "View Owner" shared parameter to the views of a model. As users create new views , this parameter is automatically populated with the name of the current user. This works both when creating new views, and duplicating existing views.

![viewowner_parameter](/images/som/view-owner/viewowner_parameter.png)

Organizing the project browser by the "View Owner" parameter effectively creates personalized view folders that each user can work in. Everyone in the model can create new working views with out sorting through the views of other users. Views "owned" by a user are always considered working views.

![View Owner](/images/som/view-owner/View-Owner.png)

When a view is added to a sheet its owner is automatically set as `SHEET`, which segregates the project browser into working user views and printed `SHEET` views. This makes it apparent to users working in the model when they are in a working view that can be changed, and a view on a sheet that may be printed with a document set.

![movetosheet1](/images/som/view-owner/movetosheet1.png)

![movetosheet2](/images/som/view-owner/movetosheet2.png)

![movetosheet2](/images/som/view-owner/pbrowser5.png)

![movetosheet2](/images/som/view-owner/view-owner2.png)

![movetosheet2](/images/som/view-owner/enable_viewowner.png)
