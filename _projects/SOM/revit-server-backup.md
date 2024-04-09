---
title: Revit Server Backup
summary: placeholder summary
tags: ["C#.Net", "REST", "Revit", "Revit API", "Revit Server", "Revit Server API"]
date: "2013-09-09"
---

Revit Server Backup is a utility I created for creating backups of models hosted on Revit server. Revit Server does not store models as standard RVT files, which means if there is a problem with a sever there is also no way to access the model files. This tool automates the process of saving RVT copies of the models hosted on a Revit server to a predetermined destination.

The tool can be setup as a regularly scheduled task to automatically create backups on a regular interval. It also includes logic to purge old backups using a staggered logic. For example one option would be to set it up to keep the hourly backups for the last day, daily backups for the last week, and monthly backups indefinitely. All backups and backup failures are logged, and email and SMS notifications can also be configured to notify staff when a backup has failed.

In addition to creating backups the tool has also been used as part of a system for sharing models. Models hosted on Revit server are generally inaccessible to other scripts and tools. The backup tool thus can be used to extract an RVT copy of a model to a location that other processes can access in order to push the model to other file sharing services such as Box or Newforma.
