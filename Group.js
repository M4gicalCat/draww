class Group extends Shape{
    /**
     * Creates a group of objects. Move this group to move all objects around, rotate this group and all objects will rotate around it, keeping the global look
     * @param x : number
     * @param y : number
     */
    constructor(x, y) {
        super(x, y, "transparent", 0, 0);
        this._shapes = [];
    }

    /**
     * includes the given Shape in the current Group
     * @param shape : Shape
     */
    appendShape(shape){
        this._shapes.push(shape);
        if (this.canvas !== ""){
            this.canvas.appendShape(shape)
        }
        this.div.appendChild(shape.div)
    }

    get shapes(){
        return this._shapes;
    }

    set color(value){
        for (let s = 0; s < this._shapes.length; s++){
            this._shapes[s].color = value;
        }
    }

    /**
     * Returns an array of all the current Group's Shapes colors
     * @return {*[]}
     */
    get color(){
        let colors = []
        for(let /*Shape*/shape in this._shapes){
            if (!shape instanceof Shape){continue}
            if(!shape.color in colors){
                colors.push(shape.color);
            }
        }
        return colors
    }

}