---
title: Fuzhou Worldwide Tower Enclosure Model
summary: placeholder summary
coverImage: /images/som/fwt-enclosure/3D_View_2_2012-Mar-22-033024UTC.png
tags:
  ["C#.Net", "Revit", "Revit API", "Revit Conceptual Massing", "Revit Modeling"]
date: "2012-03-13"
project: Fuzhou Worldwide Tower
---

I was responsible for modeling the enclosure of the [Fuzhou Worldwide Tower](/projects/som/fwt/) Revit model. I generated the flat faces of the facade using a divided surface populated with a custom adaptive component panel family. However, the panels on the corners of the building form curve, which is not possible to create with standard adaptive curtain panels. So I created a custom 6 point adaptive component panel family, that when placed manually was able to curve around the corner of the building.

![](/images/som/fwt-enclosure/Fuzhou-Enclosure.jpg)

![](/images/som/fwt-enclosure/curtain-wall.jpg)

![](/images/som/fwt-enclosure/curved-panel.jpg)
