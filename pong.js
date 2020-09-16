class Ball {
  constructor(x,y,r) {
    this.x = x;
    this.y = y;
    this.r = r;
  }
  Draw(context){
    context.beginPath();
    context.arc(this.x,this.y,this.r,0,Math.PI*2);
    context.fillStyle = "red";
    context.closePath();
    context.stroke();
    context.fill();
  }
}

class Paddle {
  constructor(x,y,width,height) {
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
  }
  Draw(context){
    context.beginPath();
    context.rect(this.x, this.y, this.width, this.height);
    context.fillStyle	= "red";
    context.closePath();
    context.stroke();
    context.fill();
  }
}

const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

//Makes the canvas the same width and height as the screen
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Creates a random number
function getRandomNumber(max){
  return Math.floor(Math.random() * max);
}

//Makes random spawn location for ball 1
let myX = getRandomNumber(canvas.width);
let myY = getRandomNumber(canvas.height);

let paddleWidth = 30;
let paddleHeight = 200;

//Makes Ball 
let myBall = new Ball(myX,myY,20);
myBall.Draw(context);

//Speed Ball 
let speedX = 10;
let speedY = 10;

//left Rectangle
let lPaddle = new Paddle(40,20, paddleWidth, paddleHeight);
lPaddle.Draw(context);

//Right Rectangle
let rPaddle = new Paddle(canvas.width - 70, 20, paddleWidth, paddleHeight);
rPaddle.Draw(context);

function animate() {
  //animates the ball so it looks smooth
  window.requestAnimationFrame(animate);

  //Clears the last ball after making a new one
  context.clearRect(0,0,canvas.width,canvas.height);

  //Draws ball 1
  myBall.Draw(context);
  myBall.x += speedX;
  myBall.y += speedY;

  //Ball 1 wall detection
  if(myBall.y > canvas.height - 20){speedY = -speedY;}
  if(myBall.y < 20){speedY = -speedY;}
  if(myBall.x > canvas.width - myBall.r){speedX = -speedX;}
  if(myBall.x < 20){speedX = -speedX;}

  //Left paddle wall detection
  if(lPaddle.y < 20){lPaddle.y = 0;}
  if(lPaddle.y > canvas.height - 200){lPaddle.y = canvas.height - 200;}

  //Right paddle wall detection
  if(rPaddle.y < 20){rPaddle.y = 0;}
  if(rPaddle.y > canvas.height - 200){rPaddle.y = canvas.height - 200;}

  //LPaddle collision with ball
  if (myBall.x - myBall.r <= lPaddle.x && myBall.x >= lPaddle.x - lPaddle.width) 
  {
    if (myBall.y <= lPaddle.y + lPaddle.height && myBall.y + myBall.r >= lPaddle.y) 
    {
      speedX = -speedX;
    }
  }

  //RPaddle collision with ball
  if (myBall.x - myBall.r <= rPaddle.x && myBall.x >= rPaddle.x - rPaddle.width) 
  {
    if (myBall.y <= rPaddle.y + rPaddle.height && myBall.y + myBall.r >= rPaddle.y) 
    {
      speedX = -speedX;
    }
  }

  //Keeps redrawing the paddles
  lPaddle.Draw(context);
  rPaddle.Draw(context);

  //sets the right paddle on the same y as ball 1
  rPaddle.y = myBall.y - 70;
  lPaddle.y = myBall.y - 70;
}

//Calls the function animate
animate();

// canvas.addEventListener("mousemove", setMousePosition, false);
//   function setMousePosition(e){
//     mouseY = e.clientY;
//     lPaddle.y = mouseY - 100;
// }