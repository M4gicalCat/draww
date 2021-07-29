class Square extends Rect{
    constructor(x, y, color, width) {
        super(x, y, color, width, width);
    }
    set width(value){
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
        return this;
    }
    set height(value){
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
        return this;
    }
}