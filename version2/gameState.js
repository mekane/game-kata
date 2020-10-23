const defaultMap = [
    [{}, {}, {}, {}, {}],
    [{}, {}, {wall: true}, {wall: true}, {}],
    [{}, {}, {}, {wall: true}, {}],
    [{}, {}, {}, {}, {}],
    [{}, {}, {}, {}, {}],
];

let map = [];

let player = {
    position: {
        x: 2,
        y: 2
    }
};

function coordinateToIndex(x, y) {
    const mapWidth = defaultMap[0].length; //assuming map is rectangular

    return y * mapWidth + x;
}

function getState() {
    return {
        map: defaultMap,
        player
    }
}

function move(moveDir) {
    if (moveDir === 'up')
        player.position.y--;
    if (moveDir === 'down')
        player.position.y++;
    if (moveDir === 'right')
        player.position.x++;
    if (moveDir === 'left')
        player.position.x--;
}

function newGame(newMap = defaultMap, newPlayer) {
    map = newMap;
    if (newPlayer)
        player = newPlayer;
}

module.exports = {
    coordinateToIndex,
    getState,
    move,
    newGame
}