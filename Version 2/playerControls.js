var percent;
var oldVal;
	function goToEnteredFrame(){
		console.log("Going To Frame:");
		var thisFrame = document.getElementById("FrameJump").value;
		console.log(thisFrame);
		seek(Math.round(((1/framerate)*(thisFrame)+(1/framerate))*100000)/100000);
		pause();
		
		//percent = video.currentTime / video.duration;
			//updateProgressWidth(percent);
			//$("slider").val(percent*100000);
		//$( "#slider" ).slider( "option", "value", percent*100000 );
		++oldVal;
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
			//document.getElementById("gotoframe").focus();
			//document.getElementById("gotoframe").blur();
			playPause();
		}
/*
	function goToEnteredFrame(){
		var thisFrame = document.getElementById("FrameJump").value;
		console.log(thisFrame);
		seek(Math.round(((1/framerate)*(thisFrame)+(1/framerate))*100000)/100000);
		pause();
		console.log("go to frame:"+thisFrame);
	}
*/


	function prevFrame(){
		++oldVal;
		//mousePos=0;
		document.getElementById("frameprev").focus();
		pause();
		player.currentTime -=(1/30).toPrecision(5);
		//player.currentTime=player.currentTime-(1/framerate);
		//play();
		console.log("prev frame");
		//player.playVideo();
		//pause();
		//setTimeout(pause(), 1);
		document.getElementById("frameprev").blur();
	}

	function playPause(){ 
		//doNotUpdate=1;
		//document.getElementById("playorpause").blur();
		if (player.paused) {
 	
		//doNotUpdate=1;	
		
		//player.currentTime=player.duration*(value/100000);
		play();
		

		}
		 //document.getElementByName("playPause").innerHTML="||";
		else {
			doNotUpdate=1;
			pause();
		//	value = $( "#slider" ).slider( "value" );
		//	player.currentTime=player.duration*(value/100000);
		// document.getElementByName("playPause").innerHTML=">";
		//doingSomethingElse=0;
		}

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
		++oldVal;
		//
		//value = $( "#slider" ).slider( "value" );
		//player.currentTime=player.duration*(value/100000);
		doingSomethingElse=1;
		mousePos=0;
		sliding = 0;
		//document.getElementById("framefwd").focus();
		if (isChrome){
			console.log("You are using chrome, I will skip by playing");
			play();
			setTimeout(function() {player.pause()}, (1000/framerate));
			//console.log("fwd frame Chrome, time: "+player.currentTime);
			doingSomethingElse=0;

			}
		else{
			console.log("Skip by setting time");
			pause();
			player.currentTime=player.currentTime+(1/framerate);
			//console.log("fwd frame other browser, time: "+player.currentTime);
			doingSomethingElse=0;

		}
		document.getElementById("framefwd").blur();
	//	console.log("fwd frame , time: "+player.currentTime);
	}
