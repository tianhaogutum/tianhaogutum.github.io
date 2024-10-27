---
layout: page
title: project 1
description: with background image
img: assets/img/12.jpg
importance: 1
category: work
related_publications: true
---

## iLabX - The Virtual Internet Laboratory  
**Discover how the Internet works and create your own virtual Internet from scratch**

### Overview of the iLabX Course

The Internet connects nearly everything we rely on today. In the iLabX course, I delved into the mechanisms powering the Internet, learned essential protocols, and gained hands-on experience building a fully functional Internet environment within a virtual lab.

### Course Structure & Content

This self-paced course allowed me to structure my own study schedule, allocating 4-6 hours per module across six comprehensive parts:

- **Signals and Cables**: Explored physical transmission mediums (twisted pairs, optical fiber), signal encoding, and data transmission fundamentals.
- **Internet Protocol (IP)**: Learned about IPv4 and IPv6, subnetting, routing protocols, and IP address configurations.
- **Routing**: Mastered dynamic routing, Autonomous Systems, and the algorithms (Dijkstra, Bellman-Ford) that guide data paths.
- **Transmission Control Protocol (TCP) and UDP**: Examined data reliability, congestion control, and the stateful communication mechanisms of TCP/UDP.
- **Domain Name System (DNS) and Web Servers**: Set up a DNS, configured a web server, and secured the server with HTTPS protocols.
- **NAT, DNS64/NAT64, and Firewalls**: Applied Network Address Translation, configured NAT64 and DNS64, and implemented firewall rules for network security.

### Hands-On Experience

Using a virtual Internet laboratory, I set up actual Internet protocols to establish my own simulated Internet environment. This allowed me to apply real-world Internet mechanics, from signal encoding to web server configuration and beyond. The course’s interactive elements, including practical exercises and projects, allowed me to gain functional knowledge on topics such as IP forwarding, DNS zone configuration, and firewall management.

### iLabX Highlights

- **Interactive Laboratory**: Built a virtual Internet environment with real tools used in industry.
- **Flexible Learning**: Tailored learning experience with videos, written content, and practical tasks to reinforce each topic.
- **Expert Insights**: Included a feature interview with Vint Cerf, co-inventor of the Internet, discussing the network’s origins and future.

For more details, visit our [Twitter](https://twitter.com/), [YouTube](https://youtube.com/), or [Blog](https://ilabx.blog). Those interested in future updates can subscribe by emailing [ilabx@ilabxp.com](mailto:ilabx@ilabxp.com).
To give your project a background in the portfolio page, just add the img tag to the front matter like so:

    ---
    layout: page
    title: project
    description: a project with a background image
    img: /assets/img/12.jpg
    ---

<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/1.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/3.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    Caption photos easily. On the left, a road goes through a tunnel. Middle, leaves artistically fall in a hipster photoshoot. Right, in another hipster photoshoot, a lumberjack grasps a handful of pine needles.
</div>
<div class="row">
    <div class="col-sm mt-3 mt-md-0">
        {% include figure.liquid loading="eager" path="assets/img/5.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    This image can also have a caption. It's like magic.
</div>

You can also put regular text between your rows of images, even citations {% cite einstein1950meaning %}.
Say you wanted to write a bit about your project before you posted the rest of the images.
You describe how you toiled, sweated, _bled_ for your project, and then... you reveal its glory in the next row of images.

<div class="row justify-content-sm-center">
    <div class="col-sm-8 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
    <div class="col-sm-4 mt-3 mt-md-0">
        {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
    </div>
</div>
<div class="caption">
    You can also have artistically styled 2/3 + 1/3 images, like these.
</div>

The code is simple.
Just wrap your images with `<div class="col-sm">` and place them inside `<div class="row">` (read more about the <a href="https://getbootstrap.com/docs/4.4/layout/grid/">Bootstrap Grid</a> system).
To make images responsive, add `img-fluid` class to each; for rounded corners and shadows use `rounded` and `z-depth-1` classes.
Here's the code for the last row of images above:

{% raw %}

```html
<div class="row justify-content-sm-center">
  <div class="col-sm-8 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/6.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
  <div class="col-sm-4 mt-3 mt-md-0">
    {% include figure.liquid path="assets/img/11.jpg" title="example image" class="img-fluid rounded z-depth-1" %}
  </div>
</div>
```

{% endraw %}
