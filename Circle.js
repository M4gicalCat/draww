class Circle extends Ellipse{
    constructor(x, y, color, width) {
        super(x, y, color, width, width);
        this.div.style.borderRadius = "50%";
    }

    set width(value)
    {
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
    }
    set height(value)
    {
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
    }
}