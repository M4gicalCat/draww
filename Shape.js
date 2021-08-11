export class Shape
{
    constructor(/*number*/x, /*number*/y, /*string*/color, /*number*/width, /*number*/height)
    {
        let div = document.createElement("div");

        this._x = x;
        this._y = y;
        this._color = color;
        this._border = color;
        this._border_width = 1
        this._border_style = "solid";
        this._width = width;
        this._height = height;
        this._canvas = "";
        this._div = div;
        this._rotation = 0;
        this._glow = false;
        this._moveX = function (){this.x = this.x};
        this._moveY = function (){this.y = this.y};
        this._move = true;
        this._visible = true;
        this._accelerationY = 0;
        this._accelerationX = 0;
        this._text = "";
        this._text_color = "black";

        div.style.position = "absolute";
        div.style.left = "+"+x+"px";
        div.style.top = "+"+y+"px";
        div.style.background = color;
        div.style.borderColor = color;
        div.style.width =  width+"px";
        div.style.height = height+"px";
    }

    get canvas(){
        return this._canvas;
    }

    get div() {
        return this._div;
    }

    get x() {
        return this._x;
    }

    /**
     * @param value : number
     */
    set x(value) {
        if(isNaN(value))
            return
        value = Math.round(value)
        this._x = value;
        this.div.style.left = (value >= 0 ?"+":"-")+value+"px";
    }

    get y() {
        return this._y;
    }

    /**
     * @param value : number
     */
    set y(value) {
        if(isNaN(value))
            return
        value = Math.round(value)
        this._y = value;
        this.div.style.top = (value >= 0 ?"+":"-")+value+"px";
    }

    get color() {
        return this._color;
    }

    /**
     * @param value : string
     */
    set color(value) {
        this._color = value;
        this.div.style.background = value;
    }

    get width() {
        return this._width;
    }

    /**
     * @param value : number
     */
    set width(value) {
        this._width = value;
        this.div.style.width = value+"px";
        return this;
    }

    get height() {
        return this._height;
    }

    /**
     * @param value : number
     */
    set height(value) {
        if(isNaN(value))
            return
        this._height = value;
        this.div.style.height = value+"px";
        return this;
    }

    get border(){
        return this._border;
    }

    /**
     * changes the color of the border
     * @param value : string
     */
    set border(value){
        this._border = value;
        this.div.style.borderColor = value;
    }
    get rotation(){
        return this._rotation;
    }

    /**
     * Rotates the current Shape of the given number (in degrees)
     * @param value : number
     */
    rotate(value){
        if(isNaN(value))
            return
        this._rotation = value;
        this.div.style.transform = "rotate("+value+"deg)";
    }

    /**
     * @param value : boolean
     */
    set glow(value){
        this._glow = value;
    }
    get glow(){
        return this._glow
    }

    /**
     * The function that makes the current Shape move every frame of its Canvas. (ex: this.x = this.x\*\*2 + (this.x\*\*2)\*this.accelerationX )
     * @param f : function
     */
    set moveX(f){
        this._moveX = f;
    }
    /**
     * The function that makes the current Shape move every frame of its Canvas. (ex: this.y = this.y\*\*2 + (this.y\*\*2)\*this.accelerationY)
     * @param f : function
     */
    set moveY(f){
        this._moveY = f;
    }

    get moveX(){
        return this._moveX;
    }
    get moveY(){
        return this._moveY;
    }

    /**
     * @param value : boolean
     */
    set visible(value){
        if(value){
            this.div.style.display = "inline"
        }
        else{
            this.div.style.display = "none"
        }
    }

    /**
     * @param value : number
     */
    set border_width(value){
        if(isNaN(value))
            return
        this._border_width = Math.round(value)
        this.div.style.borderWidth = Math.round(value)+"px"
    }
    get border_width(){
        return this._border_width
    }

    /**
     * changes the style of the border (css styles only)
     * @param value : string
     */
    set border_style(value){
        this._border_style = value;
        this.div.style.borderStyle = value;
    }
    get border_style(){
        return this._border_style
    }
    get move(){
        return this._move;
    }

    /**
     * @param value : boolean
     */
    set move(value){
        this._move = value;
    }
    get accelerationY(){
        return this._accelerationY;
    }

    /**
     * @param value : number
     */
    set accelerationY(value){
        if(isNaN(value))
            return
        this._accelerationY = value;
    }
    get accelerationX(){
        return this._accelerationX;
    }

    /**
     * @param value : number
     */
    set accelerationX(value){
        if(isNaN(value))
            return
        this._accelerationX = value;
    }

    get text(){
        return this._text;
    }

    /**
     * @param value : string
     */
    set text(value){
        this._text = value;
        this._div.innerText = value;
    }

    get text_color(){
        return this._text_color;
    }

    /**
     * Changes the color of the text inside the current Shape. If you want to use hex, dont forget the `#`
     * @param value : string
     */
    set text_color(value){
        this._text_color = value;
        this.div.style.color = value;
    }


    /**
     * Returns true if the current Shape touches the given Shape
     * @param shape : Shape|Shape[]
     * @param tolerance : number
     * The tolerance you want. Positive number means it will less detect collision, Negative number means it will more detect collision
     * @return boolean
     */
    touch(shape, tolerance =0){
        if(this === shape)
            return true;
        if (shape instanceof Shape)
            shape = [shape]
        if (shape instanceof Array)
        {
            for (let i = 0; i < shape.length; i++)
            {
                let el1 = this.div
                let el2 = shape[i].div
                let bodyRect = document.body.getBoundingClientRect(),
                    el1Rect = el1.getBoundingClientRect(),
                    el2Rect = el2.getBoundingClientRect()
                el1Rect.y  = el1Rect.top - bodyRect.top;
                el2Rect.y  = el2Rect.top - bodyRect.top;
                el1Rect.x = el1Rect.left - bodyRect.left;
                el2Rect.x = el2Rect.left - bodyRect.left;

                /*If the shape is rect-shaped*/
                if (!shape[i] instanceof Circle && !shape[i] instanceof Ellipse && !shape[i] instanceof Triangle) {

                    el1Rect.width = this.width
                    el1Rect.height = this.height
                    el1Rect.x += tolerance/2
                    el1Rect.width -= tolerance
                    el1Rect.y += tolerance/2
                    el1Rect.height -= tolerance
                    if (
                        !((el1Rect.x < el2Rect.x + el2Rect.width) &&
                            (el1Rect.x + el1Rect.width > el2Rect.x) &&
                            (el1Rect.y < el2Rect.y + el2Rect.height) &&
                            (el1Rect.y + el1Rect.height > el2Rect.y))
                    ) {
                        return true
                    }
                }
                else if (shape[i] instanceof Circle){
                    /*More info : https://stackoverflow.com/a/402010/16571292*/

                    /*need the distance between the two respective centers of the Shapes*/
                    let circle_distance_x = (el2Rect.x + (el2Rect.width/2) + this.border_width) - (el1Rect.x + (el1Rect.width/2) + shape[i].border_width)
                    let circle_distance_y = (el2Rect.y + (el2Rect.height/2) + this.border_width) - (el1Rect.y + (el1Rect.height/2) + shape[i].border_width)

                    /*make the result positive if negative*/
                    circle_distance_x *= (circle_distance_x < 0 ? -1 : 1)
                    circle_distance_y *= (circle_distance_y < 0 ? -1 : 1)
                    circle_distance_x += tolerance
                    circle_distance_y += tolerance

                    /*if the circle is too far away*/
                    if (circle_distance_x > (el1Rect.width/2 + el2Rect.width/2)) { return false; }
                    if (circle_distance_y > (el1Rect.height/2 + el2Rect.width/2)) { return false; }

                    /*if the circle is close enough*/
                    console.log(circle_distance_x, circle_distance_y)
                    if (circle_distance_x <= (el1Rect.width/2)) { return true; }
                    if (circle_distance_y <= (el1Rect.height/2)) { return true; }

                    /*calculates for the corner of the rectangle*/
                    let cornerDistance_sq = (circle_distance_x - el1Rect.width/2)**2 +
                        (circle_distance_y - el1Rect.height/2)**2;
                    console.log(cornerDistance_sq)
                    return (cornerDistance_sq <= ((el2Rect.width/2)**2));
                }

            }
            return false;
        }
    }

    //TODO: touch_edge()
}