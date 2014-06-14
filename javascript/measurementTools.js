$(document).ready(function(){
	//Constants
	var rulerSizeReduction = 8;
	//var containX = 600;
	//var containY = 800;
	var ruler = $('#horizontalRulerID');
	//ruler.height($( window ).height() / rulerSizeReduction);
	//ruler.width($( window ).width() / rulerSizeReduction);
//	ruler.resizable({aspectRatio:true});
	ruler.resizable();
	//does not allow ruler to be moved outside of the window, this fixes the scrolling problem that is caused by dragging the ruler offscreen
//	ruler.draggable({containment:"body"});
	ruler.draggable();
});

var toolsArray = new Array();
toolsArray[0] = [/*Element ID*/ "horizontalRulerID", 
				 /*Pos Left*/ "250px",
				 /*Pos Top*/ "250px",
  				 /*Size Height*/ "60px",
				 /*Size Width*/ "300px"];
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