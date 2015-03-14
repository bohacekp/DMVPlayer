//------------------------------------------------------------------//
//This function is used to reset all of the measurement tools back  //
// to their original position and sizing.                           //
//------------------------------------------------------------------//
function resetTools(){  
  selectedTool = "";
  var index = 0;
  for(element in toolsArray){
    tool = document.getElementById(toolsArray[index][_elementID]);
    tool.style.left = toolsArray[index][_positionLeft];
    tool.style.top = toolsArray[index][_positionTop];
    tool.style.height = toolsArray[index][_sizeHeight];
    tool.style.width = toolsArray[index][_sizeWidth];
    //Checking to see if the unselected outline is enabled
    if(toolsArray[index][_unselectedOutlineEnabled]){
      //Putting a the previous selected tool back to the default color
      tool.style.border = toolsArray[index][_unselectedOutlineThickness] +
                          " solid " +
                          toolsArray[index][_unselectedOutlineColor];
    }
    index++;
  }
  
  //Resizing the tools
  resizeTools();

  //Deselecting the Reset Tools button
  document.getElementById('resetTools').blur();
}

//------------------------------------------------------------------//
//This function is used to nudge the currently selected measurement //
// tool. You nudge the measurement tools with the WASD keys and     //
// holding shift will increase the movement speed.                  //
//------------------------------------------------------------------//
window.addEventListener('keydown',this.nudgeTool,false); 
function nudgeTool(e){
  //Current selected tool
  var tool = document.getElementById(selectedTool);
  //Checking to see if the tool is visible
  if($("#" + selectedTool).is(":visible")){
    //Current key's code
    var keyCode = e.keyCode;
    //Default value to nudge by
    var nudgeValue = 1;
    //Checking if one of the Shift keys are down
    if(e.shiftKey){
      //If the shift key is down change the nudging value
      nudgeValue = 10;
    }
    //WASD keys
    //W
    if(keyCode == 87){
      tool.style.top = parseInt(tool.style.top) - nudgeValue + "px";
    }
    //S
    if(keyCode == 83){
      tool.style.top = parseInt(tool.style.top) + nudgeValue + "px";
    }
    //A
    if(keyCode == 65){
      tool.style.left = parseInt(tool.style.left) - nudgeValue + "px";
    }
    //D
    if(keyCode == 68){
      tool.style.left = parseInt(tool.style.left) + nudgeValue + "px";
    }
  }
}

//------------------------------------------------------------------//
//This function is used to hide the tool that is passed in.         //
//Parameters: tool - this is the tool that you want to hide.        //
//------------------------------------------------------------------//
function hideTool(tool){
  //Toggling the tool
  $(tool).toggle("highlight");
  
  //Removing the '#' from the tool var, if it is there
  var toolID = tool.replace('#', '');
  
  //Finding the tool in the toolsArray
  var index = 0;
  for(elements in toolsArray){
    if(toolsArray[index][_elementID] == toolID){
      break;
    }
    index++;
  }
  
  //Setting the flag that tool is hidden/visible
  toolsArray[index][_show] = !toolsArray[index][_show];
  
  //Reshowing the Help Text for the tool
  //Draggable
  if(toolsArray[index][_draggableHelpText] && toolsArray[index][_show] && toolsArray[index][_reshowDragHelpText]){
    $("#"+toolID+"_DragHelp").css("display", "initial");
  }
  //Resizable
  if(toolsArray[index][_resizeHelpText] &&
     toolsArray[index][_show] &&
     toolsArray[index][_reshowResizeHelpText]){
    $("#"+toolID+"_ResizeHelp").css("display", "initial");
  }
  
    //Deselecting the tool button
    document.getElementById(toolsArray[index][_measureToolButton]).blur();
}

//------------------------------------------------------------------//
//This function is used to move the passed in tool to the top of the//
// screen.                                                          //
//Parameters: tool - this is the tool that you want to move to the  //
//                    top of the screen                             //
//------------------------------------------------------------------//
//Moving the selected tool to the top
var currentMaxZIndex = 100;
var selectedTool;
function moveToTop(tool){
  //getting the indexes for the currently selected tool and newly selected tool
  var previousToolID = getToolIndex(selectedTool);
  var nextToolID = getToolIndex(tool);
      
  //Checking to see if the unselected outline is enabled
  if(previousToolID != -1 && toolsArray[previousToolID][_unselectedOutlineEnabled]){
    //Putting a the previous selected tool back to the default color
    $("#"+selectedTool).css("border", toolsArray[previousToolID][_unselectedOutlineThickness] +
                                      " solid " +
                                      toolsArray[previousToolID][_unselectedOutlineColor]);
  }

  //Saving the last tool selected
  selectedTool = tool;
    
  //check to see if the tool has the border enabled
  if(toolsArray[nextToolID][_selectedOutlineEnabled]){
    //Putting a different colored border around the selected tool
    $("#"+selectedTool).css("border", toolsArray[nextToolID][_selectedOutlineThickness] +
                                      " solid " +
                                      toolsArray[nextToolID][_selectedOutlineColor]);

    //Moving the selected tool to the top
    $("#"+tool).css("z-index", currentMaxZIndex);
    currentMaxZIndex++;
  }
}

//------------------------------------------------------------------//
//This is a helper function to get the tool index for a tool ID. If //
// the tool ID is not found then -1 is returned.                    //
//Parameters: toolID - this is the tool ID that you want to find the//
//                      index for                                   //
//------------------------------------------------------------------//
//Helper function to get the index for a given tool ID
function getToolIndex(toolID){
  //index number
  var count = 0;
  
  //looping through the tools to find the one that was passed in
  for(element in toolsArray){
    if(toolID == toolsArray[count][_elementID]){
      return count;
    }
    
    //increment counter
    count++;
  }
  
  //returning -1 it was not able to find a valid tool ID
  return -1;
}

//------------------------------------------------------------------//
//This function is for toggling the overlayimage for the current    //
// video                                                            //
//------------------------------------------------------------------//
//Variable to store the state of the Overlay Image
var overlayImageVisible = false;
//Toggleing the Overlay Image
function toggleOverlayImage(){  
  //1 Video
  if(numberOfVideos == 1){
    if(overlayImageVisible){
      //Hiding the overlay image
      $("#overlayImageID").css("display", "none");
      //Showing the video
      $("#dmv_video").css("display", "initial");
    }
    else{
      //Showing the Overlay Image
      $("#overlayImageID").css("display", "initial");
      //Hiding the video
      $("#dmv_video").css("display", "none");
      //Putting the Overlay Image above everything
      $("#overlayImageID").css("z-index", currentMaxZIndex);
      currentMaxZIndex++;
    }
  }
  else if(numberOfVideos == 2){
    if(overlayImageVisible){
      //Hiding the overlay images
      $("#overlayImageID").css("display", "none");
      $("#overlayImageID2").css("display", "none");
      //Showing the videos
      $("#dmv_video").css("display", "initial");
      $("#dmv_video2").css("display", "initial");
    }
    else{
      //Showing the Overlay Images
      $("#overlayImageID").css("display", "initial");
      $("#overlayImageID2").css("display", "initial");
      //Hiding the videos
      $("#dmv_video").css("display", "none");
      $("#dmv_video2").css("display", "none");
      //Putting the Overlay Image above everything
      $("#overlayImageID").css("z-index", currentMaxZIndex);
      $("#overlayImageID2").css("z-index", currentMaxZIndex);
      currentMaxZIndex++;
    }
  }
  
  //Toggling the state
  overlayImageVisible = !overlayImageVisible;

  //Deselecting the Overlay Image button
  document.getElementById('overlayImageButton').blur();
}

//------------------------------------------------------------------//
//This function is to spawn a marker.                               //
//------------------------------------------------------------------//
var markerID = 1;
var numMarkers = 0;
function spawnMarker(){
  //Checking to make sure we have not spawned the max amount of markers
  if(numMarkers < maxNumMarkers){
    console.log("spawn marker");

    //Getting the main div
    var mainDiv = document.getElementById("main");

    //HTML code for the markers
    var markerHTML = '<div id="marker' + markerID + '" class="markerClass" onmousedown="moveToTop(this.id)"></div>';

    //Putting the marker html into the page
    mainDiv.insertAdjacentHTML("afterBegin", markerHTML);

    //Changing the settings of the marker
    var currentMarker = $("#marker" + markerID);
    currentMarker.css("display", "initial");
    currentMarker.draggable();
    currentMarker.css("z-index", '30');
    currentMarker.css("position", "absolute");
    currentMarker.css("background-color", markerColor);
    currentMarker.css("top", markerTop);
    currentMarker.css("left", markerLeft);
    currentMarker.css("height", markerHeight);
    currentMarker.css("width", markerWidth);

    //Incrementing the marker id
    markerID++;
    //Incrementing the number of markers
    numMarkers++;
  }
}

//------------------------------------------------------------------//
//This function is to remove the selected marker.                   //
//------------------------------------------------------------------//
function removeSelectedMarker(){
  //Currently selected tool
  var selectedToolDOM = document.getElementById(selectedTool);
  
  //Checking to make sure the selected tool is a marker
  if(selectedToolDOM != null && selectedToolDOM.classList.contains('markerClass')){
    //Removing the marker HTML
    selectedToolDOM.remove();
    
    //Decrementing the marker index
    numMarkers--;
  }
}

//------------------------------------------------------------------//
//This function is used to remove all of the markers from the screen//
//------------------------------------------------------------------//
//Removing all the markers
function removeAllMarkers(){
  //Getting all the markers
  var markersArray = document.getElementsByClassName('markerClass');
  
  //Looping through the markers to remove them
  for(var i = 0; i < markersArray.length; i = 0){
    document.getElementById(markersArray[i].id).remove();
  }
  
  //Setting the number of markers back to zero
  numMarkers = 0;
}

//------------------------------------------------------------------//
//This function is used to deselect the current measurement tool.   //
//------------------------------------------------------------------//
function deselectTool(){
  if(selectedTool){
    tool = document.getElementById(selectedTool);
    var toolIndex = getToolIndex(selectedTool);
    //Checking to see if the unselected outline is enabled
    if(toolsArray[toolIndex][_unselectedOutlineEnabled]){
      //Putting a the previous selected tool back to the default color
      tool.style.border = toolsArray[toolIndex][_unselectedOutlineThickness] +
                          " solid " +
                          toolsArray[toolIndex][_unselectedOutlineColor];
    }
    selectedTool = "";
  }
  
  //Deselecting the Deselect Tool
  var deselectToolButton = document.getElementById('deselectTool');
  if (deselectToolButton != null) {
    deselectToolButton.blur();
  };
}

//------------------------------------------------------------------//
//This function is used for resizing the measurement tools when the //
// screen size changes. It only changes the size of the measurement //
// tool if it is enabled for the given tool.                        //
//------------------------------------------------------------------//
resizeTools = function() {
  //Getting the current size of the video tag
  var currentVideoHeight = document.getElementById('dmv_video').offsetHeight;
  var currentVideoWidth = document.getElementById('dmv_video').offsetWidth;
  
  var videoAspectRatio = currentVideoWidth / currentVideoHeight;
  
  //Checking to see if the videos aspect ratio
  //------------------------------------------
  //the aspect ratio of the video is perfect
  if(videoAspectRatio == (16 / 9)){
    //Do Nothing with the current width and height
  }
  //there is space on the left and right side of the video
  if(videoAspectRatio > (16 / 9)){
    currentVideoHeight = document.getElementById('dmv_video').offsetHeight;
    currentVideoWidth = (16 / 9) * currentVideoHeight;
  }
  //there is space on the top and bottom of the video
  if(videoAspectRatio < (16 / 9)){
    currentVideoWidth = document.getElementById('dmv_video').offsetWidth;
    currentVideoHeight = (9 / 16) * currentVideoWidth;
  }
  
  //looping through all of the tools
  var index = 0;
  var currentTool;
  for(elements in toolsArray){
    //setting the current tool
    currentTool = document.getElementById(toolsArray[index][_elementID]);

    //checking to see if the height of the tool should change with the screen size change
    if(toolsArray[index][_resizeHeightWithScreenChange]){
      currentTool.style.height = currentVideoHeight * toolsArray[index][_toolAndVideoHeightRatio] + "px";
    }

    //checking to see if the width of the tool should change with the screen size change
    if(toolsArray[index][_resizeWidthWithScreenChange]){
      currentTool.style.width = currentVideoWidth * toolsArray[index][_toolAndVideoWidthRatio] + "px";
    }

    index++;
  }
}