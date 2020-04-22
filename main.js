var canvas = document.getElementById('louiscanvas');
var context = canvas.getContext("2d");
context.lineCap = 'round';
context.lineJoin = 'round';
context.strokeStyle = 'green';
context.lineWidth = 1;

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

var redrawLouis = function() {
    line(0, 490, 490, 0,'blue')    
    line(0, 200, 490, 490,'purple')
}
 
clearCanvas()
redrawLouis()

for(let step=20; step <= 450; step+=3){
    line(0, 500, step, 300,'red')    
} 

for(let step=20; step <= 450; step+=3){
    line(450, 500, step, 300,'red')    
}

line(0, 0, 490, 490,'blue')
line(490, 200, 0, 490,'purple')

line(50, 60, 700, 800,'red')

var slider = document.getElementById("myRange");
var output = document.getElementById("demo");
output.innerHTML = slider.value;

slider.oninput = function() {
    output.innerHTML = slider.value;
}