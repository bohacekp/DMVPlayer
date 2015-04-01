//Settings for the player
//Page Title of the Player
// This is the title that will show up at the top of the web browser
var pageTitle = "DMVPlayer";
//Player Instrctions Page
// This is the page that is opened when the player instructions button is pressed.
var playerInstrucitonsPage = "../../genXXXX/instructions/playerInstructions.html";

//-----//
//Flags//
//-----//
//Video Selection
// This flag turns enables video selection. Video selection is used for switching between videos in a single player.
var enableVideoSelection = true;
//Nudging Buttons
// Nudge buttons are WASD and they allow you to move the currently selected tool with finer movements. 
// Holding shift will move the tool faster.
var nudgeButtons = false;
//Reset Button
// Enable a button to show the button to reset the tools size and position.
var resetButton = false;
//Enable Markers
// Enables markers for the user to use.
var enableMarkers = false;
//Go To Frame Enabled
// Enabling the 'Go to Frame' option to allow the user to manually select the frame of the video.
var goToFrameControlEnabled = true;
//Enable Player Instructions Page
// This will show a button to bring up a Player Instructions page.
// This help page will be general information about how to use the DMVPlayer.
var enablePlayerInsctructions = true;
//Enable Video Instructions Page
// This will show a button to bring up a Video Instructions page.
// Thie help page will be information to help the user figure out the physics problem the currently selected video.
// You are able to specify a different instructions page for each video.
var enableVideoInstructions = true;

//StopWatch
//Enables a box that displays ellapsed time and frames from a user set starting point
var enableStopwatch = true;
//Show the stopwatch at the start of the player
var showStopWatchAtStart = false;
//allows stopwatch to show ellapsed time
var showTime = true;
//allows stopwatch to show ellapsed frames
var showFrame = true;
//enables dragging for the stopwatch
var stopwatchDraggable = true;
//Position of the StopWatch
var stopWatchLeftPosition = '50px';
var stopWatchTopPosition = '100px';
//Number of decimal values you want for the Time in the StopWatch; works for 0-4, if you need more ask the developer
var stopWatchNumberOfDecimalValues = 4;

//Features that are not implemented.
//Stop Watch
var stopWatch = false; //NOT IMPLEMENTED!!!!!
//Enable Overlay Image
var enableOverlayImage = false; //NOT IMPLEMENTED!!!!!
//Enable 'Click to Play' overlay
var enableClickToPlayOverlay = false; //NOT IMPLEMENTED!!!!!

//---------//
//Help Text//
//---------//
// The properties of the help text that shows up on the measurement tools.
//Measure Tool Help Text Size
var toolHelpTextSize = "75%";
//Measure Tool Help Text Color
var toolHelpTextColor = "white";

//-------//
//Markers//  Not tested with new code.
//-------//
// These are the properties of the markers.
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

//-----//
//Video//
//-----//
//Number of Videos; 1 or 2
// This variable tells the player how many videos you want for the player.
var numberOfVideos = 1;

//Video Selection Array
/*
Steps for creating a video array.
1 - create a copy of the following code
videoArray.push([
  "NOT USED ANYMORE",
  ".ogv file path",
  ".mp4 file path",
  "overlay image file path",
  "file name without extension",
  frame rate of the video,
  "location of the video's instruction page"
]);
2 - paste it after the 'var videoArray = new Array();' line
3 - change all of the values to match your video information

Template for the videoArray values
videoArray.push([
  0"name of the video selection",     //NOT USED ANYMORE, REMOVE
  1"location of the .ogv video file", //This is the location of the .ogv video file
  2"location of the .mp4 video file", //This is the location of the .mp4 video file
  3"Overlay Image",                   //This is the location of the overlay image
  4"file name without extension"      //This is the name of the file without the extension
  5"filmed framerate of video"    //used the calculation of ellapsed time
  6"file name for the video's instruction page" //This is the page that is brought up when the user selects help on this video
]);
*/
var videoArray = new Array();
videoArray.push([
  "junk",
  "videos/circleLab2/circle_0_30fps_clean.ogv",
  "videos/circleLab2/circle_0_30fps_clean.mp4",
  "",
  "circle_0_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_0_240fps_clean.ogv",
  "videos/circleLab2/circle_0_240fps_clean.mp4",
  "",
  "circle_0_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_1_30fps_clean.ogv",
  "videos/circleLab2/circle_1_30fps_clean.mp4",
  "",
  "circle_1_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_1_240fps_clean.ogv",
  "videos/circleLab2/circle_1_240fps_clean.mp4",
  "",
  "circle_1_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_2_30fps_clean.ogv",
  "videos/circleLab2/circle_2_30fps_clean.mp4",
  "",
  "circle_2_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",  
  "videos/circleLab2/circle_2_240fps_clean.ogv",
  "videos/circleLab2/circle_2_240fps_clean.mp4",
  "",
  "circle_2_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_3_30fps_clean.ogv",
  "videos/circleLab2/circle_3_30fps_clean.mp4",
  "",
  "circle_3_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_3_240fps_clean.ogv",
  "videos/circleLab2/circle_3_240fps_clean.mp4",
  "",
  "circle_3_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_4_30fps_clean.ogv",
  "videos/circleLab2/circle_4_30fps_clean.mp4",
  "",
  "circle_4_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_4_240fps_clean.ogv",
  "videos/circleLab2/circle_4_240fps_clean.mp4",
  "",
  "circle_4_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_5_30fps_clean.ogv",
  "videos/circleLab2/circle_5_30fps_clean.mp4",
  "",
  "circle_5_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_5_240fps_clean.ogv",
  "videos/circleLab2/circle_5_240fps_clean.mp4",
  "",
  "circle_5_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_6_30fps_clean.ogv",
  "videos/circleLab2/circle_6_30fps_clean.mp4",
  "",
  "circle_6_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_6_240fps_clean.ogv",
  "videos/circleLab2/circle_6_240fps_clean.mp4",
  "",
  "circle_6_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_7_30fps_clean.ogv",
  "videos/circleLab2/circle_7_30fps_clean.mp4",
  "",
  "circle_7_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_7_240fps_clean.ogv",
  "videos/circleLab2/circle_7_240fps_clean.mp4",
  "",
  "circle_7_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_8_30fps_clean.ogv",
  "videos/circleLab2/circle_8_30fps_clean.mp4",
  "",
  "circle_8_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_8_240fps_clean.ogv",
  "videos/circleLab2/circle_8_240fps_clean.mp4",
  "",
  "circle_8_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_9_30fps_clean.ogv",
  "videos/circleLab2/circle_9_30fps_clean.mp4",
  "",
  "circle_9_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_9_240fps_clean.ogv",
  "videos/circleLab2/circle_9_240fps_clean.mp4",
  "",
  "circle_9_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_10_30fps_clean.ogv",
  "videos/circleLab2/circle_10_30fps_clean.mp4",
  "",
  "circle_10_30fps_clean",
  30,
  "instructions/video_instructions.html"
]);
videoArray.push([
  "junk",
  "videos/circleLab2/circle_10_240fps_clean.ogv",
  "videos/circleLab2/circle_10_240fps_clean.mp4",
  "",
  "circle_10_240fps_clean",
  240,
  "instructions/video_instructions.html"
]);

//This video array is for the double video player but it is not implemented yet.
var videoArray2 = new Array();
videoArray2 = videoArray;

//Advanced Video Selection
//File Name Array
// The fileNameArray contains each section video file name, each gap will have the value from each of the selection dropdown inserted.
// Also do not include the extension in the file name, it will append .ogv and .mp4
var fileNameArray = new Array();
fileNameArray.push("circle_");
fileNameArray.push("_");
fileNameArray.push("_clean");
//Advanced Selection Titles
// The advancedSelectionTitleArray contains the titles for each of the dropdowns in the player. If you don't want titles put in "".
var advancedSelectionTitleArray = new Array();
advancedSelectionTitleArray.push([
  "title 1"
]);
advancedSelectionTitleArray.push([
  "title 2"
]);
//Advanced Selection Array
// Each entry ["drop down value", "file name value"]
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

//Initial Video
//This will be the initial video that is shown when the player starts
//The values are just a index number, NO quotes
var currentVideoLeft_Main = [3, 1];
var currentVideoRight = 0;

//Tools Array
/*
Creating the tools array you need to make a copy of template and file in the values.

Template for the toolArray values
toolsArray.push([
  0"Element ID", NO '#'                             //The ID for the div element
  1"Pos Left",                                      //The position of the left side of the tool
  2"Pos Top",                                       //The position of the top side of the tool
  3"Size Height",                                   //The height of the tool, NOT USED ANYMORE, REMOVE
  4"Size Width",                                    //The width of the tool, NOT USED ANYMORE, REMOVE
  5"Show tool at the start? true/false",            //Showing the tool at the start
  6"Draggable true/false",                          //If the tool should be draggable
  7"Resizable true/false",                          //If the tool should be resizable
  8"Contained true/false",                          //If the tool should be contained
  9"Aspect Ratio Locked true/false",                //If the tool should have the aspect ratio locked
  10"Measure Tool Button",                          //If the button for the tool should be shown
  11"Z-Index",                                      //The z-index for the tool
  12"Color",                                        //The color of the tool background
  13"Resizable Sides",                              //Which sides you want the user to be able to resize the tool from; n, e, s, w, ne, se, sw, nw
  14"Draggable Help Text",                          //Show draggable help text
  15"Resize Help Text",                             //Show resizable help text
  16"Reshow Drag Help Text",                        //Reshow draggable help text when the reset tools button is pressed
  17"Reshow Resize Help Text",                      //Reshow resizable help text when the reset tools button is pressed
  18"Tool Image",                                   //The location of the tool image
  19"Tool Image ID",                                //The ID for the image tag
  20"Tool's Button Title",                          //The title for the tool's button
  21"Selected Outline Enabled?",                    //Enable the outline to show the currently selected tool
  22"Selected Outline Color",                       //The color of the tool's outline if the tool is the currently selected tool
  23"Selected Outline Thickness",                   //The thickness of the outline if the tool is the currently selected tool
  24"Unselected Outline Enabled",                   //Enable the outline when the tool is not selected
  25"Unselected Outline Color",                     //The color of the tool's outline when the tool is not selected
  26"Unselected Outline Thickness",                 //The thickness of the outline if the tool is not selected
  27"Resize Height with Screen Change true/false",  //Enable resizing of the tool's hieght when the screen size changes
  28"Resize Width with Screen Change true/false",   //Enable resizing of the tool's width when the screen size changes
  29"Tool And Video Height Ratio",                  //The height of the tool relative to the height of the video. 1.0 equals 100% of the video height
  30"Tool And Video Width Ratio"                    //The width of the tool relative to the width of the video. 1.0 equals 100% of the video width
]);
*/
var toolsArray = new Array();
toolsArray.push([
  "horizontalRuler", 
  "0px",        ////this value needs to be a percentage of the video size.
  "0px",        ////this value needs to be a percentage of the video size.
  "60px",       ////this value needs to be a percentage of the video size.
  "300px",      ////this value needs to be a percentage of the video size.
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
  0.5,
  0.5
]);

toolsArray.push([
  "horizontalRulerCalibrated", 
  "0px",
  "0px",
  "60px",
  "300px",
  false,
  true,
  false,
  false,
  false,
  "horiRulerButton2",
  30,
  "rgba(255, 255, 255, 0)",
  "n, e, s, w, ne, se, sw, nw",
  true,
  false,
  true,
  false,
  "images/hruler_100_white.png",
  "hRulerImg2",
  "Horizontal Ruler Calibrated",
  false,
  "#00FFFF",
  "5px",
  true,
  "#FF0000",
  "1px",
  true,
  true,
  0.10,
  0.30
]);