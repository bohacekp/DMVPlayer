$(function() {
var $video = $("#my_video_1");
$video.bind("timeupdate", videoTimeUpdateHandler);
var mousePos=0 //0 is mouse up 1 is mouse down
document.onmouseup = function() {
	var value = $( "#slider" ).slider( "value" );
	player.currentTime=player.duration*(value/100000);
	setTimeout(function() {mousePos=0}, 1);
	}
document.onmousedown = function() {
	mousePos=1;
	}
	


    // Set the initial slider amount in the #amount div element
    var value = $( "#slider" ).slider( "value" );
    //$( "#amount" ).html( value );
	 ////var $video = $("#my_video_1");
	 var percent = $video.currentTime / $video.duration;
	 ////$video.bind("timeupdate", videoTimeUpdateHandler);
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
		
		//var percent =  $( "#amount" ).html($( "#slider" ).slider( "value" ));
       
		//var value = $( "#slider" ).slider( "value" );
		//$( "#slider" ).slider( "option", "value", percent*100000 );
		var value = $( "#slider" ).slider( "value" );
		player.currentTime=player.duration*(value/100000);
		
		console.log(value);
      }	
	}
	
	);
	
	console.log(document.getElementById("slider").offsetWidth);
	function videoTimeUpdateHandler(e) {
	 if(mousePos==0){
    	var video = $video.get(0);
	    var percent = video.currentTime / video.duration;
		//updateProgressWidth(percent);
		//$("slider").val(percent*100000);
		$( "#slider" ).slider( "option", "value", percent*100000 );
		console.log("update");
		}
     }
  });