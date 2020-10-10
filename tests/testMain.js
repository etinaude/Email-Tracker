//const sum = require('/sum');
function sum(x, y) {
    return x + y;
}

test('adds 1 + 2 to equal 3', () => {
    expect(sum(1, 2)).toBe(3);
});