  // Yeni kullanıcı oluşturma (POST İsteği)
        async function createUser() {
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            console.log('📤 POST isteği gönderiliyor...');
            
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        name: name,
                        email: email
                    })
                });
                
                if (!response.ok) {
                    throw new Error(`HTTP Hatası! Status: ${response.status}`);
                }
                
                const data = await response.json();
                
                console.log('✅ Kullanıcı başarıyla oluşturuldu!');
                console.log('Sunucu Yanıtı:', data);
                
            } catch (error) {
                console.error('❌ HATA:', error.message);
            }
        }
        
        // Otomatik çalıştır
        createUser();