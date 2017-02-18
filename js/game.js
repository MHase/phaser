var game = new Phaser.Game(800, 600, Phaser.AUTO, '', { preload: preload, create: create, update: update });

require ('preload.js');
require ('create.js');
require ('update.js');

function collectStar (player, star) {

  // Removes the star from the screen
  star.kill();
  //  Add and update the score
  score += 10;
  scoreText.text = 'score: ' + score;

}
