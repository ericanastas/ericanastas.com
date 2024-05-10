---
title: Sichuan Aviation Plaza Vertical Mullion Family
summary: Complex adaptive component family
coverImage: /images/som/sap-vertical-mullions/slide0021_image044.png
tags: ["C#.Net", "Revit", "Revit API", "3D Modeling"]
date: "2011-10-20"
project: Sichuan Aviation Plaza
---

The massing for the Sichuan Aviation Plaza project consisted many of vertical pleats, of which the fold angle varied over the height of the building. This changing fold angle meant that the profiles of the mullions between pleats also needed to vary, and could not be built as a simple extrusions inside the panel families.

I was able to create a working vertical mullion family using a six point adaptive component. Three adaptive points at the top and bottom of the family specify the position, angle, and rotation of the mullion profile.

![](/images/som/sap-vertical-mullions/slide0021_image044.png)

Creating a Revit family that is this flexible and complex required a lot of math. The image below shows all the formulas I used to create the family.

![](/images/som/sap-vertical-mullions/slide0021_image040.png)

Here is a video showing the profile of the vertical mullion family being adjusted by moving the adaptive points.

Below is an image of the vertical mullion model. The mullions were placed automatically using the [enclosure generation script](/projects/som/sap-enclosure) I developed using the Revit API.

![](/images/som/sap-vertical-mullions/slide0029_image053.png)

![](/images/som/sap-vertical-mullions/slide0019_image032.png)

![](/images/som/sap-vertical-mullions/slide0019_image034.png)
