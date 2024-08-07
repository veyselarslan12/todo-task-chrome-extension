document.getElementById('add-task').addEventListener('click', addTask);
document.getElementById('view-tasks').addEventListener('click', viewTasks);

function addTask() {
  const taskDescription = document.getElementById('task').value;
  const taskDate = document.getElementById('date').value;
  const taskPriority = document.getElementById('priority').value;

  const task = {
    description: taskDescription,
    date: taskDate,
    priority: taskPriority
  };

  chrome.storage.local.get({tasks: []}, function(result) {
    const tasks = result.tasks;
    tasks.push(task);
    chrome.storage.local.set({tasks: tasks}, function() {
      alert('Task added!');
    });
  });
}

function viewTasks() {
  chrome.tabs.create({url: chrome.runtime.getURL('tasks.html')});
}
