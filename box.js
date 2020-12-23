class Block {
  constructor(x, y, width, height) {
    var options = {
        'restitution':0,
        'friction':1,
        'density':1
    }
    this.body = Bodies.rectangle(x, y, width, height, options);
    this.width = width;
    this.height = height;
    this.visiblity = 255;

    World.add(world, this.body);
  }
  display(){
    push();
    var pos =this.body.position;
    var speed = this.body.speed;

    if(speed < 5) {
      translate(pos.x, pos.y);
      rotate(this.body.angle);
      rectMode(CENTER);
      fill(random(0, 255), random(0,255), random(0, 255));
      rect(0, 0, this.width, this.height);
    }
    else{
      World.remove(world, this.body);
      this.visibility -= 5;
      score = score+5;
    }
    pop();
  }
}