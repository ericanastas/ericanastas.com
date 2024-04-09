---
title: Virtual Wind Image Recoloring Script
summary: placeholder summary
tags:
  - Analysis
  - Python

categories:
  - - som
    - Park Merced Master Plan
    - Treasure Island Master Plan
date: "2011-08-10"
---

Virtual Wind, a wind analysis software, is able to export images with color coded arrows which designate the wind speed. However, the actual range of wind speeds that the arrow colors represent are dependent on the range of wind speeds visible in each image. Thus the color scales from two images from different view points of the same model will not necessarily correspond with one another.

To remedy this problem I created a Python script to recolor images exported from Virtual Wind so that arrows above a single specified threshold wind speed are colored one specific hue, and the remaining arrows below the threshold wind speed are recolored using a new hue gradient.

For example here is an original source image generated with virtual wind.

[![](http://www.ericanastas.com/wp-content/uploads/2012/04/recolor-636x484.jpg "recolor")](recolor.jpg)

And here is the result of the script set to a threshold windspeed of 4 m/s.

[![](http://www.ericanastas.com/wp-content/uploads/2012/04/recolor_recolored-636x484.png "recolor_recolored")](recolor_recolored.png)
