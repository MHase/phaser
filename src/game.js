var game = new Phaser.Game(400, 400, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});

function preload() {
 // this.game.load.tilemap('MyTilemap', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
 //       this.game.load.image('tiles', 'assets/tileset.png');
 this.game.load.tilemap('MyTilemap', 'assets/map/map1.json', null, Phaser.Tilemap.TILED_JSON);
       this.game.load.image('tiles', 'assets/map/dungeon_sheet.png');
      //  this.game.load.image('dude', 'assets/img/player.png');
      game.load.spritesheet('dude', 'assets/img/player_animate.png', 12, 12);
}


var map;
var ground_layer;
var background_layer;
var cursors;
var player;

function create() {
          map = game.add.tilemap('MyTilemap');
          map.addTilesetImage('tiles', 'tiles');

          background_layer = map.createLayer('BackgroundLayer');
          ground_layer = map.createLayer('GroundLayer');
          ground_layer.resizeWorld();
          ground_layer.wrap = true;

          game.physics.startSystem(Phaser.Physics.ARCADE);

          player = game.add.sprite(game.world.centerX,game.world.centerX, 'dude');
          game.physics.arcade.enable(player);
          map.setCollisionBetween(0, 100, true, ground_layer); //id_kafelka_od, id_kafelka_do, czy_kolizja, ktora_warstwa
          game.camera.follow(player);

          player.body.collideWorldBounds = true;

          player.animations.add('right', [0, 1, 2, 3], 10, true);
          player.animations.add('left', [3, 2, 1], 10, true);
          player.animations.add('down', [4, 5, 6, 7], 10, true);
          player.animations.add('up', [7, 6, 5, 4], 10, true);

}


function update() {
  game.physics.arcade.collide(player, ground_layer);
  cursors = game.input.keyboard.createCursorKeys();

  // console.log(player.body.velocity);

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
