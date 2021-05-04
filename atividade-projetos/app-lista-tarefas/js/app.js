const inputTask = document.querySelector('input[name=task]')
const btnAdd  = document.querySelector('.btn-add')
const tasksList = document.querySelector('.tasks-list')

function addTask(){
    let li = document.createElement('li')
    li.className='task'

    li.addEventListener('click',function(event){
        taskDelete(event)
})

    let divTaskTitle = document.createElement('div')
    divTaskTitle.className ='task-title'
    divTaskTitle.textContent=inputTask.value

    let divTaskActions = document.createElement('div')
    divTaskActions.className='task-actions'

    let btnExcluir = document.createElement('button')
    btnExcluir.className='btn btn-danger'
    btnExcluir.innerHTML= '<i class="bi bi-trash-fill"></i>'
   

    divTaskActions.appendChild(btnExcluir)

    li.appendChild(divTaskTitle)
    li.appendChild(divTaskActions)

    tasksList.appendChild(li)
    inputTask.value=''
    inputTask.focus()

}
function taskDelete(event){
    let element = event.target
    if(element.tagName=='BUTTON'){

    }    
}
btnAdd.addEventListener('click',addTask)
