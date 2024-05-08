---
title: Distribute Land Use
summary: Rhino plug-in created to automatically create different land use distribution options.
coverImage: /images/som/distribute-land-use/dist-land-use-1.png
tags: ["C#.Net", "Master Planning", "Rhino", "Rhino API"]
date: "2015-04-21"
repo: https://github.com/ericanastas/distribute-land-use
---

I created this Rhino add-in for the SOM Planning department as a way to quickly generate diagrams of different distributions of land use. The tool randomly distributes blocks into specific land use types, based on a desired ratio of land uses per each zone of a project. First a site plan is created with all the blocks assigned to zone layers.

![dist land use 1](/images/som/distribute-land-use/dist-land-use-1.png)

Next an excel file is create which defines the desired distribution of land use types per each zone.

![dist land use types](/images/som/distribute-land-use//dist-land-use-types.png)

The tool then creates child layers in the Rhino model for each land use type, and randomly distributes the blocks into these layers based on the desired ratios.

![dist land use 2](/images/som/distribute-land-use/dist-land-use-2.png)

The actual distribution of land use can then be exported to an Excel file which can then be compared to the original desired values.

![dist land use report](/images/som/distribute-land-use/dist-land-use-report.png)
