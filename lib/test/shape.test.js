const Shape = require('../shape')

describe('Shape', () =>{
    test('the entered shape returns the correct svg shape SQUARE', () => {
        const square = new Shape('square')
        expect(square.svg).toContain('<rect');
      });
      test('the entered shape returns the correct svg shape CIRCLE', () => {
        const circle = new Shape('circle')
        expect(circle.svg).toContain('<rect');
      });
      test('the entered shape returns the correct svg shape TRIANGLE', () => {
        const triangle = new Shape('triangle')
        expect(triangle.svg).toContain('<rect');
      });
      
})