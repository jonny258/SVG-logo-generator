const ColorsText = require('../colors-text')

describe('colorsText', () =>{
    test('the entered text should be less then or equal to 3 characters', () => {
        const colorsText = new ColorsText('blank', 'blank', 'long');
        expect(() => colorsText.underThree('four')).toThrow('text is too long');
      });
      
})

