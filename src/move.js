function movement() {
  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  //MOVEMENT
  //movement RIGHT and LEFT
  if (cursors.left.isDown)
      player.body.velocity.x = -150;
  else if (cursors.right.isDown)
      player.body.velocity.x = 150;
  //movement UP and DOWN
  if (cursors.up.isDown)
    player.body.velocity.y = -150;
  else if (cursors.down.isDown)
    player.body.velocity.y = 150;


  //ANIMATION

  if(player.body.velocity.x == 0 && player.body.velocity.y == 0){
      player.animations.stop();
      player.frame = 0;
    }
  if(player.body.velocity.x > 0 && (player.body.velocity.y >= 0 || player.body.velocity.y < 0))
    player.animations.play('right');
  if(player.body.velocity.x < 0 && (player.body.velocity.y >= 0 || player.body.velocity.y < 0))
    player.animations.play('left');
  if(player.body.velocity.x == 0 && player.body.velocity.y > 0)
    player.animations.play('down');
  if(player.body.velocity.x == 0 && player.body.velocity.y < 0)
    player.animations.play('up');

}

module.exports = movement;
