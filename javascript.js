let playerState = 'fall';
const dropdown = document.getElementById('animations');
// dropdown.addEventListener('change', function(e) {
//     playerState = e.target.value;
// })


// button function
const idleButton = document.getElementById('idle');
const jumpButton = document.getElementById('jump');
const fallButton = document.getElementById('fall');
const irunButton = document.getElementById('run');
const dizzyButton = document.getElementById('dizzy');
const sitButton = document.getElementById('sit');
const rollButton = document.getElementById('roll');
const biteButton = document.getElementById('bite');
const koButton = document.getElementById('ko');
const getHitButton = document.getElementById('getHit');

idleButton.onclick = function() {
    playerState = 'idle'
}
jumpButton.onclick = function() {
    playerState = 'jump'
}
fallButton.onclick = function() {
    playerState = 'fall'
}
// runButton.onclick = function() {
//     playerState = 'run'
// }
dizzyButton.onclick = function() {
    playerState = 'dizzy'
}
sitButton.onclick = function() {
    playerState = 'sit'
}
rollButton.onclick = function() {
    playerState = 'roll'
}
biteButton.onclick = function() {
    playerState = 'bite'
}
koButton.onclick = function() {
    playerState = 'ko'
}
getHitButton.onclick = function() {
    playerState = 'getHit'
}


const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
const CANVAS_WIDTH = canvas.width = 600;
const CANVAS_HEIGHT = canvas.height = 600;

const playerImage = new Image();
playerImage.src = 'shadow_dog.png';
const spriteWidth = 575;
const spriteHeight = 525;

let gameFrame = 0;
const staggerFrames = 5;
const spriteAnimations = [];
const animationStates = [
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'jump',
        frames: 7,
    },
    {
        name: 'fall',
        frames: 7,
    },
    {
        name: 'run',
        frames: 9,
    },
    {
        name: 'dizzy',
        frames: 11,
    },
    {
        name: 'sit',
        frames: 5,
    },
    {
        name: 'roll',
        frames: 7,
    },
    {
        name: 'bite',
        frames: 7,
    },
    {
        name: 'ko',
        frames: 12,
    },
    {
        name: 'idle',
        frames: 7,
    },
    {
        name: 'getHit',
        frames: 4,
    }
];
animationStates.forEach((state, index) => {
    let frames = {
        loc: [],
    }
    for (let j = 0; j < state.frames; j++) {
        let positionX = j * spriteWidth;
        let positionY = index * spriteHeight;
        frames.loc.push({x: positionX, y: positionY});
    }
    spriteAnimations[state.name] = frames;
});
console.log(spriteAnimations);

function animate() {
    ctx.clearRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
    let position = Math.floor(gameFrame/staggerFrames) % spriteAnimations[playerState].loc.length;
    let frameX = spriteWidth * position;
    let frameY = spriteAnimations[playerState].loc[position].y;
    ctx.drawImage(playerImage, frameX, frameY, spriteWidth, spriteHeight, 0, 0, spriteWidth, spriteHeight);
    
    gameFrame++;
    requestAnimationFrame(animate);
};



animate();