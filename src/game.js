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
        this.game.load.image('dude', 'assets/img/player.png');
// game.load.spritesheet('dude', 'assets/dude1.png', 16, 24);
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

}


function update() {
  game.physics.arcade.collide(player, ground_layer);
  cursors = game.input.keyboard.createCursorKeys();

  player.body.velocity.x = 0;
  player.body.velocity.y = 0;

  if (cursors.left.isDown) {
      player.body.velocity.x = -150;
      // player.animations.play('left');
  } else if (cursors.right.isDown) {
      player.body.velocity.x = 150;
      // player.animations.play('right');
  } else {
      // player.animations.stop();
      // player.frame = 4;
  }

  if (cursors.up.isDown) {
    player.body.velocity.y = -150;
  } else if (cursors.down.isDown) {
    player.body.velocity.y = 150;
  }

}
