const isPalindrome = require("../src/palinderom");

test("palindrome kelimeyi tanımlama", () => {
  expect(isPalindrome("kek")).toBe(true);
  expect(isPalindrome("kayak")).toBe(true);
  expect(isPalindrome("level")).toBe(true);
});

test("palindrome olmayan kelimeyi tanımlama", () => {
  expect(isPalindrome("hello")).toBe(false);
  expect(isPalindrome("world")).toBe(false);
});

test("büyük/küçük harf duyarsızlığı", () => {
  expect(isPalindrome("Racecar")).toBe(true);
});

test("boş string palindromdur", () => {
  expect(isPalindrome("")).toBe(true);
});

test("geçersiz girdiler için false döner", () => {
  expect(isPalindrome(12321)).toBe(false);
  expect(isPalindrome(null)).toBe(false);
  expect(isPalindrome(undefined)).toBe(false);
});