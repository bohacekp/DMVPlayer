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
}

//Nudging the measurement tool with the WASD keys
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

//Hide Tool
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
	if(toolsArray[index][_draggableHelpText] &&
	   toolsArray[index][_show] &&
	   toolsArray[index][_reshowDragHelpText]){
		$("#"+toolID+"_DragHelp").css("display", "initial");
	}
	//Resizable
	if(toolsArray[index][_resizeHelpText] &&
	   toolsArray[index][_show] &&
	   toolsArray[index][_reshowResizeHelpText]){
		$("#"+toolID+"_ResizeHelp").css("display", "initial");
	}
}

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
}

//Spawning marker
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

//Remove selected marker
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

//Deselect tool
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
}

//callback if the screen is resized
resizeTools = function() {

  //the current size of the video
  var currentVideoHeight = document.getElementById('dmv_video').offsetHeight;
  var currentVideoWidth = document.getElementById('dmv_video').offsetWidth;

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
$(window).resize(resizeTools);