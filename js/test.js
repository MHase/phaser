var game = new Phaser.Game(400, 400, Phaser.AUTO, '', {
  preload: preload,
  create: create,
  update: update
});


function preload() {
  // this.game.load.tilemap('MyTilemap', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
  //       this.game.load.image('tiles', 'assets/tileset.png');
  this.game.load.tilemap('MyTilemap', 'assets/map1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'assets/dungeon_sheet.png');
        this.game.load.image('dude', 'assets/player.png');
// game.load.spritesheet('dude', 'assets/dude1.png', 16, 24);
}

var map;
var ground_layer;
var cursors;

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

          // player.animations.add('left', [0, 1, 2, 3], 10, true);
          // player.animations.add('right', [5, 6, 7, 8], 10, true);

          // var style = { font: "10px Courier", fill: "#fff", tabs: [ 100, 50, 40 ] };
          //
          //    var headings = [ 'Name', 'Damage', 'Speed', 'Notes' ];
          //
          //    text = game.add.text(0, 0, '', style);
          //    text.parseList(headings);
          //
          //    var swords = [
          //        [ 'Knife', '1d3', '1', '' ],
          //        [ 'Dagger', '1d4', '1', 'May be thrown' ],
          //        [ 'Rapier', '1d6', '2', 'Max strength damage bonus +1' ],
          //        [ 'Sabre', '1d6', '3', 'Max strength damage bonus +3' ],
          //        [ 'Cutlass', '1d6', '5', '' ],
          //        [ 'Scimitar', '2d4', '4', '' ],
          //        [ 'Long Sword', '1d8+1', '6', '' ],
          //        [ 'Bastard Sword', '1d10+1', '8', 'Requires 2 hands to use effectively' ],
          //        [ 'Great Sword', '1d12+1', '10', 'Must always be used with 2 hands']
          //    ];
          //
          //    var text2 = game.add.text(0, 15, '', style);
          //    text2.parseList(swords);
}



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
