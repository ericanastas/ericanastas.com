---
title: Fuzhou Worldwide Tower Enclosure Model
summary: placeholder summary
tags: ["C#.Net", "Revit", "Revit API", "Revit Conceptual Massing", "Revit Modeling", "Fuzhou Worldwide Tower"]
date: "2012-03-13"
---

I was responsible for modeling the enclosure of the [Fuzhou Worldwide Tower](http://www.ericanastas.com/category/portfolio/som/projects-som/fwt/) Revit model. I generated the flat faces of the facade using a divided surface populated with a custom adaptive component panel family. However, the panels on the corners of the building form curve, which is not possible to create with standard adaptive curtain panels. So I created a custom 6 point adaptive component panel family, that when placed manually was able to curve around the corner of the building.

![](Fuzhou-Enclosure.jpg)

![](http://www.ericanastas.com/fwt-enclosure/curtain-wall/)

![](curved-panel.jpg)
