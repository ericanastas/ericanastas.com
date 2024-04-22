---
title: Activity Log
summary: placeholder summary
coverImage: /images/som/activity-log/Revit-Activity-Log-3.png
tags: ["Revit", "Revit API", "SQL", "Elasticsearch", "Kibana"]
date: "2013-10-15"
repo: https://github.com/ericanastas/activity-log
---

The Revit Activity Log add-in records user's Revit activity to a central SQL database. This includes when Revit is being used, files are opened, and local files are synchronization to central. The resulting data collected from this tool is used to identify problem in specific models, as well as provide a broad overview of how Revit is being used in firm.

![Revit Activity Log 1](/images/som/activity-log/Revit-Activity-Log-1.png)

![Revit Activity Log 2](/images/som/activity-log/Revit-Activity-Log-2.png)

Initially this system logged data to a MS SQL database which was visualized with Tabelau. Later this was ported to Elasticsearch and Kibana.
