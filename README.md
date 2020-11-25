# Ping Pong Game
Design a ping-pong game with a given template.

## Template
Template has 2 functions onInit and onUpdate. Please design your ping-pong game with only those two functions. Do not modify app.js.

Put your initalizing functions in onInit function, like key down and up bindings or players and ball.

You can use ```this.nodes.push(nodeProperties)``` to add nodes to canvas.
You can also use ```this.getNode()``` to get node properties.

You can find examples in index.html file in public folder.

Please start server with ```node index.js```.

After finishing your work, please send pull request for review.

## Todo
- Make the game cover the whole browser
- Add keyboard functionalities for both players, W and S for one player, Up and Down for another player.
- Add players into canvas, make sure we can move players with keyboard.
- Add ball to the game, pressing ```SPACE``` button should start and pause game, make sure ball bounces from boundries.
- When player scores, show scoring with console.log. And reset game.

## Bonus Todo
- Add draw text functionality to the engine. You can modify app.js for that part.
- Add score system for the game and use this drawText functionality on game.
- Add resize function the engine. With window.resize
- Make the ball round

## Notes
- Make sure game has state functions like reset, start and pause. We should be able to trigger them with ```app.reset()``` or ```app.pause()```.
- Make sure players or ball uses app.width and app.height values dynamicly, hard coded values will be rejected.
- Make sure you have a base PR and break up the code into meaningful smaller PRs: https://medium.com/@hugooodias/the-anatomy-of-a-perfect-pull-request-567382bb6067

## Common Coding Mistakes
- Avoid using while loop.
- Long PR, an ideal PR size is between 5-10 commits.
- Use early breaks instead of if/else.
- Break down your commits into the smallest commit that represents a cohesive feature that is in a build-able state.