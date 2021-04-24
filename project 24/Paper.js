class Paper
{
    constructor(x, y) {
        var options = {
            'restitution':0.8,
            'friction':0.3,
            'density':1.0
        }
        this.body = Bodies.circle(x, y,25,options);
        this.width = 50;
        this.height = 50;
        
        World.add(world, this.body);
      }
      display(){

        push();
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("red");
        fill("green");
        ellipse(200, 350,25,25);
        pop();
      }
      
}