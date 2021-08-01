class Digit extends Shape{
    /**
     * @param x : number
     * the x position of the digit
     * @param y : number
     * the y position of the digit
     * @param color : string
     * the color of the digit
     * @param width : number
     * the width of the digit
     * @param height : number
     * the height of the digit
     * @param number : number
     * the digit to write
     */
    constructor(x, y, color, width, height, number) {
        super(x, y, color, width, height);
        this._number = number
        this._group = new Group(0, 0);
        this._bar_top_left = new Group(0,30);
        this._bar_top_right = new Group(220,30);
        this._bar_bottom_left = new Group(0, 250);
        this._bar_bottom_right = new Group(220, 250);
        this._bar_top_middle = new Group(230, 0);
        this._bar_middle_middle = new Group(230,220);
        this._bar_bottom_middle = new Group(230, 440);

        this._light_bar_top_left = true;
        this._light_bar_top_middle = true;
        this._light_bar_top_right = true;
        this._light_bar_middle_middle = true;
        this._light_bar_bottom_left = true;
        this._light_bar_bottom_middle = true;
        this._light_bar_bottom_right = true;

        this._group.appendShape(this._bar_top_left)
        this._group.appendShape(this._bar_top_right)
        this._group.appendShape(this._bar_bottom_left)
        this._group.appendShape(this._bar_bottom_right)
        this._group.appendShape(this._bar_top_middle)
        this._group.appendShape(this._bar_middle_middle)
        this._group.appendShape(this._bar_bottom_middle)

        this._div = this._group.div;

        this._color = color;
        this.init_bars();

        this.number = number;

    }

    set color(value){
    }

    get number(){
        return this._number;
    }

    /**
     * @param value : number
     * The length must be 1, no more, no less
     */
    set number(value){
        if (!isNaN(value) && value.toString().length === 1){
            this._number = value;
        }
        switch (value) {
            case 0:
                this.light_bars = [true, true, true, false, true, true, true];
            break;
            case 1:
                this.light_bars = [true, false, false, false, true, false, false];
                break;
            case 2:
                this.light_bars = [false, true, true, true, true, true, false];
                break;
            case 3:
                this.light_bars = [false, true, true, true, false, true, true];
                break;
            case 4:
                this.light_bars = [true, false, true, true, false, false, true];
                break;
            case 5:
                this.light_bars = [true, true, false, true, false, true, true];
                break
            case 6:
                this.light_bars = [true, true, false, true, true, true, true];
                break;
            case 7:
                this.light_bars = [false, true, true, false, false, false, true];
                break;
            case 8:
                this.light_bars = new Array(7).fill(true);
                break;
            case 9:
                this.light_bars = [true, true, true, true, false, true, true];
                break;
        }
    }

    init_bars()
    {
        let rect_top_left = new Rect(0, 20, this._color, 40, 160)
        let triangle_1_top_left = new Triangle(0, 0,this._color, 40, 20)
        let triangle_2_top_left = new Triangle(0, 180, this._color, 40, 20)
        triangle_2_top_left.rotate(180)
        this._bar_top_left.appendShape(rect_top_left)
        this._bar_top_left.appendShape(triangle_1_top_left)
        this._bar_top_left.appendShape(triangle_2_top_left)
        let rect_top_right = new Rect(0, 20, this._color, 40, 160)
        let triangle_1_top_right = new Triangle(0, 0,this._color, 40, 20)
        let triangle_2_top_right = new Triangle(0, 180, this._color, 40, 20)
        triangle_2_top_right.rotate(180)
        this._bar_top_right.appendShape(rect_top_right)
        this._bar_top_right.appendShape(triangle_1_top_right)
        this._bar_top_right.appendShape(triangle_2_top_right)
        let rect_bottom_left = new Rect(0, 20, this._color, 40, 160)
        let triangle_1_bottom_left = new Triangle(0, 0,this._color, 40, 20)
        let triangle_2_bottom_left = new Triangle(0, 180, this._color, 40, 20)
        triangle_2_bottom_left.rotate(180)
        this._bar_bottom_left.appendShape(rect_bottom_left)
        this._bar_bottom_left.appendShape(triangle_1_bottom_left)
        this._bar_bottom_left.appendShape(triangle_2_bottom_left)
        let rect_bottom_right = new Rect(0, 20, this._color, 40, 160)
        let triangle_1_bottom_right = new Triangle(0, 0,this._color, 40, 20)
        let triangle_2_bottom_right = new Triangle(0, 180, this._color, 40, 20)
        triangle_2_bottom_right.rotate(180)
        this._bar_bottom_right.appendShape(rect_bottom_right)
        this._bar_bottom_right.appendShape(triangle_1_bottom_right)
        this._bar_bottom_right.appendShape(triangle_2_bottom_right)
        let rect_top = new Rect(0, 20, this._color, 40, 160);
        let triangle_1_top = new Triangle(0, 0, this._color, 40, 20)
        let triangle_2_top = new Triangle(0, 180, this._color, 40, 20)
        triangle_2_top.rotate(180);
        this._bar_top_middle.appendShape(rect_top)
        this._bar_top_middle.appendShape(triangle_1_top)
        this._bar_top_middle.appendShape(triangle_2_top)
        this._bar_top_middle.rotate(90)
        let rect_middle = new Rect(0, 20, this._color, 40, 160);
        let triangle_1_middle = new Triangle(0, 0, this._color, 40, 20)
        let triangle_2_middle = new Triangle(0, 180, this._color, 40, 20)
        triangle_2_middle.rotate(180);
        this._bar_middle_middle.appendShape(rect_middle)
        this._bar_middle_middle.appendShape(triangle_1_middle)
        this._bar_middle_middle.appendShape(triangle_2_middle)
        this._bar_middle_middle.rotate(90)
        let rect_bottom = new Rect(0, 20, this._color, 40, 160);
        let triangle_1_bottom = new Triangle(0, 0, this._color, 40, 20)
        let triangle_2_bottom = new Triangle(0, 180, this._color, 40, 20)
        triangle_2_bottom.rotate(180);
        this._bar_bottom_middle.appendShape(rect_bottom)
        this._bar_bottom_middle.appendShape(triangle_1_bottom)
        this._bar_bottom_middle.appendShape(triangle_2_bottom)
        this._bar_bottom_middle.rotate(90)
    }

    get light_bar_top_left() {
        return this._light_bar_top_left;
    }

    set light_bar_top_left(value) {
        this._light_bar_top_left = value;
        if(value){
            this._bar_top_left.color = this._color;
        }else{
            this._bar_top_left.color = "transparent"
        }
    }

    get light_bar_top_middle() {
        return this._light_bar_top_middle;
    }

    set light_bar_top_middle(value) {
        this._light_bar_top_middle = value;
        if(value){
            this._bar_top_middle.color = this._color;
        }else{
            this._bar_top_middle.color = "transparent"
        }
    }

    get light_bar_top_right() {
        return this._light_bar_top_right;
    }

    set light_bar_top_right(value) {
        this._light_bar_top_right = value;
        if(value){
            this._bar_top_right.color = this._color;
        }else{
            this._bar_top_right.color = "transparent"
        }
    }

    get light_bar_middle_middle() {
        return this._light_bar_middle_middle;
    }

    set light_bar_middle_middle(value) {
        this._light_bar_middle_middle = value;
        if(value){
            this._bar_middle_middle.color = this._color;
        }else{
            this._bar_middle_middle.color = "transparent"
        }
    }

    get light_bar_bottom_left() {
        return this._light_bar_bottom_left;
    }

    set light_bar_bottom_left(value) {
        this._light_bar_bottom_left = value;
        if(value){
            this._bar_bottom_left.color = this._color;
        }else{
            this._bar_bottom_left.color = "transparent"
        }
    }

    get light_bar_bottom_middle() {
        return this._light_bar_bottom_middle;
    }

    set light_bar_bottom_middle(value) {
        this._light_bar_bottom_middle = value;
        if(value){
            this._bar_bottom_middle.color = this._color;
        }else{
            this._bar_bottom_middle.color = "transparent"
        }
    }

    get light_bar_bottom_right() {
        return this._light_bar_bottom_right;
    }

    set light_bar_bottom_right(value) {
        this._light_bar_bottom_right = value;
        if(value){
            this._bar_bottom_right.color = this._color;
        }else{
            this._bar_bottom_right.color = "transparent"
        }
    }

    set light_bars(value){
        this.light_bar_top_left = value[0]
        this.light_bar_top_middle = value[1]
        this.light_bar_top_right = value[2]
        this.light_bar_middle_middle = value[3]
        this.light_bar_bottom_left = value[4]
        this.light_bar_bottom_middle = value[5]
        this.light_bar_bottom_right = value[6]
    }
}

