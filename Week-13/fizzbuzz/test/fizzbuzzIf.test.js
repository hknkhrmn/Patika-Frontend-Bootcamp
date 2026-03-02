const fs = require('fs');
const fizzbuzzIf = require('../src/fizzbuzzIf');

describe('fizzbuzzIf', () => {
    test('if koşulu kullanılmış mı?', () => {
        const sourceCode = fs.readFileSync(require.resolve('../src/fizzbuzzIf'), 'utf8');
        expect(sourceCode.includes('if')).toBe(true);
    });

    for (let i = 1; i <= 50; i++) {
        test(`Verilen input için return değer kontrolü ${i}`, () => {
            expect(fizzbuzzIf(i)).toBe(
                i % 3 === 0 && i % 5 === 0 ? 'FizzBuzz' :
                i % 3 === 0 ? 'Fizz' :
                i % 5 === 0 ? 'Buzz' :
                i
            );
        });
    }
});