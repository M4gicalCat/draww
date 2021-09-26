import {Shape} from "./Shape.js";

export class Ellipse extends Shape{
    constructor(x, y, color, width, height) {
        super(x, y, color, width, height);
        this.div.style.borderRadius = "50%";
    }

    /**
     * @return {string}
     */
    get classname(){
        return "Ellipse"
    }
}