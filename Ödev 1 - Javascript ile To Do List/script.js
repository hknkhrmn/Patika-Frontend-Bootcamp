document.addEventListener("DOMContentLoaded", () => {
  const input = document.getElementById("taskInput");

  // Enter tuşuna basıldığında görev ekle
  input.addEventListener("keypress", function(event) {
    if (event.key === "Enter") {
      addTask();
    }
  });

  // Mevcut görevleri yükle
  loadTasks();
});

function addTask() {
  const input = document.getElementById("taskInput");
  const taskText = input.value.trim();

  if (taskText === "") {
    showToast("Boş görev eklenemez!");
    return;
  }

  const taskList = document.getElementById("taskList");

  const li = document.createElement("li");
  li.innerHTML = `
    <span onclick="toggleDone(this)">${taskText}</span>
    <button onclick="deleteTask(this)">Sil</button>
  `;

  taskList.appendChild(li);
  saveTasks();
  input.value = "";
  input.focus(); // ekleme sonrası tekrar input'a odaklan
}

function deleteTask(button) {
  button.parentElement.remove();
  saveTasks();
}

function toggleDone(span) {
  span.classList.toggle("done");
  saveTasks();
}

// Toast bildirimi
function showToast(message) {
  const toast = document.getElementById("toast");
  toast.innerText = message;
  toast.className = "show";
  setTimeout(() => {
    toast.className = toast.className.replace("show", "");
  }, 2000);
}

// Local Storage işlemleri
function saveTasks() {
  const tasks = [];
  document.querySelectorAll("#taskList li span").forEach(span => {
    tasks.push({
      text: span.innerText,
      done: span.classList.contains("done")
    });
  });
  localStorage.setItem("tasks", JSON.stringify(tasks));
}

function loadTasks() {
  const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
  const taskList = document.getElementById("taskList");

  tasks.forEach(task => {
    const li = document.createElement("li");
    li.innerHTML = `
      <span onclick="toggleDone(this)" class="${task.done ? 'done' : ''}">
        ${task.text}
      </span>
      <button onclick="deleteTask(this)">Sil</button>
    `;
    taskList.appendChild(li);
  });
}