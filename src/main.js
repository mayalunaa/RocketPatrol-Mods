/*
Maya Brown
Rocket Patrol Improvment
4/14/2022
Hours Spent to Complete: ~8-9 hours
Modifications made: (total of 100 points)
-------------------------------------------------------------------
1.) Simultaneous two-player mode (30 points)
2.) Smaller, faster spaceship worth more points (20 points)
3.) New artwork for rockets, spaceships and explosion (20 points)
4.) Successful hits add 1 second to the clock (20 points)
5.) Timer display (10 points)
*/

let config = {
    type: Phaser.AUTO,
    width: 640,
    height: 480,
    scene: [ Menu, Play ]
}

let game = new Phaser.Game(config);

// reserve keyboard vars
let keyF, keyR, keyLEFT, keyRIGHT, keyW, keyA, keyD;

// set UI sizes
let borderUISize = game.config.height / 15;
let borderPadding = borderUISize / 3;