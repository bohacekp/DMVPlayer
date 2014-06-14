//creates variable called percent
var percent;
//creates variable called oldVal
var oldVal;
//called when "Go!" button is pushed (see DMVPlayer.html)
function goToEnteredFrame(){ 
	//prints "Going To Frame:" in the console, for debugging
//	console.log("Going To Frame:"); 
	//gets value from textbox (named FrameJump) and sets it as a variable called thisFrame
	var thisFrame = document.getElementById("FrameJump").value; 
	//prints that value in the console (for debugging)
//	console.log(thisFrame); 
	//convers frame number into a rounded decimal video time
	seek(Math.round(((1/framerate)*(thisFrame)+(1/framerate))*100000)/100000); 
	//pause the video
	pause(); 
	//adds one to oldVal, so that it no longer equals newVal and the slider consequently updates (see scrubber.js)
	++oldVal; 
//	console.log("go to frame:"+thisFrame);
}

//isaac wrote this. listens for keydownn event and also for which key is pressed
window.addEventListener('keydown',this.check,false); 
//runs if the keydown event is fired, not sure what e is
function check(e) { 
	//figures out which key is presed and set it as variable 'code'
	var code = e.keyCode; 
	//Left arrow pressed
	if (code == 37)
		prevFrame();
	//Right arrow pressed
	if (code == 39)
		fwdFrame();
	//Down arrow pressed
	if (code == 40)
		prevFrame();
	//Up arrow pressed
	if (code == 38)
		fwdFrame();
	//Spacebar pressed
	if (code == 32)
		playPause();
	}

function prevFrame(){
	//changing the value of oldVal allows the slider to be updated
	++oldVal; 
	//selects previous frame button
	document.getElementById("frameprev").focus(); 
	pause();
	//gets current time to 5 decimal places
	player.currentTime -=(1/30).toPrecision(5); 
//	console.log("prev frame");
	//deselects previous frame button
	document.getElementById("frameprev").blur();
}

function playPause(){ 
	//the next two lines deselct everything
	document.getElementById("gotoframe").focus();
	document.getElementById("gotoframe").blur();
	
	if (player.paused) {
		play();
	}
	else {
		doNotUpdate=1;
		pause();
	}
} 

function pause(){
	player.pause();
//	console.log("pause");
}
function play(){
	player.play();
//	console.log("play");
}
//can be called by seek(10), seeks to 10 seconds
function seek(time){ 
	pause();
	player.currentTime=time;
//	console.log("seek");
}
function goToTime(time){
	player.currentTime=time;
//	console.log("goToTime:" + time);
}
function firstFrame(){
	++oldVal;
	goToTime(0);
}
function fwdFrame(){
	++oldVal;
	doingSomethingElse=1;
	mousePos=0;
	sliding = 0;
	//isChrome set true or false in browser detect file
	if (isChrome){ 
//		console.log("You are using chrome, I will skip by playing");
		play();
		//set timeout calls a function after a certain amount of time
		setTimeout(function() {player.pause()}, (1000/framerate)); 
//		console.log("fwd frame Chrome, time: "+player.currentTime);
		doingSomethingElse=0;

		}
	else{
		console.log("Skip by setting time");
		pause();
		player.currentTime=player.currentTime+(1/framerate);
//		console.log("fwd frame other browser, time: "+player.currentTime);
		doingSomethingElse=0;

	}
	document.getElementById("framefwd").blur();
//	console.log("fwd frame , time: "+player.currentTime);
}

$(document).ready(function(){
	
//	$('.ui-slider-handle').backgroundColor("#FF0000"); 
	
	//Removing the reset tools buttons if it is turned off
	if(!resetButton){
		$("#resetTools").css("display", "none");
	}
	
	//Drop down for the different videos
	var video_selection = $("#video_selection");
	var video_selector = $("#video_selector");
	
	//Removing the Video Selector if it is turned off
	if(!videoSelection){
		video_selection.css("display", "none");
	}
	
	//Setting the default video
	var dmv_player = document.getElementById("dmv_video");
	var mp4_video = document.getElementById("mp4_video");
	var ogg_video = document.getElementById("ogg_video");
	
//	console.log("dmv_player.canPlayType('video/ogg') = " + dmv_player.canPlayType("video/ogg"));
//	console.log("dmv_player.canPlayType('video/mp4') = " + dmv_player.canPlayType("video/mp4"));
	
	//Setting the video sources
	if(dmv_player.canPlayType("video/ogg") == "maybe" || dmv_player.canPlayType("video/ogg") == "probably") {
		$(ogg_video).attr('src', videoArray[0][1]);
	}
	else if(dmv_player.canPlayType("video/mp4") == "maybe" || dmv_player.canPlayType("video/mp4") == "probably") {
		$(mp4_video).attr('src', videoArray[0][1]);
	}
	
	//Reload the dmv video
	dmv_player.load();
	
	//Setting up the options in the video selection
	var index = 0;
	for(element in videoArray){
		var option = video_selector.append($("<option></option>").attr("value",index).text(videoArray[index][0]));
		index++;
	}
	
	//If the drop down changes
	video_selector.change(function(){
		var video_index = document.getElementById("video_selection").selectedIndex;
		var dmv_player = document.getElementById("dmv_video");
		var mp4_video = document.getElementById("mp4_video");
		var ogg_video = document.getElementById("ogg_video");
		
		//Setting the video sources
		if(dmv_player.canPlayType("video/ogg")) {
			$(ogg_video).attr('src', videoArray[video_index][1]);
		}
		else if(dmv_player.canPlayType("video/mp4")) {
			$(mp4_video).attr('src', videoArray[video_index][2]);
		}
		
		//Reload the dmv video
		dmv_player.load();
		
		//Setting the slider back to the beginning
		$("#slider").slider('value',0);
	});
});