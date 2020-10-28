# Version 0

This version is all inline in a single HTML file. The view and the app state 
are intertwined and user input events directly modify the view.

You are welcome to complete the enhancements found in the main README, especially
if you want general practice with interactive web programming.

However, this version exists mainly as a starting point to illustrate bad design
and lack of any software architecture. The real exercise here is to notice what is
wrong with the code in version 0.

Read the code and then answer the following questions:

## Questions

   * What is wrong with the code in this version? 
   * What is confusing or unclear? How could these parts be improved?
   * How could we test this code / make it testable?
   * If you were to make the board larger would this be easy or hard? Why?
   * How would we prevent the user from changing the game state using the web
     inspector?
   * Over time as more features, tile types and player state get added, how will
     this code change? What could we do to help keep it from getting super messy
     and confusing?


## Discussion
Possible answers to the question of what is wrong with the code include:
   * Game state is not cleanly represented and tracked - it is embedded in the view.
   * There is no single source of authority on the game state, there is a mix of variables 
     and state tracked in the markup. (i.e. the `move` function should not query the view
     to find the current position of the player)
   * The game logic depends on the view. Both for state and in terms of how it is represented.
     Notice that the grid 