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
                <span id="iconspan"> 
                <svg class="img1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1792 1792" id="Ellipsis"><path d="M576 736v192q0 40-28 68t-68 28H288q-40 0-68-28t-28-68V736q0-40 28-68t68-28h192q40 0 68 28t28 68zm512 0v192q0 40-28 68t-68 28H800q-40 0-68-28t-28-68V736q0-40 28-68t68-28h192q40 0 68 28t28 68zm512 0v192q0 40-28 68t-68 28h-192q-40 0-68-28t-28-68V736q0-40 28-68t68-28h192q40 0 68 28t28 68z" fill="#ffffff" class="color000000 svgShape"></path></svg>
                <div id="dropdown" class="dropdown-content">
                    <div id="deletebtn" onclick="deleteTask()"><i class="fa-regular fa-trash-can"></i> Delete</div>
                    <div id="editbtn"><i class="fa-regular fa-pen-to-square"></i> Edit</div>
                </div>
                </span>
        </li>`;
        ul.insertAdjacentHTML('afterbegin', li);
        let settBtn = document.querySelector('#iconspan');
        let dropdownContent = document.getElementById("dropdown");
        settBtn.addEventListener('click', function () {
            if (dropdownContent.style.display === "none") {
                dropdownContent.style.display = "block";
            } else {
                dropdownContent.style.display = "none";
            }
        });
        let deletebtn = document.getElementById('deletebtn');
        let editbtn = document.getElementById('editbtn');
        
        
        

    }
    taskInput.value = '';
    document.addEventListener('click', function(event) {
        let dropdowns = document.querySelectorAll('.dropdown-content');
        dropdowns.forEach(function(dropdownContent) {
            let settBtn = dropdownContent.previousElementSibling;
            let isClickInside = settBtn.contains(event.target);
    
            if (!isClickInside) {
                dropdownContent.style.display = "none";
            }
        });
    });
    
    
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

function deleteTask() {
    let li = document.querySelector('.lielement');
    li.remove();
}
