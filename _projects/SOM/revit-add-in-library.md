---
title: Revit Add-In Library
summary: placeholder summary
tags:
    - C#.Net
    - Revit
    - Revit API
    - WPF
    - XML
date: "2014-01-27"
---

Revit Add-In Library is a suite of tools I developed that can be used to package, version, and distribute Revit add-ins to users. In concept it is similar to the Autodesk App Exchange, or the Apple App Store. It consists of two applications an installer tool used by users to install add-ins from a central library, and a library manager used by developers to manage and add content to a library of add-ins.

The library manager tool is shown in the screen shot below. Each add-in is identified by a "package code" similar to Java applications. A library can contain multiple versions of each add-in, each of which is identified by a unique version number.

[![libmanager](http://www.ericanastas.com/wp-content/uploads/2014/06/libmanager-636x477.png)](RvtAddInLibUtil.png)

The manager tool includes a wizard for adding new packages to the library. This interface walks a developer through the process of entering the metadata for a new package, as well as selecting the add-in files to include.

[![packageinfo](packageinfo.png)](http://www.ericanastas.com/wp-content/uploads/2014/06/packageinfo.png)

Each package in an add-in library is given a status of published, unpublished, or suspended. By default packages are set to unpublished, and thus are also not visible to users by default. User's can, however, explicitly choose to display unpublished versions in the installer tool. In contrast, published packages are visible to all users. Package versions that have major bugs, or the potential to corrupt data can be set to the suspended status. Suspended packages will not be displayed to users, and will automatically be uninstalled by the update process.

[![setstatus](http://www.ericanastas.com/wp-content/uploads/2014/06/setstatus-636x498.png)](setstatus.png)

Regular users can use the installer tool, shown below, to install add-ins from a library. This tool displays all the add-ins avaible for each release of Revit installed on the current computer. The description of each add-in, the changes made in each version, and other data are displayed when an add-in is selected from the list.

[![Revit Add-In Installer](http://www.ericanastas.com/wp-content/uploads/2014/06/Revit-Add-In-Installer-636x438.png)](Revit-Add-In-Installer.png)

A list of required add-ins can also be configured in a central location for all users. Users are prevented from uninstall these required add-ins, and they are also installed automatically by the update process.

[![Revit Add-In Library Required](http://www.ericanastas.com/wp-content/uploads/2014/06/Revit-Add-In-Library-Required-636x491.png)](Revit-Add-In-Library-Required.png)

In addition to the GUI tools above I also created a command line utility that can be used to manage the content of an add-in library, as well as the add-ins installed on a user's computer.

[![RvtAddInLibUtil](http://www.ericanastas.com/wp-content/uploads/2014/06/RvtAddInLibUtil-636x321.png)](setstatus.png)
