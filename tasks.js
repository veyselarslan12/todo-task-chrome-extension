document.addEventListener('DOMContentLoaded', function() {
  chrome.storage.local.get({tasks: []}, function(result) {
    const tasks = result.tasks;
    const taskList = document.getElementById('task-list');
    tasks.forEach((task, index) => {
      const taskCard = document.createElement('div');
      taskCard.className = `task-card ${task.priority}`;
      taskCard.innerHTML = `
        <p><strong>Description:</strong> ${task.description}</p>
        <p><strong>Date:</strong> ${task.date}</p>
        <p><strong>Priority:</strong> ${task.priority}</p>
        <button class="delete-button" data-index="${index}">X</button>
      `;
      taskList.appendChild(taskCard);
    });

    document.querySelectorAll('.delete-button').forEach(button => {
      button.addEventListener('click', function() {
        const index = this.getAttribute('data-index');
        deleteTask(index);
      });
    });
  });
});

function deleteTask(index) {
  chrome.storage.local.get({tasks: []}, function(result) {
    let tasks = result.tasks;
    tasks.splice(index, 1);
    chrome.storage.local.set({tasks: tasks}, function() {
      location.reload();
    });
  });
}
