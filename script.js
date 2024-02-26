let addBtn = document.getElementById('add');
let taskInput = document.getElementById('input');
let clearBtn = document.getElementById('clear');


let taskList = [];
function addTask() {
    let task = taskInput.value;
    if (task) {
        taskList.push(task);
        let ul = document.getElementById('list');
        let li = `
        <li class="lielement">
            <div class="formcheck">
                <div class="taskl">
                    <input class="chbx" type="checkbox" id="${taskList.length}">
                    <label for="${taskList.length}">${task}</label>
                </div>
                <span id="iconspan"> <svg class="img1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" id="Ellipsis"><path d="M576 736v192q0 40-28 68t-68 28H288q-40 0-68-28t-28-68V736q0-40 28-68t68-28h192q40 0 68 28t28 68zm512 0v192q0 40-28 68t-68 28H800q-40 0-68-28t-28-68V736q0-40 28-68t68-28h192q40 0 68 28t28 68zm512 0v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68V736q0-40 28-68t68-28h192q40 0 68 28t28 68z" fill="#ffffff" class="color000000 svgShape"></path></svg></span>
        </li>`;
        ul.insertAdjacentHTML('afterbegin', li);
        let settBtn = document.querySelector('#iconspan');
        settBtn.addEventListener('click', function () {
            console.log('tıklandı');
        });
    }
    taskInput.value = '';
    console.log(taskList);
}

addBtn.addEventListener('click', addTask);

taskInput.addEventListener("keydown", function (event) {
    if(event.key === "Enter"){
        addTask();
    }
    
})

function iconClick() {
    console.log('clicked');
    
}
clearBtn.addEventListener('click', () => {
    let ul = document.getElementById('list');
    ul.innerHTML = '';
    taskList = [];
}  );
