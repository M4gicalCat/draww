import TextField from "./TextField.js";

export class Password extends TextField{
    constructor(x, y, color, width, height) {
        super(x, y, color, width, height);
        this.div.type = "password";
    }

    get classname(){
        return "Password"
    }
}