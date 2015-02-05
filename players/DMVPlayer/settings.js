//Settings for the page
//-----//
//Flags//
//-----//
//Video Selection
var enableVideoSelection = false;
var basicVideoSelection = false;
var advancedVideoSelection = true;
//Nudging Buttons
var nudgeButtons = false;
//Reset Button
var resetButton = false;
//Stop Watch
var stopWatch = false; //NOT IMPLEMENTED!!!!!
//Enable Overlay Image
var enableOverlayImage = false; //NOT IMPLEMENTED!!!!!
//Enable Markers
var enableMarkers = false;
//Enable 'Click to Play' overlay
var enableClickToPlayOverlay = false; //NOT IMPLEMENTED!!!!!
//Number of Videos; 1 or 2
var numberOfVideos = 1;
//Video selection index to open with, starts at 0
var videoLeftMain = 0;
var videoRight = 0;
//Go To Frame Enabled
var goToFrameControlEnabled = false;

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
videoArray.push([
	"junk",
	"videos/circleLab2/circle_0_30fps_clean.ogv",
	"videos/circleLab2/circle_0_30fps_clean.mp4",
	"",
  "circle_0_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_0_240fps_clean.ogv",
	"videos/circleLab2/circle_0_240fps_clean.mp4",
	"",
  "circle_0_240fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_1_30fps_clean.ogv",
	"videos/circleLab2/circle_1_30fps_clean.mp4",
	"",
  "circle_1_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_1_240fps_clean.ogv",
	"videos/circleLab2/circle_1_240fps_clean.mp4",
	"",
  "circle_1_240fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_2_30fps_clean.ogv",
	"videos/circleLab2/circle_2_30fps_clean.mp4",
	"",
  "circle_2_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_2_240fps_clean.ogv",
	"videos/circleLab2/circle_2_240fps_clean.mp4",
	"",
  "circle_2_240fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_3_30fps_clean.ogv",
	"videos/circleLab2/circle_3_30fps_clean.mp4",
	"",
  "circle_3_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_3_240fps_clean.ogv",
	"videos/circleLab2/circle_3_240fps_clean.mp4",
	"",
  "circle_3_240fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_4_30fps_clean.ogv",
	"videos/circleLab2/circle_4_30fps_clean.mp4",
	"",
  "circle_4_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_4_240fps_clean.ogv",
	"videos/circleLab2/circle_4_240fps_clean.mp4",
	"",
  "circle_4_240fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_5_30fps_clean.ogv",
	"videos/circleLab2/circle_5_30fps_clean.mp4",
	"",
  "circle_5_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_5_240fps_clean.ogv",
	"videos/circleLab2/circle_5_240fps_clean.mp4",
	"",
  "circle_5_240fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_6_30fps_clean.ogv",
	"videos/circleLab2/circle_6_30fps_clean.mp4",
	"",
  "circle_6_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_6_240fps_clean.ogv",
	"videos/circleLab2/circle_6_240fps_clean.mp4",
	"",
  "circle_6_240fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_7_30fps_clean.ogv",
	"videos/circleLab2/circle_7_30fps_clean.mp4",
	"",
  "circle_7_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_7_240fps_clean.ogv",
	"videos/circleLab2/circle_7_240fps_clean.mp4",
	"",
  "circle_7_240fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_8_30fps_clean.ogv",
	"videos/circleLab2/circle_8_30fps_clean.mp4",
	"",
  "circle_8_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_8_240fps_clean.ogv",
	"videos/circleLab2/circle_8_240fps_clean.mp4",
	"",
  "circle_8_240fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_9_30fps_clean.ogv",
	"videos/circleLab2/circle_9_30fps_clean.mp4",
	"",
  "circle_9_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_9_240fps_clean.ogv",
	"videos/circleLab2/circle_9_240fps_clean.mp4",
	"",
  "circle_9_240fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_10_30fps_clean.ogv",
	"videos/circleLab2/circle_10_30fps_clean.mp4",
	"",
  "circle_10_30fps_clean"
]);
videoArray.push([
	"junk",
	"videos/circleLab2/circle_10_240fps_clean.ogv",
	"videos/circleLab2/circle_10_240fps_clean.mp4",
	"",
  "circle_10_240fps_clean"
]);

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
fileNameArray.push("circle_");
fileNameArray.push("_");
fileNameArray.push("_clean");
//Advanced Selection Titles
var advancedSelectionTitleArray = new Array();
advancedSelectionTitleArray.push([
    ""
]);
advancedSelectionTitleArray.push([
    ""
]);
//Advanced Selection Array
// each entry ["drop down value", "file name value"]
var advancedSelectionArray = new Array();
advancedSelectionArray.push([
    ["Speed 0", "0"],
    ["Speed 1", "1"],
    ["Speed 2", "2"],
    ["Speed 3", "3"],
    ["Speed 4", "4"],
    ["Speed 5", "5"],
    ["Speed 6", "6"],
    ["Speed 7", "7"],
    ["Speed 8", "8"],
    ["Speed 9", "9"],
    ["Speed 10", "10"],
]);
advancedSelectionArray.push([
    ["30 FPS", "30fps"],
    ["240 FPS", "240fps"]
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
  26"Unselected Outline Thickness",
  27"Resize Height with Screen Change true/false",
  28"Resize Width with Screen Change true/false"
  29"Tool And Video Height Ratio",
  30"Tool And Video Width Ratio"
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
  "images/hruler_100_white.png",
  "hRulerImg",
  "Horizontal Ruler",
  false,
  "#00FFFF",
  "5px",
  true,
  "#00FF55",
  "1px",
  false,
  false,
  "",
  ""
]);

toolsArray.push([
  "horizontalRuler2", 
  "250px",
  "250px",
  "60px",
  "300px",
  false,
  true,
  true,
  false,
  false,
  "horiRulerButton2",
  30,
  "rgba(255, 255, 255, 0)",
  "n, e, s, w, ne, se, sw, nw",
  true,
  true,
  true,
  true,
  "images/hruler_100_white.png",
  "hRulerImg2",
  "Horizontal Ruler2",
  false,
  "#00FFFF",
  "5px",
  true,
  "#00FF55",
  "1px",
  true,
  true,
  "",
  ""
]);