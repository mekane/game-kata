# Version 2

In this version of the code we have not really touched the game logic or view
code, just reorganized them. So the code itself is virtually the same, but
some of it now lives in a separate file. Any code related to keeping track of
the state of the game was put into gameState and then some parts were exported,
and the view code stayed in the script tag in the html document.

So now the state and the view are nicely separated and we've actually enforced
the direction of the dependency. The view imports the state, so the view knows
about the state but not the reverse. The state does not depend on the view. This
separation is key to good software design and will really help the long-term
quality of the application.

We didn't have to change much code for this separation to happen because we
separated them conceptually in the previous version. But now we can see how
just making the small organizational change of putting the state code in a
separate file will have a big impact.

First, we've defined an API and hidden away the details of the API. The API
is the functions that are exported from the gameState module. We can now
change details inside the gameState module and as long as the API doesn't
change we don't have to worry about breaking the view. So we have separation
of concerns and responsibilities.

Second, it is now testable. Since the state code is separated from the view,
we can import it into a test file (just like the view does) and verify that
we get the correct results. Adding good test coverage will allow us to make
the internal changes described in the previous paragraph and know that we
didn't break anything.

Third, the separation would allow us to change one side or the other if we
wanted to. For example if we wanted to use the same game state logic but
have a different view we could do that. The API that the view and the state
now share is a loosely-defined interface or contract. A new module just has
to conform to the same interface and agree to the contract and it will be
compatible in the system. This gives us a lot of freedom and power to replace
or further separate these parts than we had before.

The exercises listed in the main README should now all be pretty easy to add,
and completely testable using the included test file as a starting point. You
may want to start by adding a few tests for the existing move feature to squash
any bugs that currently exist.

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