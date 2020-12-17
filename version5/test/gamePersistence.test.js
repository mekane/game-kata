import chai from 'chai';
import {gamePersistence} from '../gamePersistence.js';

const expect = chai.expect;

describe('Saving a game', () => {
    it('saves the argument to the data store provided', () => {
        const dataStoreSpy = {
            saveCalled: 0,
            save: function () {
                this.saveCalled++
            }
        }
        const persistence = gamePersistence(dataStoreSpy)

        persistence.saveGame()

        expect(dataStoreSpy.saveCalled).to.equal(1)
    })

    it('loads the game from the data store', () => {
        const dataStoreSpy = {
            loadCalled: 0,
            load: function () {
                this.loadCalled++
            }
        }
        const persistence = gamePersistence(dataStoreSpy)

        persistence.loadGame()

        expect(dataStoreSpy.loadCalled).to.equal(1)
    })

    it('returns the data loaded from the data store', () => {
        const dataStoreSpy = {
            load: () => 'TEST'
        }
        const persistence = gamePersistence(dataStoreSpy)

        expect(persistence.loadGame()).to.equal('TEST')
    })
})