var isPaused = false;   //false- video was playing when the user started to slide the scrubber
var keyDownEvent = false;

$(document).ready(function () {
    //initiate slider object
    $("#slider").slider({
        range: "min",   //creates a slider that greys as it moves
        value: 0,       //initial value of the slider
        step: 1,        //step of the slider, each step corresponds to a frame
        //fired when the slider is created
        //changes the css styles of the html elements nested in the slider
        create: function (event, ui) {
            document.getElementsByClassName("ui-slider-range")[0].id = "sliderProgress";    //progress bar styles
            document.getElementsByClassName("ui-slider-handle")[0].id = "sliderHandle";     //slider handle styles
        },
        //fired when user begins sliding
        start: function (event, ui) {
            if (event.which === 39 || event.which === 37 || event.which === 38 || event.which === 40) {
                keyDownEvent = true;
            }
            else {
                keyDownEvent = false;
                if (document.getElementById("dmv_video").paused === true) {
                    isPaused = true;
                }
                else {
                    isPaused = false;
                    pause();            //pause the video for slider events to function properly, otherwise the video trys to play and set the time simultaneously
                }
            }
        },
        //fired on every mousemove while sliding
        slide: function (event, ui) {
            if (keyDownEvent === false) {
                setFrame(ui.value);
            }
        },
        //fired when the user releases the slider handle
        stop: function (event, ui) {
            if (keyDownEvent === false) {
                setFrame(ui.value);
                if (isPaused === false) {
                    play();                 //only play if the video was playing before the slider was moved
                }
                document.getElementById("slider").blur; //deselecte the slider
            }
        }
    });

    //when a new video has its metadata loaded, set the max value of the slider to the number of frames in the video
    //NOTE: this allows the slider to have a position for every frame
    document.getElementById("dmv_video").addEventListener("loadedmetadata", function () {
        $("#slider").slider({ max: Math.floor(29.97 * document.getElementById("dmv_video").duration) });
    });

    //when the video changes time, set the slider value to the current frame
    document.getElementById("dmv_video").addEventListener("timeupdate", function () {
        $("#slider").slider({ value: getCurrentFrame() });
    });
});