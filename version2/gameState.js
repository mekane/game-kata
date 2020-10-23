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

export function coordinateToIndex(x, y) {
    const mapWidth = defaultMap[0].length; //assuming map is rectangular

    return y * mapWidth + x;
}

export function getState() {
    return {
        map,
        player
    }
}

export function move(moveDir) {
    if (moveDir === 'up')
        player.position.y--;
    if (moveDir === 'down')
        player.position.y++;
    if (moveDir === 'right')
        player.position.x++;
    if (moveDir === 'left')
        player.position.x--;
}

export function newGame(newMap = defaultMap, newPlayer) {
    map = newMap;
    if (newPlayer)
        player = newPlayer;
}