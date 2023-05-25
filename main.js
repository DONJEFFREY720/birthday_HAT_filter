function preload(){

}

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
}

function modeLoaded(){
     console.log("model is ready")
}

function gotResults(results){
     if(results.length > 0 ){
          console.log("nose 'X' =   " +results[0].pose.nose.x)
          console.log("nose 'Y' =   " +results[0].pose.nose.y)
     }
}

function take_snap(){
     save("YOU ARE A CLOWN.png")
}
