---
title: Faceted Elliptical Tower
summary: Grasshopper definition that creates a faceted elliptical building mass
coverImage: /images/som/faceted-elliptical-tower/facet-tower.jpg
tags: ["C#", "Grasshopper", "Rhino", "3D Modeling"]
date: "2010-07-26"
project: Poly Dawangjing Complex
---

This Grasshopper definition generates a faceted elliptical building form. The trickiest part of creating this definition was rationalizing an ellipse into a series of equal length line segments, which is actually a lot harder then it sounds. I was able to do this using a C#.Net component in the definition to iteratively solve the segment length that would work for any given ellipse. Later on I used this same logic when creating my [ellipse rationalizer](/projects/som/ellipse-rationalizer) definition. The remainder of the definition uses the resulting rationalized ellipses to generate the faceted building geometry.

The video below shows how the final geometry generated from the script was also used to calculate the gross floor areas in real time.

![](/images/som/faceted-elliptical-tower/facet-tower.jpg)

![](/images/som/faceted-elliptical-tower/1753.jpg)
