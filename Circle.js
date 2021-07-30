class Circle extends Ellipse{
    constructor(x, y, color, width) {
        super(x, y, color, width, width);
        this.div.style.borderRadius = "50%";
    }

    /**
     * @param value : number
     */
    set width(value)
    {
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
    }
    /**
     * @param value : number
     */
    set height(value)
    {
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
    }
}