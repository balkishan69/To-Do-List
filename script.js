

const taskInput = document.getElementById('task');
const taskTimeInput = document.getElementById('task-time');
const addTaskButton = document.getElementById('addTask');
const taskList = document.getElementById('taskList');
const completedList = document.getElementById('completedList');

// Add event listener to the taskList and use event delegation for handling Complete and Delete buttons
taskList.addEventListener('click', (e) => {
    const target = e.target;

    // Find the closest task-item container
    const taskItem = target.closest('.task-item');

    if (!taskItem) return; // If no task-item is found, do nothing

    if (target.classList.contains('complete-button')) {
        completeTask(taskItem);
    } else if (target.classList.contains('delete-button')) {
        deleteTask(taskItem);
    }
});

// Function to mark a task as completed
function completeTask(taskItem) {
    // Implement the logic to mark a task as completed here
    // You can add CSS classes or styles to indicate completion
    // You should also remove the task from the to-do list and move it to the completed list
}

// Function to delete a task
function deleteTask(taskItem) {
    // Implement the logic to delete a task here
    // You should remove the task item from the list
}


// Function to create a new task item
function createTaskItem(taskText, taskTime) {
    // Create task item container
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');

    // Create task text element
    const taskTextElement = document.createElement('div');
    taskTextElement.textContent = taskText;
    taskTextElement.classList.add('task-text');
    taskItem.appendChild(taskTextElement);

    // Create task time element
    const taskTimeElement = document.createElement('div');
    taskTimeElement.textContent = `Time: ${formatTime(taskTime)}`;
    taskTimeElement.classList.add('task-time');
    taskItem.appendChild(taskTimeElement);

    // Create complete button
    const completeButton = document.createElement('button');
    completeButton.textContent = 'Complete';
    completeButton.classList.add('complete-button');
    taskItem.appendChild(completeButton);

    // Create delete button
    const deleteButton = document.createElement('button');
    deleteButton.textContent = 'Delete';
    deleteButton.classList.add('delete-button');
    taskItem.appendChild(deleteButton);

    return taskItem;
}

// Function to format the selected time
function formatTime(time) {
    const date = new Date(time);
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    return `${hours}:${minutes}`;
}

// Function to add a new task
function addTask() {
    const taskText = taskInput.value.trim();
    const taskTime = taskTimeInput.value;

    if (taskText === '') return;

    const taskItem = createTaskItem(taskText, taskTime);

    // Add complete and delete functionality here

    // Add the task item to the task list
    taskList.appendChild(taskItem);

    // Clear input fields
    taskInput.value = '';
    taskTimeInput.value = '';
}

// Add task when the button is clicked
addTaskButton.addEventListener('click', addTask);

// Add task when Enter key is pressed
taskInput.addEventListener('keyup', (e) => {
    if (e.key === 'Enter') {
        addTask();
    }
});
