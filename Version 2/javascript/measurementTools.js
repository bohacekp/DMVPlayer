$(document).ready(function(){
	//Constants
	var rulerSizeReduction = 8;

	var ruler = $('#over');
	ruler.height($( document ).height() / rulerSizeReduction);
	ruler.width($( document ).width() / rulerSizeReduction);
	ruler.resizable({aspectRatio:true});
	ruler.draggable();
});