class String {
    constructor(bodyA, pointB) {
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            length: 0,
            stiffness: 0.08
        }

        this.string = Matter.Constraint.create(options);
        this.bodyA = bodyA
        World.add(world, this.string);
    }

    shoot() {
        this.string.bodyA = null;
    }

    reload() {
        if (this.string.bodyA == null) {
            this.string.bodyA = this.bodyA;
        }
    }

    display() {
        if (this.string.bodyA) {
            var bodyA = this.string.bodyA.position;
            var pointB = this.string.pointB;

            push();
            stroke("#CCE5FF");
            strokeWeight(4);
            line(bodyA.x, bodyA.y, pointB.x, pointB.y);
            pop();
        }
    }
}