const boxel = document.getElementById('box');
const listcontainerel = document.getElementById('listcontainer');
const mainel = document.getElementById("main");

// Function to add task
function addTask() {
    const existingMessage = document.getElementById('noTaskMessage');

    if (boxel.value === '') {
        // If no task was entered, show the message
        if (!existingMessage) {
            let notask = document.createElement("span");
            notask.innerHTML = "No task entered, try again!";
            notask.id = 'noTaskMessage';
            notask.classList.add('error-message');
            mainel.appendChild(notask);
        }
    } else {
        // If a task is added, remove the "no task" message (if it exists)
        if (existingMessage) {
            existingMessage.remove();
        }

        // Add the task to the list
        let li = document.createElement("li");
        li.innerHTML = boxel.value;
        listcontainerel.appendChild(li);

        // Add the delete button (X) to the task
        let span = document.createElement("span");
        span.innerHTML = '\u00d7';
        li.appendChild(span);

        // Clear the input box
        boxel.value = '';

        // Save the task list to local storage
        saveData();
    }
}

// Add event listener for click actions on the task list
listcontainerel.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Function to save task list data to local storage
function saveData() {
    localStorage.setItem("data", listcontainerel.innerHTML);
}

// Function to display saved task list data from local storage
function showData() {
    listcontainerel.innerHTML = localStorage.getItem("data");
}


function clearAllTasks() {
    listcontainerel.innerHTML = ''; // Clear the task list
    saveData(); // Save the empty state to localStorage
}

// Allow editing of tasks
listcontainerel.addEventListener("dblclick", function(e) {
    if (e.target.tagName === "LI") {
        let currentTask = e.target;
        let currentText = currentTask.firstChild.textContent;

        // Create an input element to edit the task
        let input = document.createElement("input");
        input.type = "text";
        input.value = currentText;
        input.classList.add("edit-input");
        currentTask.innerHTML = '';  // Clear the current task content
        currentTask.appendChild(input);

        // Handle saving the edited task
        input.addEventListener("keydown", function(event) {
            if (event.key === "Enter") {
                currentTask.innerHTML = input.value;  // Set the new task content
                let span = document.createElement("span");
                span.innerHTML = '\u00d7';
                currentTask.appendChild(span);
                saveData();
            }
        });

        // Focus on the input
        input.focus();
    }
});



// Show the saved tasks when the page loads
showData();
