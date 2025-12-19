const generatePassword = require("../src/PasswordGenerator");

test("şifre belirtilen uzunlukta olmalı", () => {
  expect(generatePassword(8)).toHaveLength(8);
  expect(generatePassword(12)).toHaveLength(12);
});

test("şifre yalnızca harf ve rakam içermeli", () => {
  const password = generatePassword(10);
  expect(password).toMatch(/^[A-Za-z0-9]+$/);
});

test("geçersiz uzunluk için hata vermeli", () => {
  expect(() => generatePassword(0)).toThrow("Geçerli bir uzunluk girin.");
  expect(() => generatePassword(-5)).toThrow("Geçerli bir uzunluk girin.");
  expect(() => generatePassword("abc")).toThrow("Geçerli bir uzunluk girin.");
});