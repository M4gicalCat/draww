import {Shape} from "./Shape.js";

export class Rect extends Shape{
    /**
     * Creates a rectangle
     * @param x : number
     * @param y : number
     * @param color : string
     * @param width : number
     * @param height : number
     */
    constructor(x, y, color, width, height) {
        super(x, y, color, width, height);
    }

    /**
     * @returns {string}
     */
    get classname(){
        return "Rect"
    }
}