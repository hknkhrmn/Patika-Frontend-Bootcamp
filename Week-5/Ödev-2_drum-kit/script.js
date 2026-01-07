// Ses dosyaları
const sounds = {
    'ses1': new Audio('assets/kick.wav'),
    'ses2': new Audio('assets/snare.wav'),
    'ses3': new Audio('assets/hihat.wav'),
    'ses4': new Audio('assets/tom.wav'),
    'ses5': new Audio('assets/tink.wav'),
    'ses6': new Audio('assets/openhat.wav'),
    'ses7': new Audio('assets/boom.wav'),
    'ses8': new Audio('assets/ride.wav'),
    'ses9': new Audio('assets/clap.wav')
};

// Ses çalma fonksiyonu
function playSound(soundName) {
    let sound =sounds[soundName];
    if (sound) {
        sound.currentTime = 0; //Sesi başa sar.
        sound.play();
    }
}

   // Animasyon ekleme
        function addAnimation(element) {
            element.classList.add('active');
            setTimeout(() => {
                element.classList.remove('active');
            }, 200);
        }

        // Tüm drum pad'leri seç
        const drumPads = document.querySelectorAll('.drum-pad');

        // Her drum pad'e tıklama eventi ekle
        drumPads.forEach(pad => {
            pad.addEventListener('click', function() {
                const soundName = this.getAttribute('data-sound');
                playSound(soundName);
                addAnimation(this);
            });
        });

        // Klavye tuşlarına basma eventi
        document.addEventListener('keydown', function(e) {
            const key = e.key.toUpperCase();
            const pad = document.querySelector(`[data-key="${key}"]`);
            
            if (pad) {
                const soundName = pad.getAttribute('data-sound');
                playSound(soundName);
                addAnimation(pad);
            }
        });

        // Sayfa yüklendiğinde bilgilendirme
        console.log('🥁 Drum Kit hazır! Q, W, E, A, S, D, Z, X, C tuşlarına basarak çalabilirsiniz.');
