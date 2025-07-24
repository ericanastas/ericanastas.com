---
title: Link Position
summary: Revit add-In that exports details about all the link instances in the active model to an Excel report.
coverImage: /images/som/link-position/Geometry-Summary.png
skills: ["Revit", "Revit API", "C#"]
date: "2017-08-02"
repo: https://github.com/ericanastas/link-position
---

The Link Position Add-In for Autodesk Revit exports details about all the Revit link instances in the active model to an Excel report.

[Sample XLSX Report](/images/som/link-position/sample.xlsx)


## Link Type Properties

The first set of columns in the report include information about the link type. These values are duplicates for links that are placed as multiple instances.

![Link Type Properties](/images/som/link-position/Link-Type-Properties.png)

**Link:** The Name of the link

**Path:** Saved path to the link

**Path Type:** Absolute, Relative, or Server

**Room Bounding:** Is the link set to bound rooms

**Attachment Type:** Attachment or Overlay

**Workset:** The workset of the link type

**Workset Open:** Is the link type workset open

**Workset Visible by Default:** Is the link type workset visible by default.

**Workset Owner:** The current owner of the link type workset

**Creator:** The creator of the link type

**Owner:** The owner of the link type

**Last Changed By:** The last user to change the link type

**Loaded:** Is the link currently loaded	

**Has Unsaved Locations:** Have instances of the link been moved, but not saved back to the source model?

## Link Instance Properties

The next set of columns report on the properties of each individual link instance.

![Link Instance Properties](/images/som/link-position/Link-Instance-Properties.png)

**Id:** The element ID of the link instance

**Name:** The name of the link instance

**Workset:** The workset of the link instance

**Workset Open:** Is the link instance workset open

**Workset Visible by Default:** Is the link instance workset visible by default.

**Workset Owner:** The current owner of the link instance workset

**Creator:** The creator of the link instance

**Owner:** The owner of the link instance

**Last Changed By:** The last user to change the link instance

**Design Option:** The design option of the link instance

**Shared Site:** Share site of the link instance, or <Not Shared> if not linked by shared coordinates.

**Pinned:** Is the link instance pinned



## Geometric Relationships

The remaining columns report the geometric relationships between the various origins of the current model, and each linked model instance.

The example model below is used the the following sections to explain each exported value. This model is linked to another model by shared coordinates. Both models have their project base point moved (unclipped)  off the startup point/internal origin.

![Sample Model Origins Diagram](/images/som/link-position/Origins.png)

### Orientation

**Rotation:** The rotation of the internal coordinates of the link instance relative to the internal coordinates of the active model.

**Angle to True North:** The angle between the project north of the linked model, and true north in the active model.

![Orientation Properties](/images/som/link-position/Orientation-Properties.png)

![Orientation Diagram](/images/som/link-position/Orientation.png)

### Startup Point (Project Coordinates)

The location of the startup point of the linked model relative to the startup point of the active model.  This will be 0,0,0 when a model is linked origin to origin.

![Startup Point (Project Coordinates) Properties](/images/som/link-position/Startup-Point-Project-Coordinates-Properties.png)

![Startup Point (Project Coordinates) Diagram](/images/som/link-position/Startup-Point-Project-Coordinates.png)

### Startup Point (Shared Coordinates)

The location of the startup point of the linked model relative to the survey point.

![Startup Point (Shared Coordinates) Properties](/images/som/link-position/Startup-Point-Shared-Coordinates-Properties.png)

![Startup Point (Shared Coordinates) Diagram](/images/som/link-position/Startup-Point-Shared-Coordinates.png)

### Project Base Point (Project Coordinates)

The location of the project base point of the linked model relative to the startup point of the active model. 

![Project Base Point (Project Coordinates) Properites](/images/som/link-position/Project-Base-Point-Project-Coordinates-Properties.png)

![Project Base Point (Project Coordinates) Diagram](/images/som/link-position/Project-Base-Point-Project-Coordinates.png)

### Project Base Point (Shared Coordinates)

The location of the project base point of the linked model relative to the survey point of the active model.

![Project Base Point (Shared Coordinates) Properties](/images/som/link-position/Project-Base-Point-Shared-Coordinates-Properties.png)

![Project Base Point (Shared Coordinates) Diagram](/images/som/link-position/Project-Base-Point-Shared-Coordinates.png)



### Project Base Point Shift

How much the project base point has been shifted (unclipped) from the startup point.

![Project Base Point Shift](/images/som/link-position/Project-Base-Point-Shift-Properties.png)

![Project Base Point Shift Diagram](/images/som/link-position/Project-Base-Point-Shift.png)

### Summary of Geometric Properties

![Geometry Properties](/images/som/link-position/Link-Position-Properties.png)

![Geometry Summary Diagram](/images/som/link-position/Geometry-Summary.png)

