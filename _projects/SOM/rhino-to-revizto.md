---
title: Rhino to Revizto
summary: placeholder summary
coverImage: /images/som/rhino-to-revizto/MISSING_COVER
tags: ["C#.Net", "Revizto", "Rhino", "Rhino API", "Visualization"]
date: "2015-04-04"
draft: true
---

This plug-in, which I developed using the Rhino SDK, simplifies the process of exporting a Rhino model to the Revizto real-time rendering software. In a Rhino model the Z axis is vertical, yet in Revizto the Y axis is vertical. This results in a Rhino model loading into Revizto on its side if imported directly. This Rhino plug-in automates the process of temporarily rotating the current Rhino model, exporting the geometry, and opening the export in the Revizto editor all through a single command in Rhino.

![Export to Revizto 1](Export-to-Revizto-1.png)
