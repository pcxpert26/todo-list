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
    displayTask()
   }else {
        window.alert("Cannot add more than 10 items.")
   }
}

function displayTask() {
    let taskOne = document.getElementById("task-one")
    let taskTwo = document.getElementById("task-two")
    let taskThree = document.getElementById("task-three")
    let taskFour = document.getElementById("task-four")
    let taskFive = document.getElementById("task-five")
    let taskSix = document.getElementById("task-six")
    let taskSeven = document.getElementById("task-seven")
    let taskEight = document.getElementById("task-eight")
    let taskNine = document.getElementById("task-nine")
    let taskTen = document.getElementById("task-ten")

    taskOne.textContent = taskArray[0]
    taskTwo.textContent = taskArray[1]
    taskThree.textContent = taskArray[2]
    taskFour.textContent = taskArray[3]
    taskFive.textContent = taskArray[4]
    taskSix.textContent = taskArray[5]
    taskSeven.textContent = taskArray[6]
    taskEight.textContent = taskArray[7]
    taskNine.textContent = taskArray[8]
    taskTen.textContent = taskArray[9]
}



