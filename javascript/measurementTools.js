//DMVPlayer Copyright 2014 by ISD197 and Jared Poetter

$(document).ready(function(){
	//Setting up the different tools
	//Adding in the tools dynamically from the toolsArray
	var index = 0;
	//Getting the main div
	var mainDiv = document.getElementById("main");
	//Tool Button Table
	var toolButtonTable = document.getElementById("button_table_2");
	//Going through all the tools defined in the 
	for(elements in toolsArray){
		//HTML code for the tools
		var toolHTML = '<div id="' + toolsArray[index][_elementID] + '" class="measurementToolClass" onmousedown="moveToTop(this.id)">' +
						'<img id="' + toolsArray[index][_toolImageID] + '" src="">'+
						'<p id="' + toolsArray[index][_elementID] + '_DragHelp" class="toolHelpText_Drag">Drag this into position</p>'+
						'<p id="' + toolsArray[index][_elementID] + '_ResizeHelp" class="toolHelpText_Resize">Drag a corner or edge to calibrate</p>'+
						'</div>';
		//Appending the tool's HTML
		mainDiv.insertAdjacentHTML("afterBegin", toolHTML);
		
		//HTML code for the tools button
		var toolButtonHTML = 
							 '<button ' +
//							 'value="' + toolsArray[index][_toolButtonTitle] + '" ' +
							 'id="' + toolsArray[index][_measureToolButton] + 
							 '" class="measurementToolClass" ' + 
//							 'style="padding: 25px 20px;" ' +
							 'onclick="hideTool(\'#' + toolsArray[index][_elementID] + '\')">' +
							 toolsArray[index][_toolButtonTitle] + '</button>';
		//Appenging the tool's button HTML
		toolButtonTable.insertAdjacentHTML("beforeEnd", toolButtonHTML);
		
		index++;
	}
	
	//Reset Tool Button
	//If there are any tools?
	if(toolsArray.length == 1){
		var resetButtonHTML = '<button id="resetTools" onclick="resetTools()">Reset Tool</button>';
		toolButtonTable.insertAdjacentHTML("beforeEnd", resetButtonHTML);
	}
	else if(toolsArray.length > 1){
		var resetButtonHTML = '<button id="resetTools" onclick="resetTools()">Reset Tools</button>';
		toolButtonTable.insertAdjacentHTML("beforeEnd", resetButtonHTML);
	}
	
	//Options are in the toolsArray array
	var index = 0;
	var tool;
	var tool_jQuery;
	
	//Stopwatch
	var stopWatch_Tool = $("#stopWatchTest");
	
	//Removing the stop watch if it disabled
	if(!stopWatch){
		stopWatch_Tool.css("display", "none");
	}
	
	$(".measurementToolClass").hide();
	
//	var toolButton;
//	//Hiding all the tools
//	for(elements in allToolsArray){
//		tool_jQuery = $(document.getElementById(allToolsArray[index][0]));
//		tool_jQuery.css("display", "none");
//		toolButton = $(document.getElementById(allToolsArray[index][1]));
//		toolButton.css("display", "none");
//		index++;
//	}
	
	//Tools table
	if(toolsArray.length == 0){
		$("#button_table_2").css("display", "none");
	}	
	
	index = 0;
	//Showing only the tools that are defined in toolsArray
	for(elements in toolsArray){
		
		//debug
//		console.log("adding in the tools");
//		console.log(toolsArray[index][0]);
		
		//Getting the tool
		tool_jQuery = $(document.getElementById(toolsArray[index][_elementID]));
		tool = document.getElementById(toolsArray[index][_elementID]);
		toolButton = $(document.getElementById(toolsArray[index][_measureToolButton]));

		//Setting the default location for the tool
		tool.style.left = toolsArray[index][_positionLeft];
		tool.style.top = toolsArray[index][_positionTop];

		//Setting the default size of the tool
		tool.style.height = toolsArray[index][_sizeHeight];
		tool.style.width = toolsArray[index][_sizeWidth];

		//Show the tool?
		if(toolsArray[index][_show]){
			tool_jQuery.css("display", "initial");
		}

		//Show the button for the tool
		toolButton.css("display", "initial");
		
		//Draggable?
		if(toolsArray[index][_draggable]){
			if(toolsArray[index][_contained]){
				tool_jQuery.draggable({containment:"body"});
			}
			else{
				tool_jQuery.draggable();
			}
		}

		//Resizable?
		if(toolsArray[index][_resizable]){
			tool_jQuery.resizable({
									aspectRatio:toolsArray[index][_aspectRatioLocked],
									handles:toolsArray[index][_resizableSides]
									});
		}

		//Z-Index
		tool_jQuery.css("z-index", toolsArray[index][_zIndex]);

		//Position Attributes
		tool_jQuery.css("position", "absolute");

		//Color
		tool_jQuery.css("background-color", toolsArray[index][_color]);
		tool_jQuery.css("border", "1px solid black");

		//Showing Help Text
		//Draggable
		if(!toolsArray[index][_draggableHelpText]){
			$("#"+toolsArray[index][_elementID]+"_DragHelp").css("display", "none");
		}
		//Resizable
		if(!toolsArray[index][_resizeHelpText]){
			$("#"+toolsArray[index][_elementID]+"_ResizeHelp").css("display", "none");
		}
		
		//Binding the tools to the drag and resize callbacks
		tool_jQuery.on( "drag", function( event, ui ) {$("#"+this.id+"_DragHelp").css("display", "none");} );
		tool_jQuery.on( "resize", function( event, ui ) {$("#"+this.id+"_ResizeHelp").css("display", "none");} );
		
		//Setting up the images for the tool
		document.getElementById(toolsArray[index][_toolImageID]).src = toolsArray[index][_toolImage];
		
		index++;
	}
	
	//Setting the attributes for the measurement tools help text
	//Drag Text
	var toolDragText = document.getElementsByClassName('toolHelpText_Drag');
	for(var i = 0; i < toolDragText.length; i++) {
		toolDragText[i].style.fontSize = toolHelpTextSize;
		toolDragText[i].style.color = toolHelpTextColor;
	}
	//Resize Text
	var toolResizeText = document.getElementsByClassName('toolHelpText_Resize');
	for(var i = 0; i < toolResizeText.length; i++) {
		toolResizeText[i].style.fontSize = toolHelpTextSize;
		toolResizeText[i].style.color = toolHelpTextColor;
	}
});

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