# urlshot
Commandline URL Screengrabber using PhantomJS

## Options

```
  -h, --help            output usage information
  -V, --version         output the version number
  -F --format <format>  Screenshot file format (png, jpg, gif, pdf)
  -A --autohash         Automatically name files based on URL hash
```

## Examples

Capture a `800x600` screenshot of [google.com](http://www.google.com):

```
 > urlshot http://www.google.com/
 Screenshot saved to screenshot.png
```

```
 > urlshot -A -F pdf http://www.google.com/
 Screenshot saved to ed646a3334ca891fd3467db131372140.pdf
```

```
 > urlshot http://www.google.com/ myfilename.png
 Screenshot saved to myfilename.png
```
