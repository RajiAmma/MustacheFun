noseX=0;
noseY=0;
function preload(){
    clownNose=loadImage("https://i.postimg.cc/G3Wj6WL8/mustache.jpg");
}
function setup(){
    canvas=createCanvas(300,300);
    canvas.position(550,200);
    video=createCapture(VIDEO);
    video.size(300,300);
    video.hide();
    posenet=ml5.poseNet(video,modelLoaded);
    posenet.on('pose', gotPoses);
}
function draw(){
    image(video,0,0,300,300);
    image(clownNose,noseX,noseY,30,30);
}
function take_snapshot(){
    save('snapshot.png');
}
function modelLoaded(){
    console.log("PoseNet is initialized");
}
function gotPoses(results){
    if (results.length>0){
        console.log(results);
        noseX=results[0].pose.nose.x-15;
        noseY=results[0].pose.nose.y+15;
    }
}