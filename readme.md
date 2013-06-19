# Milchglas-Template for wintersmith

this is the custom template I created for my blog at hulstkamp.com. Ii uses wintersmith in version 2.0*.

wintersmith --version
>2.0.5

## development

### uses compass/sass.

uses compass/sass (not needed). use chrome canary with workspaces and sourcemap support to design in the browser.

sass --watch --sourcemap --compass css/sass:css

this will watch the scss-files in the css/sass directory and compile to css using sourcemaps.
the sourcemaps can then be used by chrome canary to update the scss source file when edited in the browser.

### uses grunt

uses grunt (not needed) to minifiy js and css.






