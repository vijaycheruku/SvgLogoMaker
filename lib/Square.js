const Shape = require('./shapes.js')

//square class inhereting shape properties
class Square extends Shape { 
    constructor(text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor);
    };
    render() {
        // Creates Square in svg
        return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="${this.shapecolor}"/><text x="100" y="100" font-size="70" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
      }
};

module.exports = Square;