img="";
function preload() {
    img=loadImage('pikachu.jpg');
}

function setup() {
    canvas=createCanvas(640,420);
    canvas.center();
//cordinates for canvas use this 'canvas.position(x,y);'
}

function draw() {
    
    image(img,0 , 0 , 640 , 420);
    fill("#FF0000");
    text("Pikachu", 405 , 127);
    noFill();
    stroke("#FF0000");
    rect(400 , 115 , 235 , 340);
}