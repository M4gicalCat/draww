import {Rect} from "./Rect.js";

export class Square extends Rect{
    /**
     * Creates a Square
     * @param x : number
     * @param y : number
     * @param color : string
     * @param width : number
     */
    constructor(x, y, color, width) {
        super(x, y, color, width, width);
    }

    /**
     * @param value : number
     */
    set width(value){
        if(isNaN(value))
            return
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
    }

    /**
     * @param value : number
     */
    set height(value){
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
        return this._width;
    }

    /**
     * @return {string}
     */
    get classname(){
        return "Square"
    }

}