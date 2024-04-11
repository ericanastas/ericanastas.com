---
title: Sichuan Aviation Plaza Enclosure
summary: placeholder summary
coverImage: /images/som/sap-enclosure/slide0031_image063.png
tags: ["C#.Net", "Revit", "Revit API", "Revit Conceptual Massing", "Sichuan Aviation Plaza"]
date: "2011-10-20"
---

The enclosure of the Sichuan Aviation Plaza project consisted of a complex pleated form with many vertical folds over the surface. Initially a colleague of mine and I created the enclosure manually using surfaces imported from Rhino. These surfaces where then divided, and populated with custom adaptive component curtain panel families. This process worked, but was extremely time consuming. It took us weeks to create the entire model

The project was still in design development, so soon after completing the enclosure model, we found that the height of the building needed to change. This meant that we would also need to recreate the entire enclosure model. Worried that a major change like this could happen again I decided to investigate creating the model with a Revit API macro. This way any future changes to the design could be implemented by changing the input to the macro, rather then manual modeling.

I started by extracting the work-point coordinates from the Rhino massing model.

![](/images/som/sap-enclosure/slide0020_image046.png)

![](/images/som/sap-enclosure/slide0020_image048.png)

The script then used these work-point coordinates to create native Revit surfaces.

![](/images/som/sap-enclosure/slide0031_image059.png)

These surfaces were then automatically divided by reference planes created by the script.

![](/images/som/sap-enclosure/slide0031_image061.png)

Finally the script populated the divided surfaces with specific adaptive component curtain panels.

![](/images/som/sap-enclosure/slide0031_image063.png)

The image below shows the model populated with colored placeholder panels showing how many different types of panels were required.

![](/images/som/sap-enclosure/slide0033_image067.png)

In addition, part of my goal with this script was to create a code base that could be reused on future projects. I started out by creating a set of generic "surface" classes in .Net, which I could use to define three and four sided surfaces. These classes also included functionality to divide the resulting surface, and populate it with adaptive component panels.

![](/images/som/sap-enclosure/slide0014_image057.png)

I then used instances of these generic surface classes to generate a C# class model of the actual project. The properties of this project class contained the various geometric elements of the design including the work points coordinates, level elevations, and the resulting surfaces. I could then easily make changes to the generated building model by making changes to this .NET class.

![](/images/som/sap-enclosure/slide0034_image065.png)

The final generated enclosure model was also used to generated the project renderings. A few samples are shown below;

![](/images/som/sap-enclosure/slide0035_image001.jpg)

![](/images/som/sap-enclosure/slide0036_image003.jpg)
