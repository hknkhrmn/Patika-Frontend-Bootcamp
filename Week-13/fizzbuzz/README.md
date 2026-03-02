# FizzBuzz Test Projesi

Bu proje, klasik FizzBuzz problemini iki farklı yaklaşımla uygular: biri `if` ifadeleri kullanarak, diğeri ise `switch` ifadeleri kullanarak.

## Proje Yapısı

```
fizzbuzz-test
├── src
│   ├── fizzbuzzIf.js        # If ifadeleri kullanarak FizzBuzz uygulaması
│   ├── fizzbuzzSwitch.js    # Switch ifadeleri kullanarak FizzBuzz uygulaması
├── test
│   ├── fizzbuzzIf.test.js   # fizzbuzzIf fonksiyonu için birim testler
│   ├── fizzbuzzSwitch.test.js # fizzbuzzSwitch fonksiyonu için birim testler
├── package.json             # npm yapılandırma dosyası
└── README.md                # Proje dokümantasyonu
```

## FizzBuzz Mantığı

- **fizzbuzzIf**: Bu fonksiyon, bir sayının 3, 5 veya her ikisinin katı olup olmadığını `if` ifadeleri kullanarak kontrol eder ve şu değerleri döndürür:
  - 3'ün katları için "Fizz"
  - 5'in katları için "Buzz"
  - Her ikisinin katları için "FizzBuzz"
  - Diğer tüm durumlar için sayının kendisi

- **fizzbuzzSwitch**: Bu fonksiyon, `fizzbuzzIf` ile aynı mantığı uygular ancak çıktıyı belirlemek için `switch` ifadesi kullanır.

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