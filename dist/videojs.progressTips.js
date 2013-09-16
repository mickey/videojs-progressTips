/*! videojs-progressTips - v0.1.0 - 2013-09-16
* https://github.com/mickey/videojs-progressTips
* Copyright (c) 2013 Michael Bensoussan; Licensed MIT */

(function() {

  vjs.plugin('progressTips', function(options) {
    var init;
    init = function() {
      var player;
      if (this.techName !== "Html5") {
        return;
      }
      player = this;
      $(".vjs-progress-control").after($("      <div id='vjs-tip'>      <div id='vjs-tip-arrow'></div>      <div id='vjs-tip-inner'></div>      </div>    "));
      $(".vjs-progress-control").on("mousemove", function(event) {
        var barHeight, minutes, seconds, seekBar, timeInSeconds;
        seekBar = player.controlBar.progressControl.seekBar;
        timeInSeconds = seekBar.calculateDistance(event) * seekBar.player_.duration();
        if (timeInSeconds === seekBar.player_.duration()) {
          timeInSeconds = timeInSeconds - 0.1;
        }
        minutes = Math.floor(timeInSeconds / 60);
        seconds = Math.floor(timeInSeconds - minutes * 60);
        if (seconds < 10) {
          seconds = "0" + seconds;
        }
        $('#vjs-tip-inner').html("" + minutes + ":" + seconds);
        barHeight = $('.vjs-control-bar').height();
        $("#vjs-tip").css("top", "" + (event.pageY - $(this).offset().top - barHeight - 20) + "px").css("left", "" + (event.pageX - $(this).offset().left - 20) + "px").css("visibility", "visible");
        return;
      });
      $(".vjs-progress-control, .vjs-play-control").on("mouseout", function() {
        $("#vjs-tip").css("visibility", "hidden");
      });
    };
    this.on("loadedmetadata", init);
  });

}).call(this);
