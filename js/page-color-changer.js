

// Declare and initialize some constants for the input slider elements, the page body and any other HTML element you think you need to manipulate.
let pageBg  = document.querySelector('html');
let sliders = document.getElementsByTagName('input');
let rgb = [0,0,0];

// Build one or more event handlers to call a function when the user changes the value of one of the range sliders (hint - look up the code for the weather page where we built a slider for the wind speed).

function changeRgb (color,value) {
    switch (color) {
        case (red):
            rgb[0] = parseInt (value);
            break;
        
        case (green):
            rgb[1] = parseInt (value);
            break;
        
        case (blue):
            rgb[2] = parseInt (value);
            break;
        }
        return rgb;
    }

function writeCSS () {
    let newColor = "rgb(";
    let i = 0;
    while ( i < newRgb.length - 1) {
        newColor += newRgb[i] + ",";
        i++;
    }
    newColor += newRgb [i] + ",";
    return newColor;
}
newColor = `rgb(255,0,0), rgb(0,255,0), rgb(0,0,255),`
console.log(newColor);

// Build one or more functions that change the background-color property value of the page body (or HTML element), based on the values of the three range sliders (hint - we changed the background-color of the page in a prior lesson).
for (let i=0; i < sliders.length; i++) {
    sliders[i].onchange = function() {
        let whichSlider = this.getAttribute('id');
        let sliderValue = this.value;
        newRgb = changeRgb(whichSlider, sliderValue);
        newCss = writeCSS(newRgb);
        pageBg.style.backgroundColor = newCSS;
    }
}