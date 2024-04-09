---
title: Signage Room Assignment Macro
summary: placeholder summary
coverImage: /images/som/signage-macro/MISSING_COVER
tags: ["C#.Net", "Revit", "Revit API", "Denver VA Medical Center"]
date: "2011-02-17"
---

The graphics department of SOM San Francisco was responsible for adding signage to the [Denver VA Medical Center](http://www.ericanastas.com/category/portfolio/som/projects-som/dvamc/) project Revit model. Many of these signs were rooms signs, and therefore needed to be associated with rooms in the model. However, the built in "Room" property of the signs could not be used. For one the signs were not in the same model as the rooms. And second the signs were not located inside the rooms, as typically room signs are placed just outside the room next to the door.

To solve this problem I created a simple macro that checks the main model for rooms at a points three feet behind each sign. Once a room was found common properties such as the name and number of the room were written back to the associated sign instance.
