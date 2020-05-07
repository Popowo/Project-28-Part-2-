class Rock {
    constructor(x, y, radius) {
        var options = {
            'density': 0.4,
            'restitution': 0.8,
            'friction': 0.3,
            'frictionAir': 0.002
        }
        this.rock = Bodies.circle(x, y, radius);
        this.radius = radius;
        World.add(world, this.rock);
    }

    display() {
        var pos = this.rock.position;

        ellipseMode(RADIUS);
        fill("green");
        noStroke();
        ellipse(pos.x, pos.y, this.radius);
    }
}