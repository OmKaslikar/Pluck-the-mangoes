
class Mango{
  constructor(x,y,r){
      var options={
          isStatic:true,
          restitution:0.3,
          friction:15,
          density:1.2

      }
      this.image=loadImage("mango.png")
      this.x=x;
      this.y=y;
      this.r=r;
      this.body=Bodies.circle(this.x,this.y,this.r/2,options)
      World.add(world,this.body);
  
  }
  display(){

      var pos = this.body.position;

      push()
      translate(pos.x,pos.y);
      imageMode(RADIUS);
      strokeWeight(4);
      fill(255);
      image(this.image,0,0,this.r,this.r);
      pop()
  }
}