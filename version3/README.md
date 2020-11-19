# Version 3

In this version we decided to add support for saving and loading games.
Thanks to the way we separated out the game state and provided a constructor
it's pretty trivial to save the current game state and restore to it later.

We learned our lessons from version 2 and put the code to do this in a separate
module so it's not completely coupled to the view code. It's in gamePersistence.js

The current (very naive) implementation is just in-memory so refreshing the
page will blow it away, and there's only a single save point. 

Once again, the question is how do we make this feature testable? Particularly
once we move past the simple in-memory storage to something like LocalStore in
the browser or an api call to a remote server. We don't want those mechanics
interfering in our unit tests. Having the gamePersistence in another module
decouples it from the other parts of the application, but we'll need to extend
it a bit further to make it support other storage options and be testable.

## Questions

   * What would happen if we just went in and changed the code in the gamePersistence
     module to use LocalStorage? What would be the pros and cons of just doing that?
   * How would you unit test the persistence module if it were directly changed to
     use LocalStorage or a fetch call to an api?
