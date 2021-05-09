class Iron{
    constructor(x,y,height,width){
        var options = {
            restitution:0.8,
            friction:3,
            density:30
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        World.add(world,this.body);
        this.width = width;
        this.height = height;
    }
    display(){
        
        var rubberpos=this.body.position;		
        push()
        translate(rubberpos.x, rubberpos.y);
        rectMode(CENTER)
        strokeWeight(4);
        stroke("black");
        fill("yellow");
        //draw the ellipse here to display the rubber ball
        rect(0,0,this.width,this.height);

        pop()

    }
}