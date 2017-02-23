
function update() {
  game.physics.arcade.collide(player, ground_layer);
  cursors = game.input.keyboard.createCursorKeys();

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  if (cursors.left.isDown) {
      player.body.velocity.x = -150;
      player.animations.play('left');
  } else if (cursors.right.isDown) {
      player.body.velocity.x = 150;
      player.animations.play('right');
  } else {
      player.animations.stop();
      player.frame = 4;
  }

  if (cursors.up.isDown) {
    player.body.velocity.y = -150;
  } else if (cursors.down.isDown) {
    player.body.velocity.y = 150;
  }

}
