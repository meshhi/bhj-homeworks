const tabs = document.querySelector('.tabs');

const tabsBtn = tabs.querySelectorAll('.tab');
const tabsContent = tabs.querySelectorAll('.tab__content');

tabsBtn.forEach(tab => {
  tab.addEventListener('click', (event) => {
    const index = [...tabsBtn].indexOf(tab);

    tabsBtn.forEach(tab => tab.classList.remove('tab_active'));
    tabsContent.forEach(tabContent => tabContent.classList.remove('tab__content_active'));

    tabsBtn[index].classList.add('tab_active');
    tabsContent[index].classList.add('tab__content_active');
  });
})