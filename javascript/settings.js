//DMVPlayer Copyright 2014 by ISD197 and Jared Poetter

//Settings for the page
//Flags
//Video Selection
var videoSelection = true;
//Nudging Buttons
var nudgeButtons = true;
//Reset Button
var resetButton = true;
//Stop Watch
var stopWatch = false;

//Video Selection Array
/*
Template for the videoArray values
videoArray.push([
	"name of the video selection",
	"location of the .ogv video file",
	"location of the .mp4 video file"
]);
*/
var videoArray = new Array();
videoArray.push([
	"Ping Pong Ball",
	"videos/ppb_4_clean.ogv",
	"videos/ppb_4_clean.mp4"
]);
videoArray.push([
	"Wheel Falling",
	"videos/spin_falling.ogv",
	"videos/spin_falling.mp4"
]);

//Tools Array
/*
Template for the toolArray values
toolsArray.push([
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
	11"Z-Index",
	12"Color",
	13"Resizable Sides"
]);
*/
var toolsArray = new Array();
toolsArray.push([
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
	"horiRulerButton",
	30,
	"rgba(255,255,255,0.5)",
	"n, e, s, w, ne, se, sw, nw"
]);
toolsArray.push([
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
	"vertRulerButton",
	30,
	"rgba(255,255,255,0.5)",
	"n, e, s, w, ne, se, sw, nw"
]);