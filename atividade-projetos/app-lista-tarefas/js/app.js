const inputTask = document.querySelector('input[name=task]')
const btnAdd  = document.querySelector('.btn-add')
const tasksList = document.querySelector('.tasks-list')

function addTask(){
   let divTask = document.createElement('div')
   divTask.className='task'
   
   let liTaskTitle = document.createElement('li')
   liTaskTitle.className='task-title'
   liTaskTitle.textContent = inputTask.value

   let btnExcluir = document.createElement('button')
   btnExcluir.className='btn btn-danger'
   btnExcluir.innerHTML='<i class="bi bi-trash"></i>'
   btnExcluir.addEventListener('click',removeTask)
   
   divTask.appendChild(liTaskTitle)
   divTask.appendChild(btnExcluir)
   tasksList.appendChild(divTask)

   inputTask.value=''
   inputTask.focus()
}
function removeTask(event){
    let btnExcluir = event.target
    let divTask = btnExcluir.parentElement
    divTask.remove()
}
btnAdd.addEventListener('click',addTask)
