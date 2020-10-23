# Version 0

This version is all inline in a single HTML file. The view and the app state 
are intertwined and user input events directly modify the view.

## Kata / Exercise Tasks

   * Verify regular movement is bug free (can't move through walls, edge cases)
   * Increase the board size to 7 x 7
   * Add a monster or other content to a tile that also blocks movement
   * Add movement points to the player and subtract one each time they move.
     Prevent them from moving if they don't have any left.
   * Add a square type similar to walls that doesn't block movement but instead
     costs two move points. Prevent movement if they don't have at least 2 left.
   * Add the ability to toggle an effect on the player that lets them ignore the
     more costly square type while active.

   
   
## Questions

   * How can we test this code / make it testable?
   * What would need to happen if you wanted to use a non-rectangular board?
   * What if I wanted to have two different maps with different tile types?
   * What if I wanted to save and load games?
   * What if I wanted to have an ascii-art console version and a mobile app 
     version that shared the same game?
   * How would we prevent the user from changing the game state using the web
     inspector?
