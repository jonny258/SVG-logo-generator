const {Triangle, Square, Circle} = require('../shape')

describe('Shape', () =>{
    test('the entered shape returns the correct svg shape SQUARE', () => {
        const square = new Square('Blank', 'Blank','Blank','square')
        expect(square.render()).toContain('<rect');
      });
      test('the entered shape returns the correct svg shape CIRCLE', () => {
        const circle = new Circle('Blank', 'Blank','Blank','circle')
        expect(circle.render()).toContain('<circle');
      });
      test('the entered shape returns the correct svg shape TRIANGLE', () => {
        const triangle = new Triangle('Blank', 'Blank','Blank','triangle')
        expect(triangle.render()).toContain('<polygon');
      });
})