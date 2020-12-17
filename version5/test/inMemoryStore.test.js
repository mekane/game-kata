import chai from 'chai';
import {InMemoryDataStore} from '../dataStore/inMemoryStore.js';

const expect = chai.expect;

describe('The In-Memory DataStore Implementation', () => {
    it('Is initialized with no arguments', () => {
        const instance = InMemoryDataStore()
        expect(instance).to.be.an('object');
        expect(instance.save).to.be.a('function');
        expect(instance.load).to.be.a('function');
    });

    it('returns undefined for values not in the store', () => {
        const store = InMemoryDataStore()
        expect(store.load('test')).to.be.an('undefined')
    })

    it('Saves a value to the store and retrieves it by id property', () => {
        const testObject = {
            id: 'test'
        }
        const store = InMemoryDataStore()
        store.save(testObject)
        expect(store.load('test')).to.equal(testObject)
    })

    it('Overwrites data with the same id', () => {
        const testObject = {
            id: 'test'
        }
        const testObject2 = {
            id: 'test'
        }
        const store = InMemoryDataStore()
        store.save(testObject)
        store.save(testObject2)
        expect(store.load('test')).to.equal(testObject2)
    })

    //TODO: specify behavior if saved data has no id property
})