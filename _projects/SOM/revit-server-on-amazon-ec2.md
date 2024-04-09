---
title: Revit Server on Amazon EC2
summary: placeholder summary
coverImage: /images/som/revit-server-on-amazon-ec2/MISSING_COVER
tags: ["Amazon Web Services", "Cloud", "Revit", "Revit Server"]
date: "2012-03-01"
draft: true
---

Revit server allows multiple people to collaborate on a single Revit model, but unlike standard file based worksharing Revit server runs over TCP on a real web server. One major potential befit of running on a web server is people accessing Revit server do not have to be on the same network, at the same office, or even work at the same company. If a publicly accessible instance of Revit server is setup then people at different companies working on the same project may all connect to the server directly rather then sharing files separately over FTP.

Unfortunately Revit Server does not have any way to restrict access, and consequently our IT department was not comfortable providing public access to the internal Revit server. Instead I was able to setup Revit Server in "the cloud" on an [Amazon EC2](http://aws.amazon.com/ec2/) virtual machine. The screen shot above shows the admin panel of Revit server running on my Amazon EC2 instance.
