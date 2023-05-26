function preload(){
     hat = loadImage("https://i.postimg.cc/8cND3RGS/birthday-hat.png")
}

noseX = 0
noseY = 0

function setup(){
     canvas = createCanvas(300,300)
     canvas.center()
     video = createCapture(VIDEO)
     video.hide()
     posenet = ml5.poseNet(video,modeLoaded)
     posenet.on('pose',gotResults)
}

function draw(){
     image(video,0,0,300,300)
     image(hat,noseX-200,noseY-300,30,30)
}

function modeLoaded(){
     console.log("model is ready")
}

function gotResults(results){
     if(results.length > 0 ){
          noseX = results[0].pose.nose.x
          noseY = results[0].pose.nose.y
          console.log("nose 'X' =   " +results[0].pose.nose.x)
          console.log("nose 'Y' =   " +results[0].pose.nose.y)
     }
}
