class Hurdles{
    constructor(x,y,depth){
        this.body=createSprite(x,y,100,150);
        this.depth=depth;
        this.ran=Math.round(random(2,9));
        this.img=loadImage("tree"+this.ran+".png");
        this.body.addImage(this.img);
    }

    touch(){
        if(dist(this.body.x,this.body.y,players[player.index-1].x,players[player.index-1].y)<60 && this.body.x>players[player.index-1].x+10 && this.depth===player.index){
            player.distance=0;
            player.updateDist();
            this.body.depth=-900000;
        }
    }
}