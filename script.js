//access input box content with .value not .innerText
//push tasks into array
//set max array size to 10 and do not call addTask if true
//display alert for taskArray = 10

let taskArray = []

function addTask(){
   if (taskArray.length < 10) {
    let taskName = document.getElementById("task-name")
    let newTask = taskName.value
    taskArray.push(newTask)
    taskName.value = ""
    displayTasks()
   }else {
        window.alert("Cannot add more than 10 items.")
   }
}

function displayTasks() {
    // Clear existing list before entering loop
    let taskList = document.getElementById("task-list")
    taskList.innerHTML = ""
    // Iterate over the taskArray and create list items
    for ( let i=0; i < taskArray.length; i++){
        // Create li for each task
        let listItem = document.createElement("li")
        listItem.textContent = taskArray[i]
        // Create delete button for each task
        let deleteButton = document.createElement("button")
        deleteButton.textContent = "Delete"
        deleteButton.onclick = function() {
            removeTask(i); // Remove task when delete button is clicked
        }
        // Append delete button to list item, then add list item to the task list
        listItem.appendChild(deleteButton)
        taskList.appendChild(listItem)
    }
}
function removeTask(index) {
    taskArray.splice(index,1) // Remove the task at the specified index
    displayTasks() // Refresh the task list after removal
}