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
var cross = function(x, y) {
    line(x+5, y, x-5, y,'black')
    line(x, y-10, x, y+10,'black')    
    
     //line(280, 50, 270, 50,'black')
     //line(275, 40, 275, 60,'black')
    
}

var boy = function(x, y) {  
    //line(x+5, y, x-5, y,'black')
    line(x, y-4, x, y+10,'green') 

    // exercise ?
    //line(x-4, y-8, x+4, y-8,'black')
    line(x-5, y+15, x, y+10,'blue')
    line(x, y+10, x+5, y+15,'blue')
    line(x-5, y+15, x-2, y+15,'black')
    line(x+5, y+15, x+7, y+15)
    line(x-4, y-8, x, y-14,'black')
    line(x, y-14, x+4, y-8,'black')
    line(x-4, y-8, x, y-4,'black')
    line(x+4, y-8, x, y-4,'black')
    line(x, y, x-3, y+5,'green')
    line(x+3, y+5, x, y,'green')
    line(x-1, y-9, x-1, y-8,'black')
    line(x+2, y-9, x+2, y-8,'black')

}
var lefArm = function(x, y) {
    line(x, y, x-6, y+10,'black')
    line(x-6, y+10, x, y+10,'black')
    line(x, y+10, x, y+0,'black')
}

var size = 20
    var bodyHeight = size
    var bodyWidth = size /1.4

var rightArm = function(x, y) {
    line(x, y, x+bodyWidth-6, y+bodyHeight-10,'black')
    line(x, y+bodyHeight-10, x+bodyWidth-6, y+bodyHeight-10)
    line(x, y, x, y+bodyHeight-10)

}

var monster = function(x, y) {

    line(x, y, x, y+bodyHeight,'black')
    line(x, y+bodyHeight, x+bodyWidth, y+bodyHeight,'purple')
    line(x+bodyWidth, y+bodyHeight, x+bodyWidth, y,'black')
    line(x+bodyWidth, y, x, y,'black')
    lefArm(x, y+bodyHeight)
    rightArm(x+bodyWidth, y+bodyHeight)
    line(x, y+bodyHeight, x, y+bodyHeight+30,'purple')
    line(x, y+bodyHeight+25, x+bodyWidth, y+bodyHeight+25,'purple')
    line(x+bodyWidth, y+bodyWidth+30, x+bodyWidth, y+bodyHeight,'purple')
    line(x, y+bodyHeight+30, x, y+bodyHeight+35,'blue')
    line(x+bodyWidth, y+bodyHeight, x+bodyWidth, y+bodyHeight+35,'purple')
    line(x+bodyWidth, y+bodyHeight+35, x+10, y+bodyHeight+35,'blue')
    line(x+10, y+bodyHeight+35, x+10, y+bodyHeight+26,'blue')
    line(x, y+bodyHeight+35, x+4, y+bodyHeight+35,'blue')
    line(x+4, y+bodyHeight+35, x+4, y+bodyHeight+26,'blue')
    line(x+4, y+bodyHeight+35, x+10, y+bodyHeight+35,'blue')
    line(x+bodyWidth /2, y+2, x+2, y+bodyHeight /2,'green')
    line(x+2, y+bodyHeight /2, x+bodyWidth /2, y+bodyHeight-2,'green')
    line(x+bodyWidth /2, y+bodyHeight-2, x+bodyWidth-2, y+bodyHeight /2,'green')
    line(x+bodyWidth-2, y+bodyHeight /2, x+bodyWidth /2, y+2,'green')
    line(x+bodyWidth /2, y+bodyHeight /2, x+bodyWidth /2, y+bodyHeight /2+1,'black')

}



var redrawLouis = function(slideX, slideY, red, green, blue, sliderXmonster, sliderYmonster) {

    for(let step=20; step <= 450; step+=3){
        line(0, 500, step, 300,'red')    
    } 
    
    for(let step=20; step <= slideX; step+=3){
        line(450, 500, step, 300,rgb(red*step/490,green,blue))    
    }
    
    var x = parseInt(slideX)
    var xmonster = parseInt(sliderXmonster)
    var ymonster = parseInt(sliderYmonster)
    var Y = parseInt(slideY)
    
    //cross(x, 5)
    boy(x, Y)
    monster(xmonster, ymonster)
    //cross(x, 480)
    
    
}
 
clearCanvas()
redrawLouis()


var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;
var sliderXmonster = document.getElementById("myRangeXmonster");
var outputXmonster = document.getElementById("outputXmonster");
var sliderYmonster = document.getElementById("myRangeYmonster");
var outputYmonster = document.getElementById("outputYmonster");
outputXmonster.innerHTML = sliderXmonster.value;
var sliderY = document.getElementById("myRangeY");
var outputY = document.getElementById("outputY");
outputY.innerHTML = sliderY.value;
var slider2 = document.getElementById("myRange2");
var output2 = document.getElementById("demo2");
output2.innerHTML = slider2.value;
var slider3 = document.getElementById("myRange3");
var output3 = document.getElementById("demo3");
output3.innerHTML = slider3.value;
var slider4 = document.getElementById("myRange4");
var output4 = document.getElementById("demo4");
output4.innerHTML = slider4.value;

var updateSlider = function() {
    output.innerHTML = slider.value;
    outputY.innerHTML = sliderY.value;
    output2.innerHTML = slider2.value;
    output3.innerHTML = slider3.value;
    output4.innerHTML = slider4.value;
    outputXmonster.innerHTML = sliderXmonster.value;
    outputYmonster.innerHTML = sliderYmonster.value;
    
    clearCanvas()
    redrawLouis(slider.value, sliderY.value, slider2.value, slider3.value, slider4.value, sliderXmonster.value, sliderYmonster.value)
}

slider.oninput = updateSlider
sliderXmonster.oninput = updateSlider
sliderYmonster.oninput = updateSlider
sliderY.oninput = updateSlider
slider2.oninput = updateSlider
slider3.oninput = updateSlider
slider4.oninput = updateSlider

updateSlider()