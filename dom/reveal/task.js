const revealBlocks = document.querySelectorAll('.reveal');

revealBlocks.forEach((item) => {
      addEventListener('scroll', function(event) {
      const wh = window.innerHeight;
      const {top, bottom} = item.getBoundingClientRect();

      const whAccur = (wh - top > 0 && top > 0) || (wh - bottom > 0 && bottom > 0);

      if (whAccur) {
        item.classList.add('reveal_active');
      } else {
        item.classList.remove('reveal_active');
      }
    })
  }
)