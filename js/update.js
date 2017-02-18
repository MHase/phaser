
function update() {
  cursors = game.input.keyboard.createCursorKeys();
  //  Collide the player and the stars with the platforms
  var hitPlatform = game.physics.arcade.collide(player, platforms);


  //  Reset the players velocity (movement)
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  if (cursors.left.isDown) {
      player.body.velocity.x = -150;
      player.animations.play('left');
  } else if (cursors.right.isDown) {
      player.body.velocity.x = 150;
      player.animations.play('right');
  } else {
      //  Stand still
      player.animations.stop();
      player.frame = 4;
  }

  if (cursors.up.isDown) {
    player.body.velocity.y = -150;
  } else if (cursors.down.isDown) {
    player.body.velocity.y = 150;
  }


  //  Allow the player to jump if they are touching the ground.
  // if (cursors.up.isDown && player.body.touching.down && hitPlatform)
  // {
  //     player.body.velocity.y = -350;
  //
  // }

  game.physics.arcade.collide(stars, platforms);
  game.physics.arcade.overlap(player, stars, collectStar, null, this);
}
