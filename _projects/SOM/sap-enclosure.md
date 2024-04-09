---
title: Sichuan Aviation Plaza Enclosure
summary: placeholder summary
tags:
    - C#.Net
    - Revit
    - Revit API
    - Revit Conceptual Massing
categories:
    - som
    - Sichuan Aviation Plaza
date: "2011-10-20"
---

The enclosure of the Sichuan Aviation Plaza project consisted of a complex pleated form with many vertical folds over the surface. Initially a colleague of mine and I created the enclosure manually using surfaces imported from Rhino. These surfaces where then divided, and populated with custom adaptive component curtain panel families. This process worked, but was extremely time consuming. It took us weeks to create the entire model

The project was still in design development, so soon after completing the enclosure model, we found that the height of the building needed to change. This meant that we would also need to recreate the entire enclosure model. Worried that a major change like this could happen again I decided to investigate creating the model with a Revit API macro. This way any future changes to the design could be implemented by changing the input to the macro, rather then manual modeling.

I started by extracting the work-point coordinates from the Rhino massing model.

\[caption id="attachment_830" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0020_image046-636x453.png "Work Point Coordinates")](slide0020_image046.png) Work Point Coordinates\[/caption\]

\[caption id="attachment_831" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0020_image048-636x439.png "Work Points")](slide0020_image048.png) Work Points\[/caption\]

The script then used these work-point coordinates to create native Revit surfaces.

\[caption id="attachment_832" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0031_image059-636x422.png "Surfaces")](slide0031_image059.png) Surfaces\[/caption\]

These surfaces were then automatically divided by reference planes created by the script.

\[caption id="attachment_833" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0031_image061-636x422.png "Divided Surfaces")](slide0031_image061.png) Divided Surfaces\[/caption\]

Finally the script populated the divided surfaces with specific adaptive component curtain panels.

\[caption id="attachment_834" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0031_image063-636x422.png "slide0031_image063")](slide0031_image063.png) Adaptive Component Panels\[/caption\]

The image below shows the model populated with colored placeholder panels showing how many different types of panels were required.

\[caption id="attachment_836" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0033_image067-636x533.png "Colored Placeholder Panels")](slide0033_image067.png) Colored Placeholder Panels\[/caption\]

In addition, part of my goal with this script was to create a code base that could be reused on future projects. I started out by creating a set of generic "surface" classes in .Net, which I could use to define three and four sided surfaces. These classes also included functionality to divide the resulting surface, and populate it with adaptive component panels.

\[caption id="" align="alignnone" width="564"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0014_image057.png "Geometry Generation C# Classes")](slide0014_image057.png) Geometry Generation C# Classes\[/caption\]

I then used instances of these generic surface classes to generate a C# class model of the actual project. The properties of this project class contained the various geometric elements of the design including the work points coordinates, level elevations, and the resulting surfaces. I could then easily make changes to the generated building model by making changes to this .NET class.

\[caption id="" align="alignnone" width="442"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0034_image065.png "Sichan Aviation Plaza C# Building Model Class")](slide0034_image065.png) Sichan Aviation Plaza C# Building Model Class\[/caption\]

The final generated enclosure model was also used to generated the project renderings. A few samples are shown below;

\[caption id="attachment_841" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0035_image001-636x795.jpg "Final Rendering")](slide0035_image001.jpg) Final Rendering\[/caption\]

\[caption id="attachment_838" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/slide0036_image003-636x795.jpg "Final Rendering")](slide0036_image003.jpg) Final Rendering\[/caption\]
