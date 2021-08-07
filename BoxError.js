class BoxError extends Group{
    constructor(message, width, height) {
        super(window.innerWidth/2 - width / 2, window.innerHeight/2 - height / 2);
        this._message = message;
        this._width = width;
        this._height = height;

        this._outer_box = new Rect(0, 0, "white", width, height);
        this.appendShape(this._outer_box);
        this._outer_box.border_width = 10;
        this._outer_box.border = "#DC143C"
        this._outer_box.border_style = "groove"
        this._outer_box.div.style.borderRadius = "20px"
        this._outer_box.div.style.textAlign = "center"
        this._outer_box.div.style.verticalAlign = "middle"
        this._outer_box.div.style.lineHeight = height + "px"
        this._outer_box._div.style.color = "red"
        this._outer_box.div.innerText = message;

        this.add_close_x();
    }
}