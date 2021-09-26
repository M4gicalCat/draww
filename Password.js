import TextField from "./TextField.js";

export class Password extends TextField{
    /**
     * displays a password input
     * @param x : number
     * @param y : number
     * @param color : string
     * @param width : number
     * @param height : number
     */
    constructor(x, y, color, width, height) {
        super(x, y, color, width, height);
        this.div.type = "password";
    }

    /**
     * @returns {string}
     */
    get classname(){
        return "Password"
    }
}