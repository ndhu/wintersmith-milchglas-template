# Milchglas-Template for wintersmith

custom Wintersmith template I created for my blog. [Read here for more info.](http://www.hulstkamp.com/articles/custom-wintersmith-template-milchglas/)

wintersmith --version
>2.0.5

## notes

### uses compass/sass.
uses compass/sass (not needed). use chrome canary with workspaces and sourcemap to support designing in the browser.

from within contents folder invoke:
sass --watch --sourcemap --compass css/sass:css

this will watch the scss-files in the css/sass directory and compile to css using sourcemaps.
the sourcemaps can then be used by chrome canary to update the scss source file when edited in the browser.

### uses grunt
uses grunt (not needed) to minifiy and concat js and css.

### build

grunt
wintersmith build









