class Canvas{
    /**
     * @param width : number
     * @param height : number
     */
    constructor(width,height)
    {
        let div = document.createElement("div");
        let nb = 0;
        while(document.getElementById("canvas_"+nb) !== null) {nb++;}

        this._div = div;
        this._id = div.id;
        this._width = width;
        this._height = height;
        this._color = "";
        this._shapes = [];
        this._animated = false;
        this._anim = 0;
        this._interval = 40;
        this._fps = 25
        this._frame = 0
        this._gravity = 0;
        this._function_to_animate = function (){}


        div.style.position="relative";
        div.style.width = width+"px";
        div.style.height = height+"px";
        div.id = "canvas_"+nb;
        document.body.appendChild(div);
    }

    get width() {
        return this._width;
    }
    /**
     * @param value : number
     */
    set width(value) {
        if(isNaN(value))
            return
        this._width = value;
        this._div.style.width = value + "px";
    }
    get height() {
        return this._height;
    }
    /**
     * @param value : number
     */
    set height(value) {
        if (isNaN(value))
            return
        this._height = value;
        this._div.style.height = value + "px";
    }
    get id() {
        return this._id;
    }

    /**
     * @param value : string
     */
    set color(value) {
        this._color = value;
        this._div.style.backgroundColor = value.toString();
    }
    get shapes(){
        return this._shapes;
    }

    /**
     * @param value : boolean
     */
    set animated(value){
        this._animated = value;
        let that = this;
        if (value){
            that._anim = setInterval(function (){
                for (let i = 0; i < that.shapes.length; i++){
                    if (that.shapes[i].move){
                        that.shapes[i]._moveX();
                        that.shapes[i]._moveY();
                        that.shapes[i].accelerationY += that.gravity;
                    }
                }
                that.function_to_animate()
                that._frame += 1;
            }, this._interval);
        }
        else{
            clearInterval(that._anim)
        }
    }
    get animated(){
        return this._animated;
    }

    /**
     * Makes the shape appear on the screen, in the current Canvas.
     * @param shape : Shape
     */
    appendShape(shape) {
        this._shapes.push(shape);
        shape._canvas = this;
        this._div.appendChild(shape.div);
    }
    get fps(){
        return this._fps;
    }

    /**
     * @param value : number
     */
    set fps(value){
        if (isNaN(value) || value < 0 || value > 1000)
            return
        if (value === 0)
        {
            this.animated = false
            return
        }
        this._fps = value
        this._interval = Math.round(1000/value)
        this.animated = false
        this.animated = true

    }
    get frame(){
        return this._frame;
    }
    get gravity(){
        return this._gravity;
    }

    /**
     * Generates gravity towards the bottom of the current Canvas. Works only if this.animated is true.
     * @param value : number
     */
    set gravity(value){
        if(isNaN(value))
            return
        this._gravity = value;
    }
    get function_to_animate(){
        return this._function_to_animate;
    }

    /**
     * @param value : function
     */
    set function_to_animate(value){
        this._function_to_animate = value;
    }
}
