# Colonist Test Game
Implement a ping pong game according to the template.

## Template
Template has `onInit` and `onUpdate`. Please design your ping-pong game with only those two functions. Do not modify app.js.

Put your initializing functions in `onInit`, like key down and up bindings or players and ball.

You can use ```this.nodes.push(nodeProperties)``` to add nodes to canvas.
You can also use ```this.getNode()``` to get node properties.

You can find examples in index.html file in public folder.

Please start server with ```node index.js```.

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

## Before Starting
- Download the code.
- Initialize git repo.
- Commit the current project as first commit.
- Upload it to a private repository on github.
- Create a new branch and work on that branch.

## After Finishing
- On github create a PR merging from your branch to your master branch.
- Add a very good description on what it is, make sure to include video showcasing.
- Invite collaborators demiculus & goktugyil to the repo.
- Request reviews for the PR from demiculus & goktugyil.

## Common Coding Mistakes
- Avoid using while loop.
- Break down your commits into the smallest commit that represents a cohesive feature that is in a build-able state.
