---
title: MIDI Controlled Grasshopper
summary: placeholder summary
tags:
    - C#.Net
    - Grasshopper
    - Grasshopper API
    - User Interface
    - WinForms
date: "2011-02-25"
---

I developed this proof of concept for controlling Grasshopper with knobs and sliders on a hardware [MIDI](http://en.wikipedia.org/wiki/MIDI) controller. I created a custom .NET application that reads the current positions of the knobs on a MIDI controller and writes their values to a text file. I then setup Grasshopper to read in the values from the file and use them to generated the geometry shown.

Currently I'm working on developing a set of custom Grasshopper components, which will provide the same functionality without requiring an external application to be running. Here's a video of the first working version of these custom components.
