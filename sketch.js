var State=0,playerCount=0,hurdle,player,game,form,database,allPlayers,distance = 0;
var a,b,c,d,e,f;
var player1,player2,player3,player4,players;
var backGround;

function preload(){
  a=loadImage("Runner 1.png");
  b=loadImage("Runner 2.png");
  c=loadImage("Runner 3.png");
  d=loadImage("Runner 4.png");
  e=loadImage("Runner 5.png");
  f=loadImage("Runner 6.png");

  backGround=loadImage("bg.jpg");
}

function setup() {
  createCanvas(1360,625);
  database = firebase.database();
  game=new Game();
  form=new Form();
}

function draw() {
  if(State!==0){
    background('#526A27');
  }else{
    background('white');
  }

  if(State===0){
    game.form();
  }else{
    if(State===1){
      game.play();
    }
  }

}
