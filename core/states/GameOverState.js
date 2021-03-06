class GameOverState extends Phaser.State {
  init(score) {
    this.score = score;
  }

  create() {
    this.title = new Phaser.Text(
      this.game,
      this.game.world.centerX,
      this.game.world.centerY - 200,
      `Game Over \n Score: ${this.score}`,
      {
        font: "36px Tahoma",
        fill: "white",
        align: "center"
      }
    );

    this.title.anchor.setTo(0.5);

    this.start = new TextButton({
      game: this.game,
      x: this.game.world.centerX,
      y: this.game.world.centerY,
      overFrame: 2,
      outFrame: 1,
      downFrame: 0,
      upFrame: 1,
      label: "Restart",
      style: {
        font: "16px Verdana",
        fill: "white",
        align: "center"
      }
    });

    this.start.onInputUp.add(() => this.state.start("Game"));

    this.menuPanel = this.add.group();
    this.menuPanel.add(this.title);
    this.menuPanel.add(this.start);
  }
}
