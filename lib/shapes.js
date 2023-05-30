//shape class which is parent and is inherited by circle,triangle and square
class Shape {
    constructor(text, textcolor, shapecolor) {
        this.text = text;
        this.textcolor = textcolor;
        this.shapecolor = shapecolor;
    }
};

//exporting shape class
module.exports = Shape;