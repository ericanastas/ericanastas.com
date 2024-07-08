---
title: View Reference Graph
summary: Revit plug-in that visualizes the relationships between views and drawing series in a Revit model
coverImage: /images/som/view-reference-graph/SM-MP-A-View-Ref-Graph.png
skills: ["C#", "Graphviz", "Revit", "Revit API"]
date: "2013-10-16"
repo: https://github.com/ericanastas/view-reference-graph
---

This Revit add-in analyzes all references between views in a Revit model such as sections, elevations, and callouts. Using this information it builds a node/edge graph of the relationships between the views, which is then uses to generate diagrams showing the organization of the project's drawing set.

![View Reference Graphviz](/images/som/view-reference-graph/View-Reference-Graphviz.png)

![UCLA MEP View Ref Graph](/images/som/view-reference-graph/UCLA-MEP-View-Ref-Graph.png)
