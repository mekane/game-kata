# Version 3

In this version we decided to add support for saving and loading games.
Thanks to the way we separated out the game state and provided a constructor
it's pretty trivial to save the current game state and restore to it later.

We learned our lessons from version 2 and put the code to do this in a separate
module so it's not completely coupled to the view code. It's in gamePersistence.js

The current (very naive) implementation is just in-memory so refreshing the
page will blow it away, and there's only a single save point. 

## Questions

Questions
   * What is an example of a new feature that you could add that would only
     require changing the view code? What's a feature that would only need
     changes in the gameState module? What's an example that would impact both?
   * What would need to happen if you wanted to use a non-rectangular board?
   * What if I wanted to have two different maps with different tile types?
   * What if I wanted to save and load games?
   * What if I wanted to have an ascii-art console version and a mobile app
     version that shared the same game view?

## Discussion

Does the notion of the dependency between the view and the app state only going
one direction make sense to you? Is it clear why this is better than the previous
version?

note: TDD would have basically forced us to write the module independently from the start