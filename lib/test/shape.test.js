const { Triangle, Square, Circle } = require('../shape') //Pulls in all the different classes using destructuring assignment this is helpful bacause I don't have to write shape.Circle just Circle it help to keep my code dry 

describe('Shape tests', () => { //this is describing the test suite
  test('the entered shape returns the correct svg shape SQUARE', () => { //a description of the test followed by a call back function
    const square = new Square('Blank', 'Blank', 'Blank') //creating a new item using the Square class with dummy values
    expect(square.render()).toContain('<rect'); //square.render returns a string that contains '<rect', this line checks if that function actually contains what is shown
  });
  test('the entered shape returns the correct svg shape CIRCLE', () => {
    const circle = new Circle('Blank', 'Blank', 'Blank')
    expect(circle.render()).toContain('<circle');
  });
  test('the entered shape returns the correct svg shape TRIANGLE', () => {
    const triangle = new Triangle('Blank', 'Blank', 'Blank')
    expect(triangle.render()).toContain('<polygon');
  });
})