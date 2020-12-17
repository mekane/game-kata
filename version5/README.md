# Version 5

This version starts with everything from version 4 implemented, so we
have a gamePersistence module that can take different store implementations,
as well as spy tests to make sure it uses them correctly. We also added a unit
test for the InMemoryStore implementation.

So now we want to wire it all up and make the app in index.html actually use it!
We need to get an instance of the store implementation we want to use and pass it
to the gamePersistence module. So we should ask ourselves two questions:

   1. Where do we write the code to initialize and pass these instances?
   1. How do we test it?

The answer to where to write the code is in "Main", which is currently the script
hanging out in `index.html`. (We could put that code into its own module called `Main.js`
or something to make this clearer). Main is the place in your code where everything 
is initialized - its responsibility is to load the specific implementations you
want to use and provide them to the modules that need them. So it is allowed to 
have hard-coded references to these implementation modules.

The answer to how do we test this combination is a new kind of test: integration.
Whereas a unit test just calls methods on a single unit and verifies their results
an integration test combines multiple modules together and tests that the outer-most
module behaves correctly, which implicitly tests the whole chain. This can also involve
using an actual databases or network communication as long as they are fast and
reliable enough to be run with the tests. So local versions of these are usually best.

Because these integration tests are more complicated and probably slower than regular
unit tests it's a good idea to put them in their own space with a separate command
to run them. For version 5 there is a directory called `integration` that has a starting
point for the integration test.


   
Tasks:

   * Implement the integration test using the framework provided to make sure
     that the gameState module and InMemoryStore do their job all together.
   * Construct an instance of the DataStore, pass it to the game persistence
     module, and wire that up in Main (index.html) so the save / load feature 
     actually works!

Bonus:

   * Add another module in dataStore called localStorageStore and make it export
     the same interface (save/load) that internally uses the browser's LocalStore
     to save the game in the browser's memory. See how minor a change it is to
     use an instance of that data store rather than the in-memory store.
     (see https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage)
