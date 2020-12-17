import chai from 'chai';
import {gamePersistence} from '../gamePersistence.js';
import {InMemoryDataStore} from "../dataStore/inMemoryStore.js";

const expect = chai.expect;

const exampleGame = {
    player: {x: 0, y: 0},
    map: [{}, {}, {}]
}

describe('Saving a game', () => {
    it('saves the game to persistence', () => {
        const persistence = gamePersistence(InMemoryDataStore())

        expect(false).to.equal(true)
    })

    it('returns the data loaded from the data store', () => {
        const persistence = gamePersistence(InMemoryDataStore())


        expect(false).to.equal(true)
    })
})