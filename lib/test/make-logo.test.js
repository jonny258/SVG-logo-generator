const MakeLogo = require('../make-logo')

describe('MakeLogo', () => { //sort of a parent to the other tests, this is a test suite
    it('should be an instance of MakeLogo class', () => { //this is a individual test that is defined with the it, it is similar to test but jsut more compact
        const logo = new MakeLogo(); //making the item that will be tested

        expect(logo).toBeInstanceOf(MakeLogo); //this tests that the logo that was just created was made in the MakeLogo class
    });
});