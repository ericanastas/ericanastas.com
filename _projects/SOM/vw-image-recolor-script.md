---
title: Virtual Wind Image Recoloring Script
summary: Python script to recolor analysis images generated from Virtual Wind to indicate a single wind speed threshold
coverImage: /images/som/vw-image-recolor-script/vw-script.png
skills: ["Design Analysis", "Python"]
date: "2011-08-10"
project:
  ["Park Merced Master Plan", "Treasure Island Master Plan", "Design Analysis"]
---

Virtual Wind, a wind analysis software, is able to export images with color coded arrows which designate the wind speed. However, the actual range of wind speeds that the arrow colors represent are dependent on the range of wind speeds visible in each image. Thus the color scales from two images from different view points of the same model will not necessarily correspond with one another.

To remedy this problem I created a Python script to recolor images exported from Virtual Wind so that arrows above a single specified threshold wind speed are colored one specific hue, and the remaining arrows below the threshold wind speed are recolored using a new hue gradient.

For example here is an original source image generated with virtual wind.

![](/images/som/vw-image-recolor-script/recolor.jpg)

And here is the result of the script set to a threshold wind speed of 4 m/s.

![](/images/som/vw-image-recolor-script/recolor_recolored.png)
