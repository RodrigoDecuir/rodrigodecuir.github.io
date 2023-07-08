function setup() {
    createCanvas(displayWidth, displayHeight);
    background(180);
    canvas.parent('my-sketch');
}

function draw() {

}


/*
int diam = 10;
float centX, centY;

void setup() {
    //fullScreen();
    size(1800, 1800);
    smooth();
    background(180);
    frameRate(24);
    centX = width/2;
    centY = height/2;
    stroke(0);
    strokeWeight(1);
    noFill();
}

void frameResized() {
    size(displayWidth, displayHeight);
}

void draw() {
    if (diam <= 3000) {
        ellipse(centX, centY, diam, diam);
        diam += 10;
    }
}*/
