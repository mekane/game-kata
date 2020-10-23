import chai from 'chai';
const expect = chai.expect;

import {coordinateToIndex, getState, move, newGame} from '../gameState.js';

describe('Get State', () => {
    it('it is a function that returns an object', () => {
        const expectedState = {
            map: [],
            player: {}
        }
        expect(getState()).to.equal(expectedState);
    })
})