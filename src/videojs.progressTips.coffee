##
# progressTips
# https://github.com/mickey/videojs-progressTips
#
# Copyright (c) 2013 Michael Bensoussan
# Licensed under the MIT license.
##

vjs.plugin 'progressTips', (options) ->
  init = ->
    return unless @.techName == "Html5"

    player = @
    $(".vjs-progress-control").after($("
      <div id='vjs-tip'>
      <div id='vjs-tip-arrow'></div>
      <div id='vjs-tip-inner'></div>
      </div>
    "))

    $(".vjs-progress-control").on "mousemove", (event) ->
      # this is using an unofficial API so this might be broken in the future
      # tested with 4.2.0 and 4.2.1
      seekBar = player.controlBar.progressControl.seekBar
      timeInSeconds = seekBar.calculateDistance(event) * seekBar.player_.duration()
      timeInSeconds = timeInSeconds - 0.1 if timeInSeconds == seekBar.player_.duration()

      minutes = Math.floor(timeInSeconds / 60)
      seconds = Math.floor(timeInSeconds - minutes * 60)
      seconds = "0#{seconds}" if seconds < 10

      $('#vjs-tip-inner').html("#{minutes}:#{seconds}")

      barHeight = $('.vjs-control-bar').height()

      $("#vjs-tip")
        .css("top", "#{event.pageY - $(@).offset().top - barHeight - 20}px")
        .css("left", "#{event.pageX - $(@).offset().left - 20}px")
        .css("visibility", "visible")
      return

    $(".vjs-progress-control, .vjs-play-control").on "mouseout", ->
      $("#vjs-tip").css("visibility", "hidden")

  @on("loadedmetadata", init)
  return