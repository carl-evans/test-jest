const multiply = require('./multiply');

test('correctly multiplies 2 numbers', () => {
    expect(multiply(2, 5)).toBe(10);
});
