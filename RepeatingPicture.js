import {Shape} from "./Shape.js"

export default class RepeatingPicture extends Shape{
    /**
     * Creates an image that repeats itself in the desired direction : x or y
     * @param x : number
     * The x position of the current RepeatingPicture
     * @param y : number
     * The y position of the current RepeatingPicture
     * @param url : String
     * The url of the picture to display
     * @param width : number
     * The width of the current RepeatingPicture
     * @param height : number
     * The height of the current RepeatingPicture
     * @param axis : String
     * The axis of propagation of the picture ("x" or "y"). default means the picture will repeat in both directions
     */
    constructor(x, y, url, width, height, axis = "") {
        super(x, y, "transparent", width, height);
        this._url = url;
        this._axis = axis;

        this.div.style.backgroundImage = "url('"+url+"')";
        this.div.style.backgroundRepeat = "repeat" +(axis === "" ? "" : "-" + axis.toLowerCase());
        this.div.style.backgroundSize = "contain"
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    get url() {
        return this._url;
    }

    set url(value) {
        this._url = value;
        this.div.style.backgroundImage = "url('"+value+"')";

    }
    get axis() {
        return this._axis;
    }

    /**
     * changes the axis of propagation of the image
     * @param value : "x"|"y"
     */
    set axis(value) {
        this._axis = value;
        this.div.style.backgroundRepeat = "repeat-"+value.toLowerCase();
    }


    get classname(){
        return "RepeatingPicture"
    }
}
