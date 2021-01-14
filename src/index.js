const form = document.querySelector("#create-task-form")
const tasks = document.querySelector("#tasks")

function createNewTask(taskInput){
  const newLi = document.createElement("li")
    newLi.textContent = taskInput
  const newButton = document.createElement("button")
    newButton.className = "delete"
    newButton.textContent = "X"
    newButton.dataset.description = taskInput

    newLi.append(newButton)
    tasks.append(newLi)
}

form.addEventListener("submit", function(e){
  e.preventDefault()

  const newTask = e.target[0].value
  
  createNewTask(newTask)

  e.target.reset()
})

const list = document.querySelector("#list")

list.addEventListener('click', function(e){
  if (e.target.matches(".delete")){
    const task = e.target.closest("li")
    task.remove()
  }
})