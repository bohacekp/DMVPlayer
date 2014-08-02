function resetTools(){
	selectedTool = "";
	var index = 0;
	for(element in toolsArray){
		tool = document.getElementById(toolsArray[index][_elementID]);
		tool.style.left = toolsArray[index][_positionLeft];
		tool.style.top = toolsArray[index][_positionTop];
		tool.style.height = toolsArray[index][_sizeHeight];
		tool.style.width = toolsArray[index][_sizeWidth];
		tool.style.border = "1px solid black";
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
		var nudgeValue = 10;
		//Checking if one of the Shift keys are down
		if(e.shiftKey){
			//If the shift key is down change the nudging value
			nudgeValue = 1;
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
	//Putting a the previous selected tool back to the default color
	$("#"+selectedTool).css("border", "1px solid black");
	//Saving the last tool selected
	selectedTool = tool;
	//Putting a different colored border around the selected tool
	$("#"+selectedTool).css("border", "2px solid red");
	
	//Moving the selected tool to the top
	$("#"+tool).css("z-index", currentMaxZIndex);
	currentMaxZIndex++;
}

//Variable to store the state of the Overlay Image
var overlayImageVisible = false;
//Toggleing the Overlay Image
function toggleOverlayImage(){	
	if(overlayImageVisible){
		$("#overlayImageID").css("display", "none");
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
	
	//Toggling the state
	overlayImageVisible = !overlayImageVisible;
}