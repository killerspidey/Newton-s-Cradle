class Bob {
    constructor(x, y, radius) {
        var options = {
            isStatic: false,
            friction: 0.4,
            density: 3,
            restitution: 1.2
        }
        this.x = x;
        this.y = y;
        this.radius = radius;
        
        this.body = Bodies.circle(this.x, this.y, this.radius/2, options);
        World.add(world, this.body);
    }
    display() {
        var pos = this.body.position;
        push();
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        fill("red");
        ellipse(0, 0, this.radius, this.radius);
        pop();
    }
}