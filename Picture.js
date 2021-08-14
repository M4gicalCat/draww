import {Shape} from "./Shape.js";

export default class Picture extends Shape{
    constructor(x, y, width, height, link) {
        super(x, y, "", width, height);
        this._image = document.createElement("img");
        this._image.src = link;
        this._link = link;
        this._image.width = width;
        this._image.height = height;
        this.div.appendChild(this._image);
    }

    get image(){
        return this._image;
    }
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
    get width(){
        return this._width;
    }
    get height(){
        return this._height;
    }

    get classname(){
        return "Picture"
    }

}