class Shape
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

    /**
     * Returns true if the current Shape touches the given Shape
     * @param shape : Shape
     * @return boolean
     */
    touch(shape){
        if(this === shape)
            return true;

        return ((this.x + this.width) >= (shape.x) &&  (this.x) <= (shape.x + shape.width) && (this.y + this.height) >= (shape.y) && (this.y) <= (shape.y + shape.height))
    }
}