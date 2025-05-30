---
title: Delete Viewport Types
summary: Revit add-in used to purge non standard viewport types from a model
coverImage: /images/som/delete-viewport-types/Purge-Viewport-Types-2.png
skills: ["C#", "Revit", "Revit API", "WPF", "UX Design"]
date: "2014-08-20"
repo: https://github.com/ericanastas/delete-viewport-types
---

Often unneeded and unwanted viewport types will be created in a Revit model. These can be difficult to purge, as there is no easy way in Revit to find which sheets are using each viewport type. In addition, views in a Revit model that are not actually placed on a sheet will still internally be set to a viewport type. This can also prevent these types from being purged using the built in purge unused tool. The unwanted types remain visible to users, and often the only solution is add "DO NOT USE" to their names as a warning.

This add-in enables the deletion of these extra viewport types. One or more of the unwanted types to delete can be selected from a list. Any existing viewports of the types being deleted will be switched to another type that is selected by the user.

![Purge Viewport Types](/images/som/delete-viewport-types/Purge-Viewport-Types.png)

![Purge Viewport Types 3](/images/som/delete-viewport-types/Purge-Viewport-Types-3.png)
