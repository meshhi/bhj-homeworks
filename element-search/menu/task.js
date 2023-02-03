const menuLinks = Array.from(document.querySelectorAll('.menu__link'));

menuLinks.forEach((menuLink) => {
  menuLink.addEventListener('click', (event) => {
    if (menuLink?.nextElementSibling) {
      event.preventDefault();
    }

    for(let item of menuLinks) {
      if (item !== menuLink) {
        if (item?.nextElementSibling ? item.nextElementSibling.classList.contains('menu_sub') : false) {
          item.nextElementSibling.classList.remove('menu_active');
        }
      }
    }

    if (menuLink?.nextElementSibling ? menuLink.nextElementSibling.classList.contains('menu_sub') : false) {
      menuLink.nextElementSibling.classList.toggle('menu_active');
    }
  }
)});