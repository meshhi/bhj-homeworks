class AuthForm {
  constructor() {
    this.formContainer = document.querySelector('#signin');
    this.form = document.querySelector('#signin__form');
    this.formInputs = this.form.querySelectorAll('input');
    this.welcome = document.querySelector('#welcome');
    this.signBtn = document.querySelector('#signin__btn');
    this.signoutBtn = document.querySelector('#signout__btn');
    
    this.badAuthAlert = document.createElement('div');
    this.badAuthAlert.style.color = 'red';
    this.badAuthAlert.textContent = 'Неверный логин/пароль';

    this.badAuthAlertGeneral = document.createElement('div');
    this.badAuthAlertGeneral.style.color = 'red';
    this.badAuthAlertGeneral.textContent = 'Не удается авторизоваться!!!';

    this.signBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.signIn();
    });

    this.signoutBtn.addEventListener('click', (e) => {
      this.signOut();
    });

    this.authUrl = 'https://students.netoservices.ru/nestjs-backend/auth';
  }

  setSigned() {
    const currUserId = localStorage.userId;

    if (currUserId) {
      this.formContainer.classList.remove('signin_active');
      this.welcome.classList.add('welcome_active');
  
      this.welcome.querySelector('#user_id').textContent = localStorage.userId;
    }
  }

  signIn() {
    const req = new XMLHttpRequest();
    const data = new FormData(this.form);

    const handleAuth = (event) => {
      if (req.readyState === req.DONE && req.status === 201) {
        try {
          this.badAuthAlertGeneral.remove();
        } catch {

        }

        const response = JSON.parse(req.response);

        if (response.success === true) {
          try {
            this.badAuthAlert.remove();
          } catch {

          }

          localStorage.userId = response.user_id;

          this.setSigned();
        } else {
          this.formContainer.insertAdjacentElement('afterend', this.badAuthAlert);
        }

      }

      if (req.readyState === req.DONE && req.status !== 201) {
        this.formContainer.insertAdjacentElement('afterend', this.badAuthAlertGeneral);
      }
    }
    
    req.open('POST', this.authUrl);
    req.addEventListener('readystatechange', handleAuth);
    req.send(data);

    this.formInputs.forEach(input => input.value = '');
  }

  signOut() {
    this.formContainer.classList.add('signin_active');
    this.welcome.classList.remove('welcome_active');

    delete localStorage.userId;
  }
}

const auth = new AuthForm();
auth.setSigned();