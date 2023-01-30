const modalMain = document.getElementById('modal_main');
const modalSuccess = document.getElementById('modal_success');
const showSuccess = document.getElementsByClassName('show-success')[0];

modalMain.classList.add('modal_active');


showSuccess.addEventListener('click', (event) => {
  modalSuccess.classList.add('modal_active');
  modalMain.classList.remove('modal_active');
})


const closeBtns = Array.from(document.querySelectorAll('.modal__close'));

closeBtns.forEach(btn => btn.addEventListener('click', (event) => {
  event.target.closest('.modal').classList.remove('modal_active');
}));