 
class Ground{
    constructor(x,y,width,height){
        var options={
            isStatic:true
 
        }
        this.body = Bodies.rectangle(x,y,width,height,options)
        this.width = width
        this.height = height
        this.x=x;
        this.y=y;
        World.add(world,this.body)
       }
       display(){
           var groundPos=this.body.position;
           push()
           translate(groundPos.x,groundPos.y)
           rectMode(CENTER);
           fill(255,255,0);
           rect(0,0,this.width,this.height)
           pop();
       }
   
   }
