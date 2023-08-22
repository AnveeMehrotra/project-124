function setup(){
video=createCapture(VIDEO);
video.size(600,500);

canvas=createCanvas(400,300);
canvas.postion(500,100)

poseNet = ml5.poseNet(video, modelLoaded);
poseNet.on('pose', gotPoses);
  
}

function modelLoaded() {
    console.log('PoseNet Is Initialized!');
}


function gotposes(){

}


