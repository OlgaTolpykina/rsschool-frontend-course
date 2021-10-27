const newButton = document.querySelector('#new');

newButton.addEventListener('click', function() {
    let task = document.querySelector('#text').value;
    if(task) {
        addNewTask(task);
        document.querySelector('#text').value = "";
    }
});

function addNewTask(task) {
    let span = document.createElement('span');

    let listOfTasks = document.querySelector('#taskstodo');

    let newListItem = document.createElement('li');
    newListItem.classList.add('todo-task');
    let newTask = newListItem.insertAdjacentElement('afterbegin', span);
    newTask.textContent = task;

    let buttons = document.createElement('div');
    buttons.classList.add('buttons');

    let completeButton = buttons.insertAdjacentElement('afterbegin', document.createElement('button'));
    completeButton.classList.add('todo-button', 'complete');
    completeButton.addEventListener('click', completeTask);

    let removeButton = buttons.insertAdjacentElement('beforeend', document.createElement('button'));
    removeButton.classList.add('todo-button', 'remove');
    removeButton.addEventListener('click', removeTask);

    newListItem.appendChild(buttons);
    listOfTasks.insertBefore(newListItem, listOfTasks.childNodes[0]);
}

function completeTask() {
    let item = this.parentNode.parentNode;
	let parent = item.parentNode;
	let parentId = parent.id;
	
	let target = (parentId === "taskstodo") ? document.getElementById("ready"):document.getElementById("taskstodo");

	parent.removeChild(item);
	target.insertBefore(item, target.childNodes[0]);
}

function removeTask() {
    let item = this.parentNode.parentNode; 
	let parent = item.parentNode;

	parent.removeChild(item);
}

let deleteTask = document.querySelectorAll(".remove");
for (let i = 0; i < deleteTask.length; i++){
	deleteTask[i].addEventListener("click", removeTask);
}

var changeTask = document.querySelectorAll(".complete");
for (let i = 0; i < changeTask.length; i++){
	changeTask[i].addEventListener("click", completeTask);
}