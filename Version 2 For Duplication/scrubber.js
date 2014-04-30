var value;
//var valueClicked;
$(function() {
var $video = $("#my_video_1");
var video = $video.get(0);
var playPauseClicked;
//var timeupdater = new Event('timeupdate');
$video.bind("timeupdate", videoTimeUpdateHandler);
var mousePos=0 //0 is mouse up 1 is mouse down
var doNotUpdate = 0;
var clickedScrubberTime;
/*
document.onmousedown= function(){
	doNotUpdate=1;
	value = $( "#slider" ).slider( "value" );
	//player.currentTime=player.duration*(value/100000);
}
document.onmouseup= function(){
	value = $( "#slider" ).slider( "value" );
	doNotUpdate=0;
	//player.currentTime=player.duration*(value/100000);
}
*/
/*
document.onmouseup = function() {
	
	
	
	if (playPauseClicked==0){
	
	//mousePos=0;
	//videoTimeUpdateHandler();

	//var value = $( "#slider" ).slider( "value" );
	//document.fireEvent(timeupdate);
	
	//player.currentTime=player.duration*(value/100000);
	
	var value = $( "#slider" ).slider( "value" );
	player.currentTime=player.duration*(value/100000);
	console.log("Slider was moved by click: "+value);
	
	//$video.bind("timeupdate", videoTimeUpdateHandler);
	}else{
		console.log("pp set 1");
		playPauseClicked=0;
	}	
	player.currentTime=player.duration*(value/100000);
	
	var percent = video.currentTime / video.duration;
	$( "#slider" ).slider( "option", "value", percent*100000 );
	doNotUpdate=1;
	mousePos=0;
	doNotUpdate=0;
	}
	
document.onmousedown = function() {
	//console.log(document.getElementById("playorpause").clicked);
	mousePos=1;
	console.log("Slider was moved by click: "+value);
	//var value = $( "#slider" ).slider( "value" );
	if(playPauseClicked==0){
		player.currentTim=player.duration*(value/100000);
	}
	else{
		console.log("pp set 1");
		//playPauseClicked=0;
	}	
	//playPauseClicked=1;

	//document.fireEvent(timeupdate);
	
	
	}
*/
/*
var doingSomethingElse=1; //used to allow certain parts of this code to execute in order to prevent interference with other functions of the webpage

var $video = $("#my_video_1");
$video.bind("timeupdate", videoTimeUpdateHandler);
var mousePos=0 //0 is mouse up 1 is mouse down
document.onmouseup = function() {
	var value = $( "#slider" ).slider( "value" );
	if (doingSomethingElse==0){
		player.currentTime=player.duration*(value/100000);
		console.log("Slider was moved by click");
		}
	setTimeout(function() {mousePos=0}, 1);
	}
document.onmousedown = function() {
	mousePos=1;
	}
	*/


    // Set the initial slider amount in the #amount div element
    //var value = $( "#slider" ).slider( "value" );
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
	 /*stop: function(event, ui){
		var value = $( "#slider" ).slider( "value" );
		player.currentTime=player.duration*(value/100000);
		
		console.log(value);
		}*/
	}
	
	);
	$( "#slider" ).slider({
		stop: function( event, ui ) {
			document.getElementById("gotoframe").focus();
			document.getElementById("gotoframe").blur();
			var value = $( "#slider" ).slider( "value" );
			player.currentTime=player.duration*(value/100000);
		
			console.log(value);
			}
	});
	console.log(document.getElementById("slider").offsetWidth);
	var newVal=$( "#slider" ).slider( "value" );
	function videoTimeUpdateHandler(e) {
		if((newVal!=oldVal)||!(player.paused)){
	
		// if(doNotUpdate==0){
			value = $( "#slider" ).slider( "value" );
			percent = video.currentTime / video.duration;
			//updateProgressWidth(percent);
			//$("slider").val(percent*100000);
			$( "#slider" ).slider( "option", "value", percent*100000 );
			console.log("update");
			oldVal=newVal;
		}
	//	}
     }
	
  });
  /*
  function manualTimeUpdate(){
		var percent = video.currentTime / video.duration;
		//updateProgressWidth(percent);
		//$("slider").val(percent*100000);
		$( "#slider" ).slider( "option", "value", percent*100000 );
		console.log("update");
		}
	*/