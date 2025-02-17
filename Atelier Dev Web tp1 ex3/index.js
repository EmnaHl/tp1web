function createTODO(day , task){
    return `<span><strong>${day}</strong> : ${task}</span>`
}

function addTODO(todo){

    let div = document.createElement('div');
    div.classList.add('todo');
    div.innerHTML = todo;

    //add a delete button to the div
    let deleteButton = document.createElement('button');
    deleteButton.innerHTML = '🗑';
    deleteButton.classList.add('delete');

    deleteButton.addEventListener('click' , e=>{
        div.remove();
    })

    div.appendChild(deleteButton);


    //add the div element to the todos div
    document.querySelector('.todos').appendChild(div);
}

let day = document.querySelector('.day');
let task = document.querySelector('.task');
let addButton = document.querySelector('.submit');

addButton.addEventListener('click' , e=>{
    e.preventDefault();

    if(day.value && task.value) {
        addTODO(createTODO(day.value, task.value));
        day.value = '';
        task.value = '';
    }

})