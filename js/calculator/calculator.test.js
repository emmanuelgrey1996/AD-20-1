const calculator = require('./calculator');

test('adds 1 + 2 to equal 3', () => {
  expect(calculator.add(1, 2)).toBe(3);
});

test('adds -4 + 8 to equal 4', () => {
  expect(calculator.add(-4, 8)).toBe(4);
});

test('subtract 5 - 4 to equal 1', () => {
  expect(calculator.subtract(5, 4)).toBe(1);
});

test('subtract -5 - -10 to equal 5', () => {
  expect(calculator.subtract(-5, -10)).toBe(5);
});
const { divide, multiply } = require("./calculator");

describe("divide function", () => {
  test("dividing by 0 returns a warning", () => {
    expect(divide(10, 0)).toBe("No se puede dividir entre 0");
  });

  test("normal division works", () => {
    expect(divide(10, 2)).toBe(5);
  });
});

describe("multiply function", () => {
  test("2 * 3 = 6", () => {
    expect(multiply(2, 3)).toBe(6);
  });

  test("-2 * 3 = -6", () => {
    expect(multiply(-2, 3)).toBe(-6);
  });
});