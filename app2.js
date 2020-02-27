const form = document.querySelector('#task-form');
const taskList = document.querySelector('.collection');
const clearBtn = document.querySelector('.clear-tasks');
const filter = document.querySelector('#filter');
const taskInput = document.querySelector('#task');

//load event listeners

function loadEventListeners() {
  form.addEventListener('submit', addTask);
  taskList.addEventListener('click', removeTask);
  clearBtn.addEventListener('click', clearTasks);
}

//create addtask function

function addTask (e) {
  if(taskInput === '') {
    alert ("add a task");
  }
  //create li
  const li = document.createElement('li');
  //create text node to append to li
  li.appendChild(document.createTextNode(taskInput.value));
  //create a delete icon
  const link = document.createElement('a');
  link.className = 'delete-item secondary-content';
  link.innerHTML = '<i class="fa fa-remove"></i>'
  //add link to li
  li.appendChild(link);
  //add li to ul
  taskList.appendChild(li);
  //clear the input submitted
  taskInput.value = '';

  e.preventDefault();

}

//REMOVE TASKS
function removeTask (e) {
  if (e.target.parentElement.classList.contains('delete-item')) {
    if(confirm('are you sure?'));
    e.target.parentElement.parentElement.remove();
  }
};

//CLEAR TASKS
function clearTasks (e) {

}


let firstName = "Cip";
let lastName = "de Vries";
let fullName = `My name is: ${firstName} ${lastName}`;
console.log(fullName);
