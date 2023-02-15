const msgContainer = document.querySelector('.chat-widget__messages-container');
const randomMsg = ['first', 'second', 'third', 'fourth', ' fifth', 'sixth', 'sevent'];
const scrollMsgContainer = () => msgContainer.scrollTo(0, msgContainer.scrollHeight);

const generateCurrentTime = () => `${new Date().getHours().length === 1 ? '0' + new Date().getHours() : new Date().getHours()}:${(new Date().getMinutes().length === 1 ? '0' + new Date().getMinutes() : new Date().getMinutes())}`

const initiateTimeoutMsgListener = function() {
  const intervalId = setInterval(() => {
    if (document.getElementsByClassName('chat-widget_active').length) {
      msgContainer.innerHTML +=`
      <div class="message">
        <div class="message__time">${generateCurrentTime()}</div>
        <div class="message__text">Не пишешь...</div>
      </div>`;
      scrollMsgContainer();
    }
  }  
  , 30000)

  return intervalId;
};

let intervalId = initiateTimeoutMsgListener();

window.addEventListener('click', function(event) {
  debugger
  if (event.target.closest('.chat-widget') !== null) {
    event.target.closest('.chat-widget').classList.add('chat-widget_active');
  } else {
    document.querySelector('.chat-widget_active').classList.remove('chat-widget_active');
  }
});

document.querySelector('.chat-widget__input').addEventListener('keydown', function(event) {
  if (event.keyCode === 13 && event.target.value) {
    clearInterval(intervalId);
    intervalId = initiateTimeoutMsgListener();
    msgContainer.innerHTML +=   `
    <div class="message message_client">
      <div class="message__time">${generateCurrentTime()}</div>
      <div class="message__text">
        ${event.target.value}
      </div>
    </div>`;

    msgContainer.innerHTML +=`
    <div class="message">
      <div class="message__time">${generateCurrentTime()}</div>
      <div class="message__text">${randomMsg[Math.floor(Math.random() * randomMsg.length)]}</div>
    </div>`;

    event.target.value = '';

    scrollMsgContainer();
  };
})



