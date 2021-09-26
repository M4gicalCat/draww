import {Shape} from "./Shape.js";

export class Picture extends Shape{
    /**
     * displays an image
     * @param x : number
     * @param y : number
     * @param width : number
     * @param height : number
     * @param link : string
     */
    constructor(x, y, width, height, link) {
        super(x, y, "", width, height);
        this._image = document.createElement("img");
        this._image.src = link;
        this._link = link;
        this._image.width = width;
        this._image.height = height;
        this.div.appendChild(this._image);
    }

    /**
     * @returns {HTMLImageElement}
     */
    get image(){
        return this._image;
    }

    /**
     * @returns {string}
     */
    get link(){
        return this._link;
    }

    /**
     * @param value : string
     */
    set link(value){
        this._link = value;
        this._image.src = value;
    }

    /**
     * @param value : number
     */
    set width(value){
        if(isNaN(value))
            return
        this._width = value;
        this._image.width = value
        this.div.style.width = value;
    }

    /**
     * @param value : number
     */
    set height(value){
        if(isNaN(value))
            return
        this._height = value;
        this._image.height = value
        this.div.style.height = value;
    }

    /**
     * @returns {number}
     */
    get width(){
        return this._width;
    }

    /**
     * @returns {number}
     */
    get height(){
        return this._height;
    }

    /**
     * @returns {string}
     */
    get classname(){
        return "Picture"
    }
}