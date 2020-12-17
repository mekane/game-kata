# Version 4

This version extends the previous version in order to make the module
that saves and loads game testable. The basic building blocks are in
place but the code hasn't been wired up yet, so that you can practice
writing the tests.

Tasks:

   * Add tests for the gamePersistence module to make sure it correctly
     makes use of the data store it is given. (A spy is appropriate here)
   * Add tests for the inMemoryStore to make sure it works as expected

## Questions

   * Do you see why we're not directly testing the results of gamePersistence
     anymore, but rather wanting to know what it's doing internally?
   * How might we know whether we want to directly test a module results or
     spy on it? A helpful question to ask is what behavior are we wanting to
     test / ensure? Is this module doing work directly (business) or is it just
     coordinating other modules (plumbing)? Note that keeping these two kinds of
     modules separate and distinct will really make this easier to answer!

