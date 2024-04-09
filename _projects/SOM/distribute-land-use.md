---
title: Distribute Land Use
summary: placeholder summary
tags:
  - C#.Net
  - Master Planning
  - Rhino
  - Rhino API

categories:
    - portfolio
    - Skidmore, Owings &amp; Merrill
date: "2015-04-21"
---

I created this Rhino add-in for the SOM Planning department as a way to quickly generate diagrams of different distributions of land use. The tool randomly distributes blocks into specific land use types, based on a desired ratio of land uses per each zone of a project. First a site plan is created with all the blocks assigned to zone layers.

\[caption id="attachment_2690" align="alignnone" width="636"\][![dist land use 1](http://www.ericanastas.com/wp-content/uploads/2015/04/dist-land-use-1-636x318.png)](dist-land-use-1.png) Site drawing\[/caption\]

Next an excel file is create which defines the desired distribution of land use types per each zone.

\[caption id="attachment_2689" align="alignnone" width="553"\][![dist land use types](dist-land-use-types.png)](http://www.ericanastas.com/wp-content/uploads/2015/04/dist-land-use-types.png) Desired Land Use Distribution\[/caption\]

The tool then creates child layers in the Rhino model for each land use type, and randomly distributes the blocks into these layers based on the desired ratios.

\[caption id="attachment_2687" align="alignnone" width="636"\][![dist land use 2](http://www.ericanastas.com/wp-content/uploads/2015/04/dist-land-use-2-636x316.png)](dist-land-use-2.png) Distributed Land Use\[/caption\]

The actual distribution of land use can then be exported to an Excel file which can then be compared to the original desired values.

\[caption id="attachment_2688" align="alignnone" width="636"\][![dist land use report](http://www.ericanastas.com/wp-content/uploads/2015/04/dist-land-use-report-636x456.png)](dist-land-use-report.png) Actual Land Use Distribution\[/caption\]
