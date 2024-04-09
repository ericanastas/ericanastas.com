---
title: Denver VA Medical Center Revit Plug-in
summary: placeholder summary
tags: ["C#.Net", "Revit", "Revit API", "SQL", "WinForms", "Denver VA Medical Center"]
date: "2011-10-26"
---

The Denver VA Medical Center project is a very large medical campus designed by the SOM Chicago office. The VA had very strict program requirements for the project that needed to be tracked and compared to the actual design models. I helped develop a custom system for tracking and verifying the program requirements with the design model. The system was centered around a Microsoft SQL database, which stored all the program information as well as actual design values exported from the Revit model. A colleague of mine created an MS Access based front end to the SQL database, which allowed users to manipulate the project program, and generate various reports. On the Revit model side I created a custom Revit plug-in which synchronized room, door, and equipment data with the central database.

\[caption id="attachment_1704" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/dvamc-flow-chart.jpg "dvamc flow chart")](dvamc-flow-chart.png) Overview flowchart\[/caption\]

Below is a screen shot of the main window of my application. The top list shows rooms from the currently opened Revit model, and the bottom list shows all the program rooms in the central database. Here each rooms from the actual design model could be associated or linked with a specific program room.

\[caption id="attachment_859" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2012/04/dvamc-0.4_2_2.jpg "dvamc 0.4_2_2")](dvamc-0.4_2_2.jpg) Main Window\[/caption\]

Program rooms could therefore be in one of three states shown in the screen shot below. Rooms could be un-linked, link to a model room, or a link could be broken because the previously linked room was deleted from the Revit model.

\[caption id="" align="alignnone" width="675"\][![](http://www.ericanastas.com/wp-content/uploads/2012/04/db-room-status.jpg "Link status")](db-room-status.jpg) Link status\[/caption\]

Various properties of the rooms could be viewed and edited through my plug-in. These values were displayed alongside values from the program so they could be easily compared to one another.

\[caption id="" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2012/04/dvamc-0.4_2.jpg "dvamc 0.4_2")](dvamc-0.4_2.jpg) Room properties\[/caption\]

Given the size of the project, there were a very large number of rooms to deal with. To prevent the room list from overwhelming the users I added the ability to filter the list by the properties of the rooms. Thus allowing the list to be easily reduced to a specific level and/or department of interest.

\[caption id="" align="alignnone" width="570"\][![](http://www.ericanastas.com/wp-content/uploads/2012/04/dvamc-filters.jpg "dvamc filters")](dvamc-filters.jpg) Room filters\[/caption\]

Once rooms in the SQL database and Revit models were linked to one another their properties could then be synchronized. Different properties were synchronized in different directions. Sometimes the Revit model was the source, as with actual room areas. With other properties, such as the room names, the program database took precedence. [This pdf](http://www.ericanastas.com/?attachment_id=856) shows all the parameters and how they were synchronized.

\[caption id="attachment_1705" align="alignnone" width="636"\][![](http://www.ericanastas.com/wp-content/uploads/2011/10/dvamc-sync.jpg "dvamc sync")](dvamc-sync.png) Synchronizing room properties\[/caption\]

Finally, here is a demo video of my plug-in in use.
