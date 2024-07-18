// calculator.test.js
const { add, subtract, multiply, divide } = require('./calculator');

describe('Calculator operations', () => {
    test('adds 1 + 2 to equal 3', () => {
        expect(add(1, 2)).toBe(3);
    });

    test('subtracts 5 - 2 to equal 3', () => {
        expect(subtract(5, 2)).toBe(3);
    });

    test('multiplies 2 * 3 to equal 6', () => {
        expect(multiply(2, 3)).toBe(6);
    });

    test('divides 10 / 2 to equal 5', () => {
        expect(divide(10, 2)).toBe(5);
    });

    test('division by zero throws an error', () => {
        expect(() => divide(10, 0)).toThrow("Division by zero is not allowed.");
    });
});