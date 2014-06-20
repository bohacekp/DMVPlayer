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

//All Tools Array
//This array holds all the id's for the measuring tools
//Do NOT remove tools from this array
//Template
//allToolsArrayn[n] = [
//"ID of the tool", 
//"ID of the tools button"
//];
var allToolsArray = new Array();
allToolsArray[0] = ["horizontalRuler", 
					"horiRulerButton"];
allToolsArray[1] = ["verticalRuler", 
					"vertRulerButton"];

//Tools Array
/*
Template for the toolArray values
toolsArray[n] = [
	0"Element ID",
	1"Pos Left",
	2"Pos Top",
	3"Size Height",
	4"Size Width",
	5"Show true/false",
	6"Draggable true/false",
	7"Resizable true/false",
	8"Contained true/false",
	9"Aspect Ratio Locked true/false",
	10"Measure Tool Button"
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
	false,
	"horiRulerButton"
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
	false,
	"vertRulerButton"
];