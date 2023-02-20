const addBtn = document.querySelector('.tasks__add');
const input = document.querySelector('.tasks__input');
const taskList = document.querySelector('.tasks__list');

let tasksList = [];

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
  
  if (event.target.classList.contains('task__remove')) {
    const index = tasksList.findIndex(el => el === event.target.closest('.task').querySelector('.task__title').innerText);
    tasksList.splice(index, 1);
    localStorage.setItem(`task-list`, tasksList);
    event.target.closest('.task').remove();
  }
};

if (localStorage.getItem('task-list')) {
  tasksList = localStorage.getItem('task-list').split(',');

  for (let item of tasksList) {
    taskList.appendChild(generateTaskHTML(item));
  }
};

addBtn.addEventListener('click', (event) => {
  event.preventDefault();
  if (input.value.trim()) {
    taskList.appendChild(generateTaskHTML(input.value));
    tasksList.push(input.value.trim());
    localStorage.setItem(`task-list`, tasksList.join(','));
    input.value = '';
  }
});

taskList.addEventListener('click', deleteTask);