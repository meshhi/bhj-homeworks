class CookieConverter {
  constructor() {
    this.cookieStr = document.cookie;
    this.cookiesSplit = this.splitCookies();
  }

  splitCookies() {
    try{
      const cookiesArr = this.cookieStr.split(';');
      return cookiesArr;
    } catch {
      return null;
    }
  }

  findCookieByKey(key) {
    const foundCookie = this.cookiesSplit.find(
      cookiePair => cookiePair.split('=')[0] === key
    )
    if (foundCookie) {
      return foundCookie.split('=')[1];
    }
  }
}
class PopupController {
  constructor() {
    this.modalContainer = document.getElementById('subscribe-modal');
    this.closeModalBtn = this.modalContainer.querySelector('.modal__close');
    this.closeModalBtn.addEventListener('click', this.closeModal.bind(this));

    const cookie = new CookieConverter();
    
    try {
      if (cookie.findCookieByKey('modalClose') !== 'true') {
        this.openModal();
      }
    } catch(e) {
      console.error(e);
    }
  }

  openModal() {
    this.modalContainer.classList.add('modal_active');
  }

  closeModal() {
    this.modalContainer.classList.remove('modal_active');
    document.cookie = 'modalClose=true;'
  }
}

const popuper = new PopupController();


