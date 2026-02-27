const resimElementi = document.querySelector("#kutu-resim");
const buton = document.querySelector("#degistir-btn");
const skorYazisi = document.querySelector("#skor-tablosu");
const kutu = document.querySelector(".kutu");

let puan = 0; // 1. Puanı başta sıfırlıyoruz

async function resimGetir() {
    try {
        // Puanı artır (Butona her basıldığında çalışır)
        puan++; 
        skorYazisi.textContent = "Puan: " + puan;

        // Yükleniyor efekti
        kutu.innerHTML = '<div class="yukleniyor"></div>';

        const response = await fetch("https://dog.ceo/api/breeds/image/random");
        const data = await response.json();

        kutu.innerHTML = ''; 
        kutu.appendChild(resimElementi); 
        resimElementi.src = data.message;
        resimElementi.style.display = "block";

    } catch (hata) {
        console.error("Hata:", hata);
        kutu.innerHTML = "Hata oluştu!";
    }
}

// Butona tıklandığında hem resim değişecek hem puan artacak
buton.addEventListener("click", resimGetir);