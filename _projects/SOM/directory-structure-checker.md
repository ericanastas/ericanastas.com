---
title: Directory Structure Checker
summary: placeholder summary
coverImage: /images/som/directory-structure-checker/MISSING_COVER
tags: ["C#.Net", "WPF"]
date: "2014-09-23"
draft: true
---

Directory Structure Checker is a utility I wrote which validates an existing directory and file structure against a predefined standard. Standard structures are defined as a simple text file using a syntax that I developed. The syntax uses various types of wildcards to allow for valid variations in actual directories. The tool can then compare a standard structure against one or more selected root directories. Files or folders that violate the standard are highlighted in red.