class Box{
  constructor(x, y, width, height, angle) {
      var options = {
          'restitution':0.8,
          'friction':1.0,
          'density':1.0
      }
      this.Visiblity = 255;
      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      World.add(world, this.body);
    }
    display(){
    if(this.body.speed < 3)  {

      var angle = this.body.angle;
      push();
      translate(this.body.position.x, this.body.position.y);
      rotate(angle);
      rectMode(CENTER);
      rect(0,0, this.width, this.height);
      fill("green");
      pop();

    }
    else{

      var angle = this.body.angle;
      World.remove(world, this.body);
      push();
      this.Visiblity = this.Visiblity - 5;
     // tint(255,this.Visiblity);
      pop();

    }
      
    }

    score()  {

      if (this.visibility< 0 && this.visibility> - 10)  {
      
      score = score+1;
      console.log(score);
      }
      
      
      }
}
