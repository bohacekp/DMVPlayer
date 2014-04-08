/*
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
*/
/*
  // When the browser is ready...
  $(function() {
  
    // Create a new jQuery UI Slider element
    // and set some default parameters.
    $( "#slider" ).slider({
      range: "min",
      value: 0,
      min: 0,
      max: 1000,
      slide: function( event, ui ) {
      
        // While sliding, update the value in the #amount div element
        $( "#amount" ).html( ui.value );
		var value = $( "#slider" ).slider( "value" );
		//var percent =  $( "#amount" ).html($( "#slider" ).slider( "value" ));
        console.log(value);
      }
    });
    
    // Set the initial slider amount in the #amount div element
    var value = $( "#slider" ).slider( "value" );
    $( "#amount" ).html( value );
    
	
	console.log(document.getElementById("slider").offsetWidth);
  });
  */
/*
 $(function() {
    $( "#slider" ).slider();
  });*/
  
  $(function() {
	 var $video = $("#my_video_1");
	 $video.bind("timeupdate", videoTimeUpdateHandler);
    // Create a new jQuery UI Slider element
    // and set some default parameters.
    $( "#slider" ).slider({
      range: "min",
      value: 0,
      min: 0,
      max: 100000,
      slide: function( event, ui ) {
      
        // While sliding, update the value in the #amount div element
       // $( "#amount" ).html( ui.value );
		var value = $( "#slider" ).slider( "value" );
		//var percent =  $( "#amount" ).html($( "#slider" ).slider( "value" ));
        console.log(value);
		player.currentTime=player.duration*(value/100000);
      }
    });
    function videoTimeUpdateHandler(e) {
		var video = $video.get(0);
		var percent = video.currentTime / video.duration;
		//updateProgressWidth(percent);
		//$("slider").val(percent*100000);
		$( "#slider" ).slider( "option", "value", percent*100000 );
		console.log("update");
     }
    // Set the initial slider amount in the #amount div element
    var value = $( "#slider" ).slider( "value" );
    //$( "#amount" ).html( value );
    
	
	console.log(document.getElementById("slider").offsetWidth);
  });