let [hours,minutes,seconds]=[0,0,0]
let timeDisplay=document.getElementById("Time")
let playPause=document.getElementById("play-pause")
let isPlaying=false;
let timer;
let resetButtoon=document.getElementById("reset-btn")
function showTime(){
  seconds++
  if(seconds==60){
    seconds=0let display = document.querySelector(".display")
let buttons = document.querySelectorAll(".btn")
let clearButton = document.querySelector(".clearbtn")

function add(val) {
    display.value += val
}
  
function cleardisplay() {
    display.value = ''
    enableButtons();
}

function deletelast() {
    display.value = display.value.slice(0, -1)
}

function calculate() {
    try {
        display.value = eval(display.value);
        if (display.value === Infinity || display.value === -Infinity) {
            display.value = "Infinity"
        }
        if(display.value="Infinity"){
disableButtons()
        }else{
            enableButtons()
        }
      
    } catch (error) {
        display.value = "Error";
        disableButtons(); 
    }
}

function clearError() {
    if (display.value === "Error") {
        display.value = "";
        enableButtons();
    }
  
}

  


function disableButtons() {
    for (let button of buttons) {
        button.disabled = true;
    }
}

function enableButtons() {
    for (let button of buttons) {
        button.disabled = false;
    }
}

    minutes++
  }
  if(minutes==60){
    minutes=0
    hours++
  }
let newSeconds;
let newHours;
let newMinutes;
  if(seconds<10){
newSeconds= "0"+seconds
  }else{
    newSeconds=seconds
  }
  if(minutes<10){
     newMinutes="0"+minutes
  }else{
    newMinutes=minutes
  }
  if(hours<10){
  newHours="0"+hours
  }else{
    newHours=hours
  }
  timeDisplay.innerHTML=newHours+":"+newMinutes+":"+newSeconds;
}
function watchTime(){
timer = setInterval(showTime,1000)
playPause.src="https://cdn-icons-png.flaticon.com/128/1709/1709974.png"
isPlaying=true;
return isPlaying;
}
function stopTime(){
  clearInterval(timer);
  playPause.src="https://cdn-icons-png.flaticon.com/128/1709/1709973.png"
  isPlaying=false
  return isPlaying;
}

  playPause.addEventListener("click", function() {
 
    if (isPlaying) {
      stopTime();
    } else {
      watchTime();
    }
  })
  resetButtoon.addEventListener("click",resetTimer)
function resetTimer(){
clearInterval(timer)
hours = 0;
minutes = 0;
seconds = 0;
timeDisplay.innerHTML="00:00:00"
isPlaying=false;
  playPause.src="https://cdn-icons-png.flaticon.com/128/1709/1709973.png"
  lapContainer.innerHTML=""
  lapCountNumber=1;
  }
  let lapCountNumber=1;
  let lapContainer=document.querySelector(".lap")
  function lapCount(){
    if (lapCountNumber <= 10) {
      let lapTime = timeDisplay.innerHTML
      lapContainer.innerHTML += `<p>Lap ${lapCountNumber}: ${lapTime}</p>`
   
      lapCountNumber++;
    } else {
      lapButton.disabled = true; 
    }
  }
  
  
