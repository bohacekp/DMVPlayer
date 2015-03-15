//definitions.js
//This file contains all of the constants and definitions for the DMVPlayer

//Definitions
var LEFT_MAIN_VIDEO = 0;
var RIGHT_VIDEO = 1;

//videoArray indexes
var _nameOfVideo = 0;
var _locationOGV = 1;
var _locationMP4 = 2;
var _overlayImage = 3;
var _videoFileName = 4;
var _videoInstructionsPage = 5;

//advancedSelectionArray indexes
var _advancedSelectionName = 0;
var _advancedSelectionValue = 1;

//toolsArray indexes
var _elementID = 0;
var _positionLeft = 1;
var _positionTop = 2;
var _sizeHeight = 3;
var _sizeWidth = 4;
var _show = 5;
var _draggable = 6;
var _resizable = 7;
var _contained = 8;
var _aspectRatioLocked = 9;
var _measureToolButton = 10;
var _zIndex = 11;
var _color = 12;
var _resizableSides = 13;
var _draggableHelpText = 14;
var _resizeHelpText = 15;
var _reshowDragHelpText = 16;
var _reshowResizeHelpText = 17;
var _toolImage = 18;
var _toolImageID = 19;
var _toolButtonTitle = 20;
var _selectedOutlineEnabled = 21;
var _selectedOutlineColor = 22;
var _selectedOutlineThickness = 23;
var _unselectedOutlineEnabled = 24;
var _unselectedOutlineColor = 25;
var _unselectedOutlineThickness = 26;
var _resizeHeightWithScreenChange = 27;
var _resizeWidthWithScreenChange = 28;
var _toolAndVideoHeightRatio = 29;
var _toolAndVideoWidthRatio = 30;

//Video players
var player = document.getElementById('dmv_video'); 
var player2 = document.getElementById('dmv_video_2');
var framerate = 30;

//Video Selectors
var videoSelectorIDArray; //Left/Main

//Video Instructions Window
var videoInstructionWindow;

//Max Slider Value
var maxSliderValue = 100000;