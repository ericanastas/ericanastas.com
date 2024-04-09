---
title: Shading Calculator
summary: placeholder summary
coverImage: /images/som/shading-calculator/MISSING_COVER
tags: ["Analysis", "C#.Net", "Grasshopper", "Rhino", "Rhino API"]
date: "2010-03-15"
draft: true
---

I developed this custom Rhino command to perform shading studies for a number of Chinese projects. There are specific building codes in areas of China which restrict how new construction can shade existing residential buildings. All residential units must be allowed to receive at least 2 hours of sunlight every year on Jan 21st.

I first ported the code from the [NOAA Solar Position Calculator](http://www.esrl.noaa.gov/gmd/grad/solcalc/azel.html) into a .NET Library, which I then used to create the custom Rhino command. The command calculates the exposure on a collection of windows, which are provided as Rhino surfaces. Shading masses are also provided as BRep objects. Each window is then colored depending on whether it meets the exposure required by the building code.

I later ported this tool into a custom [grasshopper component](http://www.ericanastas.com/solar-position-ghx-component/ "Solar Position Grasshopper Component").

![](2012-04-11_220400.png)

![China Shading 1](China-Shading-1.png)

![China Shading 2](http://www.ericanastas.com/wp-content/uploads/2010/03/China-Shading-2.png)