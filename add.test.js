const add = require('./add');

test('correctly adds two numbers', () => {
    expect(add(1, 2)).toBe(3)
});
