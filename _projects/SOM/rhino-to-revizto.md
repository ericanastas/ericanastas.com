---
title: Rhino to Revizto
summary: Plug-in for Rhino which simplifies opening a model in Revizto
coverImage: /images/som/rhino-to-revizto/Export-to-Revizto-0.png
tags: ["C#", "Revizto", "Rhino", "Rhino API", "3D Visualization"]
date: "2015-04-04"
repo: https://github.com/ericanastas/rhino-to-revizto
---

This plug-in, which I developed using the Rhino SDK, simplifies the process of exporting a Rhino model to the Revizto real-time rendering software. In a Rhino model the Z axis is vertical, yet in Revizto the Y axis is vertical. This results in a Rhino model loading into Revizto on its side if imported directly. This Rhino plug-in automates the process of temporarily rotating the current Rhino model, exporting the geometry, and opening the export in the Revizto editor all through a single command in Rhino.

![Export to Revizto 1](/images/som/rhino-to-revizto/Export-to-Revizto-0.png)

![Export to Revizto 1](/images/som/rhino-to-revizto/Export-to-Revizto-1.png)

![Export to Revizto 1](/images/som/rhino-to-revizto/Export-to-Revizto-2.png)

![Export to Revizto 1](/images/som/rhino-to-revizto/Export-to-Revizto-3.png)
