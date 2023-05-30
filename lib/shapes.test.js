//importing shape classes
const Triangle = require('./Triangle');
const Square = require('./Square');
const Circle = require('./Circle');

// unit test case to check circle
describe("Test For Circle", () => {
    test("test a circle with red and white", () => {
      const circle = new Circle('vij','white','red');
      expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><circle cx="150" cy="100" r="100" fill="red" /><text x="150" y="120" font-size="70" text-anchor="middle" fill="white">vij</text></svg>`);
    });
  });

// unit test case to check triangle
describe("Test For Triangle", () => {
    test("test a traingle with red and white", () => {
      const traingle = new Triangle('vij','white','red');
      expect(traingle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><polygon points="100, 15 200, 200 0, 200" fill="red"/><text x="100" y="150" font-size="70" text-anchor="middle" fill="white">vij</text></svg>`);
    });
  });

// unit test case to check square
describe("Test For Square", () => {
    test("test a square with red and white", () => {
      const circle = new Square('vij','white','red');
      expect(circle.render()).toEqual(`<svg version="1.1" width="300" height="200" xmlns="http://www.w3.org/2000/svg"><rect width="200" height="200" fill="red"/><text x="100" y="100" font-size="70" text-anchor="middle" fill="white">vij</text></svg>`);
    });
  });
