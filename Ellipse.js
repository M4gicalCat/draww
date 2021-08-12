import {default as Shape} from "./Shape";

export default class Ellipse extends Shape{
    constructor(x, y, color, width, height) {
        super(x, y, color, width, height);
        this.div.style.borderRadius = "50%";
    }
}