const subtract = require('./subtract');

test('correctly subtracts 2 numbers', () => {
    expect(subtract(10, 5)).toBe(5);
});
