const bookController = document.querySelector('.book__control_font-size');
const bookControllerBtns = bookController.querySelectorAll('.font-size');

function updateFontSize(bookController) {
  let activeBookControllerBtn = bookController.querySelector('.font-size_active');
  let activeFontSize = activeBookControllerBtn?.dataset.size;

  let bookFs;

  switch(activeFontSize) {
    case("small"):
      bookFs = "book_fs-small";
      break;
    case("big"):
      bookFs = "book_fs-big";
      break;
    default:
      break;
  }

  const bookContainer = bookController.closest('.book');
  bookContainer.className = "book";
  bookFs ? bookContainer.classList.add(bookFs) : false;
}

bookControllerBtns.forEach((fsBtn, index, bookControllerBtns) => {
  fsBtn.addEventListener('click', (event) => {
    event.preventDefault();
    bookControllerBtns.forEach(fsBtn => fsBtn.classList.remove('font-size_active'));
    event.target.classList.add('font-size_active');
    updateFontSize(bookController);
  })
})


