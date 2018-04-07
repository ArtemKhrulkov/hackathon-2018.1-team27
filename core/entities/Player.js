class Player extends Phaser.Sprite {
  constructor({ game, x, y, asset }) {
    super(game, x, y, asset); 
    this.anchor.setTo(0.5);
    this.game.physics.enable(this, Phaser.Physics.ARCADE);
    this.body.collideWorldBounds = true;

    this.MOVE_STEP = 5;
    this.ROTATE_STEP = 5;

    this.createWeapon();
  }

  update() {
    this.movement();
  }

  destroy() {
    this.weapon.killAll();
    this.kill();
  }

  movement() {
    let keyboard = this.game.input.keyboard;

    if (keyboard.isDown(Phaser.Keyboard.W)) {
      this.y -= this.MOVE_STEP;
    }

    if (keyboard.isDown(Phaser.Keyboard.A)) {
      this.x -= this.MOVE_STEP;
    }

    if (keyboard.isDown(Phaser.Keyboard.S)) {
      this.y += this.MOVE_STEP;
    }

    if (keyboard.isDown(Phaser.Keyboard.D)) {
      this.x += this.MOVE_STEP;
    }

    if (keyboard.isDown(Phaser.Keyboard.LEFT)) {
      this.angle -= this.ROTATE_STEP;
    }

    if (keyboard.isDown(Phaser.Keyboard.RIGHT)) {
      this.angle += this.ROTATE_STEP;
    }

    if (keyboard.isDown(Phaser.Keyboard.SPACEBAR)) {
      for (let i = 0; i < this.game.rnd.integerInRange(3, 12); i++) {
        this.weapon.fire();
      }
    }
  }

  createWeapon() {
    this.weapon = this.game.add.weapon(100, "bullet");

    this.weapon.bulletKillType = Phaser.Weapon.KILL_DISTANCE;
    this.weapon.bulletAngleOffset = 90;
    this.weapon.bulletKillDistance = 150;
    this.weapon.bulletSpeed = 400;
    this.weapon.fireRate = 600;
    this.weapon.multiFire = true;
    this.weapon.bulletAngleVariance = 10;

    this.weapon.trackSprite(this, 14, 0, true);
  }
}
