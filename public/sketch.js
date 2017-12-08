function setup() {
  // put setup code here
  createCanvas(windowWidth, windowHeight)
  .parent("sketch-holder")
}

function draw() {
  // put drawing code here
  background(0)
  player.update()
  player.draw()
}

function windowResized() {
  resizeCanvas(windowWidth, windowHeight);
}

let player = {
  size: 0.90,
  pOverButtom: 20,
  x: 0,
  y: 0,
  center: 0,
  bullets: [],
  
  update: () => {
      player.x = mouseX - player.center;
      player.y = height - player.pOverButtom;
      player.center = 20 * player.size;

      //console.log(player.x, player.y, player.center)


      if(player.bullets.length !== 0)
      {
        console.log(player.bullets.length)
          player.bullets.forEach(bullet => {
              bullet.update()
              bullet.draw()
          });
      }
  },

  draw: () => {
      noStroke();
      translate(player.x, player.y);
      push();
      triangle(0, 0, player.center, -40 * player.size, 40 * player.size, 0)
      pop();
      translate(0,0)
  },
  shot: () => {
    bullet()
  }
}

const bullet = () => {
    this.width = 5;
    this.height = 5;
    this.x = player.x;
    this.y = player.y + 10;
    this.speed_multiplyer = 1;
    this.speed = 1 * this.speed_multiplyer;

    this.update = () => {
      console.log(this.y, this.x)
      this.y = this.y + this.speed
    }

    this.draw = () => {
        push();
        rect(this.x, this.y, this.width, this.height)
        pop();
    }
}

