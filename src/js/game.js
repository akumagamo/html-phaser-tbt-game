
import { Scene as PreloadScene } from "./scene/preload.js";

var config = {
    type: Phaser.AUTO,
    scale: {
        mode: Phaser.Scale.RESIZE,
        autoCenter: Phaser.Scale.CENTER_BOTH
    },
    scene: [
        PreloadScene
    ]
};

new Phaser.Game(config);
