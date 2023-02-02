const sliderItems = Array.from(document.getElementsByClassName('slider__item'));
const dots = Array.from(document.getElementsByClassName('slider__dot'));
const prevBtn = document.querySelector('.slider__arrow_prev');
const nextBtn = document.querySelector('.slider__arrow_next');

const getCurrentSliderIndex = () => {
  for (let [index, item] of Object.entries(sliderItems)) {
    if (item.classList.contains('slider__item_active')) return parseInt(index);
  }
};

let currentSliderIndex = getCurrentSliderIndex();


const setCurrentSliderIndex = (currentSliderIndex) => {
  if (currentSliderIndex < 0) {
    return sliderItems.length - 1;
  }

  if (currentSliderIndex === sliderItems.length) {
    return 0;
  }

  return currentSliderIndex;
}

const setActiveSlider = (currentSliderIndex) => {
  return sliderItems[currentSliderIndex].classList.add('slider__item_active');
}

const removeActiveSlider = () => {
  sliderItems.forEach(slider => slider.classList.remove('slider__item_active'));
};

const setActiveDot = () => {
  dots.forEach((dot) => {
    dot.style.backgroundColor = 'black';
  })
  dots[currentSliderIndex].style.backgroundColor = 'white';
};
setActiveDot();


prevBtn.addEventListener('click', () => {
  removeActiveSlider();
  currentSliderIndex--;
  currentSliderIndex = setCurrentSliderIndex(currentSliderIndex);
  setActiveSlider(currentSliderIndex);
  setActiveDot();
})

nextBtn.addEventListener('click', () => {
  removeActiveSlider();
  currentSliderIndex++;
  currentSliderIndex = setCurrentSliderIndex(currentSliderIndex);
  setActiveSlider(currentSliderIndex);
  setActiveDot();
})

dots.forEach((dot, index) => dot.addEventListener('click', () => {
    removeActiveSlider();
    currentSliderIndex = setCurrentSliderIndex(index);
    setActiveSlider(currentSliderIndex);
    setActiveDot();
  })
)