//This is the script for the video player
$(document).ready(function(){
	$('#over').draggable();
	$('#under').draggable();


	$('#my_video_1').get(0).style.maxWidth="1000px";
	var player = $('#my_video_1').get(0);
	// player.load();
	// player.play();

	//$('#button_table_1').style.maxWidth="980px";
	var framerate = 30;
	function goToEnteredFrame(){
		console.log("Going To Frame:");
		var thisFrame = $('#FrameJump').val();
		console.log(thisFrame);
		seek((1/framerate)*(thisFrame)+(1/framerate));
		pause();
		console.log("go to frame:"+thisFrame);
	}

	function prevFrame(){
		pause();
		$('#my_video_1').currentTime=$('#my_video_1').currentTime-(1/framerate);
		//play();
		console.log("prev frame");
		//player.playVideo();
		//pause();
		//setTimeout(pause(), 1);
	}

	function playPause(){ 
		if ($('#my_video_1').paused) 
			 $('#my_video_1').play();
		 //document.getElementByName("playPause").innerHTML="||";
		else 
			 $('#my_video_1').pause();
		// document.getElementByName("playPause").innerHTML=">";
	} 

	function pause(){
		$('#my_video_1').get(0).pause();
		console.log("pause");
	}

	function play(){
		$('#my_video_1').get(0).play();
		console.log("play");
	}

	function seek(time){
		pause();
		$('#my_video_1').currentTime=time;
		console.log("seek");
	}

	function goToTime(time){
		$('#my_video_1').currentTime=time;
		console.log("goToTime:" + time);
	}

	function fwdFrame(){
		console.log("frame forward");
		play();
		//pause();
		//player.currentTime=player.currentTime+(1/framerate);
		setTimeout(function() {$('#my_video_1').get(0).pause()}, (990/framerate));
		console.log("fwd frame, time: "+$('#my_video_1').get(0).currentTime);
	}

	window.addEventListener('keydown',this.check,false);
	function check(e) {
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

	//
	$('#beginning').get(0).onclick = goToTime(0);
	$('#skipToPrev').get(0).onclick = prevFrame();
	$('#playPause').get(0).onclick = prevFrame();
	$('#skipToNext').get(0).onclick = fwdFrame();
	$('#goToFrame').get(0).onclick = goToEnteredFrame();
});