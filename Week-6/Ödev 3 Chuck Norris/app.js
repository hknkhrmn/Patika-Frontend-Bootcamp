// Elemanları seç
const jokeText = document.querySelector('.joke-text');
const button = document.querySelector('#newJokeBtn');

// Şaka getir
function getJoke() {
    fetch('https://api.chucknorris.io/jokes/random')
        .then(response => response.json())
        .then(data => {
            jokeText.textContent = data.value;
        });
}

// Butona tıklayınca yeni şaka
button.addEventListener('click', getJoke);

// Sayfa açılınca ilk şaka
getJoke();