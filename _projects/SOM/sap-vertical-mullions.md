---
title: Sichuan Aviation Plaza Vertical Mullion Family
summary: placeholder summary
tags: ["C#.Net", "Revit", "Revit API", "Revit Conceptual Massing", "Sichuan Aviation Plaza"]
date: "2011-10-20"
---

The massing for the [Sichuan Aviation Plaza](http://www.ericanastas.com/category/portfolio/som/projects-som/aviation-plaza/) project consisted many of vertical pleats, of which the fold angle varied over the height of the building. This changing fold angle meant that the profiles of the mullions between pleats also needed to vary, and could not be built as a simple extrusions inside the panel families.

I was able to create a working vertical mullion family using a six point adaptive component. Three adaptive points at the top and bottom of the family specify the position, angle, and rotation of the mullion profile.

\[caption id="attachment_826" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0021_image044-636x422.png "Vertical Mullion Family")](slide0021_image044.png) Vertical Mullion Family\[/caption\]

Creating a Revit family that is this flexible and complex required a lot of math. The image below shows all the formulas I used to create the family.

\[caption id="attachment_829" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0021_image040-636x457.png "slide0021_image040")](slide0021_image040.png) Vertical Mullion Family Formulas\[/caption\]

Here is a video showing the profile of the vertical mullion family being adjusted by moving the adaptive points.

Below is an image of the vertical mullion model. The mullions were placed automatically using the [enclosure generation script](http://www.ericanastas.com/sap-enclosure/) I developed using the Revit API.

\[caption id="attachment_825" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0029_image053-636x422.png "slide0029_image053")](slide0029_image053.png) Vertical Mullion Model\[/caption\]

\[caption id="attachment_824" align="alignnone" width="458"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0019_image032.png "slide0019_image032")](slide0019_image032.png) Vertical Mullion Model\[/caption\]

\[caption id="attachment_828" align="alignnone" width="618"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0019_image034.png "slide0019_image034")](slide0019_image034.png) Vertical Mullion Model Close Up\[/caption\]
