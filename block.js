class Block {
    constructor(x,y,width,height) {
      var options = {
        'restitution':0.8,
        'friction':0.5,
        'density':0.5
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.width = width;
      this.height = height;
      this.visibility=255
      World.add(world, this.body);
       
    }
    display(){
      var pos =this.body.position;
     
      rectMode(CENTER);
      
      fill(62,223,207)
      
      rect(pos.x, pos.y, this.width, this.height);
      
      console.log(this.body.speed);

      if((this.body.speed)<3){
        
        var angle=this.body.angle
        var pos=this.body.position
        push() 
        translate(pos.x,pos.y)
        rotate(angle)
        rectMode(CENTER)
        rect(0,0,this.width,this.height)
        pop()
      }
      else{
      World.remove(world,this.body)
        push()
  this.visibility=this.visibility-5
  tint(255,this.visibility);
 // image(this.image,this.body.position.x,this.body.position.y,50,50)
       pop()
      }
      
    }
  }