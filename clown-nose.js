/*var Canvas=document.createElement('canvas');
Canvas.width=800;
Canvas.height=600;
Canvas.style.backgroundColor="black";
console.log(Canvas);
document.body.appendChild(Canvas);*/
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
    image(clown_nose,x,y,30,30);
}
function preload(){
    clown_nose=loadImage("https://i.postimg.cc/7ZBcjDqp/clownnose.png");
}
function ini(){
    console.log("Initialized");
}
function redirect_m(){
    window.location="mustache.html";
}
function redirect_l(){
    window.location="lipstick.html";    
}
function getposes(results){
    if(results.length!=0){
        x=results[0]["pose"]["nose"]["x"];
        x=x-15;
        y=results[0]["pose"]["nose"]["y"];
        y=y-15;
        console.log(x,y);
    }
}
function capture(){
    save("My_Img.png");
}


//results>0>pose>nose>x/y