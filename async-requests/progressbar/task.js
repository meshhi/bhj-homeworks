const progress = document.getElementById('progress');
const sendBtn = document.getElementById('send');

document.forms[0].addEventListener('submit', function(e) {
  e.preventDefault();

  console.log('submit')

  const xhr = new XMLHttpRequest();
  xhr.addEventListener('readystatechange', function() {
    if (xhr.readyState === 4) {
      console.log(xhr.status);
    }
  })

  xhr.upload.onloadstart = function() {
    progress.value = 0.2;
  }

  xhr.upload.onprogress = function() {
    progress.value = 0.5;
  }

  xhr.upload.onload = function() {
    progress.value = 0.8;
  }

  xhr.onprogress = function() {
    progress.value = 1;
  };


  xhr.open('POST', 'https://students.netoservices.ru/nestjs-backend/upload');

  const formData = new FormData(document.forms[0]);
  xhr.send(formData);
})


