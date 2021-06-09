class Iron {
    constructor(x, y) {
      var options = {
        'density':0.8,
        'friction': 3,
        'restitution':0.3
      };
      this.body = Bodies.rectangle(x, y, 60, 60, options);
      this.width = 60;
      this.height = 60;
      World.add(world, this.body);
    };
    display(){
      var pos = this.body.position;
      var angle = this.body.angle;
  
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      strokeWeight(3);
      stroke('purple')
      fill('green')
      rectMode(CENTER)
      rect(0, 0, 60,60);
      pop();
    };
  };
  