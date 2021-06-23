function preload()
{
 img=loadImage("tv.jpg");
}

function setup()
{
 canvas=createCanvas(600,500);
 canvas.center();
 
}

function draw()
{
    image(img,0,0,600,500);
    textSize(20);
    fill("blue");
    text("tv",40,55);

}
