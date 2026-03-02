const fs = require('fs');
const fizzbuzzSwitch = require('../src/fizzbuzzSwitch');

describe('fizzbuzzSwitch', () => {
    test('uses switch statements', () => {
        const sourceCode = fs.readFileSync(require.resolve('../src/fizzbuzzSwitch'), 'utf8');
        expect(sourceCode.includes('switch')).toBe(true);
    });

    test('returns "Fizz" for multiples of 3', () => {
        expect(fizzbuzzSwitch(3)).toBe('Fizz');
        expect(fizzbuzzSwitch(6)).toBe('Fizz');
        expect(fizzbuzzSwitch(9)).toBe('Fizz');
    });

    test('returns "Buzz" for multiples of 5', () => {
        expect(fizzbuzzSwitch(5)).toBe('Buzz');
        expect(fizzbuzzSwitch(10)).toBe('Buzz');
        expect(fizzbuzzSwitch(20)).toBe('Buzz');
    });

    test('returns "FizzBuzz" for multiples of both 3 and 5', () => {
        expect(fizzbuzzSwitch(15)).toBe('FizzBuzz');
        expect(fizzbuzzSwitch(30)).toBe('FizzBuzz');
        expect(fizzbuzzSwitch(45)).toBe('FizzBuzz');
    });

    test('returns the number itself for non-multiples of 3 or 5', () => {
        expect(fizzbuzzSwitch(1)).toBe(1);
        expect(fizzbuzzSwitch(2)).toBe(2);
        expect(fizzbuzzSwitch(4)).toBe(4);
        expect(fizzbuzzSwitch(7)).toBe(7);
    });
});