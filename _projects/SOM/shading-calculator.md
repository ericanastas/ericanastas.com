---
title: China Shading Calculator
summary: Rhino command that calculates the shading of existing residential units by new construction
coverImage: /images/som/shading-calculator/China-Shading-1.png
skills:
  ["Design Analysis", "C#", "Grasshopper", "Rhino", "Rhino API", "3D Modeling"]
date: "2010-03-15"
---

I developed this custom Rhino command to perform shading studies for a number of Chinese projects. There are specific building codes in areas of China which restrict how new construction can shade existing residential buildings. All residential units must be allowed to receive at least 2 hours of sunlight every year on Jan 21st.

I first ported the code from the [NOAA Solar Position Calculator](http://www.esrl.noaa.gov/gmd/grad/solcalc/azel.html) into a .NET Library, which I then used to create the custom Rhino command. The command calculates the exposure on a collection of windows, which are provided as Rhino surfaces. Shading masses are also provided as BRep objects. Each window is then colored depending on whether it meets the exposure required by the building code.

I later ported this tool into a custom [grasshopper component](/projects/som/ghx-solar-position).

![](/images/som/shading-calculator/2012-04-11_220400.png)

![](/images/som/shading-calculator/2012-04-11_220202.png)

![](/images/som/shading-calculator/China-Shading-2.png)
