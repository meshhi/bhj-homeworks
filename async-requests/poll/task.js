const xhr = new XMLHttpRequest();
let response;

const pollTitle = document.querySelector('.poll__title');
const pollAnswers = document.querySelector('.poll__answers');

xhr.addEventListener('readystatechange', function() {
  if (xhr.readyState === 4) {
    response = JSON.parse(xhr.responseText);

    pollTitle.append(document.createElement('div').innerHTML = response.data.title);
    
    for(let item of response.data.answers) {
      const btnChoose = document.createElement('button');
      btnChoose.classList.add('poll__answer');
      btnChoose.innerHTML = item;
      pollAnswers.appendChild(btnChoose);
    }

    document.addEventListener('click', function(e){
      if (e.target.classList.contains('poll__answer')){
        alert('Спасибо! Ваш голос засчитан')
      }
    })
  }
})

xhr.open('GET', 'https://students.netoservices.ru/nestjs-backend/poll');

xhr.send();