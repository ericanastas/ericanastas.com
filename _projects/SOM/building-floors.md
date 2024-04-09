---
title: Building Floors
summary: placeholder summary
coverImage: /images/som/building-floors/MISSING_COVER
tags: ["C#.Net", "Grasshopper", "Grasshopper API"]
date: "2011-02-28"
draft: true
---

I created this set of custom Grasshopper components to facilitate the process of calculating gross floor areas from conceptual models in Rhino or in real-time as part of an existing Grasshopper definitions. First a set of custom components are used to generate a list of floor elevations. These elevations and the building form are then sent to a floor section component that returns the the floor areas, as well as the floor section curves.