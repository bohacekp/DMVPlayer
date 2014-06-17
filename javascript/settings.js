//Settings for the page
//Flags
//Video Selection
var videoSelection = true;
//Nudging Buttons
var nudgeButtons = true;
//Reset Button
var resetButton = true;
//

//Video Selection Array
/*
Template for the videoArray values
videoArray[n] = [
	"name of the video selection",
	"location of the .ogv video file",
	"location of the .mp4 video file"
];
*/
var videoArray = new Array();
videoArray[0] = [
	"Ping Pong Ball",
	"videos/ppb_4_clean.ogv",
	"videos/ppb_4_clean.mp4"
];
videoArray[1] = [
	"Wheel Falling",
	"videos/spin_falling.ogv",
	"videos/spin_falling.mp4"
];

//Tools Array
/*
Template for the toolArray values
toolsArray[n] = [
	"Element ID",
	"Pos Left",
	"Pos Top",
	"Size Height",
	"Size Width",
	"Show true/false",
	"Draggable true/false",
	"Resizable true/false",
	"Contained true/false",
	"Aspect Ratio Locked true/false"
];
*/
var toolsArray = new Array();
toolsArray[0] = [
	"horizontalRuler", 
	"250px",
	"250px",
  	"60px",
	"300px",
	true,
	true,
	true,
	false,
	false
];
toolsArray[1] = [
	"verticalRuler", 
	"50px",
	"50px",
  	"300px",
	"100px",
	true,
	true,
	true,
	false,
	false
];