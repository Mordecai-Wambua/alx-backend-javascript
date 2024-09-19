const assert = require('assert');
const calculateNumber = require('./0-calcul');

describe('Test for 0-calcul.js', () => {
  it('Addition of only integers', () => {
    assert.strictEqual(calculateNumber(12, 5), 17);
  });
  it('Addition of floats and integers', () => {
    assert.strictEqual(calculateNumber(3.4, 5), 8);
  });
  it('Addition of only floats', () => {
    assert.strictEqual(calculateNumber(2.5, 6.7), 10);
  });
  it('Addition of negative integers', () => {
    assert.strictEqual(calculateNumber(-4, -7), -11);
  });
  it('Addition of a negative and a positive integer', () => {
    assert.strictEqual(calculateNumber(-6, 7), 1);
  });
  it('Addition of negative floats', () => {
    assert.strictEqual(calculateNumber(-4.3, -7.9), -12);
  });
  it('Addition of a negative and positive float', () => {
    assert.strictEqual(calculateNumber(-6.8, 3.2), -4);
  });
  it('Addition of of floats having the .5', () => {
    assert.strictEqual(calculateNumber(5.5, 7.5), 14);
  });
  it('Addition of of floats having the .5 (negative and positive)', () => {
    assert.strictEqual(calculateNumber(7.5, -4.5), 4);
  });
});
