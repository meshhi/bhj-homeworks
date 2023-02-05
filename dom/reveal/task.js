const revealBlock = document.querySelector('.reveal');

document.addEventListener('scroll', function(event) {
  const wh = window.innerHeight;
  const {top, bottom} = revealBlock.getBoundingClientRect();

  console.log(`wh, top, bottom`);
  console.log(wh, top, bottom);

  console.log(`(wh - Math.abs(wh - top)) > 0`);
  console.log(wh - Math.abs(wh - top));

  if ((wh - Math.abs(wh - top)) > 0) {
    revealBlock.classList.add('reveal_active');
  } else {
    revealBlock.classList.remove('reveal_active');
  }
})