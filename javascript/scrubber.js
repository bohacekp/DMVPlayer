/* 
* This peice of code took a good 3-4 weeks to write, so it is more complicated
* I will try to explain it as well as I can, and there are some peices which I
* wont be able to do a very good job on, and some variable which I will not be able
* to explain the purpose of.
*
* The $ before certain things indicates that it is a jquery function/variable/object
*/

var value;

$(function() {
	//----Variables--------------------------------------------//
	//creates an jquery instance of the video player window
	var $video = $("#dmv_video"); 
    var $video2 = $("dmv_video2");
	//creates an instance of the jquery object $video
	var video = $video.get(0);
    
	//variable used to indicate whether or not the playpause button has been clicked
	var playPauseClicked; 
	//0 is mouse up 1 is mouse down, the initial value is set to zero
	var mousePos=0; 
	//is set to one if the slider is not to be allowed to update
	var doNotUpdate = 0; 
	//if the slider is clicked on, this variable is given the time that the video should go to depending on where the slider bar was moved to
	var clickedScrubberTime; 
	
	//there is an event which 'fires' every so often when the video is playing. it is called 'timeupdate' and what this line does is it says that anytime this event fires, the function videoTImeUpdateHandler should be called. This function updates the slider position
	$video.bind("timeupdate", videoTimeUpdateHandler); 
    $video2.bind("timeupdate", videoTimeUpdateHandler);
	
	//gets the percent of the video that is done playing, this can be applied to the slider to set its position
	var percent = $video.currentTime / $video.duration; 
	
    // Create a new jQuery UI Slider element and set some default parameters.
    $( "#slider" ).slider({ 
    	range: "min", 
      	//initial value of the slider should be zero
		value: 0, 
		// this is teh minimum value of the slider
      	min: 0, 
		//this is the max slider position, this is effectively the resolution of the slider. the 100,000 means that it can handle 100,000 different positions, or videos with 100,000 frames which is more than enough. this value can be increased or decreased.
      	max: maxSliderValue, 
		//the slide: is an event that fires when the slider is being moved. the function() inside runs whenever the slider is being moved
      	slide: function( event, ui ) {
			// this gets the value of the slider, a number between 0 and 100,000
			var value = $( "#slider" ).slider( "value" ); 
			//gets the percentage value of the slider, and then sets the current time of the video according to where the slider is positioned
            if (numberOfVideos == 1 || numberOfVideos == 2) {
			   player.currentTime=player.duration*(value/maxSliderValue); 
            }
            if (numberOfVideos == 2) {
			   player2.currentTime = player2.duration * (value/maxSliderValue);
            }
			//prints the value of the slider in the console, used only for debugging
			//console.log(value); 
      	}
	});
	
	//retreives the slider object
	$( "#slider" ).slider({ 
		//function runs when the slider is released and is no longer being slid (slided?)
		stop: function( event, ui ) { 
			//selects (puts focus on the gotoframe textbox (had to pick just an arbitrary object)
			document.getElementById("gotoframe").focus(); 
			//deselects the textbox, this may seem redundant given the code above, but what it does is makes sure that nothing on the page is selected because when the spacebar is pressed, anything that is selected (has focus) will be triggered, or 'clicked' on
			document.getElementById("gotoframe").blur(); 
			//gets final value of slidr after it is not being moved anymore
			var value = $( "#slider" ).slider( "value" ); 
			//gets percentage value of the slider
            if (numberOfVideos == 1 || numberOfVideos == 2) {
              player.currentTime=player.duration*(value/maxSliderValue);
            }
            if (numberOfVideos == 2) {
              player2.currentTime = player2.duration * (value / maxSliderValue);
            }
            
			//prints the slider value in the console, used for debugging only
//			console.log("Slider Value: "+value);
//            console.log("Video 1 Current Time: "+player.currentTime);
//            console.log("Video 2 Current Time: "+player2.currentTime);
		}
	});
	
	//Debugging
	//console.log(document.getElementById("slider").offsetWidth);
	//sets varibale called newVal to the slider value
	var newVal=$( "#slider" ).slider( "value" ); 
	
	//the value of oldVal is set eslewhere in the playerControls.js file
	function videoTimeUpdateHandler(e) {
		// if (newVal does not equal oldVal OR player is NOT paused, then run this. this test checks to see if the video has changed or is changing positions. the following code runs if it is.
		if((newVal!=oldVal) || !(player.paused) || !(player.paused)){ 
			//set variable called value to the slider value
			value = $( "#slider" ).slider( "value" ); 
			//get percent of the video that has palyed
			percent = video.currentTime / video.duration; 
			//set the position of the slider based on how far along in the video we are.
			$( "#slider" ).slider( "option", "value", percent * maxSliderValue ); 

			//sets old val equall to newVal so that this peice of code cannot be run twice without something changing
			oldVal=newVal;
			
			//Stopwatch
			stopwatch();
		}
	}
});

//Update the stopwatch time
function stopwatch(){
//	console.log("stopwatch");
//	console.log(player.currentTime);
//	document.getElementById('stopWatchTest').innerHTML = player.currentTime;
}