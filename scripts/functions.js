// loading main functions when pafe is opened
function loadpage(){
    showdate();
}

// variables

let timerId

//
// stopwatch button functions
//
function stopWatch() {
    clearInterval(timerId)
    enableTimerButtons();
    changeTimerTitle("Stop Watch");
    colorHeaderPressedButton("stopwatch");
    document.getElementById("time").innerHTML = "00:00:00.0"
}

//
// counter button functions
//
function countdown() {
    clearInterval(timerId)
    enableTimerButtons();
    changeTimerTitle("Count Down");
    colorHeaderPressedButton("countdown");
    document.getElementById("time").innerHTML = "00:00:00.0"
}

//
// current time button functions (showdate is reusable)
//
function currentTime() {
    disableTimerButtons();
    changeTimerTitle("Current Time");
    colorHeaderPressedButton("currentTime");
    timerId = setInterval(showtime, 25);
}

function showtime() {
    let time = new Date();
    document.getElementById("time").innerHTML = time.toLocaleTimeString();
    showdate();
}

function showdate() {
    let date = new Date();
    document.getElementById("date").innerHTML = date.toLocaleDateString();
}

//
// Buttons and changing main texts functions
//
function changeTimerTitle(title) {
    document.getElementById("timerTitle").innerHTML = title;
}

function colorHeaderPressedButton(newColoredButton) {
    document.getElementById("stopwatchFront").style.setProperty("background-color", "rgb(35, 39, 61)");
    document.getElementById("countdownFront").style.setProperty("background-color", "rgb(35, 39, 61)");
    document.getElementById("currentTimeFront").style.setProperty("background-color", "rgb(35, 39, 61)");

    document.getElementById("stopwatch").style.setProperty("background-color", "rgb(28, 31, 46)");
    document.getElementById("countdown").style.setProperty("background-color", "rgb(28, 31, 46)");
    document.getElementById("currentTime").style.setProperty("background-color", "rgb(28, 31, 46)");

    document.getElementById(newColoredButton).style.setProperty("background-color", "rgb(197, 112, 43)")
    document.getElementById(newColoredButton+"Front").style.setProperty("background-color", "rgb(253, 147, 60)")

}

function disableTimerButtons() {
    document.getElementById("startButton").style.setProperty("display","none");
    document.getElementById("resetButton").style.setProperty("display","none");
}

function enableTimerButtons() {
    document.getElementById("startButton").style.setProperty("display","flex");
    document.getElementById("resetButton").style.setProperty("display","flex");
}

//
// DARK/LIGHT modes functions
//


