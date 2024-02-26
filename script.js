let taskList = [ 'Task 1', 'Task 2', 'Task 3', 'Task 4', 'Task 5' ];

taskList.forEach((task, index) => {
    let ul = document.getElementById('list');
    let li = `
    <li>
    <div class="formcheck">
        <input type="checkbox" id="${index+1}">
        <label for="${index+1}">${task}</label>
    </div>
    </li>`;
    ul.insertAdjacentHTML('afterbegin', li);
});