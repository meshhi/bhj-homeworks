const incButtons = document.querySelectorAll('.product__quantity-control_inc');
const decButtons = document.querySelectorAll('.product__quantity-control_dec');
const addButtons = document.querySelectorAll('.product__add');
const basket = document.querySelector('.cart__products');

const animate = (good) => {
  const endCoords = [good.offsetLeft, good.offsetTop];
  const initGood = document.querySelector(`.product[data-id="${good.dataset.id}"]`);
  const startCoords = [initGood.offsetLeft, initGood.offsetTop];
  const tempImg = good.cloneNode(true);
  document.querySelector(`body`).appendChild(tempImg);
  tempImg.style.position = 'absolute';
  tempImg.style.left = startCoords[0] + 'px';
  tempImg.style.top = startCoords[1] + 'px';

  let [x, y] = [startCoords[0], startCoords[1]];

  const xLen = Math.abs(endCoords[0] - startCoords[0]);
  const yLen = Math.abs(endCoords[1] - startCoords[1]);

  const len = Math.sqrt((xLen ** 2) + (yLen ** 2))
  
  let rangeY = Number(len / xLen);
  let rangeX = Number(len / yLen);

  const intervalId = setInterval(() => {
    tempImg.style.left = x + 'px';
    tempImg.style.top = y + 'px';
    x += rangeX * 5;
    y -= rangeY * 5;

    if (x >= endCoords[0] && y <= endCoords[1]) {
      clearInterval(intervalId);
      tempImg.remove();
    }
  }, 10)

}

const addGoodToBasket = (id, value, imageSrc) => {
  const foundItem = Array.from(document.querySelectorAll('.cart__product')).filter(el => el.dataset.id === id)[0];

  if (foundItem) {
    foundItem.querySelector('.cart__product-count').textContent = Number(foundItem.querySelector('.cart__product-count').textContent) + value;

    animate(foundItem);
  } else {
    const good = document.createElement('div');
    good.classList.add('cart__product');
    good.dataset.id = id;
    good.innerHTML = `  
    <img class="cart__product-image" src=${imageSrc}>
    <div class="cart__product-count">${value}</div>
    `
    basket.appendChild(good);

    animate(good);
  }
}

const handleIncrement = (event) => {
  const count = event.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');

  count.textContent = Number(count.textContent) + 1;
};

const handleDecrement = (event) => {
  const count = event.target.closest('.product__quantity-controls').querySelector('.product__quantity-value');

  if (Number(count.textContent) > 0) {
    count.textContent = Number(count.textContent) - 1;
  }
};

const handleAddToBasket = (event) => {
  const baseProduct = event.target.closest('.product');
  const baseProductId = baseProduct.dataset.id;
  const value = baseProduct.querySelector('.product__quantity-value').textContent;
  const imageSrc = baseProduct.querySelector('img').getAttribute('src');

  addGoodToBasket(baseProductId, Number(value), imageSrc);
};

incButtons.forEach(el => el.addEventListener('click', handleIncrement));
decButtons.forEach(el => el.addEventListener('click', handleDecrement));
addButtons.forEach(el => el.addEventListener('click', handleAddToBasket));


const initiateTraaaaash = () => {
  document.querySelectorAll('.product__add').forEach(el => setInterval(() => el.click(), 100));
}

initiateTraaaaash();