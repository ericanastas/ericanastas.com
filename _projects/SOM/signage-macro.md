---
title: Signage Room Assignment
summary: Revit macro that assigns signage to associated rooms.
coverImage: /images/som/signage-macro/dvamc-signage-macro.jpg
tags: ["C#.Net", "Revit", "Revit API"]
date: "2011-02-17"
project: Denver VA Medical Center
---

The graphics department of SOM San Francisco was responsible for adding signage to the Denver VA Medical Center project Revit model. Many of these signs were rooms signs, and therefore needed to be associated with rooms in the model. However, the built in "Room" property of the signs could not be used. For one the signs were not in the same model as the rooms. And second the signs were not located inside the rooms, as typically room signs are placed just outside the room next to the door.

To solve this problem I created a Revit macro that checks the main model for rooms at a points three feet behind each sign. Once a room was found common properties such as the name and number of the room were written back to the associated sign instance.
