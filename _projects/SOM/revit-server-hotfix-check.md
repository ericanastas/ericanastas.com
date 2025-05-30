---
title: Revit Server Hotfix Check
summary: Revit add-in that reports when a user opens Revit with out a critical hotfix installed
coverImage: /images/som/revit-server-hotfix-check/Revit-Server-Hotfix-Check.png
skills: ["AWS", "C#", "Revit", "Revit API"]
date: "2014-06-18"
repo: https://github.com/ericanastas/revit-server-hot-fix-check
---

The original release of Revit 2014 had a critical issue where syncing to a model on Revit server would randomly lock up. This not only resulted in the user syncing loosing their work, but also prevented anyone else from working in the model. Forcing Revit to close through the windows task manager would also orphan the user's lock on the model, and would require someone with direct access to the server to clear it.

Autodesk resolved this issue with a hotfix, but tracking down all the users missing the hot-fix proved difficult. In response to this I developed a Revit add-in which checks for the existence of the hotfix when Revit 2014 is started. If the hotfix is not found the user is prompted, and a notification email is set to the the IT group.
