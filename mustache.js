var video;
x=0;
y=0;
function setup(){
    var canvas=createCanvas(370,320);
    background(0);
    canvas.center();
    video=createCapture(VIDEO);
    video.size(370,320);
    video.hide();
    posenet=ml5.poseNet(video,ini);
    posenet.on('pose',getposes)
}
function draw(){
    image(video,0,0,370,320);
    image(mustache,x,y,60,30);
}
function preload(){
    mustache=loadImage("mustache.png");
}
function ini(){
    console.log("Initialized");
}
function redirect_c(){
    window.location="clown-nose.html";
}
function redirect_l(){
    window.location="lipstick.html";
}
function getposes(results){
    console.log(results);
    if(results.length!=0){
        x=results[0]["pose"]["nose"]["x"];
        x=x-30;
        y=results[0]["pose"]["nose"]["y"];
        y=y+5;
        console.log(x,y);
    }
}
function capture(){
    save("My_Img.png");
}


//results>0>pose>nose>x/y