import Shape from "./Shape.js"

export default class RepeatingPicture extends Shape{
    /**
     * Creates an image that repeats itself in the desired direction : x or y, or in all the available space
     * @param x : number
     * The x position of the current RepeatingPicture
     * @param y : number
     * The y position of the current RepeatingPicture
     * @param url : string
     * The url of the picture to display
     * @param width : number
     * The width of the current RepeatingPicture
     * @param height : number
     * The height of the current RepeatingPicture
     * @param axis : string
     * The axis of propagation of the picture ("x" or "y"). default means the picture will repeat in both directions
     */
    constructor(x, y, url, width, height, axis = "") {
        super(x, y, "transparent", width, height);
        this._url = url;
        this._axis = axis;

        this.div.style.backgroundImage = "url('"+url+"')";
        this.div.style.backgroundRepeat = "repeat" +(axis === "" ? "" : "-" + axis.toLowerCase());
        if (axis !== ""){
            this.div.style.backgroundSize = "contain"
        }
        this._x = x;
        this._y = y;
        this._width = width;
        this._height = height;
    }

    /**
     * @returns {string}
     */
    get url() {
        return this._url;
    }

    /**
     * @param value : string
     */
    set url(value) {
        this._url = value;
        this.div.style.backgroundImage = "url('"+value+"')";
    }

    /**
     * @returns {string}
     */
    get axis() {
        return this._axis;
    }

    /**
     * changes the axis of propagation of the image
     * @param value : string
     */
    set axis(value) {
        this._axis = value;
        this.div.style.backgroundRepeat = "repeat-"+value.toLowerCase();
    }

    /**
     * @returns {string}
     */
    get classname(){
        return "RepeatingPicture"
    }
}
