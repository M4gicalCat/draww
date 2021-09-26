import {Group} from "./Group.js";
import Rect from "./Rect.js";

export class Popup extends Group{
    /**
     * Displays a popup on the middle of the screen
     * @param width : number
     * @param height : number
     * @param title : string
     * the title of the popup
     * @param text : string
     * the text displayed in the popup
     * @param color : string
     * the color of the border
     */
    constructor(width, height, title, text, color) {
        super(window.innerWidth / 2 - width/2 + window.pageXOffset, window.innerHeight/2 - height/2 + window.pageYOffset);
        this._title = title
        this._text = text
        this.color = color
        this._popup = new Rect(0, 0, 'white', width, height);
        this._popup.border = color
        this._popup.border_width = width/40;
        this._popup.border_style = "solid";
        this.appendShape(this._popup)
        this.width = width;
        this.height = height

        this._popup.border_style = "groove"
        this._popup.div.style.borderRadius = "20px"
        let div_title = document.createElement("h1")
        div_title.style.padding = width/10+"px"
        div_title.style.paddingTop = "5%"
        div_title.style.textAlign = "center"
        div_title.style.width = width;
        div_title.innerText = title;
        this._popup.div.appendChild(div_title);
        let div_text = document.createElement("div")
        div_text.style.padding = "0 " + (width/10) + " "+ (width/10) + " " + (width/10) +"px"
        div_text.style.width = width;
        div_text.style.textAlign = "center"
        this._popup.div.appendChild(div_text);
        div_text.innerText = text

        this.add_close_x()
    }

    /**
     * @returns {string}
     */
    get classname(){
        return "Popup"
    }
}