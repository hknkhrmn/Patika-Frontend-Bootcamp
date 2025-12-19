function generatePassword(length) {
  // Geçersiz uzunluk kontrolü
  if (typeof length !== 'number' || length <= 0) {
    throw new Error("Geçerli bir uzunluk girin.");
  }

  // Kullanılacak karakterler (sadece harf ve rakam)
  const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  
  let password = '';
  
  // Belirtilen uzunlukta rastgele şifre oluştur
  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * characters.length);
    password += characters[randomIndex];
  }
  
  return password;
}

module.exports = generatePassword;