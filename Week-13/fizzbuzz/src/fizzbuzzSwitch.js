function fizzbuzzSwitch(num) {
    // Kodlar buraya gelecek
    const divisibleBy3 = num % 3 === 0;
    const divisibleBy5 = num % 5 === 0;

    switch (true) {
        case divisibleBy3 && divisibleBy5:
            return "FizzBuzz";
        case divisibleBy3:
            return "Fizz";
        case divisibleBy5:
            return "Buzz";
        default:
            return num;
    }
}

module.exports = fizzbuzzSwitch;