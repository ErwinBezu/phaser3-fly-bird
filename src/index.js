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
let flapVelocity = 250;
let totalDelta = null;

function create() {
  // this.add.image(config.width / 2, config.height / 2, "sky");
  this.add.image(0, 0, "sky").setOrigin(0, 0);
  bird = this.physics.add
    .sprite(config.width / 10, config.height / 2, "bird")
    .setOrigin(0);

  this.input.on("pointerdown", flap);
  this.input.keyboard.on("keydown_SPACE", flap);
}

function update(time, delta) {}

function flap() {
  bird.body.velocity.y = -flapVelocity;
}

new Phaser.Game(config);
