//This is the final javascript file that gets executed

//------------------------------------------------------------------//
//This is the initialization code that sets up all the different    //
// components of the screen.                                        //
//------------------------------------------------------------------//
$(document).ready(function(){   
  //Setting the title for the player
  document.title = pageTitle;

  //----------------------------------------------//
  //Player Controls                               //
  //----------------------------------------------//
  //checks to see if the frame counter is enabled (set in settings.js)
  if(enableStopwatch === true) {
    if(stopwatchDraggable === true) {
      //makes frame counter box draggable
      $(document.getElementById("stopwatch")).draggable({containment:"body"});
    }
    //Starts a 1/30 second interval to refresh the frame counter box
    setInterval(updateStopwatch, 33.33333);
    
    if(showTime === false) {
      document.getElementById("timeInfo").style.display = "none";
    }
    if(showFrame === false) {
      document.getElementById("frameInfo").style.display = "none";
    }
  }
  else {
    //hides frame counter
    document.getElementById("stopwatch").style.visibility = "hidden";
  }

  //Removing the Player Instructions button if it is turned off
  if(!enablePlayerInsctructions) {
    $("#playerInstructions").css("display", "none");
  }
  
  //Removing the Video Instructions button is it is turned off
  if(!enableVideoInstructions) {
    $("#videoInstructions").css("display", "none");
  }
  
  //Removing the reset tools buttons if it is turned off
  if(!resetButton){
    $("#resetTools").css("display", "none");
  }
  
  //Go To Frame Control
  if(goToFrameControlEnabled == false){
    document.getElementById('FrameJump').style.display = 'none';
    document.getElementById('gotoframe').style.display = 'none';
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
    if (numberOfVideos == 1 || numberOfVideos == 2) {
      dmv_player.onclick = playPause;
    }
    if (numberOfVideos == 2) {
      dmv_player2.onclick = playPause;
    }
  }
  
  //Setting the oncanplaythrough callback to change the video poster image to the 'click to play'
  var showedPlaySplashScreen = false;
  dmv_player.oncanplaythrough =  function(){
      //resizing the tools
      resizeTools();

      if(!showedPlaySplashScreen && enableClickToPlayOverlay){
        if (numberOfVideos == 1 || numberOfVideos == 2) {
          dmv_player.setAttribute('poster', '../images/play_splash_screen.png');
        }
        if (numberOfVideos == 2) {
          dmv_player2.setAttribute('poster', '../images/play_splash_screen.png');
        }
      }
      else if(!showedPlaySplashScreen && !enableClickToPlayOverlay){
        if (numberOfVideos == 1 || numberOfVideos == 2) {
          dmv_player.setAttribute('poster', '');
        }
        if (numberOfVideos == 2) {
          dmv_player2.setAttribute('poster', '');
        }
      }
      showedPlaySplashScreen = true;
    };
    
  //Setting the play callback to remove the video poster of 'click to play'
  $('#dmv_video').bind('play', function(){
    if (numberOfVideos == 1 || numberOfVideos == 2) {
      dmv_player.removeAttribute('poster');
    }
    if (numberOfVideos == 2) {
      dmv_player2.removeAttribute('poster');
    }
  });
  
  //Getting the file names for the selected video
  if (numberOfVideos == 1 || numberOfVideos == 2) {
    var videoFileName_LeftMain = getCurrentVideoName(LEFT_MAIN_VIDEO);
  }
  if (numberOfVideos == 2) {
    var videoFileName_Right = getCurrentVideoName(RIGHT_VIDEO);
  }
  
  //Looking up the index for the video that is selected
  if (numberOfVideos == 1 || numberOfVideos == 2) {
    var videoArrayIndex_LeftMain = getVideoIndex(videoFileName_LeftMain);
  }
  if (numberOfVideos == 2) {
    var videoArrayIndex_Right = getVideoIndex(videoFileName_Right);
  }
    
  //Setting the video sources
  //Player 1
  if (numberOfVideos == 1 || numberOfVideos == 2) {
    if(dmv_player.canPlayType("video/ogg") == "maybe" || dmv_player.canPlayType("video/ogg") == "probably") {
      $(ogg_video).attr('src', videoArray[videoArrayIndex_LeftMain][_locationOGV]);
    }
    else if(dmv_player.canPlayType("video/mp4") == "maybe" || dmv_player.canPlayType("video/mp4") == "probably") {
      $(mp4_video).attr('src', videoArray[videoArrayIndex_LeftMain][_locationMP4]);
    }
  }
  //Player 2
  if (numberOfVideos == 2) {
    if(dmv_player2.canPlayType("video/ogg") == "maybe" || dmv_player2.canPlayType("video/ogg") == "probably") {
      $(ogg_video2).attr('src', videoArray2[videoArrayIndex_Right][_locationOGV]);
    }
    else if(dmv_player2.canPlayType("video/mp4") == "maybe" || dmv_player2.canPlayType("video/mp4") == "probably") {
      $(mp4_video2).attr('src', videoArray2[videoArrayIndex_Right][_locationMP4]);
    }
  }
    
  //Reload the dmv video
  if (numberOfVideos == 1 || numberOfVideos == 2) {
    dmv_player.load();
  }
  if (numberOfVideos == 2) {
    dmv_player2.load();
  }
    
  //passes framerate of video from video array
  //used to calculate ellapsed time
  framerate = videoArray[videoArrayIndex_LeftMain][_videoFramerate]; 
  
  //////////////////////////////////////////////////////////////////////
  //Setting up the Table for the Video Selection and Measurement Tools//
  //////////////////////////////////////////////////////////////////////
  var toolsTable = '<table id="measurementToolTable" border="0" style="margin-top:0px;"><th>';
  var endToolsTable = '</th></table>';
  
  ////////////////////////////////
  //Creating the video selectors//
  ////////////////////////////////
  toolsTable += videoSelectionSetup();

  /////////////////////
  //Measurement Tools//
  /////////////////////
  //Currently selected tool
  var selectedTool = "";

  //Setting up the different tools
  //Adding in the tools dynamically from the toolsArray
  var index = 0;
  //Getting the main div
  var mainDiv = document.getElementById("main");
  //Tool Button Table
  var toolButtonTable = document.getElementById("measurement_tools_section");

  if (toolsArray.length > 0){
    toolsTable += '<td>Tools:</td>';
  }
          
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
//                           'value="' + toolsArray[index][_toolButtonTitle] + '" ' +
                         'id="' + toolsArray[index][_measureToolButton] + 
                         '" class="measurementToolClass" ' + 
//                           'style="padding: 25px 20px;" ' +
                         'onclick="hideTool(\'#' + toolsArray[index][_elementID] + '\')">' +
                         toolsArray[index][_toolButtonTitle] + '</button>';
          
    toolsTable += '<td>';
    toolsTable += toolButtonHTML;
    toolsTable += '</td>';

    index++;
  }

  //Reset Tool Button
  //If there are any tools?
  if(toolsArray.length == 1){
    var resetButtonHTML = '<button id="resetTools" onclick="resetTools()">Reset Tool</button>';
    toolsTable += '<td>';
    toolsTable += resetButtonHTML;
    toolsTable += '</td>';
  }
  else if(toolsArray.length > 1){
    var resetButtonHTML = '<button id="resetTools" onclick="resetTools()">Reset Tools</button>';
    toolsTable += '<td>';
    toolsTable += resetButtonHTML;
    toolsTable += '</td>';
  }

  //Deselect measurement tool button
  if(toolsArray.length >= 1){
    var deselectToolButtonHTML = '<button id="deselectTool" onclick="deselectTool()">Deselect Tool</button>';
    toolsTable += '<td>';
    toolsTable += deselectToolButtonHTML;
    toolsTable += '</td>';
  }

  //Putting in the marker buttons
  if(enableMarkers){
    //Creating the HTML for the marker buttons
    var markerSpawnButton = '<button id="spawnMarkerButton" onclick="spawnMarker()">Spawn Marker</button>';
    var markerRemoveSelectedButton = '<button id="removeSelectedMarkerButton" onclick="removeSelectedMarker()">Remove Selected Marker</button>';
    var markerRemoveAllMarkersButton = '<button id="removeAllMarkersButton" onclick="removeAllMarkers()">Remove All Markers</button>';

    //Putting in the buttons
    toolsTable += '<td>';
    toolsTable += markerSpawnButton;
    toolsTable += '</td>';
    toolsTable += '<td>';
    toolsTable += markerRemoveSelectedButton;
    toolsTable += '</td>';
    toolsTable += '<td>';
    toolsTable += markerRemoveAllMarkersButton;
    toolsTable += '</td>';
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

  //Tools table
  if(toolsArray.length == 0){
    $("#button_table_2").css("display", "none");
  }

  index = 0;
  //Showing only the tools that are defined in toolsArray
  for(elements in toolsArray){
    //Getting the tool
    tool_jQuery = $(document.getElementById(toolsArray[index][_elementID]));
    tool = document.getElementById(toolsArray[index][_elementID]);
    toolButton = $(document.getElementById(toolsArray[index][_measureToolButton]));

    //Absolute Value for the Size and Position of the Measurement Tools
    //Setting the default location for the tool
    tool.style.left = toolsArray[index][_positionLeft];
    tool.style.top = toolsArray[index][_positionTop];
    //Setting the default size of the tool
    tool.style.height = toolsArray[index][_sizeHeight];
    tool.style.width = toolsArray[index][_sizeWidth];
    
    //Relative Value for the Size and Position of the Measurement Tools
    //Setting the default location for the tool
    
    //Setting the default size of the tool
  
    //Resizing the tools for the current size of the screen
    resizeTools();

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
      
  //////////////////////////////////////////////////////
  //Inserting the ToolsTable into the player html code//
  //////////////////////////////////////////////////////
  //putting in the final closing tags
  toolsTable += endToolsTable;
  var playerControls = document.getElementById('button_table_1');
  playerControls.insertAdjacentHTML('afterEnd', toolsTable);
      
  //////////////////////////////////////////////////
  //PUTTING IN THE OPTIONS FOR THE VIDEO SELECTORS//
  //////////////////////////////////////////////////
  videoSelectionPopulateOptions();
    
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

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
//Methods
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function videoSelectionSetup(){
  //This variable will contain the HTML for the video selection
  var videoSelectionHTML = "";

  //Advanced video selection
  if(enableVideoSelection){
  
    //Checking to see if the number of titles equal the number of options
    if(advancedSelectionTitleArray.length != advancedSelectionArray.length){
      console.error("Error: The number of titles and options for multiparameters need to equal. " + 
                            "Check advancedSelectionTitleArray and advancedSelectionArray.");
    }
  
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
      videoSelectorIDArray = new Array();
  
      videoSelectionHTML += '<td>Video Parameters:</td>';
  
      for(elements in advancedSelectionArray){
        //saving the video selector ids for later
        videoSelectorIDArray.push(videoSelector + count);
  
        videoSelectionHTML += '<td>';
        //adding the dropdowns title
        videoSelectionHTML += advancedSelectionTitleArray[count];
        //adding the HTML for the video selector
        videoSelectionHTML += '<select id=' + videoSelector + count + '>';
  
        //TODO: Looping through the video selection values
  
        //closing the selection tag
        videoSelectionHTML += '</select>';
        videoSelectionHTML += '</td>';
  
        count++;
      }
    }
    //2 videos
    else if(numberOfVideos == 2){
      console.warn("Warning: Advanced video selection is currently not supported.");
    }
  }

  return videoSelectionHTML;
}

function videoSelectionPopulateOptions(){
  if(numberOfVideos == 1 || numberOfVideos == 2){
    //Player 1            
    if(enableVideoSelection){
      //Checking to see if the user has specified the right number of selection positions
      if(currentVideoLeft_Main.length != advancedSelectionArray.length) {
        console.error("Error:You do not have the correct number of initial video selection indexes");
      }
      
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
  }
  if(numberOfVideos == 2){
    //Player 2
    console.error("Error: Double video DMVPlayer is not supported yet.");
  }

  //If the drop down changes
  var videoSelectorFunction = function(){
    //Player 1
    var dmv_player = document.getElementById("dmv_video");
    var mp4_video = document.getElementById("mp4_video");
    var ogg_video = document.getElementById("ogg_video");
            
    //advanced
    if(enableVideoSelection){
      //figuring out the index for the video they want
      var fileName = "";
      var index = 0;
      for(elements in fileNameArray){
        fileName = fileName + fileNameArray[index];
        
        if(index <= (videoSelectorIDArray.length - 1)){
          var selector = document.getElementById(videoSelectorIDArray[index]);
          fileName = fileName + advancedSelectionArray[index][selector.selectedIndex][_advancedSelectionValue];
        }
        
        index++;
      }
      
      //Getting the index of the video
      var video_index = getVideoIndex(fileName);
    
      //Deselecting the video selection drop downs
      var count = 0;
      for(elements in videoSelectorIDArray){
        document.getElementById(videoSelectorIDArray[count]).blur();
        count++;
      }
    }
    
    //Setting the video sources
    if(dmv_player.canPlayType("video/ogg") == "maybe" || dmv_player.canPlayType("video/ogg") == "probably") {
      $(ogg_video).attr('src', videoArray[video_index][_locationOGV]);
    }
    else if(dmv_player.canPlayType("video/mp4") == "maybe" || dmv_player.canPlayType("video/mp4") == "probably") {
      $(mp4_video).attr('src', videoArray[video_index][_locationMP4]);
    }

    //passes framerate of video from video array
    //used to calculate ellapsed time
    framerate = videoArray[video_index][_videoFramerate];
    
    
    //Reload the dmv video
    dmv_player.load();

    //Player 2
    //checking the number of videos
    if(numberOfVideos == 2){
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
    }

    //Setting the slider back to the beginning
    $("#slider").slider('value',0);

    //Hiding the overlay image
    overlayImageVisible = false;
    // $("#overlayImageID").css("display", "none");
    // $("#overlayImageID2").css("display", "none");
    //Making sure the video is visible
    $("#dmv_video").css("display", "initial");
    //checking the number of videos
    if(numberOfVideos == 2){
      $("#dmv_video2").css("display", "initial");
    }
   //Switching the overlay image
   // document.getElementById("overlayImageID").src = videoArray[video_index][_overlayImage];
   // //checking the number of videos
   // if(numberOfVideos == 2){
   //  document.getElementById("overlayImageID2").src = videoArray2[video_index2][_overlayImage];
   // }
    
    //Saving the video selection indexes
    saveCurrenyltSelectedVideos();
    
    //Close the current Video Instructions page if it is open
    if (videoInstructionWindow != null) {
      videoInstructionWindow.close();
    }
  }

  //Setting the drop down positions for the video parameters and the call back function when the selector changes value
  if(numberOfVideos == 1 || numberOfVideos == 2){
    //advanced video selection
    if(enableVideoSelection){
      //assign all the videoSelectorIDArray selectors to the videoSelectorFunction
      var count = 0;
      for(elements in videoSelectorIDArray){
        var temp = $("#" + videoSelectorIDArray[count]);
        temp.change(videoSelectorFunction);
        document.getElementById(videoSelectorIDArray[count]).selectedIndex = "" + currentVideoLeft_Main[count];
        count++;
      }
    }
  }
  if(numberOfVideos == 2){
    console.error("Error: Double video DMVPlayer is not supported yet.");
  }
}

//Resizing the player to keep the aspect ratio and fit within the bounds of the browser window
resizePlayer = function(){
  //The video aspect ratio (16/9)
  var aspectRatioHeight = 10;
  var aspectRatioWidth = 16;

  //getting the video to fit in the screen
  if (window.innerWidth/window.innerHeight > aspectRatioWidth/aspectRatioHeight){
    var temp = window.innerHeight * .80;
    $('#main').css('height',temp+'px');
    $('#main').css('width','auto');
    $('#dmv_video').css('height',temp+'px');
    $('#dmv_video').css('width','auto');
  } else {
    $('#main').css('width','100%');
    $('#main').css('height','auto');
    $('#dmv_video').css('width','100%');
    $('#dmv_video').css('height','auto');
  }

  //getting the slider, player buttons and measurement tools to fit in screen
  var widthOfPlayer = document.getElementById('dmv_video').offsetWidth+'px';
  document.getElementById('slider').style.width = widthOfPlayer;
  document.getElementById('button_table_1').style.width = widthOfPlayer;
  document.getElementById('measurementToolTable').style.width = widthOfPlayer;

  resizeTools();
}
$(window).resize(resizePlayer);
$(window).load(resizePlayer);
$(window).unload(closeInstructionWindows);