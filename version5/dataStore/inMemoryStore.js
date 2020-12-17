export function InMemoryDataStore() {

    let memoryStore = {};

    function save(data) {
        memoryStore[data.id] = data;
    }

    function load(id) {
        return memoryStore[id];
    }

    return {
        save,
        load
    }
}