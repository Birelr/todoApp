const addBtn = document.getElementById('add');
const taskInput = document.getElementById('input');
const clearBtn = document.getElementById('clear');
const list = document.getElementById('list');

let taskList = JSON.parse(localStorage.getItem('taskList')) || [];

function addTask() {
    let task = taskInput.value.trim(); 
    if (task) {
        taskList.push(task);
        updateTaskList();
    }
    taskInput.value = '';
}

function updateTaskList() {
    list.innerHTML = ''; 

    taskList.forEach((task, index) => {
        const li = document.createElement('li');
        li.classList.add('lielement'); 

        li.innerHTML = `
            <div class="formcheck">
                <div class="taskl">
                    <input class="chbx" type="checkbox" id="task_${index}">
                    <label for="task_${index}">${task}</label>
                </div>
                <span id="iconspan">
                <svg class="img1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" id="Ellipsis"><path d="M576 736v192q0 40-28 68t-68 28H288q-40 0-68-28t-28-68V736q0-40 28-68t68-28h192q40 0 68 28t28 68zm512 0v192q0 40-28 68t-68 28H800q-40 0-68-28t-28-68V736q0-40 28-68t68-28h192q40 0 68 28t28 68zm512 0v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68V736q0-40 28-68t68-28h192q40 0 68 28t28 68z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                <div id="dropdown" class="dropdown-content">
                    <div id="deletebtn" onclick="deleteTask(${index})"><i class="fa-regular fa-trash-can"></i> Delete</div>
                    <div id="editbtn" onclick="editTask(${index})"><i class="fa-regular fa-pen-to-square"></i> Edit</div>
                </div>
                </span>
            </div>
        `;
        const settBtn = li.querySelector('#iconspan');
        const dropdownContent = li.querySelector('#dropdown');
        settBtn.addEventListener('click', () => { 
            dropdownContent.style.display = dropdownContent.style.display === "none" ? "block" : "none";
        });

        list.appendChild(li);
    });

    localStorage.setItem('taskList', JSON.stringify(taskList));
}

function deleteTask(index) {
    taskList.splice(index, 1);
    updateTaskList();
}
function editTask(index) {
    let task = taskList[index];
    taskInput.value = task;
    taskList.splice(index, 1);
    updateTaskList();
}

clearBtn.addEventListener('click', () => {
    taskList = []; 
    updateTaskList();
});
document.addEventListener('DOMContentLoaded', updateTaskList); 
document.addEventListener('click', (event) => {
});
addBtn.addEventListener('click', addTask);
taskInput.addEventListener('keydown', (event) => {
    if (event.key === 'Enter') {
        addTask();
    }
}); 
