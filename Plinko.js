class Plinko {
    constructor(x, y, radius){
        var options={
            isStatic: true
        }
        this.Bodies.circle(x, y, radius, options);
        this.radius = 10;
        World.add(world, this.body);
    }
   display(){
       var pos = this.body.postion;
       ellipseMode(RADIUS);
       Fill("white");
       ClientRect(pos.x, pos.y, this.radius);
   }
};