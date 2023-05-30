const Shape = require('./shapes.js')

//circle class inhereting shape properties
class Circle extends Shape { 
    //setting text,textcolor and shapecolor
    constructor(text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor);
    };
    render() {
        // Creates Circle in svg
        return  `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="${this.shapecolor}" /><text x="150" y="120" font-size="70" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
      }
};

module.exports = Circle;