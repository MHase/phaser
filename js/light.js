// This example uses the Phaser 2.2.2 framework

// Copyright © 2014 John Watson
// Licensed under the terms of the MIT License

var GameState = function(game) {
};

// Load images and sounds
GameState.prototype.preload = function() {
    // this.game.load.image('person', '/assets/gfx/player.png');
    game.load.spritesheet('person', 'assets/dude1.png', 16, 24);
};

// Setup the example
GameState.prototype.create = function() {
    // Set stage background color
    this.game.stage.backgroundColor = 0x4488cc;

    // The radius of the circle of light
    this.LIGHT_RADIUS = 100;

    // Add random people on the screen
    var NUMBER_OF_PEOPLE = 20;
    for(var i = 0; i < NUMBER_OF_PEOPLE; i++) {
        var x = this.game.rnd.integerInRange(100, this.game.width-100);
        var y = this.game.rnd.integerInRange(100, this.game.height-100);
        this.game.add.image(x, y, 'person');
    }

    // Create the shadow texture
    this.shadowTexture = this.game.add.bitmapData(this.game.width, this.game.height);

    // Create an object that will use the bitmap as a texture
    var lightSprite = this.game.add.image(0, 0, this.shadowTexture);

    // Set the blend mode to MULTIPLY. This will darken the colors of
    // everything below this sprite.
    lightSprite.blendMode = Phaser.blendModes.MULTIPLY;

    // Simulate a pointer click/tap input at the center of the stage
    // when the example begins running.
    this.game.input.activePointer.x = this.game.width/2;
    this.game.input.activePointer.y = this.game.height/2;
};

// The update() method is called every frame
GameState.prototype.update = function() {
    // Update the shadow texture each frame
    this.updateShadowTexture();
};

GameState.prototype.updateShadowTexture = function() {
    // This function updates the shadow texture (this.shadowTexture).
    // First, it fills the entire texture with a dark shadow color.
    // Then it draws a white circle centered on the pointer position.
    // Because the texture is drawn to the screen using the MULTIPLY
    // blend mode, the dark areas of the texture make all of the colors
    // underneath it darker, while the white area is unaffected.

    // Draw shadow
    this.shadowTexture.context.fillStyle = 'rgb(100, 100, 100)';
    this.shadowTexture.context.fillRect(0, 0, this.game.width, this.game.height);

    // Draw circle of light with a soft edge
    var gradient = this.shadowTexture.context.createRadialGradient(
        this.game.input.activePointer.x, this.game.input.activePointer.y, this.LIGHT_RADIUS * 0.75,
        this.game.input.activePointer.x, this.game.input.activePointer.y, this.LIGHT_RADIUS);
    gradient.addColorStop(0, 'rgba(255, 255, 255, 1.0)');
    gradient.addColorStop(1, 'rgba(255, 255, 255, 0.0)');

    this.shadowTexture.context.beginPath();
    this.shadowTexture.context.fillStyle = gradient;
    this.shadowTexture.context.arc(this.game.input.activePointer.x, this.game.input.activePointer.y,
        this.LIGHT_RADIUS, 0, Math.PI*2);
    this.shadowTexture.context.fill();

    // This just tells the engine it should update the texture cache
    this.shadowTexture.dirty = true;
};

// Setup game
var game = new Phaser.Game(848, 450, Phaser.AUTO, 'game');
game.state.add('game', GameState, true);
