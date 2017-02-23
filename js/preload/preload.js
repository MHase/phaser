function preload() {
  // this.game.load.tilemap('MyTilemap', 'assets/map.json', null, Phaser.Tilemap.TILED_JSON);
  //       this.game.load.image('tiles', 'assets/tileset.png');
  this.game.load.tilemap('MyTilemap', 'assets/map1.json', null, Phaser.Tilemap.TILED_JSON);
        this.game.load.image('tiles', 'assets/dungeon_sheet.png');
        this.game.load.image('dude', 'assets/player.png');
// game.load.spritesheet('dude', 'assets/dude1.png', 16, 24);
}
