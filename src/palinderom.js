function isPalindrome(word) {
  // Eğer string değilse false döndür
  if (typeof word !== 'string') {
    return false;
  }
  
  // Boş string ise true döndür
  if (word === '') {
    return true;
  }
  
  const cleanWord = word.toLowerCase();
  const reversedWord = cleanWord.split('').reverse().join('');
  return cleanWord === reversedWord;
}

module.exports = isPalindrome;