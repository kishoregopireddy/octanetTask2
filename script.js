function addItem() {
    var taskInput = document.getElementById('task-input');
    var categorySelect = document.getElementById('category-select');
    var deadlineInput = document.getElementById('deadline-input');
    var prioritySelect = document.getElementById('priority-select');
    var labelInput = document.getElementById('label-input');

    var taskValue = taskInput.value.trim();
    var categoryValue = categorySelect.value;
    var deadlineValue = deadlineInput.value;
    var priorityValue = prioritySelect.value;
    var labelValue = labelInput.value.split(',').map(label => label.trim());

    if (taskValue === '') {
        alert('Please enter a task.');
        return;
    }

    var list = document.getElementById('todo-list');

    var listItem = document.createElement('li');
    listItem.className = 'todo-item';

    var taskDetails = document.createElement('div');
    taskDetails.innerHTML = `
        <strong>${taskValue}</strong><br>
        Category: ${categoryValue}<br>
        Deadline: ${deadlineValue}<br>
        Priority: ${priorityValue}<br>
        Labels: ${labelValue.join(', ')}
    `;

    var deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function () {
        listItem.remove();
    };

    listItem.appendChild(taskDetails);
    listItem.appendChild(deleteButton);

    list.appendChild(listItem);

    // Clear input fields after adding the task
    taskInput.value = '';
    deadlineInput.value = '';
    labelInput.value = '';
}