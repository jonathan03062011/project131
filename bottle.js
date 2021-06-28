img="";
status="";
objects=[];
function preload()
{
 img=loadImage("dog_cat.jpg");
}

function setup()
{
 canvas=createCanvas(600,500);
 canvas.center();
 
 //intialize the cocossd model
 objectDetector=ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("status").innerHTML="Status: Detecting Object";
}

function modelLoaded()
{
    console.log("model is loaded");
    status=true;
    objectDetector.detect(img,gotresults);
}

function gotresults(error,results)
{
 if(error)
 {
   console.log("error");
 }
 else{
     console.log("results");
     objects=results;
 }
}

function draw()
{
 image(img,0,0,600,500);
 if(status=="true")
 {
  document.getElementById("status").innerHTML="Objects Detected";
  for(i=0;i<objects.length;i++)
  {
    percent=floor(objects[i].confidence*100);
    name_object=objects[i].label;
    fill("red");
    text(name_object +" "+percent+"%",objects[i].x,objects[i].y);
    noFill();
    stroke("red");
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
  }
 }
}