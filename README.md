# videojs-progressTips

Display a tooltip on hover with the time on video.js players.

![videojs-progressTips](https://dl.dropboxusercontent.com/u/3086081/DONT-DELETE/videojs-progressTips.png)


This plugin was tested on video.js 4.2.0 and 4.2.1.
It depends on jQuery.

## Getting Started
Download [videojs](http://www.videojs.com/) and [videojs.ga](https://github.com/mickey/videojs-ga)

In your web page:
```html
<script src="http://code.jquery.com/jquery-2.0.3.min.js"></script>
<script src="video.js"></script>
<script src="dist/videojs.progressTips.min.js"></script>
<link rel="stylesheet" href="dist/videojs.progressTips.css" type="text/css" />
<video id="video" src="movie.mp4" controls></video>
<script>
videojs('video', {}, function() {
  this.progressTips(); // "load the plugin, no options!"
});
</script>
```

## Options

No options so far! YAY!