let addBtn = document.getElementById('add');
let taskInput = document.getElementById('input');
let clearBtn = document.getElementById('clear');
let taskList = [];


addBtn.addEventListener('click', () => {
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
                <img class="img1" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAs0lEQVR4nO3VSw6CMBRG4Y5kEW5RXKaPEW7F4PyYGzpwYFUSTIueL2lCoPy59EFTkiRJkiRJqwB0wB44Abfc4rqPZ6vIALbAhbIh+jSdwTQCr15+DOmazWCaxk/tCkXUzwDOMwKOhSLqZwDjjICxUET9DOYFXBco4jsZ/NDS6hfYqPUzmH578Ut7J/psCkU0kZHyQTQscJhVz0jxlTFlsf7yxot2yPeej0CjGZIkSZKkf3QHsYLvosSx6nEAAAAASUVORK5CYII=">
            </div>
        </li>`;
        ul.insertAdjacentHTML('afterbegin', li);
    }
    taskInput.value = '';
    console.log(taskList);
});
taskInput.addEventListener("keydown", function (event) {
    if(event.key === "Enter"){
        addBtn.click();
    }
    
})

clearBtn.addEventListener('click', () => {
    let ul = document.getElementById('list');
    ul.innerHTML = '';
    taskList = [];
}  );


