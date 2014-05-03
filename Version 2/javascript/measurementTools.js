$(document).ready(function(){
	//Constants
	var rulerSizeReduction = 8;
	//var containX = 600;
	//var containY = 800;
	var ruler = $('#horizontalRulerID');
	ruler.draggable({containment:"body"});//does not allow ruler to be moved outside of the window, this fixes the scrolling problem that is caused by dragging the ruler offscreen
	//ruler.height($( window ).height() / rulerSizeReduction);
	//ruler.width($( window ).width() / rulerSizeReduction);
	ruler.resizable({aspectRatio:true});
	ruler.draggable({containment:"body"});//does not allow ruler to be moved outside of the window, this fixes the scrolling problem that is caused by dragging the ruler offscreen
	//ruler.draggable();
});