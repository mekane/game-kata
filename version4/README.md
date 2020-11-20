# Version 4

This version extends the previous version in order to make the module
that saves and loads game testable. The basic building blocks are in
place but the code hasn't been wired up yet, so that you can practice
writing the tests.

Tasks:

   * Add tests for the gamePersistence module to make sure it correctly
     makes use of the data store it is given. (A spy is appropriate here)
   * Add tests for the inMemoryStore to make sure it works as expected
   * Construct an instance of the DataStore, pass it to the game persistence
     module, and wire that up in index.html so the save / load feature works.

Bonus:

   * Add another module in dataStore called localStorageStore and make it export
     the same interface (save/load) that internally uses the browser's LocalStore
     to save the game in the browser's memory. See how minor a change it is to
     use an instance of that data store rather than the in-memory store.
     (see https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)




## Questions

   * a helpful question to ask is: what is the code we want to write?
