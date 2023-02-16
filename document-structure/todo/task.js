const addBtn = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');

const generateTaskHTML = (text) => {
  const el = document.createElement('div');
  el.classList.add('task');
  el.innerHTML = `    
  <div class="task__title">
    ${text}
  </div>
  <a href="#" class="task__remove">&times;</a>`;
  return el;
};

const deleteTask = (event) => {
  event.preventDefault();
  event.target.closest('.task').remove();
  localStorage.setItem(`task-list`, taskList.innerHTML);
};

const updateEventListeners = () => {
  document.querySelectorAll('.task__remove').forEach(delBtn => {
    delBtn.removeEventListener('click', deleteTask);
    delBtn.addEventListener('click', deleteTask);
  })
}

if (localStorage.getItem('task-list')) {
  taskList.innerHTML = localStorage.getItem('task-list');
  updateEventListeners();
};

addBtn.addEventListener('click', (event) => {
  if (input.value) {
    taskList.appendChild(generateTaskHTML(input.value));
    localStorage.setItem(`task-list`, taskList.innerHTML);
    updateEventListeners();
  }
})