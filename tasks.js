document.addEventListener('DOMContentLoaded', function() {
    chrome.storage.local.get({tasks: []}, function(result) {
      const tasks = result.tasks;
      const taskList = document.getElementById('task-list');
      tasks.forEach(task => {
        const taskCard = document.createElement('div');
        taskCard.className = `task-card ${task.priority}`;
        taskCard.innerHTML = `
          <p><strong>Description:</strong> ${task.description}</p>
          <p><strong>Date:</strong> ${task.date}</p>
          <p><strong>Priority:</strong> ${task.priority}</p>
        `;
        taskList.appendChild(taskCard);
      });
    });
  });
  