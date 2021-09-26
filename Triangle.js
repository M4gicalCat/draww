import Shape from "./Shape.js";

export default class Triangle extends Shape{
    /**
     * Creates a Triangle
     * @param x : number
     * @param y : number
     * @param color : string
     * @param width : number
     * @param height : number
     */
    constructor(x, y, color, width, height) {
        super(x, y, color, width, height);

        this.div.style.width= "0";
        this.div.style.height = "0";
        this.div.style.borderLeft= width/2+"px solid transparent";
        this.div.style.borderRight = width/2+"px solid transparent";
        this.div.style.borderBottom = height+"px solid "+color;
        this.div.style.background = "transparent";
    }

    /**
     * @param value : string
     */
    set color(value){
        this._color = value;
        this.div.style.borderBottomColor = value;
    }

    /**
     * @return {string}
     */
    get classname(){
        return "Triangle"
    }
}