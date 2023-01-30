const menuLinks = Array.from(document.querySelectorAll('.menu__link'));

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', (event) => {
    event.preventDefault();
    if (menuLink?.nextElementSibling ? menuLink.nextElementSibling.classList.contains('menu_sub') : false) {
      menuLink.nextElementSibling.classList.toggle('menu_active');
    }
  }
)});