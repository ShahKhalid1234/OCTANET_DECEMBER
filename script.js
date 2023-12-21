function addTask() {
    var taskInput = document.getElementById("task-input");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var todoList = document.getElementById("todo-list");

        // Create a new list item
        var listItem = document.createElement("li");
        listItem.innerHTML = taskText + '<button onclick="removeTask(this)">Remove</button>';

        // Append the new list item to the todo list
        todoList.appendChild(listItem);

        // Clear the input field
        taskInput.value = "";
    }
}

function removeTask(button) {
    // Get the parent <li> element and remove it
    var listItem = button.parentNode;
    listItem.parentNode.removeChild(listItem);
}
