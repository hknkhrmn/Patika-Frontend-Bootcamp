# 📌 Rastgele Şifre Üretici

Bu proje, belirtilen uzunlukta **rastgele bir şifre üretir.**  
Şifre sadece **harf (A-Z, a-z) ve rakam (0-9) içerebilir.**

## 🚀 Kullanım

```js
const generatePassword = require("./src/passwordGenerator");

console.log(generatePassword(8));  // Örnek: "A7d9X2zB"
console.log(generatePassword(12)); // Örnek: "4Gf9jH2LmB0Z"
```

## 🧪 Test

```bash
npm install
npm run test
```
Testlerde şunlar kontrol edilir:
✅ Şifre belirtilen uzunlukta mı?
✅ Şifre sadece harf ve rakam içeriyor mu?
✅ Geçersiz uzunluk verildiğinde hata döndürülüyor mu?

## Repo'yu Forklama

1. "Fork" butonuna tıklayarak bu repo'yu kendi GitHub hesabınıza kopyalayın.
2. Kopyalanan repo'yu bilgisayarınıza klonlayın.

```bash
git clone <forkladığınız-repo-url>
```

3. Proje klasörüne gidin.

```bash
cd fizzbuzz-test
```

4. Gerekli bağımlılıkları yükleyin.

```bash
npm install
```

5. Çalışmalarınızı yapın ve Değişikliklerinizi kaydedin.

6. Çalışmanızın doğruluğunu test edin.

```bash
npm run test
```

7. Tüm testler başarılı olduğunda, değişikliklerinizi commit edin ve GitHub hesabınıza pushlayın.

```bash
git add .
git commit -m "<commit-message>"
git push origin main
```

Bu proje, [Patika.dev](https://www.patika.dev) Front-End Web Development Patikası için hazırlanmıştır.