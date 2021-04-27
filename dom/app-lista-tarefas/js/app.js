const inputTask = document.querySelector('input[name=task]')
const btnAdd  = document.querySelector('.btn-add')
const tasksList = document.querySelector('.tasks-list')

function addTask(){
    let li = document.createElement('li')
    li.textContent= inputTask.value
    li.className='task'
    tasksList.appendChild(li)
    inputTask.value=''
    inputTask.focus()

}
btnAdd.addEventListener('click',addTask)
