const assert = require('assert');
const calculateNumber = require('./1-calcul');

describe('Test for 1-calcul.js', () => {
  describe('Tests for type SUM', () => {
    it('Addition of only integers', () => {
      assert.strictEqual(calculateNumber('SUM', 12, 5), 17);
      assert.strictEqual(calculateNumber('SUM', 4, 5), 9);
      assert.strictEqual(calculateNumber('SUM', 1, 5), 6);
    });
    it('Addition of floats and integers', () => {
      assert.strictEqual(calculateNumber('SUM', 3.4, 5), 8);
    });
    it('Addition of only floats', () => {
      assert.strictEqual(calculateNumber('SUM', 2.5, 6.7), 10);
    });
    it('Addition of negative integers', () => {
      assert.strictEqual(calculateNumber('SUM', -4, -7), -11);
    });
    it('Addition of a negative and a positive integer', () => {
      assert.strictEqual(calculateNumber('SUM', -6, 7), 1);
    });
    it('Addition of negative floats', () => {
      assert.strictEqual(calculateNumber('SUM', -4.3, -7.9), -12);
    });
    it('Addition of a negative and positive float', () => {
      assert.strictEqual(calculateNumber('SUM', -6.8, 3.2), -4);
    });
    it('Addition of of floats having the .5', () => {
      assert.strictEqual(calculateNumber('SUM', 5.5, 7.5), 14);
    });
    it('Addition of of floats having the .5 (negative and positive)', () => {
      assert.strictEqual(calculateNumber('SUM', 7.5, -4.5), 4);
    });
  });

  describe('Tests for type SUBTRACT', () => {
    it('Subtraction of only integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 12, 5), 7);
      assert.strictEqual(calculateNumber('SUBTRACT', 2, 5), -3);
    });
    it('Subtraction of floats and integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 3.4, 5), -2);
    });
    it('Subtraction of only floats', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 2.5, 6.7), -4);
    });
    it('Subtraction of negative integers', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4, -7), 3);
    });
    it('Subtraction of a negative and a positive integer', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -6, 7), -13);
    });
    it('Subtraction of negative floats', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -4.3, -7.9), 4);
    });
    it('Subtraction of a negative and positive float', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', -6.8, 3.2), -10);
    });
    it('Subtraction of of floats having the .5', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 5.5, 7.5), -2);
    });
    it('Subtraction of of floats having the .5 (negative and positive)', () => {
      assert.strictEqual(calculateNumber('SUBTRACT', 7.5, -4.5), 12);
    });
  });

  describe('Tests for type DIVIDE', () => {
    it('Division of only integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 12, 2), 6);
      assert.strictEqual(calculateNumber('DIVIDE', 2, 2), 1);
      assert.strictEqual(calculateNumber('DIVIDE', 22, 3), 7.333333333333333);
      assert.strictEqual(calculateNumber('DIVIDE', 5, 2), 2.5);
    });
    it('Division of floats and integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 3.4, 5), 0.6);
      assert.strictEqual(calculateNumber('DIVIDE', 6, 2.5), 2);
      assert.strictEqual(calculateNumber('DIVIDE', 7, 3.7), 1.75);
      assert.strictEqual(
        calculateNumber('DIVIDE', 132, 56.77),
        2.3157894736842106
      );
    });
    it('Division of only floats', () => {
      assert.strictEqual(
        calculateNumber('DIVIDE', 2.5, 6.7),
        0.42857142857142855
      );
      assert.strictEqual(calculateNumber('DIVIDE', 9.6, 2.2), 5);
      assert.strictEqual(
        calculateNumber('DIVIDE', 45.6, 5.7),
        7.666666666666667
      );
    });
    it('Division of negative integers', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4, -7), 0.5714285714285714);
    });
    it('Division of a negative and a positive integer', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -6, 7), -0.8571428571428571);
    });
    it('Division of negative floats', () => {
      assert.strictEqual(calculateNumber('DIVIDE', -4.3, -7.9), 0.5);
    });
    it('Division of a negative and positive float', () => {
      assert.strictEqual(
        calculateNumber('DIVIDE', -6.8, 3.2),
        -2.3333333333333335
      );
    });
    it('Division of of floats having the .5', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 5.5, 7.5), 0.75);
    });
    it('Division of of floats having the .5 (negative and positive)', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 7.5, -4.5), -2);
    });
    it('Division by zero', () => {
      assert.strictEqual(calculateNumber('DIVIDE', 10, 0), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 5, 0.4), 'Error');
      assert.strictEqual(calculateNumber('DIVIDE', 10, -0.12), 'Error');
    });
  });
});
