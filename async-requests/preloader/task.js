const loader = document.getElementById('loader');
loader.classList.toggle('loader_active');

const coursesContainer = document.getElementById('items');
let courses = {};

const xhr = new XMLHttpRequest();

xhr.addEventListener('readystatechange', () => {
  if (xhr.readyState === 1) {
    loader.classList.toggle('loader_active');
  }
  if (xhr.readyState === 2) {
    console.log(2)
  }
  if (xhr.readyState === 3) {
    console.log(3)
  }
  if (xhr.readyState === 4) {
    courses = JSON.parse(xhr.responseText);
    loader.classList.toggle('loader_active');

    for (let [key, value] of Object.entries(courses.response.Valute)) {
      const courseItem = document.createElement('div');
      courseItem.classList.add('item');

      console.log(value);
      const courseCode = document.createElement('div');
      courseCode.classList.add('item__code');
      courseCode.innerText = value.ID;
      const courseValue = document.createElement('div');
      courseValue.classList.add('item__value');
      courseValue.innerText = value.NumCode;
      const courseCurrency = document.createElement('div');
      courseCurrency.classList.add('item__currency');
      courseCurrency.innerText = value.CharCode;

      courseItem.appendChild(courseCode);
      courseItem.appendChild(courseValue);
      courseItem.appendChild(courseCurrency);

      coursesContainer.appendChild(courseItem);
    }
  }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/slow-get-courses');
xhr.send();