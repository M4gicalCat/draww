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
canvas.gravity = 0.5
```
the canvas animates all alone :
```js
canvas.animated = true;
```
You can also add an acceleration X or Y to any Shape :
```js
square.accelerationX = 0.05;
```

then use the `shape.MoveX` function :
```js
function move(){
    this.x = this.x + this.x * this.accelerationX;
}
square.moveX = move;
```

You can create a group of Shapes by typing :
```js
let group = new Group(/* x */5, /*y*/ 5);

group.appendShape(square)
```
Add every shape you want to the group, it's easier to move them or rotate them : they keep the same look.

If you ever need to have a digital clock, then fear not ! The Digit object is there for you!

```js
let digit_1 = new Digit(5, 5, "black", 200, 400, 1); //width and height aren't working yet, I need to think
canvas.appendShape(digit_1);
```
and you have a beautiful 1 in digital.

Don't forget to **always** use the getters / setters to be sure that the shape changes as intended.

Have fun !


All shapes are : 
- Circle
- Ellipse
- Picture
- Rect
- Square
- Triangle
- Digit
- Group

All colors are css ones, you can change it with hexa, don't forget the `#` before !