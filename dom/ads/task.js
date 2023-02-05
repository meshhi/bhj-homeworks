const baseRotator = document.querySelector('.rotator');

const changeActiveAd = (baseRotator, intervalIdPrev) => {
  if (intervalIdPrev) {
    clearInterval(intervalIdPrev);
  }

  const rotators = baseRotator.querySelectorAll('.rotator__case');
  const activeRotator = baseRotator.querySelector('.rotator__case_active');
  const activeIndex = [...rotators].indexOf(activeRotator);

  const delay = activeRotator.dataset.speed;
  const color = activeRotator.dataset.color;

  activeRotator.style.color = color;

  let nextActiveIndex = activeIndex + 1;

  if (nextActiveIndex === rotators.length) {
    nextActiveIndex = 0;
  }

  let intervalId = setInterval(() => {
    activeRotator.classList.remove('rotator__case_active');
    rotators[nextActiveIndex].classList.add('rotator__case_active');
    changeActiveAd(baseRotator, intervalId);
  }, delay);

}

changeActiveAd(baseRotator);