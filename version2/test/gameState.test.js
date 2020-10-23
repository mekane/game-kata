const expect = require('chai').expect;

const gameState = require('../gameState');

describe('Get State', () => {
    it('it is a function that returns an object', () => {
        const expectedState = {
            map: [],
            player: {}
        }
        expect(gameState.getState()).to.equal(expectedState);
    })
})