---
title: Navisworks Power Tools
summary: placeholder summary
coverImage: /images/som/navisworks-power-tools/generate-clash-tests-0.png
tags: ["3D Coordination", "C#.Net", "Navisworks", "NavisWorks API"]
date: "2013-05-02"
repo: https://github.com/ericanastas/navisworks-power-tools
---

Navisworks Power Tools is a suite of tools I am developing which automate the process of coordinating building models in Autodesk Navisworks. Currently, this includes a utility which automatically generates clash tests in a Navisworks model. Each clash test clashes one search/selection set with another. For example Architecture vs Plumbing, or Structure vs HVAC. When the generate command is run it automatically determines every possible unique pair of sets in the current model and creates the corresponding clash tests.

The clash tolerance to use for the generated clash tests can also be specified when the command is run.

![](/images/som/navisworks-power-tools/generate-clash-tests-0.png)

![](/images/som/navisworks-power-tools/generate-clash-tests-1.png)

![](/images/som/navisworks-power-tools/generate-clash-tests-2.png)

![](/images/som/navisworks-power-tools/generate-clash-tests-3.png)

![](/images/som/navisworks-power-tools/generate-clash-tests-4.png)
