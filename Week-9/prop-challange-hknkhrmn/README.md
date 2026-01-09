# React Prop Challenge

Bu proje, React kullanarak basit bir bileşen oluşturma ve prop'ları kullanma pratiği yapmanızı sağlar. Proje, bir `UserInfo` bileşeni ve bir `App` bileşeni içerir. `App` bileşeni, `UserInfo` bileşenine prop'lar aracılığıyla veri geçirir ve bir butona tıklanarak bu veriler güncellenir.

## Proje Yapısı

```
reactPropChallange
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── README.md
├── vite.config.js
├── public
│   └── vite.svg
├── src
│   ├── App.jsx
│   ├── App.test.jsx
│   ├── index.css
│   ├── main.jsx
│   ├── UserInfo.jsx
```

## Kurulum

1. Bu repo'yu fork'layın ve kendi GitHub hesabınıza kopyalayın.
2. Kopyalanan repo'yu bilgisayarınıza klonlayın.

```bash
git clone <forkladığınız-repo-url>
```

3. Proje klasörüne gidin.

```bash
cd reactPropChallange
```

4. Gerekli bağımlılıkları yükleyin.

```bash
npm install
```

## Kullanım

Projeyi geliştirme modunda çalıştırmak için:

```bash
npm run dev
```

Testleri çalıştırmak için:

```bash
npm run test
```

## Proje Gereksinimleri

1. `UserInfo` bileşeni, `name` ve `age` prop'larını almalı ve bu bilgileri ekranda göstermelidir.
2. `App` bileşeni, `UserInfo` bileşenine başlangıçta `{ name: "Ahmet", age: 25 }` verilerini prop olarak geçmelidir.
3. `App` bileşeninde bir buton bulunmalı ve bu butona tıklandığında `UserInfo` bileşenine geçen veriler `{ name: "Mehmet", age: 30 }` olarak güncellenmelidir.
4. Proje, `@testing-library/react` kullanarak yazılmış testler içermelidir. Testler, prop'ların doğru geçtiğini ve butona tıklanınca verilerin güncellendiğini kontrol etmelidir.

## Testler

Testler, `src/App.test.jsx` dosyasında bulunur ve şu senaryoları kapsar:

- `UserInfo` bileşenine prop'ların doğru geçmesi.
- Butona tıklanınca `UserInfo` bileşenine geçen verilerin güncellenmesi.

Testleri çalıştırmak için:

```bash
npm run test
```

Bu proje, [Patika.dev](https://www.patika.dev) Front-End Web Development Patikası için hazırlanmıştır.