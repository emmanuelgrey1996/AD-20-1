const calculator = require('./js/calculator/calculator.js')
describe("Funciones de calculator", () => {

  // Pruebas para divide()
  test("divide 10 / 2 = 5", () => {
    expect(divide(10, 2)).toBe(5);
  });

  test("divide 0 / 5 = 0", () => {
    expect(divide(0, 5)).toBe(0);
  });

  // Pruebas para multiply()
  test("multiply 3 * 4 = 12", () => {
    expect(multiply(3, 4)).toBe(12);
  });

  test("multiply 0 * 5 = 0", () => {
    expect(multiply(0, 5)).toBe(0);
  });

});