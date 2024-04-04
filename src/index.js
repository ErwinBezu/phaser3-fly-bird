import Phaser from "phaser";

const config = {
  type: Phaser.AUTO,
  width: 800,
  height: 600,
  physics: {
    default: "arcade",
    arcade: {
      debug: true,
      gravity: {
        y: 400,
      },
    },
  },
  scene: {
    preload,
    create,
    update,
  },
};

function preload() {
  this.load.image("sky", "assets/sky.png");
  this.load.image("bird", "assets/bird.png");
}

const VELOCITY = 200;
let bird = null;
const flapVelocity = 250;
const initalBirdPosition = { x: config.width * 0.1, y: config.height / 2 };

function create() {
  // this.add.image(config.width / 2, config.height / 2, "sky");
  this.add.image(0, 0, "sky").setOrigin(0, 0);
  bird = this.physics.add
    .sprite(initalBirdPosition.x, initalBirdPosition.y, "bird")
    .setOrigin(0);

  this.input.on("pointerdown", flap);
  this.input.keyboard.on("keydown_SPACE", flap);
}

function update(time, delta) {
  if (bird.y > config.height || bird.y < -bird.height) {
    restartBirdPosition();
  }
}

function restartBirdPosition() {
  bird.x = initalBirdPosition.x;
  bird.y = initalBirdPosition.y;
  bird.body.velocity.y = 0;
}

function flap() {
  bird.body.velocity.y = -flapVelocity;
}

new Phaser.Game(config);
