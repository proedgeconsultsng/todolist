document.getElementById('addTaskBtn').addEventListener('click', function() {
    let taskText = document.getElementById('taskInput').value;
    if (taskText === '') return;

    let li = document.createElement('li');
    li.textContent = taskText;
    li.addEventListener('click', function() {
      li.classList.toggle('completed');
    });

    document.getElementById('taskList').appendChild(li);
    document.getElementById('taskInput').value = ''; // Clear input
  });