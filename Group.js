import {Shape} from "./Shape.js";
import {Square} from "./Square.js";

export class Group extends Shape{
    /**
     * Creates a group of objects. Move this group to move all objects around, rotate this group and all objects will rotate around it, keeping the global look
     * @param x : number
     * @param y : number
     */
    constructor(x, y) {
        super(x, y, "transparent", 0, 0);
        this._shapes = [];
        this._x = x;
        this._y = y;
    }

    /**
     * includes the given Shape in the current Group
     * @param shape : Shape
     */
    appendShape(shape){
        this._shapes.push(shape);
        if (this.canvas.classname === "Canvas"){
            this.canvas.appendShape(shape)
        }
        this.div.appendChild(shape.div)
    }

    /**
     * include all the given Shapes in the current Group
     * @param shapes : [Shape]
     */
    appendShapes(shapes){
        for (let i = 0; i < shapes.length; i++){
            this.appendShape(shapes[i])
        }
    }

    /**
     * @return {Shape[]}
     */
    get shapes(){
        return this._shapes;
    }

    /**
     * @param value : string
     */
    set color(value){
        for (let s = 0; s < this._shapes.length; s++){
            this._shapes[s].color = value;
        }
    }

    /**
     * Returns an array of all the current Group's Shapes colors
     * @return {string[]}
     */
    get color(){
        let colors = []
        for(let shape in this.shapes){
            if (!shape instanceof Shape || !shape.hasOwnProperty("color")){continue}
            if(!(shape.color in colors) && shape.color !== undefined){
                colors.push(shape.color);
            }
        }
        return colors
    }

    /**
     * Displays an `×` char to hide this Group.
     */
    add_close_x(){
        this._close = new Square(this.width - 20, 20, "transparent", 20);
        this._close.div.style.fontSize = "20px";
        this._close.div.innerText = "×";
        this._close.div.style.cursor = "pointer"
        this.appendShape(this._close);
        let that = this
        this._close.div.addEventListener('click', function (){
            that.visible = false;
        })
    }

    /**
     * @return {string}
     */
    get classname(){
        return "Group"
    }

    /**
     * @param shape : Shape|Shape[]
     * @param tolerance : number
     * @return {[boolean, Shape[]]}
     */
    touch(shape, tolerance= 0) {
        for (let i = 0; i < this.shapes.length; i++){
            let t = this.shapes[i].touch(shape, tolerance);
            if (t[0]){
                return t;
            }
        }
        return [false];
    }
}