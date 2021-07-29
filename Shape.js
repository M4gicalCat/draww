class Shape
{
    constructor(/*int*/x, /*int*/y, /*string*/color, /*int*/width, /*int*/height)
    {
        let div = document.createElement("div");

        this._x = x;
        this._y = y;
        this._color = color;
        this._border = color;
        this._border_width = 0
        this._border_style = "solid";
        this._width = width;
        this._height = height;
        this._canvas = "";
        this._div = div;
        this._rotation = 0;
        this._glow = false;
        this._moveX = function (){};
        this._moveY = function (){};
        this._move = true;
        this._visible = true;

        div.style.position = "absolute";
        div.style.left = "+"+x+"px";
        div.style.top = "+"+y+"px";
        div.style.background = color;
        div.style.borderColor = color;
        div.style.width =  width+"px";
        div.style.height = height+"px";
    }

    set canvas(value)
    {
        this._canvas = value;
        return this;
    }
    get canvas(){
        return this._canvas;
    }

    get div()
    {
        return this._div;
    }

    get x() {
        return this._x;
    }

    set x(value) {
        value = Math.round(value)
        this._x = value;
        this.div.style.left = (value >= 0 ?"+":"-")+value+"px";
        return this;
    }

    get y() {
        return this._y;
    }

    set y(value) {
        value = Math.round(value)
        this._y = value;
        this.div.style.top = (value >= 0 ?"+":"-")+value+"px";
        return this;
    }

    get color() {
        return this._color;
    }

    set color(value) {
        this._color = value;
        this.div.style.background = value;
        return this;
    }

    get width() {
        return this._width;
    }

    set width(value) {
        this._width = value;
        this.div.style.width = value+"px";
        return this;
    }

    get height() {
        return this._height;
    }

    set height(value) {
        this._height = value;
        this.div.style.height = value+"px";
        return this;
    }

    get border(){
        return this._border;
    }
    set border(value){
        this._border = value;
        this.div.style.borderColor = value;
        return this;
    }
    get rotation(){
        return this._rotation;
    }
    rotate(value){
        this._rotation = value;
        this.div.style.transform = "rotate("+value+"deg)";
    }
    set glow(value){
        this._glow = value;
    }
    get glow(){
        return this._glow
    }
    set moveX(f){
        this._moveX = f;
    }
    set moveY(f){
        this._moveY = f;
    }
    get moveX(){
        return this._moveX;
    }
    get moveY(){
        return this._moveY;
    }
    set visible(value){
        if(value){
            this.div.style.display = "inline"
        }
        else{
            this.div.style.display = "none"
        }
    }
    set border_width(value){
        this._border_width = value
        this.div.style.borderWidth = value+"px"
    }
    get border_width(){
        return this._border_width
    }
    set border_style(value){
        this._border_style = value;
        this.div.style.borderStyle = value;
    }
    get border_style(){
        return this._border_style
    }
}