//Settings for the page
//-----//
//Flags//
//-----//
//Video Selection
var enableVideoSelection = true;
var basicVideoSelection = false;
var advancedVideoSelection = true;
//Nudging Buttons
var nudgeButtons = false;
//Reset Button
var resetButton = false;
//Stop Watch
var stopWatch = false; //NOT IMPLEMENTED!!!!!
//Enable Overlay Image
var enableOverlayImage = false;
//Enable Markers
var enableMarkers = false;
//Enable 'Click to Play' overlay
var enableClickToPlayOverlay = false;
//Number of Videos; 1 or 2
var numberOfVideos = 1;
//Video selection index to open with, starts at 0
var videoLeftMain = 0;
var videoRight = 0;

//---------//
//Help Text//
//---------//
//Measure Tool Help Text Size
var toolHelpTextSize = "75%";
//Measure Tool Help Text Color
var toolHelpTextColor = "white";

//-------//
//Markers//
//-------//
//Marker Color
var markerColor = "purple";
//Marker Top
var markerTop = "50px";
//Marker Left
var markerLeft = "200px";
//Marker Height
var markerHeight = "100px";
//Marker Width
var markerWidth = "10px";
//Max Number of Markers
var maxNumMarkers = 4;

//Video Selection Array
/*
Template for the videoArray values
videoArray.push([
	0"name of the video selection",
	1"location of the .ogv video file",
	2"location of the .mp4 video file",
	3"Overlay Image",
    4"file name without extension"
]);
*/
var videoArray = new Array();
//videoArray.push([
//	"ping pong",
//	"../videos/ppb_4_clean.ogv",
//	"../videos/ppb_4_clean.mp4",
//	""
//]);
videoArray.push([
	"ping pong",
	"../videos/spin_falling.ogv",
	"../videos/spin_falling.mp4",
	"",
    "ssfsdfsfddsf"
]);
//videoArray.push([
//	"Apple",
//	"../videos/freefall/apple.ogv",
//	"../videos/freefall/apple.mp4",
//	""
//]);
//videoArray.push([
//	"Bowling Ball",
//	"../videos/freefall/bowling_ball.ogv",
//	"../videos/freefall/bowling_ball.mp4",
//	""
//]);
//videoArray.push([
//	"Large Steel",
//	"../videos/freefall/large_steel.ogv",
//	"../videos/freefall/large_steel.mp4",
//	""
//]);
//videoArray.push([
//	"Ping Pong Ball",
//	"../videos/freefall/ping_pong_ball.ogv",
//	"../videos/freefall/ping_pong_ball.mp4",
//	""
//]);

var videoArray2 = new Array();
videoArray2 = videoArray;

//Advanced Video Selection Array
//Single Video
//Video Array

//Advanced Video Selection
//File Name Array
// the file name array contains each section video file name
// each gap will have the value from each of the selection dropdown put into it
// also do not include the extension in the file name, it will append .ogv and .mp4
var fileNameArray = new Array();
fileNameArray.push("first_");
fileNameArray.push("_second_");
fileNameArray.push("_third");
//Advanced Selection Array
// each entry ["drop down value", "file name value"]
var advancedSelectionArray = new Array();
advancedSelectionArray.push([
    ["name 1", "1"],
    ["name 2", "2"],
    ["name 3", "3"],
    ["name 4", "4"]
]);
advancedSelectionArray.push([
    ["name a", "a"],
    ["name b", "b"],
    ["name c", "c"],
    ["name d", "d"]
]);

//Tools Array
/*
Template for the toolArray values
toolsArray.push([
	0"Element ID", NO '#'
	1"Pos Left",
	2"Pos Top",
	3"Size Height",
	4"Size Width",
	5"Show tool at the start? true/false",
	6"Draggable true/false",
	7"Resizable true/false",
	8"Contained true/false",
	9"Aspect Ratio Locked true/false",
	10"Measure Tool Button"
	11"Z-Index",
	12"Color",
	13"Resizable Sides",
	14"Draggable Help Text",
	15"Resize Help Text",
	16"Reshow Drag Help Text",
	17"Reshow Resize Help Text",
	18"Tool Image",
	19"Tool Image ID",
	20"Tool's Button Title",
    21"Selected Outline Enabled?"
    22"Selected Outline Color",
    23"Selected Outline Thickness",
    24"Unselected Outline Enabled",
    25"Unselected Outline Color",
    26"Unselected Outline Thickness"
]);
*/
var toolsArray = new Array();
toolsArray.push([
	"horizontalRuler", 
	"250px",
	"250px",
  	"60px",
	"300px",
	false,
	true,
	true,
	false,
	false,
	"horiRulerButton",
	30,
	"rgba(255, 255, 255, 0)",
	"n, e, s, w, ne, se, sw, nw",
	true,
	true,
	true,
	true,
	"../images/hruler_100_white.png",
	"hRulerImg",
	"Horizontal Ruler",
    false,
    "#00FFFF",
    "5px",
    true,
    "#00FF55",
    "1px"
]);
toolsArray.push([
	"verticalRuler", 
	"50px",
	"50px",
  	"300px",
	"100px",
	false,
	true,
	true,
	false,
	false,
	"vertRulerButton",
	30,
	"rgba(255, 255, 255, 0)",
	"n, e, s, w, ne, se, sw, nw",
	true,
	true,
	true,
	true,
	"../images/vruler_100_white.png",
	"vRulerImg",
	"Vertical Ruler",
    false,
    "#00FFFF",
    "5px",
    true,
    "#00FF55",
    "1px"
]);
//toolsArray.push([
//	"protractor_Quarter_Q4", 
//	"500px",
//	"50px",
//  	"200px",
//	"200px",
//	false,
//	true,
//	true,
//	false,
//	true,
//	"protractorButton",
//	30,
//	"rgba(255, 255, 255, 0)",
//	"n, e, s, w, ne, se, sw, nw",
//	true,
//	true,
//	true,
//	true,
//	"../images/protractor_quarter_q4_white.png",
//	"vProtractor_Quarter_Q4Img",
//	"Protractor"
//]);