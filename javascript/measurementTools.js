$(document).ready(function(){
	//Setting up the different tools
	//Options are in the toolsArray array
	var index = 0;
	var tool;
	var tool_jQuery;
	for(elements in toolsArray){
		
		//debug
		console.log("adding in the tools");
		console.log(toolsArray[index][0]);
		
		//Getting the tool
		tool_jQuery = $(document.getElementById(toolsArray[index][0]));
		tool = document.getElementById(toolsArray[index][0]);
		
		//Setting the default location for the tool
		tool.style.left = toolsArray[index][1];
		tool.style.top = toolsArray[index][2];
		
		//Setting the default size of the tool
		tool.style.height = toolsArray[index][3];
		tool.style.width = toolsArray[index][4];
		
		//Show the tool?
		if(!toolsArray[index][5]){
			tool_jQuery.css("display", "none");
		}
		
		//Draggable?
		if(toolsArray[index][6]){
			if(toolsArray[index][8]){
				tool_jQuery.draggable({containment:"body"});
			}
			else{
				tool_jQuery.draggable();
			}
		}
		
		//Resizable?
		if(toolsArray[index][7]){
			tool_jQuery.resizable({aspectRatio:toolsArray[index][9]});
		}
		
		index++;
	}
});

function resetTools(){
	selectedTool = "";
	var index = 0;
	for(element in toolsArray){
		tool = document.getElementById(toolsArray[index][0]);
		tool.style.left = toolsArray[index][1];
		tool.style.top = toolsArray[index][2];
		tool.style.height = toolsArray[index][3];
		tool.style.width = toolsArray[index][4];
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
		//W
		if(keyCode == 87){
			tool.style.top = parseInt(tool.style.top) - 5 + "px";
		}
		//S
		if(keyCode == 83){
			tool.style.top = parseInt(tool.style.top) + 5 + "px";
		}
		//A
		if(keyCode == 65){
			tool.style.left = parseInt(tool.style.left) - 5 + "px";
		}
		//D
		if(keyCode == 68){
			tool.style.left = parseInt(tool.style.left) + 5 + "px";
		}
	}
}

//Hide Tool
function hideTool(tool){
//	$(tool).css("display", "none");
	$(tool).toggle("show");
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