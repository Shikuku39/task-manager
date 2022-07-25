let form = document.querySelector('form')
let tasks = document.querySelector('#tasks')
let deleteButtons = document.querySelectorAll('button')

const countTasks = () => {
    let numberOfTasks = tasks.children.length
    let count = document.querySelector('#count')
    count.textContent = `Tasks: ${numberOfTasks}`
}
countTasks()
const deleteTask = e => {
    let task = e.target.parentElement
    tasks.removeChild(task)
    countTasks()
}

const addTask = e => {
    e.preventDefault()
    let task = document.createElement('div')
    task.className = 'task'
    let p = document.createElement('p')
    p.textContent = document.querySelector('#new-task').value
    let button = document.createElement('button')
    button.textContent = 'Delete'
    button.addEventListener('click', deleteTask)
    task.appendChild(p)
    task.appendChild(button)
    tasks.appendChild(task)
    form.reset()
    countTasks()
}

deleteButtons.forEach(deleteButton => {
    deleteButton.addEventListener('click', deleteTask)
})

form.addEventListener('submit', addTask)
 
