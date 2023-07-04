// JavaScript code

// Get DOM elements
const taskForm = document.getElementById('taskForm');
const titleInput = document.getElementById('titleInput');
const descriptionInput = document.getElementById('descriptionInput');
const dueDateInput = document.getElementById('dueDateInput');
const priorityInput = document.getElementById('priorityInput');
const taskList = document.getElementById('taskList');

// Task list
let tasks = [];

// Function to render tasks
function renderTasks() {
  taskList.innerHTML = '';

  tasks.forEach((task) => {
    const taskItem = document.createElement('div');
    taskItem.classList.add('task-item');
    taskItem.innerHTML = `
      <h3>${task.title}</h3>
      <p>${task.description}</p>
      <p>Due: ${task.dueDate}</p>
      <p>Priority: ${task.priority}</p>
      <button class="complete-btn">Complete</button>
      <button class="delete-btn">Delete</button>
    `;

    const completeBtn = taskItem.querySelector('.complete-btn');
    const deleteBtn = taskItem.querySelector('.delete-btn');

    completeBtn.addEventListener('click', () => {
      completeTask(task);
    });

    deleteBtn.addEventListener('click', () => {
      deleteTask(task);
    });

    taskList.appendChild(taskItem);
  });
}

// Function to add a task
function addTask(title, description, dueDate, priority) {
  const task = {
    title,
    description,
    dueDate,
    priority,
    completed: false
  };

  tasks.push(task);
  renderTasks();
}

// Function to complete a task
function completeTask(task) {
  task.completed = true;
  renderTasks();
}

// Function to delete a task
function deleteTask(task) {
  const taskIndex = tasks.indexOf(task);
  if (taskIndex > -1) {
    tasks.splice(taskIndex, 1);
    renderTasks();
  }
}

// Event listener for form submission
taskForm.addEventListener('submit', (e) => {
  e.preventDefault();

  const title = titleInput.value;
  const description = descriptionInput.value;
  const dueDate = dueDateInput.value;
  const priority = priorityInput.value;

  addTask(title, description, dueDate, priority);

  // Reset form inputs
  titleInput.value = '';
  descriptionInput.value = '';
  dueDateInput.value = '';
  priorityInput.value = 'low';
});

// Initial render
renderTasks();
