import chai from 'chai';
import {coordinateToIndex, getState, move, newGame} from '../gameState.js';

const expect = chai.expect;

describe('Getting a new game state', () => {
    it('returns an object with a map and a player', () => {
        const newState = getState();

        expect(newState.map).to.be.an('array').with.length(5);
        expect(newState.player).to.be.an('object');
        expect(newState.player.position).to.deep.equal({x: 2, y: 2});
    })

    it('resets the game state when newGame is called', () => {
        newGame();
        move('left');
        newGame();
        const newState = getState();

        expect(newState.map).to.be.an('array').with.length(5);
        expect(newState.player).to.be.an('object');
        expect(newState.player.position).to.deep.equal({x: 2, y: 2});
    })
})

describe('Moving the Player', () => {
    it('can move left', () => {
        newGame();
        move('left');
        const newState = getState();

        expect(newState.player.position).to.deep.equal({x: 1, y: 2});
    })
})