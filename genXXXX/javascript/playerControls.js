//GLOBAL VARIABLES USED IN THIS FILE
//framerate
//frameZero


//Returns the Current Frame of the video
function getCurrentFrame() {
    return Math.floor(document.getElementById("dmv_video").currentTime * 29.97);
}

//Prints ellapsed time and frames from frame zero
function updateStopwatch() {
    document.getElementById("framerate").innerHTML = "Framerate: " + framerate + " fps";
    document.getElementById("timeInfo").innerHTML = "Time: " + ((getCurrentFrame() - frameZero)/framerate).toFixed(stopWatchNumberOfDecimalValues) + " s";
    document.getElementById("frameInfo").innerHTML = "Frame: " + (getCurrentFrame() - frameZero);
    //DEBUG document.getElementById("frameCounter3").innerHTML = (document.getElementById("dmv_player").currentTime * 29.97 ).toFixed(1);
}

//sets the player in the middle of the passed frame
function setFrame(frame) {
    if (numberOfVideos == 1 || numberOfVideos == 2)
    {
        document.getElementById("dmv_video").currentTime = frame / 29.97 + 1 / 59.94;
    }
    if (numberOfVideos == 2)
    {
        document.getElementById("dmv_video2").currentTime = frame / 29.97 + 1 / 59.94;
    }
    updateStopwatch();
}

//sets frameZero to the passed frame and updates the frame counter
function setFrameZero(frame) {
    frameZero = frame;
    updateStopwatch();
  
    //Deselecting the StopWatch button
    document.getElementById("playorpause").focus();
    document.getElementById("playorpause").blur();
}

//------------------------------------------------------------------//
//This function will toggle the stopwatch from being shown.         //
//------------------------------------------------------------------//
function toggleStopWatch(){
  $('#stopwatch').toggle("highlight");
  
  //Deselecting the StopWatch button
  document.getElementById("playorpause").focus();
  document.getElementById("playorpause").blur();

}

//------------------------------------------------------------------//
//This function will set the position of the stopwatch based on the //
// values that are in the settings.js file                          //
//------------------------------------------------------------------//
function setStopWatchPosition(){
  var stopWatch = document.getElementById("stopwatch");
  
  /*
  //Figuring out the size of the video
  var windowWidth = window.innerWidth;
  var windowHeight = window.innerHeight;
  var windowAspectRatio = windowWidth / windowHeight;
  
  if (windowAspectRatio > (16 / 9)) {
    
  }
  else if (windowAspectRatio < (16 / 9)) {
    
  }
  
  //Setting the position of the stopwatch
  // Left
  var currentVideoWidth = document.getElementById('dmv_video').offsetWidth;
  stopWatch.style.left = stopWatchLeftPosition * currentVideoWidth + "px";
  // Top
  var currentVideoHeight = document.getElementById('dmv_video').offsetHeight;    
  stopWatch.style.top = stopWatchTopPosition * currentVideoHeight + "px";
  */
  
  stopWatch.style.left = stopWatchLeftPosition;
  stopWatch.style.top = stopWatchTopPosition;
}


//------------------------------------------------------------------//
//This function handles the 'Go to Frame:' functionality of the     //
// player.                                                          //
//------------------------------------------------------------------//
function goToEnteredFrame(){ 
  //gets value from textbox (named FrameJump) and sets it as a variable called thisFrame
  var thisFrame = document.getElementById("FrameJump").value; 
  
  setFrame(thisFrame); 
  //pause the video
  pause(); 
  //Deselecting the Go To Frame button and its text field
  document.getElementById('FrameJump').blur();
  document.getElementById('gotoframe').blur();
}

//------------------------------------------------------------------//
//Event Handler for the keyboard input                              //
//------------------------------------------------------------------//
//isaac wrote this. listens for keydownn event and also for which key is pressed
window.addEventListener('keydown', function (e) {
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
});

//------------------------------------------------------------------//
//This function is used to go to the previous frame of the video.   //
// The function is executed when the previous frame button or key is// 
//  pressed.                                                        //
//------------------------------------------------------------------//
function prevFrame(){ 
  if(getCurrentFrame() > 0) {
    setFrame(getCurrentFrame() - 1);
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
    if (document.getElementById("dmv_video").paused && document.getElementById("dmv_video2").paused) {
    play();
  }

  else {
    pause();
  }

  //resizeTools();
  
  //Deselecting the Play/Pause Button
  document.getElementById('playorpause').blur();
} 

//------------------------------------------------------------------//
//This function is the pause function that pauses the video(s)      //
//------------------------------------------------------------------//
function pause(){
  if (numberOfVideos == 1 || numberOfVideos == 2){
      document.getElementById("dmv_video").pause();
  }
  if (numberOfVideos == 2) {
      document.getElementById("dmv_video2").pause();
  }
  
  //ensures that the player pauses in the middle of a frame
  setFrame(getCurrentFrame());
}

//------------------------------------------------------------------//
//This function is the play function that plays the video(s)        //
//------------------------------------------------------------------//
function play(){
    if (numberOfVideos == 1 || numberOfVideos == 2){
        document.getElementById("dmv_video").play();
    }
    if (numberOfVideos == 2) {
        document.getElementById("dmv_video2").play();
    }
}

//------------------------------------------------------------------//
//This function is used to get back to the first frame in the video //
//------------------------------------------------------------------//
function firstFrame(){
  setFrame(0);
    
  //Deselecting the Rewind Button
  document.getElementById('rewind').blur();
}

//------------------------------------------------------------------//
//This function is used to move ahead a single frame in the video   //
//------------------------------------------------------------------//
function fwdFrame(){

  if (getCurrentFrame() < document.getElementById("dmv_video").duration * 29.97) {
      setFrame(getCurrentFrame() + 1);
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