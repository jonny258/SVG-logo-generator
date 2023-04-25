const MakeLogo = require('../make-logo')



describe('MakeLogo', () => {
    it('should be an instance of MakeLogo class', () => {
        const logo = new MakeLogo();

        expect(logo).toBeInstanceOf(MakeLogo);
    });
});