$(document).ready(function(){
	//Setting up the different tools
	//Options are in the toolsArray array
	var index = 0;
	var tool;
	var tool_jQuery;
	for(elements in toolsArray){
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
	var index = 0;
	for(element in toolsArray){
		tool = document.getElementById(toolsArray[index][0]);
		tool.style.left = toolsArray[index][1];
		tool.style.top = toolsArray[index][2];
		tool.style.height = toolsArray[index][3];
		tool.style.width = toolsArray[index][4];
		index++;
	}
}

function nudgeUp(){
	console.log('nudgeUp()');
	var tool = document.getElementById("horizontalRulerID");
	tool.style.top = parseInt(tool.style.top) - 5 + "px";
}

function nudgeDown(){
	console.log('nudgeDown()');
	var tool = document.getElementById("horizontalRulerID");
	tool.style.top = parseInt(tool.style.top) + 5 + "px";
}