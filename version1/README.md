# Version 1

In this version of the code we have removed the hard-coded view elements
and moved all app state into a few variables (`map` and `player`).
Now the view is constructed based on the game state, and the move function
only queries the game state, not the view. So we have removed the game logic's
dependency on the view and made this dependency point in one direction only.

It may not be obvious yet, but there are two kinds of functions emerging:
those that modify game state and those that update the view. We want to clearly
separate these two kinds of functions so we can separate these responsibilities.
We called this separation "decoupling" and it is one of the most important
things that good software architecture helps us do.

Another improvement we made was to encapsulate the translation of coordinates 
to view index in a function. So now the app state and move function use 
familiar 2d coordinates, and those are translated for the view code. 

## Questions

   * What else is (still) wrong with the code in this version? 
   * What is confusing or unclear? How could these parts be improved?
   * Is this code testable yet? Why not?
   * If you were to make the board larger would this be easy now? Why?
   * Have we done anything to prevent the user from changing the game state 
     using the web inspector?
   * Over time as more features, tile types and player state get added, how will
     this code change? Will its evolution tend to be better or worse than the
     previous version?


## Discussion

Does the notion of the dependency between the view and the app state only going
one direction make sense to you? Is it clear why this is better than the previous
version?
