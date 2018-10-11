var socket;

function setup(){

createCanvas(600, 600, WEBGL);
background(255, 0, 0);
socket = io.connect('http://localhost:3000');

// handles message coming in
socket.on('mouse', newDrawing);

} // end set up

function newDrawing(data){
 noStroke();
  fill(100);
  ellipse(data.x, data.y, 36, 36);

  if((data.x > 200) && (data.y > 200))
  {
    background(data.y, data.x, 255);
  }
}

function mouseDragged(){
  console.log('Sending: ' + mouseX + ',' + mouseY);

  var data = {
    x: mouseX,
    y: mouseY

  };

  socket.emit('mouse', data);

  noStroke();
  fill(255);


  ellipse(mouseX, mouseY, 36, 36);
}



// function of node express, take piece of data send to the server

// client
function draw(){
}// end draw
