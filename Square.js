class Square extends Rect{
    constructor(x, y, color, width) {
        super(x, y, color, width, width);
    }

    /**
     * @param value : number
     */
    set width(value){
        if(isNaN(value))
            return
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
    }

    /**
     * @param value : number
     */
    set height(value){
        if(isNaN(value))
            return
        this._width = value;
        this._height = value;
        this.div.style.width = value+"px";
        this.div.style.height = value+"px";
    }

    get height(){
        return this._height;
    }

    get width(){
        return this._width;
    }

}