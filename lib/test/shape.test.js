const Shape = require('../shape')

describe('Shape', () =>{
    test('the entered shape returns the correct svg shape SQUARE', () => {
        const square = new Shape('square')
        square.returnShape()
        expect(square.svg).toContain('<rect');
      });
      test('the entered shape returns the correct svg shape CIRCLE', () => {
        const circle = new Shape('circle')
        circle.returnShape()
        expect(circle.svg).toContain('<circle');
      });
      test('the entered shape returns the correct svg shape TRIANGLE', () => {
        const triangle = new Shape('triangle')
        triangle.returnShape()
        expect(triangle.svg).toContain('<polygon');
      });
      
})