// Add an event listener to the document that listens for the DOMContentLoaded event
document.addEventListener("DOMContentLoaded", () => {
  // Select the form element with the id "create-task-form"
  const form = document.querySelector("#create-task-form");
  
  // Select the tasks element with the id "tasks"
  const tasks = document.querySelector("#tasks");
  
  // Add an event listener to the form that listens for the submit event
  form.addEventListener("submit", (e) => {
    // Prevent the default form submission behavior
    e.preventDefault();
    
    // Select the task description input field with the id "new-task-description"
    const taskDescription = document.querySelector("#new-task-description");
    
    // Get the value of the task description input field
    const taskValue = taskDescription.value;
    
    // Check if the task description is empty
    if (taskValue === "") {
      // If empty, display an alert box prompting the user to enter a task
      alert("Please write a to do");
    } else {
      // Create a new list item (li) element
      const taskList = document.createElement("li");
      
      // Set the text content of the list item to the task description
      taskList.textContent = taskValue;
      
      // Create a delete button element
      const deleteButton = document.createElement("button");
      
      // Set the text content of the delete button to "x"
      deleteButton.textContent = "x";
      
      // Append the list item to the tasks element
      tasks.appendChild(taskList);
      
      // Append the delete button to the list item
      taskList.appendChild(deleteButton);
      
      // Add an event listener to the delete button that listens for the click event
      deleteButton.addEventListener("click", () => {
        // When the delete button is clicked, remove the corresponding list item
        taskList.remove();
      });
    }
    
    // Reset the form to clear the input field
    form.reset();
  });
});