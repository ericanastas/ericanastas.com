---
title: View Owner
tags:
  - C#.Net
  - Revit
  - Revit API
id: "2650"
categories:
  - - portfolio
    - Skidmore, Owings &amp; Merrill
date: 2014-10-04 22:18:24
---

The View Owner Revit add-in automates the organization of the views in a Revit model by the users who created them. When enabled the add-in adds a custom "View Owner" shared parameter to the views of a model. As users create new views , this parameter is automatically populated with the name of the current user. This works both when creating new views, and duplicating existing views.

[![viewowner_parameter](viewowner_parameter.png)](http://www.ericanastas.com/wp-content/uploads/2014/06/viewowner_parameter.png)

Organizing the project browser by the "View Owner" parameter effectively creates personalized view folders that each user can work in. Everyone in the model can create new working views with out sorting through the views of other users. Views "owned" by a user are always considered working views.

[![View Owner](http://www.ericanastas.com/wp-content/uploads/2014/06/View-Owner-636x545.png)](View-Owner.png)

When a view is added to a sheet its owner is automatically set as \[SHEET\], which segregates the project browser into working user views and printed \[SHEET\] views. This makes it apparent to users working in the model when they are in a working view that can be changed, and a view on a sheet that may be printed with a document set.

\[caption id="attachment_2996" align="alignnone" width="636"\][![movetosheet1](http://www.ericanastas.com/wp-content/uploads/2014/06/movetosheet1-636x461.png)](movetosheet1.png) Before adding FIRST FLOOR PLAN to a sheet\[/caption\]

\[caption id="attachment_2997" align="alignnone" width="636"\][![movetosheet2](http://www.ericanastas.com/wp-content/uploads/2014/06/movetosheet2-636x461.png)](movetosheet2.png) After adding FIRST FLOOR PLAN to a sheet\[/caption\]
