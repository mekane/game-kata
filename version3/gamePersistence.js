let savedGame = {};

export function saveGame(gameData) {
    savedGame = JSON.parse(JSON.stringify(gameData));
}

export function loadGame() {
    return JSON.parse(JSON.stringify(savedGame));
}