// --- JAVASCRIPT KODU ---
        
        // Tıklama ile üstünü çizme (tamamlama)
        function toggleComplete(taskDiv) {
            // "completed" sınıfını ekle/çıkar.
            taskDiv.classList.toggle('completed');

            // Tamamlama ibaresini güncellemek için span etiketini bul
            const statusSpan = taskDiv.querySelector('.completion-status');
            
            if (taskDiv.classList.contains('completed')) {
                statusSpan.textContent = 'TAMAMLANDI';
            } else {
                statusSpan.textContent = 'YAPILACAK';
            }
        }

        // Görev ekleme fonksiyonu
        function addTask() {
            let taskName = document.getElementById('taskInput').value.trim();
            let category = document.getElementById('categorySelect').value;
            let tasksArea = document.getElementById('tasksArea');
            
            if (taskName === '') {
                alert("Lütfen bir görev adı girin.");
                return;
            }

            // Yeni görev öğesini (div) oluştur
            let newTask = document.createElement('div');
            
            // Kategoriye göre BG sınıfını ve temel sınıfı ekle
            newTask.className = `task-item ${category}-bg`; 
            
            // İçeriği oluştur (Görev metni + Başlangıç ibaresi)
            newTask.innerHTML = `
                <span style="flex-grow: 1;">${taskName}</span>
                <span class="completion-status">YAPILACAK</span>
            `;
            
            // ÖNEMLİ: Tüm div'e tıklama olayını atıyoruz.
            newTask.setAttribute('onclick', 'toggleComplete(this)');
            
            // Listeye ekle ve Input'u temizle
            tasksArea.appendChild(newTask);
            document.getElementById('taskInput').value = '';
        }