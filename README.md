Hi ;-)

To create a shape you just have to type :
```js
let square = new Square(x, y, color, width, height);
```
then, add it to a canvas :

```js
let canvas = new Canvas(width, height);
canvas.appendShape(square);
```
All done! you have your square on the page!

You can generate gravity:
```js
canvas.gravity = 0.5 //that's a lot
```
the canvas animates all alone :
```js
canvas.animated = true;
```
You can also add an acceleration X or Y to any Shape :
```js
square.accelerationX = 0.05;
```
Don't forget to **always** use the getters / setters to be sure that the shapes changes as intended.

Have fun !