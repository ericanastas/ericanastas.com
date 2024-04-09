---
title: Faceted Eliptical Tower
summary: placeholder summary
tags: ["C#.Net", "Grasshopper", "Poly Dawangjing Complex"]
date: "2010-07-26"
---

This Grasshopper definition generates a faceted elliptical building form. The trickiest part of creating this definition was rationalizing an ellipse into a series of equal length line segments, which is actually a lot harder then it sounds. I was able to do this using a C#.NET component in the definition to iteratively solve the segment length that would work for any given ellipse. Later on I used this same logic when creating my [ellipse rationalizer](http://www.ericanastas.com/ellipse-rationalizer/ "Ellipse Rationalizer") definition. The remainder of the definition uses the resulting rationalized ellipses to generate the faceted building geometry.

The video below shows how the final geometry generated from the script was also used to calculate the gross floor areas in real time.

![](facet-tower.jpg)

![](1753.jpg)
