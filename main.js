let display = document.querySelector(".display")
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
        if(display.value==="Infinity"){
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
