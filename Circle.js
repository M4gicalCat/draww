import Ellipse from "./Ellipse.js";

export default class Circle extends Ellipse{

    /**
     * Creates a circle
     * @param x : number
     * x position (relative to Canvas or Group in which the Circle is)
     * @param y : number
     * y position (relative to Canvas or Group in which the Circle is)
     * @param color : string
     * The color of the circle : the name of the color or the #hex_code
     * @param width : number
     * the width of the circle (and the height as well)
     */
    constructor(x, y, color, width) {
        super(x, y, color, width, width);
        this.div.style.borderRadius = "50%";
    }

    /**
     * @param value : number
     */
    set width(value)
    {
        if (isNaN(value))
            return
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
    }
    /**
     * @param value : number
     */
    set height(value)
    {
        if(isNaN(value))
            return
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
    }

    /**
     * @return {number}
     */
    get height(){
        return this._height;
    }

    /**
     * @return {number}
     */
    get width(){
        return this._width
    }

    /**
     * @return {string}
     */
    get classname(){
        return "Circle";
    }
}