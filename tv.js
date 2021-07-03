img="";
status="";
objects=[];
function preload()
{
 img=loadImage("tv.jpg");
}

function setup()
{
 canvas=createCanvas(400,400);
 canvas.center();
 video=createCapture(VIDEO);
 video.hide();
 video.size(400,400);
 
 //intialize the cocossd model
 objectDetector=ml5.objectDetector('cocossd',modelLoaded);
 document.getElementById("c").innerHTML="Status: Detecting Object";
}

function modelLoaded()
{
    console.log("model is loaded");
    status=true;
   
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
 image(video,0,0,400,400);
 if(status=="true")
 {
   r=random(255);
   g=random(255);
   b=random(255);
  objectDetector.detect(video,gotresults);

  document.getElementById("c").innerHTML="Objects Detected";
  document.getElementById("c").innerHTML="Number of objects Detected are "+objects.length;
  for(i=0;i<objects.length;i++)
  {
    percent=floor(objects[i].confidence*100);
    name_object=objects[i].label;
    fill(r,g,b);
    text(name_object +" "+percent+"%",objects[i].x,objects[i].y);
    noFill();
    stroke(r,g,b);
    rect(objects[i].x,objects[i].y,objects[i].width,objects[i].height);
  }
 }
}