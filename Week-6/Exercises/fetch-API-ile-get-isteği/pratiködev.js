 // Temel Fetch API Kullanımı
        async function getUserData() {
          try {
            // API'den veri çekme
            const response = await fetch('https://jsonplaceholder.typicode.com/users');
            
            // Response'un başarılı olup olmadığını kontrol et
            if (!response.ok) {
              throw new Error(`HTTP hatası! Status: ${response.status}`);
            }
            
            // JSON formatına dönüştürme
            const users = await response.json();
            
            // Verileri konsola yazdırma
            console.log('Kullanıcı Verileri:', users);
            
            // Her kullanıcının ismini yazdırma
            console.log('\n--- Kullanıcı İsimleri ---');
            users.forEach((user, index) => {
              console.log(`${index + 1}. ${user.name} (${user.email})`);
            });
            
            return users;
            
          } catch (error) {
            console.error('Veri çekerken hata oluştu:', error.message);
          }
        }

        // Fonksiyonu çağırma
        getUserData();


        // Alternatif: Tek bir kullanıcı çekme
        async function getSingleUser(userId) {
          try {
            const response = await fetch(`https://jsonplaceholder.typicode.com/users/${userId}`);
            
            if (!response.ok) {
              throw new Error(`HTTP hatası! Status: ${response.status}`);
            }
            
            const user = await response.json();
            console.log('\nTek Kullanıcı Verisi:', user);
            
            return user;
            
          } catch (error) {
            console.error('Kullanıcı verisi çekilemedi:', error.message);
          }
        }

        // Örnek kullanım
        getSingleUser(1);