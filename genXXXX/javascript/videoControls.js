//videoControls.js
//This file will contain the functions that work with the video like the video selection

//
function getCurrentVideoName(videoSide) {
  //Check to see if video selection is disabled
  if (!enableVideoSelection) {
    //Checking which video side the caller wants
    if (videoSide == LEFT_MAIN_VIDEO) {
      return videoArray[currentVideoLeft_Main][_videoFileName];
    }
    
    else {
      return videoArray[currentVideoRight][_videoFileName];
    }
  }

  //Video selection is enabled
  else {
    //Checking which video side the caller wants
    if (videoSide == LEFT_MAIN_VIDEO) {
      //figuring out the index for the video they want
      var fileName = "";
      var index = 0;
      for(elements in fileNameArray){
        fileName = fileName + fileNameArray[index];
        
        if(index <= (advancedSelectionArray.length - 1)) {
          fileName = fileName + advancedSelectionArray[index][currentVideoLeft_Main[index]][_advancedSelectionValue];
        }

        index++;
      }

      return fileName;
    }
    
    else {
      console.error("Error:2 Video DMVPlayers are currently not supported");
    }
  }
}

//The function takes in a video file name WITHOUT the extention and returns the index of the video in the videoArray
function getVideoIndex(videoFileName){  
  //looking up the video's index in the video array
  var index = 0;
  var video_index = -1;
  
  for(elements in videoArray){
    if(videoArray[index][_videoFileName] == videoFileName){
      video_index = index;
      break;
    }
    
    index++;
  }
  
  return video_index;
}

//This function saves the currently selected videos to the variables; currentVideoLeft_Main, currentVideoRight
function saveCurrenyltSelectedVideos(){
  //Variables
  var index = 0;
  
  //Check to see if video selection is enabled
  if(enableVideoSelection) {
    //Check the number of videos
    if(numberOfVideos == 1 || numberOfVideos == 2) {
      index = 0;
      
      for(elements in videoSelectorIDArray) {
        currentVideoLeft_Main[index] = document.getElementById(videoSelectorIDArray[index]).selectedIndex;
        index++;
      }
    }
    if(numberOfVideos == 2) { 
      index = 0;
      
      console.error("Error:Video selection is currently not supported for double video DMVPlayer");
    }
  }
}