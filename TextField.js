import Shape from "./Shape.js";

export default class TextField extends Shape{
    /**
     * Creates a text input.
     * @param x : number
     * @param y : number
     * @param color : string
     * @param width : number
     * @param height : number
     */
    constructor(x, y, color, width, height) {
        super(x, y, color, width, height);
        this._div = document.createElement("input");
        this._div.style.position = "absolute"
        this.x = x
        this.y = y
        this.color = color
        this.width = width
        this.height = height
    }

    /**
     * @return {string}
     */
    get classname(){
        return "TextField"
    }
}