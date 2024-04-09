---
title: Network File Checker
summary: placeholder summary
tags:
    - C#.Net
    - WPF
categories:
    - portfolio
    - Skidmore, Owings &amp; Merrill
date: "2014-10-07"
---

Network File Checker is a utility which I developed that can be used to verify the existence and version of a file on many remote computers on the network. This can be be used to batch verify the installation of software, add-ins, or updates on many computers at once.

The share and path of the file to check are specified as well as the expected file size, version, and MD5 hash of the file if it is found.

[![Network File Checker Settings](Network-File-Checker-Settings.png)](http://www.ericanastas.com/wp-content/uploads/2014/09/Network-File-Checker-Settings.png)

The names of computers to check are then added. These can be entered directly into the tool, or imported from a text file.

![AddComputerGrid](AddComputerGrid.png)

Next the check is run, and the existence and version of the specified file is verified on all the computers. Computers that are not found, files that are missing, or files that do not match the expected values are identified.

[![Network File Checker](http://www.ericanastas.com/wp-content/uploads/2014/09/Network-File-Checker-636x483.png)](Network-File-Checker.png)

The results of the check can then be exported to an Excel file.

[![ExportExcel](http://www.ericanastas.com/wp-content/uploads/2014/09/ExportExcel-636x662.png)](ExportExcel.png)
