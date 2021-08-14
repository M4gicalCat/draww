import {Shape} from "./Shape.js";

export default class Rect extends Shape{
    constructor(x, y, color, width, height) {
        super(x, y, color, width, height);
    }


    get classname(){
        return "Rect"
    }
}