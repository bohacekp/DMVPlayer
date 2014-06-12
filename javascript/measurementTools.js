$(document).ready(function(){
	//Constants
	var rulerSizeReduction = 8;
	var ruler = $('#over');
	//Contains the Ruler within the body
	ruler.draggable({containment:"body"});
	ruler.height($( document ).height() / rulerSizeReduction);
	ruler.width($( document ).width() / rulerSizeReduction);
	ruler.resizable({aspectRatio:true});
});