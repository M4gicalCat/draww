export default class Shape
{
    /**
     * Creates a basic Shape
     * @param x : number
     * x position (relative to canvas or Group in which the Shape is)
     * @param y : number
     * y position (relative to canvas or Group in which the Shape is)
     * @param color : string
     * the name of the color, or an hex value with `#` (ex : "red" or "#FF0000")
     * @param width : number
     * @param height : number
     */
    constructor(x, y, color, width, height)
    {
        let div = document.createElement("div");

        this._x = x;
        this._y = y;
        this._color = color;
        this._border = color;
        this._border_width = 0
        this._border_style = "none";
        this._width = width;
        this._height = height;
        this._canvas = "";
        this._div = div;
        this._rotation = 0;
        this._shadow = {
            width : 0,
            height : 0,
            blur : 0,
            spread : 0,
            color : "#000000"
        };
        this._moveX = function (){};
        this._moveY = function (){};
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
     * @param s : Object
     * creates a shadow around the Shape
     * @example
     *{
     *     width : number,
     *     height : number,
     *     blur : number,
     *     spread : number,
     *     color : string
     *}
     *
     */
    set shadow(s){
        this._shadow = s;
        this.div.style.boxShadow = `${s.width}px ${s.height}px ${s.blur}px ${s.spread}px ${s.color}`;
    }

    /**
     * @returns {{color: string, width: number, blur: number, height: number, spread: number}}
     */
    get shadow(){
        return this._shadow
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

    /**
     * @returns {function}
     */
    get moveX(){
        return this._moveX;
    }

    /**
     * @returns {function}
     */
    get moveY(){
        return this._moveY;
    }

    /**
     * @param value : boolean
     */
    set visible(value){
        this._visible = value;
        if(value){
            this.div.style.display = "inline"
        }
        else{
            this.div.style.display = "none"
        }
    }

    /**
     * @return {boolean}
     */
    get visible(){
        return this._visible;
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
    /**
     * @returns {number}
     */
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

    /**
     * @return {string}
     */
    get border_style(){
        return this._border_style
    }

    /**
     * @return {boolean}
     */
    get move(){
        return this._move;
    }

    /**
     * @param value : boolean
     */
    set move(value){
        this._move = value;
    }

    /**
     * @returns {number}
     */
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

    /**
     * @returns {number}
     */
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

    /**
     * @return {string}
     */
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

    /**
     * @return {string}
     */
    get text_color(){
        return this._text_color;
    }

    /**
     * Changes the color of the text inside the current Shape. Format : color's name or #hex_code (like #55FF89)
     * @param value : string
     */
    set text_color(value){
        this._text_color = value;
        this.div.style.color = value;
    }

    /**
     * @return {string}
     */
    get classname(){
        return "Shape";
    }

    /**
     * Returns true if the current Shape touches the given Shape
     * @param shape : Shape|Shape[]
     * @param tolerance : number
     * The tolerance you want. Positive number means it will less detect collision, Negative number means it will more detect collision
     * @return [boolean, Shape?]
     * Returns true if the current Shape touches the given Shape, and the position of the given Shapes : "right", "down", "left", "up"; ex: [true, "up"]
     */
    touch(shape, tolerance =0){
        if(this === shape)
            return [true, this];
        if (shape instanceof Shape)
            shape = [shape]
        let touched_shapes = [false]
        if (shape instanceof Array)
        {
            for (let i = 0; i < shape.length; i++)
            {

                /*If the shape is rect-shaped*/
                if (!(shape[i].classname === "Circle")/* && !(shape[i].classname === "Ellipse") && !(shape[i].classname === "Triangle")*/) {
                    let s = shape[i]
                    if (
                        s.x <= (this.x + this.width + tolerance) &&
                        s.x + s.width >= (this.x - tolerance) &&
                        s.y <= (this.y + this.height + tolerance) &&
                        s.y + s.height >= (this.y - tolerance)
                    ) {
                        touched_shapes.push(shape[i])
                    }
                }

                else if (shape[i].classname === "Circle"){
                    /*More info : https://stackoverflow.com/a/402010/16571292*/
                    let s = shape[i]
                    /*need the distance between the two respective centers of the Shapes*/
                    let tw = this.width/2,
                        th = this.height/2,
                        sw = s.width/2,
                        sh = s.height/2
                    let circle_distance_x = this.x + tw - s.x - sw
                    let circle_distance_y = this.y + th - s.y - sh

                    /*make the result positive if negative*/
                    circle_distance_x *= (circle_distance_x < 0 ? -1 : 1)
                    circle_distance_y *= (circle_distance_y < 0 ? -1 : 1)

                    circle_distance_x += tolerance
                    circle_distance_y += tolerance

                    /*if the circle is too far away*/
                    if (circle_distance_x > (tw + sw))  continue
                    if (circle_distance_y > (th + sh)) continue

                    /*if the circle is close enough*/
                    if (circle_distance_x <= (tw)) { touched_shapes.push(s);  continue }
                    if (circle_distance_y <= (th)) { touched_shapes.push(s); continue }

                    /*calculates for the corner of the rectangle*/
                    let cornerDistance_sq = (circle_distance_x - tw)**2 +
                        (circle_distance_y - th)**2;
                    if(cornerDistance_sq <= (sw * sw))
                    {
                        touched_shapes.push(shape[i])
                    }
                }
                /*else if (shape[i].classname === "Triangle"){

                }
                else if (shape[i].classname === "Ellipse"){

                }*/

            }
            touched_shapes[0] = touched_shapes.length > 1
            return touched_shapes;
        }
    }
}