const assert = require('chai');
const calculateNumber = require('./2-calcul_chai');
const expect = assert.expect;

describe('Test for 2-calcul_chai.js', () => {
  describe('Tests for type SUM', () => {
    it('Addition of only integers', () => {
      expect(calculateNumber('SUM', 12, 5)).to.equal(17);
      expect(calculateNumber('SUM', 4, 5)).to.equal(9);
      expect(calculateNumber('SUM', 1, 5)).to.equal(6);
    });
    it('Addition of floats and integers', () => {
      expect(calculateNumber('SUM', 3.4, 5)).to.equal(8);
    });
    it('Addition of only floats', () => {
      expect(calculateNumber('SUM', 2.5, 6.7)).to.equal(10);
    });
    it('Addition of negative integers', () => {
      expect(calculateNumber('SUM', -4, -7)).to.equal(-11);
    });
    it('Addition of a negative and a positive integer', () => {
      expect(calculateNumber('SUM', -6, 7)).to.equal(1);
    });
    it('Addition of negative floats', () => {
      expect(calculateNumber('SUM', -4.3, -7.9)).to.equal(-12);
    });
    it('Addition of a negative and positive float', () => {
      expect(calculateNumber('SUM', -6.8, 3.2)).to.equal(-4);
    });
    it('Addition of floats having .5', () => {
      expect(calculateNumber('SUM', 5.5, 7.5)).to.equal(14);
    });
    it('Addition of floats having .5 (negative and positive)', () => {
      expect(calculateNumber('SUM', 7.5, -4.5)).to.equal(4);
    });
  });

  describe('Tests for type SUBTRACT', () => {
    it('Subtraction of only integers', () => {
      expect(calculateNumber('SUBTRACT', 12, 5)).to.equal(7);
      expect(calculateNumber('SUBTRACT', 2, 5)).to.equal(-3);
    });
    it('Subtraction of floats and integers', () => {
      expect(calculateNumber('SUBTRACT', 3.4, 5)).to.equal(-2);
    });
    it('Subtraction of only floats', () => {
      expect(calculateNumber('SUBTRACT', 2.5, 6.7)).to.equal(-4);
    });
    it('Subtraction of negative integers', () => {
      expect(calculateNumber('SUBTRACT', -4, -7)).to.equal(3);
    });
    it('Subtraction of a negative and a positive integer', () => {
      expect(calculateNumber('SUBTRACT', -6, 7)).to.equal(-13);
    });
    it('Subtraction of negative floats', () => {
      expect(calculateNumber('SUBTRACT', -4.3, -7.9)).to.equal(4);
    });
    it('Subtraction of a negative and positive float', () => {
      expect(calculateNumber('SUBTRACT', -6.8, 3.2)).to.equal(-10);
    });
    it('Subtraction of floats having .5', () => {
      expect(calculateNumber('SUBTRACT', 5.5, 7.5)).to.equal(-2);
    });
    it('Subtraction of floats having .5 (negative and positive)', () => {
      expect(calculateNumber('SUBTRACT', 7.5, -4.5)).to.equal(12);
    });
  });

  describe('Tests for type DIVIDE', () => {
    it('Division of only integers', () => {
      expect(calculateNumber('DIVIDE', 12, 2)).to.equal(6);
      expect(calculateNumber('DIVIDE', 2, 2)).to.equal(1);
      expect(calculateNumber('DIVIDE', 22, 3)).to.be.closeTo(7.33, 0.01);
      expect(calculateNumber('DIVIDE', 5, 2)).to.equal(2.5);
    });
    it('Division of floats and integers', () => {
      expect(calculateNumber('DIVIDE', 3.4, 5)).to.be.closeTo(0.6, 0.01);
      expect(calculateNumber('DIVIDE', 6, 2.5)).to.equal(2);
      expect(calculateNumber('DIVIDE', 7, 3.7)).to.equal(1.75);
      expect(calculateNumber('DIVIDE', 132, 56.77)).to.be.closeTo(2.31, 0.01);
    });
    it('Division of only floats', () => {
      expect(calculateNumber('DIVIDE', 2.5, 6.7)).to.be.closeTo(0.43, 0.01);
      expect(calculateNumber('DIVIDE', 9.6, 2.2)).to.equal(5);
      expect(calculateNumber('DIVIDE', 45.6, 5.7)).to.be.closeTo(7.67, 0.01);
    });
    it('Division of negative integers', () => {
      expect(calculateNumber('DIVIDE', -4, -7)).to.be.closeTo(0.57, 0.01);
    });
    it('Division of a negative and a positive integer', () => {
      expect(calculateNumber('DIVIDE', -6, 7)).to.be.closeTo(-0.86, 0.01);
    });
    it('Division of negative floats', () => {
      expect(calculateNumber('DIVIDE', -4.3, -7.9)).to.equal(0.5);
    });
    it('Division of a negative and positive float', () => {
      expect(calculateNumber('DIVIDE', -6.8, 3.2)).to.be.closeTo(-2.33, 0.01);
    });
    it('Division of floats having .5', () => {
      expect(calculateNumber('DIVIDE', 5.5, 7.5)).to.equal(0.75);
    });
    it('Division of floats having .5 (negative and positive)', () => {
      expect(calculateNumber('DIVIDE', 7.5, -4.5)).to.equal(-2);
    });
    it('Division by zero', () => {
      expect(calculateNumber('DIVIDE', 10, 0)).to.equal('Error');
      expect(calculateNumber('DIVIDE', 0, 0)).to.equal('Error');
    });
  });
});
