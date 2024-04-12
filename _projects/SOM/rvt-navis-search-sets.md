---
title: Revit Model Navisworks Search Sets
summary: placeholder summary
coverImage: /images/som/rvt-navis-search-sets/Profiler-Colors.png
tags: ["3D Coordination", "Navisworks", "NavisWorks Clash Detective"]
date: "2013-03-29"
---

When using Navisworks to coordinate a building design, search sets can be used to subdivide the model into separate parts. Search sets are based off the properties of the model elements, and as a result are often unique per each project. In order to eliminate this extra work, I developed a set of standard search sets that will work with any Revit model. These were designed to be both comprehensive, and only based of properties intrinsic of all Revit models. This means they can be used with any Revit model regardless of the specific parameters or type names used.

Furthermore, by using the generate clash tests feature of my [Navisworks Power Tools](/projects/som/navisworks-power-tools) plug-in, a coordination can be setup for any Revit model in a matter of minutes with out any configuration by the user.

- Architectural Walls
- Architectural Walls (Interior)
- Architectural Walls (Core-Shaft)
- Architectural Walls (Exterior)
- Architectural Walls (Rated)
- Architectural Walls (Not Rated)
- Wall Sweeps
- Architectural Floors
- Architectural Columns
- Curtain Wall
- Furniture & Casework
- Doors & Windows
- Ceilings
- Roofs
- Stairs
- Ramps
- Railings
- Specialty Equipment
- Structural Walls
- Structural Floors
- Structural Framing
- Structural Framing (Steel)
- Structural Framing (Concrete)
- Structural Framing (Precast Concrete)
- Structural Framing (Wood)
- Structural Framing (Other)
- Structural Foundations
- Mechanical Equipment
- Ducts
- Ducts (Return Air)
- Ducts (Supply Air)
- Ducts (Exhast Air)
- Ducts (Undefined System)
- Pipes
- Plumbing Fixtures
- Pipes
- Pipes (Domestic Water)
- Pipes (Domestic Cold Water)
- Pipes (Domestic Hot Water)
- Pipes (Vent)
- Pipes (Sanitary)
- Pipes (Fire Protection)
- Pipes (Hydronic)
- Pipes (Hydronic Supply)
- Pipes (Hydronic Return)
- Pipes (Other)
- Pipes (Undefined System)
- Electrical Equipment
- Electrical Fixtures
- Lighting Fixtures
- Cable Tray
- Conduit
- Electrical Devices
- Electrical Devices (Lighting)
- Electrical Devices (Nurse Call)
- Electrical Devices (Security)
- Electrical Devices (Telephone)
- Electrical Devices (Communication)
- Electrical Devices (Data)
- Electrical Devices (Fire Alarm)
- Site
- Topography
- Planting
- Generic Models
- Mass

Navisworks also includes a tool called the Appearance Profiler, which can automatically color a model by search sets. Thus I was also able to create a standard appearance profiler definition which could be used to color any Revit model in Navisworks by the search sets above.

![Apperance profielr](/images/som/rvt-navis-search-sets/Apperance-profielr.png)

The images below show an example of a model before and after the appearance profiler definition is applied.

![Default Colors](/images/som/rvt-navis-search-sets/Default-Colors.png)

![Profiler Colors](/images/som/rvt-navis-search-sets/Profiler-Colors.png)
