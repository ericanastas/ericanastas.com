---
title: Ellipse Rationalizer
summary: Grasshopper definition that rationalizes an ellipse as a number of arcs for constructability
coverImage: /images/som/ellipse-rationalizer/elipse-rationalizer.png
skills: ["Galapagos", "Grasshopper", "Rhino"]
date: "2011-08-25"
project: ["350 Mission St", "Poly Dawangjing Complex"]
---

This Grasshopper definition can be used to rationalize a true ellipse into a series of equal length tangent arcs or straight line segments. I used the Galapagos evolutionary solver component to perform the final rationalization, which you can see in action in the demo video below. While the generated geometry never exactly matches the desired true ellipse it is, however, always made up of perfectly equal length arcs or line segments. This was very important to the projects that used the tool, as it ensured the modularity of their design.

In addition, here is a video of one of the initial versions of this definition. This version was not as flexible as it did not allow the user to easily choose the number of arcs or facets to use.
