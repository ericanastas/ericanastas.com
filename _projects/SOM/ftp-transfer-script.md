---
title: FTP Transfer Script
summary: placeholder summary
tags:
  - FTP
  - Python
categories:
    - portfolio
    - Skidmore, Owings &amp; Merrill
date: "2011-08-04"
---

In order to facilitate the sharing of project data, I created a [Python](http://www.python.org/) script which automates the process of uploading and downloading project files to and from our company FTP server. I setup the script to be triggered nightly as a scheduled task ensuring that both people in my office as well as consultants and other parties outside the office were always working with the latest project data. If there is ever an error during the transfer, say because a file was renamed or deleted, the script will immediately send out an email notifying people of the problem.
