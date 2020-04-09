const {
    sum
} = require('./CalculatorService');

describe('CalculatorService.sum', () => {
    it('should summ to numbers', () => {
        const result = sum(2, 3);

        expect(result).toEqual(5);
    });
});