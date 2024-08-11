// Get elements from the DOM
const taskInput = document.getElementById('taskInput');
const addTaskButton = document.getElementById('addTaskButton');
const taskList = document.getElementById('taskList');

// Add event listener to the "Add Task" button
addTaskButton.addEventListener('click', function() {
    const taskText = taskInput.value.trim();

    // Check if the input is not empty
    if (taskText !== "") {
        // Create a new list item (li)
        const li = document.createElement('li');

        // Create a text node with the task text
        const textNode = document.createTextNode(taskText);

        // Append the text node to the list item
        li.appendChild(textNode);

        // Create a "Remove" button
        const removeButton = document.createElement('button');
        removeButton.textContent = 'Remove';

        // Add an event listener to the remove button
        removeButton.addEventListener('click', function() {
            li.remove();
        });

        // Append the remove button to the list item
        li.appendChild(removeButton);

        // Add an event listener to mark the task as completed when clicked
        li.addEventListener('click', function() {
            li.classList.toggle('completed');
        });

        // Append the list item to the task list
        taskList.appendChild(li);

        // Clear the input field
        taskInput.value = '';
    }
});
