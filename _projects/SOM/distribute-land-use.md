---
title: Distribute Land Use
summary: placeholder summary
coverImage: /images/som/distribute-land-use/MISSING_COVER
tags: ["C#.Net", "Master Planning", "Rhino", "Rhino API"]
date: "2015-04-21"
---

I created this Rhino add-in for the SOM Planning department as a way to quickly generate diagrams of different distributions of land use. The tool randomly distributes blocks into specific land use types, based on a desired ratio of land uses per each zone of a project. First a site plan is created with all the blocks assigned to zone layers.

![dist land use 1](dist-land-use-1.png)

Next an excel file is create which defines the desired distribution of land use types per each zone.

![dist land use types](http://www.ericanastas.com/wp-content/uploads/2015/04/dist-land-use-types.png)

The tool then creates child layers in the Rhino model for each land use type, and randomly distributes the blocks into these layers based on the desired ratios.

![dist land use 2](dist-land-use-2.png)

The actual distribution of land use can then be exported to an Excel file which can then be compared to the original desired values.

![dist land use report](dist-land-use-report.png)
