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
    console.log(taskArray)
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
    for (i=0; i < taskArray.length; i++){
        let listItem = document.createElement("li")
        listItem.textContent = taskArray[i]
        taskList.appendChild(listItem)
    }
}
