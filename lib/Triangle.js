const Shape = require('./shapes.js')

//Triangle class inhereting shape properties
class Triangle extends Shape { 
    constructor(text, textcolor, shapecolor) {
        super(text, textcolor, shapecolor);
    };
    render() {
        // Creates Triangle in svg
         return `<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="${this.shapecolor}"/><text x="100" y="150" font-size="70" text-anchor="middle" fill="${this.textcolor}">${this.text}</text></svg>`
       }
};

module.exports = Triangle;