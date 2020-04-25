var canvas = document.getElementById('louiscanvas');
var context = canvas.getContext("2d");
context.lineCap = 'round';
context.lineJoin = 'round';
context.strokeStyle = 'green';
context.lineWidth = 1;

function rgb(r,g,b) {
    return 'rgb(' + [(r||0),(g||0),(b||0)].join(',') + ')';
}

var clearCanvas = function () {
    context
        .clearRect(0, 0, this.canvas.width, this.canvas.height);

};

var line = function(x1, y1, x2, y2, colour){
    context.strokeStyle = colour;
    context.beginPath();
    context.moveTo(x1,y1);
    context.lineTo(x2,y2);
    context.stroke();
}

var redrawLouis = function(slide, red, green, blue) {
    line(0, 490, 490, 0,'blue')    
    line(0, 200, 490, 490,'purple')
    for(let step=20; step <= 450; step+=3){
        line(0, 500, step, 300,'red')    
    } 
    
    for(let step=20; step <= slide; step+=3){
        line(450, 500, step, 300,rgb(red*step/490,green,blue))    
    }
    
    line(0, 0, 490, 490,'blue')
    line(490, 200, 0, 490,'purple')
    
    line(50, 60, 700, 800,'red')
    
}
 
clearCanvas()
redrawLouis()


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;
var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");
output3.innerHTML = slider4.value;

var updateSlider = function() {
    output.innerHTML = slider.value;
    output2.innerHTML = slider2.value;
    output3.innerHTML = slider3.value;
    output4.innerHTML = slider4.value;
    clearCanvas()
    redrawLouis(slider.value, slider2.value, slider3.value, slider4.value)
}

slider.oninput = updateSlider
slider2.oninput = updateSlider
slider3.oninput = updateSlider
slider4.oninput = updateSlider