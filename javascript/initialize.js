//This is the final javascript file that get executed

$(document).ready(function(){	
	//----------------------------------------------//
	//Player Controls                               //
	//----------------------------------------------//
	//Removing the reset tools buttons if it is turned off
	if(!resetButton){
		$("#resetTools").css("display", "none");
	}
	
	//Setting the default video
	var dmv_player = document.getElementById("dmv_video");
	var mp4_video = document.getElementById("mp4_video");
	var ogg_video = document.getElementById("ogg_video");
	var dmv_player2 = document.getElementById("dmv_video2");
	var mp4_video2 = document.getElementById("mp4_video2");
	var ogg_video2 = document.getElementById("ogg_video2");
	
	//Enabling 'click to play'
	if(enableClickToPlayOverlay){
		dmv_player.onclick = playPause;
		dmv_player2.onclick = playPause;
	}
	
	//Setting the oncanplaythrough callback to change the video poster image to the 'click to play'
	var showedPlaySplashScreen = false;
	dmv_player.oncanplaythrough = 
		function(){
			if(!showedPlaySplashScreen && enableClickToPlayOverlay){
				dmv_player.setAttribute('poster', '../images/play_splash_screen.png');
				dmv_player2.setAttribute('poster', '../images/play_splash_screen.png');
			}
			else if(!showedPlaySplashScreen && !enableClickToPlayOverlay){
				dmv_player.setAttribute('poster', '');
				dmv_player2.setAttribute('poster', '');
			}
			showedPlaySplashScreen = true;
		};
	
	//Setting the play callback to remove the video poster of 'click to play'
	$('#dmv_video').bind('play', function(){
											dmv_player.removeAttribute('poster');
											dmv_player2.removeAttribute('poster');
										   });
	
	//Setting the video sources
	//Player 1
	if(dmv_player.canPlayType("video/ogg") == "maybe" || dmv_player.canPlayType("video/ogg") == "probably") {
		$(ogg_video).attr('src', videoArray[videoLeftMain][_locationOGV]);
	}
	else if(dmv_player.canPlayType("video/mp4") == "maybe" || dmv_player.canPlayType("video/mp4") == "probably") {
		$(mp4_video).attr('src', videoArray[videoLeftMain][_locationMP4]);
	}
	//Player 2
	if(dmv_player2.canPlayType("video/ogg") == "maybe" || dmv_player2.canPlayType("video/ogg") == "probably") {
		$(ogg_video2).attr('src', videoArray2[videoRight][_locationOGV]);
	}
	else if(dmv_player2.canPlayType("video/mp4") == "maybe" || dmv_player2.canPlayType("video/mp4") == "probably") {
		$(mp4_video2).attr('src', videoArray2[videoRight][_locationMP4]);
	}
	
	//Reload the dmv video
	dmv_player.load();
	dmv_player2.load();
	
	//Creating the video selectors
	if(enableVideoSelection){
        //Basic video selection
        if(basicVideoSelection && !advancedVideoSelection){
            //1 video
            if(numberOfVideos == 1){
                //HTML for the video selector
                var videoSelectorHTML = '<p>Pick a Video:<select id="video_selector"></select></p>';
                document.getElementById('button_table_1').insertAdjacentHTML("afterEnd", videoSelectorHTML);

                //Drop down for the video
                var video_selector = $("#video_selector");
            }
            //2 videos
            else if(numberOfVideos == 2){
                //HTML for the video selectors
                var videoSelectorHTML = 'Pick a Video(Left):<select id="video_selector"></select>';
                var videoSelector2HTML = 'Pick a Video(Right):<select id="video_selector2"></select>';
                document.getElementById('button_table_1').insertAdjacentHTML("afterEnd", videoSelector2HTML);
                document.getElementById('button_table_1').insertAdjacentHTML("afterEnd", videoSelectorHTML);

                //Drop down for the different videos
                var video_selector = $("#video_selector");
                var video_selector2 = $("#video_selector2");
            }
        }
        
        //Advanced video selection
        else if(!basicVideoSelection && advancedVideoSelection){
            //1 video
            if(numberOfVideos == 1){
                //checking to see if the fileNameArray and advancedSelectionArray
                if((fileNameArray.length - 1) < advancedSelectionArray.length){
                    console.error("Error:You have too many selections in the advancedSelectionArray");
                }
                if((fileNameArray.length - 1) > advancedSelectionArray.length){
                    console.error("Error:You have too many sections in the fileNameArray");
                }
                
                var count = 0;
                var videoSelector = "video_selector";
                var videoSelectorIDArray = new Array();
                var videoSelectionHTML = "<p>Pick your parameters:";
                for(elements in advancedSelectionArray){
                    //adding the HTML for the video selector
                    videoSelectionHTML = videoSelectionHTML + '<select id=' + videoSelector + count + '></select>';
                    
                    //saving the video selector ids for later
                    videoSelectorIDArray.push(videoSelector + count);
                    
                    count++;
                }
                
                videoSelectionHTML = videoSelectionHTML + "</p>";
                
                //putting in the html
                document.getElementById('button_table_1').insertAdjacentHTML("afterEnd", videoSelectionHTML);
            }
            //2 videos
            else if(numberOfVideos == 2){
                console.warn("Warning:Advanced video selection is currently not supported.");
            }
        }
        
        //Error
        else{
            console.error("Error:You cannot have both basic and advanced video selection enabled.");
        }
	
        //Setting up the options in the video selection
        if(numberOfVideos == 1 || numberOfVideos == 2){
            //Player 1
            //check to see if they want basic video selection
            if(basicVideoSelection && !advancedVideoSelection){
                var index = 0;
                for(element in videoArray){
                    var option = video_selector.append($("<option></option>").attr("value",index).text(videoArray[index][_nameOfVideo]));
                    index++;
                }
            }
            
            //check to see if they want advanced video selection
            else if(advancedVideoSelection && !basicVideoSelection){
                //indexes
                var selectionIndex = 0;
                var optionIndex = 0;
                //loop through the selection drop downs
                for(element in advancedSelectionArray){
                    //looking up the video selector
                    var videoSelector = $("#" + videoSelectorIDArray[selectionIndex]);
                    //loop through the options for the drop down
                    for(options in advancedSelectionArray[selectionIndex]){
                        //appending the options
                        videoSelector.append($("<option></option>").attr("value", optionIndex).text(
                            advancedSelectionArray[selectionIndex][optionIndex][_advancedSelectionName]
                        ));
                        //increment index for the options
                        optionIndex++;
                    }
                    //reseting index for the options
                    optionIndex = 0;
                    //increment index for the selection drop down
                    selectionIndex++;
                }
            }
            
            //error
            else{
                console.error("Error:You cannot have both basic and advanced video selection enabled.");
            }
        }
        if(numberOfVideos == 2){
            //Player 2
            var index = 0;
            for(element in videoArray2){
                var option = video_selector2.append($("<option></option>").attr("value",index).text(videoArray2[index][_nameOfVideo]));
                index++;
            }
        }

        //If the drop down changes
        var videoSelectorFunction = function(){
            //Player 1
            var dmv_player = document.getElementById("dmv_video");
            var mp4_video = document.getElementById("mp4_video");
            var ogg_video = document.getElementById("ogg_video");

            //checking to see if it is basic or advanced video selection
            //basic
            if(basicVideoSelection && !advancedVideoSelection){
                var video_index = document.getElementById("video_selector").selectedIndex;
            }
            
            //advanced
            else if(advancedVideoSelection && !basicVideoSelection){
                //figuring out the index for the video they want
                var fileName = "";
                var index = 0;
                for(elements in fileNameArray){
                    fileName = fileName + fileNameArray[index];
                    
                    if(index < (videoSelectorIDArray.length - 1)){
                        var selector = document.getElementById(videoSelectorIDArray[index]);
                        fileName = fileName + advancedSelectionArray[index][selector.selectedIndex][_advancedSelectionValue];
                    }
                    
                    index++;
                }
                
                console.log(fileName);
                
                //looking up the video's index in the video array
                var index = 0;
                video_index = -1;
                for(elements in videoArray){
                    if(videoArray[index][_videoFileName] == fileName){
                        video_index = index;
                        break;
                    }
                    index++;
                }
                
                //////////////stopped here///////////////
                
            }
            
            //error
            else{
                console.error("Error:You cannot have both basic and advanced video selection enabled.");
            }
            
            //Setting the video sources
            if(dmv_player.canPlayType("video/ogg") == "maybe" || dmv_player.canPlayType("video/ogg") == "probably") {
                $(ogg_video).attr('src', videoArray[video_index][_locationOGV]);
            }
            else if(dmv_player.canPlayType("video/mp4") == "maybe" || dmv_player.canPlayType("video/mp4") == "probably") {
                $(mp4_video).attr('src', videoArray[video_index][_locationMP4]);
            }

            //Reload the dmv video
            dmv_player.load();

            //Player 2
            var video_index2 = document.getElementById("video_selector2").selectedIndex;
            var dmv_player2 = document.getElementById("dmv_video2");
            var mp4_video2 = document.getElementById("mp4_video2");
            var ogg_video2 = document.getElementById("ogg_video2");

            //Setting the video sources
            if(dmv_player2.canPlayType("video/ogg") == "maybe" || dmv_player2.canPlayType("video/ogg") == "probably") {
                $(ogg_video2).attr('src', videoArray2[video_index2][_locationOGV]);
            }
            else if(dmv_player2.canPlayType("video/mp4") == "maybe" || dmv_player2.canPlayType("video/mp4") == "probably") {
                $(mp4_video2).attr('src', videoArray2[video_index2][_locationMP4]);
            }

            //Reload the dmv video
            dmv_player2.load();

            //Setting the slider back to the beginning
            $("#slider").slider('value',0);

            //Hiding the overlay image
            overlayImageVisible = false;
            $("#overlayImageID").css("display", "none");
            $("#overlayImageID2").css("display", "none");
            //Making sure the video is visible
            $("#dmv_video").css("display", "initial");
            $("#dmv_video2").css("display", "initial");
            //Switching the overlay image
            document.getElementById("overlayImageID").src = videoArray[video_index][_overlayImage];
            document.getElementById("overlayImageID2").src = videoArray2[video_index2][_overlayImage];
        }

        if(numberOfVideos == 1 || numberOfVideos == 2){
            //basic video selection
            if(basicVideoSelection && !advancedVideoSelection){
                video_selector.change(videoSelectorFunction);
                video_selector.val(videoLeftMain);
            }
            
            //advanced video selection
            else if(advancedVideoSelection && !basicVideoSelection){
                //assign all the videoSelectorIDArray selectors to the videoSelectorFunction
                var count = 0;
                for(elements in videoSelectorIDArray){
                    var temp = $("#" + videoSelectorIDArray[count]);
                    temp.change(videoSelectorFunction);
                    count++;
                }
            }
            
            //Error
            else{
                console.error("Error:You cannot have both basic and advanced video selection enabled.");
            }
        }
        if(numberOfVideos == 2){
            video_selector2.change(videoSelectorFunction);
            video_selector2.val(videoRight);
        }

        //Changing the currently selected video
//    	video_selector.val(videoLeftMain);
//    	video_selector2.val(videoRight);

    }
        
	//----------------------------------------------//
	//Measurement Tools                             //
	//----------------------------------------------//
	//Currently selected tool
	var selectedTool = "";
	
	//Setting up the different tools
	//Adding in the tools dynamically from the toolsArray
	var index = 0;
	//Getting the main div
	var mainDiv = document.getElementById("main");
	//Tool Button Table
	var toolButtonTable = document.getElementById("button_table_2");
	//Going through all the tools defined in the 
	for(elements in toolsArray){
		//HTML code for the tools
		var toolHTML = '<div id="' + toolsArray[index][_elementID] + '" class="measurementToolClass" onmousedown="moveToTop(this.id)">' +
						'<img id="' + toolsArray[index][_toolImageID] + '" src="">'+
						'<p id="' + toolsArray[index][_elementID] + '_DragHelp" class="toolHelpText_Drag">Drag this into position</p>'+
						'<p id="' + toolsArray[index][_elementID] + '_ResizeHelp" class="toolHelpText_Resize">Drag a corner or edge to calibrate</p>'+
						'</div>';
		//Appending the tool's HTML
		mainDiv.insertAdjacentHTML("afterEnd", toolHTML);
		
		//HTML code for the tools button
		var toolButtonHTML = 
							 '<button ' +
//							 'value="' + toolsArray[index][_toolButtonTitle] + '" ' +
							 'id="' + toolsArray[index][_measureToolButton] + 
							 '" class="measurementToolClass" ' + 
//							 'style="padding: 25px 20px;" ' +
							 'onclick="hideTool(\'#' + toolsArray[index][_elementID] + '\')">' +
							 toolsArray[index][_toolButtonTitle] + '</button>';
		//Appenging the tool's button HTML
		toolButtonTable.insertAdjacentHTML("beforeEnd", toolButtonHTML);
		
		index++;
	}
	
	//Reset Tool Button
	//If there are any tools?
	if(toolsArray.length == 1){
		var resetButtonHTML = '<button id="resetTools" onclick="resetTools()">Reset Tool</button>';
		toolButtonTable.insertAdjacentHTML("beforeEnd", resetButtonHTML);
	}
	else if(toolsArray.length > 1){
		var resetButtonHTML = '<button id="resetTools" onclick="resetTools()">Reset Tools</button>';
		toolButtonTable.insertAdjacentHTML("beforeEnd", resetButtonHTML);
	}
	
	//Deselect measurement tool button
	if(toolsArray.length >= 1){
		var deselectToolButtonHTML = '<button id="deselectTool" onclick="deselectTool()">Deselect Tool</button>';
		toolButtonTable.insertAdjacentHTML("beforeEnd", deselectToolButtonHTML);
	}
			
	//Putting in the marker buttons
	if(enableMarkers){
		//Creating the HTML for the marker buttons
		var markerSpawnButton = '<button id="spawnMarkerButton" onclick="spawnMarker()">Spawn Marker</button>';
		var markerRemoveSelectedButton = '<button id="removeSelectedMarkerButton" onclick="removeSelectedMarker()">Remove Selected Marker</button>';
		var markerRemoveAllMarkersButton = '<button id="removeAllMarkersButton" onclick="removeAllMarkers()">Remove All Markers</button>';
		
		//Putting in the buttons
		toolButtonTable.insertAdjacentHTML('beforeEnd', markerSpawnButton);
		toolButtonTable.insertAdjacentHTML('beforeEnd', markerRemoveSelectedButton);
		toolButtonTable.insertAdjacentHTML('beforeEnd', markerRemoveAllMarkersButton);
	}
	
	//Options are in the toolsArray array
	var index = 0;
	var tool;
	var tool_jQuery;
	
	//Stopwatch
	var stopWatch_Tool = $("#stopWatchTest");
	
	//Removing the stop watch if it disabled
	if(!stopWatch){
		stopWatch_Tool.css("display", "none");
	}
	
	$(".measurementToolClass").hide();
	
//	var toolButton;
//	//Hiding all the tools
//	for(elements in allToolsArray){
//		tool_jQuery = $(document.getElementById(allToolsArray[index][0]));
//		tool_jQuery.css("display", "none");
//		toolButton = $(document.getElementById(allToolsArray[index][1]));
//		toolButton.css("display", "none");
//		index++;
//	}
	
	//Tools table
	if(toolsArray.length == 0){
		$("#button_table_2").css("display", "none");
	}	
	
	index = 0;
	//Showing only the tools that are defined in toolsArray
	for(elements in toolsArray){
		
		//debug
//		console.log("adding in the tools");
//		console.log(toolsArray[index][0]);
		
		//Getting the tool
		tool_jQuery = $(document.getElementById(toolsArray[index][_elementID]));
		tool = document.getElementById(toolsArray[index][_elementID]);
		toolButton = $(document.getElementById(toolsArray[index][_measureToolButton]));

		//Setting the default location for the tool
		tool.style.left = toolsArray[index][_positionLeft];
		tool.style.top = toolsArray[index][_positionTop];

		//Setting the default size of the tool
		tool.style.height = toolsArray[index][_sizeHeight];
		tool.style.width = toolsArray[index][_sizeWidth];

		//Show the tool?
		if(toolsArray[index][_show]){
			tool_jQuery.css("display", "initial");
		}

		//Show the button for the tool
		toolButton.css("display", "initial");
		
		//Draggable?
		if(toolsArray[index][_draggable]){
			if(toolsArray[index][_contained]){
				tool_jQuery.draggable({containment:"body"});
			}
			else{
				tool_jQuery.draggable();
			}
		}

		//Resizable?
		if(toolsArray[index][_resizable]){
			tool_jQuery.resizable({
									aspectRatio:toolsArray[index][_aspectRatioLocked],
									handles:toolsArray[index][_resizableSides]
									});
		}

		//Z-Index
		tool_jQuery.css("z-index", toolsArray[index][_zIndex]);

		//Position Attributes
		tool_jQuery.css("position", "absolute");

		//Background Color
		tool_jQuery.css("background-color", toolsArray[index][_color]);
        
        //Default Border Color
        if(toolsArray[index][_unselectedOutlineEnabled]){
            //Putting a different colored border around the selected tool
            tool_jQuery.css("border", toolsArray[index][_unselectedOutlineThickness] +
                                      " solid " +
                                      toolsArray[index][_unselectedOutlineColor]);
        }

		//Showing Help Text
		//Draggable
		if(!toolsArray[index][_draggableHelpText]){
			$("#"+toolsArray[index][_elementID]+"_DragHelp").css("display", "none");
		}
		//Resizable
		if(!toolsArray[index][_resizeHelpText]){
			$("#"+toolsArray[index][_elementID]+"_ResizeHelp").css("display", "none");
		}
		
		//Binding the tools to the drag and resize callbacks
		tool_jQuery.on( "drag", function( event, ui ) {$("#"+this.id+"_DragHelp").css("display", "none");} );
		tool_jQuery.on( "resize", function( event, ui ) {$("#"+this.id+"_ResizeHelp").css("display", "none");} );
		
		//Setting up the images for the tool
		document.getElementById(toolsArray[index][_toolImageID]).src = toolsArray[index][_toolImage];
		
		index++;
	}
	
	//Setting the attributes for the measurement tools help text
	//Drag Text
	var toolDragText = document.getElementsByClassName('toolHelpText_Drag');
	for(var i = 0; i < toolDragText.length; i++) {
		toolDragText[i].style.fontSize = toolHelpTextSize;
		toolDragText[i].style.color = toolHelpTextColor;
	}
	//Resize Text
	var toolResizeText = document.getElementsByClassName('toolHelpText_Resize');
	for(var i = 0; i < toolResizeText.length; i++) {
		toolResizeText[i].style.fontSize = toolHelpTextSize;
		toolResizeText[i].style.color = toolHelpTextColor;
	}
	
	//Overlay Image Button
	if(!enableOverlayImage){
		$("#overlayImageButton").css("display", "none");
	}
	else{
		if(numberOfVideos == 1 || numberOfVideos == 2){
			document.getElementById("overlayImageID").src = videoArray[document.getElementById("video_selector").selectedIndex][_overlayImage];
			$("#overlayImageID").css("display", "none");
		}
		if(numberOfVideos == 2){
			document.getElementById("overlayImageID2").src = videoArray2[document.getElementById("video_selector2").selectedIndex][_overlayImage];
			$("#overlayImageID2").css("display", "none");
		}
	}
});