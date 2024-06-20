---
title: Is Placed Updater
summary: Updates a parameter on rooms and areas that indicate if they are actually placed in the model
coverImage:
tags: ["Revit", "Revit API", "C#"]
date: "2016-06-23"
repo: https://github.com/ericanastas/is-placed-updater
---

Updates a yes/no instance parameter on Areas and/or Rooms named "Is Placed" to reflect if the area/room in indeed placed in the model. Unplaced rooms/area have zero area but attempting to reference the area with a calculated parameter in a schedule will always return a blank. The "Is Placed" parameter can thus be used in a calculated parameter to determine if a room/area is unplaced while still returning an actual value.
