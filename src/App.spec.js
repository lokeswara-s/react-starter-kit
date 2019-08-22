describe('Examining the syntax of Jest tests', () => {
    it('sums numbers', () => {
        expect(2 + 2).toEqual(4);
        expect(2 + 2).toEqual(4);
    });

    it('sums numbers 2', () => {
        expect(3 + 2).toEqual(5);
        expect(2 + 1).toEqual(3);
    });
});