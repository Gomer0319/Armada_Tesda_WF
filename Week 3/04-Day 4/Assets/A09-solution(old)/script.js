// Select important elements
const taskForm = document.getElementById('taskForm');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

// Function to create a new task element
function createTaskElement(taskText) {
    // Create the list item
    const li = document.createElement('li');
    li.className = 'task-item';
    li.textContent = taskText;

    // Add click event to toggle completion
    li.addEventListener('click', () => {
        li.classList.toggle('completed'); // Toggle a 'completed' class
    });

    // Create and append the remove button
    const removeBtn = document.createElement('button');
    removeBtn.textContent = 'Remove';
    removeBtn.className = 'remove-btn';

    // Add click event to remove the task
    removeBtn.addEventListener('click', () => {
        taskList.removeChild(li); // Remove the task item from the list
    });

    li.appendChild(removeBtn); // Add the remove button to the task item
    return li;
}

// Event listener for form submission
taskForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent form from refreshing the page

    const taskText = taskInput.value.trim(); // Get the input value and remove extra spaces

    if (taskText === '') {
        alert('Please enter a task!'); // Alert if input is empty
        return;
    }

    const taskItem = createTaskElement(taskText); // Create a new task element
    taskList.appendChild(taskItem); // Append the task element to the list
    taskInput.value = ''; // Clear the input field
});
