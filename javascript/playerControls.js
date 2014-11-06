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
	player.currentTime -= (1/30).toPrecision(5);
	player2.currentTime -= (1/30).toPrecision(5);
	
//	var frameNumber = player.currentTime / 30;
//	console.log("(1/30).toPrecision(5): "+(1/30).toPrecision(5));
//	console.log("current time: "+player.currentTime);
//	console.log("current frame: "+frameNumber);
	
//	console.log("prev frame");
	//deselects previous frame button
	document.getElementById("frameprev").blur();
}

function playPause(){ 
	//the next two lines deselct everything
	document.getElementById("gotoframe").focus();
	document.getElementById("gotoframe").blur();
	
	if (player.paused && player2.paused) {
		play();
	}
	else {
		doNotUpdate=1;
		pause();
	}
} 

function pause(){
	player.pause();
	player2.pause();
//	console.log("pause");
}
function play(){
	player.play();
	player2.play();
//	console.log("play");
}
//can be called by seek(10), seeks to 10 seconds
function seek(time){ 
	pause();
	player.currentTime=time;
	player2.currentTime = time;
//	console.log("seek");
}
function goToTime(time){
	player.currentTime=time;
	player2.currentTime=time;
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
		setTimeout(function() {player.pause(); player2.pause()}, (1000/framerate)); 
//		console.log("fwd frame Chrome, time: "+player.currentTime);
		doingSomethingElse=0;

		}
	else{
//		console.log("Skip by setting time");
		pause();
		player.currentTime=player.currentTime+(1/framerate);
		player2.currentTime = player2.currentTime + (1/framerate);
//		console.log("fwd frame other browser, time: "+player.currentTime);
		doingSomethingElse=0;

	}
	document.getElementById("framefwd").blur();
//	console.log("fwd frame , time: "+player.currentTime);
	
//	var frameNumber = player.currentTime / 30;
//	console.log("current time: "+player.currentTime);
//	console.log("current frame: "+frameNumber);
	
}

//Start button function
function start(){
	play();
	pause();
}