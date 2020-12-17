export function gamePersistence(dataStore) {

    function saveGame(gameData) {
        dataStore.save(gameData)
    }

    function loadGame() {
        return dataStore.load()
    }

    return {
        saveGame,
        loadGame
    }
}

