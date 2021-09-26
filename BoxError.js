import {Popup} from "./Popup.js";

export class BoxError extends Popup{

    /**
     * Displays a popup to show an error
     * @param message : string
     * the error message to be displayed
     * @param title : string
     * the title of the box
     * @param width : number
     * the width of the box
     * @param height : number
     * the height of the box
     */
    constructor(message, title,  width, height) {
        super(width, height, title, message, "red");
    }

    /**
     * @augments Popup
     * @return {string}
     */
    get classname(){
        return "BoxError"
    }
}