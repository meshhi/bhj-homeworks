window.addEventListener('click', function(event) {
  if (event.target.classList.contains('interest__check')) {
    const currentState = event.target.checked;
    if (event.target.closest('.interest').querySelector('ul')) {
      event.target.closest('.interest').querySelectorAll('.interest__check').forEach(checkbox => checkbox.checked = currentState);
    }
  }
})