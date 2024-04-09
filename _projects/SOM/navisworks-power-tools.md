---
title: Navisworks Power Tools
summary: placeholder summary
tags:
  - 3D Coordination
  - C#.Net
  - Navisworks
  - NavisWorks API
categories:
  - - portfolio
    - Skidmore, Owings &amp; Merrill
date: "2013-05-02"
---

Navisworks Power Tools is a suite of tools I am developing which automate the process of coordinating building models in Autodesk Navisworks. Currently, this includes a utility which automatically generates clash tests in a Navisworks model. Each clash test clashes one search/selection set with another. For example Architecture vs Plumbing, or Structure vs HVAC. When the generate command is run it automatically determines every possible unique pair of sets in the current model and creates the corresponding clash tests.

The clash tolerance to use for the generated clash tests can also be specified when the command is run.

[![generate clash tests 3](http://www.ericanastas.com/wp-content/uploads/2013/05/generate-clash-tests-3-636x315.png)](generate-clash-tests-3.png)
