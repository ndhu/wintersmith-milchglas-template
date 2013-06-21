---
title: Milchglas - a custom Wintersmith template
abstract: A custom Wintersmith template that is compatible with Version 2.0.* of Wintersmith.
description: A custom template for Wintersmith, a cool, simple and flexible static site generator. Template features paging, tags, archives (timeline), related post, mobile approach. source on GitHub.
author: Andy Hulstkamp
date: 2013-06-20
template: article.jade
tags: tools, wintersmith, jade
type: post
status: published
---

I created a new custom [Wintersmith](http://wintersmith.io/) template called _Milchglas_ for this site (Wintersmith is a great and flexible static site generator, which I use for this blog)

The new template is based on my previous [_Snowboot_ - template](/articles/wintersmith-blog/) but is compatible with Wintersmith version 2.0.*. It
has some additional features like paging on article pages, further readings, a tag- and timebased index and pays more attention to SEO-stuff and page speed.

<span class="more"></span>

Using Wintersmith and optimized _Milchglas_ this site scores

+ ~ 97 out of 100 on _Make the Web Faster's_ - [GooglePage Speed](https://developers.google.com/speed/pagespeed/).
Note that some adjustments like caching, compression, charsets must be set on your server (for example in .htaccess, if you're site is on Apache).
[HTML5-Bolierplate](https://github.com/h5bp/html5-boilerplate/blob/master/.htaccess) has some handy configuration blocks you might want to use for that.
Sacrificing image scaling to target multiple resolution would give you another 3 points to get 100 out of 100.
+ ~ 98% on [SEO-Doctor](https://addons.mozilla.org/de/firefox/addon/seo-doctor/)

Since the whole thing is, well, static and lean, it loads quite fast on mobile devices.

This template uses some [lovely SVG-Icons licensed from ikonome](http://ikono.me/category/icons/)<sup>1</sup> and nice and clean [pure-css](http://purecss.io) to base its styles on.
A little template-scripting provides the additional features and a couple of media-queries make it (hopefully) adapt well to mobile devices (this still needs testing though).


<div class="note">
    __NOTE__

    Read my post on <a href="/articles/wintersmith-blog/">how to customize a Wintersmith based blog</a>, if you want further information on how to customize the template.
    The notes provided there still apply.
</div>

<div class="button-holder one">
    <a href="https://github.com/ndhu/wintersmith-milchglas-template" class="button github">GitHub</a>
</div>

<span class="footnote">
<sup>1</sup> due to licensing terms I'm not allowed to include the icons on GitHub.
</span>
