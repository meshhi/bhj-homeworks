const btn = document.querySelector('.dropdown');
const btnListItems = document.querySelectorAll('.dropdown__item');

btn.addEventListener('click', function(e) {
  document.querySelector('.dropdown__list').classList.toggle('dropdown__list_active');
});

btnListItems.forEach(item => item.addEventListener('click', function(e) {
  e.preventDefault();
  document.querySelector('.dropdown__value').textContent = e.target.textContent;
}))