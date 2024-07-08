---
title: Informa Master Planning Revit Plug-in
summary: Revit add-in that allow Revit to be used as a master planning and reporting tool
coverImage: /images/som/informa-revit/Informa-Revit-Massing.jpg
skills:
  [
    "MS Access",
    "C#",
    "Master Planning",
    "Revit",
    "Revit API",
    "SQL",
    "Design Analysis",
  ]
date: "2009-02-19"
---

Informa is a suite of tools which I created for using Revit as a master planning tool. A diagram of the overall workflow is shown below. A Revit model is creating using conceptual masses and mass floors representing many buildings. The data of this model is then exported to an Access database using the built in ODBC export in Revit. Next a number of custom queries in Access process the raw exported information into any number of desired printed reports.

![](/images/som/informa-revit/Informa-workflow.png)

Creating a valid Revit model for this tool was initially very tedious. First Revit has no default notion of a building or block, so this information had to be prefixed to all the level names. Second every level for every building had to be created individually by the users.

![](/images/som/informa-revit/Informa-Revit-Naming.png)

In response to the inefficiency of creating these massing models I developed a custom Revit add-in that automates the generation of levels in the Revit model. A user could then select a building mass, enter the floor to floor height, and the levels with the correct names would be generated automatically. Later if the height of the building mass changed the levels could also be updated automatically to reflect the new height. The demo video below shows this plug-in being used.

The flow chart below shows the queries used to process the raw data from the models into the final reports.

![](/images/som/informa-revit/Informa-dataflow.png)

Here is a sample of one of the generated reports.

![](/images/som/informa-revit/Informa-Sample-Report.png)
