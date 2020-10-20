class Game{
    constructor(){
      this.n=[];
      this.pc=playerCount;
      this.t1=255;
      this.t2=255;
      this.t3=255;
      this.t4=255;
      this.t5=255;
      this.t6=255;
      this.l1=255;
      this.l2=255;
      this.l3=255;
      this.l4=255;
      this.l5=255;
      this.l6=255;

      this.as=1;
      this.al=0;

      this.dist=18;
      this.h=1.8;
      this.time=0;

      this.a=loadAnimation("Runner1a.png","Runner1b.png","Runner1c.png","Runner1d.png","Runner1e.png","Runner1f.png","Runner1g.png","Runner1h.png")
      this.b=loadAnimation("Runner2a.png","Runner2b.png","Runner2c.png","Runner2d.png","Runner2e.png","Runner2f.png","Runner2g.png","Runner2h.png")
      this.c=loadAnimation("Runner3a.png","Runner3b.png","Runner3c.png","Runner3d.png","Runner3e.png","Runner3f.png","Runner3g.png","Runner3h.png")
      this.d=loadAnimation("Runner4a.png","Runner4b.png","Runner4c.png","Runner4d.png","Runner4e.png","Runner4f.png","Runner4g.png","Runner4h.png")
      this.e=loadAnimation("Runner5a.png","Runner5b.png","Runner5c.png","Runner5d.png","Runner5e.png","Runner5f.png","Runner5g.png","Runner5h.png")
      this.f=loadAnimation("Runner6a.png","Runner6b.png","Runner6c.png","Runner6d.png","Runner6e.png","Runner6f.png","Runner6g.png","Runner6h.png")
      this.g=loadAnimation("Runner7a.png","Runner7b.png","Runner7c.png","Runner7d.png","Runner7e.png","Runner7f.png","Runner7g.png")
      player=new Player();

      this.hurdles=[];
      for(var i=2000;i<60000;i=i+2000){
        this.hurdles.push(new Hurdles(i,(height/3)*0.6,1))
        this.hurdles.push(new Hurdles(i,(height/3)*1.5,2))
        this.hurdles.push(new Hurdles(i,(height/3)*2.5,3))
      }

        player1=createSprite(0,(height/3)*0.5);
        this.ground1=createSprite(35000,(height/3)*1,90000,20);
        this.ground1.visible=false;
        player2=createSprite(0,(height/3)*1.5);
        this.ground2=createSprite(35000,(height/3)*2,90000,20);
        this.ground2.visible=false;
        player3=createSprite(0,(height/3)*2.5);
        this.ground3=createSprite(35000,(height/3)*3,90000,20);
        this.ground3.visible=false;

        players=[player1,player2,player3,player4];
        player1.visible=false;
        player2.visible=false;
        player3.visible=false;

        player1.depth=1;
        player2.depth=2;
        player3.depth=3;

        this.grounds=[this.ground1,this.ground2,this.ground3];

        this.j1;
        this.j2;
        this.j3;

    }

    form(){
        
        player.getState();
        player.getCount();
        form.form();

        

        if(player.num==="1"){
          animation(this.a,700,300);
        }else{
          animation(this.a,-1000,-1000);
        }
        if(player.num==="2"){
          animation(this.b,700,300);
        }else{
          animation(this.b,-1000,-1000);
        }
        if(player.num==="3"){
          animation(this.c,700,300);
        }else{
          animation(this.c,-1000,-1000);
        }
        if(player.num==="4"){
          animation(this.d,700,300);
        }else{
          animation(this.d,-1000,-1000);
        }
        if(player.num==="5"){
          animation(this.e,700,300);
        }else{
          animation(this.e,-1000,-1000);
        }
        if(player.num==="6"){
          animation(this.f,700,300);
        }else{
          animation(this.f,-1000,-1000);
        }
        if(player.num==="7"){
          animation(this.g,700,300);
        }else{
          animation(this.g,-1000,-1000);
        }

          for(var x=1;x<playerCount+1;x++){
            var playr='players/player'+x+"/playerNum";
            database.ref(playr).on("value",(data)=>{
              this.n.push(data.val());
            })
          }

        if(playerCount>2){
            State=1;
            player.updateState(State);
        }

        if(this.al=1){

        }

    }

    play(){
        form.hide();

        for(var h=0; h<this.hurdles.length;h++){
          this.hurdles[h].touch();
        }

        player1.depth=1;
        player2.depth=2;
        player3.depth=3;

        push();
        imageMode(CORNER);
        image(backGround,-5000,-600,5000,1230);
        image(backGround,0,-600,10000,1230);
        image(backGround,10000,-600,5000,1230);
        image(backGround,15000,-600,5000,1230);
        image(backGround,20000,-600,5000,1230);
        image(backGround,25000,-600,5000,1230);
        image(backGround,30000,-600,5000,1230);
        image(backGround,35000,-600,5000,1230);
        image(backGround,40000,-600,5000,1230);
        image(backGround,45000,-600,5000,1230);
        image(backGround,50000,-600,5000,1230);
        image(backGround,55000,-600,5000,1230);
        image(backGround,60000,-600,5000,1230);
        image(backGround,65000,-600,5000,1230);
        image(backGround,70000,-600,5000,1230);
        image(backGround,75000,-600,5000,1230);
        pop();

        this.al=0;

        if(players[player.index-1].y+100>this.grounds[player.index-1].y){
          players[player.index-1].y=this.grounds[player.index-1].y-120;
        }else{
          game.jump=game.jump+5*(((height/3)*(player.index-0.5)-players[player.index-1].y)/40);
        }
        player.updateJump();

        if(keyIsDown(UP_ARROW) && players[player.index-1].y>=(height/3)*(player.index-this.h)){
          game.jump=game.jump-40;
          player.updateJump();
          //players[player.index-1].setVelocity(0,-1)
          this.time++;
          if(this.time>10){
            game.jump=game.jump+60;
          }
          if(this.time>15){
            this.time=0;
          }
        }else{
          this.time=0;
          game.jump=(height/3)*(player.index-0.5);
        }

        database.ref('players/player1/jump').on("value",(data)=>{
          this.j1=data.val();
        })
        database.ref('players/player2/jump').on("value",(data)=>{
          this.j2=data.val();
        })  
        database.ref('players/player3/jump').on("value",(data)=>{
          this.j3=data.val();
        })


        player1.y=this.j1;
        player2.y=this.j2;
        player3.y=this.j3;

        if(keyIsDown(RIGHT_ARROW)){
          player.distance+=this.dist;
          player.updateDist();
        }

        database.ref('players/player1/distance').on("value",(data)=>{
          this.d1=data.val();
        })
        database.ref('players/player2/distance').on("value",(data)=>{
          this.d2=data.val();
        })  
        database.ref('players/player3/distance').on("value",(data)=>{
          this.d3=data.val();
        })

        players[0].x=this.d1;
        players[1].x=this.d2;
        players[2].x=this.d3;
        
        database.ref('players/player1/playerNum').on("value",(data)=>{
          this.r1=data.val();
        })
        database.ref('players/player2/playerNum').on("value",(data)=>{
          this.r2=data.val();
        })  
        database.ref('players/player3/playerNum').on("value",(data)=>{
          this.r3=data.val();
        })

        if(this.r1==="1"){
          animation(this.a,player1.x,player1.y);
        }
        if(this.r1==="2"){
          animation(this.b,player1.x,player1.y);
        }
        if(this.r1==="3"){
          animation(this.c,player1.x,player1.y);
        }
        if(this.r1==="4"){
          animation(this.d,player1.x,player1.y);
        }
        if(this.r1==="5"){
          animation(this.e,player1.x,player1.y);
        }
        if(this.r1==="6"){
          animation(this.f,player1.x,player1.y);
        }
        if(this.r1==="7"){
          animation(this.g,player1.x,player1.y);
        }



        if(this.r2==="1"){
          animation(this.a,player2.x,player2.y);
        }
        if(this.r2==="2"){
          animation(this.b,player2.x,player2.y);
        }
        if(this.r2==="3"){
          animation(this.c,player2.x,player2.y);
        }
        if(this.r2==="4"){
          animation(this.d,player2.x,player2.y);
        }
        if(this.r2==="5"){
          animation(this.e,player2.x,player2.y);
        }
        if(this.r2==="6"){
          animation(this.f,player2.x,player2.y);
        }
        if(this.r2==="7"){
          animation(this.g,player2.x,player2.y);
        }



        if(this.r3==="1"){
          animation(this.a,player3.x,player3.y);
        }
        if(this.r3==="2"){
          animation(this.b,player3.x,player3.y);
        }
        if(this.r3==="3"){
          animation(this.c,player3.x,player3.y);
        }
        if(this.r3==="4"){
          animation(this.d,player3.x,player3.y);
        }
        if(this.r3==="5"){
          animation(this.e,player3.x,player3.y);
        }
        if(this.r3==="6"){
          animation(this.f,player3.x,player3.y);
        }
        if(this.r3==="7"){
          animation(this.g,player3.x,player3.y);
        }

        //players[player.index-1].scale=0.3;

        camera.x=players[player.index-1].x
        camera.y=625/2;
        camera.zoom=0.7;

          drawSprites();
    }
}