var gameState = 0;
var contestantCount, contestant;
var database , quiz;
var canvas;


function setup(){
  canvas = createCanvas(850,400);
  database= firebase.database();

  quiz = new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  
}
