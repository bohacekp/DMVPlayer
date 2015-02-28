var percent;
var oldVal;
//------------------------------------------------------------------//
//This function handles the 'Go to Frame:' functionality of the     //
// player.                                                          //
//------------------------------------------------------------------//
function goToEnteredFrame(){ 
  //gets value from textbox (named FrameJump) and sets it as a variable called thisFrame
  var thisFrame = document.getElementById("FrameJump").value; 
  //convers frame number into a rounded decimal video time
  seek(Math.round(((1/framerate)*(thisFrame)+(1/framerate))*100000)/100000); 
  //pause the video
  pause(); 
  //adds one to oldVal, so that it no longer equals newVal and the slider consequently updates (see scrubber.js)
  ++oldVal; 
  //Deselecting the Go To Frame button and its text field
  document.getElementById('FrameJump').blur();
  document.getElementById('gotoframe').blur();
}

//------------------------------------------------------------------//
//Event Handler for the keyboard input                              //
//------------------------------------------------------------------//
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

//------------------------------------------------------------------//
//This function is used to go to the previous frame of the video.   //
// The function is executed when the previous frame button or key is// 
//  pressed.                                                        //
//------------------------------------------------------------------//
function prevFrame(){
  //changing the value of oldVal allows the slider to be updated
  ++oldVal; 
  //selects previous frame button
  document.getElementById("frameprev").focus(); 
  pause();
  //gets current time to 5 decimal places
    if (numberOfVideos == 1 || numberOfVideos == 2){
      player.currentTime -= (1/30).toPrecision(5);
    }
    if (numberOfVideos == 2){
      player2.currentTime -= (1/30).toPrecision(5);
    }
  //deselects previous frame button
  document.getElementById("frameprev").blur();
}

//------------------------------------------------------------------//
//This function is used for playing and pausing the video.          //
// The function is executed when the play/pause button is pressed or//
//  when the space bar is pressed.                                  //
//------------------------------------------------------------------//
function playPause(){ 
  //the next two lines deselct everything
  if (goToFrameControlEnabled) {
   document.getElementById("gotoframe").focus();
   document.getElementById("gotoframe").blur();
  }
      
  if (player.paused && player2.paused) {
    play();
  }

  else {
    doNotUpdate=1;
    pause();
  }

  resizeTools();
  
  //Deselecting the Play/Pause Button
  document.getElementById('playorpause').blur();
} 

//------------------------------------------------------------------//
//This function is the pause function that pauses the video(s)      //
//------------------------------------------------------------------//
function pause(){
    if (numberOfVideos == 1 || numberOfVideos == 2){
      player.pause();
    }
    if (numberOfVideos == 2) {
      player2.pause();
    }
}

//------------------------------------------------------------------//
//This function is the play function that plays the video(s)        //
//------------------------------------------------------------------//
function play(){
    if (numberOfVideos == 1 || numberOfVideos == 2){
      player.play();
    }
    if (numberOfVideos == 2) {
      player2.play();
    }
}

//------------------------------------------------------------------//
//This function is used to seek to a specific time in the video.    //
//Parameters: time - the time in seconds that you want to move to in//
//                    the video                                     //
//------------------------------------------------------------------//
function seek(time){ 
  pause();
    if (numberOfVideos == 1 || numberOfVideos == 2) {
      player.currentTime=time;
    }
    if (numberOfVideos == 2) {
      player2.currentTime = time;
    }
}

//------------------------------------------------------------------//
//This function is used to seek to a specific time in the video.    //
//Parameters: time - the time in seconds that you want to move to in//
//                    the video                                     //
//------------------------------------------------------------------//
function goToTime(time){
    if (numberOfVideos == 1 || numberOfVideos == 2) {
      player.currentTime=time;
    }
    if (numberOfVideos == 2) {
      player2.currentTime=time;
    }
}

//------------------------------------------------------------------//
//This function is used to get back to the first frame in the video //
//------------------------------------------------------------------//
function firstFrame(){
  ++oldVal;
  goToTime(0);
    
  //Deselecting the Rewind Button
  document.getElementById('rewind').blur();
}

//------------------------------------------------------------------//
//This function is used to move ahead a single frame in the video   //
//------------------------------------------------------------------//
function fwdFrame(){
  ++oldVal;
  doingSomethingElse=1;
  mousePos=0;
  sliding = 0;

  //selects previous frame button
  document.getElementById("framefwd").focus(); 

  //isChrome set true or false in browser detect file
  if (isChrome){ 
    play();
    //set timeout calls a function after a certain amount of time
    setTimeout(function() {player.pause(); player2.pause()}, (1000/framerate)); 
    doingSomethingElse=0;
  }
  else{
    pause();
    if (numberOfVideos == 1 || numberOfVideos == 2) {
      player.currentTime=player.currentTime + (1/framerate);
    }
    if (numberOfVideos == 2) {
      player2.currentTime = player2.currentTime + (1/framerate);
    }
    doingSomethingElse=0;
  }
  document.getElementById("framefwd").blur();
}

//------------------------------------------------------------------//
//This function is used to start the video                          //
//------------------------------------------------------------------//
function start(){
  play();
  pause();
}