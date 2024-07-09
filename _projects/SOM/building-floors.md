---
title: Building Floors
summary: Custom grasshopper components that simplify common tasks related to creating an analyzing building forms
coverImage: /images/som/building-floors/Building-Floors.jpg
skills:
  [
    "C#",
    "Grasshopper",
    "Grasshopper API",
    "Rhino",
    "Design Analysis",
    "3D Modeling",
  ]
date: "2011-02-28"
repo: https://github.com/ericanastas/building-floors
---

I created this set of custom Grasshopper components to facilitate the process of calculating gross floor areas from conceptual models in Rhino or in real-time as part of an existing Grasshopper definitions. First a set of custom components are used to generate a list of floor elevations. These elevations and the building form are then sent to a floor section component that returns the the floor areas, as well as the floor section curves.
