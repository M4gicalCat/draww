class Canvas{
    constructor(/*int*/width, /*int*/height)
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
        this._interval = 100;
        this._frame = 0


        div.style.position="relative";
        div.style.width = width+"px";
        div.style.height = height+"px";
        div.id = "canvas_"+nb;
        document.body.appendChild(div);

    }

    get width() {
        return this._width;
    }

    set width(/*int*/value) {
        this._width = value;
        this._div.style.width = value + "px";
        return this;
    }
    get height() {
        return this._height;
    }
    set height(/*int*/value) {
        this._height = value;
        this._div.style.height = value + "px";
        return this;
    }
    get id() {
        return this._id;
    }
    set color(/*string*/value) {
        this._color = value;
        this._div.style.backgroundColor = value.toString();
    }
    get shapes(){
        return this._shapes;
    }
    set animated(value){
        this._animated = value;
        let that = this;
        console.log(that)
        if (value){
            that._anim = setInterval(function (){
                for (let i = 0; i < that.shapes.length; i++){
                    that.shapes[i]._moveX();
                    that.shapes[i]._moveY();
                }
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
    appendForme(/*Shape*/ shape) {
        console.log(this)
        this._shapes.push(shape);
        shape.canvas = this;
        this._div.appendChild(shape.div);
        console.log(this.shapes);
    }
    get frame(){
        return this._frame;
    }
}
