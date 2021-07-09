class Box {

    constructor(x, y, width, height) {
        var options = {
            isStatic: true
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        World.add(world, this.body);
        this.width = width;
        this.height = height;
        this.image = loadImage("dustbingreen.png");
    }

    display() {
       image(this.image, this.body.position.x, this.body.position.y, 100, 100);
    }

}