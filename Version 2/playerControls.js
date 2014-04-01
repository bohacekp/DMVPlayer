	var framerate = 30;

	function goToEnteredFrame(){
		console.log("Going To Frame:");
		var thisFrame = document.getElementById("FrameJump").value;
		console.log(thisFrame);
		seek((1/framerate)*(thisFrame)+(1/framerate)).toPrecision(5);
		pause();
		console.log("go to frame:"+thisFrame);
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

	function goToEnteredFrame(){
		console.log("Going To Frame:");
		var thisFrame = document.getElementById("FrameJump").value;
		console.log(thisFrame);
		seek((1/framerate)*(thisFrame)+(1/framerate)).toPrecision(5);
		pause();
		console.log("go to frame:"+thisFrame);
	}



	function prevFrame(){
		pause();
		player.currentTime -=(1/30).toPrecision(5);
		//player.currentTime=player.currentTime-(1/framerate);
		//play();
		console.log("prev frame");
		//player.playVideo();
		//pause();
		//setTimeout(pause(), 1);
	}

	function playPause(){ 
		if (player.paused) 
 		 play();
		 //document.getElementByName("playPause").innerHTML="||";
		else 
  		 pause();
		// document.getElementByName("playPause").innerHTML=">";
	} 

	function pause(){
		player.pause();
		console.log("pause");
	}
	function play(){
		player.play();
		console.log("play");
	}
	function seek(time){
		pause();
		player.currentTime=time;
		console.log("seek");
	}
	function goToTime(time){
		player.currentTime=time;
		console.log("goToTime:" + time);
	}
	function fwdFrame(){
		//
		if (document.getElementById("Chrome").checked){
			play();
			setTimeout(function() {player.pause()}, (1000/framerate));
			console.log("fwd frame Chrome, time: "+player.currentTime);
			}
		else{
			pause();
			player.currentTime=player.currentTime+(1/framerate);
			console.log("fwd frame other browser, time: "+player.currentTime);
		}
	//	console.log("fwd frame , time: "+player.currentTime);
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
