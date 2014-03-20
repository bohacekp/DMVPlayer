
    $(document).ready(function () {
		// the $ says that it can use the jquery functions, it is purely cosmetic, these variables do not need a $, but it is an easy way to keep track of which variables are which
        var $video = $("#my_video_1"); //like getElementById(vid) but the returned object is passed to a jquery function

        var $scrubber = $("#scrubber");
        var $progress = $("#progress");
        
        $video.bind("timeupdate", videoTimeUpdateHandler);
        $scrubber.bind("mousedown", scrubberMouseDownHandler);
        
        function videoTimeUpdateHandler(e) {
            var video = $video.get(0);
            var percent = video.currentTime / video.duration;
            updateProgressWidth(percent);
        }
        
        function scrubberMouseDownHandler(e) {
            var $this = $(this);
            var x = e.pageX - $this.offset().left;
            var percent = x / $this.width();
            updateProgressWidth(percent);
            updateVideoTime(percent);
        }
        
        function updateProgressWidth(percent) {
            $progress.width((percent * 100) + "%");
        }
        
        function updateVideoTime(percent) {
            var video = $video.get(0);
            video.currentTime = percent * video.duration;
        }
    });
